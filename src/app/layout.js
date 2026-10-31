import { IBM_Plex_Serif, Lalezar, Syne } from "next/font/google";
import "../styles.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-syne",
});

const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-plex-serif",
});

const lalezar = Lalezar({
  subsets: ["arabic", "latin"],
  weight: "400",
  display: "swap",
  variable: "--font-lalezar",
});

export const metadata = {
  title: "Mediterranean Mezze — Fattoush dressing",
  description:
    "Small-batch fattoush dressing with lemon, sumac, pomegranate molasses, and mint.",
  openGraph: {
    title: "Mediterranean Mezze",
    description:
      "Small-batch fattoush dressing with lemon, sumac, pomegranate molasses, and mint.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${plexSerif.variable} ${lalezar.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
