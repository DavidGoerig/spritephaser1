import type { PersonnageLoreComplet } from '../../../lore-types';

const kasyr: PersonnageLoreComplet = {
  id: 192,
  nom: 'Kasyr',
  element: 'Psy',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Homme-Lien de 52 ans, voyante — corpulence modérée, présence qui met à la fois à l\'aise et légèrement mal à l\'aise.',
    peau: 'Ton méditerranéen avec une qualité de quelqu\'un qui voit des choses que les autres ne voient pas encore.',
    yeux: 'Violets avec une qualité qui donne l\'impression d\'être regardé de l\'intérieur.',
    vetements: 'Tenue de voyante itinérante — distincte sans être extravagante. Elle ne cache pas ce qu\'elle est.',
    signes_particuliers: 'Ses prédictions sur les enfants de Virex se sont avérées exactes 4 fois. Elle ne comprend pas entièrement son propre mécanisme de prédiction — elle voit des patterns élémentaires, pas des événements futurs.',
  },

  psychologie: {
    dominante: 'Voyante itinérante dans l\'Isthme dont les prédictions sur les enfants de Virex se sont avérées exactes 4 fois. Elle n\'est pas certaine d\'avoir un accès au futur — elle pense qu\'elle lit des patterns élémentaires présents qui impliquent des probabilités futures. La distinction lui importe même si ses clients s\'en foutent.',
    mecanisme_de_defense: 'L\'honnêteté sur ses limites. Elle dit à ses clients que ses prédictions sont des probabilités, pas des certitudes. Cette précision ne réduit pas leur confiance — elle l\'augmente souvent, paradoxalement.',
    contradiction_interne: 'Ses prédictions exactes ont créé une réputation qui dépasse ses capacités réelles. Les personnes viennent pour des certitudes. Elle offre des probabilités. Elle a appris à formuler les probabilités de façon à ce que les personnes entendent ce qu\'elles veulent entendre tout en restant honnête.',
    rapport_aux_autres: 'Thyven (62) est dans son réseau — l\'administration impériale locale qui suit ses activités avec suspicion. Thyrekavel (275) est dans son réseau — un instructeur avancé qui a trouvé une utilité dans ses prédictions pour identifier des Élus sans les approcher directement.',
    vision_du_monde: 'Le futur n\'est pas fixé. Les patterns présents suggèrent des directions probables. Lire ces patterns est une compétence, pas un don mystique. La distinction est importante pour elle.',
  },

  histoire: {
    enfance: {
      titre: 'L\'élément Psy',
      contenu: 'Son élément Psy s\'était manifesté comme une lecture des patterns élémentaires — elle percevait les concentrations et les flux d\'éléments dans son environnement. À 20 ans, elle avait compris que cette lecture pouvait être traduite en probabilités futures.',
    },
    arrivee: {
      titre: 'Les prédictions',
      contenu: 'Elle avait commencé à faire des prédictions sur les Élus à 35 ans — d\'abord pour des consultants privés, puis avec une réputation croissante. Les 4 prédictions exactes sur les enfants de Virex avaient établi sa crédibilité dans l\'Isthme.',
    },
    premier_conflit: {
      titre: 'La prédiction fausse',
      contenu: 'Elle avait fait une prédiction qui s\'était avérée incorrecte. Elle avait expliqué à son client que les patterns avaient changé entre la prédiction et l\'événement. Le client n\'avait pas compris la distinction. Elle avait remboursé.',
    },
    revelation: {
      titre: 'Les patterns et les enfants',
      contenu: 'Elle avait commencé à identifier dans les patterns élémentaires de l\'Isthme des signatures spécifiques qui correspondaient aux enfants de Virex. Ces signatures étaient plus fortes que les patterns individuels habituels. Quelque chose dans ces enfants était différent.',
    },
    etat_actuel: {
      titre: 'La voyante',
      contenu: 'Elle lit. Elle prédit. Ses prédictions sur les enfants de Virex continuent à s\'avérer.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kasyr_prediction',
      titre: 'La 5ème prédiction',
      description: 'Kasyr a prédit correctement 4 événements liés aux enfants de Virex. Si elle fait une 5ème prédiction — à la demande de Thyrekavel (275) ou d\'un Dissident — et qu\'elle se révèle correcte, sa réputation et son accès aux patterns élémentaires des enfants de Virex deviendront une ressource que plusieurs factions voudront contrôler.',
      personnages_impliques: [62, 275],
      declencheur: 'Kasyr faisant une prédiction publique sur un enfant de Virex qui se révèle exacte',
      consequence: 'Kasyr identifiée comme source d\'information sur les enfants de Virex — et ciblée par plusieurs factions simultanément',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Voyante itinérante dans l\'Isthme. Prédictions sur les enfants de Virex exactes 4 fois. Lit des patterns élémentaires présents, pas un futur fixé.',

  relations: [
    { id: 62, nom: 'Thyven', type: 'contact', note: 'Administration impériale qui suit ses activités avec suspicion.' },
    { id: 275, nom: 'Thyrekavel', type: 'contact', note: 'Instructeur trouvant une utilité dans ses prédictions pour identifier des Élus à distance.' },
  ],

  combat: {
    sorts: [
      'Lecture de patterns (Psy) — analyse de flux élémentaire — avantage informationnel',
      'Brouillage psychique (Psy) — perturbation de perception — défense',
    ],
  },

  image_prompts: [
    {
      id: 'kasyr_prediction',
      description: 'Kasyr consultant avec quelqu\'un dans l\'Isthme — une Homme-Lien de 52 ans dont l\'élément Psy est légèrement visible comme une lueur autour de ses mains. Elle regarde dans un espace qui n\'est pas physique. Son client attend. Elle voit des patterns, pas des certitudes. Elle sait comment formuler les probabilités pour qu\'elles soient utiles.',
      style: 'réaliste Homme-Lien voyante Psy itinérante, Isthme, patterns élémentaires, prédictions précises, enfants de Virex',
    },
  ],

  lore_long: `Kasyr est voyante itinérante dans l'Isthme. Elle lit des patterns élémentaires présents et les traduit en probabilités futures.

Ses prédictions sur les enfants de Virex se sont avérées exactes 4 fois. Elle ne comprend pas entièrement son propre mécanisme — les signatures de ces enfants sont différentes des patterns habituels.

Sa réputation dépasse ses certitudes. Elle est honnête sur ses limites. Les personnes entendent ce qu'elles veulent entendre de toute façon.`,
};

export default kasyr;
