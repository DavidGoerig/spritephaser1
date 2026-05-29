import type { PersonnageLoreComplet } from '../../../lore-types';

const kareol: PersonnageLoreComplet = {
  id: 183,
  nom: 'Kareol',
  element: 'Sol',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Homme-Lien de 58 ans, géologue amateur — corpulence de quelqu\'un qui passe du temps sur le terrain. Tenu par la passion plus que par l\'institution.',
    peau: 'Ton terreux avec des marques de travail en extérieur — il cartographie sur le terrain depuis des décennies.',
    yeux: 'Bruns avec une qualité de quelqu\'un qui lit les formations terrestres comme d\'autres lisent des visages.',
    vetements: 'Tenue de terrain pratique avec des outils de cartographie. Rien d\'officiel.',
    signes_particuliers: 'Il a cartographié les zones de saturation élémentaire de l\'Isthme de façon indépendante. Ses cartes sont plus précises que les cartes officielles — parce qu\'il n\'a pas d\'intérêt politique dans ce qu\'elles montrent.',
  },

  psychologie: {
    dominante: 'Géologue amateur dans l\'Isthme qui a cartographié les zones de saturation élémentaire par curiosité personnelle. Il a commencé à observer des anomalies du sol liées à des concentrations élémentaires il y a 15 ans. Ses cartes ont évolué d\'une documentation géologique vers une analyse de la saturation.',
    mecanisme_de_defense: 'L\'amateur comme protection. Il n\'est pas officiel — il n\'a pas de mission impériale, pas d\'affiliation politique. Ses cartes sont celles d\'un retraité passionné. Personne ne prend au sérieux les cartes d\'un amateur... sauf quand elles se révèlent plus précises que les officielles.',
    contradiction_interne: 'Ses cartes sont plus précises parce qu\'il cartographie ce qu\'il voit, pas ce que ses mandants veulent qu\'il voie. Cette précision les rend utiles à des parties qui ont des intérêts différents sur les zones de saturation. Il ne contrôle pas ce qu\'on en fera.',
    rapport_aux_autres: 'La Saturation de l\'Isthme est son objet d\'étude. Kaevorn (243) est dans son réseau — un autre professionnel de terrain qui travaille dans des zones similaires et à qui il a transmis certaines de ses observations.',
    vision_du_monde: 'Le sol dit des choses. Les formations géologiques documentent l\'histoire des zones. Les anomalies de saturation laissent des traces mesurables. Ses cartes sont un document honnête de ce qui se passe.',
  },

  histoire: {
    enfance: {
      titre: 'La géologie',
      contenu: 'Passionné de géologie depuis l\'enfance dans l\'Isthme. Il avait commencé à cartographier les formations rocheuses et souterraines à 25 ans — par curiosité personnelle, sans formation officielle.',
    },
    arrivee: {
      titre: 'Les anomalies',
      contenu: 'À 43 ans, il avait commencé à noter des formations inhabituelles dans certaines zones — des modifications de la composition du sol liées à des concentrations élémentaires. Il avait ajouté ces anomalies à ses cartes.',
    },
    premier_conflit: {
      titre: 'Les officiels',
      contenu: 'Il avait présenté ses cartes à un officiel de la Confédération qui les avait comparées aux cartes officielles. Les siennes montraient des zones que les cartes officielles n\'indiquaient pas. L\'officiel avait dit que ses données étaient non-vérifiées. Il avait compris que non-vérifiées signifiait gênantes.',
    },
    revelation: {
      titre: 'La précision politique',
      contenu: 'Il avait compris que les cartes officielles de saturation avaient été établies avec des zones d\'omission intentionnelles — des zones qui auraient révélé des concentrations d\'Élus ou des activités que certaines factions ne voulaient pas documenter. Ses cartes les montraient.',
    },
    etat_actuel: {
      titre: 'Le cartographe',
      contenu: 'Il cartographie. Les zones de saturation s\'élargissent. Ses cartes sont plus précises que jamais.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kareol_cartes',
      titre: 'Les cartes qui montrent l\'invisible',
      description: 'Les cartes de Kareol montrent des zones de saturation que les cartes officielles ont omises intentionnellement. Si quelqu\'un — Sarevyn (176), un Dissident — lui demande ses cartes complètes, l\'information pourrait révéler des concentrations d\'Élus ou des activités cachées dans des zones que les officiels pensent invisibles.',
      personnages_impliques: [243],
      declencheur: 'Un contact lui demandant ses cartes de saturation complètes',
      consequence: 'Cartes complètes partagées — révélation de zones omises intentionnellement dans les cartes officielles',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Géologue amateur ayant cartographié les zones de saturation de l\'Isthme de façon indépendante. Cartes plus précises que les officielles parce qu\'il n\'a pas d\'intérêt politique.',

  relations: [
    { id: 243, nom: 'Kaevorn', type: 'contact', note: 'Professionnel de terrain à qui il a transmis certaines observations.' },
  ],

  combat: {
    sorts: [
      'Frappe de sol (Sol) — impact de formation rocheuse — attaque de terrain',
      'Ancrage (Sol) — fixation au terrain — résistance aux déplacements forcés',
    ],
  },

  image_prompts: [
    {
      id: 'kareol_terrain',
      description: 'Kareol sur le terrain dans l\'Isthme — un Homme-Lien de 58 ans agenouillé devant une formation rocheuse anormale. Il note des mesures sur une carte déjà couverte d\'annotations. À côté, une carte officielle de la même zone — beaucoup plus vide. La différence entre les deux est évidente.',
      style: 'réaliste Homme-Lien géologue amateur, Isthme, cartes de saturation, formation anormale, précision sans intérêt politique',
    },
  ],

  lore_long: `Kareol cartographie les zones de saturation élémentaire de l'Isthme depuis 15 ans. Il est amateur — aucune affiliation institutionnelle.

Ses cartes sont plus précises que les cartes officielles. Les cartes officielles ont des zones d'omission intentionnelles. Les siennes montrent ce qui est là.

Il ne contrôle pas ce qu'on fera de ses cartes quand quelqu'un les demandera.`,
};

export default kareol;
