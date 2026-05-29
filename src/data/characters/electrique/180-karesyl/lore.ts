import type { PersonnageLoreComplet } from '../../../lore-types';

const karesyl: PersonnageLoreComplet = {
  id: 180,
  nom: 'Karesyl',
  element: 'Electrique',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Homme-Lien de 34 ans, technicienne — corpulence mince avec des équipements de mesure portés. Elle ressemble à une analyste de terrain.',
    peau: 'Ton clair avec de légères marques de décharges électrostatiques — son élément Electrique interagit avec ses équipements de mesure.',
    yeux: 'Jaunes avec une qualité de quelqu\'un qui cherche des patterns dans des données bruitées.',
    vetements: 'Tenue technique impériale avec des instruments de mesure élémentaire. Identification impériale discrète.',
    signes_particuliers: 'Elle suit les anomalies de saturation élémentaire dans l\'Isthme pour l\'Empire. Ses données sont transmises au centre de commandement impérial. Elle ne décide pas de ce que l\'Empire fait de ses données.',
  },

  psychologie: {
    dominante: 'Technicienne impériale assignée au suivi des anomalies de saturation élémentaire dans l\'Isthme. Elle collecte des données — des mesures précises des flux élémentaires anormaux qui se développent dans la région. Elle ne prend pas de décisions politiques sur la base de ses données. Elle les transmet.',
    mecanisme_de_defense: 'La neutralité technique. Elle mesure, pas elle ne juge. Ses données sont des données. Ce que l\'Empire en fait appartient à l\'Empire.',
    contradiction_interne: 'Ses données permettent à l\'Empire de savoir où les Élus se concentrent — les anomalies de saturation sont souvent liées à des concentrations d\'Élus. Elle n\'identifie pas les Élus directement, mais ses cartes de saturation y ressemblent fonctionnellement.',
    rapport_aux_autres: 'La Saturation de l\'Isthme est l\'objet de son travail — elle suit sa progression. Thyven (62) est dans son réseau impérial — elle transmet ses données à l\'administration locale impériale.',
    vision_du_monde: 'Les anomalies élémentaires sont des phénomènes mesurables. La mesure permet la compréhension. La compréhension permet la gestion. Son travail est dans la mesure.',
  },

  histoire: {
    enfance: {
      titre: 'L\'élément Electrique',
      contenu: 'Née dans une famille de techniciens de l\'Isthme. Son élément Electrique s\'était manifesté comme une aptitude naturelle pour les mesures électromagnétiques. L\'Empire l\'avait remarquée à 22 ans.',
    },
    arrivee: {
      titre: 'L\'assignation',
      contenu: 'L\'Empire l\'avait assignée au suivi des anomalies de saturation élémentaire dans l\'Isthme à 28 ans. Sa mission était de cartographier les flux anormaux. Elle avait accepté — c\'était du travail scientifique avec des ressources significatives.',
    },
    premier_conflit: {
      titre: 'La carte et ses implications',
      contenu: 'Elle avait livré une carte de saturation qui avait conduit à une opération impériale dans un quartier de Virex. Elle n\'avait pas été informée de l\'opération. Elle avait compris a posteriori ce que sa carte avait permis.',
    },
    revelation: {
      titre: 'La neutralité impossible',
      contenu: 'Elle avait voulu croire que mesurer était neutre. Ce n\'était pas le cas. Ses données avaient des usages qu\'elle ne contrôlait pas. Elle avait continué — parce qu\'elle ne voyait pas comment refuser sans conséquences.',
    },
    etat_actuel: {
      titre: 'La technicienne',
      contenu: 'Elle mesure. Elle transmet. Elle ne regarde pas les opérations qui suivent.',
    },
  },

  evenements_narratifs: [
    {
      id: 'karesyl_carte',
      titre: 'La carte de saturation et ses usages',
      description: 'Karesyl transmet des cartes de saturation élémentaire à l\'Empire. Si quelqu\'un — Sarevyn (176), un Dissident — lui demande de modifier légèrement ses données pour protéger une concentration d\'Élus, elle devra choisir entre sa position technique officielle et la conscience de ce que ses données permettent.',
      personnages_impliques: [62],
      declencheur: 'Un contact lui demandant de modifier ses données de saturation pour protéger des Élus identifiés',
      consequence: 'Karesyl face à un choix entre sa neutralité professionnelle et ses implications dans les opérations impériales',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Technicienne impériale suivant les anomalies de saturation élémentaire dans l\'Isthme. Ses cartes permettent à l\'Empire de localiser les concentrations d\'Élus. Elle transmet sans décider des usages.',

  relations: [
    { id: 62, nom: 'Thyven', type: 'contact', note: 'Administration impériale locale recevant ses données de saturation.' },
  ],

  combat: {
    sorts: [
      'Décharge électrique (Electrique) — impulsion de haute tension — attaque directe',
      'Interférence (Electrique) — perturbation des flux élémentaires — désorientation',
    ],
  },

  image_prompts: [
    {
      id: 'karesyl_mesure',
      description: 'Karesyl dans une zone de saturation élémentaire de l\'Isthme — une Homme-Lien de 34 ans avec ses instruments de mesure, prenant des relevés d\'anomalies de flux. Sa carte montre des concentrations colorées. Elle ne regarde pas les noms des quartiers où les concentrations sont les plus fortes.',
      style: 'réaliste Homme-Lien technicienne impériale, Isthme, saturation élémentaire, mesures terrain, carte de flux',
    },
  ],

  lore_long: `Karesyl mesure les anomalies de saturation élémentaire dans l'Isthme pour l'Empire. Ses cartes sont précises.

Elle transmet ses données sans décider de leur usage. Elle a compris qu'une de ses cartes avait permis une opération impériale. Elle continue à mesurer.

La neutralité technique n'existe pas quand les données ont des usages.`,
};

export default karesyl;
