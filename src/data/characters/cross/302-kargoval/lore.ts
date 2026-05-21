import type { PersonnageLoreComplet } from '../../../lore-types';

const kargoval: PersonnageLoreComplet = {
  id: 302,
  nom: 'Kargoval',
  element: 'Sol',
  element2: 'Roche',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Moyen, avec une façon de se déplacer qui minimise le bruit — pas de la furtivité apprise mais de l\'habitude accumulée dans des espaces où le bruit dérange.',
    peau: 'Gris moyen Chthonien avec des callus aux paumes — les marques d\'un constructeur qui travaille lui-même ses matériaux.',
    yeux: 'Marron foncé, habitués à évaluer les espaces depuis des entrées plutôt que depuis l\'intérieur.',
    vetements: 'Tenue de travail neutre sans marqueurs de faction. Il change de tenue selon les zones — il a des tenues qui passent dans les quartiers technocratiques, des tenues qui passent dans les zones minières, des tenues qui passent partout.',
    signes_particuliers: 'Il mémorise les accès de sortie de chaque espace qu\'il construit avant de commencer. Pas uniquement pour l\'urgence — pour les gens qui vivront là et qui devront peut-être partir vite.',
  },

  psychologie: {
    dominante: 'Construction d\'espaces qui ne peuvent pas être utilisés contre ceux qui les habitent. Les refuges qu\'il construit ont des sorties que leurs habitants connaissent et que leurs poursuivants ne connaissent pas.',
    mecanisme_de_defense: 'La compartimentation. Personne ne sait l\'ensemble de ses refuges. Même les Dissidentes ne connaissent pas la totalité de son réseau.',
    contradiction_interne: 'Il construit pour des Élus non-enregistrés. Il construit aussi pour les Dissidentes. Ces deux missions ne se recoupent pas toujours. Les Dissidentes utilisent parfois les refuges qu\'il a construits pour des Élus comme points de transit pour des opérations que les Élus n\'ont pas demandé à héberger.',
    rapport_aux_autres: 'Thyrvum (136) lui fournit du matériel de construction via des routes que la Technocratie ne surveille pas. Ossira (44) lui a donné des contacts avec des Élus non-enregistrés qui avaient besoin de refuges — c\'est par là qu\'il a commencé.',
    vision_du_monde: 'Une personne sans refuge est une personne à la merci de ceux qui contrôlent les logements. Les Élus non-enregistrés n\'ont pas de logements légaux. Les refuges qu\'il construit sont des infrastructures de survie.',
  },

  histoire: {
    enfance: {
      titre: 'Le quartier de transit',
      contenu: 'Né dans un quartier d\'Ormn-Dur de passage — un endroit où les gens s\'installaient quelques mois avant de trouver autre chose ou de repartir. Il avait appris à construire des aménagements temporaires qui duraient plus longtemps qu\'ils n\'auraient dû. À 16 ans, il construisait pour des familles qui ne pouvaient pas payer les artisans standards.',
    },
    arrivee: {
      titre: 'Le premier Élu sans enregistrement',
      contenu: 'À 27 ans, Ossira (44) lui avait signalé une famille avec un enfant Élu Sol non-enregistré — l\'enregistrement aurait déclenché une extraction impériale. Il avait construit un espace de vie dans une galerie désaffectée. Pas luxueux. Habitable. Introuvable si on ne savait pas où chercher. Il avait compris ce que ce type de construction pouvait faire.',
    },
    premier_conflit: {
      titre: 'La demande des Dissidentes',
      contenu: 'Les Dissidentes l\'avaient contacté via Thyrvum (136) pour construire des refuges dans plusieurs zones d\'Ormn-Dur. Il avait accepté — leurs objectifs se recoupaient avec les siens. Mais la deuxième demande concernait un espace pour du stockage d\'équipement, pas pour des personnes. Il avait posé des questions. On lui avait répondu que c\'était pour des opérations de défense. Il avait construit.',
    },
    revelation: {
      titre: 'Les usages détournés',
      contenu: 'Deux de ses refuges pour Élus avaient été utilisés comme points de transit pour des opérations Dissidentes sans que les Élus qui y vivaient aient été prévenus. Il l\'avait appris d\'un des résidents. Il avait confronté le contact des Dissidentes. Réponse : nécessité opérationnelle. Il avait changé les accès des refuges concernés sans en informer les Dissidentes.',
    },
    etat_actuel: {
      titre: 'Les deux réseaux séparés',
      contenu: 'Il maintient deux réseaux séparés : refuges pour Élus (avec un code d\'accès que les Dissidentes n\'ont pas) et espaces Dissidents (que les Élus ne savent pas où trouver). Cette séparation crée des frictions. Il maintient sa position. Thyrvum (136) sait qu\'il y a deux réseaux. Il n\'a pas dit à Thyrvum où la frontière est.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kargoval_deux_reseaux',
      titre: 'La frontière interne',
      description: 'Ses deux réseaux — refuges pour Élus et espaces Dissidents — ont des accès différents. Les Dissidentes connaissent leurs espaces. Les Élus connaissent les leurs. Personne, sauf lui, ne connaît les deux. Cette structure a un coût : si quelque chose lui arrive, les deux réseaux perdent leur gardien.',
      personnages_impliques: [136, 44],
      declencheur: 'Usages détournés de refuges pour Élus par les Dissidentes',
      consequence: 'Infrastructure de protection maintenue par une seule personne — vulnérabilité systémique',
    },
    {
      id: 'kargoval_thyrveln',
      titre: 'Le contact avec Thyrveln',
      description: 'Thyrveln (316) lui a fourni des matériaux de construction détournés de projets impériaux pour deux de ses refuges. La collaboration était efficace. Kargoval ne sait pas exactement comment Thyrveln accède à ces matériaux — il préfère ne pas savoir. Thyrveln ne lui a pas demandé l\'emplacement des refuges. Arrangement mutuellement respectueux.',
      personnages_impliques: [316],
      declencheur: 'Besoin de matériaux non traçables pour construction de refuges',
      consequence: 'Approvisionnement en matériaux via canal non tracé — dépendance sur un seul fournisseur',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Infrastructure de survie pour les Élus que la Technocratie veut recenser et contrôler. Ses refuges sont la différence entre extraction et liberté pour certains.',

  relations: [
    { id: 136, nom: 'Thyrvum', type: 'allié', note: 'Fournisseur de matériel via routes non surveillées. Sait qu\'il y a deux réseaux. Ne sait pas où est la frontière.' },
    { id: 44, nom: 'Ossira', type: 'allié', note: 'A fourni le premier contact avec des Élus non-enregistrés. Origine du réseau Élus.' },
    { id: 316, nom: 'Thyrveln', type: 'allié', note: 'Fournit des matériaux détournés. Ne demande pas les emplacements. Arrangement fonctionnel.' },
  ],

  combat: {
    sorts: [
      'Mur de sol (Sol) — élévation rapide d\'une barrière de terre — protection immédiate en espace souterrain',
      'Scellement de roche (Roche) — fermeture d\'un passage par compaction rocheuse — barricade ou dissimulation',
      'Réseau racinaire (Sol) — extension de perception dans le sol environnant — détection de présences ou passages',
    ],
  },

  image_prompts: [
    {
      id: 'kargoval_refuge',
      description: 'Kargoval dans une galerie souterraine en construction, installant un faux mur avec des matériaux qui correspondent exactement à la roche environnante. La galerie ressemble à une impasse. Elle ne l\'est pas. Il travaille seul, méthodiquement, sans lumière artificielle.',
      style: 'réaliste chthonien discret, lumière minimale, construction de dissimulation, travail solitaire',
    },
  ],

  lore_long: `Kargoval construit des refuges pour les Élus que la Technocratie voudrait recenser.

Ossira (44) lui a fourni le premier contact. Thyrvum (136) lui fournit les matériaux. Les refuges existent depuis 12 ans.

Deux de ses refuges pour Élus ont été utilisés comme points de transit Dissidents sans que les résidents aient été prévenus. Il a confronté les Dissidentes. Il a changé les accès sans les informer.

Il maintient maintenant deux réseaux séparés avec des codes d'accès différents. Les Dissidentes ont leurs espaces. Les Élus ont les leurs. Personne d'autre que lui ne connaît les deux.

Si quelque chose lui arrive, les deux réseaux perdent leur gardien simultanément. Il n'a pas encore résolu ce problème.`,
};

export default kargoval;
