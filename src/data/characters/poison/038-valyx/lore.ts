import type { PersonnageLoreComplet } from '../../../lore-types';

const valyx: PersonnageLoreComplet = {
  id: 38,
  nom: 'Valyx',
  element: 'Poison',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Morte depuis 40 ans. Dans les journaux de l\'époque : une Chthonienne de 67 ans au moment de l\'accord, avec une résistance au poison qui impressionnait même les autres Élus Poison. Des témoins disent qu\'elle sentait les champignons profonds — une contamination partielle de sa peau qui n\'était pas de la maladie mais de l\'adaptation.',
    peau: 'Dans les dessins survivants : foncée avec des reflets verdâtres aux bras et au visage. Une peau de quelqu\'un qui est descendu trop souvent au niveau 9. Elle avait absorbé quelque chose de la zone fongique sans en mourir. Cette absorption était peut-être la condition de l\'accord.',
    yeux: 'Dans les témoignages : "des yeux qui regardaient le sol plutôt que la personne en face". Elle voyait quelque chose dans les structures souterraines que les autres Élus Poison ne voyaient pas. Ce sens était ce qui la rendait irremplaçable dans la négociation.',
    vetements: 'Dans les archives : combinaison d\'exploration modifiée, avec des capteurs de spores qu\'elle avait elle-même construits. Elle n\'avait pas fait confiance à l\'équipement standard pour descendre où elle allait.',
    signes_particuliers: 'Elle est morte sans avoir transféré sa compréhension de l\'accord à quiconque. Karm (41) a reconstitué les termes depuis des fragments de journaux — pas depuis des documents officiels. Ce qu\'il a reconstitué le terrified. Ce qu\'elle savait de plus que les termes officiels est peut-être perdu.',
  },

  psychologie: {
    dominante: 'Négociatrice qui a conclu l\'accord avec la zone fongique de la Fosse Interdite — un accord dont personne d\'autre n\'a entièrement compris les termes, ni à l\'époque ni après. Elle avait compris quelque chose sur la zone fongique qui avait rendu l\'accord possible. Elle n\'avait pas tout dit.',
    mecanisme_de_defense: 'La rétention comme protection — pas pour elle, mais pour l\'accord. Elle avait compris que certaines informations sur la zone fongique, si elles circulaient librement, auraient rendu l\'accord impossible à respecter. Elle avait gardé le minimum nécessaire.',
    contradiction_interne: 'L\'accord qu\'elle a négocié impliquait une contribution continue de Kar-Dum — une extraction de quelque chose en échange de la stabilité de la Fosse. Elle savait que cette contribution avait une limite. Elle n\'avait pas dit à combien.',
    rapport_aux_autres: 'Morte il y a 40 ans. Présente dans les archives fragmentées de Karm (41) et dans les rituels des gardiens de zone. Drevaya (39) a lu des fragments de ses journaux — suffisamment pour savoir qu\'elle avait vu les micro-fractures avant que personne d\'autre ne les reconnaisse.',
    vision_du_monde: 'La zone fongique n\'était pas une ressource à exploiter ni une menace à neutraliser. C\'était quelque chose de vivant avec sa propre logique. L\'accord était possible parce qu\'elle avait accepté de parler à cette logique plutôt que de l\'imposer à la sienne.',
  },

  histoire: {
    enfance: {
      titre: 'La descente',
      contenu: 'À 23 ans, elle avait effectué sa première descente au niveau 7 de la Fosse — un niveau que les gardiens de l\'époque évitaient. Elle était revenue avec des échantillons et avec quelque chose dans sa peau qui ne partirait jamais. Les médecins avaient dit que c\'était de la contamination. Elle avait dit que c\'était de la communication.',
    },
    arrivee: {
      titre: 'L\'accord',
      contenu: 'À 67 ans, après 44 ans de descentes et d\'observations, elle avait demandé à descendre au niveau 9 — le niveau interdit, le niveau où la zone fongique était la plus concentrée. Elle en était revenue trois jours plus tard. Elle avait dit qu\'un accord était possible. Personne ne lui avait demandé avec quoi exactement elle avait négocié.',
    },
    premier_conflit: {
      titre: 'Les termes non dits',
      contenu: 'Dans les semaines après l\'accord, les représentants de Kar-Dum avaient essayé de lui faire détailler les termes complets. Elle avait fourni un document — les obligations de Kar-Dum, les garanties de la zone fongique. Le document ne couvrait pas tout. Quand on lui avait demandé s\'il y avait des clauses supplémentaires, elle avait dit que le reste était de la nature de l\'accord et pas du contenu écrit.',
    },
    revelation: {
      titre: 'La limite de la contribution',
      contenu: 'Dans ses journaux privés, dont des fragments ont survécu : elle avait écrit que l\'accord avait une durée, pas un terme. Que la contribution de Kar-Dum pourrait un jour être "refusée" si la zone fongique avait évolué au-delà du point où l\'accord avait été négocié. Elle n\'avait pas précisé ce que "refusé" voulait dire dans ce contexte.',
    },
    etat_actuel: {
      titre: 'Ce qu\'elle a laissé',
      contenu: 'Elle est morte à 72 ans, 5 ans après l\'accord. Elle a laissé des journaux fragmentaires que Karm (41) a passé 28 ans à reconstituer. Elle a laissé un accord que Kar-Dum maintient sans en comprendre les termes complets. Et elle a laissé des micro-fractures dans les parois de confinement que Drevaya (39) voit depuis 6 mois et n\'a rien dit.',
    },
  },

  evenements_narratifs: [
    {
      id: 'valyx_accord',
      titre: 'L\'accord qui expire',
      description: 'Karm (41) a reconstitué les termes de l\'accord de Valyx depuis des fragments de journaux. Ce qu\'il a trouvé le terrified. Il n\'a pas encore dit à quiconque ce qu\'il a trouvé. Les micro-fractures que Drevaya (39) voit depuis 6 mois correspondent peut-être à ce que Valyx avait décrit dans ses journaux comme un "signal de refus".',
      personnages_impliques: [41, 39],
      declencheur: 'Convergence entre la découverte de Karm et les observations de Drevaya',
      consequence: 'Si l\'accord expire, Kar-Dum n\'a aucune préparation pour ce qui vient après',
    },
    {
      id: 'valyx_heritiers',
      titre: 'Ce qu\'elle n\'a pas dit',
      description: 'Dans ses journaux : une section que Karm n\'a pas encore reconstitué entièrement, qui semble décrire la "nature" de ce avec quoi elle a négocié. Pas une zone — quelque chose d\'autre. Les gardiens de zone comme Drevaya ont accès à des observations directes. Leurs observations actuelles pourraient confirmer ce que Valyx a vu.',
      personnages_impliques: [41, 39, 43],
      declencheur: 'Reconstruction du passage manquant de Valyx',
      consequence: 'Compréhension réelle de ce qu\'est la zone fongique — et de ce que l\'accord impliquait réellement',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Morte il y a 40 ans. A négocié l\'accord avec la zone fongique de la Fosse Interdite. Ses journaux fragmentaires sont la principale source sur les termes réels de l\'accord. Ce qu\'elle savait de plus que les documents officiels est peut-être perdu — ou peut-être dans les sections que Karm n\'a pas encore reconstituées.',

  relations: [
    { id: 41, nom: 'Karm', type: 'contact', note: 'Reconstruit ses journaux depuis 28 ans. Ce qu\'il a trouvé le terrified.' },
    { id: 39, nom: 'Drevaya', type: 'contact', note: 'A lu des fragments de ses journaux. Reconnaît les micro-fractures qu\'elle décrivait.' },
  ],

  combat: {
    sorts: [
      'Immunité fongique (Poison) — résistance totale aux spores et toxines de la zone fongique — capacité unique qui a rendu la négociation possible',
      'Communication sporale (Poison) — transmission de signaux chimiques dans les réseaux fongiques — compréhension de la logique de la zone',
      'Contamination contrôlée (Poison) — adaptation partielle aux toxines environnantes — survie aux niveaux interdits',
    ],
  },

  image_prompts: [
    {
      id: 'valyx_niveau9',
      description: 'Valyx au niveau 9 de la Fosse Interdite — une Chthonienne de 67 ans dans une combinaison modifiée, seule dans un espace où les champignons forment des structures qui ressemblent à des architectures. Elle n\'a pas peur. Elle est là pour négocier. Son expression est de concentration totale et de quelque chose qu\'on ne peut pas appeler de la confiance — plutôt de la compréhension.',
      style: 'réaliste Chthonienne ancienne, Fosse Interdite niveau 9, champignons architecturaux, lumière fongique, accord impossible, morte depuis 40 ans',
    },
  ],

  lore_long: `Valyx a négocié l'accord avec la zone fongique de la Fosse Interdite à 67 ans. Elle est morte 5 ans plus tard sans avoir transmis sa compréhension complète de l'accord.

Karm (41) reconstruit ses journaux depuis 28 ans. Ce qu'il a trouvé le terrified — les termes officiels ne couvrent pas tout, et ce qui manque semble décrire une limite à la contribution de Kar-Dum.

Les micro-fractures que Drevaya (39) observe depuis 6 mois pourraient être ce que Valyx appelait un "signal de refus".`,
};

export default valyx;
