import Image from "next/image";
import salad from "@/app/assets/salad-image.jpg";
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
          src={salad}
          alt="A bowl of finely chopped Persian salad with mint and herbs, seen from above"
          placeholder="blur"
          fill
          sizes="(max-width: 960px) 90vw, 45vw"
          className="photo"
        />
      </div>
    </section>
  );
}
