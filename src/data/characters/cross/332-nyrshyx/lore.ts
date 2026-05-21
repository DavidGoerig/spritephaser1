import type { PersonnageLoreComplet } from '../../../lore-types';

const nyrshyx: PersonnageLoreComplet = {
  id: 332,
  nom: 'Nyrshyx',
  element: 'Ténèbres',
  element2: 'Insecte',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Élancé, avec une économie de mouvement qui indique quelqu\'un habitué à agir vite et à disparaître. Pas nerveux — précis.',
    peau: 'Gris-brun Umbrien avec des marques d\'acide cicatrisées aux mains et aux avant-bras. Les marques sont plus nombreuses que ce que la prudence devrait permettre.',
    yeux: 'Brun-orange inhabituels pour un Umbrien. Ils réfléchissent légèrement dans l\'obscurité — une caractéristique qu\'il masque quand il opère.',
    vetements: 'Traité contre les acides à haute concentration. Coutures renforcées aux zones de contact avec les conteneurs d\'insectes. Il change de tenue régulièrement — les résidus acides finissent par dégrader les matériaux.',
    signes_particuliers: 'Il porte ses insectes dans des conteneurs scellés sous sa tenue — on ne les voit pas mais on peut parfois entendre un léger bruit de vibration quand il est immobile.',
  },

  psychologie: {
    dominante: 'Neutralisation d\'équipements impériaux via insectes acides. Les phagotes — insectes Umbriens à sécrétions corrosives — peuvent rendre inutilisable tout matériel non protégé spécifiquement contre eux en quelques heures.',
    mecanisme_de_defense: 'L\'objectif matériel. Il neutralise des équipements, pas des personnes. Cette distinction lui permet de maintenir une limite entre sabotage et autre chose. Il vérifie régulièrement que la distinction tient.',
    contradiction_interne: 'Un équipement neutralisé peut mettre des opérateurs en danger — par défaillance, par perte de capacité de communication, par absence d\'outil d\'urgence. Il le sait. Il a fixé une règle : pas d\'équipements de sécurité, pas d\'équipements médicaux. Il a respecté cette règle jusqu\'à présent.',
    rapport_aux_autres: 'Vethis (46) désigne les cibles et coordonne les opérations dans le réseau Dissident de Vel\'Nox. Talevyn (112) est un contact pour les matériaux nécessaires à l\'entretien de ses insectes — nourriture, conteneurs, produits de neutralisation d\'acide.',
    vision_du_monde: 'Les équipements impériaux à Vel\'Nox sont des outils de contrôle. Les rendre inutilisables ralentit le contrôle. C\'est concret, mesurable, et il peut le faire.',
  },

  histoire: {
    enfance: {
      titre: 'La découverte des phagotes',
      contenu: 'À 14 ans, il avait trouvé une colonie de phagotes dans les niveaux inférieurs de Vel\'Nox — des insectes à sécrétions acides que la plupart des Umbriens évitaient. Il avait étudié leurs sécrétions. Il avait découvert que différentes espèces produisaient des acides aux compositions différentes, utiles pour des matériaux différents.',
    },
    arrivee: {
      titre: 'Le premier sabotage',
      contenu: 'À 20 ans, Vethis (46) l\'avait contacté après avoir entendu parler de ses phagotes. Elle lui avait proposé une cible : un relais de communication impérial dans un quartier de Vel\'Nox. Il avait neutralisé le relais en 4 heures. Le relais avait été remplacé 3 semaines plus tard. Il avait noté le délai de remplacement.',
    },
    premier_conflit: {
      titre: 'La règle des équipements',
      contenu: 'À 25 ans, Vethis lui avait demandé de neutraliser un poste de premiers soins impérial. Il avait refusé. Vethis avait reformulé la cible — les équipements de communication du poste, pas les équipements médicaux. Il avait accepté la reformulation. Il avait neutralisé uniquement la communication.',
    },
    revelation: {
      titre: 'La composition des acides',
      contenu: 'Talevyn (112) lui avait demandé s\'il pouvait développer un acide spécifique à un alliage utilisé dans les nouvelles structures impériales. Il avait étudié l\'alliage avec des échantillons que Talevyn avait fournis. Il avait développé un croisement de phagotes qui produisait l\'acide adapté. Le processus avait pris 4 mois.',
    },
    etat_actuel: {
      titre: 'Les 3 opérations en cours',
      contenu: 'Il a 3 opérations actives désignées par Vethis (46). La première est une opération standard sur un équipement de surveillance. La deuxième est un équipement de traitement de données de la Convergence — plus complexe car les matériaux sont protégés contre des acides standard. La troisième est en attente — Vethis n\'a pas encore précisé la cible finale.',
    },
  },

  evenements_narratifs: [
    {
      id: 'nyrshyx_cible_convergence',
      titre: 'L\'équipement Convergence',
      description: 'La deuxième opération active cible un équipement de traitement de données de la Convergence. Les matériaux de la Convergence sont protégés contre les acides standard — il a besoin d\'une composition spécifique. Il teste des hybrides de phagotes depuis 2 semaines. Il n\'a pas encore trouvé la bonne composition. Vethis a précisé que c\'est prioritaire.',
      personnages_impliques: [46, 112],
      declencheur: 'Cible Convergence avec protection acide avancée désignée par Vethis',
      consequence: 'Développement de composition acide en cours — délai opérationnel non prévisible',
    },
    {
      id: 'nyrshyx_regle_medicale',
      titre: 'La règle et ses limites',
      description: 'Il a une règle : pas d\'équipements de sécurité, pas d\'équipements médicaux. Cette règle a été testée une fois — refus et reformulation. Il ne sait pas si elle sera testée à nouveau. La pression opérationnelle tend à élargir la définition de "cible légitime". Il surveille la reformulation des demandes de Vethis.',
      personnages_impliques: [46],
      declencheur: 'Demande refusée sur équipements médicaux',
      consequence: 'Règle maintenue — pression continue, équilibre dépendant de la formulation des demandes',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Saboteur Dissident utilisant des insectes acides pour neutraliser des équipements impériaux et de la Convergence dans Vel\'Nox. Ses phagotes peuvent cibler des matériaux spécifiques avec une précision croissante.',

  relations: [
    { id: 46, nom: 'Vethis', type: 'allié', note: 'Désigne les cibles et coordonne les opérations. A reformulé une demande refusée. Pression continue sur le périmètre.' },
    { id: 112, nom: 'Talevyn', type: 'allié', note: 'Fournit matériaux d\'entretien et échantillons pour développement d\'acides spécifiques.' },
  ],

  combat: {
    sorts: [
      'Nuée corrosive (Insecte) — déploiement d\'un essaim de phagotes sur un équipement ou une zone — dégradation rapide des matériaux',
      'Manteau d\'ombre (Ténèbres) — dissimulation de sa présence dans les zones peu éclairées — infiltration silencieuse',
      'Acide ciblé (Insecte + Ténèbres) — guidage d\'un phagote unique sur un point de faiblesse précis — sabotage chirurgical',
    ],
  },

  image_prompts: [
    {
      id: 'nyrshyx_sabotage',
      description: 'Nyrshyx dans un couloir de Vel\'Nox, en train de libérer un essaim de phagotes sur un panneau de contrôle impérial. Les insectes se dispersent sur les surfaces métalliques. Il s\'éloigne déjà — il ne reste jamais pour voir les effets. Son expression est neutre, concentrée sur la sortie.',
      style: 'réaliste sabotage umbrien, phagotes sur métal, départ immédiat, Vel\'Nox intérieur',
    },
  ],

  lore_long: `Nyrshyx utilise des phagotes — insectes à sécrétions acides — pour neutraliser des équipements impériaux dans Vel'Nox. Ses insectes peuvent cibler des matériaux spécifiques avec une précision développée sur des années.

Il a une règle : pas d'équipements de sécurité, pas d'équipements médicaux. Elle a été testée une fois. Elle a tenu.

Vethis (46) désigne les cibles. Il neutralise. Il ne sait pas toujours ce qui arrive après.

La deuxième opération active cible un équipement Convergence avec protection anti-acide standard. Il cherche la composition depuis 2 semaines. Vethis a dit prioritaire.

La troisième opération est en attente. Il ne sait pas encore ce que c'est.`,
};

export default nyrshyx;
