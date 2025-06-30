import Banner from "./Banner";
import Navbar from "./Navbar";
import bg from "../assets/background.jpg";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import MyEducation from "./MyEducation";
import MyTraining from "./MyTraining";
import HireMeForm from "./HireMeForm";
import Projects from "./Projects";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="">
      <div className="sticky top-0 z-100 bg-black/90">
        <Navbar />
      </div>
      {/* Banner section start */}
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-11/12 mx-auto ">
          <Banner />
        </div>
      </div>
      {/* Banner section end */}
      <AboutMe />
      <Skills />
      <MyEducation />
      <MyTraining />
      <Projects />
      <HireMeForm />
      <Footer />
    </div>
  );
};
export default Home;
