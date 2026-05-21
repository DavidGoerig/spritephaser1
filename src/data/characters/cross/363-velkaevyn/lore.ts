import type { PersonnageLoreComplet } from '../../../lore-types';

const velkaevyn: PersonnageLoreComplet = {
  id: 363,
  nom: 'Velkaevyn',
  element: 'Normal',
  element2: 'Combat',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Boxeur — une corpulence de combat visible mais portée avec légèreté. Les personnes qui le voient dans la rue voient un athlète. Les personnes qui voient son sac de voyage voient un itinérant.',
    peau: 'Brun Homme-Lien avec des articulations marquées par des années de frappe et un nez qui a été cassé deux fois. Des traces de routes diverses — il ne reste jamais longtemps au même endroit.',
    yeux: 'Marron avec une qualité de lecture des personnes — il évalue les intentions avant les mots. Habitude de combat et habitude de porteur.',
    vetements: 'Tenue de voyage pratique avec un sac toujours sur lui ou à portée. Il dort avec le sac à côté. Il ne le perd jamais de vue.',
    signes_particuliers: 'Il cherche des combats locaux partout où il passe — des tournois informels, des entraînements communautaires. C\'est légitime. C\'est aussi pourquoi il est toujours en mouvement entre des villes différentes.',
  },

  psychologie: {
    dominante: 'Transport d\'informations Dissidentes dans ses effets personnels à travers les checkpoints de l\'Isthme — des documents, des messages codés, des plans d\'extraction dans un sac de voyage qui a toutes les apparences d\'un athlète itinérant.',
    mecanisme_de_defense: 'La légitimité du prétexte. Il est vraiment boxeur. Il participe vraiment à des tournois. Son itinérance est réelle. Le prétexte n\'est pas un mensonge — c\'est une vérité qui cache une autre vérité.',
    contradiction_interne: 'Il ne sait pas ce qu\'il transporte la plupart du temps. Karevyn (197) lui remet des effets à passer d\'un point à un autre sans lui expliquer le contenu. C\'est sa protection — il ne peut pas révéler ce qu\'il ne sait pas. C\'est aussi sa vulnérabilité — il fait confiance au jugement de Karevyn sur ce qu\'il est raisonnable de lui faire transporter.',
    rapport_aux_autres: 'Karevyn (197) est son contact pour les remises et les réceptions — c\'est lui qui décide quoi transporter et vers qui. Sarevolt (350) est un destinataire récurrent pour les informations sur Virex.',
    vision_du_monde: 'Les personnes qui ont besoin d\'informations pour survivre doivent pouvoir les recevoir. Transporter ces informations est une tâche concrète. Il peut le faire. Il le fait.',
  },

  histoire: {
    enfance: {
      titre: 'Les tournois de quartier',
      contenu: 'À 15 ans, il avait commencé à participer aux tournois de boxe de son quartier de l\'Isthme. À 18 ans, il avait commencé à voyager vers des tournois dans d\'autres villes. À 20 ans, il ne rentrait plus vraiment chez lui — l\'itinérance était devenue son mode de vie naturel.',
    },
    arrivee: {
      titre: 'La première remise',
      contenu: 'À 25 ans, Karevyn (197) l\'avait abordé après un tournoi à Virex. Il lui avait demandé de porter un pli d\'une ville à une autre sur sa prochaine route. La couverture était naturelle — il allait dans cette direction. Il avait accepté. Le pli était passé sans incident.',
    },
    premier_conflit: {
      titre: 'La fouille au checkpoint',
      contenu: 'À 28 ans, un checkpoint impérial l\'avait fouillé systématiquement — son sac entier, couche par couche. Il transportait des documents Dissidents dans une poche intérieure de son équipement de boxe. Les soldats avaient inspecté l\'équipement mais pas démonté la poche. Il avait su que la prochaine fouille pouvait être plus approfondie.',
    },
    revelation: {
      titre: 'Le contenu inconnu',
      contenu: 'Après une remise à Sarevolt (350), celui-ci l\'avait remercié avec une intensité inhabituellement forte. Velkaevyn avait compris que ce qu\'il transportait était plus critique qu\'une information ordinaire. Il avait réalisé qu\'il ne saurait jamais exactement ce qu\'il avait transporté. Il avait décidé de faire confiance au jugement de Karevyn.',
    },
    etat_actuel: {
      titre: 'Les checkpoints de Thyrkael',
      contenu: 'Les 4 nouveaux checkpoints de Thyrkael (351) autour de Virex ont changé ses routes habituelles. 2 de ses chemins de passage réguliers sont maintenant surveillés par des soldats qui le connaissent de vue. Il doit varier ses apparences et ses entrées. Karevyn lui a demandé d\'augmenter la fréquence des passages — la démonstration de Kasevolt (360) approche et les informations d\'extraction doivent circuler.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velkaevyn_checkpoints_thyrkael',
      titre: 'Les routes modifiées',
      description: 'Les checkpoints de Thyrkael (351) ont rendu 2 de ses 3 routes habituelles vers Virex plus risquées — des soldats qui le reconnaissent. Il doit alterner les routes, les apparences, les prétextes de tournoi. Karevyn (197) demande une augmentation de la fréquence des passages en prévision de la démonstration de Kasevolt (360).',
      personnages_impliques: [197, 350],
      declencheur: 'Installation des checkpoints de Thyrkael modifiant les routes de passage',
      consequence: 'Routes modifiées — augmentation de la fréquence demandée avec plus de risque par passage',
    },
    {
      id: 'velkaevyn_contenu_opaque',
      titre: 'Le transport sans information',
      description: 'Il ne sait pas ce qu\'il transporte. Cette opacité est sa protection. C\'est aussi la limite de sa capacité à évaluer ses risques. Si ce qu\'il transporte le met dans une catégorie qu\'il ne connaît pas — documents de planification d\'extraction, informations sur des Élus, plans d\'installation — les conséquences d\'une capture seraient différentes.',
      personnages_impliques: [197, 350],
      declencheur: 'Opacité délibérée sur le contenu transporté',
      consequence: 'Incapacité à évaluer personnellement le niveau de risque de chaque transport',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Porteur d\'informations Dissidentes camouflé en boxeur itinérant. Les checkpoints de Thyrkael compliquent ses routes vers Virex. Karevyn lui demande d\'augmenter la fréquence des passages avant la démonstration de Kasevolt.',

  relations: [
    { id: 197, nom: 'Karevyn', type: 'allié', note: 'Contact Dissident pour les remises et réceptions. Décide du contenu transporté sans l\'informer.' },
    { id: 350, nom: 'Sarevolt', type: 'allié', note: 'Destinataire récurrent à Virex. A réagi avec intensité inhabituelle à certaines remises.' },
  ],

  combat: {
    sorts: [
      'Frappe de neutralisation (Combat) — impact physique ciblé — neutralisation rapide et silencieuse',
      'Résistance de terrain (Normal) — adaptation physique aux conditions de l\'environnement — maintien de la capacité d\'action',
      'Feinte de passage (Combat + Normal) — combinaison de mouvement trompeur et de résistance — franchissement d\'obstacle physique',
    ],
  },

  image_prompts: [
    {
      id: 'velkaevyn_checkpoint',
      description: 'Velkaevyn devant un checkpoint impérial à l\'entrée de Virex — son sac de voyage sur l\'épaule, son équipement de boxe visible. Il est détendu, souriant légèrement. Il tend ses papiers. Rien dans son comportement ne trahit ce qu\'il transporte.',
      style: 'réaliste boxeur Homme-Lien itinérant, checkpoint impérial, décontraction calculée, sac de voyage',
    },
  ],

  lore_long: `Velkaevyn transporte des informations Dissidentes à travers les checkpoints de l'Isthme. Sa couverture est réelle — il est boxeur itinérant, il participe vraiment aux tournois.

Il ne sait pas ce qu'il transporte. C'est sa protection et sa limite. Il fait confiance au jugement de Karevyn (197).

Les 4 checkpoints de Thyrkael (351) ont modifié ses routes habituelles. Karevyn lui demande d'augmenter la fréquence des passages avant la démonstration de Kasevolt (360). Plus de passages, avec plus de risque par passage.`,
};

export default velkaevyn;
