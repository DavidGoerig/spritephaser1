import type { PersonnageLoreComplet } from '../../../lore-types';

const thariel: PersonnageLoreComplet = {
  id: 18,
  nom: 'Thariel',
  element: 'Psy',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Néréide de 63 ans — une spécialiste qui ne cherche pas à paraître. Corps fonctionnel, pas présenté. Elle se déplace vite dans les espaces qu\'elle connaît, lentement dans les espaces nouveaux — une différence que les observateurs attentifs remarquent.',
    peau: 'Bleutée Néréide légèrement plus foncée que la moyenne — des heures dans les profondeurs aquatiques où la lumière ne pénètre pas. Ses doigts portent des callus d\'écriture sur la main droite et des marques de pression aquatique sur les deux mains.',
    yeux: 'Gris-bleu Psy avec une qualité d\'analyse plutôt que d\'évaluation émotionnelle — elle voit les patterns, les structures, les connexions entre données. Pas ce que les gens ressentent, mais ce que les données disent.',
    vetements: 'Tenue pratique pour les milieux aquatiques — imperméable, avec des poches fermées hermétiquement. Elle porte toujours un sac à dos étanche. Ce qu\'il contient varie selon ce qu\'elle vient de récupérer.',
    signes_particuliers: 'Elle résume spontanément les conversations — une habitude d\'archiviste. "Si je comprends bien, tu dis..." Elle fait ça même dans les conversations informelles. Les personnes trouvent ça rassurant ou irritant selon leur état.',
  },

  psychologie: {
    dominante: 'Archiviste non filtrée depuis 40 ans — elle cache des données sous-marines que la Confédération et l\'Empire préféreraient voir disparaître. Son travail est de préserver ce qui est vrai indépendamment de ce qui est officiel.',
    mecanisme_de_defense: 'La distribution de l\'information comme sécurité. Elle ne garde jamais toutes les données au même endroit. Même elle ne sait pas toujours exactement où sont tous ses caches — elle a un système pour les retrouver, mais le système lui-même est distribué. Détruire ses archives complètes nécessiterait de trouver tout ce qu\'elle a caché en 40 ans.',
    contradiction_interne: 'Elle archive tout — y compris des informations sur des personnes qui lui font confiance. Narevael (84) lui transmet des données du réseau Dissident. Ces données sont dans ses archives avec le reste. Si ses archives tombaient aux mauvaises mains, Narevael et son réseau seraient exposés.',
    rapport_aux_autres: 'Narevael (84) lui transmet des données de l\'intérieur du réseau Dissident — une confiance qu\'il a placée dans sa discrétion. Shyrael (90) connaît l\'emplacement de certains de ses caches sous-marins — sans savoir ce qu\'ils contiennent. Vornael (87) archive en parallèle sans le savoir.',
    vision_du_monde: 'L\'information exacte existe indépendamment de qui la contrôle. Son travail est de faire en sorte qu\'elle survive à ceux qui voudraient la supprimer. Elle ne prend pas parti — elle préserve.',
  },

  histoire: {
    enfance: {
      titre: 'L\'apprentissage des profondeurs',
      contenu: 'À 13 ans, elle avait commencé à explorer les zones sous-marines de Thalassyr avec une maîtresse qui lui avait appris que l\'eau conserve les traces de ce qui l\'a traversée. Pas de façon magique — physiquement. Les courants gardent des patterns. Un archiviste qui comprend les courants peut reconstituer des trajectoires.',
    },
    arrivee: {
      titre: 'Le premier cache',
      contenu: 'À 23 ans, après avoir découvert qu\'une archive officielle avait été modifiée — une information économique sur un accord commercial entre Thalassyr et Varkhôl différait entre la version archivée et la version en circulation — elle avait créé son premier cache sous-marin. Une copie non modifiée. Elle avait commencé à systématiser.',
    },
    premier_conflit: {
      titre: 'La demande de suppression',
      contenu: 'À 35 ans, un représentant de la Confédération lui avait demandé de "corriger" les archives d\'un incident diplomatique dont la version officielle avait changé. Elle avait dit qu\'elle ne falsifiait pas les archives. La Confédération avait retiré son accréditation officielle. Elle avait continué sans accréditation.',
    },
    revelation: {
      titre: 'L\'ampleur de ce qu\'elle a',
      contenu: 'À 55 ans, elle avait réalisé que ses caches contenaient 32 ans d\'informations non filtrées — des décisions de la Confédération, des arrangements avec l\'Empire, des disparitions d\'Élus. Un historien de Thalassyr aurait trouvé dans ses archives la vraie histoire des 32 dernières années. Le problème était qu\'aucun historien de Thalassyr ne pouvait accéder à ses archives sans lui.',
    },
    etat_actuel: {
      titre: 'La surveillance de Sorythel',
      contenu: 'Sorythel (99), agent impérial, surveille les archives officielles de Thalassyr — pas celles de Thariel. Mais il cherche des anomalies dans les flux d\'information et certains de ses caches sous-marins sont dans des zones que Sorythel commence à cartographier. Elle a déplacé 3 caches dans les 6 dernières semaines.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thariel_sorythel',
      titre: 'La cartographie de Sorythel',
      description: 'Sorythel (99) cartographie les zones sous-marines proches de Néris pour l\'Empire. Il ne cherche pas les caches de Thariel — mais sa cartographie pourrait les révéler par accident. Shyrael (90) connaît certains emplacements et a croisé Sorythel lors de plongées récentes.',
      personnages_impliques: [99, 90],
      declencheur: 'Cartographie sous-marine impériale qui approche de zones où des caches sont situés',
      consequence: 'Risque de découverte involontaire — déplacement urgent de caches prioritaires',
    },
    {
      id: 'thariel_vornael',
      titre: 'L\'archive parallèle',
      description: 'Vornael (87) archive les mêmes données que Thariel depuis 15 ans sans le savoir — ils ont développé des méthodes similaires indépendamment. Si Thariel prenait contact, leurs archives combinées seraient plus complètes que chacune séparément. Mais un contact révèle l\'existence de l\'un à l\'autre — et à quiconque surveille leurs communications.',
      personnages_impliques: [87, 84],
      declencheur: 'Convergence involontaire des deux archives non filtrées de Thalassyr',
      consequence: 'Opportunité de coordination — risque de révélation mutuelle si les communications sont surveillées',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Archiviste non filtrée depuis 40 ans à Thalassyr. Cache des données sous-marines sur 4 décennies d\'histoire réelle. Sorythel (99) cartographie les zones proches de ses caches sans savoir ce qu\'il cherche.',

  relations: [
    { id: 84, nom: 'Narevael', type: 'allié', note: 'Lui transmet des données Dissidentes. Confiance placée dans sa discrétion — ses données sont dans les archives.' },
    { id: 90, nom: 'Shyrael', type: 'allié', note: 'Plongeuse qui connaît certains emplacements de caches. A croisé Sorythel récemment.' },
    { id: 99, nom: 'Sorythel', type: 'adversaire', note: 'Cartographie les zones sous-marines pour l\'Empire. Risque de découverte involontaire.' },
  ],

  combat: {
    sorts: [
      'Scellement d\'information (Psy) — encodage mental d\'une information dans un support physique — archive mentale inviolable',
      'Flux de mémoire (Psy) — extraction et transmission d\'une information précise — partage instantané sans support écrit',
      'Brouillage d\'archive (Psy) — perturbation de la lecture d\'un document — protection d\'archives contre la lecture non autorisée',
    ],
  },

  image_prompts: [
    {
      id: 'thariel_cache',
      description: 'Thariel en plongée sous-marine près des côtes de Thalassyr — une Néréide de 63 ans descendant vers un groupe de rochers, un sac étanche dans les mains. L\'eau autour d\'elle est sombre. Elle connaît exactement où elle va. Son expression est de concentration absolue.',
      style: 'réaliste archiviste Néréide, profondeurs sous-marines, cache aquatique, mission silencieuse',
    },
  ],

  lore_long: `Thariel archive des données non filtrées depuis 40 ans dans des caches sous-marins distribués à Thalassyr. Elle ne prend pas parti — elle préserve.

Ses caches contiennent 40 ans d'histoire réelle de Thalassyr : décisions de la Confédération, arrangements impériaux, disparitions d'Élus. Aucun historien ne peut y accéder sans elle.

Sorythel (99) cartographie les zones sous-marines pour l'Empire. Il ne cherche pas ses caches. Il pourrait les trouver par accident.`,
};

export default thariel;
