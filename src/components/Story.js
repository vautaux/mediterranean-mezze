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
        <Image
          src="/photos/bia-delish-logo.png"
          alt="Bia Delish Mediterranean Mezze"
          width={900}
          height={612}
          sizes="(max-width: 960px) 80vw, 40vw"
          className="welcome-logo"
          priority
        />
        <h2 className="display">
          Welcome to Bia Delish
        </h2>
        <h3 className="welcome-headline">Taste the Soul of the Mediterranean</h3>
        <p className="welcome-sub">
          Handcrafted, all-natural salad dressings made with authentic ingredients. Elevate your
          everyday greens with Bia Delish by Mediterranean Mezze.
        </p>
      </Reveal>
    </section>
  );
}
