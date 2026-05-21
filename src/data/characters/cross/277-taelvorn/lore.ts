import type { PersonnageLoreComplet } from '../../../lore-types';

const taelvorn: PersonnageLoreComplet = {
  id: 277,
  nom: 'Taelvorn',
  element: 'Electrique',
  element2: 'Vent',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Moyen, soigné — physique de technicien de précision, pas de terrain. Ses habits sont toujours propres même après une inspection en altitude.',
    peau: 'Légèrement bronzée, avec des cicatrices fines aux avant-bras : traces de décharges électriques des jonctions. Il les couvre rarement.',
    yeux: 'Bleu Néréide, avec une habitude d\'évaluer les surfaces avant de poser la main dessus.',
    vetements: 'Uniforme technique de la Confédération, toujours porté correctement. Il range ses outils dans un ordre précis — il peut trouver n\'importe lequel les yeux fermés.',
    signes_particuliers: 'Quand il parle de jonctions, ses mains bougent pour illustrer les flux — geste involontaire que ses collègues ont appris à reconnaître comme le signe qu\'il est vraiment intéressé par le sujet.',
  },

  psychologie: {
    dominante: 'Compétence technique appliquée à un problème qui mérite d\'être résolu : comment relier deux systèmes qui n\'étaient pas conçus pour fonctionner ensemble.',
    mecanisme_de_defense: 'La précision technique comme langage universel. Quand la conversation politique devient inconfortable, il ramène tout aux chiffres et aux flux.',
    contradiction_interne: 'Il travaille pour la Confédération, dont il respecte l\'objectif de maintenance du réseau artificiel d\'Orven. Mais il sait que ce réseau perpétue la disparition du vent naturel — le Silence des Vents dont Lysara était responsable. Son travail préserve quelque chose qui n\'aurait peut-être pas dû remplacer ce qu\'il a remplacé.',
    rapport_aux_autres: 'Talvyn (23) est son contact principal à Asterciel — quelqu\'un qui comprend les champs électriques d\'un point de vue différent. Leurs échanges sont toujours techniques, jamais politiques. C\'est confortable.',
    vision_du_monde: 'Les systèmes fonctionnent ou ils ne fonctionnent pas. Celui qu\'il maintient fonctionne. Si quelqu\'un décide de le démanteler un jour, ce sera pour quelque chose qui fonctionne mieux — et ce sera son travail de documenter comment le passage est possible.',
  },

  histoire: {
    enfance: {
      titre: 'Thalassyr et les fils',
      contenu: 'Né à Thalassyr d\'une famille de techniciens du réseau portuaire. L\'élément Electrique venait du père, le Vent d\'une mère dont la famille avait des liens avec Asterciel plusieurs générations en arrière. Il avait appris à lire les courants électriques dans les fils du port avant d\'apprendre que les Aérides faisaient quelque chose de similaire avec le vent naturellement.',
    },
    arrivee: {
      titre: 'La jonction qui ne fonctionnait pas',
      contenu: 'Recruté par la Confédération à 28 ans pour résoudre un problème d\'interface entre le réseau artificiel d\'Orven, basé à Thalassyr, et les courants naturels qui alimentaient les strates d\'Asterciel. La jonction perdait 30% de puissance. Il avait trouvé la solution en 3 semaines. Il était resté depuis pour implémenter les améliorations.',
    },
    premier_conflit: {
      titre: 'Le rapport sur les inefficacités',
      contenu: 'Son premier rapport sur les pertes du réseau avait inclus une section sur les causes structurelles — dont le fait que le réseau artificiel couvrait des courants naturels plutôt que de les utiliser. La section avait été retirée par sa hiérarchie avant publication. Il avait noté l\'incident. Il avait continué son travail.',
    },
    revelation: {
      titre: 'Gaelryn dans les courants',
      contenu: 'Il avait vu une navigatrice utiliser ses jonctions d\'une façon qu\'il n\'avait pas calculée — en surface, les jonctions semblaient dangereuses pour un vol, mais elle les traversait sans dommage. Il avait passé un mois à comprendre comment. La réponse était que son élément électrique lui permettait de lire les flux en temps réel et d\'ajuster. Une capacité qu\'aucun instrument qu\'il concevait ne pouvait reproduire.',
    },
    etat_actuel: {
      titre: 'La documentation non demandée',
      contenu: 'Il rédige un document technique sur les possibilités d\'interface entre le réseau artificiel et les courants naturels — une alternative au maintien du statu quo. Personne ne lui a demandé ce document. Il le rédige parce que la question lui semble mériter une réponse technique indépendamment de sa mise en oeuvre politique.',
    },
  },

  evenements_narratifs: [
    {
      id: 'taelvorn_jonction_perdue',
      titre: 'La section retirée',
      description: 'Son premier rapport mentionnait que le réseau artificiel d\'Orven supprime des courants naturels au lieu de les utiliser — une inefficacité structurelle. La section a été retirée. Il a ce rapport original dans ses archives personnelles, avec la note de retrait. Il n\'a jamais redemandé pourquoi.',
      personnages_impliques: [15],
      declencheur: 'Rapport technique sur les inefficacités du réseau',
      consequence: 'Conscience que son travail a des implications que sa hiérarchie préfère ne pas nommer',
    },
    {
      id: 'taelvorn_document_non_demande',
      titre: 'L\'alternative technique',
      description: 'Il rédige une étude sur la faisabilité d\'une interface entre réseau artificiel et courants naturels. C\'est techniquement solide. C\'est politiquement non demandé. Si quelqu\'un le lisait, ils auraient une carte de comment transformer un système sans le détruire. Il ne sait pas encore à qui il le donnera.',
      personnages_impliques: [15, 23],
      declencheur: 'Intérêt technique pour les systèmes alternatifs',
      consequence: 'Document potentiellement utile à quiconque voudrait changer le réseau',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Infrastructure du réseau artificiel d\'Orven. Il maintient ce qui a remplacé Lysara — et il commence à documenter comment on pourrait faire autrement.',

  relations: [
    { id: 15, nom: 'Orven', type: 'mentor', note: 'A étudié son réseau depuis l\'intérieur. Respecte son oeuvre sans en approuver toutes les implications.' },
    { id: 23, nom: 'Talvyn', type: 'allié', note: 'Contact technique à Asterciel. Échanges purement professionnels — le seul type de conversation qu\'ils veulent tous les deux.' },
    { id: 276, nom: 'Gaelryn', type: 'contact_nécessaire', note: 'Croisée en vol. Lui a montré comment un corps peut faire ce qu\'aucun instrument ne peut mesurer.' },
  ],

  combat: {
    sorts: [
      'Surcharge de réseau (Electrique) — surcharge d\'un système électrique ciblé — efficace sur équipements, moins sur personnes',
      'Courant directif (Vent) — manipulation d\'un flux d\'air pour déplacer un projectile ou perturber un équilibre',
      'Court-circuit (combiné) — neutralisation d\'une infrastructure électrique via un flux de vent conducteur — technique de terrain, pas de duel',
    ],
  },

  image_prompts: [
    {
      id: 'taelvorn_inspection',
      description: 'Taelvorn sur une plateforme d\'inspection en altitude, les mains sur une jonction de réseau, concentré. Autour de lui les fils du réseau artificiel d\'Orven. Il n\'est pas équipé pour le combat — il est équipé pour comprendre. Son expression est celle d\'un homme qui aime un problème difficile.',
      style: 'réaliste technique, lumière d\'altitude diffuse, tons métalliques et bleu électrique, précision sans urgence',
    },
  ],

  lore_long: `Taelvorn a passé 9 ans à maintenir quelque chose qui n'aurait peut-être pas dû remplacer ce qu'il a remplacé.

La jonction entre le réseau artificiel d'Orven et les courants naturels d'Asterciel perdait 30% de puissance quand il est arrivé. Il a réduit la perte à 4% en 6 mois. C'est un bon travail. Il a continué.

Son premier rapport incluait une section sur les causes structurelles de l'inefficacité : le réseau artificiel supprime les courants naturels au lieu de les utiliser comme base. La section a été retirée avant publication. Il a noté l'incident sans le contester.

Il rédige maintenant un document non demandé : comment interfacer le réseau artificiel avec ce qu'il a remplacé. Techniquement solide. Politiquement complexe. Personne ne l'a commandé. Il le fait parce que la question mérite une réponse technique, indépendamment de qui demandera à l'utiliser.

Gaelryn lui a montré quelque chose que ses instruments ne peuvent pas mesurer : un corps qui lit les courants électriques en temps réel, sans délai, sans perte. Aucun système qu'il peut concevoir ne reproduit ça. Il le note.

Son document, si quelqu'un le lisait, serait une carte de comment transformer le réseau sans le démanteler. Il ne sait pas encore à qui le donner.`,
};

export default taelvorn;
