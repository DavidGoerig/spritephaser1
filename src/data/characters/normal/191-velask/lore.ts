import type { PersonnageLoreComplet } from '../../../lore-types';

const velask: PersonnageLoreComplet = {
  id: 191,
  nom: 'Velask',
  element: 'Normal',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Homme-Lien de 47 ans, vagabond — corpulence usée par des années de déplacement sans résidence fixe. Il porte ce qu\'il possède.',
    peau: 'Ton tanné par les intempéries de plusieurs régions. Il n\'a pas de "chez lui" depuis longtemps.',
    yeux: 'Gris avec une qualité de quelqu\'un qui a vu quelque chose qu\'il ne sait pas comment nommer.',
    vetements: 'Tenue de voyage accumulée — des pièces de plusieurs régions cousues ensemble. Rien de cohérent.',
    signes_particuliers: 'Il a vu quelque chose dans les zones de saturation de l\'Isthme. Il n\'en a parlé à personne. Il n\'est pas sûr que ce qu\'il a vu ait un nom dans les mots qu\'il connaît.',
  },

  psychologie: {
    dominante: 'Vagabond dans l\'Isthme. Il se déplace depuis 15 ans sans destination fixe. Il y a 3 mois, il a traversé une zone de saturation élémentaire profonde et il a vu quelque chose — une manifestation élémentaire d\'une nature qu\'il ne peut pas décrire précisément. Il n\'en a parlé à personne. Il ne sait pas à qui le dire ou si ça importerait.',
    mecanisme_de_defense: 'Le silence comme protection de sa propre cohérence. Raconter ce qu\'il a vu risque de le faire paraître fou. Il n\'est pas sûr d\'avoir assez de mots pour décrire quelque chose qui n\'a peut-être pas de nom.',
    contradiction_interne: 'Ce qu\'il a vu est peut-être important pour comprendre la saturation de l\'Isthme. Il le retient parce qu\'il ne sait pas comment le transmettre — et parce qu\'il a peur de ce que ça signifie s\'il a raison.',
    rapport_aux_autres: 'La Saturation de l\'Isthme est ce qu\'il a traversé et ce qu\'il a vu. Le Second Avatar (59) est dans son réseau indirect — des décisions politiques sur des zones que Velask traverse régulièrement.',
    vision_du_monde: 'Il a vu des choses dans ses 15 ans de vagabondage que les personnes qui restent dans un endroit ne voient jamais. Ce qu\'il a vu dans la zone de saturation était différent.',
  },

  histoire: {
    enfance: {
      titre: 'L\'Isthme',
      contenu: 'Né dans l\'Isthme dans une famille ordinaire. Il avait commencé à se déplacer à 32 ans après une rupture personnelle. Il n\'était jamais vraiment revenu.',
    },
    arrivee: {
      titre: 'Le vagabondage',
      contenu: 'Il s\'était construit une connaissance terrain de l\'Isthme et des régions adjacentes — des routes, des abris, des personnes qui donnaient à manger sans poser de questions. Il vivait dans les marges de plusieurs sociétés simultanément.',
    },
    premier_conflit: {
      titre: 'La zone de saturation',
      contenu: 'Il y a 3 mois, il avait traversé une zone de saturation élémentaire profonde dans l\'Isthme — une zone que les personnes sensées évitaient. Il avait besoin d\'un raccourci. Il l\'avait traversée. Il avait vu quelque chose.',
    },
    revelation: {
      titre: 'Ce qu\'il a vu',
      contenu: 'La manifestation élémentaire qu\'il avait observée dans la zone de saturation ressemblait à une condensation — des éléments qui se regroupaient en quelque chose. Pas une explosion, pas un effondrement. Quelque chose de différent. Il ne savait pas si c\'était le début de quelque chose ou la fin.',
    },
    etat_actuel: {
      titre: 'Le silence',
      contenu: 'Il continue à se déplacer. Il porte ce qu\'il a vu. Il ne sait pas à qui le dire.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velask_vision',
      titre: 'Ce qu\'il n\'a dit à personne',
      description: 'Velask a vu quelque chose dans une zone de saturation profonde de l\'Isthme. Si quelqu\'un gagne sa confiance — Orathyn (181), Sarevyn (176) — et lui pose les bonnes questions, sa description pourrait révéler un phénomène élémentaire que personne d\'autre n\'a documenté. Ou confirmer des hypothèses que d\'autres ont eu peur de formuler.',
      personnages_impliques: [59],
      declencheur: 'Quelqu\'un gagnant la confiance de Velask et lui posant les bonnes questions sur ce qu\'il a vu',
      consequence: 'Description d\'un phénomène de saturation avancé que personne d\'autre n\'a documenté',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Vagabond ayant traversé une zone de saturation profonde et vu quelque chose. N\'en a parlé à personne. Ne sait pas à qui le dire ou si ça importerait.',

  relations: [
    { id: 59, nom: 'Second Avatar', type: 'contact', note: 'Décisions politiques sur des zones que Velask traverse régulièrement.' },
  ],

  combat: {
    sorts: [
      'Survie de terrain (Normal) — adaptation à l\'environnement — défense instinctive',
      'Frappe d\'opportunité (Normal) — attaque au moment optimal — efficacité minimale de ressources',
    ],
  },

  image_prompts: [
    {
      id: 'velask_zone',
      description: 'Velask à l\'entrée d\'une zone de saturation élémentaire dans l\'Isthme — un Homme-Lien de 47 ans qui regarde vers l\'intérieur de la zone avec une expression entre la mémoire et l\'hésitation. Ce qu\'il a vu est là. Il n\'est pas sûr de vouloir le revoir pour être certain de ne pas l\'avoir rêvé.',
      style: 'réaliste Homme-Lien vagabond, Isthme, zone de saturation, vision non-nommée, silence lourd',
    },
  ],

  lore_long: `Velask est vagabond dans l'Isthme depuis 15 ans. Il y a 3 mois, il a traversé une zone de saturation élémentaire profonde.

Il a vu quelque chose. Une condensation élémentaire d'une nature qu'il ne peut pas nommer avec les mots qu'il connaît.

Il n'en a parlé à personne. Il ne sait pas si ce qu'il a vu a un nom. Il ne sait pas si ça importerait.`,
};

export default velask;
