import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrvkaelt: PersonnageLoreComplet = {
  id: 384,
  nom: 'Thyrvkaelt',
  element: 'Combat',
  element2: 'Vent',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Éclaireur — léger et rapide, avec des muscles conçus pour l\'accélération plutôt que la puissance brute. Il est difficile à attraper — pas impossible à vaincre si on peut le fixer.',
    peau: 'Brun Homme-Lien avec des marques de course en terrain varié — des cicatrices de chutes à haute vitesse aux genoux et aux coudes.',
    yeux: 'Vert avec une habitude d\'évaluation rapide des terrains et des distances — il calcule des trajectoires en permanence.',
    vetements: 'Tenue minimale conçue pour la vitesse — rien qui crée de la résistance aérienne. Des semelles renforcées pour les terrains difficiles.',
    signes_particuliers: 'Il ne reste jamais immobile — même au repos, il est en mouvement léger. Ses transmissions d\'information sont brèves et directes — il n\'a pas le temps pour les détails inutiles.',
  },

  psychologie: {
    dominante: 'Reconnaissance et transmission d\'informations entre les positions Dissidentes dans l\'Isthme — déplacement rapide entre des points distants pour maintenir la communication et la coordination quand les canaux standard sont compromis.',
    mecanisme_de_defense: 'La vitesse comme protection. Si personne ne peut l\'attraper, personne ne peut l\'interroger. Il fait confiance à sa vitesse d\'abord.',
    contradiction_interne: 'Sa vitesse le protège mais l\'empêche de rester assez longtemps pour comprendre ce qu\'il observe. Il transmet des informations sur des situations qu\'il n\'a vues que quelques secondes. Les erreurs d\'interprétation sont possibles.',
    rapport_aux_autres: 'Caeryn (101) est son contact principal pour les transmissions à longue distance — Caeryn reçoit ses rapports et les redistribue dans les réseaux plus larges. Sarevolt (350) lui a demandé d\'assurer la liaison entre les positions Dissidentes autour de Virex pendant la période de risque.',
    vision_du_monde: 'L\'information circule ou ne circule pas. Si elle circule, la coordination est possible. Si elle ne circule pas, chaque position Dissidente est isolée. Il fait circuler l\'information.',
  },

  histoire: {
    enfance: {
      titre: 'La course des quartiers',
      contenu: 'À 13 ans, il était le plus rapide de son quartier. À 15 ans, le plus rapide entre plusieurs quartiers de l\'Isthme. À 17 ans, il avait commencé à utiliser sa vitesse pour des courses de livraison — un travail qui lui avait appris les routes, les raccourcis, les zones de surveillance.',
    },
    arrivee: {
      titre: 'Le premier transit Dissident',
      contenu: 'À 22 ans, Caeryn (101) l\'avait contacté avec une mission simple : transmettre un message d\'un point à un autre dans un délai qu\'un messager normal n\'aurait pas pu tenir. Il l\'avait tenu. Caeryn lui avait proposé d\'autres missions.',
    },
    premier_conflit: {
      titre: 'L\'erreur d\'observation',
      contenu: 'À 26 ans, il avait transmis une observation sur une position impériale — vue en transit à haute vitesse. Sa description était légèrement incorrecte sur le nombre d\'unités. La décision prise sur la base de son observation avait dû être ajustée. Depuis, il ralentit pour les observations critiques.',
    },
    revelation: {
      titre: 'La demande de Sarevolt',
      contenu: 'Sarevolt (350) lui avait demandé d\'assurer la liaison entre les positions autour de Virex pendant la période de démonstration de Kasevolt (360). Plusieurs liaisons par jour. Des informations critiques sur les mouvements des checkpoints et des unités de Thyrkael (351). C\'était plus que ses missions habituelles de transmission — c\'était de la coordination en temps réel.',
    },
    etat_actuel: {
      titre: 'La liaison de Virex',
      contenu: 'Il fait 8 à 12 transits par jour dans les zones autour de Virex — entre les positions Dissidentes, les points d\'information de Thyrkorn (354), les contacts de Kressombal (379). C\'est une intensité d\'activité qui le rend plus visible aux checkpoints de Thyrkael (351). Il varie ses routes mais il y a des limites.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrvkaelt_visibilite',
      titre: 'Le pattern de déplacement',
      description: '8 à 12 transits par jour dans les zones autour de Virex créent un pattern de déplacement qui, sur plusieurs jours, devient identifiable. Thyrkael (351) a des unités aux checkpoints dont le rôle est de noter les déplacements récurrents. Il varie les routes mais la fréquence des transits crée une signature comportementale même sans route fixe.',
      personnages_impliques: [350, 101],
      declencheur: 'Fréquence de transit élevée créant une signature comportementale identifiable',
      consequence: 'Risque d\'identification comme éclaireur Dissident par observation comportementale',
    },
    {
      id: 'thyrvkaelt_coordination',
      titre: 'La vitesse de la coordination',
      description: 'Sa liaison en temps réel entre les positions Dissidentes permet à Sarevolt (350) et Thyrkorn (354) de réagir aux changements de situation plus vite que les opérations impériales ne peuvent s\'adapter. C\'est l\'avantage opérationnel qu\'il fournit. La démonstration de Kasevolt (360) dans quelques jours va tester cet avantage au maximum.',
      personnages_impliques: [350, 354],
      declencheur: 'Valeur opérationnelle de la coordination en temps réel pendant la période de risque',
      consequence: 'Avantage de réactivité pour les Dissidents — testé au maximum lors de la démonstration de Kasevolt',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Éclaireur Dissident assurant la liaison en temps réel entre les positions autour de Virex. 8 à 12 transits par jour pendant la période de risque liée à la démonstration de Kasevolt. Fréquence créant une signature comportementale potentiellement identifiable.',

  relations: [
    { id: 101, nom: 'Caeryn', type: 'allié', note: 'Contact principal pour les transmissions à longue distance. Reçoit et redistribue les rapports.' },
    { id: 350, nom: 'Sarevolt', type: 'allié', note: 'A demandé la liaison de Virex pendant la période de risque. Coordonne les réactions sur la base de ses transmissions.' },
  ],

  combat: {
    sorts: [
      'Frappe de passage (Combat) — impact à haute vitesse en transit — neutralisation sans arrêt',
      'Rafale de vitesse (Vent) — accélération maximale en ligne directe — dépassement de position adverse',
      'Coup de vent ciblé (Combat + Vent) — frappe combinée à une déflexion d\'air — désorientation et impact simultanés',
    ],
  },

  image_prompts: [
    {
      id: 'thyrvkaelt_transit',
      description: 'Thyrvkaelt en déplacement rapide dans les zones de Virex — une trace de vent visible derrière lui, ses pieds touchant à peine le sol. Il regarde en avant, évalue une route, ajuste sa trajectoire. Une vitesse qui rend les détails de son visage difficiles à distinguer.',
      style: 'réaliste éclaireur Homme-Lien Dissident, vitesse de déplacement, zones de Virex, trace de vent, trajectoire',
    },
  ],

  lore_long: `Thyrvkaelt assure la liaison en temps réel entre les positions Dissidentes autour de Virex. Sa combinaison Combat/Vent le rend presque impossible à intercepter — presque.

8 à 12 transits par jour pendant la période de risque liée à la démonstration de Kasevolt (360). Cette fréquence crée une signature comportementale identifiable malgré la variation des routes.

Sa coordination en temps réel donne à Sarevolt (350) et Thyrkorn (354) un avantage de réactivité qui sera testé au maximum lors de la démonstration.`,
};

export default thyrvkaelt;
