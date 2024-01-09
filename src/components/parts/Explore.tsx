import Image from "next/image";
import ExploreImg1 from "@/assets/images/Explore/explore-1.png";
import { Divider, Link as LinkC } from "@nextui-org/react";
import { Link } from "react-scroll";
import { useState } from "react";
interface ExploreInterface {
  handleSetActive?: (e: any) => void;
  active?: string;
}
const Explore = ({ handleSetActive, active }: ExploreInterface) => {
  return (
    <>
      <section id="product">
        <div className="container">
          <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-8 relative">
            <div className="px-3 relative explore-content">
              <div className={`bg-[#E5E5E5] my-20 explore-left pb-5`}>
                <div className="p-4">
                  <p className="text-[20px] text-[#495057] font-bold">
                    Explore our products
                  </p>
                </div>
                <ul>
                  <li
                    className={`border border-y-0 border-r-0 border-l-2 ${
                      active === "explore-1"
                        ? "border-l-[#1E1D1D]"
                        : "border-l-transparent"
                    } py-3 pl-3 cursor-pointer`}
                  >
                    <LinkC
                      as={Link}
                      to={`explore-1`}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      activeClass="active"
                      onSetActive={handleSetActive}
                      className="text-[#495057]"
                    >
                      Education & Tutorial
                    </LinkC>
                  </li>
                  <li
                    className={`border border-y-0 border-r-0 border-l-2 ${
                      active === "explore-2"
                        ? "border-l-[#1E1D1D]"
                        : "border-l-transparent"
                    } py-3 pl-3 cursor-pointer`}
                  >
                    <LinkC
                      as={Link}
                      to={`explore-2`}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      activeClass="active"
                      onSetActive={handleSetActive}
                      className="text-[#495057]"
                    >
                      Forum & Networking Space
                    </LinkC>
                  </li>
                  <li
                    className={`border border-y-0 border-r-0 border-l-2 ${
                      active === "explore-3"
                        ? "border-l-[#1E1D1D]"
                        : "border-l-transparent"
                    } py-3 pl-3 cursor-pointer`}
                  >
                    <LinkC
                      as={Link}
                      to={`explore-3`}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      activeClass="active"
                      onSetActive={handleSetActive}
                      className="text-[#495057]"
                    >
                      Colaborative Project
                    </LinkC>
                  </li>
                  <li
                    className={`border border-y-0 border-r-0 border-l-2 ${
                      active === "explore-4"
                        ? "border-l-[#1E1D1D]"
                        : "border-l-transparent"
                    } py-3 pl-3 cursor-pointer`}
                  >
                    <LinkC
                      as={Link}
                      to={`explore-4`}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      activeClass="active"
                      onSetActive={handleSetActive}
                      className="text-[#495057]"
                    >
                      Mentorship
                    </LinkC>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-3 sm:col-span-2 overflow-scroll">
              <div id="explore-1" className="mt-20">
                <p className="text-[16px] text-[#495057] font-light">
                  Highlight
                </p>
                <h2 className="text-[36px] font-extrabold my-3">
                  Education & Tutorial
                </h2>
                <p className="text-[14px] text-[#495057] mb-6">
                  Start your journey in the world of technology or design
                  colony. You will be connected with ant commanders who have
                  expertise in their respective fields. Get access to a
                  community rich in knowledge and project opportunities!
                </p>
                <Image
                  src={ExploreImg1}
                  alt="explore-img-err"
                  width={800}
                  height={444}
                />
                <Divider className="my-16 bg-[#1E1D1D]" />
              </div>
              <div id="explore-2">
                <p className="text-[16px] text-[#495057] font-light">
                  Highlight
                </p>
                <h2 className="text-[36px] font-extrabold my-3">
                  Forum & Networking Space
                </h2>
                <p className="text-[14px] text-[#495057] mb-6">
                  Start your journey in the world of technology or design
                  colony. You will be connected with ant commanders who have
                  expertise in their respective fields. Get access to a
                  community rich in knowledge and project opportunities!
                </p>
                <Image
                  src={ExploreImg1}
                  alt="explore-img-err"
                  width={800}
                  height={444}
                />
                <Divider className="my-16" />
              </div>
              <div id="explore-3">
                <p className="text-[16px] text-[#495057] font-light">
                  Highlight
                </p>
                <h2 className="text-[36px] font-extrabold my-3">
                  Colaborative Project
                </h2>
                <p className="text-[14px] text-[#495057] mb-6">
                  Start your journey in the world of technology or design
                  colony. You will be connected with ant commanders who have
                  expertise in their respective fields. Get access to a
                  community rich in knowledge and project opportunities!
                </p>
                <Image
                  src={ExploreImg1}
                  alt="explore-img-err"
                  width={800}
                  height={444}
                />
                <Divider className="my-16" />
              </div>
              <div id="explore-4">
                <p className="text-[16px] text-[#495057] font-light">
                  Highlight
                </p>
                <h2 className="text-[36px] font-extrabold my-3">Mentorship</h2>
                <p className="text-[14px] text-[#495057] mb-6">
                  Start your journey in the world of technology or design
                  colony. You will be connected with ant commanders who have
                  expertise in their respective fields. Get access to a
                  community rich in knowledge and project opportunities!
                </p>
                <Image
                  src={ExploreImg1}
                  alt="explore-img-err"
                  width={800}
                  height={444}
                />
                <Divider className="my-16" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;
