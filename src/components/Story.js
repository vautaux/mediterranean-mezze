import Image from "next/image";
import Reveal from "@/components/Reveal";
import { photos, unsplash } from "@/components/Media";

export default function Story() {
  return (
    <section id="story" className="welcome">
      <div className="welcome-art">
        <Image
          src={unsplash(photos.oliveOil)}
          alt="Olive oil in a glass bottle beside fresh olives"
          fill
          sizes="(max-width: 960px) 90vw, 45vw"
          className="photo"
        />
      </div>
      <Reveal className="welcome-copy">
        <p className="kicker">Our story</p>
        <h2 className="display">
          Welcome
          <br />
          to
          <br />
          Mediterranean Mezze
        </h2>
        <a className="text-link" href="#table">
          On the table
        </a>
      </Reveal>
    </section>
  );
}
