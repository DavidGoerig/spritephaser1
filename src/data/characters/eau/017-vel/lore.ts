import type { PersonnageLoreComplet } from '../../../lore-types';

const vel: PersonnageLoreComplet = {
  id: 17,
  nom: 'Vel',
  element: 'Eau',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Néréide de 79 ans — la silhouette d\'un escrimeur que le temps a économisé plutôt qu\'usé. Il se déplace encore avec la précision de quelqu\'un qui a passé des décennies à calculer la distance et l\'angle.',
    peau: 'Bleutée profonde Néréide avec des cicatrices anciennes sur les avant-bras — des rencontres de 64 ans d\'enquête dans des endroits qui n\'accueillaient pas les questions. La plus ancienne date de la semaine qui a suivi la mort de Lyraen.',
    yeux: 'Bleu-vert avec une intensité qui déconcerte — il ne regarde pas, il évalue. Chaque conversation est une pièce d\'un puzzle qu\'il assemble depuis 64 ans.',
    vetements: 'Tenue fonctionnelle d\'escrimeur — rien qui ralentit, rien qui encombre. Pas d\'insignes de faction malgré ses 64 ans de travail avec les Dissidentes. Il n\'a jamais formellement rejoint : il a un objectif, pas une appartenance.',
    signes_particuliers: 'Il note sur de petits morceaux de papier qu\'il garde dans une poche intérieure. Des noms, des dates, des connexions. Il ne les relit jamais devant les autres. Ce qu\'il écrit ne quitte jamais sa personne.',
  },

  psychologie: {
    dominante: 'L\'enquête comme identité — il cherche qui a tué Lyraen depuis 64 ans. Ce n\'est plus seulement un objectif : c\'est ce qui structure sa vie, ses relations, ses choix. La réponse, s\'il la trouvait, pourrait aussi dissoudre ce qui le maintient.',
    mecanisme_de_defense: 'La question suivante. Quand une piste se ferme, il ouvre la suivante immédiatement. Ne jamais s\'arrêter assez longtemps pour ressentir l\'accumulation des pistes fermées.',
    contradiction_interne: 'Il sait que Lysara (14) détient des informations qu\'elle ne lui a pas encore données complètement. Il lui a demandé directement plusieurs fois. Elle lui a donné des fragments. Il a continué à chercher à côté au lieu d\'insister sur ce qu\'elle sait — peut-être parce que si elle lui donnait tout, l\'enquête se terminerait.',
    rapport_aux_autres: 'Lysara (14) est sa principale source d\'information et le seul témoin direct qu\'il a encore. Sorthel (82) lui fournit des routes d\'accès à des archives interdites. Lyseth (88) vient de rejoindre son réseau avec des informations sur Shaleth (16) — l\'angle le plus concret qu\'il ait eu depuis des années.',
    vision_du_monde: 'Le Silence des Vents n\'est pas un événement complet — quelque chose a été caché dans ses circonstances. 64 ans d\'enquête lui ont appris que les choses cachées ne disparaissent pas, elles attendent quelqu\'un qui continue à chercher assez longtemps.',
  },

  histoire: {
    enfance: {
      titre: 'Le Thalassyr d\'avant',
      contenu: 'À 15 ans, il avait connu le vent naturel de Thalassyr — pas depuis longtemps, mais assez pour en garder le souvenir. Il avait connu Lyraen comme la maîtresse de Lysara (14), une Néréide dont la réputation dans la compréhension des flux eau-vent était sans égale. Il l\'admirait sans la connaître personnellement.',
    },
    arrivee: {
      titre: 'La mort de Lyraen',
      contenu: 'Le Silence des Vents avait tué Lyraen selon la version officielle. À 15 ans, il avait vu quelque chose qui ne correspondait pas à cette version — une présence dans la zone de la mort de Lyraen qui n\'avait pas d\'explication technique. Il avait posé la question. On lui avait dit de ne plus la poser. Il avait commencé son enquête.',
    },
    premier_conflit: {
      titre: 'La première réponse violente',
      contenu: 'À 19 ans, sa première tentative d\'accéder aux archives du Silence des Vents lui avait coûté 2 jours d\'incarcération et des marques permanentes aux avant-bras. Il avait compris que la question sur Lyraen était plus sensible que la mort d\'une maîtresse lors d\'une crise — il cherchait quelque chose que des personnes vivantes voulaient garder caché.',
    },
    revelation: {
      titre: 'Le réseau de 64 ans',
      contenu: 'Au fil des décennies, il avait construit un réseau d\'informateurs, de contacts dans les archives, de témoins. Il travaillait avec les Dissidentes par pragmatisme — ils avaient accès à des informations que personne d\'autre ne pouvait obtenir. Il n\'était pas Dissident. Il avait un objectif unique, et les Dissidentes étaient utiles à cet objectif.',
    },
    etat_actuel: {
      titre: 'Le journal de Shaleth',
      contenu: 'Lyseth (88) vient de rejoindre son réseau avec un journal de Shaleth (16) qui documente des filtres d\'information sur 5 ans. Vel cherche dans ce journal des connexions avec la mort de Lyraen — Shaleth était une enfant de 12 ans lors du Silence des Vents, mais ses archives sur le filtrage de l\'information de l\'époque pourraient révéler ce qui a été caché.',
    },
  },

  evenements_narratifs: [
    {
      id: 'vel_journal_shaleth',
      titre: 'La connexion dans les archives',
      description: 'Le journal de Shaleth (16) trouvé par Lyseth (88) contient des références à des archives du Silence des Vents que Shaleth a filtrées — des informations retenues "pour la stabilité". Vel cherche dans ces références une connexion avec la mort de Lyraen. Shaleth sait que Lyseth a rejoint son réseau et prépare une réponse.',
      personnages_impliques: [88, 16],
      declencheur: 'Arrivée du journal de Shaleth dans le réseau de Vel',
      consequence: 'Angle le plus concret de l\'enquête depuis des années — course contre la réponse de Shaleth',
    },
    {
      id: 'vel_lysara',
      titre: 'La conversation finale',
      description: 'Lysara (14) a 79 ans et réfléchit à transmettre le flacon et ce qu\'elle sait réellement sur la mort de Lyraen. Vel sait qu\'elle retient quelque chose. S\'il insistait maintenant — avec l\'urgence de la piste Shaleth — elle lui donnerait peut-être ce qu\'elle garde. Mais il n\'a pas encore fait la demande directe.',
      personnages_impliques: [14, 96],
      declencheur: 'Convergence entre la piste Shaleth et la réflexion de Lysara sur la transmission',
      consequence: 'Opportunité de fermer l\'enquête de 64 ans — si Vel pose la question au bon moment',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Enquêteur Dissident cherchant qui a tué Lyraen depuis 64 ans. Le journal de Shaleth (16) trouvé par Lyseth (88) est sa piste la plus concrète. Lysara (14) détient des informations qu\'elle n\'a pas encore données.',

  relations: [
    { id: 14, nom: 'Lysara', type: 'allié', note: 'Témoin direct. Détient des informations sur la mort de Lyraen. Ne les a pas données complètement.' },
    { id: 88, nom: 'Lyseth', type: 'allié', note: 'Vient de rejoindre son réseau avec le journal de Shaleth. Angle le plus concret depuis des années.' },
    { id: 82, nom: 'Sorthel', type: 'allié', note: 'Lui fournit des routes d\'accès à des archives interdites.' },
  ],

  combat: {
    sorts: [
      'Lame de courant (Eau) — tranchant de flux concentré — précision d\'escrimeur appliquée à l\'élément',
      'Pression d\'archivage (Eau) — maintien d\'un objet ou d\'une zone sous flux — protection ou extraction',
      'Mémoire du flux (Eau) — lecture des résidus de passage dans l\'eau — reconstruction de trajectoires passées',
    ],
  },

  image_prompts: [
    {
      id: 'vel_enquete',
      description: 'Vel dans un bureau couvert de papiers à Néris — un vieux Néréide de 79 ans se penchant sur une table où des cartes, des notes et des fils relient des noms et des dates. Ses yeux bleu-vert sont fixés sur un point de convergence. Dans sa main, un petit morceau de papier avec un nom récent.',
      style: 'réaliste enquêteur Néréide vieilli, salle d\'archives, fils de connexion, 64 ans d\'enquête condensés',
    },
  ],

  lore_long: `Vel cherche qui a tué Lyraen depuis 64 ans. Son enquête est son identité — il travaille avec les Dissidentes par utilité, pas par appartenance.

Lysara (14) détient des informations sur la mort de Lyraen qu'elle ne lui a pas données complètement. Il sait qu'elle retient quelque chose. Il ne lui a pas encore posé la question directement.

Lyseth (88) vient de rejoindre son réseau avec un journal de Shaleth (16) qui archive des filtres d'information depuis 5 ans. C'est sa piste la plus concrète depuis des années. Shaleth prépare une réponse.`,
};

export default vel;
