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

const fetaCranberryIngredients = [
  "1 large head of fresh lettuce (Romaine or mixed leaves)",
  "100g feta cheese, crumbled",
  "½ cup dried cranberries",
  "3–4 tablespoons Bia Delish Sesame Seed Salad Dressing",
  "A sprinkle of sesame seeds (optional)",
  "Freshly ground black pepper",
];

const avocadoIngredients = [
  "150 g mixed baby salad leaves",
  "1 ripe avocado, diced",
  "10–12 cherry tomatoes, halved",
  "½ cucumber, sliced (optional)",
  "2 tbsp pomegranate seeds",
  "3–4 tbsp BIA DELISH Pomegranate Molasses Salad Dressing",
];

const oliveFetaIngredients = [
  "1 large head of fresh Romaine lettuce, chopped",
  "½ cup green olives",
  "100g feta cheese, cubed",
  "2 tablespoons pomegranate seeds",
  "Freshly ground black pepper",
  "3–4 tablespoons Bia Delish Pomegranate Molasses Salad Dressing",
];

const cabbageIngredients = [
  "2 cups shredded purple cabbage",
  "2 cups shredded white cabbage",
  "1 large carrot, thinly sliced or julienned",
  "½ red onion, thinly sliced",
  "½ cup roasted peanuts",
  "3–4 tablespoons BIA DELISH Sesame Seed Paste Salad Dressing",
];

const pomegranateIngredients = [
  "Fresh crispy lettuce",
  "Cherry tomatoes",
  "Fresh broccoli florets",
  "Cauliflower",
  "Cucumber",
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
        <div className="story-layout is-reversed">
          <div className="page-photo">
            <Image
              src="/photos/pomegranate-dressing-salad.jpg"
              alt="Bia Delish pomegranate molasses dressing poured over a salad of lettuce, cherry tomatoes, broccoli and cauliflower in a silver bowl"
              width={1291}
              height={1218}
              sizes="(max-width: 960px) 90vw, 45vw"
            />
          </div>
          <div className="story-text recipe">
            <h2>Mediterranean Salad with Bia Delish Pomegranate Dressing</h2>
            <p className="recipe-tagline">Freshness in Every Bite!</p>
            <p>
              A burst of Mediterranean freshness, vibrant colours and irresistible flavours!
            </p>
            <h3>Ingredients</h3>
            <ul>
              {pomegranateIngredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="story-layout">
          <div className="page-photo">
            <Image
              src="/photos/pomegranate-dressing-greens.jpg"
              alt="Pomegranate molasses dressing being poured over a bowl of fresh green leaves, beside a bottle of Bia Delish Salad Dressing with Pomegranate Molasses"
              width={1169}
              height={754}
              sizes="(max-width: 960px) 90vw, 45vw"
            />
          </div>
          <div className="story-text">
            <p>
              Simply drizzle BIA DELISH Pomegranate Molasses Salad Dressing over fresh green
              leaves, toss gently, and enjoy a delicious, refreshing salad!
            </p>
            <p>It&rsquo;s that easy to create something wonderfully tasty!</p>
          </div>
        </div>
        <div className="story-layout is-reversed">
          <div className="page-photo">
            <Image
              src="/photos/sesame-dressing-cabbage-salad.jpg"
              alt="Sesame seed salad dressing being poured over a bowl of shredded purple and white cabbage, carrots and peanuts"
              width={1169}
              height={1111}
              sizes="(max-width: 960px) 90vw, 45vw"
            />
          </div>
          <div className="story-text recipe">
            <h2>Mediterranean Purple Cabbage &amp; Peanut Salad</h2>
            <p>
              A delicious combination of crisp purple and white cabbage, sweet carrots, red onion
              and crunchy peanuts, all brought together with our rich, creamy sesame dressing. Every
              bite offers a wonderful balance of freshness, crunch and nutty Mediterranean flavour.
            </p>
            <h3>Ingredients</h3>
            <ul>
              {cabbageIngredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="story-layout">
          <div className="page-photo">
            <Image
              src="/photos/olive-feta-salad.jpg"
              alt="Romaine lettuce salad with green olives and cubes of feta in a blue patterned bowl, drizzled with pomegranate molasses dressing beside a bottle of Bia Delish Salad Dressing"
              width={1168}
              height={1134}
              sizes="(max-width: 960px) 90vw, 45vw"
            />
          </div>
          <div className="story-text recipe">
            <h2>Mediterranean Olive &amp; Feta Salad with Bia Delish Pomegranate Molasses Dressing</h2>
            <p>
              A fresh, vibrant Mediterranean salad with crisp lettuce, juicy olives, creamy feta
              cheese, and the irresistible sweet-and-tangy flavour of Bia Delish Pomegranate
              Molasses Salad Dressing.
            </p>
            <h3>Ingredients</h3>
            <ul>
              {oliveFetaIngredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="story-layout is-reversed">
          <div className="page-photo">
            <Image
              src="/photos/avocado-baby-leaf-salad.jpg"
              alt="Bia Delish pomegranate molasses dressing poured over a bowl of baby leaves, diced avocado and cherry tomatoes"
              width={1168}
              height={1246}
              sizes="(max-width: 960px) 90vw, 45vw"
            />
          </div>
          <div className="story-text recipe">
            <h2>Mediterranean Avocado &amp; Baby Leaf Salad</h2>
            <p className="recipe-tagline">With BIA DELISH Pomegranate Molasses Salad Dressing</p>
            <p>
              Fresh, colourful, and full of Mediterranean flavour! This delicious salad combines
              tender baby leaves, creamy avocado, and juicy cherry tomatoes, finished with the rich
              sweet-and-tangy taste of BIA DELISH Pomegranate Molasses Salad Dressing.
            </p>
            <h3>Ingredients</h3>
            <ul>
              {avocadoIngredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="story-layout">
          <div className="page-photo">
            <Image
              src="/photos/feta-cranberry-lettuce-salad.jpg"
              alt="Lettuce salad with crumbled feta and dried cranberries in a blue patterned bowl, drizzled with sesame seed dressing beside a bottle of Bia Delish Salad Dressing"
              width={1169}
              height={1248}
              sizes="(max-width: 960px) 90vw, 45vw"
            />
          </div>
          <div className="story-text recipe">
            <h2>Mediterranean Lettuce Salad with Feta Cheese &amp; Cranberries</h2>
            <p>
              Fresh, colourful, and full of flavour! This delicious Mediterranean-inspired salad
              combines crisp lettuce, creamy feta cheese, and sweet dried cranberries, finished with
              the rich and nutty taste of Bia Delish Sesame Seed Salad Dressing.
            </p>
            <p>A perfect balance of freshness, sweetness, and savoury flavours in every bite!</p>
            <h3>Ingredients</h3>
            <ul>
              {fetaCranberryIngredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
