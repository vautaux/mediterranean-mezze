import Image from "next/image";
import Reveal from "@/components/Reveal";
import ContactDialog from "@/components/ContactDialog";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <Reveal className="contact-copy">
        <h2 className="display">Get in touch</h2>
        <p>
          We love hearing from the table. Whether you have a question, want to
          stock a bottle, or just want to tell us what you dressed tonight,
          we&apos;re here.
        </p>
        <ContactDialog />
      </Reveal>
      <div className="contact-art">
        <Image
          src="/photos/persian-salad.jpg"
          alt="A bowl of finely chopped Persian salad with mint and herbs, seen from above"
          fill
          sizes="(max-width: 960px) 90vw, 45vw"
          className="photo"
        />
      </div>
    </section>
  );
}
