import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrkorn: PersonnageLoreComplet = {
  id: 354,
  nom: 'Thyrkorn',
  element: 'Normal',
  element2: 'Combat',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Moyen, avec une invisibilité sociale cultivée — il est le genre de personne qu\'on oublie d\'avoir vu dans une pièce. Ce n\'est pas de la magie. C\'est de la pratique.',
    peau: 'Brun neutre Homme-Lien — ni clair ni foncé, dans la moyenne de la région. Il a choisi sa façon de se présenter pour maximiser l\'anonymat.',
    yeux: 'Brun ordinaire. Il les utilise pour lire les espaces logistiques — combien de personnes peuvent passer, par où, dans quel délai.',
    vetements: 'Tenue de travail standard de l\'Isthme — le genre de tenue que portent des centaines de personnes dans la région. Sans marqueur, sans distinction.',
    signes_particuliers: 'Il parle de logistique en termes de temps et de volume. "3 personnes, 40 minutes, par la route nord." La précision de ses estimations est sa réputation.',
  },

  psychologie: {
    dominante: 'Organisation des extractions depuis l\'Isthme pour les Dissidentes — déplacement de personnes, de ressources et d\'informations depuis des zones sous contrôle vers des zones Dissidentes. La logistique est la structure qui permet aux opérations d\'exister.',
    mecanisme_de_defense: 'La documentation minimale. Ce qui n\'est pas écrit ne peut pas être trouvé. Ses plans sont dans sa tête. Ses contacts sont dans sa mémoire. Ses routes sont observées, pas notées.',
    contradiction_interne: 'Sa valeur pour les Dissidentes est sa connaissance — des routes, des contacts, des timings. Cette connaissance est dans sa tête. Si quelque chose lui arrivait, les extractions seraient considérablement compromises. Il n\'a pas transmis ces informations de façon systématique. Il a commencé à envisager de le faire.',
    rapport_aux_autres: 'Vethyskel (274) est son contact Dissident pour les ressources et les décisions d\'escalade. Aelthys (268) est un contact opérationnel pour les extractions dans les zones qu\'il ne couvre pas directement.',
    vision_du_monde: 'Les gens doivent pouvoir se déplacer. Quand ils ne peuvent pas, il crée des façons de le faire. C\'est concret, mesurable, et le résultat est des personnes en sécurité.',
  },

  histoire: {
    enfance: {
      titre: 'Le logisticien de marché',
      contenu: 'À 16 ans, il avait travaillé dans un réseau de distribution de produits dans l\'Isthme — un réseau qui naviguait les zones de contrôle impérial et Confédération pour approvisionner des marchés locaux. Il avait appris à optimiser des routes en temps réel selon des contraintes variables.',
    },
    arrivee: {
      titre: 'La première extraction',
      contenu: 'À 27 ans, Vethyskel (274) lui avait demandé d\'organiser le déplacement d\'un Élu depuis Virex vers une zone sûre. Il avait appliqué la même logique que pour les produits de marché — route, timing, couverture. L\'Élu était arrivé. Il avait compris que ses compétences s\'appliquaient à des personnes autant qu\'à des caisses.',
    },
    premier_conflit: {
      titre: 'Le checkpoint supplémentaire',
      contenu: 'À 32 ans, Thyrkael (351) avait installé un nouveau checkpoint qui bloquait une de ses routes d\'extraction régulières. Il avait recalculé en 4 heures et identifié une route alternative. Le timing de la prochaine extraction avait augmenté de 2 heures. Il avait informé Vethyskel. Il avait noté que les checkpoints s\'ajoutaient plus vite qu\'il ne pouvait les contourner indéfiniment.',
    },
    revelation: {
      titre: 'La connaissance concentrée',
      contenu: 'Aelthys (268) lui avait dit directement : si quelque chose t\'arrivait, personne d\'autre ne sait ce que tu sais. Ce n\'était pas une question. C\'était un état des lieux. Il avait commencé à envisager comment transmettre ses connaissances — routes, contacts, timings — de façon à ce que ça reste opérationnel sans que ça devienne un document qu\'on peut trouver.',
    },
    etat_actuel: {
      titre: 'Les 4 extractions en cours',
      contenu: 'Il coordonne 4 extractions actives — 2 en cours d\'exécution, 1 en préparation, 1 en attente d\'une information sur la destination. Les 4 checkpoints de Thyrkael ont modifié les routes de 3 de ces 4 extractions. Il gère. Il n\'a pas encore demandé d\'escalade à Vethyskel.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrkorn_transmission_connaissance',
      titre: 'Le problème de la connaissance concentrée',
      description: 'Il commence à envisager de transmettre ses connaissances logistiques — routes, contacts, timings — pour que les extractions puissent continuer si quelque chose lui arrivait. Mais toute transmission crée un vecteur de compromission. Il cherche une méthode qui transmette sans créer de document unique et centralisé.',
      personnages_impliques: [274, 268],
      declencheur: 'Réalisation par Aelthys que les connaissances de Thyrkorn sont uniquement dans sa tête',
      consequence: 'Transmission en cours de planification — tension entre continuité et sécurité',
    },
    {
      id: 'thyrkorn_checkpoints_pression',
      titre: 'Les checkpoints qui s\'accumulent',
      description: '4 checkpoints de Thyrkael (351) ont modifié les routes de 3 des 4 extractions actives. Chaque nouveau checkpoint réduit les options. Il n\'a pas encore atteint la limite où les extractions deviennent impossibles. Mais le rythme d\'installation est supérieur à son rythme de recalcul des alternatives.',
      personnages_impliques: [274],
      declencheur: 'Accumulation de checkpoints impériaux réduisant les routes d\'extraction',
      consequence: 'Pression logistique croissante — point de rupture non encore atteint mais visible',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Logisticien des extractions Dissidentes dans l\'Isthme. Ses connaissances des routes et contacts sont concentrées dans sa tête — un risque opérationnel identifié. Les checkpoints de Thyrkael réduisent progressivement ses options.',

  relations: [
    { id: 274, nom: 'Vethyskel', type: 'allié', note: 'Contact Dissident pour les ressources et les décisions d\'escalade. Pas encore sollicité pour l\'escalade actuelle.' },
    { id: 268, nom: 'Aelthys', type: 'allié', note: 'Contact opérationnel pour les zones non couvertes directement. A signalé le problème de la connaissance concentrée.' },
  ],

  combat: {
    sorts: [
      'Frappe de dégagement (Combat) — coup optimisé pour créer un espace de fuite plutôt qu\'un engagement — extraction en combat',
      'Endurance logistique (Normal) — maintien des capacités cognitives sous stress prolongé — planification en conditions difficiles',
      'Couverture de terrain (Normal + Combat) — utilisation du terrain pour masquer un déplacement — extraction discrète',
    ],
  },

  image_prompts: [
    {
      id: 'thyrkorn_planification',
      description: 'Thyrkorn dans un espace quelconque de l\'Isthme — pas un bureau, une salle ordinaire. Il ne regarde pas de document. Il regarde au loin, en train de calculer mentalement. Il tient une tasse. Son expression est concentrée sans être tendue. C\'est son état normal.',
      style: 'réaliste logisticien Homme-Lien, planification mentale, espace ordinaire de l\'Isthme, aucun document visible',
    },
  ],

  lore_long: `Thyrkorn organise les extractions Dissidentes dans l'Isthme. Ses connaissances — routes, contacts, timings — sont dans sa tête. Pas de documents.

4 extractions actives. Les 4 checkpoints de Thyrkael (351) ont modifié les routes de 3 d'entre elles. Il gère. Le rythme d'installation des checkpoints est supérieur à son rythme de recalcul.

Aelthys (268) lui a dit directement : si quelque chose t'arrivait, personne d'autre ne sait ce que tu sais. Il commence à planifier une transmission. Sans document centralisé.`,
};

export default thyrkorn;
