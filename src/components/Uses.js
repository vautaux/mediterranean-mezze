import Image from "next/image";
import Reveal from "@/components/Reveal";

const flavours = [
  {
    n: "No. 01",
    title: "Bright",
    copy: "Zesty lemon, smooth tahini, and golden honey—bringing sunlit freshness to every bite.",
    tone: "saffron",
  },
  {
    n: "No. 02",
    title: "Tangy",
    copy: "Sweet pomegranate molasses, red wine vinegar, and sumac for a bold, mouthwatering kick.",
    tone: "sumac",
  },
  {
    n: "No. 03",
    title: "Herby",
    copy: "Aromatic dried mint, olive oil, and herbaceous notes that tie the whole table together.",
    tone: "herb",
  },
];

export default function Uses() {
  return (
    <section id="table" className="table">
      <div className="table-lead">
        <h2 className="display">On the table</h2>
      </div>
      <div className="table-photo">
        <Image
          src="/photos/pouring-dressing.jpg"
          alt="Pomegranate molasses dressing being poured over a chopped salad in a green bowl, with pita chips beside it"
          width={1169}
          height={1152}
          sizes="(max-width: 760px) 90vw, 36rem"
        />
      </div>
      <div className="uses">
        {flavours.map((flavour, index) => (
          <Reveal key={flavour.title} delay={index * 120}>
            <article className="use">
              <div className={`media shape-arch tone-${flavour.tone}`}>
                <div className="use-body">
                  <h3>{flavour.title}</h3>
                  <p className="use-copy">{flavour.copy}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
