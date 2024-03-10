import Projects from "@/components/main/projects";
import Stacks from "@/components/main/stacks";
import About from "@/components/main/about";
import Awards from "@/components/main/awards";
import GetInTouch from "@/components/main/getInTouch";
import CV from "@/components/main/cv";
import Educations from "@/components/main/education";
import Experiences from "@/components/main/experience";
import YearsOfExperience from "@/components/main/yearsOfExperience";
import { cn } from "@/lib/utils";
import { Header } from "@/components/shared/header";
import { Outro } from "@/components/shared/Outro";

const Container = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  );
};

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <div className="rounded-[0.5rem] border shadow-md md:shadow-xl container relative">
        <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
          <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
            <Container>
              <Projects />
            </Container>
            <Container>
              <Stacks />
            </Container>
            <Container>
              <CV />
            </Container>
          </div>
          <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
            <Container>
              <About />
            </Container>
            <Container>
              <GetInTouch />
            </Container>
            <Container>
              <Awards />
            </Container>
          </div>
          <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
            <Container>
              <Educations />
            </Container>
            <Container>
              <YearsOfExperience />
            </Container>
            <Container>
              <Experiences />
            </Container>
          </div>
        </div>
      </div>
      <Outro />
    </div>
  );
};
export default Home;
