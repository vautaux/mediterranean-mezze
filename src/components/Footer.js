import Emblem from "@/components/Emblem";

const columns = [
  {
    title: "The dressing",
    links: [
      ["#table", "Flavour"],
      ["#story", "Our story"],
      ["#discover", "The bottle"],
    ],
  },
  {
    title: "At the table",
    links: [
      ["#table", "Fattoush"],
      ["#table", "Charred vegetables"],
      ["#table", "Grain bowls"],
    ],
  },
  {
    title: "The ritual",
    links: [
      ["#ritual", "Shake & dress"],
      ["#ritual", "Toss & eat"],
    ],
  },
  {
    title: "Say hello",
    links: [["#contact", "Get in touch"]],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="tile-band" aria-hidden="true" />
      <div className="footer-field">
        <div className="footer-inner">
          <a className="footer-brand" href="#top">
            <Emblem />
          </a>
          <div className="footer-grid">
            {columns.map((column) => (
              <div key={column.title}>
                <h2>{column.title}</h2>
                <ul>
                  {column.links.map(([href, label]) => (
                    <li key={label}>
                      <a href={href}>{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="colophon">
          <p>© Mediterranean Mezze 2026</p>
        </div>
      </div>
    </footer>
  );
}
