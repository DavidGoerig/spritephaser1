import type { PersonnageLoreComplet } from '../../../lore-types';

const nyrveth: PersonnageLoreComplet = {
  id: 321,
  nom: 'Nyrveth',
  element: 'Psy',
  element2: 'Ténèbres',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Petite, avec une façon de circuler dans Vel\'Nox qui minimise les traces — pas de trajet direct, pas d\'habitude fixe.',
    peau: 'Gris-lavande Umbrien avec des zones légèrement plus sombres autour des yeux — l\'intensité de son travail de détection laisse des marques sous la peau.',
    yeux: 'Violets avec une qualité d\'écoute — elle regarde en écoutant quelque chose que les autres ne perçoivent pas.',
    vetements: 'Tenues qui changent régulièrement — pas de style fixe. Elle ne veut pas être reconnaissable à son apparence.',
    signes_particuliers: 'Elle ne parle pas dans les espaces publics de Vel\'Nox. Pas par paranoïa — par protocole. Les conversations importantes se tiennent dans des espaces qu\'elle a préalablement vérifiés.',
  },

  psychologie: {
    dominante: 'Détection et neutralisation des surveillances psychiques. La Convergence a des analystes comme Shyrethvon (320) qui cartographient les Umbriens de Vel\'Nox. Elle cherche leurs traces et les efface ou les contourne.',
    mecanisme_de_defense: 'La contre-signature. Elle peut générer un résidu Ténèbres artificiel qui masque la signature réelle d\'une personne. Elle l\'a développé seule sur 4 ans.',
    contradiction_interne: 'Elle détecte les surveillances psychiques de la Convergence. Pour les détecter, elle doit opérer avec une précision similaire à ce qu\'elle cherche à neutraliser. Elle utilise les mêmes outils que ses adversaires.',
    rapport_aux_autres: 'Vethis (46) est son contact Dissident de référence — il sait ce qu\'elle fait et qui elle couvre. Velthyn (160) est quelqu\'un qu\'elle couvre activement — une personne avec une signature très distinctive que la Convergence cherche.',
    vision_du_monde: 'La liberté de circuler dans Vel\'Nox sans être catalogué est un droit qui n\'existe plus naturellement. Elle maintient ce droit artificiellement pour ceux qui le demandent.',
  },

  histoire: {
    enfance: {
      titre: 'La perception des perceptions',
      contenu: 'Née à Vel\'Nox. À 14 ans, elle avait commencé à percevoir non seulement les résidus Ténèbres dans les espaces, mais aussi les présences psychiques qui les lisaient. Elle pouvait sentir quelqu\'un qui regardait l\'ombre. Cette méta-perception était rare même parmi les Psy/Ténèbres.',
    },
    arrivee: {
      titre: 'La première surveillance détectée',
      contenu: 'À 22 ans, dans un marché de Vel\'Nox, elle avait senti une présence psychique en train de lire les résidus Ténèbres de la foule. Discrètement. Méthodiquement. Elle avait suivi la présence sur deux heures sans être repérée. Elle avait compris ce qui se passait. Elle avait cherché les Dissidentes le lendemain.',
    },
    premier_conflit: {
      titre: 'La contre-signature',
      contenu: 'À 27 ans, elle avait développé une méthode pour générer un résidu Ténèbres artificiel qui masquait la signature réelle d\'une personne. Les premiers tests avaient fonctionné partiellement. Sur 4 ans, elle avait affiné jusqu\'à avoir une méthode qui résistait aux analystes de niveau Shyrethvon (320) dans 80% des cas.',
    },
    revelation: {
      titre: 'Velthyn comme priorité',
      contenu: 'Vethis (46) lui avait signalé Velthyn (160) — une personne dont la signature Ténèbres était si distinctive qu\'elle était probablement déjà dans les archives de la Convergence. Elle avait analysé la signature de Velthyn. Distinctive était un euphémisme. Elle avait décidé de couvrir Velthyn en priorité sur ses autres missions.',
    },
    etat_actuel: {
      titre: 'Les 12 personnes couvertes',
      contenu: 'Elle couvre activement 12 personnes à Vel\'Nox — des individus dont elle maintient la contre-signature à jour. Velthyn (160) est la priorité. Ses mises à jour doivent être régulières — une contre-signature non actualisée se dégrade en 3 à 4 semaines et devient détectable comme artificielle.',
    },
  },

  evenements_narratifs: [
    {
      id: 'nyrveth_velthyn_priorite',
      titre: 'La signature de Velthyn',
      description: 'Velthyn (160) a une signature Ténèbres si distinctive que les analystes de la Convergence l\'ont probablement déjà dans leurs archives. Nyrveth la couvre en priorité — mise à jour de contre-signature toutes les 2 semaines plutôt que les 3-4 semaines standard. Si Nyrveth ne peut pas atteindre Velthyn pour la mise à jour, la couverture se dégrade et devient détectable.',
      personnages_impliques: [46, 160],
      declencheur: 'Signature distinctive de Velthyn identifiée comme priorité de couverture',
      consequence: 'Couverture active maintenue par Nyrveth seule — vulnérabilité systémique si elle est neutralisée',
    },
    {
      id: 'nyrveth_detectee_elle_meme',
      titre: 'La question de sa propre signature',
      description: 'Elle couvre 12 personnes. Sa propre signature est celle d\'une analyste psychique qui génère des résidus artificiels — une signature distinctive pour quelqu\'un qui sait la lire. Shyrethvon (320) ou ses équivalents pourraient l\'identifier par sa méthode elle-même. Elle a essayé d\'appliquer sa contre-signature à elle-même. Le résultat est imparfait — elle ne peut pas lire sa propre signature de l\'extérieur.',
      personnages_impliques: [320],
      declencheur: 'Réalisation que sa méthode de contre-signature a elle-même une signature',
      consequence: 'Vulnérabilité personnelle identifiée — non résolue',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Contre-analyste qui maintient la liberté de circulation psychique dans Vel\'Nox. Sa méthode de contre-signature est la seule protection existante contre le Protocole de la Convergence pour les personnes qu\'elle couvre.',

  relations: [
    { id: 46, nom: 'Vethis', type: 'allié', note: 'Contact Dissident de référence. Sait ce qu\'elle fait et qui elle couvre. Signale les priorités.' },
    { id: 160, nom: 'Velthyn', type: 'allié', note: 'Personne couverte en priorité — signature trop distinctive. Mise à jour toutes les 2 semaines.' },
  ],

  combat: {
    sorts: [
      'Contre-signature (Ténèbres) — génération d\'un résidu artificiel masquant une signature réelle — protection de couverture',
      'Lecture de surveillance (Psy) — détection d\'une présence psychique en train de surveiller — alerte',
      'Effacement de trace (Ténèbres) — suppression des résidus Ténèbres dans un espace — nettoyage de passage',
    ],
  },

  image_prompts: [
    {
      id: 'nyrveth_detection',
      description: 'Nyrveth dans un marché de Vel\'Nox, immobile au milieu du mouvement. Ses yeux violets sont légèrement fermés. Elle écoute quelque chose dans les ombres — une présence qui surveille. Personne autour d\'elle ne sait ce qu\'elle fait.',
      style: 'réaliste umbrien discret, marché de Vel\'Nox, détection active invisible, présence calme dans le mouvement',
    },
  ],

  lore_long: `Nyrveth détecte les surveillances psychiques de la Convergence dans Vel'Nox. Elle peut sentir quelqu'un qui lit les ombres.

Elle couvre 12 personnes avec des contre-signatures — des résidus artificiels qui masquent leurs signatures réelles. Velthyn (160) est la priorité, mise à jour toutes les 2 semaines. Si Nyrveth ne peut pas atteindre Velthyn, la couverture se dégrade en 3 semaines et devient détectable.

Sa propre méthode a une signature distinctive. Quelqu'un qui sait la lire pourrait l'identifier par sa contre-signature elle-même. Elle ne peut pas appliquer sa méthode à elle-même de façon satisfaisante.

Elle utilise les mêmes outils que ses adversaires. C'est la seule façon de les voir.`,
};

export default nyrveth;
