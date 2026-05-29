import type { PersonnageLoreComplet } from '../../../lore-types';

const vornael: PersonnageLoreComplet = {
  id: 87,
  nom: 'Vornael',
  element: 'Eau',
  espece: 'Néréide',
  region: 'Thalassyr',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Néréide de 60 ans, grand et courbé comme quelqu\'un qui passe sa vie dans des espaces sous-marins. Ses doigts sont longs, adaptés à tourner des pages mouillées dans l\'obscurité.',
    peau: 'Bleutée Néréide profonde avec une luminescence aqueuse aux mains — l\'élément Eau d\'un archiviste sous-marin, calme et constant.',
    yeux: 'Bleus profonds, avec une qualité de concentration prolongée. Il peut rester immobile des heures sur un document.',
    vetements: 'Tenue de plongée modifiée pour l\'archivage — des poches étanches partout. Ses vêtements sentent l\'eau de mer permanente.',
    signes_particuliers: 'Il travaille en parallèle de Thariel (18) sans le savoir. Deux archivistes couvrant les mêmes zones depuis des perspectives différentes. Leurs travaux ne se sont jamais croisés.',
  },

  psychologie: {
    dominante: 'Archiviste sous-marin indépendant à Thalassyr. Il documente les courants, les structures sous-marines, les traces des événements passés dans les sédiments marins. Il travaille seul, sans commande officielle ni réseau.',
    mecanisme_de_defense: 'L\'indépendance totale comme liberté. Sans commanditaire, sans dépendance — il documente ce qui l\'intéresse.',
    contradiction_interne: 'Il archive des informations qui ont de la valeur pour plusieurs factions. Son indépendance l\'a protégé jusqu\'ici. Si quelqu\'un découvre ce qu\'il a documenté, cette protection disparaît.',
    rapport_aux_autres: 'Thariel (18) est un parallèle qu\'il ne connaît pas — ils documentent parfois les mêmes zones. Le Silence des Vents est le principal sujet de ses archives marines.',
    vision_du_monde: 'Les événements laissent des traces dans l\'eau et les sédiments. Ces traces existent indépendamment de qui les observe. Il les documente.',
  },

  histoire: {
    enfance: {
      titre: 'Les profondeurs',
      contenu: 'Né dans une famille de Néréides plongeurs. Il avait développé une capacité exceptionnelle à rester sous l\'eau longtemps — et à observer dans l\'obscurité des profondeurs.',
    },
    arrivee: {
      titre: 'Les archives',
      contenu: 'À 35 ans, il avait commencé à documenter systématiquement ce qu\'il observait dans ses plongées. Pas pour une institution — par curiosité méthodique. Ses archives couvraient maintenant 25 ans d\'observations.',
    },
    premier_conflit: {
      titre: 'Le Silence des Vents',
      contenu: 'Le Silence des Vents avait laissé des traces dans les courants sous-marins. Ses archives en avaient une documentation qui précédait et suivait l\'événement. Cette continuité était rare.',
    },
    revelation: {
      titre: 'La valeur',
      contenu: 'Un contact lui avait offert une somme significative pour ses archives sur le Silence des Vents. Il avait refusé. La valeur de ses archives venait de leur indépendance. La vente les aurait changées.',
    },
    etat_actuel: {
      titre: 'L\'archivage continue',
      contenu: 'Il plonge et documente. Ses archives s\'accumulent dans des caches sous-marines que lui seul connaît.',
    },
  },

  evenements_narratifs: [
    {
      id: 'vornael_archives',
      titre: 'Deux archives qui se rejoignent',
      description: 'Vornael et Thariel (18) documentent les mêmes phénomènes sous-marins depuis des perspectives différentes. Si leurs archives se croisaient, elles donneraient une image complète que ni l\'un ni l\'autre n\'a seul. Si quelqu\'un comprend cette complémentarité avant eux, les deux archivistes deviennent des ressources.',
      personnages_impliques: [18],
      declencheur: 'Quelqu\'un découvrant que Vornael et Thariel documentent les mêmes zones',
      consequence: 'Rapprochement des deux archives — ou tentative de s\'en emparer',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Archiviste sous-marin indépendant. Documente les traces du Silence des Vents dans les courants marins. Travaille en parallèle de Thariel (18) sans le savoir.',

  relations: [
    { id: 18, nom: 'Thariel', type: 'contact', note: 'Parallèle ignoré. Deux archives qui couvrent les mêmes zones.' },
  ],

  combat: {
    sorts: [
      'Pression sous-marine (Eau) — compression d\'eau autour d\'une cible — immobilisation sous l\'eau',
      'Courant d\'esquive (Eau) — déplacement rapide dans l\'eau — fuite',
    ],
  },

  image_prompts: [
    {
      id: 'vornael_plongee',
      description: 'Vornael sous la surface de la mer de Thalassyr — un Néréide de 60 ans dans les profondeurs, documentant des courants sur des tablettes étanches. Sa luminescence bleue éclaire les sédiments. Il travaille seul.',
      style: 'réaliste Néréide archiviste sous-marin, profondeurs de Thalassyr, documentation indépendante, Silence des Vents traces marines',
    },
  ],

  lore_long: `Vornael archive les phénomènes sous-marins de Thalassyr depuis 25 ans. Ses archives couvrent le Silence des Vents avant et après.

Il travaille en parallèle de Thariel (18) sans le savoir. Leurs archives se complètent.

Son indépendance est sa protection. Si quelqu'un comprend la valeur de ses archives, cette protection disparaît.`,
};

export default vornael;
