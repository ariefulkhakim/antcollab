import Image from "next/image";
import LogoAnt from "@/assets/images/antcollab-logo-without-text.png";
const Banner = () => {
  return (
    <>
      <section className="bg-[#101010] h-screen flex flex-col justify-center items-center">
        <div className="container">
          <div className="flex flex-col justify-center items-center">
            <div data-aos="fade-up" data-aos-delay="2" data-aos-duration="600">
              <h2 className="text-white text-[36px]">Why</h2>
            </div>
            <div data-aos="fade-up" data-aos-delay="3" data-aos-duration="600">
              <h1 className="banner-text">Antcollaboration</h1>
            </div>
            <div data-aos="zoom-in" data-aos-delay="5" data-aos-duration="600">
              <Image src={LogoAnt} alt="logo-ant" width={100} height={100} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
