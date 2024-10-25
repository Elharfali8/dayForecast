import {Hero} from "@/components/home";
import FeaturedStories from "@/components/home/FeaturedStories";
import PopularCities from "@/components/home/PopularCities";

export default function Home() {
  return (
    <main>
      <Hero /> 
      <PopularCities />
      <FeaturedStories />
    </main>
  );
}
