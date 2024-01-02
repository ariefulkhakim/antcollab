import Image from "next/image";
import IconPuzzle from "@/assets/icon/icon-puzzle.svg";
import IconWindows from "@/assets/icon/icon-windows.svg";
import IconOrbit from "@/assets/icon/icon-orbit.svg";
import IconCells from "@/assets/icon/icon-cells.svg";
import IconSun from "@/assets/icon/icon-sun.svg";
import FeaturesImgTwo from "@/assets/images/Features/features-2.png";
const FeaturesTwo = () => {
  return (
    <>
      <section id="portfolio-1" className="bg-[#19041E] py-20 text-white">
        <div className="container">
          <div className="flex flex-col justify-center text-center text-white items-center mb-14">
            <div className="w-[70%]">
              <p className="text-[16px] font-light mb-3 uppercase">
                IF YOU JOIN AS A
              </p>
              <h2 className="features-text-2">Student</h2>
              <p className="text-[20px] font-normal">
                The ant collaboration platform provides a space for you to share
                the knowledge you have mastered for free or for a fee without
                having to think about who the prospective students are because
                we will take care of this.
              </p>
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full">
            <div data-aos="fade-up" data-aos-delay="5" data-aos-duration="600">
              <div className="flex flex-col justify-center items-center text-center">
                <Image
                  src={IconWindows}
                  alt="icon-windows"
                  width={50}
                  height={50}
                />
                <h3 className="text-[20px] font-bold my-6">Rp 0</h3>
                <p className="text-[16px] px-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="9" data-aos-duration="900">
              <div className="flex flex-col justify-center items-center text-center">
                <Image
                  src={IconOrbit}
                  alt="icon-orbit"
                  width={50}
                  height={50}
                />
                <h3 className="text-[20px] font-bold my-6">
                  Interactive Discussion Room
                </h3>
                <p className="text-[16px] px-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="13"
              data-aos-duration="1300"
            >
              <div className="flex flex-col justify-center items-center text-center">
                <Image
                  src={IconCells}
                  alt="icon-cells"
                  width={50}
                  height={50}
                />
                <h3 className="text-[20px] font-bold my-6">
                  Competent Contributor
                </h3>
                <p className="text-[16px] px-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="19"
              data-aos-duration="1700"
            >
              <div className="flex flex-col justify-center items-center text-center">
                <Image src={IconSun} alt="icon-sun" width={50} height={50} />
                <h3 className="text-[20px] font-bold my-6">
                  Enthusiastic Vibes
                </h3>
                <p className="text-[16px] px-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>

          <div className="my-20 flex flex-col justify-center items-center">
            <p className="mb-8 text-[20px] font-bold">-Student Community-</p>
            <div data-aos="zoom-in" data-aos-delay="5" data-aos-duration="600">
              <Image
                src={FeaturesImgTwo}
                alt="Features-error"
                width={900}
                height={470}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesTwo;
