import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Banner from "./parts/Banner";
import Explore from "./parts/Explore";
import Features from "./parts/Features";
import HeaderCustom from "./parts/Header";
import Others from "./parts/Others";
import Program from "./parts/Program";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FigmaIcon from "@/assets/icon/main/AntLandingPage/figma.svg";
import FlutterIcon from "@/assets/icon/main/AntLandingPage/Flutter.svg";
import KotlinIcon from "@/assets/icon/main/AntLandingPage/Kotlin.svg";
import SparkIcon from "@/assets/icon/main/AntLandingPage/Spark.svg";
import VueIcon from "@/assets/icon/main/AntLandingPage/Vue.svg";
import PythonIcon from "@/assets/icon/main/AntLandingPage/Python.svg";
import NotionIcon from "@/assets/icon/main/AntLandingPage/Notion.svg";
import Image from "next/image";
import Magnetic from "./core/Animation/Magnetic";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./parts/Footer";

const ComponentsAll = () => {
  const [active, setActive] = useState("explore-1");
  const handleSetActive = (to: any) => {
    console.log(to);
    setActive(to);
  };
  return (
    <>
      <HeaderCustom />
      <div
        className="absolute w-full head-animation"
        data-scroll
        data-scroll-speed={-0.05}
      >
        <div className="container">
          <div className="grid grid-cols-7 gap-3">
            <Image src={FlutterIcon} alt="main-img-err" className="-mt-14" />

            <Image src={KotlinIcon} alt="main-img-err" />
            <Image src={SparkIcon} alt="main-img-err" className="-mt-14" />
            <Image src={VueIcon} alt="main-img-err" />
            <Image src={FigmaIcon} alt="main-img-err" className="-mt-14" />
            <Image src={PythonIcon} alt="main-img-err" />
            <Image src={NotionIcon} alt="main-img-err" className="-mt-14" />
          </div>
        </div>
      </div>
      <Program />
      <Explore active={active} handleSetActive={handleSetActive} />
      <Banner />
      <Features />
      <Others />
      <Footer active={active} handleSetActive={handleSetActive} />
    </>
  );
};

export default ComponentsAll;
