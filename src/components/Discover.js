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
      </Reveal>
    </section>
  );
}
