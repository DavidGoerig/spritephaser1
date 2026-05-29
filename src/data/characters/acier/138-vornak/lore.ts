import type { PersonnageLoreComplet } from '../../../lore-types';

const vornak: PersonnageLoreComplet = {
  id: 138,
  nom: 'Vornak',
  element: 'Acier',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Confédération Ormn-Dur',

  apparence: {
    taille_corpulence: 'Chthonien de 51 ans, administrateur — la corpulence de quelqu\'un qui se bat avec des documents plutôt qu\'avec des outils.',
    peau: 'Pierre grise avec des inclusions métalliques fines — l\'élément Acier d\'un administrateur s\'exprime différemment que celui d\'un guerrier.',
    yeux: 'Gris-argent avec une qualité de quelqu\'un qui connaît les règles mieux que ceux qui les font.',
    vetements: 'Tenue d\'administrateur de la Confédération — formelle, avec les tampons et registres attachés à la ceinture.',
    signes_particuliers: 'Il protège les droits miniers de Draven II (40) contre les empiétements de l\'Empire. Ce travail est légal, défensif, et souvent ignoré.',
  },

  psychologie: {
    dominante: 'Administrateur des droits miniers à Ormn-Dur. Son rôle est de protéger les droits de la Confédération — particulièrement ceux de Draven II (40) — contre les empiétements progressifs de l\'Empire. Ce travail est technique, légal, et souvent sous-estimé.',
    mecanisme_de_defense: 'La loi comme bouclier. Les empiétements de l\'Empire sont illégaux — les règles sont de son côté. Cette protection existe tant que les règles sont respectées.',
    contradiction_interne: 'Il protège des droits miniers. Les droits miniers donnent accès à la Fosse Interdite. Si la Fosse est dangereuse, les droits qu\'il protège incluent peut-être le droit de s\'en approcher trop près.',
    rapport_aux_autres: 'Draven II (40) est son principal mandant. Thyss (42) est une figure dont les politiques parfois empiètent sur les droits qu\'il administre.',
    vision_du_monde: 'Les droits miniers de la Confédération à Ormn-Dur sont le fondement de l\'autonomie locale. L\'Empire les érode par des décisions administratives progressives. Son travail est de ralentir cette érosion.',
  },

  histoire: {
    enfance: {
      titre: 'L\'administration',
      contenu: 'Formation juridique et administrative à Ormn-Dur. Il avait commencé à travailler sur les droits miniers à 25 ans — un domaine technique qui nécessitait de la précision et de la persévérance.',
    },
    arrivee: {
      titre: 'Draven II',
      contenu: 'Il avait été affecté à la protection des droits de Draven II (40) à 35 ans. Draven II avait des droits sur des zones minières importantes, dont des zones proches de la Fosse Interdite. L\'Empire cherchait régulièrement à les reprendre.',
    },
    premier_conflit: {
      titre: 'L\'empiètement',
      contenu: 'La première tentative d\'empiètement impérial qu\'il avait bloquée avait utilisé une interprétation créative d\'une clause administrative. Il avait produit une contre-argumentation légale qui avait tenu. L\'Empire avait essayé différemment l\'année suivante.',
    },
    revelation: {
      titre: 'Le travail défensif',
      contenu: 'Il avait compris que son travail était fondamentalement défensif — il bloquait des avancées sans jamais en faire. Cette asymétrie était épuisante mais nécessaire.',
    },
    etat_actuel: {
      titre: 'La protection',
      contenu: 'Il protège les droits de Draven II. L\'Empire cherche. Il bloque. Le cycle continue.',
    },
  },

  evenements_narratifs: [
    {
      id: 'vornak_droits',
      titre: 'L\'empiètement légal',
      description: 'Vornak protège les droits miniers de Draven II (40) contre l\'Empire. Si l\'Empire trouve une faille légale que Vornak n\'a pas anticipée — ou si une crise à la Fosse Interdite justifie un transfert de juridiction d\'urgence — les droits de Draven II pourraient être temporairement suspendus. Vornak aurait besoin de temps et de ressources pour les défendre.',
      personnages_impliques: [40, 42],
      declencheur: 'L\'Empire trouvant une faille légale ou une crise justifiant un transfert de juridiction',
      consequence: 'Droits de Draven II menacés — Vornak en combat administratif d\'urgence',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Administrateur des droits miniers. Protège les droits de Draven II contre l\'Empire. Travail défensif et technique.',

  relations: [
    { id: 40, nom: 'Draven II', type: 'contact', note: 'Principal mandant. Ses droits miniers sont la responsabilité de Vornak.' },
    { id: 42, nom: 'Thyss', type: 'contact', note: 'Ses politiques empiètent parfois sur les droits administrés.' },
  ],

  combat: {
    sorts: [
      'Armure administrative (Acier) — protection renforcée — défense sous pression',
      'Barrière de métal (Acier) — obstruction physique — contrôle de passage',
    ],
  },

  image_prompts: [
    {
      id: 'vornak_registres',
      description: 'Vornak dans son bureau administratif d\'Ormn-Dur — un Chthonien de 51 ans avec des registres de droits miniers étalés. Il prépare une réponse à un empiètement impérial. Son expression est de quelqu\'un qui sait que son travail est efficace et invisibile.',
      style: 'réaliste Chthonien administrateur, Ormn-Dur, droits miniers, protection contre l\'Empire, travail défensif',
    },
  ],

  lore_long: `Vornak protège les droits miniers de Draven II (40) contre les empiètements progressifs de l'Empire à Ormn-Dur.

Son travail est légal et défensif — il bloque des avancées sans jamais en faire. Épuisant et nécessaire.

Si l'Empire trouve une faille légale, les droits de Draven II pourraient être temporairement suspendus.`,
};

export default vornak;
