import type { PersonnageLoreComplet } from '../../../lore-types';

const orethyn: PersonnageLoreComplet = {
  id: 194,
  nom: 'Orethyn',
  element: 'Normal',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Homme-Lien de 38 ans, vérificateur impérial — corpulence austère, tenue impériale officielle, posture de quelqu\'un dont la présence est un message en soi.',
    peau: 'Ton pâle avec une qualité de quelqu\'un qui vient d\'ailleurs et ne cherche pas à s\'intégrer.',
    yeux: 'Gris avec une qualité d\'analyse froide. Il cherche des discordances.',
    vetements: 'Tenue de vérificateur impérial — formelle, identification visible. Il est venu pour être reconnu.',
    signes_particuliers: 'Il a été envoyé par l\'Empire pour auditer les registres de Thyven (62) à Virex — une mission qui suggère que l\'Empire ne fait pas entièrement confiance à Thyven.',
  },

  psychologie: {
    dominante: 'Vérificateur impérial envoyé à Virex pour auditer les registres de Thyven (62). Sa présence est un signal : l\'Empire vérifie ses propres administrateurs locaux. Il cherche des discordances entre les registres officiels de Thyven et d\'autres sources — des erreurs, des omissions, des falsifications.',
    mecanisme_de_defense: 'La procédure comme légitimité. Il suit une procédure d\'audit standard. Il ne cherche pas à nuire à Thyven spécifiquement — il cherche des discordances où qu\'elles se trouvent. Si elles sont chez Thyven, c\'est chez Thyven.',
    contradiction_interne: 'Sa mission d\'audit implique qu\'il cherchera à croiser les registres de Thyven avec des sources indépendantes — incluant potentiellement des sources comme Kasevorn (186) et Vashek (182). Si ses recherches le mènent aux vrais registres de Vashek, il trouvera exactement les discordances que Thyven a cherché à masquer.',
    rapport_aux_autres: 'Thyven (62) est son adversaire direct — l\'administrateur dont il vérifie les registres. Kasevorn (186) est dans son réseau — une source de données qu\'il pourrait croiser avec les registres de Thyven.',
    vision_du_monde: 'Les administrateurs locaux développent des loyautés locales qui compromettent leur mission impériale. L\'audit est un mécanisme de correction. Sa présence est préventive autant que corrective.',
  },

  histoire: {
    enfance: {
      titre: 'L\'audit impérial',
      contenu: 'Formation dans l\'administration centrale impériale. Il avait commencé par des audits financiers avant d\'être spécialisé dans les audits démographiques et de recensement — les registres d\'Élus, les données de population, les identifications.',
    },
    arrivee: {
      titre: 'La mission Virex',
      contenu: 'Il avait été assigné à Virex sur signalement de discordances mineures dans les rapports de Thyven — des statistiques qui ne correspondaient pas aux tendances régionales. Sa mission était de vérifier si ces discordances étaient des erreurs ou des falsifications.',
    },
    premier_conflit: {
      titre: 'La coopération de Thyven',
      contenu: 'Thyven lui avait fourni tous les registres demandés dans les délais réglementaires — avec une coopération un peu trop fluide pour un audit surprise. Orethyn avait noté la fluidité. Il cherchait ce que Thyven avait préparé pour être trouvé.',
    },
    revelation: {
      titre: 'Ce qui manque',
      contenu: 'Ses audits révélaient que les registres de Thyven étaient complets dans leur forme mais lacunaires dans leur substance — des entrées pour des personnes sans historique suffisant, des adresses qui ne correspondaient pas à rien. Les données étaient trop propres.',
    },
    etat_actuel: {
      titre: 'L\'auditeur',
      contenu: 'Il vérifie. Les registres sont trop propres. Il cherche ce qu\'on a essayé de cacher dans ce qui paraît complet.',
    },
  },

  evenements_narratifs: [
    {
      id: 'orethyn_audit',
      titre: 'L\'audit qui trouve trop',
      description: 'Orethyn audite les registres de Thyven (62) à Virex. Si ses croisements de données le mènent aux vrais registres de Vashek (182) — les registres qui montrent les discordances réelles — il trouvera exactement ce que Thyven a cherché à masquer, mais aussi les noms des 39 enfants de Virex que Thyven avait protégés en les omettant.',
      personnages_impliques: [62, 186],
      declencheur: 'Orethyn localisant les vrais registres de Vashek lors de son audit',
      consequence: 'Discordances réelles exposées — y compris les noms des enfants de Virex que Thyven avait omis pour les protéger',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Vérificateur impérial auditer les registres de Thyven (62) à Virex. L\'Empire ne fait pas entièrement confiance à son administrateur local. Cherche des discordances dans des registres trop propres.',

  relations: [
    { id: 62, nom: 'Thyven', type: 'adversaire', note: 'Administrateur dont il vérifie les registres — coopération trop fluide pour être entièrement sincère.' },
    { id: 186, nom: 'Kasevorn', type: 'contact', note: 'Source de données indépendante à croiser avec les registres de Thyven.' },
  ],

  combat: {
    sorts: [
      'Frappe neutre (Normal) — attaque directe — défense personnelle',
      'Analyse de terrain (Normal) — évaluation rapide des positions — avantage tactique',
    ],
  },

  image_prompts: [
    {
      id: 'orethyn_audit',
      description: 'Orethyn dans les archives de Virex — un Homme-Lien de 38 ans comparant deux registres côte à côte. Les entrées des registres de Thyven sont impeccables. Orethyn a une liste de noms qui devraient être là et ne le sont pas. Son expression est celle de quelqu\'un qui sait que ce qui manque est plus révélateur que ce qui est présent.',
      style: 'réaliste Homme-Lien vérificateur impérial, Virex, audit de registres, discordances par omission, analyse froide',
    },
  ],

  lore_long: `Orethyn est vérificateur impérial envoyé à Virex pour auditer les registres de Thyven (62). Sa présence signale que l'Empire ne fait pas entièrement confiance à son administrateur local.

Les registres de Thyven sont trop propres. Des entrées complètes dans leur forme mais lacunaires dans leur substance. Des noms qui manquent là où il devrait y en avoir.

Il cherche ce qu'on a préparé pour être trouvé — et ce qu'on a vraiment caché.`,
};

export default orethyn;
