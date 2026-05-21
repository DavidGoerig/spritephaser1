import type { PersonnageLoreComplet } from '../../../lore-types';

const orvenII: PersonnageLoreComplet = {
  id: 263,
  nom: 'Orven II',
  element: 'Normal',
  element2: 'Combat',
  espece: 'Hommes-Liens',
  region: 'Citadelle',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Moyen, sec — corps d\'un homme qui utilise tout et ne gaspille rien, y compris lui-même.',
    peau: 'Mate, sans reflet élémentaire notable. L\'absence de signature élémentaire visible est ce qu\'il a à la place d\'un élément.',
    yeux: 'Gris-vert, d\'une clarté inconfortable — il regarde les gens comme des données à organiser.',
    vetements: 'Tenue de capteur impérial, fonctionnelle et sans grade affiché. Il porte du matériel de détection Électrique au niveau de la ceinture — appareils calibrés qui compensent ce qu\'il ne peut pas percevoir naturellement.',
    signes_particuliers: 'N\'a aucune signature élémentaire propre — "Normal" au sens strict du terme. Dans une pièce d\'Élus, il est la personne dont la présence élémentaire ressemble à un trou. Certains Élus le trouvent profondément déstabilisant pour cette raison.',
  },

  psychologie: {
    dominante: 'Obsession calibrée. Il a transformé l\'envie en méthode — ce qu\'il ne peut pas être, il peut le cartographier avec une précision que même les Élus n\'atteignent pas sur eux-mêmes.',
    mecanisme_de_defense: 'La supériorité technique. Il est meilleur traqueur que n\'importe quel Élu parce qu\'il n\'a pas de signature à gérer. Sa normalité est une compétence. Il a décidé que c\'était suffisant. Ce n\'est pas suffisant.',
    contradiction_interne: 'Il traque avec une obsession que ses supérieurs attribuent au zèle professionnel. Ce n\'est pas du zèle — c\'est de l\'envie transformée en outil. Il ne sait pas encore la différence.',
    rapport_aux_autres: 'Ses sujets ne sont pas des personnes — ce sont des cas à résoudre. Il ne les méprise pas : il les envie. Cette envie est ce qui rend ses profils si précis.',
    vision_du_monde: 'L\'Empire a raison d\'enregistrer et de contrôler ce qui est élémentairement exceptionnel. Ce qui est exceptionnel doit être géré. Il n\'examine pas si "géré" est une euphémisme.',
  },

  histoire: {
    enfance: {
      titre: 'L\'enfant sans élément',
      contenu: 'Né dans une famille d\'Élus — père Électrique, mère Eau, deux sœurs Plante. Lui : Normal. L\'absence d\'élément dans une famille d\'Élus n\'est pas une neutralité — c\'est une dissonance quotidienne. À 10 ans il avait commencé à cartographier les éléments de ses proches dans un carnet. Pas pour les imiter. Pour comprendre ce qu\'il ne serait jamais.',
    },
    arrivee: {
      titre: 'Le capteur comme compensation',
      contenu: 'Recruté à 22 ans par les services impériaux de détection après avoir passé les meilleures notes de sa promotion sur les tests de cartographie élémentaire — sans élément propre. La précision de ses analyses était supérieure à celle des Élus parce qu\'il n\'avait pas de signature personnelle à neutraliser. L\'Empire avait trouvé un outil rare.',
    },
    premier_conflit: {
      titre: 'Le "cas exceptionnel"',
      contenu: 'Il y a 5 ans, il avait reçu un dossier : un Élu non-enregistré dont les indices laissaient supposer une cohérence élémentaire "hors-spectre standard". Ses supérieurs avaient dit "exceptionnel". Il avait lu ce mot et n\'avait plus pensé qu\'à ça.',
    },
    revelation: {
      titre: 'Le profil du Second Avatar',
      contenu: 'Cinq années à constituer un profil à partir de traces indirectes. La résonance résiduelle dans les espaces traversés. Les anomalies dans les archives d\'enregistrement. Les patterns de déplacement. Il a construit un portrait de quelqu\'un qu\'il n\'a jamais vu et qu\'il reconnaîtrait immédiatement dans n\'importe quelle pièce parce que la présence du Second Avatar est l\'inverse exact de sa propre absence.',
    },
    etat_actuel: {
      titre: 'Plus proche que personne',
      contenu: 'Il est le capteur impérial le plus avancé sur la traque du Second Avatar — plus précis que Sythavel (269), différemment. Là où Sythavel comprend les motivations, Orven II comprend la signature. Il est à 2 semaines du Second Avatar. Thyskara est à 3. Aucun des deux ne sait que l\'autre cherche.',
    },
  },

  evenements_narratifs: [
    {
      id: 'orven_profil_5_ans',
      titre: 'Cinq années de portrait',
      description: 'Son dossier sur le Second Avatar fait maintenant 340 pages — documents, analyses, corrélations, projections. Il l\'a relu en entier 7 fois. Chaque relecture a produit une nouvelle couche d\'interprétation. Ses supérieurs l\'appellent "Dossier Lumineux" dans leurs communications internes — une blague sur le fait qu\'il éclaire quelque chose que personne d\'autre n\'arrivait à voir.',
      personnages_impliques: [59],
      declencheur: 'Cinq ans d\'analyse sur le cas exceptionnel',
      consequence: 'Portrait le plus précis existant du Second Avatar — outil et obsession simultanément',
    },
    {
      id: 'orven_cendrix_modele',
      titre: 'Dépasser le modèle',
      description: 'Cendrix (2) était le modèle en capteurs impériaux quand Orven II était entré dans le service. Méthodique, efficace, sans excès. Orven II l\'a dépassé en précision depuis 3 ans — mais pas en méthode. Là où Cendrix s\'arrête au profil professionnel, Orven II continue parce que quelque chose en lui ne peut pas s\'arrêter.',
      personnages_impliques: [2],
      declencheur: 'Progression dans les rangs des capteurs impériaux',
      consequence: 'Dépassement technique du modèle — par obsession, pas par talent',
    },
    {
      id: 'orven_avel_indirect',
      titre: 'Partenaire indirect',
      description: 'Avel (64) travaille sur la même traque par un vecteur différent — les registres de Virex, les enfants disparus. Ils ne se parlent pas directement. Leurs analyses se croisent dans des rapports communs où chacun est "Source A" et "Source B". Orven II a lu les analyses d\'Avel. Il les trouve utiles mais insuffisantes — elles décrivent le contexte, pas la cible.',
      personnages_impliques: [64],
      declencheur: 'Analyse parallèle via les registres de Virex',
      consequence: 'Complémentarité non coordonnée — chacun voit une dimension différente de la même cible',
    },
  ],

  arcs: ['arc_second_avatar'],
  position_dans_arc: 'L\'ennemi le plus proche. Il a le portrait le plus précis du Second Avatar et s\'en approche physiquement. Son obsession l\'a rendu dangereux d\'une façon que ses supérieurs ne mesurent pas entièrement.',

  relations: [
    { id: 59, nom: 'Second Avatar', type: 'ennemi', note: 'Sa cible depuis 5 ans. Portrait de 340 pages. À 2 semaines. L\'envie transformée en outil de traque.' },
    { id: 64, nom: 'Avel', type: 'contact_nécessaire', note: 'Partenaire indirect — analyses croisées dans des rapports communs. Orven II les trouve utiles mais insuffisantes.' },
    { id: 2, nom: 'Cendrix', type: 'mentor', note: 'Modèle dépassé en précision mais pas en méthode. La différence est l\'obsession.' },
  ],

  combat: {
    sorts: [
      'Lecture de trace (Normal/équipement) — détection Électrique des signatures élémentaires résiduelles via appareils calibrés',
      'Neutralisation de présence (Normal) — suppression temporaire de sa propre signature élémentaire — il n\'en a pas, ce qui le rend indetectable aux capteurs élémentaires standard',
      'Frappe de précision (Combat) — attaque technique sans recours à l\'élémentaire — efficace précisément contre les Élus qui lisent les signatures avant de réagir',
    ],
  },

  image_prompts: [
    {
      id: 'orven_analyse',
      description: 'Orven II dans un bureau, entouré de cartes et de documents. Il est en train d\'ajouter une couche à son dossier — une trace résiduelle identifiée dans un rapport de terrain. Ses appareils Électrique sont alignés sur son bureau. L\'expression est celle d\'une concentration totale, légèrement fébrile. Il s\'approche.',
      style: 'réaliste humain, lumière artificielle, bureau de capteur impérial, tons gris et métal',
    },
  ],

  lore_long: `Orven II n'a pas d'élément.

Dans une famille d'Élus, ça ressemblait à une erreur de naissance. Son père émettait du bleu. Ses sœurs verdissaient les plantes en les touchant. Lui : rien. Un trou dans la pièce, là où il y avait supposé être quelque chose.

Il a décidé à 14 ans que s'il ne pouvait pas être ce qu'ils étaient, il pouvait le comprendre mieux qu'eux. Cette décision est ce qui l'a conduit aux services de capteurs impériaux. Il n'a pas de signature à neutraliser — les Élus qui utilisent leurs capacités pour détecter d'autres Élus doivent d'abord filtrer leur propre bruit. Lui n'a pas de bruit. Ses lectures sont plus claires que celles de n'importe quel Élu.

Ce qu'il ne comprend pas : sa précision n'est pas un talent. C'est de l'envie appliquée avec rigueur. Il cartographie ce qu'il ne peut pas être parce que se rapprocher de cette chose — en la comprenant, en la traçant, en la trouvant — lui donne quelque chose qui ressemble à de la possession. Pas la chose elle-même. L'idée de la chose.

340 pages sur le Second Avatar. Il l'a relu 7 fois. Chaque relecture est à la fois une analyse et une prolongation du contact.

Il est à 2 semaines.

Ce qu'il fera quand il sera à portée — c'est une question qu'il n'a pas entièrement répondue. Il a les ordres. Capturer. Transférer. Il ne sait pas si capturer quelque chose d'aussi dense que ce qu'il a passé 5 ans à tracer va ressembler à de la victoire ou à quelque chose de plus difficile à nommer.`,
};

export default orvenII;
