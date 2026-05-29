import type { PersonnageLoreComplet } from '../../../lore-types';

const vasketh: PersonnageLoreComplet = {
  id: 195,
  nom: 'Vasketh',
  element: 'Feu',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Homme-Lien de 44 ans, ancienne escrimeure reconvertie — corpulence de combattante vétérante, efficacité de mouvement d\'une personne qui a arrêté de faire des gestes inutiles.',
    peau: 'Ton chaud avec des marques de compétition d\'escrime — cicatrices légères sur les avant-bras et les mains.',
    yeux: 'Orangés avec une qualité de quelqu\'un qui évalue constamment les menaces dans son environnement immédiat.',
    vetements: 'Tenue pratique de protection personnelle — rien d\'officiel, efficace pour le mouvement et la protection.',
    signes_particuliers: 'Elle protège les enfants de Virex qui fuient — elle les guide depuis leur domicile jusqu\'aux réseaux d\'extraction. Elle a développé des routes de fuite que personne d\'autre ne connaît aussi bien qu\'elle.',
  },

  psychologie: {
    dominante: 'Ancienne escrimeure professionnelle reconvertie en protectrice des enfants de Virex en fuite. Sa carrière sportive lui avait donné des compétences — la vitesse, l\'évaluation rapide des adversaires, la capacité à naviguer dans des espaces restreints. Elle les utilise maintenant pour protéger des personnes, pas pour des compétitions.',
    mecanisme_de_defense: 'La compétence comme réponse à la peur. Elle ne peut pas éliminer les risques. Elle peut les réduire avec une compétence maximale. Chaque préparation est une réduction de risque.',
    contradiction_interne: 'Elle protège des enfants en les guidant vers des réseaux d\'extraction — mais les réseaux d\'extraction ne sont pas tous équivalents. Elle guide des enfants vers Sarevyn (176) et d\'autres contacts Dissidents — mais elle n\'a pas une visibilité complète sur où ils vont ensuite.',
    rapport_aux_autres: 'Thyskara (262) est dans son réseau — un contact qui gère la partie suivante des extractions. Sarevorn (261) est dans son réseau — quelqu\'un qui coordonne les extractions à une échelle plus large.',
    vision_du_monde: 'Les enfants n\'ont pas choisi d\'être Élus. Ils n\'ont pas choisi que ça en fasse des cibles. Son travail est de leur donner une chance de choisir ensuite.',
  },

  histoire: {
    enfance: {
      titre: 'L\'escrime',
      contenu: 'Carrière d\'escrimeure compétitive depuis 15 ans. Elle avait remporté plusieurs tournois régionaux dans l\'Isthme avant que la politique de l\'Empire sur les Élus commence à affecter les compétitions — des Élus exclus des tournois, des réseaux de compétition perturbés.',
    },
    arrivee: {
      titre: 'La reconversion',
      contenu: 'Elle avait arrêté la compétition à 38 ans — non par choix sportif, mais parce que la situation dans l\'Isthme avait rendu les compétitions moins prioritaires. Les Dissidentes lui avaient proposé un rôle qui utilisait ses compétences. Elle avait accepté.',
    },
    premier_conflit: {
      titre: 'La première extraction',
      contenu: 'Sa première extraction avait impliqué un enfant de 12 ans dont les parents avaient été arrêtés. Elle avait guidé l\'enfant sur 8 kilomètres de nuit. Ils s\'étaient séparés à un point de transfert. Elle ne savait pas ce qui était arrivé ensuite.',
    },
    revelation: {
      titre: 'La visibilité partielle',
      contenu: 'Elle avait compris que son travail était un segment d\'une chaîne dont elle ne voyait pas tous les maillons. Ce qu\'elle faisait était réel et utile. Ce qu\'il advenait des enfants après son segment était une autre question qu\'elle avait choisi de ne pas poser de façon systématique.',
    },
    etat_actuel: {
      titre: 'La protectrice',
      contenu: 'Elle guide. Les enfants fuient. Elle prépare la prochaine route.',
    },
  },

  evenements_narratifs: [
    {
      id: 'vasketh_extraction',
      titre: 'La route compromise',
      description: 'Vasketh connaît des routes de fuite que personne d\'autre ne connaît aussi bien. Si une de ces routes est compromise — par un informateur, par une patrouille impériale, par une extraction précédente trop visible — une extraction en cours pourrait échouer avec un enfant exposé en pleine fuite.',
      personnages_impliques: [262, 261],
      declencheur: 'Une route de fuite compromise lors d\'une extraction active',
      consequence: 'Vasketh improvisant un trajet alternatif pour un enfant en fuite — avec moins de préparation et plus de risques',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Protectrice des enfants de Virex en fuite. Routes de fuite développées sur 6 ans. Visibilité partielle sur ce qui arrive aux enfants après son segment d\'extraction.',

  relations: [
    { id: 262, nom: 'Thyskara', type: 'contact', note: 'Gère la partie suivante des extractions après le guidage initial.' },
    { id: 261, nom: 'Sarevorn', type: 'contact', note: 'Coordonne les extractions à une échelle plus large.' },
  ],

  combat: {
    sorts: [
      'Frappe d\'escrimeure (Feu) — attaque rapide et précise — neutralisation minimale',
      'Bouclier de chaleur (Feu) — protection thermique — défense de groupe en mouvement',
    ],
  },

  image_prompts: [
    {
      id: 'vasketh_route',
      description: 'Vasketh guidant un enfant de 10 ans dans une ruelle sombre de Virex — une Homme-Lien de 44 ans dont le corps est orienté vers les sorties potentielles. Elle tient la main de l\'enfant et se déplace vite sans paraître pressée. Son élément Feu est très légèrement visible — juste assez pour voir dans l\'obscurité.',
      style: 'réaliste Homme-Lien protectrice, Virex, extraction d\'enfant Élu, routes de fuite, nuit, compétence d\'ancienne combattante',
    },
  ],

  lore_long: `Vasketh protège les enfants de Virex qui fuient. Elle les guide depuis leur domicile jusqu'aux points de transfert des réseaux d'extraction Dissidents.

Ancienne escrimeure, elle utilise ses compétences de mouvement, d'évaluation des espaces et de réaction rapide pour ces extractions.

Elle ne sait pas toujours ce qui arrive aux enfants après son segment. Elle a choisi de ne pas poser la question de façon systématique.`,
};

export default vasketh;
