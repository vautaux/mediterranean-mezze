import Nav from "@/components/Nav";
import Story from "@/components/Story";
import Uses from "@/components/Uses";
import Discover from "@/components/Discover";
import Ritual from "@/components/Ritual";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Story />
        <Uses />
        <Discover />
        <Ritual />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
