import type { PersonnageLoreComplet } from '../../../lore-types';

const sylkraven: PersonnageLoreComplet = {
  id: 344,
  nom: 'Sylkraven',
  element: 'Glace',
  element2: 'Stellaire',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Monarchie',

  apparence: {
    taille_corpulence: 'Grand, avec une présence physique qui communique l\'autorité sans l\'exiger — quelqu\'un à qui on laisse la parole naturellement.',
    peau: 'Blanc-cristal Givrin avec des éclats stellaires réguliers et contrôlés. La combinaison est esthétiquement harmonieuse — une qualité qui lui a été utile à la cour.',
    yeux: 'Bleu profond avec des étoiles dorées visibles en périphérie. Ces yeux ont été décrits comme "rassurants" par des personnes qui venaient lui demander des décisions difficiles.',
    vetements: 'Tenue de conseiller royal — formelle, avec des détails stellaires intégrés. Elle communique la position sans l\'imposer. Il a fait concevoir cette tenue lui-même.',
    signes_particuliers: 'Il demande toujours le contexte avant de donner un avis — le contexte complet, pas une version résumée. Cette demande est parfois perçue comme une façon de ralentir les décisions. Pour lui, c\'est une condition de fiabilité.',
  },

  psychologie: {
    dominante: 'Validation des décisions politiques royales via la lecture des étoiles. La tradition Givrin de lecture stellaire pour les décisions importantes est ancienne. Il est son interprète actuel — et il sait que la validité de cette tradition dépend en partie de sa propre rigueur.',
    mecanisme_de_defense: 'La formulation conditionnelle. Il ne dit jamais "les étoiles disent que". Il dit "les trajectoires stellaires indiquent des conditions favorables pour" — une formulation qui laisse la décision à celui qui décide, pas aux étoiles.',
    contradiction_interne: 'La tradition de lecture stellaire pour les décisions politiques est réelle — et partiellement basée sur des corrélations réelles entre alignements et conditions climatiques. Elle est aussi utilisée pour légitimer des décisions qui auraient été prises de toute façon. Il sait les deux choses. Il maintient la tradition en espérant que la première partie l\'emporte sur la seconde.',
    rapport_aux_autres: 'Keldris (57) lui pose des questions sur les lectures stellaires — l\'Empire est intéressé par les corrélations entre astronomie et dégel. Ces questions sont politiquement chargées. Telos (29) est un contact d\'une autre région avec qui il partage des informations sur les traditions de lecture stellaire — un partage intellectuel sans dimension politique.',
    vision_du_monde: 'Les étoiles donnent des informations. Ces informations ne décident pas à la place des décideurs. Son rôle est de maintenir la qualité de l\'information, pas de contrôler ce qu\'on en fait.',
  },

  histoire: {
    enfance: {
      titre: 'La lecture familiale',
      contenu: 'À 12 ans, son père — conseiller de la génération précédente — lui avait expliqué la tradition de lecture stellaire Givrin. Pas comme une mystique mais comme une méthode : les positions stellaires corrèlent avec des conditions climatiques, qui corrèlent avec des conditions de ressources, qui influencent les décisions. La chaîne causale était longue. Elle existait.',
    },
    arrivee: {
      titre: 'Le conseil royal',
      contenu: 'À 32 ans, Thyval (55) l\'avait nommé conseiller pour les affaires célestes. Sa méthode — plus rigoureuse que celle de ses prédécesseurs — avait été bien reçue par la cour. Il avait immédiatement demandé à avoir accès aux archives de Karath (52) pour affiner ses corrélations.',
    },
    premier_conflit: {
      titre: 'La décision avant la lecture',
      contenu: 'À 40 ans, Thyval avait pris une décision diplomatique importante et lui avait demandé une lecture stellaire pour la valider après coup — pas avant. Il avait fourni la lecture. La décision et la lecture coïncidaient. Il avait signalé à Thyval que la procédure avait été inversée. Thyval avait écouté. Ça avait recommencé deux fois depuis.',
    },
    revelation: {
      titre: 'Les questions de Keldris',
      contenu: 'Keldris (57) lui avait posé des questions précises sur les corrélations entre alignements et conditions de dégel — des questions qui montraient que l\'Empire avait déjà des informations substantielles. Ces questions lui avaient indiqué que la Monarchie n\'était pas la seule à surveiller la fenêtre astronomique. Il avait répondu prudemment.',
    },
    etat_actuel: {
      titre: 'La lecture de la fenêtre',
      contenu: 'Il prépare une lecture stellaire sur la fenêtre de 18 mois pour Thyval — une lecture qui devra être à la fois précise astronomiquement et politiquement lisible pour la cour. Ces deux exigences ne vont pas toujours dans le même sens. Il travaille sur la formulation.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sylkraven_lecture_fenetre',
      titre: 'La lecture pour la cour',
      description: 'Thyval (55) lui a demandé une lecture stellaire de la fenêtre de 18 mois — une lecture qui sera présentée à la cour et aux délégations étrangères. Elle doit être astronomiquement précise et politiquement lisible. Il travaille sur la formulation. Les deux exigences créent une tension que sa méthode conditionnelle ne résout pas entièrement.',
      personnages_impliques: [55, 57],
      declencheur: 'Demande de Thyval d\'une lecture officielle de la fenêtre pour la cour',
      consequence: 'Lecture en préparation — tension entre précision astronomique et lisibilité politique',
    },
    {
      id: 'sylkraven_questions_keldris',
      titre: 'L\'Empire qui sait déjà',
      description: 'Les questions de Keldris (57) sur les corrélations stellaires ont montré que l\'Empire a des informations substantielles sur la fenêtre astronomique — informations obtenues avant que la Monarchie ne présente sa lecture officielle. Keldris a des sources à Crysalme. Sylkraven ne sait pas qui.',
      personnages_impliques: [57, 55],
      declencheur: 'Questions de Keldris montrant une connaissance préalable des corrélations',
      consequence: 'Empire informé en avance — source interne non identifiée',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Conseiller royal pour les affaires célestes à Crysalme. Sa lecture de la fenêtre de 18 mois pour la cour est en préparation. Il sait que l\'Empire a des informations préalables — mais pas d\'où elles viennent.',

  relations: [
    { id: 57, nom: 'Keldris', type: 'contact', note: 'Pose des questions sur les corrélations stellaires. Ses questions montrent une connaissance préalable substantielle. Contact diplomatique de surface.' },
    { id: 29, nom: 'Telos', type: 'allié', note: 'Partage intellectuel sur les traditions de lecture stellaire d\'autres régions. Sans dimension politique.' },
  ],

  combat: {
    sorts: [
      'Lance de glace (Glace) — projection d\'un projectile de glace à haute vitesse — dommage perforant',
      'Lumière stellaire (Stellaire) — émission d\'une lumière éblouissante — désorientation visuelle',
      'Prédiction de gel (Glace + Stellaire) — combinaison de l\'analyse stellaire et du contrôle glacé pour anticiper les mouvements — ralentissement d\'adversaire',
    ],
  },

  image_prompts: [
    {
      id: 'sylkraven_conseil',
      description: 'Sylkraven dans la salle du conseil royal de Crysalme, debout face à Thyval (55) et à la cour. Il présente une lecture stellaire — une carte de trajectoires projetée dans l\'air via l\'élément Stellaire, superposée à une carte de Crysalme en glace. Son expression est mesurée, ses mots choisis.',
      style: 'réaliste conseiller royal givrin, présentation stellaire en salle du conseil, Crysalme intérieur',
    },
  ],

  lore_long: `Sylkraven lit les étoiles pour valider les décisions politiques de la Monarchie Givrin. Sa méthode est rigoureuse — il formule des conditions, pas des certitudes.

Il prépare une lecture de la fenêtre de 18 mois pour la cour. Astronomiquement précise et politiquement lisible — les deux exigences créent une tension.

Keldris (57) lui pose des questions qui montrent que l'Empire a des informations préalables sur la fenêtre. Il ne sait pas d'où. Il a répondu prudemment.

Thyval (55) a pris des décisions avant les lectures deux fois depuis qu'il l'a signalé. La procédure est inversée. Il continue de fournir les lectures.`,
};

export default sylkraven;
