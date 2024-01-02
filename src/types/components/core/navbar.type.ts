import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface NavbarInterface {
  dataLink?: NavbarItem[],
  logo: string | StaticImport; 
}

export interface NavbarItem {
  name?: string;
  link?: string
}