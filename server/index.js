const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/key");
const { auth } = require("./middleware/auth");
const { User } = require("./models/User");
const { CommunityPost } = require("./models/CommunityPost");
const multer = require("multer");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//application/jason
app.use(bodyParser.json());
app.use(cookieParser());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World! Hi"));

app.post("/api/users/register", (req, res) => {
  //Put into db from client
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.post("/api/users/login", (req, res) => {
  //check requested email in DB
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "Not matched User Name",
      });
    }
    //check requested password and if it is correct
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "Wrong password" });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        // Save Token
        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});

app.get("/api/users/auth", auth, (req, res) => {
  //여기까지 미들웨어를 통과했다는 것은 Authentication 이 True
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
});

app.get("/api/users/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true,
    });
  });
});

/////////////////////////////////////////////커뮤니티 CRUD/////////////////////////////////////////

// 커뮤니티 포스트 CRUD 라우터
// 글 작성
app.post("/api/community/posts", auth, async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new CommunityPost({
      title,
      content,
      author: req.user._id,
    });

    await newPost.save();

    return res.status(200).json({
      success: true,
      post: newPost,
    });
  } catch (err) {
    console.error(err); // 에러를 콘솔에 출력하여 확인합니다.
    return res.status(500).json({
      success: false,
      message: "글 작성에 실패했습니다.",
      error: err.message,
    });
  }
});

///////////////////////////////////////////////////////Post 기능 start///////////////////////////////////////////////////////
// 포스트 조회
app.get("/api/community/posts", async (req, res) => {
  try {
    // 모든 커뮤니티 포스트 조회하되, content 필드를 선택하지 않음
    const posts = await CommunityPost.find({}, 'title author createdAt updatedAt');

    return res.status(200).json({
      success: true,
      posts,
    });
  } catch (err) {
    // 에러 처리
    return res.status(500).json({
      success: false,
      message: "글 조회에 실패했습니다.",
      error: err.message,
    });
  }
});

// 특정 유저의 커뮤니티 포스트에서 title 필드만 조회
app.get("/api/community/user/:userId/posts", async (req, res) => {
  try {
    const posts = await CommunityPost.find(
      { author: req.params.userId },
      "title"
    );

    return res.status(200).json({
      success: true,
      posts,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "글 조회에 실패했습니다.",
      error: err.message,
    });
  }
});

// 특정 포스트 조회
app.get("/api/community/posts/:postId", auth, async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await CommunityPost.findById(postId, 'title content author createdAt updatedAt');

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "포스트를 찾을 수 없습니다.",
      });
    }

    // 작성자와 로그인한 사용자가 다른 경우, 권한 없음 반환
    if (req.user && post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "해당 포스트를 볼 권한이 없습니다.",
      });
    }

    // 작성자 본인인 경우 content 필드를 포함하여 노출
    return res.status(200).json({
      success: true,
      post,
    });
  } catch (err) {
    // 에러 처리
    return res.status(500).json({
      success: false,
      message: "포스트 조회에 실패했습니다.",
      error: err.message,
    });
  }
});

///////////////////////////////////////////////////////Post 기능 end///////////////////////////////////////////////////////

// 글 수정  http://localhost:5000/api/community/posts/:postId
app.put("/api/community/posts/:postId", auth, async (req, res) => {
  try {
    // 글 수정
    const { title, content } = req.body;
    const updatedPost = await CommunityPost.findByIdAndUpdate(
      req.params.postId,
      { title, content },
      { new: true } // 업데이트된 결과 반환
    );

    return res.status(200).json({
      success: true,
      post: updatedPost,
    });
  } catch (err) {
    // 에러 처리
    return res.status(500).json({
      success: false,
      message: "글 수정에 실패했습니다.",
      error: err.message,
    });
  }
});

// 글 삭제 http://localhost:5000/api/community/posts/:postId 로그인된 사용자만가능
app.delete("/api/community/posts/:postId", auth, async (req, res) => {
  try {
    const postId = req.params.postId;

    // postId에 해당하는 글을 찾고 삭제
    const post = await CommunityPost.findById(postId);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "해당 포스트를 찾을 수 없습니다.",
      });
    }

    // 작성자와 로그인한 사용자가 다른 경우, 권한 없음 반환
    if (req.user && post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "해당 포스트를 삭제할 권한이 없습니다.",
      });
    }

    // 작성자 본인이거나 권한이 있는 경우, 포스트 삭제
    await CommunityPost.findByIdAndDelete(postId);

    return res.status(200).json({
      success: true,
      message: "글이 성공적으로 삭제되었습니다.",
    });
  } catch (err) {
    // 에러 처리
    return res.status(500).json({
      success: false,
      message: "글 삭제에 실패했습니다.",
      error: err.message,
    });
  }
});

/////////////////////////////////////////////커뮤니티 CRUD/////////////////////////////////////////


app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
