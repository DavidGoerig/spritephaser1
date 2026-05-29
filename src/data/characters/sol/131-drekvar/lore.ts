import type { PersonnageLoreComplet } from '../../../lore-types';

const drekvar: PersonnageLoreComplet = {
  id: 131,
  nom: 'Drekvar',
  element: 'Sol',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Technocratie',

  apparence: {
    taille_corpulence: 'Chthonien de 71 ans, vétéran — corps compact, marqué par des décennies de travail souterrain. Les Chthoniens vieillissent en pierre.',
    peau: 'Pierre grise avec des veines de quartz — les marques d\'un mineur de longue date. Ses mains sont calleuses au point de ressembler à de la roche brute.',
    yeux: 'Gris-noir avec une qualité de quelqu\'un qui voit bien dans l\'obscurité et médiocrement dans la lumière vive.',
    vetements: 'Tenue de mineur de la Technocratie — fonctionnelle, portée depuis des années. La lampe frontale est intégrée à son casque comme une extension de lui-même.',
    signes_particuliers: 'Sa mémoire est la seule carte de certaines galeries profondes d\'Ormn-Dur. Aucun document ne les répertorie. Si il meurt, ces passages disparaissent.',
  },

  psychologie: {
    dominante: 'Mineur vétéran de la Technocratie. Sa valeur réside dans sa mémoire — des décennies de travail souterrain l\'ont rendu la seule carte vivante de galeries profondes que personne n\'a documentées. Il le sait. La Technocratie le sait aussi. Cette connaissance est sa seule protection.',
    mecanisme_de_defense: 'La mémoire non-documentée comme valeur. Ce qui n\'est pas écrit ne peut pas lui être volé — mais ça peut disparaître avec lui.',
    contradiction_interne: 'Sa mémoire est précieuse parce qu\'elle n\'est pas documentée. La documenter la rendrait accessible — et lui rendrait moins indispensable. Il n\'a jamais documenté.',
    rapport_aux_autres: 'Karm (41) est dans son réseau — quelqu\'un qui travaille dans les couches profondes et utilise parfois ses connaissances. La Fosse Interdite est son contexte professionnel direct.',
    vision_du_monde: 'Les galeries profondes d\'Ormn-Dur ont une logique que les documents ne peuvent pas capturer — des vibrations, des humidités, des odeurs. Sa mémoire inclut ces éléments. Une carte n\'en inclurait pas.',
  },

  histoire: {
    enfance: {
      titre: 'Les mines',
      contenu: 'Né à Ormn-Dur dans une famille de mineurs. Il avait commencé le travail souterrain à 12 ans — une entrée précoce même pour les Chthoniens.',
    },
    arrivee: {
      titre: 'Les galeries profondes',
      contenu: 'À 35 ans, il avait été affecté aux galeries profondes — les couches au-delà des zones cartographiées officielles. Ces zones n\'avaient pas été documentées parce que les conditions rendaient la cartographie difficile. Il avait appris à les naviguer par mémoire.',
    },
    premier_conflit: {
      titre: 'La demande de documentation',
      contenu: 'La Technocratie avait demandé une documentation formelle des galeries profondes à 50 ans. Il avait commencé à transcrire — et avait réalisé que sa transcription perdait les informations les plus importantes. Il avait arrêté et rendu un document incomplet.',
    },
    revelation: {
      titre: 'L\'indispensabilité',
      contenu: 'Il avait compris que sa valeur reposait sur l\'incomplétude de la documentation. La Technocratie avait besoin de lui physiquement présent pour accéder à ces galeries. Cette dépendance était sa protection.',
    },
    etat_actuel: {
      titre: 'La mémoire vivante',
      contenu: 'Il travaille encore — pas pour la productivité, mais parce que la Technocratie ne peut pas se permettre de le perdre. Il est la seule carte.',
    },
  },

  evenements_narratifs: [
    {
      id: 'drekvar_memoire',
      titre: 'La galerie que personne d\'autre ne connaît',
      description: 'Drekvar est la seule carte des galeries profondes d\'Ormn-Dur. Si une crise nécessite d\'accéder à ces galeries — une rupture de la Fosse Interdite, une fuite, une opération secrète — Drekvar est indispensable. Si il est incapacité avant de pouvoir guider, ces galeries deviennent inaccessibles.',
      personnages_impliques: [41],
      declencheur: 'Crise nécessitant l\'accès aux galeries profondes non-documentées',
      consequence: 'Drekvar indispensable — ou la connaissance perdue si il est incapacité',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Mineur vétéran. Seule carte vivante de galeries profondes non-documentées. Sa mémoire est sa protection et sa vulnérabilité.',

  relations: [
    { id: 41, nom: 'Karm', type: 'contact', note: 'Travaille dans les couches profondes. Utilise sa connaissance.' },
  ],

  combat: {
    sorts: [
      'Frappe tellurique (Sol) — vibration du sol — désorientation de terrain',
      'Tunnel d\'urgence (Sol) — création rapide de passage — fuite souterraine',
    ],
  },

  image_prompts: [
    {
      id: 'drekvar_galerie',
      description: 'Drekvar dans une galerie profonde d\'Ormn-Dur — un Chthonien de 71 ans avec sa lampe frontale, navigant dans l\'obscurité. Il n\'a pas besoin de carte — la galerie est dans sa mémoire. Son expression est d\'un homme qui sait exactement où il est.',
      style: 'réaliste Chthonien mineur vétéran, galeries profondes d\'Ormn-Dur, mémoire vivante, obscurité souterraine',
    },
  ],

  lore_long: `Drekvar est le seul à connaître certaines galeries profondes d'Ormn-Dur. Aucun document ne les répertorie — sa mémoire est la seule carte.

Il ne les a jamais documentées entièrement. Cette incomplétude le rend indispensable à la Technocratie.

Si il meurt avant de guider quelqu'un, ces passages disparaissent.`,
};

export default drekvar;
