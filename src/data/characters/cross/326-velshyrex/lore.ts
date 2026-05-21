import type { PersonnageLoreComplet } from '../../../lore-types';

const velshyrex: PersonnageLoreComplet = {
  id: 326,
  nom: 'Velshyrex',
  element: 'Spectre',
  element2: 'Ténèbres',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Difficile à évaluer — il semble changer légèrement selon l\'angle de vue. Ce n\'est pas une illusion. C\'est le Spectre primaire qui affecte la façon dont les autres le perçoivent.',
    peau: 'Presque blanc, translucide par zones. Des veinures sombres visibles sous la peau aux bras et au cou — les ombres Ténèbres qui ancrent sa présence physique.',
    yeux: 'Blancs avec des pupilles grises. Ils voient dans les deux couches simultanément — ce qu\'il voit est différent de ce que les autres voient dans le même espace.',
    vetements: 'Minimaliste, souvent à moitié visible — ses vêtements s\'adaptent à sa présence dans les deux couches. Certaines parties sont physiquement présentes, d\'autres ne le sont qu\'à moitié.',
    signes_particuliers: 'Les personnes qui essayent de le regarder directement pendant trop longtemps ont des vertiges. Ce n\'est pas un effet intentionnel — c\'est ce que ça fait de regarder quelqu\'un qui existe dans deux espaces.',
  },

  psychologie: {
    dominante: 'Navigation entre les zones interdites aux vivants ordinaires. Les zones les plus profondes de Vel\'Nox ont des parties qui ne sont accessibles qu\'à ceux qui peuvent traverser la frontière spectrale. Il y va parce que ces zones ont des choses.',
    mecanisme_de_defense: 'L\'ambiguïté de sa nature. Les gens ne savent pas exactement ce qu\'il est — pas mort, pas entièrement vivant, quelque chose d\'autre. Cette ambiguïté le protège des classifications.',
    contradiction_interne: 'Il traverse des zones interdites aux vivants. Les raisons de l\'interdiction sont variées — danger physique, présences spectrales instables, zones de mort récente. Certaines de ces raisons sont légitimes. Il traverse quand même.',
    rapport_aux_autres: 'Velsa (58) est la personne qui lui a appris à naviguer les zones spectrales de Vel\'Nox — une Umbrien beaucoup plus ancienne avec une maîtrise du Spectre qu\'il n\'a pas atteinte. Nyrreth (47) le consulte parfois sur les personnes qui ont eu des expériences spectrales involontaires.',
    vision_du_monde: 'La frontière entre les vivants et les morts n\'est pas un mur. C\'est une zone de transit que la plupart des gens ne savent pas traverser. Il sait traverser.',
  },

  histoire: {
    enfance: {
      titre: 'L\'accident de frontière',
      contenu: 'À 8 ans, une crise de Spectre l\'avait poussé de l\'autre côté de la frontière pendant 3 heures. Il n\'en avait aucun souvenir — juste un vide de 3 heures et une façon différente de voir ensuite. Velsa (58) l\'avait trouvé, à son retour, errant dans un marché de Vel\'Nox en regardant des choses que personne d\'autre ne voyait.',
    },
    arrivee: {
      titre: 'L\'apprentissage avec Velsa',
      contenu: 'Velsa (58) l\'avait pris avec elle pendant 5 ans. Pas un apprentissage formel — une cohabitation où il avait observé comment elle naviguait les deux couches. À 18 ans, il avait développé sa propre façon de faire, différente de la sienne mais stable.',
    },
    premier_conflit: {
      titre: 'La zone interdite',
      contenu: 'À 24 ans, il avait traversé une zone de Vel\'Nox physiquement inaccessible — un espace de mort ancienne dont les présences spectrales n\'avaient pas encore traversé. Il y avait des choses là-dedans — des informations, des objets, des présences qui attendaient quelque chose. Il était revenu avec des informations qu\'il n\'avait pas su à qui donner.',
    },
    revelation: {
      titre: 'Les zones des défunts',
      contenu: 'Les Trois Couches de Vel\'Nox avaient une couche supplémentaire que peu de vivants percevaient — les zones des personnes mortes qui n\'avaient pas traversé. Ces zones contenaient des informations sur les vies de ceux qui y résidaient. Il avait décidé de les cartographier. Il n\'était pas sûr que c\'était son rôle. C\'était son travail.',
    },
    etat_actuel: {
      titre: 'La cartographie des zones spectrales',
      contenu: 'Il a cartographié 14 zones spectrales accessibles dans Vel\'Nox — des zones qui ne sont pas dans les plans officiels de la ville. Nyrreth (47) lui a demandé une consultation sur 2 personnes qui avaient eu des expériences dans une de ces zones. Il y est allé avec elle. C\'était la première fois qu\'il amenait quelqu\'un dans une de ses zones.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velshyrex_14_zones',
      titre: 'Les zones hors plans officiels',
      description: '14 zones spectrales cartographiées qui ne sont pas dans les plans officiels de Vel\'Nox. Certaines contiennent des informations sur des personnes mortes — des informations qui n\'existent nulle part ailleurs. Sa cartographie est la seule trace de ces espaces. Il n\'a pas décidé quoi en faire.',
      personnages_impliques: [58, 47],
      declencheur: 'Capacité unique à naviguer les zones spectrales de Vel\'Nox',
      consequence: 'Cartographie unique d\'espaces non officiels — informations sur des défunts, usage non décidé',
    },
    {
      id: 'velshyrex_nyrreth_consultation',
      titre: 'La première co-navigation',
      description: 'Nyrreth (47) l\'a accompagné dans une zone spectrale pour une consultation sur 2 personnes qui avaient eu des expériences involontaires là-dedans. C\'était la première fois qu\'il amenait quelqu\'un dans ses zones. Nyrreth avait une capacité suffisante pour y entrer avec sa guidance. La consultation avait été utile — les 2 personnes ont pu comprendre ce qui leur était arrivé.',
      personnages_impliques: [47],
      declencheur: 'Demande de consultation de Nyrreth sur des cas d\'exposition spectrale involontaire',
      consequence: 'Première co-navigation — possibilité de consultations supplémentaires ouvertes',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Navigateur des zones spectrales de Vel\'Nox. Sa cartographie des espaces non officiels est unique. Les informations qu\'il y trouve sur les défunts n\'existent nulle part ailleurs.',

  relations: [
    { id: 58, nom: 'Velsa', type: 'mentor', note: 'L\'a formé par cohabitation. Sa maîtrise du Spectre dépasse la sienne. Référence ancienne.' },
    { id: 47, nom: 'Nyrreth', type: 'allié', note: 'Le consulte sur les cas d\'exposition spectrale involontaire. A co-navigué une zone avec lui.' },
  ],

  combat: {
    sorts: [
      'Traversée spectrale (Spectre) — franchissement d\'une barrière physique via la couche spectrale — passage offensif ou défensif',
      'Présence instable (Spectre) — projection d\'une instabilité spectrale sur une zone — désorientation des adversaires',
      'Ancrage d\'ombre (Ténèbres) — maintien de sa présence physique dans un espace à dominante spectrale — stabilisation',
    ],
  },

  image_prompts: [
    {
      id: 'velshyrex_zone_spectrale',
      description: 'Velshyrex dans une zone spectrale de Vel\'Nox — un espace qui n\'est pas sur les plans officiels. Sa silhouette est partiellement translucide. Autour de lui, des présences diffuses que lui seul perçoit clairement. Il cartographie — pas avec un instrument, en mémorisant.',
      style: 'réaliste spectral-physique, espace hors plans, présences diffuses visibles, cartographie mémorielle',
    },
  ],

  lore_long: `Velshyrex navigue les zones de Vel'Nox interdites aux vivants ordinaires. Il existe simultanément dans deux couches.

Velsa (58) l'a formé par cohabitation. Sa maîtrise du Spectre dépasse la sienne — il a développé sa propre méthode, différente.

14 zones spectrales cartographiées qui ne sont pas dans les plans officiels de Vel'Nox. Ces zones contiennent des informations sur des personnes mortes qui n'existent nulle part ailleurs. Il n'a pas décidé quoi en faire.

Nyrreth (47) l'a accompagné dans une zone pour une consultation. C'était la première fois qu'il amenait quelqu'un dans ses espaces. Ça a fonctionné. Il n'a pas décidé si c'est une pratique à étendre.`,
};

export default velshyrex;
