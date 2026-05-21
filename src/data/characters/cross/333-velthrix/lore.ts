import type { PersonnageLoreComplet } from '../../../lore-types';

const velthrix: PersonnageLoreComplet = {
  id: 333,
  nom: 'Velthrix',
  element: 'Insecte',
  element2: 'Ténèbres',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Légèrement en dessous de la moyenne Umbrien, avec des mains larges par rapport au reste du corps — des mains qui ont travaillé avec des insectes depuis l\'enfance.',
    peau: 'Gris Umbrien clair avec une légère teinte miel sur les avant-bras — l\'effet à long terme de l\'exposition aux sécrétions de lumivornes, ses insectes principaux.',
    yeux: 'Ambre, inhabituels pour un Umbrien. Il les explique par une ascendance mixte lointaine dont il ne connaît pas le détail.',
    vetements: 'Tablier épais sur une tenue simple — le tablier protège les vêtements des débordements lors des extractions. Des flacons attachés à une ceinture large, chacun étiqueté de sa main.',
    signes_particuliers: 'Il parle peu mais explique beaucoup quand il parle — des informations sur les propriétés de ce qu\'il prépare, les effets attendus, les contre-indications. Ses clients repartent toujours avec plus d\'informations qu\'ils n\'en voulaient.',
  },

  psychologie: {
    dominante: 'Production de préparations à partir de sécrétions d\'insectes nocturnes Umbriens. Ces sécrétions ont des propriétés que les préparations standard des autres espèces n\'ont pas — des effets sur la perception des zones spectrales, sur la résistance aux ombres, sur la durée de conscience dans des environnements à faible lumière.',
    mecanisme_de_defense: 'La documentation complète. Il note tous les effets observés, toutes les contre-indications, tous les incidents. Cette documentation le protège légalement et lui permet de ne pas répéter les mêmes erreurs.',
    contradiction_interne: 'Dravthyr (311) utilise ses sécrétions d\'insectes dans des formules qui servent en partie à des opérations Dissidentes — des préparations pour des personnes qui traversent des zones spectrales dans le cadre de missions. Il fournit les matières premières sans participer aux opérations. La ligne est nette pour lui. Elle l\'est moins si quelqu\'un la regarde de l\'extérieur.',
    rapport_aux_autres: 'Dravthyr (311) est son client principal pour les sécrétions brutes — il les intègre à ses propres formules apothicaires. Tharyn (50) lui achète des préparations finies pour distribution dans son réseau commercial.',
    vision_du_monde: 'Les insectes nocturnes Umbriens produisent des substances que personne d\'autre ne peut produire. Ces substances peuvent aider des personnes dans des situations que les préparations standard ne couvrent pas. C\'est une niche et il la remplit.',
  },

  histoire: {
    enfance: {
      titre: 'Les lumivornes',
      contenu: 'À 10 ans, sa famille élevait des lumivornes pour leur soie — une pratique Umbrien ancienne. Il avait remarqué que les éleveurs développaient une sensibilité accrue aux zones peu éclairées avec le temps. Il avait commencé à étudier les sécrétions des lumivornes. À 16 ans, il avait sa première préparation fonctionnelle.',
    },
    arrivee: {
      titre: 'La boutique',
      contenu: 'À 23 ans, il avait ouvert un atelier à Vel\'Nox — pas une boutique visible, un atelier sur recommandation. Ses premières préparations étaient pour des travailleurs des niveaux inférieurs qui avaient besoin de rester conscients dans des environnements à très faible lumière pendant de longues heures.',
    },
    premier_conflit: {
      titre: 'L\'incident de dosage',
      contenu: 'À 28 ans, un client avait mal suivi les indications de dosage sur une préparation de perception spectrale. L\'effet avait été 3 fois plus intense que prévu. Le client s\'était retrouvé incapable de distinguer les deux couches pendant 2 jours. Il avait modifié ses indications et commencé à refuser les clients qui n\'avaient pas de recommandation d\'un contact connu.',
    },
    revelation: {
      titre: 'Les usages opérationnels',
      contenu: 'Dravthyr (311) lui avait expliqué que certaines de ses sécrétions étaient utilisées dans des préparations pour des personnes qui traversaient des zones spectrales dans le cadre de missions Dissidentes. Il avait déjà su intuitivement que ses matières premières avaient des usages au-delà du soin — les questions de ses clients lui avaient donné des indices. La confirmation explicite avait été différente.',
    },
    etat_actuel: {
      titre: 'Les nouvelles espèces',
      contenu: 'Velnyrath (330) lui a apporté 2 espèces d\'insectes nocturnes qu\'il avait trouvées dans des zones spectrales profondes des Trois Couches — des espèces que Velthrix n\'avait pas encore étudiées. Il est en train d\'analyser leurs sécrétions. Les premières observations suggèrent des propriétés anti-spectrales que ses préparations actuelles n\'ont pas.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velthrix_nouvelles_especes',
      titre: 'Les sécrétions des zones profondes',
      description: 'Velnyrath (330) lui a fourni 2 espèces inconnues trouvées dans des zones spectrales profondes. Les premières analyses suggèrent des propriétés anti-spectrales nouvelles — résistance passive aux détections spectrales, stabilisation de présence dans des environnements à forte densité spectrale. Si ces propriétés se confirment, ses préparations pourront protéger des personnes dans des zones à collecte spectrale active.',
      personnages_impliques: [330, 311],
      declencheur: 'Fourniture de nouvelles espèces par Velnyrath',
      consequence: 'Nouvelles propriétés anti-spectrales potentielles — valeur opérationnelle pour mouvements dans zones Convergence',
    },
    {
      id: 'velthrix_ligne_matiere_premiere',
      titre: 'La position de fournisseur',
      description: 'Il fournit des sécrétions brutes à Dravthyr (311) qui les intègre à des formules pour missions Dissidentes. Il ne participe pas aux missions. Il ne sait pas toujours qui les utilise. La ligne est claire pour lui — il est fournisseur de matières premières, pas opérateur. Elle l\'est moins si quelqu\'un la trace.',
      personnages_impliques: [311, 50],
      declencheur: 'Confirmation par Dravthyr des usages opérationnels des sécrétions',
      consequence: 'Position ambiguë maintenue — fournisseur indépendant de matières premières à valeur opérationnelle',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Apothicaire indépendant produisant des préparations à partir de sécrétions d\'insectes nocturnes Umbriens. Ses matières premières alimentent les formules de Dravthyr pour des opérations Dissidentes et la distribution de Tharyn.',

  relations: [
    { id: 311, nom: 'Dravthyr', type: 'client', note: 'Achète des sécrétions brutes pour ses formules apothicaires. A confirmé les usages opérationnels. Client principal.' },
    { id: 50, nom: 'Tharyn', type: 'client', note: 'Achète des préparations finies pour distribution commerciale. Réseau large.' },
  ],

  combat: {
    sorts: [
      'Brume sensorielle (Insecte) — libération de sécrétions volatiles d\'insectes — perturbation de la perception adverse',
      'Voile des ombres (Ténèbres) — absorption de la lumière réfléchie — réduction de la visibilité dans une zone',
      'Préparation d\'urgence (Insecte + Ténèbres) — concentration de sécrétions anti-spectrales sur lui-même — résistance aux détections dans les zones actives',
    ],
  },

  image_prompts: [
    {
      id: 'velthrix_extraction',
      description: 'Velthrix dans son atelier de Vel\'Nox, en train d\'extraire des sécrétions d\'un lumivorne dans un flacon de précision. L\'atelier est organisé — flacons étiquetés, insectes dans des conteneurs adaptés, notes sur une surface de travail. Il est concentré sur la procédure d\'extraction.',
      style: 'réaliste apothicaire umbrien, atelier organisé, extraction précise, insectes nocturnes',
    },
  ],

  lore_long: `Velthrix produit des préparations apothicaires à partir de sécrétions d'insectes nocturnes Umbriens. Ses préparations agissent sur la perception spectrale, la résistance aux ombres, la conscience dans les zones à faible lumière.

Dravthyr (311) achète ses sécrétions brutes pour des formules qui servent des opérations Dissidentes. Velthrix le sait depuis que Dravthyr le lui a dit. Il est fournisseur, pas opérateur.

Velnyrath (330) lui a apporté 2 espèces inconnues des zones spectrales profondes. Les premières analyses suggèrent des propriétés anti-spectrales nouvelles — résistance passive aux détections. Si ça se confirme, ses préparations pourront couvrir des zones à collecte Convergence active.

Il documente tout. Chaque effet, chaque contre-indication, chaque incident. C'est sa protection et sa méthode.`,
};

export default velthrix;
