import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';


const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      { children }
      <Footer />
    </>
  );
};

export default MainLayout;