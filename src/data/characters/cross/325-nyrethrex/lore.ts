import type { PersonnageLoreComplet } from '../../../lore-types';

const nyrethrex: PersonnageLoreComplet = {
  id: 325,
  nom: 'Nyrethrex',
  element: 'Ténèbres',
  element2: 'Spectre',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Élancé, avec une façon d\'exister dans les espaces qui minimise l\'espace occupé physiquement. Il se fait petit sans effort.',
    peau: 'Gris très clair Umbrien avec une translucidité partielle aux avant-bras — l\'élément Spectre qui affecte les zones de contact direct avec les passages. Visiblement différent des Umbriens standard.',
    yeux: 'Gris-vert presque sans couleur. Dans certaines lumières, ils semblent traverser plutôt que regarder.',
    vetements: 'Tenue quasi-inexistante sur les passages spectraux — il a appris à habiller ce qui reste de matériel quand il franchit une frontière spectre/physique. Peu de matériel supplémentaire.',
    signes_particuliers: 'Il peut être à moitié là — partiellement dans la couche spectrale et partiellement physique. Dans cet état, il est visible mais flou. Les gens qui le voient dans cet état préfèrent généralement regarder ailleurs.',
  },

  psychologie: {
    dominante: 'Le passage comme acte de liberté radicale. Si les frontières ne peuvent pas s\'appliquer à lui, il peut franchir ce que les autres ne peuvent pas. Cette capacité a un coût qu\'il gère.',
    mecanisme_de_defense: 'La discipline du retour. Rester trop longtemps dans la couche spectrale affecte l\'ancrage physique. Il a des rituels de retour qu\'il applique strictement.',
    contradiction_interne: 'Il aide des personnes à traverser des zones interdites en les portant partiellement dans la couche spectrale. Cette méthode implique un contact prolongé avec des personnes vivantes dans un espace qui n\'est pas conçu pour elles. Il l\'a fait 47 fois. Les effets à long terme sur les portés sont inconnus.',
    rapport_aux_autres: 'Velath (49) lui confie les passages que les autres méthodes Dissidentes ne peuvent pas couvrir. Syravel (254) est un contact qui lui fournit des informations sur les zones de surveillance spectrale — les endroits où les frontières sont surveillées par des moyens non-physiques.',
    vision_du_monde: 'La frontière est une convention. La couche spectrale ignore les conventions. Il utilise l\'espace entre les conventions pour faire passer ce que les conventions interdisent.',
  },

  histoire: {
    enfance: {
      titre: 'La double couche',
      contenu: 'À 11 ans, manifestation du Spectre secondaire dans un accident — il était tombé dans une zone de frontière spectrale pendant une crise de Ténèbres et avait partiellement traversé. Il n\'était pas mort. Il avait appris ce que ça signifiait de faire partie des deux espaces à la fois.',
    },
    arrivee: {
      titre: 'Le premier passage',
      contenu: 'À 20 ans, il avait aidé une personne à traverser une zone de surveillance impériale qui ne pouvait pas être franchie physiquement. Il avait porté la personne partiellement dans la couche spectrale sur 40 minutes. La personne était passée. La personne avait eu des symptômes légers pendant 3 jours après. Il avait noté les symptômes.',
    },
    premier_conflit: {
      titre: 'Les 47 passages',
      contenu: 'Sur 8 ans, 47 passages. Certains avaient produit des symptômes chez les portés — désorientation, sensations de présences, difficultés à dormir pendant quelques jours à quelques semaines. Ces symptômes disparaissaient. Il ne savait pas si l\'absence de symptômes persistants signifiait absence d\'effets à long terme.',
    },
    revelation: {
      titre: 'La question de Syravel',
      contenu: 'Syravel (254) lui avait posé une question directe : avait-il des données sur les effets à long terme de ses passages sur les portés ? Il avait répondu honnêtement que non. Syravel avait répondu que quelques-uns de ses anciens portés avaient signalé des persistances légères — une sensibilité accrue aux zones spectrales, une capacité à percevoir des choses qu\'ils ne percevaient pas avant. Ni nocif, apparemment. Pas neutre non plus.',
    },
    etat_actuel: {
      titre: 'Le 48ème passage',
      contenu: 'Velath (49) lui a demandé un passage pour le mois prochain — un profil que les méthodes standards ne peuvent pas couvrir. Il a accepté. Il a commencé à demander aux portés d\'envoyer des rapports de santé à Syravel (254) après le passage. Ça n\'est pas exhaustif comme suivi. C\'est mieux que rien.',
    },
  },

  evenements_narratifs: [
    {
      id: 'nyrethrex_effets_persistants',
      titre: 'La sensibilité résiduelle',
      description: 'Syravel (254) a signalé que quelques anciens portés ont développé une sensibilité accrue aux zones spectrales après leurs passages. Pas nocif selon les observations actuelles. Pas neutre. Il a commencé un suivi — demande de rapports de santé à Syravel post-passage. Les données commencent à s\'accumuler. Il ne sait pas encore ce qu\'elles vont montrer.',
      personnages_impliques: [254, 49],
      declencheur: 'Information de Syravel sur des effets persistants observés',
      consequence: 'Suivi santé initié — données en accumulation, conclusion inconnue',
    },
    {
      id: 'nyrethrex_48eme',
      titre: 'Le 48ème passage',
      description: 'Le 48ème passage est prévu — un profil que les méthodes standards ne couvrent pas. Il a accepté. C\'est la première fois qu\'il a intégré une demande de suivi post-passage dans ses conditions. Velath (49) a accepté de transmettre la demande. La personne portée ne sait pas encore qu\'elle participera à un suivi.',
      personnages_impliques: [49],
      declencheur: 'Demande de passage de Velath',
      consequence: 'Premier passage avec protocole de suivi intégré',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Passeur qui utilise la couche spectrale pour franchir des zones interdites. Ses passages ont des effets secondaires inconnus à long terme. Il commence à suivre ces effets.',

  relations: [
    { id: 49, nom: 'Velath', type: 'allié', note: 'Confie les passages que les méthodes standards ne couvrent pas. A accepté la demande de suivi post-passage.' },
    { id: 254, nom: 'Syravel', type: 'allié', note: 'Fournit des informations sur les zones de surveillance spectrale. A signalé les effets persistants sur d\'anciens portés.' },
  ],

  combat: {
    sorts: [
      'Passage partiel (Spectre) — franchissement d\'une barrière physique en traversant la couche spectrale — évasion ou infiltration',
      'Portage spectral (Spectre + Ténèbres) — transport d\'une autre personne à travers une frontière spectrale — passage d\'un tiers',
      'Présence double (Spectre) — existence simultanée dans les deux couches — désorientation des adversaires physiques',
    ],
  },

  image_prompts: [
    {
      id: 'nyrethrex_demi_passage',
      description: 'Nyrethrex à moitié physique, à moitié dans la couche spectrale — sa silhouette est nette d\'un côté et floue de l\'autre. Il est dans un couloir de Vel\'Nox. Une porte fermée est derrière lui — il vient de la traverser partiellement. Son expression est concentrée, pas triomphante.',
      style: 'réaliste spectral-physique, frontière visible dans la silhouette, Vel\'Nox, passage en cours',
    },
  ],

  lore_long: `Nyrethrex porte des personnes à travers des zones interdites en les faisant passer partiellement dans la couche spectrale.

47 passages. Les portés ont des symptômes légers pendant quelques jours. Il ne savait pas si c'était tout.

Syravel (254) l'a informé que quelques anciens portés ont développé une sensibilité accrue aux zones spectrales. Pas nocif selon les observations. Pas neutre non plus.

Il a initié un suivi de santé post-passage. Les données s'accumulent. Il ne sait pas encore ce qu'elles vont montrer.

Le 48ème passage est prévu. C'est le premier avec un protocole de suivi intégré.`,
};

export default nyrethrex;
