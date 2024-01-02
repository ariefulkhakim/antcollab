import ProgramCard from "./parts/ProgramCard";
import ProgramTwo1 from "@/assets/images/Program/Program-Two/program-two-1.png";
import ProgramTwo2 from "@/assets/images/Program/Program-Two/program-two-2.png";
import ProgramTwo3 from "@/assets/images/Program/Program-Two/program-two-3.png";
import ProgramTwo4 from "@/assets/images/Program/Program-Two/program-two-4.png";

const ProgramTwo = () => {
  return (
    <>
      <section id="program-1" className="bg-[#101010] py-20">
        <div className="container">
          <div className="flex flex-col justify-center text-center text-white items-center mb-14">
            <div className="w-[70%]">
              <p className="text-[16px] font-light mb-3 uppercase">
                Program | <span className="font-bold">Two</span>
              </p>
              <h2 className="mb-3 text-[#F3841D] font-extrabold program-text-title">
                Antcreative
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
              <ProgramCard
                image={ProgramTwo1}
                title="Social Media Specialist"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="9" data-aos-duration="900">
              <ProgramCard image={ProgramTwo2} title="Digital Marketers" />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="13"
              data-aos-duration="1300"
            >
              <ProgramCard image={ProgramTwo3} title="Product Photographers" />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="19"
              data-aos-duration="1700"
            >
              <ProgramCard image={ProgramTwo4} title="Movie Makers" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramTwo;
