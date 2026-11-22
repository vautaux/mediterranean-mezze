import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { unsplash } from "@/components/Media";

export const metadata = {
  title: "Nutritional Benefit — Bia Delish",
  description: "Why sesame paste, pomegranate molasses, extra virgin olive oil and sumac go into Bia Delish dressings.",
};

const sections = [
  {
    title: "Sesame Paste",
    subtitle: "Pure Roasted Sesame",
    src: "/photos/tahini-jar.jpg",
    alt: "A glass jar of creamy sesame paste sauce with a wooden spoon, sesame seeds, chili flakes, garlic and parsley",
    points: [
      ["Heart & Cellular Defense", "Rich in monounsaturated fats and rare sesame lignans (sesamin) that protect cells and support cardiovascular vitality."],
      ["Mineral-Dense Strength", "Naturally abundant in bioavailable calcium, magnesium, and iron for bone density and sustained daily energy."],
      ["Clean Plant Protein", "Delivers complete, steady nourishment without refined oils, gums, or dairy."],
      ["Naturally Velvety", "Pure stone-ground sesame creates a rich, creamy emulsion straight from the earth."],
    ],
  },
  {
    title: "Pomegranate Molasses",
    subtitle: "Concentrated Ruby Fruit",
    src: "/photos/pomegranate-molasses-jar.png",
    alt: "A jar of dark pomegranate molasses with a wooden spoon, beside fresh pomegranates",
    points: [
      ["Potent Antioxidant Power", "Packed with concentrated polyphenols and punicalagins that combat oxidative stress and support cellular longevity."],
      ["Heart & Circulation Support", "Naturally rich in plant compounds and potassium that promote healthy blood flow and cardiovascular vitality."],
      ["Bright Digestive Lift", "Its natural fruit acids awaken the palate and gently stimulate digestion before a meal."],
      ["Pure Fruit Complexity", "Slow-reduced pomegranate juice delivers deep, sweet-tart richness with zero artificial colors or preservatives."],
    ],
  },
  {
    title: "Extra Virgin Olive Oil",
    subtitle: "Liquid Gold of the Mediterranean",
    photo: "1474979266404-7eaacbcd87c5",
    alt: "Glass bottle of olive oil beside fresh olives",
    points: [
      ["Heart & Vascular Longevity", "Rich in heart-protective monounsaturated fats (oleic acid) that support healthy cholesterol and blood pressure."],
      ["Cellular Antioxidant Shield", "Loaded with natural polyphenols and oleocanthal that help calm inflammation and protect cells from oxidative stress."],
      ["Nutrient Absorption", "Healthy fats unlock and maximize the absorption of fat-soluble vitamins (A, D, E, and K) from fresh greens and vegetables."],
      ["Pure Cold-Pressed Vitality", "Unrefined, vibrant, and full-bodied—bringing velvety richness without industrial processing."],
    ],
  },
  {
    title: "Sumac",
    subtitle: "Crimson Spice of the Levant",
    photo: "1723121977832-346005a50576",
    alt: "A cluster of red sumac berries on the branch",
    points: [
      ["Antioxidant Richness", "Packed with tannins, anthocyanins, and flavonoids that help neutralize free radicals and support cellular resilience."],
      ["Anti-Inflammatory Balance", "Traditional Mediterranean and Middle Eastern wellness relies on its natural plant compounds to help calm everyday inflammation."],
      ["Bright Culinary Lift", "Delivers a crisp, lemon-like tartness with earthy warmth—brightening salads, mezze, and grilled dishes without extra acidity."],
      ["Heritage & Craft", "Ground from deep crimson sumac berries, bringing unmistakable color and centuries-old flavor character."],
    ],
  },
];

export default function NutritionalBenefitPage() {
  return (
    <>
      <Nav />
      <main id="main" className="page">
        <h1 className="display">Nutritional Benefit</h1>
        <div className="benefits">
          {sections.map((section, index) => (
            <section
              key={section.title}
              className={`benefit${index % 2 ? " is-reversed" : ""}`}
              aria-labelledby={`benefit-${index}`}
            >
              <div className="benefit-photo">
                <Image
                  src={section.src ?? unsplash(section.photo)}
                  alt={section.alt}
                  fill
                  sizes="(max-width: 760px) 90vw, 40vw"
                  className="photo"
                />
              </div>
              <div className="benefit-text">
                <h2 id={`benefit-${index}`}>{section.title}</h2>
                <p className="benefit-sub">{section.subtitle}</p>
                <ul>
                  {section.points.map(([label, copy]) => (
                    <li key={label}>
                      <strong>{label}:</strong> {copy}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
