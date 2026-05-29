import type { PersonnageLoreComplet } from '../../../lore-types';

const dravek: PersonnageLoreComplet = {
  id: 135,
  nom: 'Dravek',
  element: 'Poison',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Chthonien de 49 ans, ancien chercheur — la posture d\'un scientifique qui n\'a plus de laboratoire mais n\'a pas perdu ses habitudes d\'observation.',
    peau: 'Pierre grise avec des traces de contamination fongique légère — les marques d\'un chercheur qui a travaillé trop près de la zone sans équipement suffisant.',
    yeux: 'Gris-vert avec une qualité de quelqu\'un qui a posé les mauvaises questions et en a payé les conséquences.',
    vetements: 'Tenue civile simple — plus de tenue de chercheur. Il n\'en a plus le droit.',
    signes_particuliers: 'Renvoyé de la zone fongique après avoir soulevé des questions sur l\'accord de Valyx. Il connaît la zone mieux que la plupart des chercheurs actuels.',
  },

  psychologie: {
    dominante: 'Ancien chercheur de la zone fongique d\'Ormn-Dur, renvoyé pour avoir soulevé des questions sur l\'accord de Valyx (38) — un accord qui structure les conditions actuelles d\'accès à la Fosse Interdite. Il pense que cet accord masque quelque chose. Il n\'a plus les moyens de le prouver.',
    mecanisme_de_defense: 'La documentation préalable. Il a conservé ses notes de recherche — les observations qui avaient mené à ses questions. Cette documentation est sa seule preuve.',
    contradiction_interne: 'Il a été renvoyé pour avoir posé des questions — pas pour avoir répondu. Son renvoi confirme que les questions dérangeaient. Mais la confirmation ne lui donne pas la réponse.',
    rapport_aux_autres: 'Karm (41) est dans son réseau — quelqu\'un qui peut encore accéder à la zone. Valyx (38) est l\'archive de l\'accord qu\'il a questionné.',
    vision_du_monde: 'L\'accord de Valyx a été présenté comme un accord de neutralité sur la zone fongique. Ses recherches indiquaient que les conditions de cet accord ne correspondaient pas à la neutralité déclarée. Il ne sait pas pourquoi.',
  },

  histoire: {
    enfance: {
      titre: 'La zone fongique',
      contenu: 'Formation en biologie fongique souterraine — une spécialité très spécifique à Ormn-Dur. Il avait passé 15 ans à étudier la zone de la Fosse Interdite.',
    },
    arrivee: {
      titre: 'L\'accord de Valyx',
      contenu: 'Ses recherches l\'avaient amené à comparer les conditions actuelles de la zone avec les conditions de l\'accord de Valyx. Les paramètres ne correspondaient pas — la zone avait évolué d\'une façon que l\'accord n\'anticipait pas.',
    },
    premier_conflit: {
      titre: 'Les questions',
      contenu: 'Il avait soulevé ces questions dans un rapport interne. Deux semaines plus tard, il était convoqué et renvoyé — officiellement pour "inconduite professionnelle". Les questions n\'avaient pas été répondues.',
    },
    revelation: {
      titre: 'Ce que le renvoi signifie',
      contenu: 'Le renvoi lui avait confirmé que ses questions touchaient quelque chose de réel. On ne renvoie pas pour des questions académiques innocentes. Il avait commencé à documenter ce qu\'il savait.',
    },
    etat_actuel: {
      titre: 'L\'ancien chercheur',
      contenu: 'Il n\'a plus accès à la zone. Ses notes sont sa seule ressource. Il cherche quelqu\'un qui peut vérifier ses hypothèses depuis l\'intérieur.',
    },
  },

  evenements_narratifs: [
    {
      id: 'dravek_accord',
      titre: 'Les questions sur l\'accord de Valyx',
      description: 'Dravek a été renvoyé pour avoir questionné l\'accord de Valyx (38). Ses notes de recherche documentent les paramètres anormaux qu\'il avait observés. Si Karm (41) ou quelqu\'un ayant encore accès à la zone fongique peut vérifier ses observations, ses questions auront des réponses — et les implications de l\'accord de Valyx seront exposées.',
      personnages_impliques: [41, 38],
      declencheur: 'Quelqu\'un avec accès à la zone vérifiant les observations de Dravek',
      consequence: 'Questions sur l\'accord de Valyx confirmées — implications exposées',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Ancien chercheur renvoyé pour avoir questionné l\'accord de Valyx. Ses notes sont la seule trace de ses observations. N\'a plus accès à la zone.',

  relations: [
    { id: 41, nom: 'Karm', type: 'contact', note: 'Peut encore accéder à la zone. Ressource pour vérifier ses hypothèses.' },
    { id: 38, nom: 'Valyx', type: 'contact', note: 'L\'accord que ses recherches ont questionné.' },
  ],

  combat: {
    sorts: [
      'Spores de confusion (Poison) — nuage fongique — désorientation',
      'Contact toxique (Poison) — toxine de zone fongique — affaiblissement',
    ],
  },

  image_prompts: [
    {
      id: 'dravek_notes',
      description: 'Dravek dans son espace de vie réduit après son renvoi — un Chthonien de 49 ans entouré de ses notes de recherche. Il relit ses observations sur la zone fongique. Son expression est de quelqu\'un qui sait ce que ses données signifient et qui n\'a plus les moyens de le prouver formellement.',
      style: 'réaliste Chthonien chercheur renvoyé, Ormn-Dur, notes fongiques, questions sur l\'accord de Valyx, exclusion institutionnelle',
    },
  ],

  lore_long: `Dravek a été renvoyé de la zone fongique d'Ormn-Dur après avoir soulevé des questions sur l'accord de Valyx (38).

Son renvoi confirme que ses questions touchaient quelque chose de réel — on ne renvoie pas pour des questions académiques innocentes.

Ses notes de recherche documentent ses observations. Il n'a plus accès à la zone pour les vérifier.`,
};

export default dravek;
