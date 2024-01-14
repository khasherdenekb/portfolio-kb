import Location from "@/components/main/column-1/location";
import Mode from "@/components/main/column-1/mode";
import Projects from "@/components/main/column-1/projects";
import Stacks from "@/components/main/column-1/stacks";
import About from "@/components/main/column-2/about";
import Awards from "@/components/main/column-2/awards";
import GetInTouch from "@/components/main/column-2/getInTouch";
import CV from "@/components/main/column-3/cv";
import Educations from "@/components/main/column-3/education";
import Experiences from "@/components/main/column-3/experience";
import YearsOfExperience from "@/components/main/column-3/yearsOfExperience";

const Home = () => {
  return (
    <section className="grid grid-cols-6 gap-5">
      {/* Left column */}
      <div className="col-span-2 flex flex-col gap-y-5">
        <div className="grid grid-cols-2 gap-5">
          <Location />
          <Mode />
        </div>
        <Projects />
        <Stacks />
      </div>

      {/* Middle column */}
      <div className="flex flex-col gap-y-5 col-span-2">
        <About />
        <GetInTouch />
        <Awards />
      </div>

      {/* Right column */}
      <div className="col-span-2 flex flex-col gap-y-5">
        <Educations />
        <Experiences />
        <div className="grid grid-cols-2 gap-5">
          <YearsOfExperience />
          <CV />
        </div>
      </div>
    </section>
  );
};
export default Home;
