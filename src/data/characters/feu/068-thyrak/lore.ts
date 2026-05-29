import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrak: PersonnageLoreComplet = {
  id: 68,
  nom: 'Thyrak',
  element: 'Feu',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Technocratie',

  apparence: {
    taille_corpulence: 'Pyrien de 40 ans, mince avec la posture du chercheur — légèrement voûté sur ses instruments. Ses mains sont propres malgré l\'élément Feu : il travaille avec des mesures, pas avec des flammes directes.',
    peau: 'Brune Pyrien avec une luminescence orangée faible mais constante — l\'élément Feu d\'un scientifique qui l\'utilise comme outil de mesure plutôt que comme arme.',
    yeux: 'Rouges clairs, derrière des lunettes de protection thermique. Il regarde les données, pas les personnes.',
    vetements: 'Tenue de laboratoire de la Technocratie — fonctionnelle, marquée d\'instruments de mesure. Ses poches sont pleines de relevés.',
    signes_particuliers: 'Il parle de la Rupture en termes de thermiques résiduelles et de courbes de dissipation. Cette façon de parler rend ses interlocuteurs inconfortables. Il ne comprend pas pourquoi.',
  },

  psychologie: {
    dominante: 'Scientifique spécialisé dans les thermiques résiduelles post-catastrophe. Ses données sur la Rupture Thermique sont les plus précises disponibles. Il les a vendues à la Technocratie. La Technocratie les a transmises à l\'Empire. Thyrak ne sait pas cette dernière partie.',
    mecanisme_de_defense: 'La science comme immunité éthique. Il collecte des données. Ce que d\'autres font de ces données n\'est pas sa responsabilité professionnelle.',
    contradiction_interne: 'Il admire Valdris (12) comme ingénieur. Ses données thermiques ont peut-être contribué à des décisions impériales concernant Varkhôl. Ces deux faits coexistent sans qu\'il les relie.',
    rapport_aux_autres: 'Valdris (12) est une référence professionnelle — Thyrak cite ses travaux structuraux. Leurs domaines se croisent. Ils ne se sont pas rencontrés directement.',
    vision_du_monde: 'La Rupture est un phénomène thermique. L\'étudier correctement nécessite de la distance émotionnelle. Cette distance est la rigueur scientifique, pas l\'indifférence.',
  },

  histoire: {
    enfance: {
      titre: 'L\'élément comme outil',
      contenu: 'Né dans une famille de techniciens de la Technocratie. Son élément Feu avait été identifié tôt comme particulièrement sensible aux variations thermiques — une précision instrumentale rare. La Technocratie l\'avait orienté vers la recherche.',
    },
    arrivee: {
      titre: 'La spécialisation',
      contenu: 'À 28 ans, il s\'était spécialisé dans l\'analyse des événements thermiques majeurs — volcanismes, surcharges élémentaires, catastrophes industrielles. La Rupture Thermique de Varkhôl était le plus grand événement de sa spécialité en 50 ans.',
    },
    premier_conflit: {
      titre: 'Les données',
      contenu: 'Ses relevés post-Rupture étaient exceptionnels — il avait commencé les mesures dans les 6 heures suivant l\'événement. La Technocratie lui avait offert un financement considérable pour continuer. Il avait accepté sans poser de questions sur l\'usage.',
    },
    revelation: {
      titre: 'La transmission',
      contenu: 'Il avait appris indirectement que ses données avaient été transmises à une "instance supérieure". Il avait supposé un comité académique. Il n\'avait pas cherché à confirmer.',
    },
    etat_actuel: {
      titre: 'Les mesures continuent',
      contenu: 'Il continue ses relevés. Les thermiques résiduelles de la Rupture durent encore — un phénomène scientifiquement remarquable. Ses publications sont citées dans des contextes qu\'il ne lit pas.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrak_donnees',
      titre: 'Ce que la science a alimenté',
      description: 'Les données de Thyrak sur les thermiques résiduelles de la Rupture sont dans les mains de l\'Empire via la Technocratie. Si Thyrak apprenait l\'usage réel de ses recherches, il devrait décider si la rigueur scientifique inclut une responsabilité sur les applications.',
      personnages_impliques: [12],
      declencheur: 'Thyrak apprenant que ses données ont servi des décisions impériales',
      consequence: 'Remise en question de la neutralité scientifique — ou refus de la remettre en question',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Scientifique de la Technocratie étudiant les thermiques résiduelles de la Rupture. Ses données servent l\'Empire sans qu\'il le sache.',

  relations: [
    { id: 12, nom: 'Valdris', type: 'contact', note: 'Référence professionnelle. Leurs domaines se croisent.' },
  ],

  combat: {
    sorts: [
      'Mesure thermique (Feu) — lecture précise des températures ambiantes — diagnostic des surcharges élémentaires',
      'Neutralisation de chaleur (Feu) — absorption des thermiques résiduelles — protection de zone limitée',
    ],
  },

  image_prompts: [
    {
      id: 'thyrak_mesures',
      description: 'Thyrak sur le site de la Rupture Thermique — un Pyrien mince avec des instruments de mesure, prenant des relevés dans les ruines. Son expression est de concentration scientifique. Les décombres autour de lui sont des données, pas une catastrophe.',
      style: 'réaliste Pyrien scientifique, site de la Rupture Thermique, instruments de mesure, distance professionnelle, données sans éthique',
    },
  ],

  lore_long: `Thyrak est le scientifique qui a fait les relevés thermiques les plus précis de la Rupture Thermique. Ses données sont exceptionnelles.

La Technocratie les a transmises à l'Empire. Il ne sait pas cette partie.

Ses publications sont citées dans des contextes qu'il ne lit pas. Il continue ses mesures.`,
};

export default thyrak;
