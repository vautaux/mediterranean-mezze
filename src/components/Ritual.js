const steps = [
  { n: "01", title: "Shake", copy: "The molasses settles. Wake the bottle before you pour." },
  { n: "02", title: "Dress", copy: "Pour while the leaves are still crisp and cold." },
  { n: "03", title: "Toss", copy: "Toasted pita shards go in at the last second." },
  { n: "04", title: "Enjoy", copy: "Fattoush waits for no one. Bring it to the table." },
];

export default function Ritual() {
  return (
    <section id="ritual" className="ritual" aria-labelledby="ritual-title">
      <h2 id="ritual-title" className="display">
        Four moves, then the table.
      </h2>
      <ol className="steps">
        {steps.map((step) => (
          <li key={step.n}>
            <span className="step-n" aria-hidden="true">
              {step.n}
            </span>
            <h3>{step.title}</h3>
          </li>
        ))}
      </ol>
    </section>
  );
}
