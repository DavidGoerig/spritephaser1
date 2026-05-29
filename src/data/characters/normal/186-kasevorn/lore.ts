import type { PersonnageLoreComplet } from '../../../lore-types';

const kasevorn: PersonnageLoreComplet = {
  id: 186,
  nom: 'Kasevorn',
  element: 'Normal',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Homme-Lien de 49 ans, officier de recensement — corpulence bureaucratique, tenue impériale administrative. Il ressemble exactement à son rôle.',
    peau: 'Ton pâle avec une qualité de quelqu\'un qui passe ses journées à compter des personnes plutôt qu\'à les rencontrer.',
    yeux: 'Gris avec une qualité de quelqu\'un dont le travail consiste à noter des noms sans s\'attacher aux personnes qui les portent.',
    vetements: 'Tenue officielle impériale de recensement — identification claire, fonction visible.',
    signes_particuliers: 'Son registre de recensement est la source principale que Lysael (63) utilise pour ses recherches sur les enfants de Virex. Il ignore que ses données sont utilisées à cette fin.',
  },

  psychologie: {
    dominante: 'Officier de recensement impérial dans l\'Isthme. Il collecte et maintient les données démographiques de la population de Virex et des environs. Son registre est exhaustif — il fait son travail avec précision. Il ignore que ses données alimentent des recherches sur les enfants de Virex.',
    mecanisme_de_defense: 'Le devoir administratif sans contexte politique. Il collecte des données démographiques — c\'est son mandat. Ce que l\'Empire fait de ces données appartient aux niveaux hiérarchiques supérieurs. Il maintient ses registres avec précision.',
    contradiction_interne: 'Ses données précises permettent à la fois à l\'Empire de localiser des Élus potentiels et à Lysael de les protéger. Il est un contributeur inadvertant aux deux côtés d\'un même conflit. Sa précision administrative alimente des usages qu\'il ne contrôle pas.',
    rapport_aux_autres: 'Lysael (63) utilise ses données — sans qu\'il le sache. Thyven (62) est dans son réseau hiérarchique impérial — c\'est à lui que ses registres remontent officiellement.',
    vision_du_monde: 'Un registre précis est un registre utile. L\'utilité est determinée par le mandat. Son mandat est le recensement. Il le fait bien.',
  },

  histoire: {
    enfance: {
      titre: 'L\'administration impériale',
      contenu: 'Recruté par l\'Empire à 26 ans pour ses aptitudes administratives. Il avait commencé par des registres commerciaux avant d\'être transféré aux registres de population.',
    },
    arrivee: {
      titre: 'Virex',
      contenu: 'Assigné à Virex à 38 ans pour le recensement complet de la région. Il avait créé un registre exhaustif en 3 ans — des données sur chaque résident, incluant des indicateurs démographiques qui permettaient de recroiser avec des données élémentaires.',
    },
    premier_conflit: {
      titre: 'La demande d\'accès',
      contenu: 'Quelqu\'un avait demandé accès à son registre sans autorisation impériale officielle. Il avait refusé. La demande avait été formulée différemment via des canaux officiels. Il avait fourni les données dans le cadre de sa mission.',
    },
    revelation: {
      titre: 'L\'usage des données',
      contenu: 'Il avait entendu que des personnes avaient été localisées via des données démographiques similaires aux siennes. Il n\'avait pas demandé si c\'était ses données. Il n\'avait pas voulu savoir.',
    },
    etat_actuel: {
      titre: 'Le recenseur',
      contenu: 'Il recense. Il maintient. Il transmet à Thyven. Il ne demande pas à quoi ça sert.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kasevorn_registre',
      titre: 'La source inadvertante',
      description: 'Kasevorn est la source principale de données que Lysael (63) utilise pour localiser et protéger les enfants de Virex. Si l\'Empire découvre que ses registres alimentent des recherches Dissidentes — ou si ses données sont altérées pour protéger des enfants de Virex — sa position comme source fiable pour les deux parties sera compromise.',
      personnages_impliques: [63, 62],
      declencheur: 'L\'Empire découvrant que les données de Kasevorn alimentent les recherches de Lysael',
      consequence: 'Kasevorn suspect sans avoir fait quoi que ce soit d\'intentionnel — et sa valeur comme source neutre perdue pour Lysael',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Officier de recensement impérial. Son registre est la source principale de Lysael (63) sur les enfants de Virex. Il ignore cet usage. Contributeur inadvertant aux deux côtés.',

  relations: [
    { id: 63, nom: 'Lysael', type: 'contact', note: 'Utilise ses données pour ses recherches sur les enfants de Virex — sans qu\'il le sache.' },
    { id: 62, nom: 'Thyven', type: 'hierarchie', note: 'Hiérarchie impériale locale recevant ses registres officiellement.' },
  ],

  combat: {
    sorts: [
      'Frappe neutre (Normal) — attaque directe — défense personnelle',
      'Endurance administrative (Normal) — résistance prolongée — survie',
    ],
  },

  image_prompts: [
    {
      id: 'kasevorn_registre',
      description: 'Kasevorn dans son bureau de recensement à Virex — un Homme-Lien de 49 ans qui note des données dans un registre exhaustif. Sur son bureau, des fiches avec des noms, des adresses, des indicateurs démographiques. Il ne sait pas que Lysael (63) accède à des données similaires pour protéger certaines de ces personnes. Il fait son travail.',
      style: 'réaliste Homme-Lien officier de recensement impérial, Virex, registre démographique, usage inadvertant, données neutres',
    },
  ],

  lore_long: `Kasevorn maintient le registre de recensement impérial de Virex et de l'Isthme. Son registre est exhaustif et précis.

C'est la source principale que Lysael (63) utilise pour localiser et suivre les enfants de Virex. Il ne le sait pas.

Il fait son travail. Il transmet ses données à Thyven (62). Il ne demande pas à quoi elles servent.`,
};

export default kasevorn;
