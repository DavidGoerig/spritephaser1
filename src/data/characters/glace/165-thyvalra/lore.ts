import type { PersonnageLoreComplet } from '../../../lore-types';

const thyvalra: PersonnageLoreComplet = {
  id: 165,
  nom: 'Thyvalra',
  element: 'Glace',
  espece: 'Givrin',
  region: 'Crysalme',
  faction: 'Monarchie',

  apparence: {
    taille_corpulence: 'Givrine de 39 ans, mécanicienne du Champ Gelé — corpulence technique, habituée aux outils et aux mesures.',
    peau: 'Blanche-cristalline avec des traces d\'huile mécanique givrine — les marques d\'une technicienne qui travaille sur les systèmes du Champ.',
    yeux: 'Bleus avec une qualité d\'une personne qui cherche des explications mécaniques à des phénomènes complexes.',
    vetements: 'Tenue de technicienne du Champ Gelé — pratique, avec des outils de mesure.',
    signes_particuliers: 'Elle voit les mêmes micro-fractures dans le Champ Gelé que Sylkra (53) — mais elle les attribue au gel naturel, pas à une dégradation anormale.',
  },

  psychologie: {
    dominante: 'Mécanicienne des systèmes du Champ Gelé à Crysalme. Elle mesure et entretient les structures de glace du Champ. Elle observe les mêmes micro-fractures que Sylkra (53) — mais son interprétation est différente : ce sont des effets du gel naturel, pas des signes de dégradation anormale.',
    mecanisme_de_defense: 'L\'explication mécanique standard. Les micro-fractures ont une cause connue — l\'expansion et la contraction thermique. Cette explication est scientifiquement défendable.',
    contradiction_interne: 'Les micro-fractures qu\'elle observe progressent plus vite que les modèles mécaniques standards ne le prévoient. Elle a remarqué cette anomalie. Elle l\'a attribuée à des variations locales sans chercher plus loin.',
    rapport_aux_autres: 'Sylkra (53) est dans son réseau — elles voient les mêmes choses et les interprètent différemment. Cette divergence d\'interprétation n\'a pas encore été confrontée directement.',
    vision_du_monde: 'Le Champ Gelé a une mécanique. Cette mécanique a des variations. Les variations ont des explications techniques. Elle cherche ces explications techniques.',
  },

  histoire: {
    enfance: {
      titre: 'La mécanique du Champ',
      contenu: 'Formation technique dans les systèmes de maintien du Champ Gelé. Elle avait commencé à travailler sur les structures de glace à 22 ans — un travail précis dans des conditions difficiles.',
    },
    arrivee: {
      titre: 'Les micro-fractures',
      contenu: 'Elle avait commencé à cataloguer les micro-fractures du Champ il y a 3 ans — une documentation systématique des variations structurelles. Les données montraient une progression.',
    },
    premier_conflit: {
      titre: 'La progression anormale',
      contenu: 'Ses données montraient que les micro-fractures progressaient 15% plus vite que les modèles standards. Elle avait cherché une explication technique — variations locales, conditions climatiques. Elle avait classé l\'anomalie comme "dans les marges de variation naturelle".',
    },
    revelation: {
      titre: 'Sylkra',
      contenu: 'Elle avait appris que Sylkra (53) observait les mêmes micro-fractures et les interprétait différemment. Elle n\'avait pas encore cherché à débattre de cette différence.',
    },
    etat_actuel: {
      titre: 'La maintenance',
      contenu: 'Elle maintient le Champ. Les micro-fractures progressent. Elle les attribue au gel naturel.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyvalra_sylkra',
      titre: 'Deux interprétations du même phénomène',
      description: 'Thyvalra et Sylkra (53) voient les mêmes micro-fractures dans le Champ Gelé. Thyvalra les attribue au gel naturel. Sylkra y voit une dégradation anormale. Si elles compararent leurs données directement — ou si une fracture majeure se produit — leur désaccord d\'interprétation devra être résolu.',
      personnages_impliques: [53],
      declencheur: 'Fracture majeure dans le Champ Gelé forçant une évaluation de sa cause',
      consequence: 'Confrontation des interprétations — et révélation que la dégradation anormale était réelle',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Mécanicienne du Champ Gelé. Voit les mêmes micro-fractures que Sylkra (53) mais les attribue au gel naturel. Divergence d\'interprétation non-confrontée.',

  relations: [
    { id: 53, nom: 'Sylkra', type: 'contact', note: 'Observations partagées, interprétations divergentes.' },
  ],

  combat: {
    sorts: [
      'Armure de glace (Glace) — couche protectrice crystalline — défense',
      'Frappe glaciale (Glace) — impact de glace — attaque de terrain',
    ],
  },

  image_prompts: [
    {
      id: 'thyvalra_mesure',
      description: 'Thyvalra mesurant des micro-fractures dans le Champ Gelé — une Givrine de 39 ans avec ses instruments. Elle note des chiffres qui montrent une progression. Elle les attribue au gel naturel. À côté de ses mesures, les données de Sylkra (53) qui disent la même chose et y voient quelque chose de différent.',
      style: 'réaliste Givrine mécanicienne, Champ Gelé de Crysalme, micro-fractures, interprétation divergente, mesures techniques',
    },
  ],

  lore_long: `Thyvalra est mécanicienne du Champ Gelé à Crysalme. Elle observe les mêmes micro-fractures que Sylkra (53) — et les attribue au gel naturel.

Les fractures progressent 15% plus vite que les modèles standards. Elle a classé cette anomalie comme "variations naturelles".

Sylkra interprète les mêmes données comme une dégradation anormale. Elles ne se sont pas encore confrontées sur ce désaccord.`,
};

export default thyvalra;
