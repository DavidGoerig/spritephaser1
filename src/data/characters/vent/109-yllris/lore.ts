import type { PersonnageLoreComplet } from '../../../lore-types';

const yllris: PersonnageLoreComplet = {
  id: 109,
  nom: 'Yllris',
  element: 'Vent',
  espece: 'Aéride',
  region: 'Asterciel',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Aéride de 46 ans, légère avec des mouvements qui épousent les courants. Elle ne va jamais contre le vent — elle va avec lui.',
    peau: 'Pâle bleutée Aéride avec une luminescence de vent omniprésente — son élément et son corps sont indissociables.',
    yeux: 'Gris changeants avec une qualité d\'anticipation. Elle voit où le vent va avant qu\'il y soit.',
    vetements: 'Tenue de vol minimale — elle n\'emporte que ce qu\'elle peut porter en vol. Aucune carte, aucun instrument. Tout est dans sa mémoire.',
    signes_particuliers: 'Son art de la navigation thermique est entièrement oral. Elle n\'a jamais écrit une carte. Elle ne le fera jamais.',
  },

  psychologie: {
    dominante: 'Navigatrice des courants thermiques d\'Asterciel. Son savoir sur les courants est le plus précis disponible — et entièrement non-documenté. Elle a choisi l\'oral par conviction : une carte peut être copiée, volée, transmise sans comprendre. Son savoir nécessite d\'être transmis directement.',
    mecanisme_de_defense: 'Le savoir non-documenté comme protection. Ce qui n\'est pas écrit ne peut pas être saisi.',
    contradiction_interne: 'Son savoir mourra avec elle si elle ne le transmet pas. Elle le sait. Elle n\'a pas encore décidé à qui le transmettre.',
    rapport_aux_autres: 'Syvara (30) est dans son réseau — quelqu\'un qui comprend la valeur de sa connaissance. Caeryn (101) est quelqu\'un de proche dans la façon de naviguer.',
    vision_du_monde: 'Les courants thermiques ont une logique que les cartes ne peuvent pas capturer entièrement. Ce qu\'on ne peut pas mettre sur une carte existe quand même.',
  },

  histoire: {
    enfance: {
      titre: 'Les courants',
      contenu: 'Née avec un élément Vent exceptionnellement sensible aux variations thermiques. Elle avait appris les courants d\'Asterciel par des années de vol avant de les comprendre comme un système.',
    },
    arrivee: {
      titre: 'L\'oral',
      contenu: 'À 25 ans, un commanditaire lui avait demandé de documenter ses connaissances sur les courants. Elle avait refusé. La demande lui avait fait comprendre pourquoi elle ne voulait pas documenter.',
    },
    premier_conflit: {
      titre: 'La Chute',
      contenu: 'La Chute des Nuages avait changé les courants thermiques à Asterciel. Sa connaissance avait dû s\'adapter. Personne d\'autre n\'avait les éléments pour comprendre ces changements — elle était la seule à les avoir observés en temps réel.',
    },
    revelation: {
      titre: 'La transmission',
      contenu: 'Elle avait commencé à enseigner à Caeryn (101) — pas ses routes spécifiques, mais la façon de lire les courants. Cette transmission partielle était ce qu\'elle pouvait faire pour le moment.',
    },
    etat_actuel: {
      titre: 'Les courants',
      contenu: 'Elle navigue. Elle enseigne partiellement. Elle n\'a pas encore transmis entièrement son savoir à quelqu\'un.',
    },
  },

  evenements_narratifs: [
    {
      id: 'yllris_transmission',
      titre: 'Le savoir qui doit être transmis',
      description: 'Yllris est la seule à connaître les courants thermiques d\'Asterciel après la Chute. Si elle meurt sans transmettre entièrement son savoir, ce savoir disparaît. Si quelqu\'un lui donne une raison urgente de transmettre — une crise qui nécessite sa connaissance maintenant — elle doit décider à qui et comment.',
      personnages_impliques: [30, 101],
      declencheur: 'Crise nécessitant une connaissance précise des courants thermiques post-Chute',
      consequence: 'Yllris transmettant son savoir — ou le gardant jusqu\'à une meilleure occasion qui ne vient pas',
    },
  ],

  arcs: ['arc_chute_des_nuages'],
  position_dans_arc: 'Navigatrice des courants thermiques. Savoir entièrement oral. Unique après la Chute. N\'a pas encore décidé à qui le transmettre.',

  relations: [
    { id: 30, nom: 'Syvara', type: 'contact', note: 'Comprend la valeur de sa connaissance.' },
    { id: 101, nom: 'Caeryn', type: 'contact', note: 'Enseigne partiellement les courants.' },
  ],

  combat: {
    sorts: [
      'Navigation de courant (Vent) — déplacement dans les courants thermiques — vitesse et précision',
      'Tempête locale (Vent) — perturbation d\'un courant thermique — désorientation d\'un ennemi',
    ],
  },

  image_prompts: [
    {
      id: 'yllris_vol',
      description: 'Yllris en vol dans les courants thermiques d\'Asterciel — une Aéride de 46 ans qui navigue sans carte. Son corps épouse le vent. Elle sait exactement où elle est.',
      style: 'réaliste Aéride navigatrice thermique, courants d\'Asterciel, savoir oral non-documenté, vol précis',
    },
  ],

  lore_long: `Yllris connaît les courants thermiques d'Asterciel mieux que quiconque. Son savoir est entièrement oral — elle n'a jamais écrit une carte.

Après la Chute des Nuages, elle est la seule à avoir observé les changements des courants en temps réel.

Son savoir mourra avec elle si elle ne le transmet pas. Elle n'a pas encore décidé à qui.`,
};

export default yllris;
