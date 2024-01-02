import Image from "next/image";
import IconPuzzle from "@/assets/icon/icon-puzzle.svg";
import IconMaze from "@/assets/icon/icon-maze.svg";
import IconQrCode from "@/assets/icon/icon-qr-code.svg";
import IconAbstract from "@/assets/icon/icon-abstract-shape.svg";
import FeaturesImgOne from "@/assets/images/Features/features-1.png";
const FeaturesOne = () => {
  return (
    <>
      <section id="portfolio" className="bg-[#04061E] py-20 text-white">
        <div className="container">
          <div className="flex flex-col justify-center text-center text-white items-center mb-14">
            <div className="w-[70%]">
              <p className="text-[16px] font-light mb-3 uppercase">
                IF YOU JOIN AS A
              </p>
              <h2 className="features-text-1">Contributor</h2>
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
                  src={IconPuzzle}
                  alt="icon-puzzle"
                  width={50}
                  height={50}
                />
                <h3 className="text-[20px] font-bold my-6">
                  Platform is ready & free
                </h3>
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
                <Image src={IconMaze} alt="icon-maze" width={50} height={50} />
                <h3 className="text-[20px] font-bold my-6">
                  Focus on teaching
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
                  src={IconQrCode}
                  alt="icon-qr-code"
                  width={50}
                  height={50}
                />
                <h3 className="text-[20px] font-bold my-6">
                  Set your own content prices
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
                <Image
                  src={IconAbstract}
                  alt="icon-abstract"
                  width={50}
                  height={50}
                />
                <h3 className="text-[20px] font-bold my-6">
                  Full access to the community
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
            <p className="mb-8 text-[20px] font-bold">-How it works-</p>
            <div data-aos="zoom-in" data-aos-delay="5" data-aos-duration="600">
              <Image
                src={FeaturesImgOne}
                alt="Features-error"
                width={900}
                height={843}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesOne;
