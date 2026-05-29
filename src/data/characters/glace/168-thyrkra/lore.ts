import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrkra: PersonnageLoreComplet = {
  id: 168,
  nom: 'Thyrkra',
  element: 'Glace',
  espece: 'Givrin',
  region: 'Crysalme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Givrine de 34 ans, messagère — légère pour une Givrine, habituée au mouvement en terrain glacé.',
    peau: 'Blanche-cristalline avec des marques de froid extrême — elle voyage dans les galeries sous le Champ Gelé régulièrement.',
    yeux: 'Bleus avec une qualité alerte et directionnelle. Elle évalue constamment les routes.',
    vetements: 'Tenue de voyage adaptée aux galeries sous-glaciaires — isolation thermique, équipement de navigation.',
    signes_particuliers: 'Sa route principale entre Crysalme et les réseaux extérieurs passe par les galeries sous le Champ Gelé — des passages que les gardes du Champ ne surveillent pas en dessous.',
  },

  psychologie: {
    dominante: 'Messagère Dissident entre Crysalme et les réseaux extérieurs. Sa route utilise les galeries sous le Champ Gelé — des passages naturels dans la glace qui permettent de traverser sans passer par les points de contrôle officiels. Elle connaît ces galeries mieux que quiconque.',
    mecanisme_de_defense: 'La route secrète comme protection. Les gardes du Champ surveillent la surface — pas les galeries en dessous. Sa route est physiquement invisible.',
    contradiction_interne: 'Les galeries sous le Champ Gelé sont structurellement liées aux micro-fractures que Sylkra (53) et Thyvalra (165) observent. Si ces fractures progressent, sa route pourrait devenir dangereuse — ou impossible.',
    rapport_aux_autres: 'Velkren (162) est dans son réseau — les copies d\'archives passent par ses routes. Aethren (54) est dans son réseau — un contact extérieur qu\'elle dessert.',
    vision_du_monde: 'L\'information et les personnes doivent pouvoir circuler librement. Les frontières du Champ Gelé ne sont pas des frontières naturelles — elles sont politiques. Son travail est de les traverser.',
  },

  histoire: {
    enfance: {
      titre: 'Crysalme',
      contenu: 'Née à Crysalme dans une famille de guides du Champ. Elle avait appris les galeries sous-glaciaires depuis l\'enfance — une connaissance transmise dans la famille.',
    },
    arrivee: {
      titre: 'Les Dissidentes',
      contenu: 'Les Dissidentes l\'avaient approchée à 25 ans. Sa connaissance des galeries était exactement ce dont elles avaient besoin pour maintenir des communications avec Crysalme. Elle avait accepté.',
    },
    premier_conflit: {
      titre: 'La galerie instable',
      contenu: 'Une galerie qu\'elle utilisait régulièrement avait montré des signes d\'instabilité — des craquements, des micro-effondrements. Elle avait changé de route. La connexion avec les fractures que Sylkra observait ne lui était pas venue.',
    },
    revelation: {
      titre: 'Les fractures',
      contenu: 'Elle avait entendu des observations de Sylkra (53) sur les micro-fractures du Champ. Elle avait commencé à lier ses observations de terrain aux données de Sylkra. La connexion était préoccupante.',
    },
    etat_actuel: {
      titre: 'Les galeries',
      contenu: 'Elle voyage. Ses routes continuent. Les galeries se dégradent à un rythme qu\'elle suit maintenant activement.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrkra_galerie',
      titre: 'La galerie qui s\'effondre',
      description: 'Thyrkra utilise les galeries sous le Champ Gelé pour ses routes. Si une galerie s\'effondre lors d\'un transit — le sien ou celui d\'un message ou d\'une personne qu\'elle guide — sa route principale sera coupée. Les communications Dissidentes entre Crysalme et l\'extérieur seront interrompues.',
      personnages_impliques: [162, 54],
      declencheur: 'Effondrement d\'une galerie sous le Champ Gelé lors d\'un transit',
      consequence: 'Route de Thyrkra coupée — communications Dissidentes interrompues, nécessité d\'une nouvelle route',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Messagère Dissident entre Crysalme et l\'extérieur. Route via les galeries sous le Champ Gelé. Suit la dégradation des galeries avec préoccupation.',

  relations: [
    { id: 162, nom: 'Velkren', type: 'contact', note: 'Les copies d\'archives passent par ses routes.' },
    { id: 54, nom: 'Aethren', type: 'contact', note: 'Contact extérieur desservi par ses routes.' },
  ],

  combat: {
    sorts: [
      'Navigation glaciaire (Glace) — déplacement dans les galeries de glace — mobilité extrême',
      'Frappe de glace (Glace) — attaque directe — défense en tunnel',
    ],
  },

  image_prompts: [
    {
      id: 'thyrkra_galerie',
      description: 'Thyrkra dans une galerie sous le Champ Gelé de Crysalme — une Givrine de 34 ans qui navigue dans un passage naturel sous la glace. Elle porte un message. Les parois montrent des micro-fractures. Elle les note mentalement.',
      style: 'réaliste Givrine messagère Dissident, galeries sous le Champ Gelé, Crysalme, routes secrètes, fractures préoccupantes',
    },
  ],

  lore_long: `Thyrkra transporte des messages entre Crysalme et les réseaux extérieurs via les galeries sous le Champ Gelé. Les gardes du Champ ne surveillent pas ces passages.

Ses galeries montrent des micro-fractures liées à la dégradation que Sylkra (53) observe. Elle suit leur progression avec préoccupation.

Si une galerie s'effondre pendant un transit, sa route est coupée.`,
};

export default thyrkra;
