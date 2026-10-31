import Image from "next/image";
import Reveal from "@/components/Reveal";
import { photos, unsplash } from "@/components/Media";

export default function Discover() {
  return (
    <section id="discover" className="discover">
      <div className="discover-art" aria-hidden="true">
        <Image src={unsplash(photos.pomegranate)} alt="" fill sizes="60vw" className="photo" />
      </div>
      <Reveal className="discover-copy">
        <h2 className="display">Discover the dressing</h2>
        <p>
          Our first bottle is a fattoush dressing, built on lemon, sumac, and
          slow-cooked pomegranate molasses. It dresses salads, wakes up
          charred vegetables, and makes a quick marinade for chicken or fish.
          Every ingredient is plant-based, so it belongs on every plate.
        </p>
        <p>Learn the ways it can find its way onto your table.</p>
        <a className="pill pill-solid" href="#table">
          The dressing
        </a>
      </Reveal>
    </section>
  );
}
