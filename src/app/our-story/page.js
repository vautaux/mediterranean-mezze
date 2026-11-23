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
            <p>
              Bia Delish began with a simple craving: bringing the vibrant, sun-drenched flavours of
              an authentic Mediterranean table straight to Irish kitchens.
            </p>
            <p>
              In Irish, bia means food—and for us, food is all about connection, generosity, and
              sharing the best of what you have. Drawing from time-honoured family recipes passed
              down through generations in the Mediterranean, we set out to bottle the soul of a
              traditional mezze spread into a single, effortless pour.
            </p>
            <p>
              Every bottle of our signature salad dressing is a celebration of bold, honest
              ingredients: the deep, sweet-tart richness of pomegranate molasses, velvety sesame
              paste cold-pressed extra virgin olive oil, bright lemon juice, tangy sumac, fragrant
              mint, and a pinch of salt. And garlic Nothing artificial, no shortcuts—just pure,
              punchy flavour.
            </p>
            <p>
              While our culinary roots lie along the Mediterranean coast, our home is right here in
              Ireland. Each batch is carefully mixed and packed in Ireland, marrying Mediterranean
              heritage with Irish food craftsmanship. Whether drizzled over crisp garden greens,
              roasted vegetables, or grilled meats, Bia Delish is made to turn everyday meals into a
              feast worth sharing.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
