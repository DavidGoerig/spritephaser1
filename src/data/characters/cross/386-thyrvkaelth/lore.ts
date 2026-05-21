import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrvkaelth: PersonnageLoreComplet = {
  id: 386,
  nom: 'Thyrvkaelth',
  element: 'Vent',
  element2: 'Eau',
  espece: 'Aérides',
  region: 'Thalassyr',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Aéride navigatrice — une forme adaptée aux deux milieux, aérien et maritime. Ses ailes sont légèrement plus robustes que la moyenne des Aérides — conçues pour les vents marins et les tempêtes côtières.',
    peau: 'Pâle Aéride avec des reflets légèrement humides — une présence en milieu maritime qui laisse des traces dans la texture de la peau au-delà de ce que le milieu aérien produit seul.',
    yeux: 'Bleu-vert profond — les deux éléments visibles dans les iris selon l\'angle de lumière.',
    vetements: 'Tenue mixte air/mer — résistante à l\'eau avec des éléments de protection contre les vents marins. Fonctionnelle pour les deux environnements.',
    signes_particuliers: 'Elle décrit les routes par les caractéristiques des vents et des courants — pas les distances. Quelqu\'un qui ne navigue pas peut ne pas comprendre ce qu\'elle explique.',
  },

  psychologie: {
    dominante: 'Navigation entre toutes les régions côtières et les zones aériennes — elle connaît des passages qui ne sont pas cartographiés officiellement, entre les courants marins de Thalassyr et les flux aériens au-dessus des zones côtières des autres régions.',
    mecanisme_de_defense: 'La connaissance exclusive comme position. Les passages qu\'elle connaît ne sont pas dans les cartes impériales. Elle est utile tant que cette exclusivité existe. Elle ne partage pas les détails techniques de ses routes.',
    contradiction_interne: 'Elle transporte des personnes et des cargaisons dont elle ne connaît pas toujours la nature — elle pose des questions sur le poids et les dimensions pour la navigation, pas sur le contenu. Ce qu\'elle a transporté et ce que ces transports ont contribué reste hors de son champ de vision.',
    rapport_aux_autres: 'Elvryn (185) est un contact maritime qui lui signale des routes disponibles et des ports sûrs dans différentes régions. Sylvael (104) est un contact qui lui transmet des demandes de transport pour des personnes ou des cargaisons aux profils variés.',
    vision_du_monde: 'Les régions ont des frontières que les personnes au sol ou dans les institutions définissent. Les courants aériens et marins ne connaissent pas ces frontières. Elle navigue dans l\'espace qui n\'a pas de frontières.',
  },

  histoire: {
    enfance: {
      titre: 'Les vents de Thalassyr',
      contenu: 'À 12 ans, dans les zones côtières de Thalassyr, elle avait appris que les vents marins et les courants aquatiques créaient des zones de transition que les navigateurs habituels évitaient — des zones difficiles mais traversables pour quelqu\'un qui comprenait les deux éléments.',
    },
    arrivee: {
      titre: 'La première route inconnue',
      contenu: 'À 22 ans, elle avait découvert un passage entre deux régions côtières que les cartes impériales ne montraient pas — un couloir aérien au-dessus d\'une zone maritime qui combinait les deux éléments d\'une façon non standard. Elle l\'avait navigué seule d\'abord, puis avait commencé à le proposer.',
    },
    premier_conflit: {
      titre: 'La cargaison inconnue',
      contenu: 'À 27 ans, elle avait transporté une cargaison pour Sylvael (104) dont les caractéristiques physiques ne correspondaient pas aux descriptions données. Elle avait livré. Elle n\'avait pas posé de question supplémentaire. Quelques semaines plus tard, elle avait vu dans les nouvelles Confédération une information sur des matériaux interceptés — les mêmes caractéristiques physiques.',
    },
    revelation: {
      titre: 'L\'exclusivité comme responsabilité',
      contenu: 'Elvryn (185) lui avait posé une question directe : avait-elle transporté des matériaux biologiques dans les 2 derniers mois ? Elle avait dit non. Elvryn avait dit qu\'une des routes de transit dans sa zone avait été utilisée pour des matériaux biologiques récemment — il cherchait à comprendre comment. Ce n\'était pas elle. Mais c\'était dans sa zone.',
    },
    etat_actuel: {
      titre: 'La demande de Sylvael',
      contenu: 'Sylvael (104) lui a demandé un transit urgent — personnes et cargaisons, destination non précisée à ce stade. La demande urgente de Sylvael est inhabituelle. Elle a demandé un délai de 48 heures pour évaluer la route. Sylvael a accepté.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrvkaelth_demande_sylvael',
      titre: 'Le transit urgent',
      description: 'La demande urgente de Sylvael (104) est inhabituelle — elle qui travaille habituellement avec des délais raisonnables. Cette urgence suggère une situation qui dépasse un transport commercial ordinaire. Le délai de 48 heures qu\'elle a demandé lui permet d\'évaluer la route et le profil de la demande.',
      personnages_impliques: [104, 185],
      declencheur: 'Demande urgente et atypique de Sylvael pour un transit immédiat',
      consequence: 'Évaluation en cours de la route et du profil — décision dans 48 heures',
    },
    {
      id: 'thyrvkaelth_zone_inconnue',
      titre: 'La route dans sa zone',
      description: 'Elvryn (185) a identifié un transit de matériaux biologiques dans sa zone de routes exclusives — transit qu\'elle n\'a pas effectué. Si quelqu\'un d\'autre utilise ses passages non cartographiés, l\'exclusivité qui fonde sa position disparaît progressivement. Elvryn cherche la source.',
      personnages_impliques: [185, 104],
      declencheur: 'Transit non autorisé dans sa zone de routes exclusives',
      consequence: 'Perte progressive de l\'exclusivité si d\'autres accèdent à ses passages — position fondamentale menacée',
    },
  ],

  arcs: ['arc_zones_de_transition'],
  position_dans_arc: 'Navigatrice Aéride indépendante connaissant des passages non cartographiés entre les régions côtières et aériennes. Demande urgente et inhabituelle de Sylvael (104). Transit non autorisé dans sa zone de routes exclusives identifié par Elvryn (185).',

  relations: [
    { id: 185, nom: 'Elvryn', type: 'allié', note: 'Contact maritime. A identifié un transit non autorisé dans sa zone de routes. Cherche la source.' },
    { id: 104, nom: 'Sylvael', type: 'allié', note: 'Transmet des demandes de transport. Demande urgente actuelle atypique — délai d\'évaluation de 48 heures accordé.' },
  ],

  combat: {
    sorts: [
      'Tempête côtière (Vent + Eau) — création d\'un front de vent chargé d\'humidité — désorientation dans une zone maritime ou côtière',
      'Courant de manœuvre (Vent) — accélération via un courant aérien concentré — fuite ou déplacement rapide',
      'Vague de pression (Eau) — projection d\'une vague à haute pression — impact à distance depuis un milieu maritime',
    ],
  },

  image_prompts: [
    {
      id: 'thyrvkaelth_navigation',
      description: 'Thyrvkaelth entre deux eaux — une zone de transition entre courants aériens et courants marins, ses ailes partiellement déployées pour naviguer dans les deux. Le ciel au-dessus est clair, la mer en dessous est agitée. Elle est à l\'aise dans les deux environnements simultanément.',
      style: 'réaliste navigatrice Aéride indépendante, zone de transition air/mer, ailes partiellement déployées, aisance dans les deux milieux',
    },
  ],

  lore_long: `Thyrvkaelth connaît des passages non cartographiés entre les régions côtières et les zones aériennes. Son exclusivité est sa position — elle ne partage pas les détails techniques de ses routes.

Un transit de matériaux biologiques a utilisé sa zone sans qu'elle en soit l'auteure. Elvryn (185) cherche la source. L'exclusivité qui fonde sa position est menacée.

Sylvael (104) demande un transit urgent et atypique. Délai de 48 heures pour évaluer.`,
};

export default thyrvkaelth;
