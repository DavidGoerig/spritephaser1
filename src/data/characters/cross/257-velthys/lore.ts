import type { PersonnageLoreComplet } from '../../../lore-types';

const velthys: PersonnageLoreComplet = {
  id: 257,
  nom: 'Velthys',
  element: 'Fée',
  element2: 'Glace',
  espece: 'Fées',
  region: 'Citadelle',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Petite et légère, silhouette de soigneuse — rien qui évoque l\'autorité ou la menace, ce qui est précisément ce dont elle a besoin pour son travail.',
    peau: 'Fée blanc-bleuté, reflets de glace aux épaules et aux clavicules. Toujours légèrement fraîche au toucher — caractéristique Glace.',
    yeux: 'Bleu pâle, chaleureux malgré la froideur de l\'élément. Elle maintient un contact visuel direct et doux qui met les sujets à l\'aise.',
    vetements: 'Tenue de soigneuse de la Citadelle, blanc et bleu pâle. Toujours propre. Elle y tient — la propreté est une partie du langage de confiance qu\'elle construit avec ses patients.',
    signes_particuliers: 'Ses mains restent légèrement fraîches même en été. Les patients qui sont anxieux trouvent ce contact apaisant. Elle l\'a remarqué et l\'utilise délibérément.',
  },

  psychologie: {
    dominante: 'Soin authentique. Ce qu\'elle fait pour ses patients est réel — leur calme est réel, l\'équilibre élémentaire qu\'elle restaure est réel. Elle vit dans la conviction que son travail est bon parce que ses patients lui sourient avant de partir.',
    mecanisme_de_defense: 'Pas encore besoin d\'un mécanisme de défense — elle n\'a pas encore la question. Si la question venait, elle ne saurait pas comment y répondre parce qu\'elle n\'a jamais eu à défendre ce qu\'elle fait.',
    contradiction_interne: 'Ses méthodes sont identiques à celles que Taluya (236) a développées indépendamment côté Convergence. Les deux systèmes ont convergé vers la même solution pour le même problème. Velthys pense soigner. Taluya pense réduire la détresse mesurable. Les deux ont raison et toutes les deux opèrent dans un système qui utilise ce soin pour autre chose.',
    rapport_aux_autres: 'Elle aime ses patients. Pas professionnellement — réellement. Chacun passe entre 3 jours et 2 semaines avec elle. Elle apprend leurs noms, leurs habitudes, ce qui les calme. Ils partent. Elle ne les revoit pas.',
    vision_du_monde: 'La médecine est le seul domaine où l\'aide est toujours aide. Elle n\'a jamais eu raison de questionner ça.',
  },

  histoire: {
    enfance: {
      titre: 'La fille qui réparait',
      contenu: 'Née dans une famille fée modeste à la périphérie de la Citadelle. À 8 ans elle avait commencé à soigner les oiseaux blessés qu\'elle trouvait dans le jardin — pas par jeu, par besoin de faire quelque chose quand quelque chose ne fonctionnait pas. Son élément Glace se manifestait comme un apaisement naturel de la fièvre et de l\'inflammation.',
    },
    arrivee: {
      titre: 'Le recrutement',
      contenu: 'Repérée à 24 ans lors d\'une formation de soigneurs élémentaires. Le recrutement pour la section de "stabilisation des Élus" avait été présenté comme un poste médical spécialisé — travailler avec des sujets en état de stress élémentaire intense, les aider à se stabiliser avant un "transfert vers des structures adaptées". Elle avait accepté sans hésitation.',
    },
    premier_conflit: {
      titre: 'Pas de conflit',
      contenu: 'Elle n\'a pas de conflit. Ses patients arrivent anxieux, parfois terrifiés. Ils repartent calmes, équilibrés élémentairement, avec quelque chose qui ressemble à une acceptation. C\'est ce qu\'elle est supposée produire et c\'est ce qu\'elle produit. Les résultats confirment son travail.',
    },
    revelation: {
      titre: 'Ce que Kaeryn ne dit pas',
      contenu: 'Kaeryn (253) voit ses patients après elle — dans la section de rétention. Il la regarde parfois avec une expression qu\'elle ne sait pas interpréter. Pas de méfiance envers elle — plutôt une tristesse générale qu\'il semble ne pas vouloir lui transmettre. Elle a remarqué qu\'il n\'initie jamais de conversation sur les patients qu\'ils partagent.',
    },
    etat_actuel: {
      titre: 'La prochaine semaine',
      contenu: 'Elle a 4 patients en cours, 2 prévus la semaine suivante. Elle a préparé leurs dossiers avec soin. Pour l\'un d\'eux elle a noté une sensibilité particulière aux harmoniques Fée — elle a ajusté son protocole pour l\'utiliser. Quand il partira après stabilisation, elle ajoutera une note dans le dossier pour que les prochains soigneurs sachent.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velthys_taluya_methodes',
      titre: 'La convergence indépendante',
      description: 'Taluya (236) travaille côté Convergence sur exactement les mêmes méthodes — réduction du stress élémentaire avant la procédure de drainage. Leurs techniques ont convergé indépendamment : harmonisation par contact, stabilisation des pics élémentaires, travail sur l\'anticipation anxieuse. Si elles comparaient leurs protocoles, elles reconnaîtraient les mêmes principes. Elles ne se connaissent pas.',
      personnages_impliques: [236],
      declencheur: 'Développement parallèle indépendant des mêmes techniques de préparation',
      consequence: 'Miroir non rencontré — convergence technique symptomatique du même problème dans deux systèmes',
    },
    {
      id: 'velthys_kaeryn_silence',
      titre: 'Le silence de Kaeryn',
      description: 'Kaeryn voit ses patients après elle. Depuis 3 mois, sa façon de les regarder avant qu\'ils entrent dans sa section a changé — il les regarde différemment. Il ne lui a jamais dit ce qu\'il sait. Elle ne lui a jamais demandé ce qu\'il pense de leur travail commun. Il y a un silence entre eux sur ce sujet qui est, pour l\'instant, mu par des raisons complètement différentes : elle n\'a pas la question, il n\'a pas le courage de la poser.',
      personnages_impliques: [253],
      declencheur: 'Position adjacente dans la chaîne logistique des Élus',
      consequence: 'Témoin passif d\'une bonne foi utilisée à mauvais escient',
    },
    {
      id: 'velthys_efficacite_authentique',
      titre: 'Le soin qui fonctionne',
      description: 'Ses patients partent effectivement mieux — moins anxieux, élémentairement équilibrés, dans un état qui ressemble à une paix relative. Ce soin est réel. Il permet aussi au processus qui suit d\'être plus propre, plus efficace. Elle crée, sans le savoir, les conditions optimales pour ce qu\'elle ne sait pas qui arrive après.',
      personnages_impliques: [236],
      declencheur: 'Efficacité du protocole de stabilisation',
      consequence: 'Bonne foi transformée en complicité fonctionnelle',
    },
  ],

  arcs: ['arc_citadelle_empire'],
  position_dans_arc: 'Dupée authentique. Son soin est réel et il est utilisé. Elle est ce que le système a besoin qu\'elle soit sans lui avoir demandé d\'être autre chose que bonne.',

  relations: [
    { id: 253, nom: 'Kaeryn', type: 'contact_nécessaire', note: 'Voit ses patients après elle. Regarde différemment depuis 3 mois. Ne lui a jamais dit ce qu\'il sait.' },
    { id: 236, nom: 'Taluya', type: 'rival', note: 'Miroir non rencontré. Mêmes méthodes développées indépendamment, côté Convergence. Même honnêteté dans le soin, même utilisation par le système.' },
  ],

  combat: {
    sorts: [
      'Apaisant de Glace (Glace) — réduction de la fièvre et de l\'inflammation élémentaire par contact',
      'Harmonie fée (Fée) — synchronisation temporaire entre l\'état émotionnel du soignant et du patient, favorisant le calme',
      'Stabilisation cristalline (Glace) — gel temporaire d\'un pic élémentaire instable',
    ],
  },

  image_prompts: [
    {
      id: 'velthys_soin',
      description: 'Velthys avec un patient, ses mains posées doucement sur ses tempes. La lumière est tamisée, l\'atmosphère calme. Son expression est d\'une attention totale et sincère. Le patient commence à se détendre. Tout est réel. Dans le couloir derrière la porte, Kaeryn attend.',
      style: 'réaliste fée, lumière douce, salle de soins blanche et bleue, tons froids et doux',
    },
  ],

  lore_long: `Velthys aime ses patients.

Ce n'est pas un détail accessoire — c'est central à ce qu'elle est et à ce que le système utilise. Si elle ne les aimait pas, ses résultats seraient moins bons. Elle les aime, ses résultats sont excellents, le processus qui suit bénéficie de son excellence.

Elle ne sait pas ce qu'est le processus qui suit. Elle sait que ses patients sont "relocalisés" vers des structures mieux adaptées à leur profil élémentaire. Elle pense que ses méthodes de stabilisation leur permettent d'arriver dans ces structures dans un état optimal pour le traitement qu'on va leur offrir. Elle pense que c'est une bonne chose. Ses patients lui sourient avant de partir. C'est une mesure réelle.

Taluya (236) fait le même travail à 3000 km. Elle a développé les mêmes techniques de manière indépendante. La convergence n'est pas une coïncidence — le problème est le même (un sujet en état d'anxiété élémentaire intense), la solution optimale est la même (harmonisation progressive, travail sur l'anticipation), et les deux femmes sont arrivées au même endroit par des chemins différents. Si elles se rencontraient, elles auraient immédiatement de quoi parler.

Kaeryn la regarde différemment depuis 3 mois. Elle l'a remarqué. Elle n'a pas demandé pourquoi. Elle suppose que c'est quelque chose dans son propre travail — peut-être la charge, peut-être la pression de la section. Elle pourrait lui demander. Elle ne l'a pas fait.

Il y a une question qu'elle n'a pas encore. Quand elle l'aura, elle sera détruite par sa propre honnêteté — parce qu'elle a soigné avec sincérité et que la sincérité ne protège pas.`,
};

export default velthys;
