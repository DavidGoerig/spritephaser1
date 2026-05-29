import type { PersonnageLoreComplet } from '../../../lore-types';

const iskren: PersonnageLoreComplet = {
  id: 170,
  nom: 'Iskren',
  element: 'Glace',
  espece: 'Givrin',
  region: 'Crysalme',
  faction: 'Monarchie',

  apparence: {
    taille_corpulence: 'Givrin de 47 ans, archiviste — posture de quelqu\'un qui attend des réponses depuis si longtemps qu\'il a cessé de se lever pour les chercher.',
    peau: 'Blanche-cristalline avec des traces d\'encre givrée — l\'élément Glace d\'un archiviste qui transcrit des documents dans le froid.',
    yeux: 'Bleus avec une qualité de patience épuisée. Il attend. Il a toujours attendu.',
    vetements: 'Tenue d\'archiviste de la Monarchie Givrine — formelle mais portée avec la lassitude de quelqu\'un dont le travail est en suspens depuis des décennies.',
    signes_particuliers: 'Il gère 47 requêtes de dégel accumulées depuis l\'an -312. Toutes sont en attente. La procédure de dégel existe. Les conditions de son déclenchement ne se sont pas produites.',
  },

  psychologie: {
    dominante: 'Archiviste Givrin gérant les requêtes de dégel des familles de soldats gelés. Il existe une procédure pour le dégel — une procédure qui nécessite que des conditions précises soient remplies. Ces conditions ne se sont pas produites depuis -312. Ses 47 requêtes attendent.',
    mecanisme_de_defense: 'La procédure comme réponse. Il ne refuse pas les requêtes — il les met en attente selon la procédure. La procédure dit que les conditions doivent être remplies. Les conditions ne le sont pas. C\'est une réponse procédurale, pas un refus.',
    contradiction_interne: 'La procédure de dégel a été rédigée pour des conditions qui n\'ont peut-être pas été anticipées comme permanentes. Si les conditions ne se produisent jamais, les requêtes attendront indéfiniment. Il applique une procédure dont les conditions de résolution pourraient être impossibles.',
    rapport_aux_autres: 'Thyval (55) est dans son réseau — quelqu\'un qui comprend l\'absurdité de la position d\'Iskren et qui pourrait chercher à débloquer les requêtes. Aethren (54) est une connection via les familles de soldats qui consultent les réseaux extérieurs.',
    vision_du_monde: 'La procédure existe pour une raison. Ses conditions existent pour une raison. Son travail est de les appliquer. Ce qu\'il ressent à ce sujet n\'est pas pertinent pour son travail.',
  },

  histoire: {
    enfance: {
      titre: 'Les archives du Gel',
      contenu: 'Formation d\'archiviste à Crysalme avec spécialisation dans les procédures du Gel Éternel. Il avait commencé à gérer les requêtes de dégel à 28 ans — en croyant qu\'il traiterait des cas résolus.',
    },
    arrivee: {
      titre: 'Les 47 requêtes',
      contenu: 'Il avait hérité d\'un registre de requêtes accumulées depuis l\'an -312. Son prédécesseur les avait transmises. Son prédécesseur avant lui les avait transmises. Toutes attendaient les mêmes conditions.',
    },
    premier_conflit: {
      titre: 'La première famille',
      contenu: 'Une famille avait demandé une exception pour sa requête — le soldat gelé était le dernier descendant, la lignée s\'éteignait si rien n\'était fait. Il avait appliqué la procédure. La famille avait perdu sa lignée.',
    },
    revelation: {
      titre: 'L\'attente permanente',
      contenu: 'À 40 ans, il avait compris que les conditions de la procédure de dégel n\'avaient aucune date probable de réalisation. Il avait écrit une note interne suggérant une révision. La note était dans ses archives, en attente de traitement.',
    },
    etat_actuel: {
      titre: 'Les requêtes',
      contenu: 'Il archive. Les requêtes s\'accumulent. Les conditions ne se produisent pas.',
    },
  },

  evenements_narratifs: [
    {
      id: 'iskren_requetes',
      titre: 'Les 47 requêtes en attente',
      description: 'Iskren gère 47 requêtes de dégel accumulées depuis -312. Si quelqu\'un — Thyval (55), une famille de soldats — lui demande quelles sont exactement les conditions de déclenchement de la procédure de dégel, sa réponse pourrait révéler que ces conditions sont structurellement impossibles à remplir sous le régime actuel.',
      personnages_impliques: [55, 54],
      declencheur: 'Quelqu\'un lui demandant les conditions exactes de la procédure de dégel',
      consequence: 'Révélation que les conditions de dégel sont structurellement bloquées — et que 47 familles attendent l\'impossible',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Archiviste des serments de dégel. 47 requêtes accumulées depuis -312, toutes en attente. Conditions de déclenchement de la procédure jamais réunies.',

  relations: [
    { id: 55, nom: 'Thyval', type: 'contact', note: 'Comprend l\'absurdité de la position d\'Iskren sur les requêtes de dégel.' },
    { id: 54, nom: 'Aethren', type: 'contact', note: 'Lien via les familles de soldats cherchant des réponses à l\'extérieur.' },
  ],

  combat: {
    sorts: [
      'Sceau de glace (Glace) — gel localisé d\'une zone — contrôle de terrain',
      'Barrière d\'archives (Glace) — formation défensive dense — protection',
    ],
  },

  image_prompts: [
    {
      id: 'iskren_archives',
      description: 'Iskren dans les archives des requêtes de dégel à Crysalme — un Givrin de 47 ans devant un registre de 47 dossiers accumulés depuis l\'an -312. Il en tient un et regarde les conditions de déclenchement. Son expression est de quelqu\'un qui connaît la réponse et ne peut pas la changer.',
      style: 'réaliste Givrin archiviste, Crysalme, requêtes de dégel en attente, conditions impossibles, patience épuisée',
    },
  ],

  lore_long: `Iskren gère les requêtes de dégel des familles de soldats gelés à Crysalme. Il existe une procédure — elle nécessite des conditions précises. Ces conditions ne se sont pas produites depuis l'an -312.

47 requêtes attendent dans ses archives. La plus ancienne a 314 ans.

Il a écrit une note suggérant une révision de la procédure. La note est dans ses archives, en attente de traitement.`,
};

export default iskren;
