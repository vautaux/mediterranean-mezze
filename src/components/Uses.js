import Reveal from "@/components/Reveal";

const flavours = [
  {
    n: "No. 01",
    title: "Bright",
    copy: "Lemon, pressed until the bowl tastes like sunlight on a tiled terrace.",
    tone: "sumac",
  },
  {
    n: "No. 02",
    title: "Tangy",
    copy: "Sumac and pomegranate molasses — the sour-sweet snap fattoush is known for.",
    tone: "saffron",
  },
  {
    n: "No. 03",
    title: "Herby",
    copy: "A crush of mint and garlic that stays green and alive, even after the toss.",
    tone: "firuzeh",
  },
];

export default function Uses() {
  return (
    <section id="table" className="table">
      <div className="table-lead">
        <p className="kicker">On the table</p>
        <h2 className="display">
          Three ways.
          <br />
          One bottle.
        </h2>
      </div>
      <div className="uses">
        {flavours.map((flavour, index) => (
          <Reveal key={flavour.title} delay={index * 120}>
            <article className="use">
              <div className={`media shape-arch tone-${flavour.tone}`} aria-hidden="true" />
              <p className="use-n">{flavour.n}</p>
              <h3>{flavour.title}</h3>
              <p>{flavour.copy}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
