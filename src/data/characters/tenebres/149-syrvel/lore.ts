import type { PersonnageLoreComplet } from '../../../lore-types';

const syrvel: PersonnageLoreComplet = {
  id: 149,
  nom: 'Syrvel',
  element: 'Ténèbres',
  espece: 'Umbrien',
  region: 'Vel\'Nox',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Umbrien de taille moyenne, mobile avec des mouvements conçus pour ne pas être suivis.',
    peau: 'Gris-noir Umbrien avec une luminescence nocturne minimale — il contrôle son rayonnement élémentaire au point de devenir presque invisible dans l\'obscurité.',
    yeux: 'Noirs avec une qualité de calcul de risque permanent.',
    vetements: 'Tenue qui absorbe la lumière — les Umbriens Ténèbres peuvent tisser leurs vêtements avec leur élément pour réduire leur visibilité.',
    signes_particuliers: 'Passeur Dissident spécialisé dans l\'extraction de personnes recherchées par l\'Empire depuis Vel\'Nox. Il ne transporte pas d\'information — il transporte des gens.',
  },

  psychologie: {
    dominante: 'Passeur Dissident à Vel\'Nox. Sa spécialité : extraire des personnes recherchées par l\'Empire — pas en les cachant, mais en les sortant de Vel\'Nox avant que l\'Empire ait eu le temps d\'agir. La vitesse et la discrétion sont ses compétences.',
    mecanisme_de_defense: 'La vitesse comme protection. Une extraction réussie est une extraction rapide — avant que l\'Empire soit en position d\'agir.',
    contradiction_interne: 'Il extrait des gens recherchés par l\'Empire. Certains le méritent — d\'autres peut-être pas. Il ne juge pas. Cette absence de jugement est une compétence professionnelle et une zone inconfortable.',
    rapport_aux_autres: 'Velath (49) est dans son réseau — une ressource de routes alternatives à Vel\'Nox. Vethis (46) est son point de contact Dissident.',
    vision_du_monde: 'L\'Empire cherche. Les gens fuient. Son travail est dans cet espace. La question de la justice de la fuite appartient à ceux qui fuient.',
  },

  histoire: {
    enfance: {
      titre: 'Vel\'Nox',
      contenu: 'Né dans les couches supérieures de Vel\'Nox. Il avait commencé sa vie professionnelle comme passeur d\'information — la transition vers le passage de personnes était naturelle et plus lucrative.',
    },
    arrivee: {
      titre: 'Les Dissidentes',
      contenu: 'Vethis (46) l\'avait intégré dans le réseau Dissident à 30 ans. Ses compétences d\'extraction étaient exactement ce dont les Dissidentes avaient besoin à Vel\'Nox — une cité où l\'Empire cherchait régulièrement des fugitifs.',
    },
    premier_conflit: {
      titre: 'La personne difficile',
      contenu: 'Il avait extrait quelqu\'un dont il avait appris plus tard qu\'il avait commis une violence contre un Umbrien ordinaire. L\'Empire le cherchait pour d\'autres raisons. Il avait eu du mal à intégrer cette information.',
    },
    revelation: {
      titre: 'Le jugement absent',
      contenu: 'Il avait décidé de ne pas juger ce qu\'il extrayait. La ligne à ne pas franchir était claire : il n\'extrayait pas des cibles impériales légitimes. Tout le reste était de la nuance qu\'il n\'avait pas le temps de gérer.',
    },
    etat_actuel: {
      titre: 'L\'extraction',
      contenu: 'Il extrait. Les demandes arrivent via Vethis (46). Il évalue le risque et la faisabilité. Il extrait.',
    },
  },

  evenements_narratifs: [
    {
      id: 'syrvel_extraction',
      titre: 'L\'extraction impossible',
      description: 'Syrvel extrait des personnes recherchées par l\'Empire. Si une demande d\'extraction arrive pour quelqu\'un dont le profil est ambigu — pas clairement innocent, pas clairement coupable — il devra soit faire confiance au réseau Dissident qui envoie la demande, soit refuser. Un refus peut laisser quelqu\'un à la merci de l\'Empire. Une acceptation peut avoir des conséquences imprévues.',
      personnages_impliques: [49, 46],
      declencheur: 'Demande d\'extraction pour un profil ambigu',
      consequence: 'Syrvel confronté à la limite de son absence de jugement',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Passeur Dissident d\'extraction à Vel\'Nox. Extrait des personnes recherchées par l\'Empire. Pas de jugement moral — compétence professionnelle.',

  relations: [
    { id: 49, nom: 'Velath', type: 'contact', note: 'Routes alternatives à Vel\'Nox.' },
    { id: 46, nom: 'Vethis', type: 'contact', note: 'Point de contact Dissident. Transmet les demandes d\'extraction.' },
  ],

  combat: {
    sorts: [
      'Manteau d\'ombre (Ténèbres) — invisibilité dans l\'obscurité — fuite et protection',
      'Choc de ténèbres (Ténèbres) — projection d\'obscurité concentrée — désorientation',
    ],
  },

  image_prompts: [
    {
      id: 'syrvel_extraction',
      description: 'Syrvel guidant une personne à extraire dans les ruelles de Vel\'Nox — un Umbrien presque invisible dans l\'obscurité, tenant la main d\'un fugitif. Sa posture est alerte — il calcule les sorties en temps réel.',
      style: 'réaliste Umbrien passeur Dissident, Vel\'Nox, extraction nocturne, invisibilité élémentaire',
    },
  ],

  lore_long: `Syrvel extrait des personnes recherchées par l'Empire depuis Vel'Nox. Il ne transporte pas d'information — il transporte des gens.

Sa règle : pas de jugement. La justice de la fuite appartient à ceux qui fuient. Il évalue le risque, pas la morale.

Cette règle a des limites qu'il n'a pas encore entièrement testées.`,
};

export default syrvel;
