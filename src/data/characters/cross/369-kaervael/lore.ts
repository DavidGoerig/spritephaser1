import type { PersonnageLoreComplet } from '../../../lore-types';

const kaervael: PersonnageLoreComplet = {
  id: 369,
  nom: 'Kaervael',
  element: 'Psy',
  element2: 'Stellaire',
  espece: 'Hommes-Liens',
  region: 'Déserts',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Philosophe itinérant — une corpulence de route longue, habituée aux déplacements. Ni athlétique ni sédentaire. Des mains de quelqu\'un qui écrit beaucoup.',
    peau: 'Brun sombre des Déserts avec des marques d\'exposition prolongée — il passe beaucoup de temps en extérieur, à des altitudes et sous des cieux variés.',
    yeux: 'Marron profond avec une qualité de contemplation — il regarde les choses longtemps avant de parler.',
    vetements: 'Tenue de voyage simple et durable. Il porte des carnets. Plusieurs. Remplis.',
    signes_particuliers: 'Il pose des questions sur les questions — pas pour esquiver, mais parce qu\'il pense que la formulation de la question détermine le type de réponses accessible.',
  },

  psychologie: {
    dominante: 'Philosophie de la conscience élémentaire et de la destinée cosmique — chercher à comprendre si les purs élémentaires ont une conscience cosmique distincte, si leur résonance avec un élément les place dans un rapport différent au cosmos que les Élus ordinaires.',
    mecanisme_de_defense: 'La question ouverte. Tant qu\'il cherche, il n\'a pas à conclure. Les conclusions engagent. Les questions restent libres.',
    contradiction_interne: 'Sa philosophie sur la destinée cosmique des purs élémentaires intéresse la Convergence — Telos (29) lui a signalé que ses travaux circulent dans des cercles de recherche qui ne sont pas tous bienveillants. Il n\'a pas arrêté de publier.',
    rapport_aux_autres: 'Telos (29) est son interlocuteur intellectuel principal — leurs échanges sur la nature des trajectoires stellaires et de la conscience élémentaire durent depuis des années. Drevorn (233) est un philosophe Chthonien dont les perspectives terrestres complètent ses perspectives aériennes.',
    vision_du_monde: 'La conscience d\'un être élémentaire est structurée par sa résonance — pas seulement dans ce monde mais dans le tissu cosmique. Les purs élémentaires ont une résonance maximale. Ce que ça signifie pour leur rapport au cosmos est la question centrale.',
  },

  histoire: {
    enfance: {
      titre: 'Le premier ciel des Déserts',
      contenu: 'À 12 ans, la clarté du ciel nocturne des Déserts lui avait révélé des patterns stellaires que ses professeurs n\'avaient pas. Il avait commencé à se demander si ces patterns avaient un sens au-delà de la cartographie — si le cosmos regardait en retour.',
    },
    arrivee: {
      titre: 'La rencontre avec Telos',
      contenu: 'À 25 ans, Telos (29) avait répondu à un de ses travaux publiés avec des commentaires qui montraient une compréhension profonde des trajectoires stellaires. Ils avaient commencé une correspondance. La correspondance avait duré jusqu\'à leurs premières rencontres directes.',
    },
    premier_conflit: {
      titre: 'La circulation non souhaitée',
      contenu: 'À 31 ans, Telos lui avait signalé que ses travaux sur la conscience cosmique des purs élémentaires circulaient dans des cercles de recherche de la Convergence — dans un contexte qui n\'était pas académique. Il avait considéré d\'arrêter de publier. Il n\'avait pas arrêté.',
    },
    revelation: {
      titre: 'La perspective de Drevorn',
      contenu: 'Drevorn (233) lui avait proposé une perspective radicalement différente — la conscience des purs élémentaires n\'est pas cosmique, elle est tellurique. Elle descend dans la profondeur de la matière, pas vers les étoiles. Les deux visions ne s\'excluent pas. Elles l\'avaient conduit à reformuler sa question centrale.',
    },
    etat_actuel: {
      titre: 'La question reformulée',
      contenu: 'Sa question n\'est plus "les purs élémentaires ont-ils une conscience cosmique ?" mais "la conscience d\'un pur élémentaire est-elle une forme de pont entre la matière et le cosmos ?" Cette reformulation a des implications pour ce que signifie les collecter ou les utiliser. Il n\'a pas encore publié cette reformulation.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kaervael_reformulation',
      titre: 'La question du pont',
      description: 'Sa nouvelle formulation — le pur élémentaire comme pont entre matière et cosmos — a des implications directes pour ce que la Convergence fait dans l\'arc de l\'Avatar Total. Si les purs élémentaires sont des ponts, leur drainage détruit quelque chose d\'irréversible. Il n\'a pas encore publié. Il ne sait pas encore s\'il va publier.',
      personnages_impliques: [29, 233],
      declencheur: 'Reformulation de la question centrale après intégration de la perspective de Drevorn',
      consequence: 'Implications pour le drainage des purs élémentaires — décision de publication en suspens',
    },
    {
      id: 'kaervael_circulation_convergence',
      titre: 'Les travaux qui circulent',
      description: 'Ses travaux précédents circulent dans des cercles de recherche Convergence. Sa nouvelle reformulation, si publiée, arriverait dans ces mêmes cercles. Mais cette fois, les implications sont contre l\'usage Convergence des purs élémentaires, pas pour. Telos (29) a été informé. Il réfléchit à comment publier ou à qui.',
      personnages_impliques: [29, 233],
      declencheur: 'Tension entre publication académique et impact opérationnel de la nouvelle question',
      consequence: 'Choix de publication à faire — canal académique ou canal Dissident',
    },
  ],

  arcs: ['arc_confluence_psy_stellaire'],
  position_dans_arc: 'Philosophe indépendant cherchant le lien entre conscience élémentaire et cosmos. Sa nouvelle reformulation — le pur élémentaire comme pont — a des implications contre l\'usage Convergence. Pas encore publiée. Décision de canal de publication en suspens.',

  relations: [
    { id: 29, nom: 'Telos', type: 'allié', note: 'Interlocuteur intellectuel principal depuis des années. L\'a alerté sur la circulation de ses travaux dans des cercles Convergence.' },
    { id: 233, nom: 'Drevorn', type: 'allié', note: 'Philosophe Chthonien. Sa perspective tellurique a conduit à la reformulation de la question centrale.' },
  ],

  combat: {
    sorts: [
      'Résonance contemplative (Psy) — projection d\'un état de conscience ouvert — réduction des défenses psychiques adverses',
      'Trajectoire de sens (Stellaire) — alignement d\'une intention sur une trajectoire cosmique — amplification de la portée d\'une action',
      'Pont de conscience (Psy + Stellaire) — connexion temporaire entre la résonance psychique d\'un être et ses trajectoires stellaires — compréhension accelerée',
    ],
  },

  image_prompts: [
    {
      id: 'kaervael_contemplation',
      description: 'Kaervael dans les Déserts, assis face à un horizon étoilé. Un carnet ouvert sur ses genoux, non écrit — il cherche les mots. Son expression est de questionnement pur — pas d\'anxiété, de recherche. Les étoiles sont claires et nombreuses derrière lui.',
      style: 'réaliste philosophe Homme-Lien, Déserts sous les étoiles, carnet ouvert, contemplation',
    },
  ],

  lore_long: `Kaervael cherche le lien entre conscience élémentaire et destinée cosmique. Sa question centrale vient de se reformuler : le pur élémentaire comme pont entre matière et cosmos — pas simplement un être à haute résonance.

Cette reformulation a des implications directes pour ce que la Convergence fait avec les purs élémentaires. Ses travaux précédents circulent déjà dans des cercles de recherche Convergence.

Il ne sait pas encore s'il va publier la nouvelle question, ni dans quel canal.`,
};

export default kaervael;
