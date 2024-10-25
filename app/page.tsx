import SectionTitle from "@/components/global/SectionTitle";
import {Hero} from "@/components/home";
import FeaturedStories from "@/components/home/FeaturedStories";
import GlobalTemperatureMap from "@/components/home/GlobalTemeratureMap";
import PopularCities from "@/components/home/PopularCities";
import Temperature from "@/components/home/Temperature";

export default function Home() {
  return (
    <main>
      <Hero /> 
      <PopularCities />
      <FeaturedStories />
      <Temperature />
    </main>
  );
}
