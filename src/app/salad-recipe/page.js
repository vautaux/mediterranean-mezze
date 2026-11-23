import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Salad Recipe — Bia Delish",
  description: "A fresh Mediterranean salad to make with Bia Delish dressing.",
};

const ingredients = [
  "1 large romaine heart, chopped",
  "2 cucumbers, diced",
  "3 ripe tomatoes, diced",
  "5 radishes, thinly sliced",
  "2 spring onions, sliced",
  "A handful of fresh mint leaves",
  "A handful of Bia Delish Za'atar & Sumac Pita Chips",
  "Pomegranate seeds, to finish",
  "Bia Delish Pomegranate Molasses Dressing, to taste",
];

const steps = [
  "Shake the bottle well to wake up the real ingredients.",
  "Add the lettuce, cucumbers, tomatoes, radishes, spring onions and mint to a large bowl.",
  "Drizzle generously with Bia Delish dressing and gently toss until every leaf is coated.",
  "Top with the Bia Delish Za'atar & Sumac Pita Chips just before serving so they stay crunchy.",
  "Set it down, gather around, and enjoy.",
];

export default function SaladRecipePage() {
  return (
    <>
      <Nav />
      <main id="main" className="page">
        <h1 className="display">Salad Recipe</h1>
        <div className="story-layout">
          <div className="page-photo">
            <Image
              src="/photos/salad-and-chips.jpg"
              alt="Two bowls of chopped salad beside a dish of za'atar and sumac pita chips, seen from above"
              width={1202}
              height={1500}
              sizes="(max-width: 960px) 90vw, 45vw"
            />
          </div>
          <div className="story-text recipe">
            <h2>Mediterranean Salad</h2>
            <p>Serves 4 · 15 minutes</p>
            <h3>Ingredients</h3>
            <ul>
              {ingredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>Method</h3>
            <ol>
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
