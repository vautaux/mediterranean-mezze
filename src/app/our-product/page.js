import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Product — Bia Delish",
  description: "Discover the Bia Delish dressings by Mediterranean Mezze.",
};

const products = [
  {
    src: "/photos/sesame-dressing-bottle.jpg",
    alt: "Bia Delish salad dressing with sesame seed paste beside a lit candle",
    title: "Creamy Sesame & Honey Dressing",
    copy: "A smooth, creamy dressing crafted with sesame paste, extra virgin olive oil, honey, and lemonade—balancing nutty richness",
  },
  {
    src: "/photos/pomegranate-dressing-bottle.jpg",
    alt: "Bia Delish salad dressing with pomegranate molasses beside a bowl of pomegranate seeds",
    title: "Pomegranate Molasses Dressing",
    copy: "A rich, tangy dressing crafted with pomegranate molasses, olive oil, sumac, and lemon juice—bringing an authentic Mediterranean flavor to your table.",
  },
  {
    src: "/photos/bd-table-chips.jpg",
    alt: "Bia Delish monogram on a paisley cloth with a candle, spices and a bowl of pita chips",
    title: "Za'atar & Sumac Pita Chips",
    copy: "Crunchy bite-sized bread pieces seasoned with za'atar and sumac, tossed in extra virgin olive oil—made to top salads.",
  },
];

export default function OurProductPage() {
  return (
    <>
      <Nav />
      <main id="main" className="page">
        <h1 className="display">Our Product</h1>
        <div className="benefits is-product">
          {products.map((item, index) => (
            <section
              key={item.src}
              className={`benefit${index % 2 ? " is-reversed" : ""}`}
            >
              <div className="benefit-photo">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 760px) 90vw, 36vw"
                  className="photo"
                />
              </div>
              <div className="benefit-text">
                <h2>{item.title}</h2>
                <p>{item.copy}</p>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
