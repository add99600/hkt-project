import '../assets/infor.css';

const Infor = () => {
  return (
    <body>
      <header>
      </header>
      <nav className="menu-bar">
        <div className="index" style={{ marginBottom: '200px' }}>
          <br />
          <h3>개발자 정보</h3>
          <h3>페이지 입니다</h3>
        </div>
      </nav>
      <section className="about">
        <header className="name">
        <p>
          <span style={{ color: '#2B3856', fontsize: '10px' }}>모발인 개발자 정보</span>
        </p>
          <div className="contacts">
            <p>📞 010-1234-1234</p>
            <p>📧 dlghdwo5153@gmail.com</p>
            <p>모발인 github: https://github.com/NextAkatsuki</p>
            <p>-----------------------------------</p>
            <p>개발자 github</p>
            <p>조우성: https://github.com/Oldentomato</p>
            <p>이홍재: https://github.com/add99600</p>
            <p>김준호: https://github.com/CalaMiTY0311</p>
          </div>
        </header>
        <br /><br />
        <article className="main-introduction">
        <br />

        </article>
        <br /><br />
      </section>
    </body>
  );
};

export default Infor;