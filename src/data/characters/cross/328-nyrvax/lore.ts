import type { PersonnageLoreComplet } from '../../../lore-types';

const nyrvax: PersonnageLoreComplet = {
  id: 328,
  nom: 'Nyrvax',
  element: 'Spectre',
  element2: 'Ténèbres',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Difficile à estimer — il semble plus ou moins présent selon les situations. Physiquement compact quand il veut l\'être. Plus diffus quand il ne fait pas attention.',
    peau: 'Gris très pâle Umbrien avec une translucidité quasi totale par zones — les avant-bras, les mains, parfois le cou. L\'élément Spectre primaire affecte profondément sa présence physique.',
    yeux: 'Blanc-gris. Voient les deux couches en permanence — les morts et les vivants dans le même espace.',
    vetements: 'Tenue simple, souvent en train de se réparer — le contact répété avec les zones spectrales use les matériaux. Il a appris à coudre.',
    signes_particuliers: 'Il s\'adresse parfois à des présences que les autres ne voient pas. Pas toujours — il choisit ses moments. Mais dans une conversation avec lui, il arrive qu\'il fasse une pause pour répondre à quelque chose que lui seul entend.',
  },

  psychologie: {
    dominante: 'Guidance des morts-errants vers leur passage final dans les Trois Couches. Les morts qui ne savent pas qu\'ils sont morts, ou qui refusent de traverser, s\'accumulent dans les niveaux intermédiaires de Vel\'Nox. Il les aide à aller là où ils doivent aller.',
    mecanisme_de_defense: 'La distinction entre les morts et les rôles qu\'ils jouent encore. Certains morts ont des informations importantes pour les vivants. Il leur permet de les transmettre avant de les guider. Il ne fait pas de favoritisme — tous finissent par traverser.',
    contradiction_interne: 'Son rôle n\'est pas officiel. Personne ne l\'a nommé guide des morts. Il l\'est devenu parce qu\'il pouvait le faire et que personne d\'autre ne le faisait. La légitimité de ce rôle est une question qu\'il n\'a pas résolue.',
    rapport_aux_autres: 'Vethis (46) — Dissident ancienne de Vel\'Nox — le consulte régulièrement sur les personnes mortes récemment dont les morts-errants pourraient savoir des choses. Velsa (58) est la personne qui lui a appris à naviguer les zones spectrales — elle est plus vieille et sa compréhension de ces espaces dépasse la sienne.',
    vision_du_monde: 'Les Trois Couches de Vel\'Nox sont réelles et les morts qui s\'y accumulent ont besoin de guide. S\'il ne le fait pas, ils restent là. Une ville qui accumule des morts non guidés devient autre chose.',
  },

  histoire: {
    enfance: {
      titre: 'La première rencontre',
      contenu: 'À 14 ans, il avait rencontré un mort-errant pour la première fois — un vieil Umbrien qui errait dans son quartier sans savoir qu\'il était mort depuis 3 semaines. Il lui avait parlé. Le vieux l\'avait regardé avec étonnement — il n\'avait vu personne lui parler depuis sa mort. Nyrvax l\'avait guidé. Il ne savait pas exactement où. Mais le vieux était parti.',
    },
    arrivee: {
      titre: 'L\'apprentissage avec Velsa',
      contenu: 'Velsa (58) l\'avait trouvé errant lui-même — dans les niveaux spectraux de Vel\'Nox, à moitié perdu entre les couches. Elle l\'avait ramené et lui avait appris à distinguer les morts des vivants, les zones stables des zones instables, les passages sûrs des zones de rétention. Elle ne lui avait pas dit de faire ce qu\'il fait — elle lui avait donné les outils pour qu\'il choisisse.',
    },
    premier_conflit: {
      titre: 'Le mort qui ne voulait pas partir',
      contenu: 'À 26 ans, il avait rencontré un mort-errant qui refusait de traverser — un Umbrien qui avait été tué dans des circonstances qu\'il voulait voir résolues avant de partir. Il avait passé 3 semaines à négocier. Il n\'avait pas pu résoudre les circonstances — ce n\'était pas son rôle. Il l\'avait guidé quand même, en lui expliquant qu\'attendre ne changerait pas ce qui s\'était passé. Le mort avait traversé à contrecœur.',
    },
    revelation: {
      titre: 'Les informations des morts',
      contenu: 'Vethis (46) lui avait posé une question : est-ce que certains morts-errants qu\'il avait guidés savaient des choses sur des disparitions récentes dans Vel\'Nox ? Il avait réfléchi. Oui — certains morts savaient pourquoi ils étaient morts et par qui. Ces informations avaient traversé avec eux. Il avait commencé à écouter les morts plus attentivement avant de les guider.',
    },
    etat_actuel: {
      titre: 'Les morts actuels',
      contenu: 'Il suit actuellement 7 morts-errants dans différents stades — certains en cours de dialogue, certains récalcitrants, certains presque prêts à traverser. Vethis (46) lui a demandé si un de ces morts était lié à une disparition récente. Il vérifie.',
    },
  },

  evenements_narratifs: [
    {
      id: 'nyrvax_mort_lie_disparition',
      titre: 'Le mort lié à une disparition',
      description: 'Vethis (46) lui a demandé si un des morts-errants actuels était lié à une disparition récente. Un des 7 morts qu\'il suit a été tué dans des circonstances qui correspondent à ce que Vethis cherche. Il est en dialogue avec ce mort. Le mort connaît des noms. Il n\'a pas encore guidé ce mort vers le passage — il attend d\'avoir transmis les informations à Vethis.',
      personnages_impliques: [46, 58],
      declencheur: 'Question de Vethis sur une disparition récente',
      consequence: 'Information sur une disparition accessible via un mort-errant — transmission avant guidage',
    },
    {
      id: 'nyrvax_accumulation',
      titre: 'Les 7 morts en cours',
      description: 'Il suit 7 morts-errants actuellement. C\'est plus que d\'habitude — généralement 2 à 4. La ville produit plus de morts-errants que d\'ordinaire ces derniers mois. Les raisons peuvent être multiples — instabilité politique, augmentation des actes de violence, changement dans les zones spectrales. Il documente le changement. Il n\'a pas encore d\'interprétation.',
      personnages_impliques: [],
      declencheur: 'Augmentation du nombre de morts-errants dans Vel\'Nox',
      consequence: 'Charge de travail augmentée — signal possible d\'une instabilité non encore identifiée',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Guide des morts-errants dans Vel\'Nox. Son accès aux informations que les morts portent sur leur propre mort est un canal d\'information unique que Vethis (46) commence à utiliser.',

  relations: [
    { id: 46, nom: 'Vethis', type: 'allié', note: 'Le consulte sur ce que les morts savent. A posé la question de la disparition récente. Commence à utiliser sa connexion aux morts comme source.' },
    { id: 58, nom: 'Velsa', type: 'mentor', note: 'L\'a formé à naviguer les zones spectrales. Sa compréhension de ces espaces dépasse la sienne. Référence.' },
  ],

  combat: {
    sorts: [
      'Présence spectrale (Spectre) — invocation d\'une présence de mort-errant comme perturbation — désorientation',
      'Ombre de passage (Ténèbres) — création d\'une zone d\'ombre qui accélère le passage spectral — forçage de transition',
      'Voix des défunts (Spectre) — amplification des résidus spectraux d\'une zone — zone de confusion psychique',
    ],
  },

  image_prompts: [
    {
      id: 'nyrvax_dialogue',
      description: 'Nyrvax debout dans un couloir de Vel\'Nox, en conversation avec une présence que le spectateur voit juste à la limite de la visibilité — un contour lumineux, presque rien. Il parle doucement. Il écoute ce que le contour répond. Il a l\'air de quelqu\'un qui fait quelque chose de difficile avec patience.',
      style: 'réaliste spectral, mort-errant à peine visible, dialogue intime, patience de guide',
    },
  ],

  lore_long: `Nyrvax guide les morts-errants vers leur passage dans les Trois Couches de Vel'Nox. Ce rôle n'est pas officiel. Il est le seul à le faire.

Velsa (58) lui a appris à naviguer les zones spectrales. Elle ne lui a pas dit de faire ce qu'il fait — elle lui a donné les outils.

Vethis (46) lui a posé la question : les morts-errants savent-ils des choses sur les disparitions récentes ? La réponse est oui. Un des 7 morts actuellement en cours de dialogue connaît des noms liés à une disparition que Vethis cherche. Il attend d'avoir transmis les informations avant de guider ce mort.

Il suit 7 morts actuellement — plus que d'habitude. La ville produit plus de morts-errants. Il documente.`,
};

export default nyrvax;
