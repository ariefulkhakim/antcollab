import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  // Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Link } from "react-scroll";
import { NavbarInterface } from "@/types/components/core/navbar.type";
import Image from "next/image";

export default function NavbarCustom({ dataLink, logo }: NavbarInterface) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      position="static"
      className="py-4 sm:py-[30px]"
      maxWidth="xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link
            to={`home`}
            smooth={true}
            offset={50}
            duration={500}
            activeClass="active"
          >
            <Image src={logo} alt="Ant Logo" width={175} height={70} />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-14" justify="center">
        {dataLink?.map((res, key) => (
          <NavbarItem key={key}>
            <Link
              className="text-[#333333] font-semibold text-[16px] cursor-pointer"
              to={`${res.link}`}
              smooth={true}
              offset={50}
              duration={500}
              activeClass="active"
            >
              {res.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            className="bg-[#F23700] header-navbar-btn text-white font-semibold"
          >
            Join Us
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {dataLink?.map((item, index) => (
          <NavbarMenuItem key={`${index}`}>
            <Link
              className="text-[#333333] font-semibold text-[16px] cursor-pointer"
              to={`${item.link}`}
              smooth={true}
              offset={50}
              duration={500}
              activeClass="active"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
