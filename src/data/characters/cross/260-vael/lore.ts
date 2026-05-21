import type { PersonnageLoreComplet } from '../../../lore-types';

const vael: PersonnageLoreComplet = {
  id: 260,
  nom: 'Vael',
  element: 'Fée',
  element2: 'Spectre',
  espece: 'Fées',
  region: 'Asterciel',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Petite, légèrement voûtée — pas par âge mais par une habitude de se faire moins haute qu\'elle n\'est, comme si moins de surface exposée signifiait moins à entendre.',
    peau: 'Fée gris-blanc, presque translucide aux extrémités. L\'élément Spectre secondaire a accentué cette translucidité avec les années — on distingue légèrement les veines aux mains.',
    yeux: 'Gris très pâle, presque blancs. Ils ne se fixent jamais longtemps sur un interlocuteur — pas par évitement, par écoute. Elle écoute mieux quand elle ne regarde pas.',
    vetements: 'Tenue simple, sans distinction de faction ni de statut. Toujours des tissus épais qui couvrent les oreilles — une habitude, pas un protocole.',
    signes_particuliers: 'Elle entend ce que les autres n\'entendent pas. Pas des voix — des résonances, des fréquences élémentaires qui persistent après que leur source s\'est tue. Dans les endroits très fréquentés, elle porte une capuche même en intérieur.',
  },

  psychologie: {
    dominante: 'Sagesse prudente. Elle sait depuis 30 ans ce qu\'elle entend et a appris à vivre avec. Ce n\'est pas de la résignation — c\'est une accommodation à une capacité qu\'elle ne peut pas éteindre.',
    mecanisme_de_defense: 'La distance physique. Elle vit à la frontière d\'Asterciel — loin des centres de population dense, loin de la Citadelle. La distance ne tait pas ce qu\'elle entend mais réduit le volume.',
    contradiction_interne: 'Elle a quitté la Citadelle pour se protéger de ce qu\'elle entendait. Ce qu\'elle entendait était important — assez important pour que son départ ait inquiété des gens qui n\'auraient pas dû s\'inquiéter d\'un départ ordinaire. Elle a choisi sa santé sur l\'information. Elle se demande parfois si c\'était le bon choix.',
    rapport_aux_autres: 'Rare contact. Elle répond aux messages de Sylviel (246) avec des réponses ambiguës — pas des refus, pas des confirmations. Elle sait ce que Sylviel cherche. Elle n\'est pas encore décidée à lui donner.',
    vision_du_monde: 'Les choses que personne ne veut savoir sont les choses les plus importantes. Et les gens qui les savent paient un prix que les autres ne voient pas.',
  },

  histoire: {
    enfance: {
      titre: 'L\'enfant qui entendait l\'écho',
      contenu: 'Née à la Citadelle dans une famille fée bien établie. À 6 ans elle avait dit à sa mère que "les pièces se souviennent des gens qui y ont été". Sa mère avait supposé que c\'était poétique. Ce n\'était pas poétique — c\'était une description précise d\'une capacité qu\'elle ne savait pas encore nommer.',
    },
    arrivee: {
      titre: 'La Citadelle et ses fréquences',
      contenu: 'Elle avait travaillé à la Citadelle pendant 24 ans — classificatrice, puis analyste des profils élémentaires. Son élément Spectre lui donnait un accès à des résonances que ses collègues ne percevaient pas. Elle les interprétait, les transmettait, était valorisée pour ça. Pendant 24 ans elle avait géré le volume.',
    },
    premier_conflit: {
      titre: 'Ce qu\'elle a commencé à entendre',
      contenu: 'Elle ne parle pas précisément de ce qu\'elle a commencé à entendre dans les dernières années à la Citadelle. Ce qu\'elle dit, toujours avec la même économie de mots : que certains endroits dans la Citadelle avaient commencé à émettre des fréquences élémentaires qui ne correspondaient à aucune source vivante. Des résonances résiduelles d\'une qualité particulière — la fréquence de quelque chose qui avait été et n\'était plus.',
    },
    revelation: {
      titre: 'Le jour du départ',
      contenu: 'À 41 ans, elle est allée voir sa supérieure et a dit "j\'entends trop bien". C\'était tout. Sa supérieure lui avait demandé d\'élaborer. Elle avait dit que c\'était la seule façon dont elle pouvait le formuler. Elle avait déposé son badge et était partie. Ça avait inquiété beaucoup de gens — pas parce qu\'elle partait, mais parce qu\'elle n\'avait pas expliqué ce qu\'elle entendait.',
    },
    etat_actuel: {
      titre: 'La frontière d\'Asterciel',
      contenu: 'Elle vit depuis 30 ans à la frontière d\'Asterciel, dans une maison basse au bord d\'une forêt clairsemée. Elle a rencontré Osara (51) à Vel\'Nox il y a 15 ans — elles n\'ont pas parlé de ce qu\'elles savaient, elles ont parlé d\'autre chose, mais la reconnaissance avait été immédiate. Sylviel lui envoie des messages depuis 4 ans. Elle répond. Eiravel a lu son rapport de démission — 3 lignes qui ne disent rien.',
    },
  },

  evenements_narratifs: [
    {
      id: 'vael_depart_reponses',
      titre: 'Les gens qui s\'inquiètent',
      description: 'Son départ a inquiété des gens qui n\'auraient pas dû s\'inquiéter d\'un départ ordinaire — pas sa famille, pas ses collègues proches, mais des gens dans des positions qui avaient accès à ce qu\'elle avait accès. Ils ne pouvaient pas lui demander ce qu\'elle avait entendu sans révéler qu\'ils savaient qu\'elle avait entendu quelque chose de spécifique. Elle l\'avait compris. Elle était partie quand même.',
      personnages_impliques: [],
      declencheur: 'Départ de la Citadelle à 41 ans',
      consequence: 'Inquiétude sans résolution — les gens qui savaient ne pouvaient pas poser la question directe',
    },
    {
      id: 'vael_osara_vel_nox',
      titre: 'La reconnaissance à Vel\'Nox',
      description: 'Il y a 15 ans, Osara (51) et elle s\'étaient croisées lors d\'un passage par une maison Vel\'Nox. Elles avaient parlé d\'herbes locales et de routes côtières. Elles n\'avaient pas parlé de ce qu\'elles savaient. Mais quelque chose dans la façon dont elles avaient toutes les deux évité certains sujets avait été une conversation en soi. Vael pense encore à ce passage. Elle se demande ce qu\'Osara entend.',
      personnages_impliques: [51],
      declencheur: 'Croisement fortuit dans une maison Dissident',
      consequence: 'Reconnaissance mutuelle sans échange direct — deux femmes qui savent quelque chose et ont choisi le même type de silence',
    },
    {
      id: 'vael_sylviel_messages',
      titre: 'Les messages de Sylviel',
      description: 'Sylviel (246) lui envoie des messages depuis 4 ans — toujours des questions indirectes sur des observations élémentaires générales, jamais sur ce que Vael sait précisément. Vael répond avec des observations également générales. Sylviel cherche à savoir si Vael peut lui confirmer quelque chose. Vael n\'est pas encore décidée — pas parce qu\'elle ne fait pas confiance à Sylviel, mais parce que donner l\'information change quelque chose qu\'elle ne peut pas calculer à l\'avance.',
      personnages_impliques: [246],
      declencheur: 'Tentative de contact de Sylviel',
      consequence: 'Dialogue de non-dits — chacune sait ce que l\'autre cherche, aucune ne l\'a formulé',
    },
    {
      id: 'vael_eiravel_rapport',
      titre: 'Les 3 lignes',
      description: 'Eiravel (248) a lu son rapport de démission en archive. 3 lignes : date, motif ("inadaptation aux conditions acoustiques"), signature. Eiravel a remarqué que le motif était inhabituel. Elle a cherché si d\'autres rapports de démission de la Citadelle utilisaient ce motif. Elle en a trouvé 2 autres sur 40 ans. Elle a noté les 3 noms.',
      personnages_impliques: [248],
      declencheur: 'Lecture du rapport de démission par Eiravel',
      consequence: 'Point de connexion indirect — Eiravel a un fil qui mène à Vael sans savoir ce qu\'elle trouverait',
    },
  ],

  arcs: ['arc_citadelle_empire', 'arc_convergence_drain'],
  position_dans_arc: 'La femme qui sait sans l\'avoir dit. Elle porte depuis 30 ans une information que personne n\'a pu lui extraire parce que personne ne pouvait lui poser la bonne question sans se dénoncer. Elle est une clé que quelqu\'un cherche encore sans savoir qu\'elle existe.',

  relations: [
    { id: 246, nom: 'Sylviel', type: 'contact_nécessaire', note: 'Essaie de la contacter depuis 4 ans via des questions indirectes. Vael répond sans confirmer ni infirmer.' },
    { id: 51, nom: 'Osara', type: 'allié', note: 'Croisée à Vel\'Nox il y a 15 ans. Reconnaissance mutuelle sans échange direct. Les deux savent quelque chose.' },
    { id: 248, nom: 'Eiravel', type: 'inconnue_qui_change_tout', note: 'A lu son rapport de démission. A noté les 3 lignes. Cherche le fil sans savoir ce qu\'il mène.' },
  ],

  combat: {
    sorts: [
      'Écoute spectrelle (Spectre) — perception des résonances élémentaires résiduelles dans un espace — "mémoire" des présences passées',
      'Voile de silence (Fée) — annulation temporaire des fréquences élémentaires émises par une zone',
      'Résonance fée-spectre (combiné) — amplification d\'une résonance résiduelle pour la rendre perceptible aux non-Spectre',
    ],
  },

  image_prompts: [
    {
      id: 'vael_frontiere',
      description: 'Vael devant sa maison à la frontière d\'Asterciel, capuche relevée malgré l\'absence de froid, les yeux gris pâle regardant vers la forêt sans regarder. Elle écoute quelque chose que personne d\'autre dans ce paysage ne peut entendre. Elle ne semble pas perturbée — elle a 30 ans de pratique avec ce qu\'elle entend.',
      style: 'réaliste fée-spectre, lumière crépusculaire, forêt de frontière, tons gris et blanc',
    },
  ],

  lore_long: `"J'entends trop bien."

C'est tout ce qu'elle a dit. C'est tout ce qu'elle avait à dire — parce que ça contenait tout ce qu'elle voulait transmettre et rien de ce qu'elle voulait révéler.

Ce qu'elle entendait dans les dernières années à la Citadelle : des résonances résiduelles. L'élément Spectre permet de percevoir les traces élémentaires que les êtres laissent dans les espaces qu'ils ont occupés — une fréquence faible, décroissante, qui s'estompe sur des semaines ou des mois selon l'intensité de la présence. Dans un endroit ordinaire, ça ressemble à un léger bourdonnement de fond. Dans un endroit où des gens ont vécu intensément, ça ressemble à de la musique polyphonique.

Dans certains endroits de la Citadelle, elle entendait des résonances d'une qualité qu'elle n'avait jamais identifiée ailleurs : non pas la décroissance normale d'une présence partie, mais quelque chose de plus brusque — l'interruption. Une fréquence qui cesse net, pas progressivement. Comme une corde coupée.

Elle en avait compté 34 sur les 3 dernières années avant son départ.

Elle n'a jamais dit ça à personne. Elle a dit "j'entends trop bien" et elle est partie. Les gens qui se sont inquiétés de son départ savaient pourquoi elle entendait — ils ne pouvaient pas poser la question directe sans confirmer qu'ils savaient ce qu'elle avait entendu.

30 ans de frontière. Le volume est plus gérable. Il y a les forêts, les oiseaux, les vieilles pierres qui ont des siècles de mémoire tranquille.

Sylviel lui écrit. Vael répond sans confirmer. Eiravel a 3 lignes dans un rapport de démission. Osara sait quelque chose différent, peut-être compatible.

Elle est vieille maintenant. Elle est en bonne santé. Elle pense parfois que son choix — sa santé sur l'information — était le bon. Elle pense aussi que si quelqu'un lui posait la bonne question d'une façon qui n'obligeait pas à se dénoncer pour la poser, elle répondrait peut-être.

Personne ne lui a encore posé cette question.`,
};

export default vael;
