import type { PersonnageLoreComplet } from '../../../lore-types';

const aevris: PersonnageLoreComplet = {
  id: 105,
  nom: 'Aevris',
  element: 'Electrique',
  espece: 'Aéride',
  region: 'Asterciel',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Aéride de 41 ans, de taille ordinaire avec des mains d\'artisane — précises, avec des traces de métal et d\'isolation électrique.',
    peau: 'Pâle bleutée Aéride avec des éclairs électriques fins aux doigts — l\'élément Electrique d\'une artisane dont la précision est dans ses extrémités.',
    yeux: 'Gris électrique avec une qualité d\'évaluation technique. Elle regarde les instruments qu\'elle fabrique comme des problèmes à résoudre.',
    vetements: 'Tablier d\'atelier par-dessus une tenue pratique. Des outils dans chaque poche.',
    signes_particuliers: 'Elle vend ses instruments de mesure à Talvyn (23) à prix réduit par respect professionnel. Ce rabais dit quelque chose sur ce qu\'elle pense de son travail et de qui mérite de l\'utiliser.',
  },

  psychologie: {
    dominante: 'Artisane d\'instruments de mesure des champs élémentaires à Asterciel. Ses instruments sont les plus précis disponibles dans les strates moyennes. Elle sélectionne ses clients non pas selon leur paiement mais selon leur usage.',
    mecanisme_de_defense: 'La qualité du travail comme critère de tout. Elle fait des choses précises. Elle les vend à des gens qui les utilisent précisément.',
    contradiction_interne: 'Elle applique un critère éthique dans ses ventes — certains clients ne peuvent pas acheter ses instruments quel que soit leur prix. Ce critère n\'est pas entièrement cohérent et dépend de ses jugements personnels.',
    rapport_aux_autres: 'Talvyn (23) est son client respecté — elle lui vend moins cher parce qu\'elle pense que son travail mérite ses instruments. Gavryn (102) est son réseau professionnel.',
    vision_du_monde: 'Un instrument précis entre de mauvaises mains fait de mauvaises mesures pour de mauvaises raisons. Ses instruments méritent de meilleures raisons.',
  },

  histoire: {
    enfance: {
      titre: 'L\'artisanat',
      contenu: 'Née dans une famille d\'artisans des strates moyennes. Son élément Electrique l\'avait orientée vers les instruments de mesure des champs — une niche technique rarissime.',
    },
    arrivee: {
      titre: 'La réputation',
      contenu: 'À 30 ans, ses instruments avaient une réputation qui dépassait les strates moyennes. Des acheteurs des strates supérieures avaient essayé d\'en acheter. Certains avaient réussi. D\'autres non.',
    },
    premier_conflit: {
      titre: 'Le refus',
      contenu: 'Elle avait refusé de vendre à un agent impérial qui voulait ses instruments pour des mesures dont elle n\'approuvait pas l\'usage. Il avait offert plus. Elle avait maintenu le refus. La situation avait créé des tensions.',
    },
    revelation: {
      titre: 'Talvyn',
      contenu: 'Talvyn (23) était venu à son atelier avec des questions techniques précises. Elle avait vendu au prix réduit sans qu\'il le demande. C\'était une décision instinctive qu\'elle n\'avait pas entièrement analysée.',
    },
    etat_actuel: {
      titre: 'L\'atelier',
      contenu: 'Elle fabrique. Elle vend selon ses critères. Son atelier est une des rares choses dans les strates moyennes d\'Asterciel qui fonctionne selon ses propres règles.',
    },
  },

  evenements_narratifs: [
    {
      id: 'aevris_instruments',
      titre: 'Les instruments dans un conflit',
      description: 'Les instruments d\'Aevris sont les plus précis disponibles. Si les deux camps d\'un conflit cherchent à mesurer des phénomènes élémentaires, ils chercheront ses instruments. Sa politique de sélection des clients la placera dans une position où elle devra choisir à qui elle permet la précision.',
      personnages_impliques: [23, 102],
      declencheur: 'Les deux camps d\'un conflit cherchant les meilleurs instruments de mesure',
      consequence: 'Aevris devant appliquer ses critères sous pression',
    },
  ],

  arcs: ['arc_chute_des_nuages'],
  position_dans_arc: 'Artisane d\'instruments de mesure des champs élémentaires. Sélective dans ses clients. Vend à Talvyn (23) à prix réduit.',

  relations: [
    { id: 23, nom: 'Talvyn', type: 'contact', note: 'Client respecté. Prix réduit par conviction.' },
    { id: 102, nom: 'Gavryn', type: 'contact', note: 'Réseau professionnel électrique.' },
  ],

  combat: {
    sorts: [
      'Surcharge d\'instrument (Electrique) — court-circuit d\'un équipement — sabotage précis',
      'Frappe électrique précise (Electrique) — décharge ciblée — dommage concentré',
    ],
  },

  image_prompts: [
    {
      id: 'aevris_atelier',
      description: 'Aevris dans son atelier des strates moyennes d\'Asterciel — une Aéride de 41 ans assemblant un instrument de mesure. Ses doigts luisent électriques. Elle travaille avec une précision absolue.',
      style: 'réaliste Aéride artisane instruments, strates moyennes d\'Asterciel, précision technique, sélection éthique des clients',
    },
  ],

  lore_long: `Aevris fabrique des instruments de mesure des champs élémentaires dans les strates moyennes d'Asterciel.

Ses instruments sont les plus précis disponibles. Elle sélectionne ses clients selon l'usage, pas le paiement.

Elle vend à Talvyn (23) à prix réduit par respect professionnel. Elle a refusé des achats impériaux.`,
};

export default aevris;
