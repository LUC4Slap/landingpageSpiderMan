import Image from "next/image";
import LogoSvg from "@/assets/SpiderLogo.svg";

export function Logo() {
  return <Image src={LogoSvg} alt="Logo" />;
}
