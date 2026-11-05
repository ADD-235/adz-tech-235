export type Project = { id: number; cat: string; kind: string; name: string; desc: string; points: string[]; tech: string[] };

export const projects: Project[] = [
  { id: 1, cat: "Sites web", kind: "site", name: "Site vitrine (démo)", desc: "Modèle de site pour présenter une petite entreprise : accueil, services et contact.", points: ["Design responsive", "Formulaire de contact", "Référencement de base"], tech: ["Next.js", "Tailwind"] },
  { id: 2, cat: "Sites web", kind: "shop", name: "Boutique en ligne (démo)", desc: "Modèle de boutique avec catalogue de produits et commande simplifiée.", points: ["Catalogue produits", "Commande par WhatsApp", "Pages optimisées mobile"], tech: ["Next.js", "TypeScript"] },
  { id: 3, cat: "Applications", kind: "app", name: "Application de gestion (démo)", desc: "Exemple d'application web de suivi de commandes.", points: ["Liste des commandes", "Statuts de suivi", "Recherche et filtres"], tech: ["Next.js", "TypeScript"] },
  { id: 4, cat: "Tableaux de bord", kind: "dash", name: "Tableau de bord (démo)", desc: "Exemple de tableau de bord avec indicateurs clés et graphiques.", points: ["Indicateurs clés", "Graphique des ventes", "Vue par période"], tech: ["React", "Graphiques"] },
  { id: 5, cat: "Logos", kind: "logo", name: "Logo (démo)", desc: "Exemple de création de logo et d'identité visuelle.", points: ["Logo et variantes", "Palette de couleurs", "Mini charte graphique"], tech: ["Design", "Vectoriel"] },
  { id: 6, cat: "Affiches publicitaires", kind: "poster", name: "Affiche (démo)", desc: "Exemple d'affiche publicitaire pour un événement.", points: ["Format imprimable", "Hiérarchie visuelle claire", "Version réseaux sociaux"], tech: ["Design", "Print"] },
];
