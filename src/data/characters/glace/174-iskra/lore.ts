import type { PersonnageLoreComplet } from '../../../lore-types';

const iskra: PersonnageLoreComplet = {
  id: 174,
  nom: 'Iskra',
  element: 'Glace',
  espece: 'Givrin',
  region: 'Crysalme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Givrin de 61 ans, pêcheur sous-glaciaire — corpulence de quelqu\'un qui travaille physiquement dans des espaces restreints depuis des décennies.',
    peau: 'Blanche-cristalline avec des marques de travail sous la glace — des zones où le froid extrême a laissé des traces durables.',
    yeux: 'Bleus avec une qualité de quelqu\'un qui voit les structures de loin. Il lit la glace comme une carte.',
    vetements: 'Tenue de pêcheur sous-glaciaire — isolation maximale, équipement adapté aux galeries étroites.',
    signes_particuliers: 'Il appelle les craquelures dans la glace du Champ Gelé "les veines". Il les suit depuis 20 ans. Ses cartes de veines sont plus détaillées que tout ce que la Monarchie possède.',
  },

  psychologie: {
    dominante: 'Pêcheur sous-glaciaire Givrin qui connaît les structures de glace du Champ Gelé depuis 20 ans. Il a nommé les craquelures "les veines" — elles sont pour lui des caractéristiques du paysage, pas des signes d\'alarme. Mais leur progression correspond à ce que Sylkra (53) observe comme dégradation anormale.',
    mecanisme_de_defense: 'La connaissance du terrain comme légitimité. Il connaît les veines mieux que n\'importe quel scientifique. Sa carte est réelle. Son observation est réelle. L\'interprétation est une autre question.',
    contradiction_interne: 'Il voit les veines progresser. Il a une carte de leur progression sur 20 ans. Il ne l\'a pas interprétée comme une dégradation — elles faisaient partie du paysage. Ses données pourraient changer la compréhension du Champ si quelqu\'un les comparait aux données de Sylkra.',
    rapport_aux_autres: 'Sylkra (53) est dans son réseau — elle a entendu parler de ses observations et cherche à les comparer avec les siennes. Le Gel Éternel est son terrain de travail quotidien.',
    vision_du_monde: 'La glace vit. Les veines bougent. C\'est la nature de la glace. Il pêche dans un environnement vivant.',
  },

  histoire: {
    enfance: {
      titre: 'La pêche sous-glaciaire',
      contenu: 'Né dans une famille de pêcheurs sous-glaciaires de Crysalme. La pêche sous la glace du Champ était une tradition de famille — les passages sous la surface gelée abritaient des espèces Givrin uniques.',
    },
    arrivee: {
      titre: 'Les veines',
      contenu: 'À 41 ans, il avait commencé à cartographier les craquelures du Champ qu\'il traversait pour pêcher. Il les avait appelées "les veines" — une métaphore de pêcheur. Sa carte avait commencé comme un aide-navigation.',
    },
    premier_conflit: {
      titre: 'La veine fermée',
      contenu: 'Une de ses routes de pêche avait été bloquée par l\'extension d\'une veine — une craquelure qui s\'était élargie jusqu\'à rendre le passage impossible. Il avait trouvé une autre route. Il n\'avait pas cherché d\'explication.',
    },
    revelation: {
      titre: 'Sylkra',
      contenu: 'Sylkra (53) lui avait envoyé un message demandant à voir sa carte. Il avait entendu que ses "veines" correspondaient à ce qu\'elle observait comme micro-fractures. La connexion entre son vocabulaire de pêcheur et les données scientifiques de Sylkra lui avait semblé étrange.',
    },
    etat_actuel: {
      titre: 'Le pêcheur',
      contenu: 'Il pêche. Les veines bougent. Sylkra attend sa carte.',
    },
  },

  evenements_narratifs: [
    {
      id: 'iskra_carte',
      titre: 'La carte des veines',
      description: 'Iskra possède une carte de 20 ans des "veines" dans la glace du Champ Gelé. Si Sylkra (53) la compare à ses propres données de micro-fractures, la corrélation révèlera une progression que ni l\'une ni l\'autre ne peut ignorer — et une dégradation documentée sur un horizon temporel bien plus long que les archives scientifiques officielles.',
      personnages_impliques: [53],
      declencheur: 'Iskra partageant sa carte avec Sylkra',
      consequence: 'Preuve de progression des fractures sur 20 ans — données impossibles à classer comme "variation naturelle"',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Pêcheur sous-glaciaire connaissant les craquelures du Champ Gelé depuis 20 ans. Les appelle "les veines". Sa carte est plus détaillée que tout ce que la Monarchie possède.',

  relations: [
    { id: 53, nom: 'Sylkra', type: 'contact', note: 'Cherche à comparer sa carte des veines avec ses données de micro-fractures.' },
  ],

  combat: {
    sorts: [
      'Navigation glaciaire (Glace) — déplacement dans des espaces glacés étroits — mobilité extrême',
      'Frappe sous-glaciaire (Glace) — impact depuis un angle bas — surprise de terrain',
    ],
  },

  image_prompts: [
    {
      id: 'iskra_veines',
      description: 'Iskra dans un passage sous-glaciaire du Champ Gelé — un Givrin de 61 ans touchant la paroi de glace avec une main, la surface montrant des craquelures qu\'il appelle "les veines". Il tient une carte faite à la main. Les veines sur la carte correspondent à ce qui est devant lui. La carte a 20 ans d\'annotations.',
      style: 'réaliste Givrin pêcheur sous-glaciaire, Champ Gelé de Crysalme, carte des veines, connaissance du terrain, 20 ans d\'observation',
    },
  ],

  lore_long: `Iskra pêche sous la glace du Champ Gelé depuis plus de 40 ans. Il appelle les craquelures dans la glace "les veines" et les cartographie depuis 20 ans.

Sa carte est plus détaillée que tout ce que la Monarchie possède sur les structures du Champ.

Sylkra (53) veut comparer sa carte à ses données scientifiques. La corrélation pourrait changer la compréhension du Champ Gelé.`,
};

export default iskra;
