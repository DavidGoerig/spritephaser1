import type { PersonnageLoreComplet } from '../../../lore-types';

const karevyn: PersonnageLoreComplet = {
  id: 197,
  nom: 'Karevyn',
  element: 'Normal',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: 'Homme-Lien de 39 ans, logisticien — corpulence administrative efficace, habituée à gérer des flux plutôt qu\'à les exécuter physiquement.',
    peau: 'Ton neutre avec une qualité de quelqu\'un qui pense en termes de flux et de volumes.',
    yeux: 'Bruns avec une qualité organisationnelle — il voit des systèmes, pas des individus.',
    vetements: 'Tenue civile ordinaire — la Convergence préfère que ses logisticiens ne soient pas identifiés.',
    signes_particuliers: 'Il gère les flux de personnes vers les sites de Drain de la Convergence. Ces "personnes" sont principalement des Élus recrutés ou capturés. Son travail est la logistique, pas l\'identification ou la capture.',
  },

  psychologie: {
    dominante: 'Logisticien de la Convergence dans l\'Isthme. Il gère les flux de transport et de transit — des personnes d\'un point A à un point B, en passant par des relais et des points d\'étape. Ces personnes sont des Élus destinés aux sites de Drain du Protocole d\'Identification. Il ne se confronte pas à ce que cette fonction signifie pour les Élus qu\'il déplace.',
    mecanisme_de_defense: 'La logistique comme abstraction. Il gère des flux — des nombres, des horaires, des routes. Le contenu humain de ces flux est traité par d\'autres. Sa responsabilité est l\'efficacité, pas l\'éthique du mouvement.',
    contradiction_interne: 'Son efficacité logistique rend possible le Protocole d\'Identification à l\'échelle où il fonctionne. Moins il est efficace, moins d\'Élus atteignent les sites de Drain. Mais son travail lui est présenté comme une organisation de protection, pas de captivité. Il n\'a pas vérifié.',
    rapport_aux_autres: 'Rhavel (241) est dans son réseau Convergence — un responsable des sites de Drain à qui il transmet des personnes. Lysael (63) est dans son réseau indirect — quelqu\'un dont les activités contre le Protocole créent des perturbations dans ses flux logistiques.',
    vision_du_monde: 'Les systèmes logistiques fonctionnent quand toutes les parties sont coordonnées. Son travail est la coordination. Le sens de ce qu\'il coordonne est une question pour d\'autres niveaux hiérarchiques.',
  },

  histoire: {
    enfance: {
      titre: 'La logistique',
      contenu: 'Formé dans l\'administration logistique dans l\'Isthme. Il avait travaillé pour des entreprises commerciales avant d\'être approché par la Convergence — qui avait besoin de ses compétences pour des flux qu\'elle ne pouvait pas confier à des logisticiens commerciaux ordinaires.',
    },
    arrivee: {
      titre: 'La Convergence',
      contenu: 'La Convergence lui avait présenté son rôle comme la coordination de flux de personnes vulnérables vers des "sites de protection". Il avait accepté l\'offre — les conditions de travail étaient meilleures et le travail correspondait à ses compétences.',
    },
    premier_conflit: {
      titre: 'Les perturbations',
      contenu: 'Des perturbations dans ses flux — des extractions Dissidentes qui récupéraient des Élus avant qu\'ils atteignent les sites — avaient commencé à affecter ses métriques. Il avait signalé les perturbations à Rhavel. Il ne savait pas exactement pourquoi ces Élus étaient "récupérés".',
    },
    revelation: {
      titre: 'Ce qu\'il n\'a pas demandé',
      contenu: 'Il avait entendu parler de "Drain" dans une conversation entre membres de la Convergence qu\'il n\'était pas censé entendre. Il n\'avait pas demandé ce que ça signifiait. Il avait préféré ne pas savoir.',
    },
    etat_actuel: {
      titre: 'Le logisticien',
      contenu: 'Il coordonne les flux. Les Élus arrivent aux sites. Il ne demande pas ce qui se passe ensuite.',
    },
  },

  evenements_narratifs: [
    {
      id: 'karevyn_flux',
      titre: 'Le flux perturbé',
      description: 'Karevyn gère les flux de personnes vers les sites de Drain. Si Lysael (63) ou les Dissidentes parviennent à intercepter un flux logistique de Karevyn — à extraire des Élus en transit — Karevyn sera confronté à expliquer les perturbations à la Convergence, révélant potentiellement la nature réelle de son rôle.',
      personnages_impliques: [241, 63],
      declencheur: 'Une interception Dissidente d\'un flux logistique géré par Karevyn',
      consequence: 'Karevyn confronté à la réalité de ce qu\'il coordonne — et exposé à la Convergence comme point de faiblesse logistique',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Logisticien Convergence gérant les flux de personnes vers les sites de Drain dans l\'Isthme. Efficacité logistique rendant le Protocole possible à l\'échelle actuelle. N\'a pas demandé ce que "Drain" signifie.',

  relations: [
    { id: 241, nom: 'Rhavel', type: 'contact', note: 'Responsable des sites de Drain à qui il transmet des personnes.' },
    { id: 63, nom: 'Lysael', type: 'contact', note: 'Activités contre le Protocole créant des perturbations dans ses flux logistiques.' },
  ],

  combat: {
    sorts: [
      'Frappe neutre (Normal) — attaque directe — défense personnelle',
      'Analyse d\'itinéraire (Normal) — identification rapide des routes et des obstacles — avantage logistique',
    ],
  },

  image_prompts: [
    {
      id: 'karevyn_coordination',
      description: 'Karevyn dans un bureau de coordination dans l\'Isthme — un Homme-Lien de 39 ans avec des cartes de routes et des listes de noms. Il marque des cases et des horaires. Les noms sur ses listes sont des Élus. Il les voit comme des entrées logistiques. Son expression est concentrée et ordinaire.',
      style: 'réaliste Homme-Lien logisticien Convergence, Isthme, flux de personnes vers sites de Drain, abstraction logistique, Protocole d\'Identification',
    },
  ],

  lore_long: `Karevyn gère les flux logistiques de personnes vers les sites de Drain de la Convergence dans l'Isthme. Son travail est la coordination — des routes, des horaires, des relais.

Ces personnes sont des Élus destinés au Protocole d'Identification. Il ne s'est pas confronté à ce que ça signifie pour elles.

Il a entendu le mot "Drain" dans une conversation qu'il n'était pas censé entendre. Il n'a pas demandé ce que ça signifiait.`,
};

export default karevyn;
