import { getData } from "@/service/sheetService";
import { HOME_ID } from "@/config/constant";
import TechnologySlider from "./TechnologySlider";

export default async function TechnologySection() {
  const quoteData = await getData(HOME_ID);
  const slides = quoteData?.company_list || [];

  return <TechnologySlider slides={slides} />;
}
