import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeaturedBooks from "./pages/FeaturedBooks";
import HeroSection from "./pages/Hero";
import NewBookSection from "./pages/NewBook";
import TestimonialSection from "./pages/Testimonials";
import MeetTheAuthor from "./pages/Author";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <NewBookSection />
      <FeaturedBooks />
      <TestimonialSection />
      <MeetTheAuthor />
    </main>
  );
}
