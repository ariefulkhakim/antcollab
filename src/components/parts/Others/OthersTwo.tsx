import Image from "next/image";
import OthersImg from "@/assets/images/antcollab-group.png";

const OthersTwo = () => {
  return (
    <>
      <section className="pb-20 flex justify-start items-center w-full">
        <div className="container">
          <div className="mb-14">
            <p className="text-[16px] font-light">Our</p>
            <h3 className="other-text">Values</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-3 sm:grid-cols-1">
            <div>
              <div className="grid md:grid-cols-2 gap-10 sm:grid-cols-1">
                <div>
                  <p className="border border-y-0 border-r-0 border-l-2 border-l-[#F23700] p-3 mb-3 text-[#495057] text-[18px] font-bold overflow-hidden">
                    <div
                      data-aos="fade-right"
                      data-aos-delay="5"
                      data-aos-duration="600"
                    >
                      Mutual Cooperation
                    </div>
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="5"
                    data-aos-duration="600"
                  >
                    <p className="text-[16px] font-normal">
                      Ants want to finish the job as quick as possible so in
                      order to do this they all have different jobs.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="border border-y-0 border-r-0 border-l-2 border-l-[#F23700] p-3 mb-3 text-[#495057] text-[18px] font-bold overflow-hidden">
                    <div
                      data-aos="fade-right"
                      data-aos-delay="9"
                      data-aos-duration="900"
                    >
                      Embrace Curiosity
                    </div>
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="9"
                    data-aos-duration="900"
                  >
                    <p className="text-[16px] font-normal">
                      Fear will burry all the colony, so ants stay curious and
                      keep pushing the boundaries
                    </p>
                  </div>
                </div>
                <div>
                  <p className="border border-y-0 border-r-0 border-l-2 border-l-[#F23700] p-3 mb-3 text-[#495057] text-[18px] font-bold overflow-hidden">
                    <div
                      data-aos="fade-right"
                      data-aos-delay="13"
                      data-aos-duration="1300"
                    >
                      Sharing is the way of life
                    </div>
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="13"
                    data-aos-duration="1300"
                  >
                    <p className="text-[16px] font-normal">
                      When one ant finds food, they let the rest of the colony
                      knows so that everyone can share it! Ants are never
                      selfish
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                data-aos="zoom-in-up"
                data-aos-delay="5"
                data-aos-duration="600"
              >
                <Image
                  src={OthersImg}
                  alt="Other-err"
                  width={495}
                  height={345}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OthersTwo;
