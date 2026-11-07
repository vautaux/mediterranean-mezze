import Emblem from "@/components/Emblem";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="tile-band" aria-hidden="true" />
      <div className="footer-field">
        <div className="footer-inner">
          <a className="footer-brand" href="#top">
            <Emblem />
          </a>
        </div>
        <div className="colophon">
          <p>© Mediterranean Mezze 2026</p>
        </div>
      </div>
    </footer>
  );
}
