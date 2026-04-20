import { Unbounded, Patrick_Hand } from "next/font/google";
import localFont from "next/font/local";

export const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-unbounded",
  display: "swap",
});

export const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-patrick",
  display: "swap",
});

export const clashDisplay = localFont({
  src: "../fonts/ClashDisplay-Medium.woff2",
  weight: "500",
  variable: "--font-clash",
  display: "swap",
});

export const fontVariables = [
  unbounded.variable,
  patrickHand.variable,
  clashDisplay.variable,
].join(" ");
