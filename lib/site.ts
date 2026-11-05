export const site = {
  name: "ADZ-tech Digital Solutions",
  shortName: "ADZ-tech",
  slogan: "L'innovation numérique au service de vos ambitions.",
  description:
    "Agence digitale à N'Djamena, Tchad : création de sites web, design graphique, intelligence artificielle et formation informatique.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://adz-tech-235.vercel.app",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "adztech.digitalsolution@gmail.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+23566708344",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "23566708344",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/profile.php?id=61595890243698",
  location: "N'Djamena, Tchad",
  nav: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/#a-propos" },
    { label: "Services", href: "/#services" },
    { label: "Réalisations", href: "/#realisations" },
    { label: "Formations", href: "/#formations" },
    { label: "Contact", href: "/#contact" },
  ],
};

export const whatsappLink = (text?: string) =>
  site.whatsapp
    ? `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`
    : null;
