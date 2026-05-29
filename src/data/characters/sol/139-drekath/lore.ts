import type { PersonnageLoreComplet } from '../../../lore-types';

const drekath: PersonnageLoreComplet = {
  id: 139,
  nom: 'Drekath',
  element: 'Sol',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Chthonien de 44 ans, cartographe de terrain — mobile, habituée aux espaces souterrains serrés.',
    peau: 'Pierre grise avec des traces de différents types de roche — les marques d\'un cartographe qui traverse des zones variées.',
    yeux: 'Gris-noir avec une qualité de quelqu\'un qui voit ce que les cartes officielles ne montrent pas.',
    vetements: 'Tenue de terrain compacte avec ses instruments de mesure. Discret — rien qui signale un cartographe indépendant dans une zone sensible.',
    signes_particuliers: 'Sa carte des galeries d\'Ormn-Dur inclut des passages que la Technocratie croit effondrés. Ils ne le sont pas. Il est le seul à le savoir.',
  },

  psychologie: {
    dominante: 'Cartographe indépendant des galeries d\'Ormn-Dur. Sa carte comprend des passages que la Technocratie a classés "effondrés" — par erreur ou pour une autre raison. Ces passages sont ouverts. Il est le seul à avoir vérifié sur le terrain.',
    mecanisme_de_defense: 'La carte non-partagée comme protection. Ce qui n\'est pas dans les registres officiels n\'attire pas les attentions officielles.',
    contradiction_interne: 'Ses passages non-officiels ont des usages — il les utilise lui-même. Mais les maintenir non-documentés pour sa protection les rend inutilisables pour d\'autres qui en auraient besoin (Thyrvum 136, Drekvar 131).',
    rapport_aux_autres: 'La Fosse Interdite est son contexte géologique central. Graveth (43) est un contact futur — il ne le connaît pas encore, mais ses cartes l\'intéresseront.',
    vision_du_monde: 'Les cartes officielles d\'Ormn-Dur sont incomplètes par négligence autant que par politique. Il cartographie ce que les autres n\'ont pas vérifié. Ses cartes sont plus précises que celles de la Technocratie.',
  },

  histoire: {
    enfance: {
      titre: 'La cartographie',
      contenu: 'Formation autodidacte en cartographie souterraine. Il avait commencé à cartographier les galeries d\'Ormn-Dur à 20 ans — par curiosité, puis par méthode.',
    },
    arrivee: {
      titre: 'Les passages "effondrés"',
      contenu: 'Il y a 5 ans, en vérifiant des zones classées "effondrées" dans les registres officiels, il avait découvert que plusieurs d\'entre elles étaient ouvertes. Pas toutes — mais assez pour que l\'erreur soit structurelle, pas accidentelle.',
    },
    premier_conflit: {
      titre: 'La Technocratie',
      contenu: 'Il avait commencé à comprendre que certains de ces passages "effondrés" conduisaient à des zones proches de la Fosse Interdite. Les classer "effondrés" servait peut-être à contrôler l\'accès plutôt qu\'à refléter la réalité.',
    },
    revelation: {
      titre: 'La carte sensible',
      contenu: 'Sa carte était devenue potentiellement dangereuse — elle contredisait les registres officiels de la Technocratie. La garder non-partagée était à la fois une protection et une responsabilité.',
    },
    etat_actuel: {
      titre: 'La carte',
      contenu: 'Il continue à cartographier. Sa carte est précise. Elle n\'est partagée avec personne.',
    },
  },

  evenements_narratifs: [
    {
      id: 'drekath_passages',
      titre: 'Les passages que la Technocratie croit fermés',
      description: 'Drekath a une carte montrant des passages que la Technocratie croit effondrés — ils sont ouverts. Si quelqu\'un a besoin d\'accéder à ces zones (pour fuir, enquêter, ou accéder à la Fosse), Drekath a les routes. Mais partager sa carte révèle qu\'il a travaillé dans des zones officiellement inaccessibles.',
      personnages_impliques: [43],
      declencheur: 'Quelqu\'un ayant besoin d\'accéder à des zones de la Fosse via les passages "effondrés"',
      consequence: 'Drekath partageant sa carte — et exposant la Technocratie sur les classifications incorrectes',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Cartographe indépendant. Sa carte inclut des passages que la Technocratie croit effondrés. Connaissance non-partagée des zones souterraines réelles.',

  relations: [
    { id: 43, nom: 'Graveth', type: 'contact', note: 'Contact futur — ses cartes intéresseront Graveth.' },
  ],

  combat: {
    sorts: [
      'Navigation souterraine (Sol) — orientation parfaite en terrain souterrain — avantage de terrain',
      'Glissement tellurique (Sol) — modification du sol — modification de passage',
    ],
  },

  image_prompts: [
    {
      id: 'drekath_carte',
      description: 'Drekath dans un passage souterrain d\'Ormn-Dur que les registres officiels classent "effondré" — un Chthonien de 44 ans avec ses instruments de mesure, notant que le passage est ouvert. Sa carte montre ce que la Technocratie ne sait pas. Son expression est de quelqu\'un qui possède une information qu\'il n\'est pas sûr de vouloir partager.',
      style: 'réaliste Chthonien cartographe indépendant, galeries d\'Ormn-Dur, passages non-officiels, carte précise, Fosse Interdite',
    },
  ],

  lore_long: `Drekath a cartographié les galeries d'Ormn-Dur de façon indépendante. Sa carte montre des passages que la Technocratie croit effondrés — ils sont ouverts.

Il est le seul à avoir vérifié sur le terrain. Il n'a partagé sa carte avec personne.

Ces passages conduisent à des zones proches de la Fosse Interdite. Les classifier "effondrés" n'était peut-être pas une erreur.`,
};

export default drekath;
