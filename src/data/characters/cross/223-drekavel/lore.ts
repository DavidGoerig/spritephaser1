import type { PersonnageLoreComplet } from '../../../lore-types';

const drekavel: PersonnageLoreComplet = {
  id: 223,
  nom: 'Drekavel',
  element: 'Combat',
  element2: 'Feu',
  espece: 'Homme-Lien',
  region: 'Varkhôl',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Homme-Lien de 34 ans, capteur militaire — corpulence de combattant discret. Il ne ressemble pas à ce qu\'il est dans les zones post-Rupture.',
    peau: 'Ton méditerranéen avec des marques d\'opérations en terrain chaud — il opère dans les zones thermiques.',
    yeux: 'Gris avec une qualité d\'identification rapide. Il classe ce qu\'il voit.',
    vetements: 'Tenue civile adaptée aux zones post-Rupture — il se fond dans le paysage de décombres.',
    signes_particuliers: 'Il identifie des Élus cachés dans les zones post-Rupture de Varkhôl pour l\'Empire. Son double élément lui permet d\'opérer dans des environnements thermiquement endommagés qui seraient inaccessibles à des Homme-Lien standard.',
  },

  psychologie: {
    dominante: 'Capteur militaire impérial dans les zones post-Rupture Thermique de Varkhôl. Il identifie des Élus cachés — des personnes qui ne se sont pas enregistrées et vivent dans les zones endommagées hors de la surveillance directe de l\'Empire. Son double élément lui permet d\'opérer dans ces zones.',
    mecanisme_de_defense: 'La discrétion opérationnelle. Dans les zones post-Rupture, être reconnu comme agent impérial est dangereux. Il fonctionne en civil. Ses rapports vont à Cendrix (2) par canaux sécurisés.',
    contradiction_interne: 'Il identifie des Élus cachés dans des zones où ils se cachent précisément à cause de l\'Empire. La nécessité de leur cachette est directement liée à sa mission. Il ne pense pas à cette circularité.',
    rapport_aux_autres: 'Cendrix (2) est dans son réseau hiérarchique — le commandant à qui ses rapports d\'identification remontent. Avel (64) est dans son réseau — le commandant régional coordonnant les opérations qui suivent ses identifications.',
    vision_du_monde: 'L\'enregistrement des Élus est nécessaire. Certains Élus évitent l\'enregistrement. Son travail est de les trouver pour que l\'enregistrement puisse être appliqué. Il est une étape dans un processus.',
  },

  histoire: {
    enfance: {
      titre: 'Le double élément dans l\'Isthme',
      contenu: 'Né dans l\'Isthme avec un double élément Combat/Feu — une combinaison que l\'Empire avait identifiée comme idéale pour les opérations dans des environnements thermiques perturbés. Il avait été recruté à 22 ans.',
    },
    arrivee: {
      titre: 'Les zones post-Rupture',
      contenu: 'Assigné aux zones post-Rupture de Varkhôl à 28 ans. Sa capacité à opérer dans des environnements thermiquement endommagés sans équipement de protection spéciale le rendait plus efficace que les capteurs standard.',
    },
    premier_conflit: {
      titre: 'L\'Élu enfant',
      contenu: 'Il avait identifié un enfant non-enregistré dans une zone de ruines — accompagné de Kreshavel (221). Il avait fait son rapport. L\'extraction de l\'enfant par l\'Empire n\'avait pas eu lieu — les Régulateurs n\'avaient pas pu pénétrer assez profondément dans les ruines. Il avait noté le point de localisation pour un suivi.',
    },
    revelation: {
      titre: 'L\'étape dans un processus',
      contenu: 'Il avait compris que son travail était une étape — il identifiait, d\'autres capturaient. La distance entre l\'identification et la capture lui permettait de ne pas penser à ce que la capture impliquait pour les Élus identifiés.',
    },
    etat_actuel: {
      titre: 'Le capteur',
      contenu: 'Il identifie. Il rapporte. D\'autres agissent.',
    },
  },

  evenements_narratifs: [
    {
      id: 'drekavel_identification',
      titre: 'L\'identification qui mène à une capture',
      description: 'Drekavel identifie des Élus cachés dans les zones post-Rupture. Si une de ses identifications mène directement à une capture visible — une famille, un enfant — et qu\'il en est informé, la distance entre son rôle d\'identification et les conséquences réelles sera réduite à zéro.',
      personnages_impliques: [2, 64],
      declencheur: 'Drekavel informé en détail de la capture qui a suivi une de ses identifications',
      consequence: 'Drekavel confronté à la chaîne causale entre son identification et la capture — et à sa position dans ce processus',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Capteur militaire impérial identifiant des Élus cachés dans les zones post-Rupture de Varkhôl. Double élément Combat/Feu permettant d\'opérer dans des environnements thermiques endommagés.',

  relations: [
    { id: 2, nom: 'Cendrix', type: 'hierarchie', note: 'Commandant recevant les rapports d\'identification.' },
    { id: 64, nom: 'Avel', type: 'hierarchie', note: 'Commandant régional coordonnant les opérations suivant les identifications.' },
  ],

  combat: {
    sorts: [
      'Frappe de capture (Combat) — immobilisation sans dommage fatal — capture opérationnelle',
      'Navigation thermique (Feu) — déplacement dans des zones de chaleur extrême — accès aux zones post-Rupture',
    ],
  },

  image_prompts: [
    {
      id: 'drekavel_zone',
      description: 'Drekavel dans les ruines d\'un quartier post-Rupture de Varkhôl — un Homme-Lien de 34 ans en tenue civile qui observe à distance un groupe incluant un enfant Pyrien non-enregistré. Il prend note de la localisation. Sa neutralité d\'expression est professionnelle. Il est une étape dans un processus.',
      style: 'réaliste Homme-Lien capteur militaire impérial, Varkhôl zones post-Rupture, identification d\'Élus cachés, double élément Combat/Feu, distance opérationnelle',
    },
  ],

  lore_long: `Drekavel identifie des Élus cachés dans les zones post-Rupture Thermique de Varkhôl pour l'Empire. Son double élément Combat/Feu lui permet d'opérer dans des environnements thermiquement endommagés inaccessibles aux agents standard.

Il identifie. D'autres capturent. La distance entre les deux lui permet de ne pas penser à ce que la capture implique.

Cette distance rétrécit quand il est informé des détails de ce qui suit.`,
};

export default drekavel;
