import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrvnorm: PersonnageLoreComplet = {
  id: 380,
  nom: 'Thyrvnorm',
  element: 'Normal',
  element2: 'Feu',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Itinérant — une corpulence de route, ni athlétique ni sédentaire. Quelqu\'un qui marche beaucoup et mange irrégulièrement selon les opportunités.',
    peau: 'Brun Homme-Lien avec des traces de multiples régions — des marques de soleil de Varkhôl, des marques de froid de l\'Isthme hivernal. Il a voyagé.',
    yeux: 'Marron avec une chaleur immédiate — il met les gens à l\'aise rapidement. Une qualité qui lui sert dans ses ambassades improvisées.',
    vetements: 'Tenue de voyage avec des éléments de plusieurs régions mélangés — une façon de paraître familier partout sans appartenir nulle part.',
    signes_particuliers: 'Il présente les deux parties d\'une information — ce qui est vrai et ce qui est arrangé. Parfois il est difficile de savoir lequel est lequel.',
  },

  psychologie: {
    dominante: 'Médiation informelle entre l\'Isthme et Varkhôl — il voyage entre les deux régions, transmet des informations, facilite des contacts entre personnes qui ne se parlent pas directement, et présente sa fonction comme de l\'ambassade alors qu\'elle est plus exactement du courtage d\'information.',
    mecanisme_de_defense: 'L\'utilité comme position. Tant qu\'il est utile aux deux côtés, il peut voyager librement et vivre des commissions sur ce qu\'il facilite. Il ne choisit pas de camp — il facilite les échanges entre les camps.',
    contradiction_interne: 'Sa présentation de lui-même comme "ambassadeur" est inexacte — il n\'a été mandaté par personne. Il facilite des échanges pour son propre bénéfice. L\'utilité qu\'il apporte est réelle. La désignation qu\'il se donne ne l\'est pas.',
    rapport_aux_autres: 'Sarevyn (176) est un contact dans l\'Isthme qui utilise ses facilitations pour des échanges commerciaux — et qui lui fait confiance sur les informations qu\'il porte sans toujours les vérifier. Thyrath (187) est un contact à Varkhôl dont les besoins en informations sur l\'Isthme alimentent ses commissions.',
    vision_du_monde: 'Les personnes qui ne se connaissent pas ont besoin de quelqu\'un pour faciliter la connexion. Il est ce quelqu\'un. La commission est juste — il prend un risque sur chaque transit.',
  },

  histoire: {
    enfance: {
      titre: 'Les marchands de passage',
      contenu: 'À 14 ans, des marchands transitant entre l\'Isthme et Varkhôl s\'arrêtaient dans sa ville. Il les aidait à trouver des contacts locaux en échange d\'histoires sur les autres régions. Il avait compris que l\'information sur l\'autre avait de la valeur pour chaque côté.',
    },
    arrivee: {
      titre: 'Le premier transit',
      contenu: 'À 21 ans, il avait transmis un message d\'un commerçant de l\'Isthme à un artisan de Varkhôl — un contact qu\'il avait facilité en échange d\'une commission sur la transaction résultante. La transaction avait eu lieu. La commission était raisonnable. Il avait compris le modèle.',
    },
    premier_conflit: {
      titre: 'L\'information arrangée',
      contenu: 'À 27 ans, il avait transmis une information sur les conditions commerciales de l\'Isthme à Thyrath (187) de Varkhôl — une information partiellement arrangée pour favoriser la transaction qu\'il facilitait. Thyrath avait découvert l\'arrangement. Thyrath l\'utilisait toujours — les informations partiellement exactes restaient utiles.',
    },
    revelation: {
      titre: 'La confiance de Sarevyn',
      contenu: 'Sarevyn (176) lui faisait confiance sans vérifier ses informations. Cette confiance était sa ressource la plus précieuse — et sa responsabilité la plus inconfortable. Une information qu\'il arrangerait de trop dans cette direction aurait des conséquences réelles pour Sarevyn.',
    },
    etat_actuel: {
      titre: 'Le transit actuel',
      contenu: 'Il transporte actuellement des informations commerciales entre l\'Isthme et Varkhôl — des informations qui incluent des données sur les zones de saturation de l\'Isthme qui pourraient intéresser des parties que ni Sarevyn (176) ni Thyrath (187) n\'ont mandatées. Il n\'a pas encore décidé à qui il allait aussi les vendre.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrvnorm_donnees_saturation',
      titre: 'L\'information non mandatée',
      description: 'Les informations sur les zones de saturation de l\'Isthme qu\'il transporte ont une valeur au-delà de son mandat commercial de Sarevyn (176) et Thyrath (187). La Convergence ou l\'Empire paierait pour ces données. Les utiliser sans le mandat de Sarevyn serait une violation de la confiance — ce qui réduirait sa ressource la plus précieuse.',
      personnages_impliques: [176, 187],
      declencheur: 'Possession d\'informations à valeur multiple non mandatées',
      consequence: 'Décision sur la revente des informations — confiance de Sarevyn vs gain supplémentaire',
    },
    {
      id: 'thyrvnorm_utilite_reelle',
      titre: 'L\'ambassade sans mandat',
      description: 'Sa présentation comme ambassadeur est inexacte. Mais les facilitations qu\'il effectue créent des connexions réelles et des échanges qui ne se feraient pas sans lui. La question est de savoir si l\'utilité réelle justifie la désignation fausse — ou si la désignation fausse finira par compromettre l\'utilité réelle.',
      personnages_impliques: [176, 187],
      declencheur: 'Tension entre la désignation d\'ambassadeur et la fonction réelle de courtier',
      consequence: 'Crédibilité comme ambassadeur dépendante de ne pas abuser de la confiance existante',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Itinérant auto-proclamé ambassadeur entre Isthme et Varkhôl. Transporte des informations commerciales incluant des données sur les zones de saturation. Décision sur l\'usage non mandaté de ces données en suspens.',

  relations: [
    { id: 176, nom: 'Sarevyn', type: 'allié', note: 'Contact Isthme qui lui fait confiance. Cette confiance est sa ressource la plus précieuse et sa responsabilité la plus inconfortable.' },
    { id: 187, nom: 'Thyrath', type: 'allié', note: 'Contact Varkhôl qui utilise ses informations partiellement exactes. A découvert un arrangement — continue quand même.' },
  ],

  combat: {
    sorts: [
      'Distraction de terrain (Normal) — création d\'une diversion sociale ou physique — espace pour fuir ou agir',
      'Flambée de couverture (Feu) — émission de chaleur intense dans une zone — désorientation et écran',
      'Transit accéléré (Normal + Feu) — combinaison de vitesse et de chaleur comme propulsion — déplacement rapide en ligne directe',
    ],
  },

  image_prompts: [
    {
      id: 'thyrvnorm_transit',
      description: 'Thyrvnorm sur une route entre deux régions — sa tenue mélange des éléments de l\'Isthme et de Varkhôl. Il marche d\'un pas rapide, un sac de transit sur l\'épaule. Son expression est de calcul détendu — il évalue les options disponibles pendant qu\'il marche.',
      style: 'réaliste itinérant Homme-Lien, route entre régions, tenue mixte, calcul détendu',
    },
  ],

  lore_long: `Thyrvnorm se présente comme ambassadeur itinérant entre l'Isthme et Varkhôl. Il est plus exactement un courtier d'information qui facilite des échanges en prélevant des commissions. Il est utile — mais pas toujours fiable.

Sarevyn (176) lui fait confiance sans vérifier. Cette confiance est sa ressource la plus précieuse.

Il transporte des données sur les zones de saturation de l'Isthme dont la valeur dépasse son mandat commercial actuel. Il n'a pas encore décidé quoi en faire.`,
};

export default thyrvnorm;
