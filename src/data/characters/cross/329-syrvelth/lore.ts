import type { PersonnageLoreComplet } from '../../../lore-types';

const syrvelth: PersonnageLoreComplet = {
  id: 329,
  nom: 'Syrvelth',
  element: 'Ténèbres',
  element2: 'Spectre',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Mince et précise dans ses mouvements — chaque geste est calculé pour ne pas laisser de trace physique ni spectrale.',
    peau: 'Gris-lavande Umbrien avec des zones légèrement translucides aux épaules et aux clavicules — les points de contact lors des infiltrations via projections spectrales.',
    yeux: 'Violets sombres avec une fixité d\'évaluation. Elle voit les structures de surveillance avant de les voir physiquement.',
    vetements: 'Tenue opérationnelle minimale — rien qui accroche la lumière, rien qui produit de son, rien qui laisse une signature Ténèbres plus forte que nécessaire. Elle a travaillé sur la réduction de sa trace pendant 5 ans.',
    signes_particuliers: 'Elle entre dans les pièces en dernier et sort en premier. Cette règle n\'a pas d\'exceptions dans les espaces inconnus.',
  },

  psychologie: {
    dominante: 'Infiltration sans trace comme standard. Être dans un espace sans laisser de preuve d\'y avoir été — ni physique, ni spectrale, ni psychique. Ce standard est difficile à atteindre. Elle l\'approche sur chaque mission.',
    mecanisme_de_defense: 'La mission comme cadre total. Pendant une mission, les questions éthiques ne s\'activent pas — seulement les questions opérationnelles. Avant et après, c\'est différent.',
    contradiction_interne: 'Elle s\'infiltre en utilisant des projections spectrales. Ces projections laissent des traces dans la couche spectrale — des résidus qu\'un collecteur comme Thyrvesh (327) pourrait détecter. Elle n\'est pas traçable par les méthodes physiques ou psychiques standard. Elle l\'est peut-être par des méthodes spectrales avancées.',
    rapport_aux_autres: 'Syravel (254) lui fournit les informations de terrain et coordonne ses missions avec d\'autres opérations Dissidentes. Eiravel (248) est son contact pour les zones de Vel\'Nox où ses propres connaissances sont limitées.',
    vision_du_monde: 'Une information dans la bonne main au bon moment peut changer plus qu\'une armée. Elle amène les informations dans les bonnes mains.',
  },

  histoire: {
    enfance: {
      titre: 'La double discrétion',
      contenu: 'Née à Vel\'Nox dans une famille qui avait appris la discrétion comme survie — pas Dissidente, juste prudente dans une ville où chaque faction surveillait. À 15 ans, elle avait une capacité Ténèbres/Spectre qui permettait des infiltrations qu\'elle utilisait initialement pour des raisons personnelles — voir des gens qu\'elle n\'était pas censée voir.',
    },
    arrivee: {
      titre: 'Le recrutement',
      contenu: 'À 21 ans, Syravel (254) l\'avait approchée — elle avait observé une de ses infiltrations personnelles et avait compris ce que cette capacité pouvait faire dans un cadre opérationnel. L\'offre était directe. La réponse de Syrvelth avait été : elle voulait des règles claires sur ce qu\'elle était autorisée à faire et ce qu\'elle ne l\'était pas. Syravel avait accepté de définir des limites.',
    },
    premier_conflit: {
      titre: 'La limite franchie',
      contenu: 'À 27 ans, une mission avait impliqué une infiltration dans l\'espace d\'un civil non impliqué dans les opérations impériales. Elle avait refusé de compléter la mission selon les termes reçus. Syravel avait modifié les termes. La mission avait été réalisée d\'une façon différente de ce qui avait été initialement demandé. Syravel n\'avait pas reproché la modification.',
    },
    revelation: {
      titre: 'La trace spectrale',
      contenu: 'Eiravel (248) lui avait mentionné que certains opérateurs de la Convergence travaillaient sur des méthodes de détection spectrale avancées — des méthodes qui pourraient détecter les résidus de projections spectrales utilisées dans des infiltrations. Ses infiltrations pourraient être traçables d\'une façon qu\'elle ne peut pas contre-mesurer avec ses techniques actuelles.',
    },
    etat_actuel: {
      titre: 'Les missions actuelles et la vulnérabilité',
      contenu: 'Elle a deux missions actives. La première est dans une zone qu\'elle connaît bien — risque faible. La deuxième est dans une zone proche d\'une zone de collecte spectrale de la Convergence. Elle hésite sur la deuxième. Syravel lui a dit que c\'est urgent. Elle est en train de calculer si l\'urgence justifie le risque.',
    },
  },

  evenements_narratifs: [
    {
      id: 'syrvelth_trace_spectrale',
      titre: 'La vulnérabilité spectrale',
      description: 'Des méthodes de détection spectrale avancées développées par la Convergence pourraient rendre ses infiltrations traçables. Elle n\'a pas de contre-mesure actuelle contre ce type de détection. La deuxième mission active est dans une zone proche d\'une zone de collecte spectrale — augmentation du risque. Elle hésite.',
      personnages_impliques: [248, 254],
      declencheur: 'Information d\'Eiravel sur les méthodes de détection spectrale',
      consequence: 'Mission hésitante — décision sur l\'urgence vs le risque non encore prise',
    },
    {
      id: 'syrvelth_limites_operationnelles',
      titre: 'Les limites définies',
      description: 'Les limites définies avec Syravel (254) au recrutement incluent des interdictions sur les civils non impliqués. Ces limites ont été testées une fois — elle a refusé et la mission a été modifiée. Elle ne sait pas si ces limites seront testées à nouveau. La pression des opérations urgentes tend à pousser contre les limites.',
      personnages_impliques: [254],
      declencheur: 'Mission modifiée après refus sur une limite',
      consequence: 'Limites maintenues mais pression continue — équilibre dépendant de la flexibilité de Syravel',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Espionne Dissidente avec une capacité d\'infiltration unique dans Vel\'Nox. Sa vulnérabilité aux méthodes spectrales de la Convergence est un risque récent qu\'elle n\'a pas encore contré.',

  relations: [
    { id: 254, nom: 'Syravel', type: 'allié', note: 'Coordonne ses missions. A accepté des limites opérationnelles. A une fois modifié une mission refusée.' },
    { id: 248, nom: 'Eiravel', type: 'allié', note: 'Contact pour les zones non familières. A signalé la vulnérabilité spectrale.' },
  ],

  combat: {
    sorts: [
      'Projection spectrale (Spectre) — envoi d\'une projection de sa présence dans un espace adjacent — infiltration à distance',
      'Manteau d\'ombre (Ténèbres) — absorption de toute lumière réfléchie par sa présence — invisibilité physique',
      'Effacement de trace (Ténèbres + Spectre) — suppression des résidus laissés par son passage — nettoyage de route',
    ],
  },

  image_prompts: [
    {
      id: 'syrvelth_infiltration',
      description: 'Syrvelth dans un couloir de Vel\'Nox, à moitié dans l\'ombre physique et à moitié dans la couche spectrale. Elle avance sans bruit. Elle évalue une porte. Sa silhouette est nette — elle est en contrôle. Mais dans la couche spectrale derrière elle, il y a un léger résidu.',
      style: 'réaliste espionnage umbrien, double couche visible, infiltration en cours, résidu spectral subtil',
    },
  ],

  lore_long: `Syrvelth s'infiltre en utilisant les ombres et des projections spectrales. Elle n'est pas traçable par les méthodes physiques ou psychiques standard.

Elle l'est peut-être par des méthodes spectrales avancées. Eiravel (248) lui a signalé que la Convergence travaille sur ce type de détection.

Une mission active est proche d'une zone de collecte spectrale. Elle hésite. Syravel (254) dit que c'est urgent.

Elle a des limites opérationnelles sur les civils non impliqués — définies au recrutement. Elles ont été testées une fois. Elle a tenu. Elle ne sait pas si la prochaine fois, Syravel sera aussi flexible.`,
};

export default syrvelth;
