import Image from "next/image";
import OthersImg from "@/assets/images/antcollab-group.png";
const OthersOne = () => {
  return (
    <>
      <section
        id="about"
        className="h-screen pt-10 flex justify-center items-center w-full"
      >
        <div className="container">
          <div className="flex justify-center items-center w-full">
            <div data-aos="zoom-in" data-aos-delay="5" data-aos-duration="600">
              <Image src={OthersImg} alt="others-img-err" width={900} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OthersOne;
