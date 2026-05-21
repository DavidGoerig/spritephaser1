import type { PersonnageLoreComplet } from '../../../lore-types';

const syrethia: PersonnageLoreComplet = {
  id: 259,
  nom: 'Syrethia',
  element: 'Fée',
  element2: 'Eau',
  espece: 'Fées',
  region: 'Thalassyr',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Moyenne, silhouette qui a gardé quelque chose de la discrétion de l\'infiltration — même libre, elle occupe peu d\'espace.',
    peau: 'Fée bleu-gris pâle, reflets aquatiques aux chevilles et aux poignets. Plus marquée qu\'avant — l\'élément Eau s\'est renforcé depuis qu\'elle vit près de la mer.',
    yeux: 'Bleu profond, porteurs d\'une fatigue qui n\'est pas de la vieillesse. Elle a 52 ans mais ses yeux en ont davantage.',
    vetements: 'Tenue simple d\'habitante de port — rien d\'identifiable, rien de marqué. Elle a cessé d\'avoir des vêtements qui disaient quelque chose sur elle il y a 14 ans.',
    signes_particuliers: 'Elle marche toujours le long des murs dans les espaces publics, même maintenant. Elle ne peut pas s\'en empêcher. Elle ne cherche plus à s\'en empêcher.',
  },

  psychologie: {
    dominante: 'Culpabilité du survivant fonctionnelle. Elle vit, elle travaille, elle aide encore les Dissidentes depuis Thalassyr. Elle fait tout cela avec la conscience constante que d\'autres continuent dans la Citadelle ce qu\'elle a quitté.',
    mecanisme_de_defense: 'Le présent comme seul temps habitable. Le passé est douloureux, l\'avenir incertain. Elle construit chaque journée comme une chose complète en elle-même.',
    contradiction_interne: 'Son extraction était nécessaire — Velath l\'a sauvée d\'une arrestation imminente. Elle le sait. Elle sait aussi qu\'un trou a été laissé, et qu\'une autre (Syravel, 254) l\'a comblé sans savoir qu\'il existait. Syrethia vit libre pendant que Syravel est encore à l\'intérieur.',
    rapport_aux_autres: 'Proche de Shiveth (232) — partagé 6 mois dans une maison sécurisée, lien forgé par la proximité et le silence commun. Ses contacts Dissidentes à Thalassyr sont réels mais distancés — elle donne ce qu\'elle peut sans s\'engager au-delà de ce que son équilibre permet.',
    vision_du_monde: 'La liberté a un coût que vous ne payez pas entièrement vous-même. Elle a payé avec des années d\'infiltration — mais d\'autres continuent à payer ce qu\'elle ne paie plus.',
  },

  histoire: {
    enfance: {
      titre: 'La Citadelle comme berceau',
      contenu: 'Née à la Citadelle dans une famille de petits fonctionnaires fées. Elle y a grandi avec l\'Empire comme contexte de vie — pas une conviction, une atmosphère. À 20 ans elle lisait les mêmes rapports internes que Caesyl (251), mais elle avait 15 ans de moins et n\'était pas encore devenue une habitude.',
    },
    arrivee: {
      titre: 'Les Dissidentes par les rapports',
      contenu: 'Contactée à 29 ans par le réseau Dissident via un intermédiaire qui avait identifié sa position et ses accès. Elle avait demandé 3 semaines pour décider. Elle avait accepté. Son infiltration avait duré 9 ans — jusqu\'à l\'extraction.',
    },
    premier_conflit: {
      titre: 'Les 9 ans',
      contenu: 'Neuf ans à naviguer entre l\'identité de fonctionnaire Fée loyale et l\'identité de source Dissidente. Elle avait un système : chaque mois elle évaluait si son niveau d\'exposition avait augmenté. Si oui, elle ralentissait. Trois fois elle avait failli arrêter complètement. Trois fois elle avait continué.',
    },
    revelation: {
      titre: 'L\'arrestation qui n\'a pas eu lieu',
      contenu: 'Il y a 14 ans, Velath (49) l\'avait prévenue 36 heures avant : une vérification était en cours sur ses accès des 6 derniers mois. Pas une arrestation — une vérification préalable qui aurait trouvé suffisamment pour déclencher une arrestation. Elle avait eu 36 heures pour disparaître via le réseau Vel'Nox. Elle les avait utilisées.',
    },
    etat_actuel: {
      titre: 'Le port de Thalassyr',
      contenu: 'Elle vit dans un port de la côte ouest de Thalassyr depuis 14 ans. Travaille comme comptable pour une coopérative de pêche — travail honnête, loin de tout. Transmet encore des informations aux Dissidentes quand elle en a, via des canaux différents de ceux qu\'elle utilisait à la Citadelle. Syravel occupe un poste qu\'elle ne sait pas avoir existé avant elle.',
    },
  },

  evenements_narratifs: [
    {
      id: 'syrethia_velath_extraction',
      titre: 'Les 36 heures',
      description: 'Velath lui a transmis l\'alerte 36 heures avant. Elle se souvient de chacune de ces 36 heures — pas comme un trauma mais comme une précision. Elle a dit au revoir à personne. Elle est partie avec ce qu\'elle pouvait porter. Le réseau Vel'Nox l\'avait conduite à Thalassyr via 4 relais en 11 jours. À l\'arrivée elle avait dormi 14 heures consécutives pour la première fois depuis des mois.',
      personnages_impliques: [49],
      declencheur: 'Alerte de surveillance imminente',
      consequence: 'Extraction réussie — trou opérationnel laissé à la Citadelle',
    },
    {
      id: 'syrethia_shiveth_maison',
      titre: 'Les 6 mois avec Shiveth',
      description: 'Shiveth (232) était dans la même maison sécurisée pendant 6 mois — des raisons différentes, la même nécessité de disparaître. Ils ne se racontaient pas tout — c\'était une règle tacite. Mais la proximité dans un espace petit crée une connaissance latérale. Elle sait comment Shiveth boit son café le matin. Il sait qu\'elle ne parle pas avant 10h. Ce type de connaissance est plus difficile à oublier que les histoires.',
      personnages_impliques: [232],
      declencheur: 'Cohabitation dans une maison sécurisée Dissidente',
      consequence: 'Lien réel mais distancé — connaissance intime sans récit complet',
    },
    {
      id: 'syrethia_syravel_ignorance',
      titre: 'La remplaçante',
      description: 'Elle ne sait pas que Syravel existe. Si quelqu\'un lui disait qu\'une autre Fée a comblé son poste 3 ans après son extraction et y travaille depuis 11 ans, elle ressentirait quelque chose de complexe — pas de la jalousie, pas de la gratitude, quelque chose entre le soulagement et la honte. Le trou qu\'elle a laissé a été comblé. Elle n\'y est pour rien. Ce n\'est pas un réconfort suffisant.',
      personnages_impliques: [254],
      declencheur: 'Structure narrative de la succession d\'infiltrées',
      consequence: 'Ironie non perçue — deux femmes dans le même rôle à 14 ans de distance, sans se connaître',
    },
  ],

  arcs: ['arc_dissidentes', 'arc_citadelle_empire'],
  position_dans_arc: 'Survivante à distance. Elle contribue encore depuis Thalassyr, mais sa contribution principale est peut-être sa survie elle-même — la preuve que le réseau peut extraire et que certains finissent par être libres.',

  relations: [
    { id: 49, nom: 'Velath', type: 'mentor', note: 'L\'a extraite il y a 14 ans. 36 heures d\'avance. Elle lui en doit sa vie extérieure.' },
    { id: 254, nom: 'Syravel', type: 'fantôme', note: 'Sa remplaçante qu\'elle ne connaît pas. Syravel occupe ce qu\'elle a laissé.' },
    { id: 232, nom: 'Shiveth', type: 'allié', note: '6 mois dans la même maison sécurisée. Connaissance latérale sans récit complet.' },
  ],

  combat: {
    sorts: [
      'Courant de fuite (Eau) — création d\'un courant aquatique orientable utilisable dans les milieux côtiers',
      'Voile fée (Fée) — légère altération de la mémorabilité — utile en contexte de fuite',
      'Adaptation de marée (Eau) — lecture précise des variations de pression aquatique dans un milieu',
    ],
  },

  image_prompts: [
    {
      id: 'syrethia_port',
      description: 'Syrethia sur le quai d\'un port de Thalassyr, regardant la mer. Sa posture est celle de quelqu\'un qui a appris à rester immobile sans se figer — présente, pas en fuite. L\'eau est derrière elle et devant. Elle n\'est plus dans la Citadelle depuis 14 ans et pourtant elle marche encore le long des murs.',
      style: 'réaliste fée, lumière de mer, port côtier, tons bleu-gris et sel',
    },
  ],

  lore_long: `Syrethia marche encore le long des murs.

14 ans. Elle vit dans un port de pêche, elle est comptable de coopérative, elle n'a pas de raison pratique de longer les murs dans une rue de Thalassyr. Elle le fait quand même. Elle a cessé d'essayer de s'en empêcher il y a 8 ans — ça ne disparaît pas, ça s'intègre.

Velath lui a donné 36 heures. Elle se souvient de chaque heure. La première : évaluation. La deuxième à sixième : destruction des documents qui ne pouvaient pas partir avec elle. La septième : une liste de choses à faire qui était à la fois une liste pratique et une liste pour ne pas penser. Les 29 dernières heures : déplacement via les relais.

11 jours pour arriver à Thalassyr. 6 mois dans une maison sécurisée avec Shiveth — quelqu'un qui avait ses propres 36 heures derrière lui et ne posait pas de questions sur les siennes. Elle sait qu'il boit son café noir sans sucre. Il sait qu'elle ne parle pas le matin. C'est une forme d'intimité qui se construit sans narration.

Elle ne sait pas que Syravel existe. Elle ne sait pas que le trou qu'elle a laissé a été comblé 3 ans après son départ, par une Fée qui travaille à 400 mètres d'Eiravel depuis 9 ans sans le savoir. Si elle le savait, elle ressentirait quelque chose qu'elle n'a pas de mot pour — pas de la culpabilité précisément, pas du soulagement précisément, mais les deux simultanément dans des proportions qu'elle ne pourrait pas démêler.

Elle contribue encore. Les informations qu'elle transmet depuis Thalassyr sont moins précieuses que ce qu'elle transmettait depuis l'intérieur — c'est inévitable. Mais elle est vivante, et sa vie en dehors de la Citadelle est peut-être aussi une forme de preuve que quelque chose d'autre est possible.

Elle pense à ça parfois. Puis elle boit son café et ouvre les registres de la coopérative.`,
};

export default syrethia;
