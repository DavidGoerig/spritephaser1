import type { PersonnageLoreComplet } from '../../../lore-types';

const velkren: PersonnageLoreComplet = {
  id: 162,
  nom: 'Velkren',
  element: 'Glace',
  espece: 'Givrin',
  region: 'Crysalme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Givrin de 52 ans, archiviste — la corpulence de quelqu\'un qui travaille assis dans des espaces froids.',
    peau: 'Blanche-cristalline Givrine avec une luminescence glaciale discrète — il minimise son rayonnement pour travailler dans des espaces d\'archives sans attirer l\'attention.',
    yeux: 'Bleus avec une qualité de quelqu\'un qui lit vite et retient tout.',
    vetements: 'Tenue d\'archiviste de la Monarchie — il a accès aux archives officielles. Sa position Dissident n\'est pas connue de la Monarchie.',
    signes_particuliers: 'Il copie secrètement les archives officielles de Crysalme avant qu\'elles soient modifiées. Il travaille depuis l\'intérieur.',
  },

  psychologie: {
    dominante: 'Archiviste Dissident travaillant depuis l\'intérieur de la Monarchie. Sa mission est de copier les archives officielles de Crysalme avant que Keldris (57) les modifie — des modifications qui révisent progressivement l\'histoire du Gel Éternel. Il a accès aux originaux. Il en fait des copies pour les Dissidentes.',
    mecanisme_de_defense: 'La position institutionnelle comme couverture. Il est archiviste de la Monarchie — son accès aux archives est légitime. Ses copies ne le sont pas.',
    contradiction_interne: 'Il copie des archives pour contrer des modifications qu\'il voit venir. Mais certaines modifications sont mineures — des nuances, des formulations. La ligne entre révision légitime et falsification n\'est pas toujours claire pour lui.',
    rapport_aux_autres: 'Thyval (55) est dans son réseau — un contact Dissident. Sylkra (53) est dans son réseau — quelqu\'un dont les observations sur le Gel Éternel enrichissent les archives copiées.',
    vision_du_monde: 'L\'histoire de Crysalme est en train d\'être réécrite par Keldris. Les archives originales sont la seule protection contre cette réécriture. Son travail est de préserver les originaux.',
  },

  histoire: {
    enfance: {
      titre: 'Les archives',
      contenu: 'Formation d\'archiviste à Crysalme. Il avait travaillé dans les archives de la Monarchie depuis 25 ans — une carrière stable, un accès exceptionnel à des documents que peu de Givrins voient.',
    },
    arrivee: {
      titre: 'Les modifications',
      contenu: 'Il y a 5 ans, il avait remarqué une modification dans une archive sur le Gel Éternel — un changement de formulation qui altérait subtilement le sens. Il avait cherché l\'original. Il n\'existait plus.',
    },
    premier_conflit: {
      titre: 'La première copie',
      contenu: 'Il avait commencé à copier systématiquement les archives sensibles avant chaque cycle de révision. Ce travail s\'était étendu — il copiait maintenant une partie significative des archives annuelles.',
    },
    revelation: {
      titre: 'Thyval',
      contenu: 'Thyval (55) l\'avait contacté et lui avait révélé que les Dissidentes cherchaient exactement ce qu\'il faisait. Il avait rejoint leur réseau — pas pour leur idéologie entièrement, mais parce que ses copies avaient besoin d\'un endroit sécurisé.',
    },
    etat_actuel: {
      titre: 'Les copies',
      contenu: 'Il copie. Les archives se modifient. Ses copies préservent les originaux.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velkren_archives',
      titre: 'La copie découverte',
      description: 'Velkren copie secrètement les archives de la Monarchie. Si Keldris (57) ou quelqu\'un dans l\'administration remarque des irrégularités dans les archives — des signes de copie récente — Velkren sera suspecté. Sa position comme archiviste donnait l\'accès. Son réseau Dissident serait exposé.',
      personnages_impliques: [55, 53],
      declencheur: 'Keldris ou l\'administration remarquant des irrégularités dans les archives',
      consequence: 'Velkren exposé — et les copies Dissidentes devenant l\'unique archive des originaux modifiés',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Archiviste Dissident travaillant depuis l\'intérieur. Copie les archives avant modification. Préserve les originaux que Keldris révise.',

  relations: [
    { id: 55, nom: 'Thyval', type: 'contact', note: 'Contact Dissident. Ses copies vont dans ce réseau.' },
    { id: 53, nom: 'Sylkra', type: 'contact', note: 'Observations sur le Gel qui enrichissent les archives.' },
  ],

  combat: {
    sorts: [
      'Mur de glace (Glace) — barrière défensive — protection d\'archive',
      'Lance crystalline (Glace) — attaque précise — défense d\'urgence',
    ],
  },

  image_prompts: [
    {
      id: 'velkren_copie',
      description: 'Velkren dans les archives de la Monarchie à Crysalme — un Givrin copiant rapidement un document avant que la Monarchie ne le modifie. Il travaille à la lumière de sa propre luminescence. Son expression est concentrée et tendue.',
      style: 'réaliste Givrin archiviste Dissident, archives de Crysalme, copie secrète, préservation des originaux, travail intérieur',
    },
  ],

  lore_long: `Velkren copie secrètement les archives officielles de Crysalme avant que Keldris (57) les modifie. Il travaille depuis l'intérieur de la Monarchie.

Il y a 5 ans, il a vu une modification effacer un original. Il a commencé à copier systématiquement.

Si sa position est découverte, les copies Dissidentes seront l'unique préservation des originaux.`,
};

export default velkren;
