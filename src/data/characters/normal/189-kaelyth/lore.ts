import type { PersonnageLoreComplet } from '../../../lore-types';

const kaelyth: PersonnageLoreComplet = {
  id: 189,
  nom: 'Kaelyth',
  element: 'Normal',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: 'Homme-Lien de 31 ans, recruteur — corpulence ordinaire, tenue neutre. Il ressemble à quelqu\'un de bienveillant.',
    peau: 'Ton neutre avec une qualité de quelqu\'un qui sait mettre à l\'aise.',
    yeux: 'Verts avec une qualité de chaleur calculée. Son empathie est réelle dans la forme, instrumentale dans la fonction.',
    vetements: 'Tenue civile ordinaire — rien qui identifie la Convergence. Il s\'adapte au contexte de chaque rencontre.',
    signes_particuliers: 'Il approche les familles des enfants de Virex au nom de la Convergence — en présentant la Convergence comme une protection, pas comme ce qu\'elle est réellement.',
  },

  psychologie: {
    dominante: 'Recruteur de la Convergence dans l\'Isthme. Il approche les familles des 39 enfants de Virex — des personnes vulnérables dont les enfants Élus sont ciblés. Il présente la Convergence comme une protection: "Nous pouvons les mettre en sécurité." Il omet ce que cette sécurité implique pour les enfants.',
    mecanisme_de_defense: 'La bienveillance de façade. Il croit partiellement en ce qu\'il dit — la Convergence offre effectivement une forme de protection. Ce qu\'elle fait avec les enfants ensuite est une question qu\'il a appris à ne pas poser.',
    contradiction_interne: 'Il recrute des familles en promettant une protection qu\'il ne contrôle pas complètement. Il sait que la Convergence utilise les enfants pour le Protocole d\'Identification. Il a décidé que cette utilisation était acceptable. Cette décision repose sur des justifications qu\'il réexamine rarement.',
    rapport_aux_autres: 'Lysael (63) est dans son réseau — quelqu\'un qui cherche aussi les enfants de Virex, mais pour des raisons différentes. Vashmael (234) est dans son réseau Convergence — son superviseur qui lui assigne les familles à approcher.',
    vision_du_monde: 'Les enfants Élus sans protection seront capturés par l\'Empire. La Convergence offre une alternative. Une alternative imparfaite — mais une alternative.',
  },

  histoire: {
    enfance: {
      titre: 'L\'Isthme et la Convergence',
      contenu: 'Né dans l\'Isthme, il avait été approché par la Convergence à 24 ans — son élément Normal et ses aptitudes relationnelles en faisaient un recruteur idéal. Il avait accepté l\'offre.',
    },
    arrivee: {
      titre: 'Les enfants de Virex',
      contenu: 'Sa première mission avait été d\'approcher des familles dont les enfants étaient Élus. Il avait appris à présenter la Convergence dans les termes qui fonctionnaient pour chaque famille. Ça avait fonctionné.',
    },
    premier_conflit: {
      titre: 'La famille qui a refusé',
      contenu: 'Une famille avait demandé des détails sur ce qui arrivait aux enfants après leur "mise en sécurité". Il n\'avait pas eu de réponse satisfaisante. La famille avait refusé. Il avait eu une conversation avec Vashmael sur la façon de gérer ces questions.',
    },
    revelation: {
      titre: 'Ce qu\'il ne demande pas',
      contenu: 'Il avait compris qu\'il fonctionnait mieux en ne demandant pas ce que la Convergence faisait avec les enfants qu\'il lui amenait. Il avait pris cette décision consciemment. Il vivait avec.',
    },
    etat_actuel: {
      titre: 'Le recruteur',
      contenu: 'Il approche des familles. Il présente la Convergence. Il ne demande pas ce qui suit.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kaelyth_famille',
      titre: 'La famille qui pose les bonnes questions',
      description: 'Kaelyth approche des familles pour la Convergence. Si une famille — comme Thysna (184) — lui pose des questions précises sur ce qui arrive aux enfants après leur "mise en sécurité", et si Lysael (63) est présent ou informé de l\'approche, la confrontation entre les deux propositions (Convergence vs protection Dissident) exposera ce que Kaelyth a choisi de ne pas savoir.',
      personnages_impliques: [63, 234],
      declencheur: 'Une famille refusant et avertissant un contact Dissident de l\'approche de Kaelyth',
      consequence: 'Kaelyth confronté à la réalité de ce qu\'il recrute — et une famille informée sur les deux options disponibles',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Recruteur de la Convergence approchant les familles des enfants de Virex. Présente la Convergence comme protection. Omet ce que cette protection implique. A choisi de ne pas le savoir.',

  relations: [
    { id: 63, nom: 'Lysael', type: 'contact', note: 'Cherche aussi les enfants de Virex — pour les protéger plutôt que les recruter pour le Protocole.' },
    { id: 234, nom: 'Vashmael', type: 'hierarchie', note: 'Superviseur Convergence lui assignant les familles à approcher.' },
  ],

  combat: {
    sorts: [
      'Frappe neutre (Normal) — attaque directe — défense personnelle',
      'Désorientation verbale (Normal) — perturbation psychologique — avantage momentané',
    ],
  },

  image_prompts: [
    {
      id: 'kaelyth_approche',
      description: 'Kaelyth dans le quartier d\'une famille à Virex — un Homme-Lien de 31 ans qui parle à un père inquiet devant sa porte. Son expression est bienveillante. Il offre une protection. Il ne dit pas exactement quel type. Le père écoute parce qu\'il est effrayé pour son enfant.',
      style: 'réaliste Homme-Lien recruteur Convergence, Isthme, approche bienveillante, familles vulnérables, omissions calculées',
    },
  ],

  lore_long: `Kaelyth recrute des familles d'enfants de Virex pour la Convergence dans l'Isthme. Il présente la Convergence comme une protection contre l'Empire.

Il omet ce que la Convergence fait avec les enfants — le Protocole d'Identification. Il a choisi de ne pas poser la question.

Sa bienveillance est réelle dans la forme. Sa fonction est instrumentale. La distinction commence à s'effacer avec le temps.`,
};

export default kaelyth;
