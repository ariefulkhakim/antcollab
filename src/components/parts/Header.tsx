"use clinet";

import { NavbarItem } from "@/types/components/core/navbar.type";
import NavbarCustom from "../core/Navbar";
import LogoAnt from "@/assets/images/antcollab-logo.png";
import { Button } from "@nextui-org/react";
import { Link } from "react-scroll";
import Image from "next/image";
import HeaderBG1 from "@/assets/images/Header/bg-header-1.png";
import HeaderBG2 from "@/assets/images/Header/bg-header-2.png";
import HeaderBG3 from "@/assets/images/Header/bg-header-3.png";
import HeaderBG4 from "@/assets/images/Header/bg-header-4.png";

const HeaderCustom = () => {
  const DataLink: NavbarItem[] = [
    { link: "program", name: "Program" },
    { link: "product", name: "Product" },
    { link: "portfolio", name: "Portfolio" },
    { link: "about", name: "About" },
  ];

  return (
    <>
      <NavbarCustom logo={LogoAnt.src} dataLink={DataLink} />

      <section id="home" className="pt-10 pb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-3 sm:grid-cols-1 header">
            <div>
              <h2 className="header-title">
                Indonesia’s largest IT enthusiast platform
              </h2>
              <p className="py-4 text-[20px] text-[#495057]">
                ant collaboration is a community-based platform which provides
                space for talented individuals to build skills and career paths.
                Our space is focused on two main program namely, Antcode &
                Andcreative.
              </p>
              <p className="py-4 text-[20px] text-[#495057]">
                Let’s kick start and join
              </p>

              <div className="flex space-x-3">
                <Button className="bg-[#F23700] rounded-xl py-[25px] px-[16px] text-white">
                  <Link
                    to="portfolio"
                    smooth={true}
                    offset={50}
                    duration={500}
                    activeClass="active"
                  >
                    As a Contributor
                  </Link>
                </Button>
                <Button className="bg-[#101010] rounded-xl py-[25px] px-[16px] text-white">
                  <Link
                    to="portfolio-1"
                    smooth={true}
                    offset={50}
                    duration={500}
                    activeClass="active"
                  >
                    As a Student
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <div className="flex w-full relative justify-center">
                <div className="header-img-1"></div>
                <div className="header-img-2"></div>
                {/* <Image
                src={HeaderBG1.src}
                alt="Header-BG-1"
                height={249}
                width={166}
              /> */}
                {/* <Image
                src={HeaderBG2.src}
                alt="Header-BG-2"
                height={205}
                width={308}
              /> */}
              </div>
              <div className="flex w-full relative justify-center">
                <div className="header-img-3"></div>
                <div className="header-img-4"></div>
                {/* <Image
                src={HeaderBG3.src}
                alt="Header-BG-3"
                height={225}
                width={337}
              /> */}
                {/* <Image
                src={HeaderBG4.src}
                alt="Header-BG-4"
                height={196}
                width={294}
              /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderCustom;
