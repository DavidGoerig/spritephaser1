import type { PersonnageLoreComplet } from '../../../lore-types';

const bressyn: PersonnageLoreComplet = {
  id: 76,
  nom: 'Bressyn',
  element: 'Feu',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Pyrienne de 38 ans, de taille moyenne avec des mains qui connaissent les soins. Sa corpulence dit le travail constant, pas le combat. Elle se déplace vite et silencieusement dans les espaces étroits.',
    peau: 'Brune Pyrien avec une luminescence rouge-rose aux paumes — l\'élément Feu d\'une soigneuse, orienté vers la chaleur thérapeutique plutôt que combative.',
    yeux: 'Rouges avec une qualité d\'évaluation médicale. Elle examine d\'abord, elle parle après.',
    vetements: 'Tenue sobre sans insignes — elle ne peut pas porter de signes Dissidents dans son travail. Ses poches sont pleines de matériel médical. Le reste de son équipement est dans les caches du réseau.',
    signes_particuliers: '12 ans de service clandestin, jamais prise. Ce n\'est pas de la chance — c\'est de la discipline.',
  },

  psychologie: {
    dominante: 'Soigneuse clandestine du réseau de Brasia (1) depuis 12 ans. Elle soigne les blessés du réseau Dissident — ceux qui ne peuvent pas aller dans les structures médicales impériales. Sa discrétion est totale. Sa compétence est établie.',
    mecanisme_de_defense: 'La compétence comme protection. Tant qu\'elle est indispensable, le réseau la protège. Tant qu\'elle est discrète, l\'Empire ne la trouve pas.',
    contradiction_interne: 'Elle soigne des personnes poursuivies par l\'Empire. Elle a refusé de soigner des agents impériaux blessés quand l\'occasion s\'était présentée. Cette décision l\'avait placée dans une catégorie qu\'elle avait acceptée consciemment.',
    rapport_aux_autres: 'Brasia (1) est la référence du réseau — Bressyn ne la rencontre pas souvent, mais le réseau qu\'elle entretient est la raison pour laquelle Bressyn a les ressources pour soigner. Thessandra (10) — contact régulier, terrain médical partagé.',
    vision_du_monde: 'Les blessures ne choisissent pas de camp. Elle choisit de quel camp elle soigne. Ce choix est fait depuis longtemps.',
  },

  histoire: {
    enfance: {
      titre: 'La formation',
      contenu: 'Formation médicale standard dans les structures de Varkhôl. Elle était compétente et promise à une position stable. À 26 ans, elle avait soigné un blessé Dissident qui lui avait demandé de ne pas le signaler. Elle avait dit oui.',
    },
    arrivee: {
      titre: 'Le premier oui',
      contenu: 'Ce premier oui avait mené à un deuxième, puis à un troisième. À 27 ans, Brasia lui avait proposé une intégration formelle dans le réseau. Elle avait quitté sa position officielle. C\'était irréversible et elle le savait.',
    },
    premier_conflit: {
      titre: 'Les 12 ans',
      contenu: 'En 12 ans, elle avait soigné des dizaines de blessés du réseau dans des conditions variables — caves, marchés nocturnes, ruines. Elle avait appris à travailler avec ce qu\'elle avait.',
    },
    revelation: {
      titre: 'La durée',
      contenu: '12 ans sans être prise est exceptionnel. Elle avait analysé pourquoi : pas de routine, changement constant de caches, réseau minimal de contacts. Sa survie était méthodique.',
    },
    etat_actuel: {
      titre: 'Le service continue',
      contenu: 'Elle soigne. Le réseau la protège. La durée de son service est en elle-même une forme de légitimité dans le réseau.',
    },
  },

  evenements_narratifs: [
    {
      id: 'bressyn_capture',
      titre: 'Le risque de 12 ans',
      description: 'Bressyn n\'a jamais été prise en 12 ans. Cette durée est une statistique qui finit par attirer l\'attention de l\'Empire. Si son réseau de caches ou ses contacts sont compromis, la durée de sa discrétion ne la protège plus.',
      personnages_impliques: [1, 10],
      declencheur: 'Un contact de Bressyn compromis par une opération impériale',
      consequence: 'Réseau médical clandestin exposé — ou Bressyn disparaissant dans la clandestinité totale',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Soigneuse clandestine de 12 ans dans le réseau de Brasia. Jamais prise. Compétence médicale établie. Discrétion méthodique.',

  relations: [
    { id: 1, nom: 'Brasia', type: 'allié', note: 'Source du réseau. Contact rare mais fondamental.' },
    { id: 10, nom: 'Thessandra', type: 'contact', note: 'Contact régulier. Terrain médical partagé.' },
  ],

  combat: {
    sorts: [
      'Chaleur thérapeutique (Feu) — application de chaleur précise sur les blessures — accélération de la coagulation',
      'Aura de soin (Feu) — chaleur régénératrice à courte portée — stabilisation des blessés graves',
    ],
  },

  image_prompts: [
    {
      id: 'bressyn_soin',
      description: 'Bressyn dans une cache Dissidente de Varkhôl — une Pyrienne de 38 ans soignant un blessé à la lumière minimale. Ses paumes luisent doucement. Son expression est concentrée et habituée. 12 ans de service dans des conditions comme celle-ci.',
      style: 'réaliste Pyrienne soigneuse clandestine, cache Dissidente, soin à la lumière minimale, 12 ans de discrétion',
    },
  ],

  lore_long: `Bressyn soigne les blessés du réseau Dissident de Brasia (1) à Varkhôl depuis 12 ans. Elle n'a jamais été prise.

Sa survie est méthodique — pas de routine, caches variables, contacts minimaux.

Elle a choisi de quel camp elle soigne. Ce choix est fait depuis longtemps.`,
};

export default bressyn;
