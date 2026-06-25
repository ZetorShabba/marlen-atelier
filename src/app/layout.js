import "./globals.css";

export const metadata = {
  title: "MARLEN Atelier | CNC megmunkálás és műszaki kivitelezés",
  description:
    "Faipari és műanyagipari CNC megmunkálás, műszaki modellezés, prototípusgyártás és egyedi designmegoldások tervezőknek, belsőépítészeknek és kivitelezőknek.",
  keywords: [
    "MARLEN Atelier",
    "CNC megmunkálás",
    "faipari CNC",
    "műanyagipari CNC",
    "műszaki modellezés",
    "prototípus gyártás",
    "egyedi bútor",
    "belsőépítészet",
    "design kivitelezés",
    "gyárthatósági felülvizsgálat",
  ],
  authors: [{ name: "MARLEN Atelier Kft." }],
  creator: "MARLEN Atelier Kft.",
  publisher: "MARLEN Atelier Kft.",
  metadataBase: new URL("https://www.marlenatelier.hu"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MARLEN Atelier | CNC megmunkálás és műszaki kivitelezés",
    description:
      "CNC megmunkálás, műszaki modellezés és egyedi designmegoldások a koncepciótól a gyártható megvalósításig.",
    url: "https://www.marlenatelier.hu",
    siteName: "MARLEN Atelier",
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MARLEN Atelier | CNC megmunkálás és műszaki kivitelezés",
    description:
      "Faipari és műanyagipari CNC megmunkálás, prototípusgyártás és egyedi designmegoldások.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}