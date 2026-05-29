import type { PersonnageLoreComplet } from '../../../lore-types';

const velok: PersonnageLoreComplet = {
  id: 178,
  nom: 'Velok',
  element: 'Eau',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Homme-Lien de 48 ans, administrateur — corpulence modérée, tenue soignée, posture d\'un homme dont les décisions ont des effets sur des routes commerciales entières.',
    peau: 'Ton neutre avec une qualité de quelqu\'un qui passe du temps en intérieur à étudier des cartes.',
    yeux: 'Bleus-gris avec une qualité de quelqu\'un qui équilibre des variables en permanence.',
    vetements: 'Tenue administrative de la Confédération — formelle sans être militaire.',
    signes_particuliers: 'Il maintient des équilibres commerciaux fragiles entre des factions qui ont des intérêts contradictoires dans l\'Isthme. Chaque décision sur les routes commerciales touche trois factions au moins.',
  },

  psychologie: {
    dominante: 'Administrateur Confédéré des routes commerciales de l\'Isthme. L\'Isthme est un carrefour entre des régions en tension — maintenir les routes commerciales ouvertes nécessite de ménager des factions qui ne s\'entendent pas. Chaque décision est un équilibre.',
    mecanisme_de_defense: 'L\'utilité économique comme protection. Les routes commerciales bénéficient à tout le monde. Même des factions adverses ont intérêt à ce qu\'elles restent ouvertes. Son rôle est utile à toutes les parties — ce qui le protège temporairement.',
    contradiction_interne: 'Maintenir les équilibres commerciaux entre des factions en conflit signifie que chaque décision favorisant l\'une compromet les relations avec les autres. Il maintient des équilibres qui deviennent de moins en moins stables à mesure que la saturation élémentaire de l\'Isthme s\'aggrave.',
    rapport_aux_autres: 'La Saturation de l\'Isthme est le facteur qui déstabilise ses équilibres — les anomalies élémentaires perturbent les routes commerciales. Le Second Avatar (59) est un contact indirect — des décisions politiques qui impactent les flux commerciaux qu\'il gère.',
    vision_du_monde: 'Les échanges commerciaux maintiennent la paix mieux que les accords politiques. Tant que les routes fonctionnent, les factions ont un intérêt mutuel à coexister. Son travail est de garder les routes ouvertes.',
  },

  histoire: {
    enfance: {
      titre: 'Le commerce de l\'Isthme',
      contenu: 'Famille de marchands dans l\'Isthme. Il avait appris les routes commerciales depuis l\'enfance — les équilibres entre Varkhôl, Thalassyr, et les régions moins stables.',
    },
    arrivee: {
      titre: 'L\'administration',
      contenu: 'La Confédération l\'avait recruté à 30 ans pour son expertise des routes locales. Il avait commencé à gérer les flux commerciaux officiels — une position qui lui donnait un accès aux décisions qui affectaient tout l\'Isthme.',
    },
    premier_conflit: {
      titre: 'La route bloquée',
      contenu: 'Une faction avait exigé le blocage d\'une route commerciale traversant un territoire contesté. Bloquer la route aurait déclenché une réaction d\'une autre faction. Il avait trouvé un détour qui satisfaisait partiellement les deux — et n\'avait complètement satisfait personne.',
    },
    revelation: {
      titre: 'Les équilibres qui s\'effritent',
      contenu: 'La saturation élémentaire de l\'Isthme avait commencé à affecter des routes commerciales — des zones où les anomalies rendaient le transit dangereux. Ses équilibres reposaient sur des routes qui se réduisaient.',
    },
    etat_actuel: {
      titre: 'L\'administrateur',
      contenu: 'Il gère. Les routes se réduisent. Les équilibres tiennent pour l\'instant.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velok_route',
      titre: 'La route de saturation',
      description: 'Velok maintient les routes commerciales de l\'Isthme. Si une zone de saturation élémentaire majeure coupe une route principale — ou si une faction décide que la situation de saturation justifie de bloquer une route pour des raisons de sécurité — ses équilibres fragiles s\'effondreront.',
      personnages_impliques: [59],
      declencheur: 'Fermeture d\'une route commerciale principale due à la saturation ou à une décision de faction',
      consequence: 'Effondrement d\'un équilibre commercial — et réaction en chaîne entre les factions qui en bénéficiaient',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Administrateur des routes commerciales de l\'Isthme. Maintient des équilibres fragiles entre factions. La saturation élémentaire réduit les routes sur lesquelles ses équilibres reposent.',

  relations: [
    { id: 59, nom: 'Second Avatar', type: 'contact', note: 'Décisions politiques qui impactent indirectement les flux commerciaux gérés.' },
  ],

  combat: {
    sorts: [
      'Flux d\'eau (Eau) — courant directionnel — contrôle de terrain',
      'Barrière liquide (Eau) — défense fluide — protection adaptative',
    ],
  },

  image_prompts: [
    {
      id: 'velok_routes',
      description: 'Velok devant une carte des routes commerciales de l\'Isthme — un Homme-Lien de 48 ans qui analyse des flux avec des annotations multicolores pour chaque faction. Des zones de saturation élémentaire sont marquées en rouge. Ses équilibres sont visibles sur la carte. Ils tiennent par des fils.',
      style: 'réaliste Homme-Lien administrateur, Isthme, routes commerciales, équilibres fragiles, saturation élémentaire',
    },
  ],

  lore_long: `Velok administre les routes commerciales de l'Isthme pour la Confédération. L'Isthme est un carrefour entre des régions en tension — chaque décision sur les routes touche plusieurs factions.

La saturation élémentaire de l'Isthme réduit progressivement les routes disponibles. Ses équilibres reposent sur moins de marge qu'avant.

Tant que les routes fonctionnent, les factions coexistent. Quand elles s'effondrent, l'équilibre part avec elles.`,
};

export default velok;
