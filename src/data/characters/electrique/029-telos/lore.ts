import type { PersonnageLoreComplet } from '../../../lore-types';

const telos: PersonnageLoreComplet = {
  id: 29,
  nom: 'Telos',
  element: 'Electrique',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Aéride de 38 ans — un héritier stellaire qui n\'a pas l\'apparence d\'un héritier stellaire. Ses ailes sont élégantes mais souvent repliées et oubliées. Il est dans les archives plus qu\'en vol.',
    peau: 'Pâle Aéride avec une trace de luminescence stellaire héritée — moins prononcée que celle de Serathis (24), ce qui dans la hiérarchie d\'Asterciel est significatif. Il ne s\'en préoccupe pas. D\'autres s\'en préoccupent pour lui.',
    yeux: 'Or pâle avec une qualité d\'analyse textuelle — il lit vite et lit tout. Ses yeux se déplacent sur une page de façon différente des autres : il lit les structures, pas seulement les mots.',
    vetements: 'Tenue d\'héritier mineur — pas le cérémoniel de Serathis, pas la combinaison de travail de Talvyn. Quelque chose entre les deux qui satisfait les exigences de rang sans y mettre de l\'enthousiasme.',
    signes_particuliers: 'Il feuillette les documents par les deux bouts avant de les lire en ordre — une vérification de structure avant le contenu. Il a développé cette habitude en cherchant des incohérences dans des archives où l\'ordre des pages avait été altéré.',
  },

  psychologie: {
    dominante: 'Héritier stellaire qui cherche la vraie Veralith dans les archives — pas par rébellion contre son père, mais parce que ce qu\'il a trouvé dans les premières archives ne correspondait pas à ce qu\'il cherchait, et l\'incohérence l\'a rendu incapable de s\'arrêter.',
    mecanisme_de_defense: 'La méthode comme protection. Il cherche avec une rigueur académique. Tant qu\'il cherche méthodiquement, ce n\'est pas de la subversion — c\'est de la recherche. Il croit à cette distinction. Il n\'est pas certain que Serathis y croie.',
    contradiction_interne: 'Ce qu\'il cherche pourrait fissurer tout ce sur quoi son héritage repose. Il ne cherche pas à détruire son héritage. Il cherche à comprendre ce sur quoi il repose réellement. La différence entre les deux est réelle pour lui. Elle ne le sera peut-être pas pour ce qu\'il trouvera.',
    rapport_aux_autres: 'Syvara (30) est son contact le plus utile — elle refuse l\'aristocratie malgré son élément Stellaire, ce qui lui donne un angle différent sur Veralith. Talvyn (23) maintient les structures qui permettent à Asterciel de fonctionner — il veut le rencontrer pour comprendre ce que Veralith a permis techniquement. Thaerys (103) lui fournit des données astronomiques sans en comprendre l\'usage.',
    vision_du_monde: 'La légitimité d\'une gouvernance devrait reposer sur ce qui est vrai, pas sur ce qui est commode. S\'il découvre que la vérité sur Veralith est différente de la version officielle, quelque chose doit changer. Il ne sait pas encore quoi.',
  },

  histoire: {
    enfance: {
      titre: 'L\'héritage questionnant',
      contenu: 'À 12 ans, lors d\'une cérémonie de commémoration de Veralith, il avait demandé à son père une question sur un détail qui ne correspondait pas à deux sources différentes. Son père avait répondu que les sources étaient "interprétables". À 12 ans, il avait compris que les sources "interprétables" méritaient d\'être regardées de plus près.',
    },
    arrivee: {
      titre: 'L\'accès aux archives',
      contenu: 'À 25 ans, son rang d\'héritier lui avait donné accès aux archives d\'Asterciel. Il avait commencé par les archives officielles de Veralith — celles que tout le monde consultait. À 26 ans, il avait trouvé la première incohérence entre deux versions du même événement dans deux fonds différents.',
    },
    premier_conflit: {
      titre: 'L\'incohérence de la Chute',
      contenu: 'À 30 ans, il avait trouvé des documents sur la Chute des Nuages qui ne correspondaient pas à la version officielle du rôle de Garev et de l\'intervention de Veralith. Il avait demandé l\'accès à un fonds complémentaire. L\'accès lui avait été refusé — "fonds en cours de reclassification".',
    },
    revelation: {
      titre: 'La surveillance discrète',
      contenu: 'À 35 ans, il avait compris que ses consultations d\'archives étaient suivies — des archivistes remplaçaient des documents après ses consultations, des accès se fermaient après qu\'il les demandait. Quelqu\'un lisait ses demandes. Il avait adapté sa méthode : demander des documents adjacents au lieu de demander directement ce qu\'il cherchait.',
    },
    etat_actuel: {
      titre: 'Le fond reclassé',
      contenu: 'Il s\'approche du fonds que Serathis a reclassé à 42 ans — pas directement, mais en triangulant depuis des documents adjacents. Il a besoin de 3 à 4 sources complémentaires pour reconstituer ce que le fonds contient. Il a deux des quatre sources. Il cherche les deux autres en contactant Talvyn (23) et Syvara (30) cette semaine.',
    },
  },

  evenements_narratifs: [
    {
      id: 'telos_archives',
      titre: 'La triangulation finale',
      description: 'Il cherche 4 sources complémentaires pour reconstituer le contenu du fonds reclassé. Il en a 2. Talvyn (23) possède des données techniques sur les champs lors de la Chute des Nuages. Syvara (30) a une observation sur Veralith que les archives officielles ne mentionnent pas. Si les 4 sources convergent, il aura reconstitué ce que Serathis a reclassé.',
      personnages_impliques: [23, 30],
      declencheur: 'Convergence de 4 sources pour reconstituer le contenu d\'archives reclassées',
      consequence: 'Découverte potentielle de la vraie nature de Veralith — et de ce que Serathis cache',
    },
    {
      id: 'telos_serathis',
      titre: 'La surveillance de son père',
      description: 'Serathis (24) reçoit des rapports hebdomadaires sur ses consultations d\'archives. Il sait que Telos s\'approche des zones sensibles. Il ne peut pas intervenir directement sans révéler qu\'il surveille. Telos ne sait pas exactement ce que son père surveille — mais il sait qu\'il est surveillé, et il adapte sa méthode.',
      personnages_impliques: [24, 103],
      declencheur: 'Course entre la triangulation de Telos et la décision d\'intervention de Serathis',
      consequence: 'L\'un des deux doit agir en premier — Telos trouver, ou Serathis intervenir',
    },
  ],

  arcs: ['arc_chute_des_nuages'],
  position_dans_arc: 'Héritier d\'Asterciel cherchant la vraie Veralith dans les archives depuis 5 ans. S\'approche du fonds reclassé par Serathis (24). A besoin de Talvyn (23) et Syvara (30) comme sources complémentaires pour reconstituer ce que le fonds contient.',

  relations: [
    { id: 24, nom: 'Serathis', type: 'famille', note: 'Son père. Le surveille via des rapports d\'archivistes. Ne peut pas l\'arrêter directement.' },
    { id: 30, nom: 'Syvara', type: 'allié', note: 'Source complémentaire sur Veralith. Refuse l\'aristocratie malgré son élément Stellaire.' },
    { id: 23, nom: 'Talvyn', type: 'contact', note: 'Source complémentaire sur les données techniques de la Chute des Nuages.' },
  ],

  combat: {
    sorts: [
      'Arc d\'analyse (Electrique) — décharge qui révèle les propriétés conductrices d\'une surface — lecture de structure',
      'Champ de protection (Electrique) — barrière électrostatique — protection contre les impacts physiques',
      'Impulsion de recherche (Electrique) — pulse électrique dans un support — activation de systèmes dormants',
    ],
  },

  image_prompts: [
    {
      id: 'telos_archives',
      description: 'Telos dans la salle des archives d\'Asterciel — un Aéride de 38 ans penché sur deux documents côte à côte, ses yeux or se déplaçant entre eux. Il feuillette les deux par les bords alternativement. Son expression est de concentration totale et d\'une légère tension — il approche de quelque chose.',
      style: 'réaliste héritier Aéride, archives stellaires, deux documents comparés, recherche méthodique, approche d\'une découverte',
    },
  ],

  lore_long: `Telos cherche la vraie Veralith dans les archives depuis 5 ans. Ce qu'il a trouvé ne correspondait pas à la version officielle — l'incohérence l'a rendu incapable de s'arrêter.

Serathis (24) le surveille via des rapports d'archivistes. Il ne peut pas intervenir directement sans révéler qu'il surveille — et révéler qu'il surveille révèle qu'il y a quelque chose à surveiller.

Il a besoin de 4 sources pour reconstituer ce que le fonds reclassé contient. Il en a 2. Il contacte Talvyn (23) et Syvara (30) cette semaine.`,
};

export default telos;
