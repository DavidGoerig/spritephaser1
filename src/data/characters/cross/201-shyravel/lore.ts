import type { PersonnageLoreComplet } from '../../../lore-types';

const shyravel: PersonnageLoreComplet = {
  id: 201,
  nom: 'Shyravel',
  element: 'Ténèbres',
  element2: 'Feu',
  espece: 'Umbrien',
  region: 'Vel\'Nox',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Umbrienne de 33 ans, combattante — corpulence de quelqu\'un entraîné à frapper vite et à disparaître avant la réponse.',
    peau: 'Grise profonde avec des veines thermiques orangées — son double élément Ténèbres/Feu est visible dans sa peau.',
    yeux: 'Noirs avec des éclats orangés qui s\'intensifient à l\'approche d\'une frappe.',
    vetements: 'Tenue de combat Dissident — sombre, adaptée au mouvement silencieux.',
    signes_particuliers: 'Elle utilise l\'obscurité pour approcher avant d\'utiliser le Feu pour frapper. La séquence est sa signature — personne ne la voit venir, tout le monde voit la frappe. Elle ne fait pas les deux à la fois : elle choisit lequel est utile à chaque moment.',
  },

  psychologie: {
    dominante: 'Combattante Dissident Umbrien avec un double élément Ténèbres/Feu. Elle a développé une technique de combat qui exploite ses deux éléments en séquence : approche dans l\'obscurité, frappe avec le Feu. Sa réputation vient de l\'invisibilité de l\'approche et de la visibilité maximale de la frappe — un effet psychologique autant que tactique.',
    mecanisme_de_defense: 'La surprise permanente. Ses adversaires ne savent jamais lequel de ses éléments elle va utiliser. L\'incertitude est une arme.',
    contradiction_interne: 'Son double élément est une force exceptionnelle — et une identité qu\'elle ne peut pas facilement cacher. La chaleur thermique d\'une Umbrien avec du Feu est détectable même dans l\'obscurité. Ses adversaires les plus expérimentés savent la chercher autrement que par la vue.',
    rapport_aux_autres: 'Vethis (46) est dans son réseau — le chef Dissident dont elle applique les décisions. La Rupture Thermique de Varkhôl est dans ses connexions — un événement que son double élément lui permet de comprendre d\'une façon que les Umbriens purs ne peuvent pas.',
    vision_du_monde: 'L\'obscurité prépare. Le Feu accomplit. Les deux sont nécessaires. Ceux qui n\'ont qu\'un élément ont la moitié des options.',
  },

  histoire: {
    enfance: {
      titre: 'Le double élément',
      contenu: 'Née à Vel\'Nox avec un double élément Ténèbres/Feu — rare chez les Umbriens, qui ont généralement un élément d\'obscurité mais pas thermique. Elle avait été recrutée par les Dissidentes à 18 ans pour sa combinaison.',
    },
    arrivee: {
      titre: 'La technique',
      contenu: 'Elle avait développé sa technique de combat en conditions réelles — l\'approche dans l\'obscurité, la frappe au Feu. Les premières années, les deux éléments interféraient l\'un avec l\'autre. Elle avait appris à les utiliser en séquence plutôt que simultanément.',
    },
    premier_conflit: {
      titre: 'L\'adversaire thermique',
      contenu: 'Un Régulateur avait appris à la détecter via la chaleur résiduelle de son élément Feu dans l\'obscurité. Elle avait développé une technique pour minimiser cette signature thermique quand elle approchait.',
    },
    revelation: {
      titre: 'L\'effet psychologique',
      contenu: 'Elle avait compris que l\'invisibilité de l\'approche suivie de la visibilité maximale de la frappe créait un effet psychologique sur ses adversaires — une peur de l\'espace obscur autour d\'eux. Cette peur était une arme séparée de la frappe elle-même.',
    },
    etat_actuel: {
      titre: 'La combattante',
      contenu: 'Elle combat pour les Dissidentes. Ses adversaires apprennent à craindre l\'obscurité.',
    },
  },

  evenements_narratifs: [
    {
      id: 'shyravel_combat',
      titre: 'L\'approche dans l\'obscurité',
      description: 'Shyravel utilise l\'obscurité pour approcher avant d\'utiliser le Feu pour frapper. Si elle est confrontée à Threnvox (200) — un Pyrien qui peut aussi opérer dans l\'obscurité — sa séquence habituelle sera contre-mesurée par quelqu\'un qui ne craint pas l\'obscurité et peut détecter sa chaleur.',
      personnages_impliques: [46],
      declencheur: 'Confrontation avec Threnvox (200) ou un autre agent capable de détecter la chaleur dans l\'obscurité',
      consequence: 'Shyravel contrainte d\'adapter sa technique face à un adversaire qui peut anticiper les deux phases de sa séquence',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Combattante Dissident Umbrien avec double élément Ténèbres/Feu. Technique d\'approche dans l\'obscurité suivie de frappe au Feu. Réputation parmi les Dissidentes de Vel\'Nox.',

  relations: [
    { id: 46, nom: 'Vethis', type: 'contact', note: 'Chef Dissident dont elle applique les décisions en combat.' },
  ],

  combat: {
    sorts: [
      'Approche d\'ombre (Ténèbres) — disparition dans l\'obscurité pour repositionnement — mobilité invisible',
      'Frappe incendiaire (Feu) — attaque thermique concentrée depuis l\'obscurité — surprise maximale',
    ],
  },

  image_prompts: [
    {
      id: 'shyravel_combat',
      description: 'Shyravel en état de préparation à Vel\'Nox — une Umbrienne de 33 ans dont la peau grise montre des veines orangées actives. Elle est dans une zone d\'obscurité complète — invisible sauf pour les veines thermiques. Devant elle, un Régulateur impérial qui ne l\'a pas encore vue. Il le fera quand le Feu viendra.',
      style: 'réaliste Umbrien/Pyrien combattante Dissidente, Vel\'Nox, double élément Ténèbres/Feu, approche invisible, frappe visible',
    },
  ],

  lore_long: `Shyravel est combattante Dissident à Vel'Nox avec un double élément Ténèbres/Feu. Elle utilise l'obscurité pour approcher — puis le Feu pour frapper.

La séquence est sa signature. Personne ne la voit venir. Tout le monde voit la frappe. L'effet psychologique sur ses adversaires est une arme séparée.

Son double élément la rend exceptionnelle et identifiable. Les adversaires expérimentés cherchent sa chaleur dans l'obscurité.`,
};

export default shyravel;
