import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Story — Bia Delish",
  description: "The story behind Bia Delish by Mediterranean Mezze.",
};

export default function OurStoryPage() {
  return (
    <>
      <Nav />
      <main id="main" className="page">
        <h1 className="display">Our Story</h1>
        <div className="story-layout">
          <div className="page-photo">
            <Image
              src="/photos/fattoush-table-spread-cropped.jpg"
              alt="Bia Delish dressings on a table with fattoush salads, pita chips and pomegranate seeds, seen from above"
              width={1169}
              height={870}
              sizes="(max-width: 960px) 90vw, 45vw"
            />
          </div>
          <div className="story-text">
            <h2>Why Bia Delish?</h2>
            <p>
              In Irish, bia means food—the kind made to nourish, gather people in, and turn an
              ordinary day into something worth sitting down for. Delish is the promise on top:
              bold flavor, comforting textures, and food that simply hits the spot.
            </p>
            <p>
              We called it Bia Delish because great food shouldn&apos;t feel complicated or out of
              reach. Every dish starts with care and good ingredients, finished so it feels
              familiar, vibrant, and to enjoy
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
