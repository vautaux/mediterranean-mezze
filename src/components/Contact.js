import Image from "next/image";
import Reveal from "@/components/Reveal";
import ContactDialog from "@/components/ContactDialog";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <Reveal className="contact-copy">
        <h2 className="display">Get in touch</h2>
        <ContactDialog />
      </Reveal>
      <div className="contact-art">
        <Image
          src="/photos/bia-delish-table-scene.jpg"
          alt="Bia Delish sesame dressing on a paisley table with candles, brass jugs, mint, za'atar, sumac and pita chips"
          fill
          sizes="(max-width: 960px) 90vw, 45vw"
          className="photo"
        />
      </div>
    </section>
  );
}
