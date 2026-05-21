import type { PersonnageLoreComplet } from '../../../lore-types';

const velthkaelt: PersonnageLoreComplet = {
  id: 385,
  nom: 'Velthkaelt',
  element: 'Vent',
  element2: 'Electrique',
  espece: 'Aérides',
  region: 'Isthme',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Aéride pilote — légère avec une capacité de manœuvre dans l\'air que son équipement militaire amplifie. Elle n\'est pas particulièrement imposante au sol — dans l\'air, elle est une autre chose.',
    peau: 'Pâle Aéride avec des marques d\'induction électrique à faible intensité aux mains — des expositions répétées aux champs électriques des zones de saturation qu\'elle survole.',
    yeux: 'Bleu clair avec une habitude de navigation aérienne — elle voit les courants, les altitudes, les zones de visibilité et de couverture.',
    vetements: 'Équipement militaire impérial adapté au vol Aéride — plus léger que le standard impérial terrestre, avec des composants de navigation aérienne. Les insignes de grade impérial sont visibles.',
    signes_particuliers: 'Elle parle des zones en termes d\'altitude et de visibilité — une habitude de pilote qui colore toute sa façon de décrire l\'espace.',
  },

  psychologie: {
    dominante: 'Surveillance aérienne des zones autour de Virex pour le compte impérial — patrouilles régulières, identification des déplacements inhabituels, transmission aux unités terrestres de Thyrkael (351).',
    mecanisme_de_defense: 'La distance comme objectivité. De l\'air, les situations sont des patterns de déplacement. Les personnes sont des points en mouvement. Cette distance géographique facilite une distance émotionnelle.',
    contradiction_interne: 'Ses rapports de surveillance ont permis l\'identification de plusieurs routes de déplacement Dissidentes — routes qui ont ensuite été utilisées pour des captures. Elle ne voit pas les captures. Elle voit les patterns avant les captures. La chaîne d\'événements entre ses rapports et leurs conséquences reste hors de sa vision.',
    rapport_aux_autres: 'Avel (64) est son supérieur pour les missions de surveillance aérienne — il reçoit ses rapports et décide des transmissions aux unités terrestres. Velrynth (278) est un contact impérial qui lui demande parfois des informations spécifiques sur des zones de déplacement dans les Déserts.',
    vision_du_monde: 'La surveillance aérienne donne une image des déplacements que la surveillance terrestre ne peut pas avoir. Cette image est utile pour la sécurité. Elle fournit l\'image.',
  },

  histoire: {
    enfance: {
      titre: 'Le vol naturel',
      contenu: 'À 10 ans, comme tous les Aérides, elle avait développé ses capacités de vol Vent. Mais son contrôle était exceptionnel dès le début — une précision de manœuvre que ses parents attribuaient à une intuition naturelle de l\'air.',
    },
    arrivee: {
      titre: 'Le recrutement impérial',
      contenu: 'À 22 ans, Avel (64) l\'avait recrutée pour les unités de surveillance aérienne impériales. Sa capacité Electrique secondaire lui permettait de détecter les signatures électriques depuis l\'air — une compétence rare pour la surveillance des zones de saturation.',
    },
    premier_conflit: {
      titre: 'Le déplacement identifié',
      contenu: 'À 27 ans, elle avait identifié un pattern de déplacement récurrent dans une zone de l\'Isthme — un pattern qui correspondait à un réseau de transit. Elle avait transmis à Avel. Ce qu\'elle avait vu depuis l\'air avait conduit à une opération terrestre dont elle n\'avait pas su les détails.',
    },
    revelation: {
      titre: 'La vitesse de Thyrvkaelt',
      contenu: 'Elle avait observé des déplacements à une vitesse qui n\'était pas humaine standard — trop rapides pour ses instruments habituels. Elle avait dû ajuster ses paramètres de détection pour identifier ces vitesses. Thyrvkaelt (384), si elle le savait, serait dans ses rapports.',
    },
    etat_actuel: {
      titre: 'Les patrouilles de Virex',
      contenu: 'Elle effectue 4 patrouilles par jour autour de Virex. Ses rapports alimentent les analyses d\'Avel (64) et les opérations de Thyrkael (351). Elle a identifié un éclaireur à haute vitesse dans ses 3 dernières patrouilles — le même individu, des routes différentes. Elle prépare un rapport.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velthkaelt_eclaireur',
      titre: 'Le pattern de l\'éclaireur',
      description: 'Elle a identifié Thyrvkaelt (384) dans ses patrouilles — un éclaireur à haute vitesse avec des routes variables mais une fréquence constante. Son rapport va identifier ce pattern. Si Avel (64) transmet à Thyrkael (351), l\'éclaireur Dissident sera ciblé dans les prochaines 48 heures.',
      personnages_impliques: [64, 278],
      declencheur: 'Identification du pattern de déplacement de l\'éclaireur Dissident sur 3 patrouilles successives',
      consequence: 'Rapport transmis à Avel — ciblage potentiel de l\'éclaireur dans les 48 heures',
    },
    {
      id: 'velthkaelt_saturation',
      titre: 'Les zones de saturation',
      description: 'Les zones de saturation électrique de l\'Isthme interfèrent parfois avec ses instruments — des angles morts de surveillance dans les zones les plus denses. Ces angles morts sont exploités par les Dissidents pour des déplacements dans les zones où sa surveillance est aveugle. Elle a demandé à Avel des instruments adaptés.',
      personnages_impliques: [64, 351],
      declencheur: 'Angles morts de surveillance dans les zones de saturation électrique élevée',
      consequence: 'Zones exploitées par les Dissidents — demande d\'instruments adaptés auprès d\'Avel en attente',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Pilote militaire impériale Aéride patrouillant les zones aériennes de Virex. 4 patrouilles par jour. A identifié le pattern de Thyrvkaelt (384) sur 3 patrouilles — rapport en préparation pour transmission à Avel (64).',

  relations: [
    { id: 64, nom: 'Avel', type: 'supérieur', note: 'Reçoit les rapports et décide des transmissions aux unités terrestres.' },
    { id: 278, nom: 'Velrynth', type: 'allié', note: 'Demande des informations spécifiques sur des zones de déplacement dans les Déserts.' },
  ],

  combat: {
    sorts: [
      'Rafale tactique (Vent) — projection d\'un courant d\'air concentré — déviation de trajectoire ou désorientation',
      'Décharge aérienne (Electrique) — décharge électrique depuis l\'air — impact à distance sur une cible au sol',
      'Manœuvre d\'évitement (Vent + Electrique) — combinaison de vitesse aérienne et de décharge défensive — sortie d\'une position compromise',
    ],
  },

  image_prompts: [
    {
      id: 'velthkaelt_patrouille',
      description: 'Velthkaelt en vol de patrouille au-dessus de Virex — ses ailes Aéride déployées, ses instruments de surveillance actifs. Elle regarde vers le bas avec une concentration de navigation. En dessous d\'elle, les toits et les rues de Virex forment un pattern qu\'elle lit comme une carte.',
      style: 'réaliste pilote Aéride impériale, vol de patrouille au-dessus de Virex, instruments de surveillance, lecture de zone',
    },
  ],

  lore_long: `Velthkaelt patrouille les zones aériennes de Virex pour l'Empire. 4 patrouilles par jour. Ses rapports alimentent les opérations de Thyrkael (351).

Elle a identifié le pattern de déplacement de Thyrvkaelt (384) sur 3 patrouilles successives — routes variables, fréquence constante. Rapport en préparation. Si transmis à Avel (64) dans les 48 heures, l'éclaireur Dissident sera ciblé.

Les zones de saturation électrique créent des angles morts de surveillance que les Dissidents exploitent.`,
};

export default velthkaelt;
