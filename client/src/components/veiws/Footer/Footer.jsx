import React from 'react' //eslint-disable-line no-unused-vars

const Footer = () => {
  return (
    <footer id="footer" className="footer">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-5 col-md-12 footer-info">
          <a href="index.html" className="logo d-flex align-items-center">
            <span>모발인</span>
          </a>
          <p>건강한 머리, 자신감 넘치는 인생을 위해<br />
              머리는 우리의 자랑스러운 장식품입니다, 책임지는 관리가 필요합니다<br />
              머리 건강은 전반적인 건강의 반영입니다, 소중히 보살펴주세요<br />
              탈모에 대한 지식을 공유하여 더 많은 사람들의 머리 건강을 지키자<br />
          </p>
        </div>
        <div className="col-lg-2 col-6 footer-links">
          <h4></h4>
          <ul>
            <li><a ></a></li>
            <li><a ></a></li>
            <li><a ></a></li>
            <li><a ></a></li>
            <li><a ></a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-6 footer-links">
          <h4>제공 서비스</h4>
          <ul>
            <li><a >모발 이식 시뮬레이션</a></li>
            <li><a >커뮤니티</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>주소</h4>
          <p>충청남도 천안시<br />
            쌍용동, 백석동 <br /><br />
            <strong>Email:</strong> dlghdwo5153@gmail.com<br />
          </p>
        </div>
      </div>
    </div>
    <div className="container mt-4">
      <div className="copyright">
        &copy; <strong><span>모발인</span></strong>
      </div>
      <div className="credits">
        {/* All the links in the footer should remain intact. /}
        {/ You can delete the links only if you purchased the pro version. /}
        {/ Licensing information: https://bootstrapmade.com/license/ /}
        {/ Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/impact-bootstrap-business-website-template/ */}
        Designed by <a >BootstrapMade</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer