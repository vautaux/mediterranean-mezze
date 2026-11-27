import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Story() {
  return (
    <section id="story" className="welcome">
      <div className="welcome-art">
        <Image
          src="/photos/bia-delish-dressings-studio.jpg"
          alt="Bia Delish salad dressings with sesame seed paste and pomegranate molasses"
          fill
          sizes="(max-width: 960px) 90vw, 45vw"
          className="photo"
        />
      </div>
      <Reveal className="welcome-copy">
        <div className="welcome-logo" role="img" aria-label="Bia Delish Mediterranean Mezze">
          <Image
            src="/photos/bia-delish-logo-monogram.png"
            alt=""
            width={900}
            height={440}
            sizes="(max-width: 960px) 80vw, 40vw"
            className="logo-monogram"
            priority
          />
          <Image
            src="/photos/bia-delish-logo-mezze.png"
            alt=""
            width={872}
            height={48}
            sizes="(max-width: 960px) 80vw, 40vw"
            className="logo-mezze"
            priority
          />
          <Image
            src="/photos/bia-delish-logo-tree.png"
            alt=""
            width={652}
            height={117}
            sizes="(max-width: 960px) 60vw, 30vw"
            className="logo-tree"
            priority
          />
        </div>
        <h3 className="welcome-headline">Taste the Soul of the Mediterranean</h3>
        <p className="welcome-sub">
          Handcrafted, all-natural salad dressings made with authentic ingredients. Elevate your
          everyday greens with Bia Delish by Mediterranean Mezze.
        </p>
      </Reveal>
    </section>
  );
}
