const steps = [
  { n: "01", title: "Shake", copy: "Give the bottle a good shake to wake up the real ingredients." },
  { n: "02", title: "Dress", copy: "Drizzle generously over crisp greens, bowls, or warm flatbreads." },
  { n: "03", title: "Toss", copy: "Gently coat every leaf so the flavors mingle evenly." },
  { n: "04", title: "Enjoy", copy: "Set it down, gather around, and savor the taste of the Mediterranean." },
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
            <p>{step.copy}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
