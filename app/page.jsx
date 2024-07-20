import Application from "@components/Application";
import Cycle from "@components/Cycle";
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
      </div>
    </section>
  );
};

export default Home;
