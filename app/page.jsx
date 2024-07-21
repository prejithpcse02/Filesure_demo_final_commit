import Application from "@components/Application";
import Cycle from "@components/Cycle";
import Faq from "@components/Faq";
import Footer from "@components/Footer";
import Industries from "@components/Industries";
import Landing from "@components/Landing";
import Navbar from "@components/Navbar";
import Project from "@components/Project";
import Team from "@components/Team";

const Home = () => {
  return (
    <section className="w-screen flex flex-col justify-start relative">
      <div className="sm:px-20 px-6">
        <Navbar />
        <Landing />
      </div>
      <div className="relative">
        <Cycle />
        <Industries />
        <Project />
        <Application />
        <Team />
        <Faq />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
