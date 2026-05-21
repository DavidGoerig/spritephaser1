import type { PersonnageLoreComplet } from '../../../lore-types';

const sylvrath: PersonnageLoreComplet = {
  id: 282,
  nom: 'Sylvrath',
  element: 'Plante',
  element2: 'Fée',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Grand pour un Sylvan, avec une stature qui s\'est tassée avec les siècles sans perdre sa présence. 500 ans se lisent dans la façon dont il occupe l\'espace.',
    peau: 'Brun-vert profond, presque uniforme — la différence entre peau et végétation s\'est atténuée. Des racines fines semblent traverser ses avant-bras sous la peau.',
    yeux: 'Vert très clair, presque blanc. Ils ont vu trois cycles de destruction forestière. Le regard a une qualité temporelle que les jeunes Sylvans trouvent inconfortable.',
    vetements: 'Robe simple de laine grise, inchangée de style depuis un siècle. Il n\'a aucun ornement. La Fée secondaire se manifeste par une très légère lueur dans les yeux quand il parle de quelque chose qui l\'importe.',
    signes_particuliers: 'Quand il reste immobile, les plantes proches poussent légèrement vers lui — un gradient d\'attraction passive qu\'il ne contrôle plus activement depuis longtemps.',
  },

  psychologie: {
    dominante: 'Perspective longue appliquée à la patience. Il a vu trois cycles. Le quatrième en cours a des patterns qu\'il reconnaît. Il ne parle pas sans qu\'on le cherche parce que les gens non prêts n\'entendent pas.',
    mecanisme_de_defense: 'Le silence. À 500 ans, le silence n\'est pas une stratégie — c\'est une façon d\'écouter ce que les gens âgés de 30 ou 50 ans n\'entendent pas encore.',
    contradiction_interne: 'Il sait des choses sur les cycles précédents qui pourraient changer la façon dont les factions actuelles comprennent leur situation. Il ne les dit pas sans qu\'on le cherche. Parfois il se demande si attendre d\'être cherché est une sagesse ou une passivité couverte de dignité.',
    rapport_aux_autres: 'Leth (34) est venu le voir 4 fois en 30 ans. C\'est la fréquence la plus haute que Sylvrath accorde à quelqu\'un. Il respecte la façon dont Leth porte son âge — différemment, mais avec une honnêteté similaire.',
    vision_du_monde: 'Trois cycles. La Faim des Racines actuelle a des points communs avec la deuxième destruction et des différences avec la première. Ces distinctions ont de l\'importance si on sait les interpréter.',
  },

  histoire: {
    enfance: {
      titre: 'Le premier cycle',
      contenu: 'Né avant la première destruction forestière dont on ait trace dans les archives Sylvans — une catastrophe différente de la Faim des Racines, causée par un déséquilibre élémentaire naturel plutôt qu\'une saturation. Il avait 60 ans quand les arbres avaient commencé à mourir. Il en avait 140 quand la forêt avait recommencé à pousser.',
    },
    arrivee: {
      titre: 'Le deuxième cycle',
      contenu: 'La deuxième destruction, deux siècles plus tard — celle-là causée par une intervention humaine sur les réseaux racinaires. Il avait été dans la forêt quand ça avait commencé. Il y était resté. Pas par héroïsme — il ne savait pas encore si partir ou rester était la bonne réponse. Rester lui avait appris ce que la mort d\'une forêt sentait de l\'intérieur.',
    },
    premier_conflit: {
      titre: 'Les factions et leurs certitudes',
      contenu: 'Après le deuxième cycle, deux factions avaient émergé — avec des noms différents, des prédécesseurs aux Conservateurs et aux Gardiens actuels. Il avait vu leurs arguments. Il avait vu laquelle avait raison. Il n\'avait pas dit laquelle avait eu raison parce que personne ne le lui avait demandé. La forêt avait repoussé quand même.',
    },
    revelation: {
      titre: 'La Faim des Racines',
      contenu: 'Le troisième cycle — la Faim des Racines. Il avait reconnu le pattern dans les 15 premiers jours. Il n\'en avait parlé qu\'à Thalorn, 4 mois plus tard, quand Thalorn était venu le chercher. Il lui avait dit ce qu\'il avait vu dans les cycles précédents. Thalorn avait écouté. Pas tout ce que Sylvrath lui avait dit s\'était retrouvé dans les décisions des Conservateurs.',
    },
    etat_actuel: {
      titre: 'L\'attente du chercheur',
      contenu: 'Il vit dans une clairière à la limite de la forêt active de Sylvera. Il ne cherche personne. Leth vient parfois. Thalorn envoie des gens qui ont des questions spécifiques. Il répond aux questions posées. Il ne répond pas aux questions non posées, même si elles sont plus importantes.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sylvrath_connaissance_non_transmise',
      titre: 'Ce qu\'il n\'a pas dit',
      description: 'Il sait que la Faim des Racines actuelle a un mécanisme de récupération similaire à celui du premier cycle — si certaines conditions sont réunies. Ces conditions sont techniquement réalisables. Personne ne lui a posé la question dans ces termes. Il attend qu\'on la pose.',
      personnages_impliques: [33, 34],
      declencheur: 'Connaissance accumulée sur trois cycles de destruction forestière',
      consequence: 'Information potentiellement cruciale non transmise par absence de question correcte',
    },
    {
      id: 'sylvrath_leth_visites',
      titre: 'Les quatre visites de Leth',
      description: 'Leth est venu 4 fois en 30 ans. Chaque visite était différente : une de curiosité, une d\'urgence, une de deuil, une de confirmation. Leth est le seul à avoir posé les bonnes questions — pas toutes, mais certaines. Sylvrath lui fait confiance de la façon dont on fait confiance à quelqu\'un qui cherche vraiment.',
      personnages_impliques: [34],
      declencheur: 'Quatre rencontres sur 30 ans',
      consequence: 'Relation de confiance fondée sur la qualité des questions plutôt que la fréquence des visites',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Mémoire vivante des cycles précédents. Il a les clés de quelque chose que personne d\'autre ne peut avoir — l\'expérience directe. Il attend qu\'on pose la bonne question.',

  relations: [
    { id: 33, nom: 'Thalorn', type: 'allié', note: 'L\'a cherché pendant la Faim des Racines. A écouté. N\'a pas tout utilisé — mais a écouté.' },
    { id: 34, nom: 'Leth', type: 'allié', note: 'A posé les meilleures questions. Fréquence la plus haute accordée — 4 visites en 30 ans.' },
  ],

  combat: {
    sorts: [
      'Enracinement millénaire (Plante) — activation des réseaux racinaires dormants dans une large zone — immobilisation par le sol',
      'Mémoire de forêt (Fée) — projection des émotions accumulées dans un lieu — désorientation psychique basée sur l\'histoire du lieu',
      'Croissance défensive (Plante) — création de barrières végétales denses à partir de graines dormantes — vitesse proportionnelle à son ancienneté',
    ],
  },

  image_prompts: [
    {
      id: 'sylvrath_clairiere',
      description: 'Sylvrath debout dans sa clairière, immobile. Les plantes autour de lui penchent légèrement vers lui. Son regard vert très clair fixe quelque chose dans la forêt que le visiteur ne voit pas. Il n\'est pas en attente — il est simplement là depuis trop longtemps pour distinguer l\'attente du reste.',
      style: 'réaliste sylvan ancien, lumière de clairière filtrée, tons verts profonds et gris, temporalité longue',
    },
  ],

  lore_long: `500 ans. Trois cycles de destruction forestière. Sylvrath a vu ce que personne d'autre ne peut avoir vu.

Il ne le dit pas sans qu'on le cherche. Ce n'est pas de l'arrogance — c'est une leçon des deux premiers cycles. Les gens qui n'ont pas posé la question n'entendent pas vraiment la réponse.

Il sait que la Faim des Racines actuelle a un mécanisme de récupération similaire à celui du premier cycle — si certaines conditions sont réunies. Ces conditions sont techniquement réalisables. Personne ne lui a posé la question dans ces termes. Il attend.

Leth est venu 4 fois en 30 ans. C'est la fréquence la plus haute qu'il accorde à quelqu'un. Leth a posé certaines des bonnes questions — pas toutes. Thalorn est venu une fois pendant la Faim des Racines. Il avait écouté. Pas tout ce que Sylvrath lui avait dit s'était retrouvé dans les décisions des Conservateurs.

Les plantes proches de lui poussent légèrement dans sa direction quand il reste immobile. Il ne contrôle plus ça activement depuis longtemps. C'est le genre de détail qu'on remarque à 500 ans — les limites entre ce qu'on fait et ce qu'on est deviennent poreuses.`,
};

export default sylvrath;
