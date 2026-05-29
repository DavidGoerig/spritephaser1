import type { PersonnageLoreComplet } from '../../../lore-types';

const thyskra: PersonnageLoreComplet = {
  id: 161,
  nom: 'Thyskra',
  element: 'Glace',
  espece: 'Givrin',
  region: 'Crysalme',
  faction: 'Monarchie',

  apparence: {
    taille_corpulence: 'Givrine de taille aristocratique, posture d\'ambassadrice — droite, précise dans ses gestes.',
    peau: 'Blanche-cristalline Givrine avec une luminescence glaciale — l\'élément Glace des Givrin de haut rang est plus intense que la moyenne.',
    yeux: 'Bleus glacés avec une qualité diplomatique — elle écoute pour répondre, pas pour comprendre.',
    vetements: 'Tenue d\'ambassadrice de la Monarchie Givrine — formelle, symboliquement gelée dans les conventions.',
    signes_particuliers: 'Ambassadrice de Crysalme à Asterciel. Elle maintient les relations entre la Monarchie Givrine et l\'Empire. Son travail est de la diplomatie froide dans les deux sens.',
  },

  psychologie: {
    dominante: 'Ambassadrice de la Monarchie Givrine à Asterciel. Son travail est de maintenir les relations diplomatiques entre Crysalme et l\'Empire — des relations qui bénéficient à Crysalme sur certains points et à l\'Empire sur d\'autres. Elle navigue cet équilibre avec précision.',
    mecanisme_de_defense: 'Le protocole diplomatique comme protection. Tant qu\'elle respecte les formes, elle n\'a pas à répondre aux questions de fond.',
    contradiction_interne: 'Elle représente une Monarchie qui maintient un gel politique depuis des siècles. Les compromis qu\'elle fait à Asterciel pour l\'Empire ont des implications à Crysalme qu\'elle ne voit pas entièrement depuis son poste.',
    rapport_aux_autres: 'Serathis (24) est son contact impérial à Asterciel. Keldris (57) est sa hiérarchie — elle rapporte à Keldris.',
    vision_du_monde: 'La diplomatie maintient la stase. Crysalme a survécu grâce à sa stase — politique, sociale, élémentaire. Son travail est de maintenir cette stase dans ses relations extérieures.',
  },

  histoire: {
    enfance: {
      titre: 'La Monarchie',
      contenu: 'Née dans une famille aristocratique de Crysalme. Formation diplomatique — les Givrins de haut rang sont formés dès l\'enfance aux conventions.',
    },
    arrivee: {
      titre: 'Asterciel',
      contenu: 'Affectée à Asterciel il y a 8 ans. Le poste d\'ambassadrice à l\'Empire était le poste diplomatique le plus sensible de Crysalme. Keldris (57) lui avait confié précisément parce qu\'elle était précise.',
    },
    premier_conflit: {
      titre: 'Les compromis',
      contenu: 'Elle avait dû faire des compromis sur certains accords commerciaux — des compromis qui avantagèrent l\'Empire plus que Crysalme. Elle avait suivi les directives de Keldris. Les compromis étaient dans la marge acceptable.',
    },
    revelation: {
      titre: 'La stase diplomatique',
      contenu: 'Elle avait compris que son travail n\'était pas de progresser — c\'était de maintenir. Maintenir l\'équilibre existant. Toute progression impliquait un déséquilibre. La Monarchie préférait la stase.',
    },
    etat_actuel: {
      titre: 'L\'ambassade',
      contenu: 'Elle maintient. Les relations tiennent. La stase est préservée.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyskra_compromis',
      titre: 'Le compromis de trop',
      description: 'Thyskra maintient l\'équilibre diplomatique entre Crysalme et l\'Empire depuis 8 ans. Si l\'Empire demande un compromis qui affecte directement la stase de Crysalme — un accès à une zone sensible, un accord sur les soldats gelés — elle devra soit refuser (et créer une crise diplomatique) soit accepter (et rapporter à Keldris un compromis que Keldris n\'avait pas anticipé).',
      personnages_impliques: [24, 57],
      declencheur: 'Demande impériale dépassant les limites diplomatiques établies',
      consequence: 'Thyskra devant choisir entre protocole et mandat — et Keldris informé d\'un compromis non-autorisé',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Ambassadrice de Crysalme à Asterciel. Maintient les relations Monarchie-Empire. Stase diplomatique.',

  relations: [
    { id: 24, nom: 'Serathis', type: 'contact', note: 'Contact impérial à Asterciel.' },
    { id: 57, nom: 'Keldris', type: 'contact', note: 'Hiérarchie. Rapporte à Keldris.' },
  ],

  combat: {
    sorts: [
      'Barrière de glace (Glace) — formation défensive crystalline — protection diplomatique',
      'Projection glaciale (Glace) — lance de glace — attaque précise',
    ],
  },

  image_prompts: [
    {
      id: 'thyskra_asterciel',
      description: 'Thyskra dans une salle de réception diplomatique d\'Asterciel — une Givrine en tenue d\'ambassadrice, en conversation avec un représentant impérial. Son expression est diplomatiquement neutre. Elle calcule chaque mot.',
      style: 'réaliste Givrine ambassadrice, Asterciel, diplomatie Crysalme-Empire, stase diplomatique',
    },
  ],

  lore_long: `Thyskra est l'ambassadrice de Crysalme à Asterciel. Elle maintient les relations entre la Monarchie Givrine et l'Empire depuis 8 ans.

Son travail est de maintenir la stase — pas de progresser. Toute progression implique un déséquilibre que la Monarchie évite.

Si l'Empire demande un compromis qui dépasse ses limites, elle devra choisir entre protocole et mandat.`,
};

export default thyskra;
