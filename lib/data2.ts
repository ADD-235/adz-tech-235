export const projects = [
  { id: 1, cat: "Sites web", name: "Site vitrine (démo)", desc: "Modèle de site vitrine pour une petite entreprise.", tech: ["Next.js", "Tailwind"] },
  { id: 2, cat: "Applications", name: "Application de gestion (démo)", desc: "Exemple d'application web de suivi de commandes.", tech: ["Next.js", "TypeScript"] },
  { id: 3, cat: "Tableaux de bord", name: "Tableau de bord (démo)", desc: "Exemple de tableau de bord avec indicateurs clés.", tech: ["React", "Charts"] },
  { id: 4, cat: "Logos", name: "Logo (démo)", desc: "Exemple de création de logo et identité visuelle.", tech: ["Design", "Vectoriel"] },
  { id: 5, cat: "Affiches publicitaires", name: "Affiche (démo)", desc: "Exemple d'affiche publicitaire pour un événement.", tech: ["Design", "Print"] },
] as const;

export const categories = ["Tous", "Sites web", "Applications", "Tableaux de bord", "Logos", "Affiches publicitaires"] as const;

export const trainings = [
  { id: "initiation", title: "Initiation à l'informatique", level: "Aucun niveau requis", duration: "À définir", goals: "Découvrir l'ordinateur, les fichiers et Internet en toute autonomie.", program: ["Prise en main de l'ordinateur", "Gestion des fichiers", "Navigation Internet", "E-mails"] },
  { id: "bureautique-debutant", title: "Bureautique débutant", level: "Initiation à l'informatique", duration: "À définir", goals: "Maîtriser les bases de Word, Excel et PowerPoint.", program: ["Word : mise en forme", "Excel : tableaux et formules simples", "PowerPoint : présentations"] },
  { id: "bureautique-avance", title: "Bureautique avancé", level: "Bureautique débutant", duration: "À définir", goals: "Utiliser les fonctions avancées pour un usage professionnel.", program: ["Word : documents longs", "Excel : formules avancées, graphiques", "PowerPoint : présentations professionnelles"] },
  { id: "ia-debutant", title: "Intelligence artificielle pour débutants", level: "Utilisation de base d'un ordinateur", duration: "À définir", goals: "Utiliser les outils d'IA au quotidien de façon pratique.", program: ["Comprendre l'IA", "Écrire de bonnes consignes", "Créer des CV et documents", "Automatiser des tâches simples"] },
] as const;

export const offers = [
  { name: "Starter", for: "Pour démarrer votre présence en ligne", items: ["Projet simple", "Design responsive", "Accompagnement de base"] },
  { name: "Business", for: "Pour développer votre activité", items: ["Projet complet", "Fonctionnalités sur mesure", "Suivi après livraison"] },
  { name: "Digital Pro", for: "Pour les projets ambitieux", items: ["Solution personnalisée", "Application ou tableau de bord", "Accompagnement renforcé"] },
] as const;
