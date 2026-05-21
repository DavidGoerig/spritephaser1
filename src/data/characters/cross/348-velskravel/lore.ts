import type { PersonnageLoreComplet } from '../../../lore-types';

const velskravel: PersonnageLoreComplet = {
  id: 348,
  nom: 'Velskravel',
  element: 'Spectre',
  element2: 'Glace',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Légèrement au-dessus de la moyenne Givrin, avec une façon de se tenir qui indique quelqu\'un habitué à travailler dans des espaces inconfortables — le Champ Gelé n\'est pas un environnement de bureau.',
    peau: 'Blanc-gris Givrin avec une légère coloration bleue aux joues — l\'effet de l\'exposition fréquente aux zones spectrales froides du Champ.',
    yeux: 'Gris-bleu avec une qualité analytique visible. Il regarde les choses comme s\'il cherchait à les quantifier — surfaces, distances, comportements.',
    vetements: 'Tenue de terrain avec des instruments d\'enregistrement intégrés — des capteurs de modifications spectrales, des thermomètres pour les gradients de température dans le Champ. Fonctionnel avant tout.',
    signes_particuliers: 'Il prend des notes en temps réel sur tout — une habitude qui peut rendre les conversations avec lui légèrement inconfortables pour les personnes qui ne savent pas si leurs paroles sont en train d\'être notées. Elles le sont souvent.',
  },

  psychologie: {
    dominante: 'Vérification empirique de la conscience résiduelle dans le Champ Gelé. Il veut savoir si les soldats gelés ont une expérience subjective — pas seulement des présences spectrales, mais une conscience active. Cette question a des implications éthiques importantes sur la façon de traiter le Champ.',
    mecanisme_de_defense: 'Les données comme arbitre. Si ses données montrent une conscience résiduelle, ça devient un fait, pas une croyance. Il attend que les données tranchent. Elles n\'ont pas encore tranché.',
    contradiction_interne: 'Ses méthodes de vérification impliquent de perturber partiellement les présences du Champ pour observer leurs réponses. Thyvalskra (347) lui a accordé un accès formel mais les méthodes qu\'il utilise sont à la limite de ce que le mandat de protection de Thyvalskra permettrait s\'il en connaissait les détails.',
    rapport_aux_autres: 'Velthkra (345) est sa source de données qualitatives — elle affirme entendre les présences, il vérifie si ses affirmations correspondent à des mesures quantifiables. Aethren (54) lui a posé des questions sur les implications éthiques de ses résultats pour les prisonniers politiques en stase — une connexion qu\'il n\'avait pas anticipée.',
    vision_du_monde: 'Si quelqu\'un est conscient, même en état de suspension, sa conscience a une valeur morale. Si les soldats gelés sont conscients, leur état soulève des questions que personne n\'a posées depuis qu\'ils ont été gelés.',
  },

  histoire: {
    enfance: {
      titre: 'La question initiale',
      contenu: 'À 18 ans, lors d\'une visite du Champ avec son père, il avait posé la question à voix haute : "Est-ce qu\'ils ressentent quelque chose ?" Son père avait répondu "non, bien sûr que non". Il avait décidé de vérifier. C\'est le type de décision qui détermine une trajectoire.',
    },
    arrivee: {
      titre: 'L\'accès formel',
      contenu: 'À 28 ans, Thyvalskra (347) lui avait accordé un accès formel au Champ pour une "étude non invasive des présences spectrales". Les méthodes qu\'il avait proposées à Thyvalskra étaient non invasives. Celles qu\'il utilisait dans la pratique l\'étaient moins. Il n\'avait pas mentionné l\'écart.',
    },
    premier_conflit: {
      titre: 'L\'anomalie avec Velthkra',
      contenu: 'À 34 ans, il avait commencé à vérifier les affirmations de Velthkra (345) sur ce qu\'elle entendait dans le Champ. Les premiers tests avaient produit des résultats au-delà de la probabilité de coïncidence. Il n\'avait pas conclu à l\'authenticité — il avait documenté une anomalie et demandé plus de données.',
    },
    revelation: {
      titre: 'La question d\'Aethren',
      contenu: 'Aethren (54) l\'avait contacté avec une question directe : si ses résultats confirmaient la conscience des soldats gelés, est-ce que ça s\'appliquerait aussi aux prisonniers politiques maintenus en stase par la Monarchie ? Il n\'avait pas anticipé cette connexion. Sa réponse avait été prudente — "la méthode de stase est différente". Mais la question restait.',
    },
    etat_actuel: {
      titre: 'Les données actuelles',
      contenu: 'Ses données sur 3 ans d\'observation montrent 4 catégories de présences dans le Champ — des présences avec des réponses cohérentes aux stimuli, des présences avec des réponses incohérentes, des présences sans réponse détectable, et des présences qui semblent perturber activement ses instruments. La 4ème catégorie est la plus récente et la moins comprise.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velskravel_quatrieme_categorie',
      titre: 'Les présences perturbatrices',
      description: 'Une 4ème catégorie de présences a émergé dans ses données récentes — des présences qui perturbent activement ses instruments de mesure. Ce n\'est pas du bruit — les perturbations sont trop régulières. Thyvalskra (347) a observé une coordination entre présences. Ces deux observations pourraient être liées.',
      personnages_impliques: [347, 345],
      declencheur: 'Émergence d\'une 4ème catégorie de présences avec comportement actif',
      consequence: 'Données anormales — lien possible avec la coordination observée par Thyvalskra',
    },
    {
      id: 'velskravel_question_aethren',
      titre: 'Les prisonniers en stase',
      description: 'Aethren (54) a posé la connexion entre ses résultats sur le Champ et les prisonniers politiques en stase. Si la conscience survit dans la glace — dans le Champ et dans les stases de Velskraeth (335) — la question morale sur le traitement de ces personnes s\'étend au-delà du Champ. Il n\'a pas de réponse. La question est dans ses notes.',
      personnages_impliques: [54, 335],
      declencheur: 'Question d\'Aethren sur la connexion entre soldats gelés et prisonniers en stase',
      consequence: 'Implication éthique élargie — données sur le Champ pertinentes pour la stase politique',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Chercheur indépendant qui essaie de prouver la conscience résiduelle des soldats gelés dans le Champ. Ses données montrent 4 catégories de présences dont une 4ème catégorie active et récente. Ses résultats ont des implications pour les prisonniers en stase.',

  relations: [
    { id: 345, nom: 'Velthkra', type: 'allié', note: 'Source de données qualitatives sur les présences. Ses affirmations produisent des anomalies statistiques dans ses vérifications.' },
    { id: 54, nom: 'Aethren', type: 'contact', note: 'A posé la connexion entre les résultats du Champ et les prisonniers politiques en stase.' },
  ],

  combat: {
    sorts: [
      'Sonde spectrale (Spectre) — envoi d\'une sonde de mesure dans une zone de présence spectrale — détection et analyse',
      'Barrière de glace analytique (Glace) — création d\'une surface de glace qui concentre les résidus spectraux — observation amplifiée',
      'Perturbation de zone (Spectre + Glace) — déstabilisation des présences spectrales dans une zone — dispersion ou neutralisation',
    ],
  },

  image_prompts: [
    {
      id: 'velskravel_mesure',
      description: 'Velskravel dans le Champ Gelé, tenant un instrument de mesure vers une zone de présence spectrale plus dense. Il note les données en simultané. Autour de lui, les présences sont légèrement visibles — des formes floues dans la glace. Son expression est concentrée et analytique. Il ne regarde pas les présences — il regarde les données.',
      style: 'réaliste chercheur givrin, instruments de mesure, Champ Gelé, présences spectrales visibles, annotation simultanée',
    },
  ],

  lore_long: `Velskravel essaie de prouver que les soldats gelés dans le Champ de Crysalme ont une conscience résiduelle. Ses méthodes perturbent partiellement les présences — au-delà de ce que son accès formel autorise.

Velthkra (345) lui fournit des données qualitatives qui produisent des anomalies statistiques dans ses vérifications. La 4ème catégorie de présences — celles qui perturbent ses instruments — est récente et non comprise.

Aethren (54) lui a posé la connexion avec les prisonniers politiques en stase. Si la conscience survit dans le Champ, elle survit peut-être aussi dans les stases de Velskraeth (335). La question est dans ses notes. Il n'a pas de réponse.`,
};

export default velskravel;
