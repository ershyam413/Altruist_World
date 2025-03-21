import { getData } from "@/service/sheetService";
import { HOME_ID } from "@/config/constant";
import AboutSlider from "./AboutSlider";

export default async function AboutSection() {
  const quoteData = await getData(HOME_ID);
  const slides = quoteData?.about || [];

  return <AboutSlider slides={slides} />;
}
