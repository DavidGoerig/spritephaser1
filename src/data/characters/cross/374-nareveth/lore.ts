import type { PersonnageLoreComplet } from '../../../lore-types';

const nareveth: PersonnageLoreComplet = {
  id: 374,
  nom: 'Nareveth',
  element: 'Gravité',
  element2: 'Electrique',
  espece: 'Néréides',
  region: 'Déserts',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Néréide combattante — une forme adaptée aux combats dans des environnements gravitationnels instables. Plus solide que la moyenne des Néréides, avec des réflexes de combat terrestre développés malgré les origines aquatiques.',
    peau: 'Bleu-vert Néréide avec des cicatrices en réseau aux bras — marques de combat contre des régulateurs impériaux équipés d\'armes à décharge. Elle a été touchée plusieurs fois. Elle continue.',
    yeux: 'Bleu avec une intensité de combat — elle évalue les positions et les vecteurs de force avant les personnes.',
    vetements: 'Tenue de combat adaptée aux déplacements rapides dans des zones à gravité instable. Elle porte peu — la mobilité prime.',
    signes_particuliers: 'Elle parle peu avant un combat. Elle parle encore moins après. Ce qu\'elle a à dire passe par les actions.',
  },

  psychologie: {
    dominante: 'Combat anti-impérial utilisant les champs gravitationnels pour dérouter les régulateurs impériaux — déviation de trajectoires, altération des perceptions de distance, création de zones où les équipements standard ne fonctionnent pas comme prévu.',
    mecanisme_de_defense: 'L\'action comme réponse à la paralysie. Elle était dans la Fosse quand les premières extractions impériales de Narev (21) ont changé. Elle a décidé d\'agir plutôt que de documenter.',
    contradiction_interne: 'Narev (21) est son point de contact — il coordonne certaines des opérations Dissidentes dans les Déserts. Mais Narev connaît les cycles de la Fosse et ne partage pas toujours ce qu\'il sait. Elle a confiance en ses opérations mais pas en sa transparence.',
    rapport_aux_autres: 'Narev (21) est son contact Dissident et une figure de référence dans les Déserts — sa relation avec lui est de confiance opérationnelle et de réserve informationnelle. Velrynth (278) est son adversaire principal — officier impérial chargé de la régulation dans les zones proches de la Fosse.',
    vision_du_monde: 'L\'Empire extrait des ressources des Déserts et des zones de la Fosse sans compensation pour les populations. Les régulateurs empêchent la résistance à cette extraction. Elle retire les régulateurs de l\'équation.',
  },

  histoire: {
    enfance: {
      titre: 'Les eaux de la Fosse',
      contenu: 'À 14 ans, elle avait passé du temps dans les courants sous-marins qui convergeaient vers les zones de la Fosse — une zone que peu de Néréides exploraient. Les anomalies gravitationnelles lui avaient semblé fascinantes, pas dangereuses. Elle avait appris à naviguer dans ces anomalies.',
    },
    arrivee: {
      titre: 'Le premier régulateur',
      contenu: 'À 22 ans, Velrynth (278) avait mené une opération de régulation dans une zone des Déserts proches de la Fosse — des Élus extraits, des Chthoniens déplacés. Elle avait été présente. Elle avait utilisé ses capacités gravitationnelles pour dérouter l\'unité de Velrynth, permettant à 4 personnes d\'échapper. Elle était devenue une cible.',
    },
    premier_conflit: {
      titre: 'La cible de Velrynth',
      contenu: 'À 25 ans, Velrynth avait mis en place une opération spécifiquement dirigée contre elle — un piège dans une zone de la Fosse qu\'il savait qu\'elle fréquentait. Elle avait senti l\'anomalie gravitationnelle créée par les équipements de l\'unité d\'embuscade. Elle avait évité le piège et utilisé les anomalies de la Fosse contre l\'unité.',
    },
    revelation: {
      titre: 'Les connaissances de Narev',
      contenu: 'Narev (21) lui avait fourni des informations sur les cycles gravitationnels de la Fosse — des informations qui lui permettaient d\'utiliser les anomalies du 4ème cycle comme outil de combat. Elle avait demandé comment Narev savait. Il avait dit "mesures". Elle ne croyait pas que c\'était toute la réponse.',
    },
    etat_actuel: {
      titre: 'Le pic du 4ème cycle',
      contenu: 'Les anomalies gravitationnelles du pic du 4ème cycle rendent les zones proches de la Fosse particulièrement avantageuses pour elle — ses capacités interagissent avec les anomalies ambiantes pour produire des effets multiplicateurs. Velrynth (278) évite maintenant ces zones. Elle l\'y cherche.',
    },
  },

  evenements_narratifs: [
    {
      id: 'nareveth_pic_cycle',
      titre: 'L\'avantage du pic',
      description: 'Le pic du 4ème cycle gravitationnel docuementé par Drethvael (370) crée des zones proches de la Fosse où ses capacités sont multipliées par les anomalies ambiantes. Velrynth (278) a modifié ses patrouilles pour éviter ces zones. Elle a modifié ses opérations pour se tenir dans ces zones.',
      personnages_impliques: [21, 278],
      declencheur: 'Reconnaissance que le pic du 4ème cycle est un avantage tactique dans les zones de la Fosse',
      consequence: 'Reconfiguration des opérations pour exploiter les anomalies ambiantes — Velrynth évite les zones',
    },
    {
      id: 'nareveth_narev_opacite',
      titre: 'Ce que Narev ne dit pas',
      description: 'Narev (21) connaît les cycles de la Fosse avec une précision qui dépasse ce que les mesures publiques expliquent. Il lui fournit les informations utiles sans expliquer leur source. Elle fait confiance aux informations. Elle ne fait pas confiance à l\'explication absente.',
      personnages_impliques: [21, 278],
      declencheur: 'Décalage entre la précision des informations de Narev et ses explications de source',
      consequence: 'Confiance opérationnelle partielle — réserve informationnelle maintenue sur ce que Narev sait vraiment',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Combattante Dissidente Néréide utilisant les anomalies gravitationnelles de la Fosse dans ses opérations anti-impériales. Le pic du 4ème cycle est un avantage tactique. Velrynth (278) évite maintenant les zones de la Fosse.',

  relations: [
    { id: 21, nom: 'Narev', type: 'allié', note: 'Contact Dissident et référence dans les Déserts. Confiance opérationnelle, réserve sur ses informations non expliquées.' },
    { id: 278, nom: 'Velrynth', type: 'adversaire', note: 'Officier impérial de régulation. La cible depuis 3 ans. Maintenant évite les zones de la Fosse.' },
  ],

  combat: {
    sorts: [
      'Déviation gravitationnelle (Gravité) — déviation de la trajectoire d\'une cible ou d\'un projectile — désorientation de combat',
      'Décharge de choc (Electrique) — décharge électrique à haute tension sur une cible immobilisée par un champ gravitationnel — combinaison dévastatrice',
      'Zone d\'anomalie (Gravité) — création d\'une zone de gravité déviante — neutralisation des équipements standard adverses',
    ],
  },

  image_prompts: [
    {
      id: 'nareveth_combat',
      description: 'Nareveth dans une zone proche de la Fosse Interdite — autour d\'elle, la gravité est visiblement déviante, des objets en suspension légère. Elle est en posture de combat, une décharge électrique entre ses mains. Des régulateurs impériaux en approche sont désorientés par la zone de gravité.',
      style: 'réaliste combattante Néréide Dissidente, zone gravitationnelle de la Fosse, décharge électrique, régulateurs désorientés',
    },
  ],

  lore_long: `Nareveth combat les unités impériales de régulation dans les Déserts en utilisant les anomalies gravitationnelles de la Fosse Interdite. Le pic du 4ème cycle documenté par Drethvael (370) amplifie ses capacités dans ces zones.

Velrynth (278) évite maintenant les zones de la Fosse. Elle l'y cherche.

Narev (21) lui fournit des informations précises sur les cycles sans en expliquer la source. Elle fait confiance aux informations. Pas à l'explication absente.`,
};

export default nareveth;
