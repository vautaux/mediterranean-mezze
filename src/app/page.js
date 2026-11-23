import Nav from "@/components/Nav";
import Story from "@/components/Story";
import Uses from "@/components/Uses";
import Ritual from "@/components/Ritual";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Story />
        <Uses />
        <Ritual />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
