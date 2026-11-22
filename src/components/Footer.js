import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="tile-band" aria-hidden="true" />
      <div className="footer-field">
        <div className="footer-inner">
          <a className="footer-brand" href="#top">
            <Image
              src="/photos/bia-delish-emblem.png"
              alt="Bia Delish, back to top"
              width={274}
              height={240}
              className="footer-emblem"
            />
          </a>
        </div>
        <div className="colophon">
          <p>© Mediterranean Mezze 2026</p>
        </div>
      </div>
    </footer>
  );
}
