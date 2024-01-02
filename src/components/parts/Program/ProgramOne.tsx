import ProgramCard from "./parts/ProgramCard";
import ProgramOne1 from "@/assets/images/Program/Program-One/program-one-1.png";
import ProgramOne2 from "@/assets/images/Program/Program-One/program-one-2.png";
import ProgramOne3 from "@/assets/images/Program/Program-One/program-one-3.png";
import ProgramOne4 from "@/assets/images/Program/Program-One/program-one-4.png";

const ProgramOne = () => {
  return (
    <>
      <section id="program" className="bg-[#180627] pt-28 py-20">
        <div className="container">
          <div className="flex flex-col justify-center text-center text-white items-center mb-14">
            <div className="w-[70%]">
              <p className="text-[16px] font-light mb-3 uppercase">
                Program | <span className="font-bold">One</span>
              </p>
              <h2 className="mb-3 text-[#9929F1] font-extrabold program-text-title">
                Antcode
              </h2>
              <p className="text-[20px] font-normal">
                Start your journey in the world of technology or design colony.
                You will be connected with ant commanders who have expertise in
                their respective fields. Get access to a community rich in
                knowledge and project opportunities!
              </p>
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full">
            <div data-aos="fade-up" data-aos-delay="5" data-aos-duration="600">
              <ProgramCard image={ProgramOne1} title="Software Development" />
            </div>
            <div data-aos="fade-up" data-aos-delay="9" data-aos-duration="900">
              <ProgramCard image={ProgramOne2} title="UI/UX Design" />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="13"
              data-aos-duration="1300"
            >
              <ProgramCard image={ProgramOne3} title="QA Test" />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="19"
              data-aos-duration="1700"
            >
              <ProgramCard image={ProgramOne4} title="Copy Writer" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramOne;
