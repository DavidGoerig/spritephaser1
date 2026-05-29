import type { PersonnageLoreComplet } from '../../../lore-types';

const syreth: PersonnageLoreComplet = {
  id: 153,
  nom: 'Syreth',
  element: 'Spectre',
  espece: 'Umbrien',
  region: 'Vel\'Nox',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Umbrien de taille moyenne avec la posture de quelqu\'un qui s\'efforce de paraître appartenir à l\'endroit où il se trouve.',
    peau: 'Gris Umbrien avec une translucidité spectrale — son élément est difficile à masquer entièrement.',
    yeux: 'Blancs avec une qualité de quelqu\'un qui surveille sans en avoir l\'air.',
    vetements: 'Tenue de Vel\'Nox ordinaire — il essaie de se fondre dans les marchés nocturnes.',
    signes_particuliers: 'Agent impérial infiltré à Vel\'Nox. Son infiltration est connue de Vethis (46) — mais pas encore formellement confirmée. Vethis attend de comprendre son niveau d\'information avant d\'agir.',
  },

  psychologie: {
    dominante: 'Agent impérial infiltré à Vel\'Nox. Il se présente comme un marchand ou un intermédiaire. Vethis (46) sait qu\'il est un agent impérial — ou le soupçonne fortement. Syreth ne sait pas que Vethis sait. Cette asymétrie définit toute leur interaction.',
    mecanisme_de_defense: 'La couverture de marchant comme première ligne. L\'élément Spectre comme deuxième ligne — il peut disparaître physiquement si nécessaire.',
    contradiction_interne: 'Il est infiltré dans une cité où les Umbriens ont des sensibilités perceptives élevées. Ses mensonges de couverture fonctionnent sur des niveaux déclaratifs — pas sur des niveaux psychiques. Ceux qui ont des éléments Psy ou Spectre peuvent le voir différemment.',
    rapport_aux_autres: 'Vethis (46) est son adversaire — même si Syreth ne le sait pas encore. La Fosse Interdite et le Vol de la Lumière sont les contextes narratifs de son infiltration.',
    vision_du_monde: 'Vel\'Nox est une ressource pour l\'Empire — un hub d\'information sur les factions opposées. Son travail est de collecter ces informations.',
  },

  histoire: {
    enfance: {
      titre: 'L\'Empire',
      contenu: 'Né dans les régions impériales. Formation d\'agent d\'infiltration spécialisé dans les milieux Umbriens — une spécialité rare parce que les Umbriens sont difficiles à infiltrer.',
    },
    arrivee: {
      titre: 'Vel\'Nox',
      contenu: 'Il avait été envoyé à Vel\'Nox il y a 18 mois. Sa couverture — marchand d\'objets lumineux — était thématiquement adaptée à une cité obsédée par la lumière depuis le Vol.',
    },
    premier_conflit: {
      titre: 'Vethis',
      contenu: 'Vethis (46) l\'avait regardé avec une attention particulière lors d\'un marché nocturne. Le regard n\'était pas agressif — c\'était de l\'évaluation. Il n\'avait pas su comment l\'interpréter.',
    },
    revelation: {
      titre: 'L\'asymétrie',
      contenu: 'Il avait commencé à soupçonner que sa couverture n\'était pas aussi solide qu\'il le pensait — pas parce qu\'il avait des preuves, mais parce que certaines personnes l\'évitaient de façon non-aléatoire.',
    },
    etat_actuel: {
      titre: 'L\'infiltration',
      contenu: 'Il continue à collecter des informations. Vethis sait. Syreth soupçonne que quelqu\'un sait. Cette danse continue.',
    },
  },

  evenements_narratifs: [
    {
      id: 'syreth_couverture',
      titre: 'La couverture qui tombe',
      description: 'Vethis (46) sait que Syreth est un agent impérial mais n\'a pas encore agi. Si Syreth commet une erreur qui confirme définitivement son identité — ou si Vethis décide qu\'il a assez d\'information sur ce que Syreth sait — Vethis agira. Syreth n\'est pas encore en danger. Il le sera.',
      personnages_impliques: [46],
      declencheur: 'Vethis décidant qu\'il a assez d\'information sur le niveau d\'infiltration de Syreth',
      consequence: 'Syreth exposé — ou obligé de fuir avant Vethis ait la preuve définitive',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Agent impérial infiltré à Vel\'Nox. Couverture de marchand. Vethis (46) sait ou soupçonne fortement — asymétrie non-résolue.',

  relations: [
    { id: 46, nom: 'Vethis', type: 'adversaire', note: 'Sait ou soupçonne son identité. Attend de comprendre son niveau d\'information avant d\'agir.' },
  ],

  combat: {
    sorts: [
      'Disparition spectrale (Spectre) — traversée de matière — fuite d\'urgence',
      'Frappe spectrale (Spectre) — attaque à travers les défenses physiques — attaque surprise',
    ],
  },

  image_prompts: [
    {
      id: 'syreth_marche',
      description: 'Syreth dans un marché nocturne de Vel\'Nox — un Umbrien qui essaie de paraître appartenir à la cité. Au loin, Vethis (46) l\'observe. Syreth ne l\'a pas encore remarqué. Son expression est d\'un agent qui pense que sa couverture tient.',
      style: 'réaliste Umbrien agent impérial infiltré, Vel\'Nox, couverture de marchand, asymétrie d\'information, tension non-déclarée',
    },
  ],

  lore_long: `Syreth est un agent impérial infiltré à Vel'Nox depuis 18 mois sous couverture de marchand. Son infiltration est connue de Vethis (46) — mais pas encore formellement confirmée.

Vethis attend de comprendre son niveau d'information avant d'agir. Syreth soupçonne que quelqu'un sait — sans savoir que c'est Vethis.

Cette danse asymétrique continuera jusqu'à ce que l'un d'eux décide d'agir.`,
};

export default syreth;
