import { Link } from "react-scroll";
import { Link as LinkC } from "@nextui-org/react";
interface ExploreInterface {
  handleSetActive?: (e: any) => void;
  active?: string;
}
const Footer = ({ handleSetActive }: ExploreInterface) => {
  return (
    <>
      <section className="py-10 bg-[#3B3B3B33]">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 w-full">
            <div>
              <p className="border-2 border-solid border-y-0 border-r-0 border-[#F23700] pl-3 mb-5 text-[20px] font-bold">
                Program
              </p>
              <ul>
                <li className="mb-3 text-[16px] font-normal text-[#495057] cursor-pointer">
                  <LinkC
                    as={Link}
                    to={`program`}
                    smooth={true}
                    offset={50}
                    duration={500}
                    activeClass="active"
                    className="text-[#495057]"
                  >
                    Antcode
                  </LinkC>
                </li>
                <li className="mb-3 text-[16px] font-normal text-[#495057] cursor-pointer">
                  <LinkC
                    as={Link}
                    to={`program-1`}
                    smooth={true}
                    offset={50}
                    duration={500}
                    activeClass="active"
                    className="text-[#495057]"
                  >
                    Antcreative
                  </LinkC>
                </li>
              </ul>
            </div>

            <div>
              <p className="border-2 border-solid border-y-0 border-r-0 border-[#F23700] pl-3 mb-5 text-[20px] font-bold">
                Products
              </p>
              <ul>
                <li className="mb-3 text-[16px] font-normal text-[#495057] cursor-pointer">
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
                <li className="mb-3 text-[16px] font-normal text-[#495057] cursor-pointer">
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
                <li className="mb-3 text-[16px] font-normal text-[#495057] cursor-pointer">
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
                    Collaborative Project
                  </LinkC>
                </li>
                <li className="mb-3 text-[16px] font-normal text-[#495057] cursor-pointer">
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

            <div>
              <p className="border-2 border-solid border-y-0 border-r-0 border-[#F23700] pl-3 mb-5 text-[20px] font-bold">
                Community
              </p>
              <ul>
                <li className="mb-3 text-[16px] font-normal text-[#495057]">
                  <LinkC
                    href="https://discord.gg/kujvfdPuTf"
                    target="__blank"
                    className="text-[#495057]"
                  >
                    Discord
                  </LinkC>
                </li>
              </ul>
            </div>

            <div>
              <p className="border-2 border-solid border-y-0 border-r-0 border-[#F23700] pl-3 mb-5 text-[20px] font-bold">
                Social Media
              </p>
              <ul>
                <li className="mb-3 text-[16px] font-normal text-[#495057]">
                  <LinkC
                    href="https://www.tiktok.com/@antcollaboration"
                    target="__blank"
                    className="text-[#495057]"
                  >
                    Tiktok
                  </LinkC>
                </li>

                <li className="mb-3 text-[16px] font-normal text-[#495057]">
                  <LinkC
                    href="https://www.instagram.com/ant.collaboration"
                    target="__blank"
                    className="text-[#495057]"
                  >
                    Instagram
                  </LinkC>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#000000] py-4 text-center">
        <div className="container">
          <p className="text-white text-[12px]">
            Copyright ©2024 PT. Layanan Kolaborasi Global | ant collaboration
            allright reserved
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
