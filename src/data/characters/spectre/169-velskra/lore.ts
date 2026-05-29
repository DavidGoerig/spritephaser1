import type { PersonnageLoreComplet } from '../../../lore-types';

const velskra: PersonnageLoreComplet = {
  id: 169,
  nom: 'Velskra',
  element: 'Spectre',
  espece: 'Givrin',
  region: 'Crysalme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Givrin de 58 ans, médium — la corpulence de quelqu\'un qui passe du temps dans des états de semi-présence.',
    peau: 'Blanche avec une translucidité spectrale — son élément Spectre et son éléments naturel Givrin se combinent en une apparence de glace semi-transparente.',
    yeux: 'Blancs avec une qualité de quelqu\'un qui voit des couches de réalité simultanées.',
    vetements: 'Tenue simple et sombre — il ne cherche pas à attirer l\'attention.',
    signes_particuliers: 'Il affirme entendre les soldats gelés du Champ Gelé. Ses descriptions correspondent aux archives historiques de ces soldats — des personnes décédées avant qu\'il ne soit né.',
  },

  psychologie: {
    dominante: 'Médium Givrin qui affirme communiquer avec les soldats gelés du Champ Gelé. Ses descriptions sont précises — elles correspondent aux archives historiques de soldats gelés avant sa naissance. Cette précision est soit une capacité réelle, soit une connaissance approfondie des archives qu\'il n\'avoue pas.',
    mecanisme_de_defense: 'La cohérence interne de ses descriptions comme légitimité. Il décrit des choses vérifiables. La question de la méthode est secondaire.',
    contradiction_interne: 'Si sa capacité est réelle, les soldats gelés communiquent des choses depuis 300 ans — et personne n\'a voulu les entendre. Si elle est frauduleuse, son étude des archives a été exceptionnellement rigoureuse. L\'un ou l\'autre est significatif.',
    rapport_aux_autres: 'Velsa (58) est dans son réseau — quelqu\'un dont les activités autour du Champ Gelé créent un contexte pour ses communications. Karath (52) est l\'archive centrale de ses vérifications.',
    vision_du_monde: 'Les soldats gelés ont des messages. Ces messages ont de l\'importance pour comprendre pourquoi le gel s\'est produit et ce qui peut en sortir.',
  },

  histoire: {
    enfance: {
      titre: 'Le Spectre',
      contenu: 'Né avec un élément Spectre qui se manifestait dans une direction inhabituellement — vers la perception de présences passées plutôt que de présences cachées. Il avait commencé à entendre des voix à 15 ans.',
    },
    arrivee: {
      titre: 'Les soldats',
      contenu: 'À 30 ans, il avait commencé à identifier les voix qu\'il entendait avec les soldats gelés du Champ. En croisant ses descriptions avec les archives de Karath (52), il avait trouvé des correspondances précises.',
    },
    premier_conflit: {
      titre: 'Le scepticisme',
      contenu: 'La Monarchie avait refusé de le prendre au sérieux — un médium qui prétend communiquer avec des soldats gelés était une perturbation, pas une ressource. Quelques familles de soldats gelés l\'avaient consulté discrètement.',
    },
    revelation: {
      titre: 'Les messages',
      contenu: 'Ce que les soldats lui communiquaient incluait des détails sur les circonstances du gel — des détails que les archives officielles ne contenaient pas. Cette information non-archivée renforçait sa crédibilité — mais elle posait aussi des questions sur le gel lui-même.',
    },
    etat_actuel: {
      titre: 'Le médium',
      contenu: 'Il reçoit. Les soldats lui transmettent. Il n\'est pas certain de savoir quoi faire de tout ce qu\'il entend.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velskra_soldats',
      titre: 'Ce que les soldats disent',
      description: 'Velskra entend les soldats gelés. Ses descriptions correspondent aux archives. Si quelqu\'un — Velsa (58), Thyval (55) — lui demande spécifiquement ce que les soldats disent sur les circonstances du gel, ses réponses pourraient révéler des informations non-archivées sur le moment du gel de Karath.',
      personnages_impliques: [58, 52],
      declencheur: 'Quelqu\'un lui demandant ce que les soldats disent sur les circonstances du gel',
      consequence: 'Informations non-archivées sur le gel de Karath révélées — et leur authenticité débattue',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Médium Givrin affirmant entendre les soldats gelés. Descriptions correspondant aux archives. Non-pris au sérieux par la Monarchie.',

  relations: [
    { id: 58, nom: 'Velsa', type: 'contact', note: 'Activités autour du Champ Gelé qui créent un contexte partagé.' },
    { id: 52, nom: 'Karath', type: 'contact', note: 'Archives centrales vérifiées contre ses descriptions.' },
  ],

  combat: {
    sorts: [
      'Passage spectral (Spectre) — traversée de surface — mobilité défensive',
      'Voix des gelés (Spectre) — manifestation de présences — désorientation psychique',
    ],
  },

  image_prompts: [
    {
      id: 'velskra_champ',
      description: 'Velskra au bord du Champ Gelé de Crysalme — un Givrin de 58 ans en état de semi-présence, écoutant quelque chose que les autres ne peuvent pas entendre. Ses yeux sont mi-fermés. Autour de lui, la glace du Champ avec ses soldats. Il leur répond doucement.',
      style: 'réaliste Givrin médium, Champ Gelé de Crysalme, communication avec les soldats gelés, semi-présence spectrale',
    },
  ],

  lore_long: `Velskra affirme entendre les soldats gelés du Champ Gelé de Crysalme. Ses descriptions correspondent aux archives historiques de personnes mortes avant sa naissance.

La Monarchie ne le prend pas au sérieux. Les familles des soldats le consultent discrètement.

Ce que les soldats lui disent sur les circonstances du gel contient des détails non-archivés.`,
};

export default velskra;
