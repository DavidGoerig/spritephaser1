import type { PersonnageLoreComplet } from '../../../lore-types';

const orvkael: PersonnageLoreComplet = {
  id: 284,
  nom: 'Orvkael',
  element: 'Plante',
  element2: 'Fée',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Gardiens',

  apparence: {
    taille_corpulence: 'Trapu, large — physique de forestier qui porte des charges lourdes et escalade des arbres. Plus de muscles que la moyenne Sylvan.',
    peau: 'Brun sombre, avec des stries foncées aux avant-bras qui correspondent aux zones où les Fées-plantes se posent le plus souvent.',
    yeux: 'Noisette foncé, habitués à surveiller les hauteurs forestières — il passe une grande partie de ses journées à regarder au-dessus de lui.',
    vetements: 'Tenue de travail forestier robuste avec des manches courtes — les Fées-plantes doivent avoir accès à la peau pour se poser. Il ne porte aucun bijou pour la même raison.',
    signes_particuliers: 'Il n\'est jamais seul dans la forêt — il y a toujours 3 à 7 Fées-plantes posées sur lui ou volant à portée. Elles ne sont pas décoratives ; elles sont son système de surveillance.',
  },

  psychologie: {
    dominante: 'Pragmatisme défensif. La forêt a des menaces. Krath est une de ces menaces. Il faut surveiller les deux.',
    mecanisme_de_defense: 'La délégation aux Fées-plantes. Quand une situation est ambiguë, il envoie d\'abord reconnaître avant d\'agir.',
    contradiction_interne: 'Il est Gardien — ce qui implique une approche de la forêt que les Conservateurs désapprouvent. Mais son système de Fées-plantes pourrait aussi bien servir les Conservateurs. Il utilise ses capacités pour une faction sans que ses capacités soient naturellement liées à cette faction.',
    rapport_aux_autres: 'Orvketh (129) — une Fée-Sylvan ancienne — est une source d\'informations sur les comportements des Fées-plantes qu\'il ne trouve nulle part ailleurs. Ils ont une relation de respect pragmatique : elle lui explique ce que font ses Fées-plantes, il lui transmet des informations sur les zones forestières qu\'elle ne surveille plus physiquement.',
    vision_du_monde: 'Les Fées-plantes sont des systèmes d\'alerte précoce que personne n\'a pensé à utiliser de façon systématique. Il les a pensé de façon systématique.',
  },

  histoire: {
    enfance: {
      titre: 'Les premières Fées',
      contenu: 'Né dans une famille de forestiers Gardiens, l\'élément Fée était rare chez eux. À 8 ans, deux Fées-plantes s\'étaient posées sur ses épaules pendant une promenade en forêt et n\'en étaient plus reparties. Sa famille avait supposé que c\'était une anomalie. Elles étaient toujours là à 40 ans.',
    },
    arrivee: {
      titre: 'Le système de surveillance',
      contenu: 'À 24 ans, il avait commencé à tester la portée de ses Fées-plantes comme sentinelles — jusqu\'à quelle distance elles transmettaient des informations fiables, quel type d\'informations elles transmettaient (présence, danger, état des plantes proches), comment elles distinguaient les menaces des passages normaux. Il avait passé 3 ans à construire une compréhension systématique de leur fonctionnement.',
    },
    premier_conflit: {
      titre: 'Krath dans la zone',
      contenu: 'Les Fées-plantes l\'avaient alerté du passage de Krath (36) dans une zone qu\'il devait surveiller avant que Krath n\'y entre. Il avait pu prévenir des Gardiens dans la zone voisine. Krath n\'avait pas brûlé cette section. Ce n\'était pas nécessairement grâce à l\'alerte — Krath avait peut-être choisi une autre zone pour d\'autres raisons. Mais l\'alerte avait fonctionné.',
    },
    revelation: {
      titre: 'L\'information à Orvketh',
      contenu: 'Orvketh (129) lui avait expliqué que ses Fées-plantes transmettaient plus d\'informations qu\'il n\'en captait — des nuances émotionnelles dans les états végétaux qui dépassaient le simple "danger / non-danger". Il avait passé 6 mois à apprendre à lire ces nuances. Sa surveillance était devenue plus fine. Moins de fausses alertes. Plus d\'informations utiles.',
    },
    etat_actuel: {
      titre: 'La surveillance en réseau',
      contenu: 'Il couvre maintenant une zone de 12 km² de forêt via son réseau de Fées-plantes. Il sait qui entre, ce qu\'ils font, dans quel état sont les plantes après leur passage. Krath est dans sa zone régulièrement. Il documente chaque passage. Il n\'a pas encore décidé ce qu\'il fera de cette documentation.',
    },
  },

  evenements_narratifs: [
    {
      id: 'orvkael_surveillance_krath',
      titre: 'Le dossier Krath',
      description: 'Il documente les passages de Krath dans sa zone depuis 4 ans — dates, zones touchées, état des plantes avant et après. Ce n\'est pas encore une plainte formelle. C\'est une accumulation. Il ne sait pas encore ce qu\'il en fera — une confrontation directe, une transmission aux Conservateurs, ou simplement une archive.',
      personnages_impliques: [36, 129],
      declencheur: 'Présence régulière de Krath dans sa zone surveillée',
      consequence: 'Documentation unilatérale d\'activités qui pourrait devenir un outil politique',
    },
    {
      id: 'orvkael_orvketh_information',
      titre: 'L\'enseignement d\'Orvketh',
      description: 'Orvketh lui a appris à lire les nuances émotionnelles dans les transmissions de ses Fées-plantes. Ce qu\'il a appris a transformé son système de surveillance — de binaire (danger/non-danger) à nuancé (type de passage, état émotionnel des végétaux, persistance de la présence). Orvketh a reçu en échange des informations sur 80 ans de zones forestières qu\'elle n\'avait plus arpentées physiquement.',
      personnages_impliques: [129],
      declencheur: 'Échange de compétences',
      consequence: 'Système de surveillance amélioré ; archive vivante pour Orvketh',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Système d\'alerte précoce forestier. Ses Fées-plantes savent ce qui se passe dans 12 km² de forêt. La question est ce qu\'il fait de cette connaissance.',

  relations: [
    { id: 36, nom: 'Krath', type: 'rival', note: 'Surveille ses passages depuis 4 ans. Documentation non encore utilisée. Tension non déclarée.' },
    { id: 129, nom: 'Orvketh', type: 'mentor', note: 'A enseigné les nuances des Fées-plantes. Échange de compétences contre informations sur la forêt.' },
    { id: 121, nom: 'Sylborn', type: 'allié', note: 'Autre Gardien dans les zones voisines. Reçoit parfois ses alertes précoces.' },
  ],

  combat: {
    sorts: [
      'Sentinelles végétales (Fée) — déploiement actif des Fées-plantes comme système d\'alerte et de harcèlement — portée de 200m',
      'Barrière forestière (Plante) — activation de la végétation dense comme obstacle défensif',
      'Lecture de zone (combiné) — analyse simultanée de l\'état d\'une large zone via les Fées-plantes — informations tactiques de terrain',
    ],
  },

  image_prompts: [
    {
      id: 'orvkael_fées',
      description: 'Orvkael debout dans la forêt, 5 Fées-plantes posées sur ses épaules et bras. Il regarde une direction précise — quelque chose que les Fées viennent de lui signaler. Son expression est celle d\'un homme qui reçoit des informations et décide quoi en faire.',
      style: 'réaliste sylvan, lumière de forêt, présence de Fées-plantes naturelle et non décorative, tons verts',
    },
  ],

  lore_long: `Orvkael n'est jamais seul dans la forêt. Il y a toujours des Fées-plantes posées sur lui ou volant à portée.

Elles ne sont pas décoratives. Ce sont des sentinelles.

Il a passé 3 ans à systématiser leur fonctionnement : portée effective, type d'informations transmises, distinctions entre les types de passages. Puis Orvketh lui a appris les nuances — les états émotionnels des végétaux, les persistances de présence, les variations selon l'élément du visiteur. Son système est passé de binaire à nuancé.

Il couvre 12 km² de forêt. Il sait qui entre, ce qu'ils font, dans quel état les plantes restent après leur passage.

Krath entre régulièrement dans sa zone. Il documente chaque passage depuis 4 ans — zones touchées, état avant et après, patterns de retour. Ce n'est pas encore une plainte formelle. C'est une accumulation. Il ne sait pas encore ce qu'il en fera.

Ses Fées-plantes lui ont donné une connaissance du terrain que ni les Conservateurs ni les autres Gardiens ne possèdent. Ce qu'il décide d'en faire dépend d'une décision qu'il n'a pas encore prise.`,
};

export default orvkael;
