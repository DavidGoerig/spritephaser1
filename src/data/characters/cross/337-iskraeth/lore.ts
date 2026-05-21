import type { PersonnageLoreComplet } from '../../../lore-types';

const iskraeth: PersonnageLoreComplet = {
  id: 337,
  nom: 'Iskraeth',
  element: 'Glace',
  element2: 'Fée',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Vieux — une vieillesse visible chez un Givrin de 300 ans. Les Givrins vieillissent lentement mais ils vieillissent. Sa façon de se tenir indique quelqu\'un qui a appris à économiser ses mouvements.',
    peau: 'Blanc-cristal avec des fissures superficielles aux articulations — une caractéristique des Givrins très âgés. Ces fissures ne sont pas des blessures. Elles sont des strates.',
    yeux: 'Bleu très clair avec des cercles concentriques visibles — la signature visuelle de quelqu\'un qui a vécu plusieurs cycles de gel et dégel. Ses yeux ont enregistré des choses que les yeux plus jeunes n\'ont pas vus.',
    vetements: 'Simple, taillé dans des matériaux locaux de Crysalme. Pas de marqueur de statut. Il a appris il y a longtemps que le statut est une fiction que les systèmes entretiennent.',
    signes_particuliers: 'Il commence parfois une phrase en utilisant un temps qui n\'existe plus — "à l\'époque où la rivière Krael coulait encore" ou "avant le deuxième gel". Les gens qui ne connaissent pas son âge pensent qu\'il confabule. Il ne confabule pas.',
  },

  psychologie: {
    dominante: 'Témoignage des cycles de gel et dégel à Crysalme. Il a vécu 3 cycles complets en 300 ans — des périodes où le gel intense cède progressivement, puis revient. Chaque cycle avait ses propres caractéristiques. Il raconte ce qu\'il a vu pour que les gens actuels comprennent que le Gel Éternel n\'est peut-être pas éternel.',
    mecanisme_de_defense: 'La temporalité longue. Ce qui paraît définitif sur une vie humaine peut être temporaire sur 300 ans. Cette perspective atténue l\'urgence subjective des crises actuelles — parfois utile, parfois pas.',
    contradiction_interne: 'Il a vu suffisamment de cycles pour avoir de l\'espoir sur le dégel actuel. Mais chaque cycle avait aussi ses particularités — et celui-ci, le Gel Éternel, a des caractéristiques qu\'il n\'a pas vues dans les précédents. Il ne sait pas si c\'est un cycle ordinaire ou quelque chose de différent. Il ne le dit pas directement dans ses récits.',
    rapport_aux_autres: 'Syraris (164) est le contemporain le plus proche de ce qu\'il était dans sa jeunesse — un Givrin de 60 ans avec une perspective à long terme naissante. Il parle souvent avec lui. Karath (52) archive ses récits — ce qui lui permet de ne pas les perdre quand sa mémoire commence à présenter des lacunes.',
    vision_du_monde: 'Les cycles existent. Ce que les gens appellent permanence est souvent juste une durée longue que leur vie ne leur permet pas de voir en entier.',
  },

  histoire: {
    enfance: {
      titre: 'Le premier dégel',
      contenu: 'À 30 ans, il avait vu son premier dégel partiel — une période de 8 ans où la glace qui couvrait les basses terres de Crysalme s\'était réduite d\'un tiers. Les gens de cette époque pensaient que c\'était permanent. Il avait 30 ans — trop jeune pour savoir que ce n\'était qu\'un cycle. Il avait appris ce fait 80 ans plus tard.',
    },
    arrivee: {
      titre: 'Les deux autres cycles',
      contenu: 'Le deuxième cycle avait commencé à ses 120 ans — un gel plus intense qui avait duré 60 ans avant de reculer. Le troisième à ses 210 ans — plus court, 30 ans de gel intense suivi d\'un dégel partiel de 20 ans. À ses 280 ans, le Gel Éternel avait commencé. Il était plus intense que les précédents. Les gens l\'appelaient Éternel dès la 5ème année.',
    },
    premier_conflit: {
      titre: 'La dissonance avec les institutions',
      contenu: 'La Monarchie avait voulu utiliser ses récits pour justifier que le Gel Éternel était une "phase normale". Il avait refusé cette interprétation — les cycles précédents avaient des signatures différentes. Le Gel Éternel avait des caractéristiques qu\'il n\'avait pas vues. Il ne savait pas ce que ça signifiait. Il n\'allait pas dire l\'inverse pour rassurer une institution.',
    },
    revelation: {
      titre: 'La fenêtre de Velskrevyn',
      contenu: 'Velskrevyn (342) lui avait présenté ses calculs sur la "fenêtre de 18 mois" — une période astronomique où un dégel serait possible selon ses modèles stellaires. Iskraeth l\'avait écouté. Les calculs correspondaient à des alignements qu\'il avait observés pendant le deuxième cycle, juste avant le dégel. Il n\'avait pas dit que ça confirmait tout. Il avait dit que ça correspondait à quelque chose.',
    },
    etat_actuel: {
      titre: 'Les récits en cours',
      contenu: 'Il donne des récits réguliers à Karath (52) pour archivage. Il parle aussi avec Syraris (164) — des conversations plus personnelles sur ce que ça signifie de voir une espèce traverser ses propres crises sur 300 ans. Il a des lacunes dans sa mémoire des premières décennies. Karath l\'aide à combler les lacunes via les archives.',
    },
  },

  evenements_narratifs: [
    {
      id: 'iskraeth_correspondance_calculs',
      titre: 'La correspondance avec les calculs de Velskrevyn',
      description: 'Les calculs astronomiques de Velskrevyn (342) sur la "fenêtre de 18 mois" correspondent à des observations qu\'Iskraeth a faites pendant le deuxième cycle — des alignements qui précédaient un dégel. Il ne peut pas confirmer que le lien est causal. Il peut confirmer que la correspondance existe. Cette confirmation partielle a un poids dans le débat sur la fenêtre.',
      personnages_impliques: [342, 52],
      declencheur: 'Présentation des calculs de Velskrevyn',
      consequence: 'Confirmation partielle par un témoin direct d\'un cycle précédent — poids dans le débat sur la fenêtre de dégel',
    },
    {
      id: 'iskraeth_lacunes_memoire',
      titre: 'Les lacunes des premières décennies',
      description: 'Sa mémoire des premières décennies — les 50 premières années — présente des lacunes croissantes. Karath (52) archive ses récits mais aussi croise les lacunes avec des archives écrites de l\'époque pour les combler. Le problème est que les archives écrites de ses premières décennies sont incomplètes. Certaines informations sur le premier cycle pourraient être perdues.',
      personnages_impliques: [52, 164],
      declencheur: 'Identification de lacunes mémorielles dans les récits',
      consequence: 'Perte potentielle d\'informations sur le premier cycle — archives partiellement compensatoires',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Témoin de 300 ans et trois cycles de gel/dégel à Crysalme. Ses récits sont une source unique sur les cycles précédents — y compris une correspondance avec les calculs astronomiques actuels sur la fenêtre de dégel.',

  relations: [
    { id: 52, nom: 'Karath', type: 'allié', note: 'Archive ses récits. Aide à combler les lacunes mémorielles avec des sources écrites de l\'époque.' },
    { id: 164, nom: 'Syraris', type: 'allié', note: 'Contemporain avec une perspective à long terme naissante. Conversations personnelles sur ce que ça signifie de voir les cycles.' },
  ],

  combat: {
    sorts: [
      'Gel de cycle (Glace) — projection d\'une vague de froid concentré inspirée des gels massifs observés — zone de gel étendue',
      'Mémoire féerique (Fée) — invocation d\'une image de Crysalme d\'époque passée — perturbation psychique par discontinuité',
      'Stase ancienne (Glace + Fée) — combinaison de techniques de preservation issues des cycles précédents — gel profond sur une cible',
    ],
  },

  image_prompts: [
    {
      id: 'iskraeth_recit',
      description: 'Iskraeth assis dans une salle d\'archives de Crysalme, face à Karath (52) qui note. Il parle avec les gestes mesurés de quelqu\'un qui choisit ses mots pour leur précision. Derrière lui, une fenêtre sur un paysage glacé — le même paysage qu\'il a vu se transformer 3 fois.',
      style: 'réaliste Givrin ancien, récit d\'archive, salle de Crysalme, fenêtre sur gel',
    },
  ],

  lore_long: `Iskraeth a 300 ans. Il a vu 3 cycles de gel et dégel à Crysalme — des périodes où la glace reculait puis revenait.

Le Gel Éternel actuel a des caractéristiques qu'il n'a pas vues dans les cycles précédents. Il ne sait pas ce que ça signifie. Il ne dit pas le contraire pour rassurer la Monarchie.

Les calculs de Velskrevyn (342) sur la fenêtre de 18 mois correspondent à des alignements qu'il a observés avant un dégel dans le deuxième cycle. Ce n'est pas une confirmation. C'est une correspondance.

Sa mémoire des premières décennies présente des lacunes. Karath (52) archive et comble. Certaines informations sur le premier cycle pourraient être perdues.`,
};

export default iskraeth;
