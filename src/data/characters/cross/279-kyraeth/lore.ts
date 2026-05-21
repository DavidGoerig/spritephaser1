import type { PersonnageLoreComplet } from '../../../lore-types';

const kyraeth: PersonnageLoreComplet = {
  id: 279,
  nom: 'Kyraeth',
  element: 'Electrique',
  element2: 'Acier',
  espece: 'Néréides',
  region: 'Ormn-Dur',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Robuste pour une Néréide — travail de forge l\'a éloigné du physique fluide typique de son espèce. Épaules larges, poignets épais.',
    peau: 'Bleu-gris Néréide, avec des taches métalliques aux jointures et aux paumes — l\'Acier qui remonte. Inhabituellement sec pour quelqu\'un de son espèce.',
    yeux: 'Vert profond, avec un regard direct désarmant — les Néréides ont habituellement un regard plus fuyant. Elle fixe les problèmes.',
    vetements: 'Tablier de forge épais, gants renforcés aux jointures. Elle porte toujours deux outils dans la poche gauche — les deux qu\'elle utilise le plus souvent, selon la journée.',
    signes_particuliers: 'Elle travaille en silence presque total. Dans les mines d\'Ormn-Dur, le bruit des machines est permanent — elle a appris à se concentrer dans le bruit plutôt qu\'autour de lui.',
  },

  psychologie: {
    dominante: 'Pragmatisme artisanal. Les outils électriques fonctionnent ou ne fonctionnent pas. Elle sait comment les faire fonctionner.',
    mecanisme_de_defense: 'La tâche suivante. Quand une situation devient complexe, elle trouve toujours quelque chose à réparer.',
    contradiction_interne: 'Elle est Néréide dans un endroit qui n\'est pas fait pour les Néréides — pas d\'eau libre, peu de lumière, pression constante. Elle est bien dans cet endroit. Ça la déroute.',
    rapport_aux_autres: 'Drekvar (131) lui fait confiance parce qu\'elle ne pose pas de questions sur les galeries dans lesquelles il veut que ses outils fonctionnent. Kaeleth (86) lui envoie des spécifications depuis Thalassyr — il est le seul contact qu\'elle maintient avec son espèce.',
    vision_du_monde: 'Quelqu\'un doit fabriquer les outils avec lesquels les mines fonctionnent. Les mines sont là. Les outils doivent fonctionner. Tout le reste est secondaire.',
  },

  histoire: {
    enfance: {
      titre: 'La frontière',
      contenu: 'Née dans un port côtier qui faisait face à la frontière terrestre d\'Ormn-Dur. Son père était marin Néréide. Sa mère était artisane d\'une famille installée à la frontière depuis trois générations — avec du sang Chthonien dans les ancêtres, ce qui avait donné l\'Acier. Elle avait grandi entre deux mondes sans appartenir entièrement à aucun.',
    },
    arrivee: {
      titre: 'Le premier outil',
      contenu: 'À 22 ans, elle était entrée à Ormn-Dur comme apprentie d\'un artisan local. À 26 ans, elle avait créé son premier outil électrique fonctionnant dans les conditions de la mine — ce que personne avant elle n\'avait réussi parce que la combinaison Electrique/Acier permettait de calibrer le champ électrique selon la composition minérale locale, automatiquement.',
    },
    premier_conflit: {
      titre: 'L\'eau qui manque',
      contenu: 'Il y a 4 ans, lors d\'une semaine où les canaux d\'eau d\'Ormn-Dur étaient fermés pour maintenance, elle avait réalisé à quel point elle dépendait de l\'eau pour fonctionner — pas professionnellement, physiquement. Elle avait passé cette semaine avec un malaise constant qu\'elle n\'avait pas su nommer jusqu\'à ce qu\'elle touche le premier filet d\'eau réouvert.',
    },
    revelation: {
      titre: 'La galerie interdite',
      contenu: 'Drekvar lui avait demandé de calibrer des outils pour une galerie dont il lui avait donné les coordonnées sans expliquer pourquoi elle n\'était pas dans les plans officiels. Elle avait calibré. Les outils fonctionnaient. Elle n\'avait pas demandé ce que Drekvar faisait dans cette galerie non officielle.',
    },
    etat_actuel: {
      titre: 'L\'atelier qui tourne',
      contenu: 'Son atelier à Ormn-Dur produit maintenant des outils pour une dizaine de clients réguliers dans les mines. Elle est la seule artisane de la région à maîtriser la calibration électrique pour les environnements souterrains. Kaeleth lui envoie des commandes depuis Thalassyr pour des équipements hybrides réseau-port. C\'est de l\'exportation artisanale. Ça lui convient.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kyraeth_galerie_non_officielle',
      titre: 'Les outils sans adresse',
      description: 'Drekvar lui a demandé des outils calibrés pour une galerie non répertoriée. Elle les a fabriqués selon ses spécifications. Elle n\'a pas de raison de demander ce que font les galeries non répertoriées — sa compétence, c\'est l\'outil, pas l\'usage. Mais elle garde trace de chaque commande inhabituelle dans un carnet personnel.',
      personnages_impliques: [131],
      declencheur: 'Commande pour galerie hors-plans officiels',
      consequence: 'Implication indirecte dans les activités de Drekvar sans connaissance du contexte',
    },
    {
      id: 'kyraeth_eau_manquante',
      titre: 'La semaine sans eau',
      description: 'La semaine de fermeture des canaux lui avait révélé quelque chose sur elle-même qu\'elle n\'avait pas voulu savoir : elle n\'est pas entièrement de l\'endroit où elle a choisi de vivre. Elle est Néréide. Ormn-Dur lui convient professionnellement. Mais il y a quelque chose d\'essentiel qu\'elle y cherche et qu\'elle n\'y trouve qu\'approximativement.',
      personnages_impliques: [],
      declencheur: 'Fermeture de maintenance des canaux d\'eau',
      consequence: 'Conscience de sa propre nature élémentaire dans un environnement non-aquatique',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Artisane des outils qui permettent l\'accès aux zones contestées. Elle fabrique les instruments avec lesquels Ormn-Dur fonctionne — y compris ses marges non officielles.',

  relations: [
    { id: 131, nom: 'Drekvar', type: 'allié', note: 'Client principal. Ne pose pas de questions, elle non plus. Confiance mutuelle fondée sur la compétence, pas la connaissance.' },
    { id: 86, nom: 'Kaeleth', type: 'allié', note: 'Contact à Thalassyr. Envoie des commandes d\'équipements hybrides. Seul lien maintenu avec son espèce.' },
  ],

  combat: {
    sorts: [
      'Surcharge d\'outil (Electrique) — activation forcée d\'un équipement électrique au-delà de ses limites — dommages sur l\'équipement, utilité unique',
      'Armature de forge (Acier) — durcissement rapide de surfaces métalliques proches — défense environnementale',
      'Calibration de terrain (combiné) — lecture du champ électrique d\'un environnement minier — identification des zones de risque ou de passage',
    ],
  },

  image_prompts: [
    {
      id: 'kyraeth_atelier',
      description: 'Kyraeth dans son atelier souterrain à Ormn-Dur, calibrant un outil électrique avec ses deux éléments — les taches métalliques aux mains luisant légèrement. Autour d\'elle, les parois de roche, l\'humidité artificielle des canaux proches. Elle est concentrée. Elle est dans son lieu.',
      style: 'réaliste souterrain, lumière artificielle chaude, tons roche et métal, présence tranquille',
    },
  ],

  lore_long: `Kyraeth fabrique des outils que les mineurs d'Ormn-Dur ne pourraient pas trouver ailleurs.

La combinaison Electrique/Acier lui permet de calibrer un champ électrique selon la composition minérale locale — automatiquement, sans instrumentation externe. Chaque roche répond différemment. Elle ajuste. L'outil fonctionne là où les outils standard s'éteignent ou brûlent.

Elle est Néréide dans une mine souterraine, ce qui est techniquement absurde. Elle y est bien, ce qui est également absurde. La semaine de fermeture des canaux d'eau lui a rappelé qu'il y a des limites à l'adaptation — elle avait fonctionné, mais pas confortablement. Elle garde ça en note, sans en faire plus.

Drekvar lui a demandé de calibrer des outils pour une galerie non répertoriée. Elle a calibré. Elle n'a pas demandé ce que fait Drekvar dans des galeries non officielles. Elle garde trace de chaque commande inhabituelle dans un carnet personnel, sans savoir elle-même pourquoi.

Kaeleth lui envoie des commandes depuis Thalassyr pour des équipements hybrides réseau-port — un pied dans son monde d'origine, via des colis, sans avoir à y retourner.

C'est suffisant.`,
};

export default kyraeth;
