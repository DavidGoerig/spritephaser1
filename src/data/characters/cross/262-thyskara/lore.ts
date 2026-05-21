import type { PersonnageLoreComplet } from '../../../lore-types';

const thyskara: PersonnageLoreComplet = {
  id: 262,
  nom: 'Thyskara',
  element: 'Eau',
  element2: 'Vent',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Petite, légère — silhouette d\'une fuite de 3 ans, corps calibré pour aller vite et peu visible.',
    peau: 'Claire, avec des reflets bleutés autour des clavicules — élément Eau. Légèrement brunis aux mains et au visage par le voyage.',
    yeux: 'Bleu-gris changeant, avec une luminescence Vent subtile quand elle court — ses iris s\'éclaircissent en mouvement.',
    vetements: 'Tenue de voyage usée, plusieurs fois reprisée. Elle a appris à réparer elle-même. Pas de signe distinctif — c\'est intentionnel.',
    signes_particuliers: 'Elle a 23 ans mais en paraît 18 — trait fréquent chez les Élus de Virex, comme si leur développement biologique était décalé par l\'instabilité élémentaire précoce.',
  },

  psychologie: {
    dominante: 'Solitude active. Elle ne fuit plus — elle cherche. La différence est subtile dans le mouvement mais totale dans l\'état intérieur.',
    mecanisme_de_defense: 'Le mouvement comme protection. Tant qu\'elle bouge, elle ne peut pas être capturée. Cet axiome était vrai pendant la fuite. Il est moins vrai maintenant mais elle n\'a pas encore désappris.',
    contradiction_interne: 'Elle cherche quelqu\'un qui pourrait comprendre ce qu\'elle est — sans savoir que cette personne cherche la même chose pour les mêmes raisons. Ils sont deux points se cherchant sur la même ligne sans jamais s\'être coordonnés.',
    rapport_aux_autres: 'Sylvethys (272) lui a partagé un abri une nuit sans poser de questions. C\'était la première interaction humaine non-menaçante en 8 mois. Elle y pense encore.',
    vision_du_monde: 'Elle est quelque chose que les systèmes veulent utiliser ou éliminer — elle cherche quelqu\'un qui voudrait simplement la connaître.',
  },

  histoire: {
    enfance: {
      titre: 'Une des 39 de Virex',
      contenu: 'Née à Virex dans une famille d\'ouvriers. Son élément Eau s\'est manifesté à 6 ans, l\'élément Vent secondaire à 9. À 12 ans elle avait été enregistrée dans le système de Virex comme "Élu haute cohérence, potentiel de développement exceptionnel". Elle ne savait pas ce que ça voulait dire.',
    },
    arrivee: {
      titre: 'La fuite à 20 ans',
      contenu: 'À 20 ans, Thyven (62) lui avait dit d\'une façon qu\'il ne pouvait pas dire clairement : "si quelqu\'un t\'invite à partir quelque part, ne pars pas." C\'était suffisamment précis. 3 semaines plus tard une convocation était arrivée pour un "programme de développement intensif à la Citadelle". Elle était partie à la nuit le lendemain.',
    },
    premier_conflit: {
      titre: 'Trois ans seule',
      contenu: 'Elle avait supposé que la fuite serait courte — quelques mois, puis une solution. Il n\'y avait pas de solution à rejoindre, pas de réseau prêt pour elle. Elle avait appris à se déplacer seule, à trouver des abris, à utiliser ses éléments discrètement — Eau pour l\'eau potable, Vent pour sentir les présences avant qu\'elles arrivent.',
    },
    revelation: {
      titre: 'L\'autre chercheur',
      contenu: 'À Sylvethys (272), la guérisseuse qui l\'avait hébergée une nuit, elle avait parlé de ce qu\'elle cherchait sans le dire clairement — quelqu\'un qui soit comme elle, qui comprenne l\'instabilité de l\'intérieur. Sylvethys avait dit avoir soigné quelqu\'un dont la résonance élémentaire était "anormalement dense". Thyskara avait passé la nuit à réfléchir à ce que "anormalement dense" voulait dire.',
    },
    etat_actuel: {
      titre: 'La piste',
      contenu: 'Elle suit une piste — pas une adresse, une résonance. Là où l\'Avatar est passé, quelque chose persiste dans l\'environnement élémentaire pendant des semaines. Son élément Eau est particulièrement sensible aux perturbations hydriques laissées par une présence élémentaire intense. Elle a appris à lire ça. Elle est à 3 semaines de retard sur lui, mais elle se rapproche.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyskara_thyven_avertissement',
      titre: 'L\'avertissement indirect',
      description: 'Thyven (62) ne lui avait pas dit de fuir. Il lui avait dit de ne pas partir si invitée. C\'était la limite de ce qu\'il pouvait faire — assez pour que quelqu\'un d\'attentif comprenne, pas assez pour qu\'on lui reproche d\'avoir obstruit. Elle avait compris. Elle s\'était souvenu de ce détail pendant 3 ans comme d\'un acte de courage discret.',
      personnages_impliques: [62],
      declencheur: 'Avertissement indirect avant la convocation',
      consequence: 'Fuite réussie — Thyven a protégé sa plausibilité deniable en ne disant pas directement',
    },
    {
      id: 'thyskara_sylvethys_nuit',
      titre: 'L\'abri d\'une nuit',
      description: 'Sylvethys (272) ne lui avait posé aucune question sur d\'où elle venait ni où elle allait. Elle lui avait donné à manger, avait vérifié son état élémentaire, et lui avait dit qu\'il y avait un endroit pour dormir si elle en avait besoin. C\'était il y a 4 mois. C\'est la première interaction non-menaçante en 8 mois. Sylvethys avait mentionné un patient à la "résonance anormalement dense" — Thyskara a suivi cette piste depuis.',
      personnages_impliques: [272],
      declencheur: 'Partage d\'abri par une guérisseuse itinérante',
      consequence: 'Piste vers le Second Avatar — transmission indirecte d\'information',
    },
    {
      id: 'thyskara_lysael_famille',
      titre: 'La famille dans le fichier',
      description: 'Lysael (63) a le nom de ses parents dans un fichier Convergence — non pas comme cibles, comme "contacts utiles à la récupération du sujet". Sa famille à Virex est, sans le savoir, un levier potentiel contre elle. Elle ne le sait pas. Si elle le savait, sa trajectoire changerait.',
      personnages_impliques: [63],
      declencheur: 'Fichiers de récupération Convergence',
      consequence: 'Vulnérabilité non perçue — levier non encore utilisé',
    },
  ],

  arcs: ['arc_second_avatar'],
  position_dans_arc: 'Parallèle vers la convergence. Elle cherche le Second Avatar sans savoir qu\'il cherche la même chose. Quand ils se trouveront — si — ce sera deux solitudes qui se reconnaissent.',

  relations: [
    { id: 59, nom: 'Second Avatar', type: 'inconnue_qui_change_tout', note: 'Cherche la même chose qu\'elle pour les mêmes raisons. Ils ne savent pas que l\'autre existe. Elle suit sa trace résiduelle.' },
    { id: 62, nom: 'Thyven', type: 'mentor', note: 'L\'a prévenue indirectement avant la convocation. Acte de courage discret qu\'elle n\'a jamais pu remercier.' },
    { id: 272, nom: 'Sylvethys', type: 'allié', note: 'Abri d\'une nuit sans questions. Mention d\'un patient à résonance dense — piste suivie depuis.' },
    { id: 63, nom: 'Lysael', type: 'ennemi', note: 'A sa famille dans un fichier Convergence comme levier de récupération. Thyskara ne le sait pas.' },
  ],

  combat: {
    sorts: [
      'Courant rapide (Eau) — accélération par déplacement d\'un courant hydrique sous les pieds en terrain humide',
      'Rafale d\'esquive (Vent) — détection précoce des mouvements entrants par variation de pression',
      'Brouillard de trace (Eau) — dissolution de l\'empreinte élémentaire laissée dans un espace pendant une courte durée',
    ],
  },

  image_prompts: [
    {
      id: 'thyskara_piste',
      description: 'Thyskara accroupie au bord d\'un cours d\'eau, sa main dans l\'eau, yeux mi-clos. Elle lit quelque chose dans la perturbation hydrique que personne d\'autre ne percevrait. L\'expression est concentrée, légèrement électrisée — elle est sur la piste.',
      style: 'réaliste humain, lumière de sous-bois, eau courante, tons bleus et verts de voyage',
    },
  ],

  lore_long: `Thyskara a 23 ans et 3 ans de fuite. Ce n'est pas pareil.

La fuite, ça ressemblait à de la peur dépensée en mouvement. Le premier mois : panique gérée. Le troisième : adaptation. La première année : survie. La deuxième : compétence. La troisième : quelque chose d'autre. Elle avait commencé à chercher au lieu de fuir.

Ce qu'elle cherche : quelqu'un qui soit comme elle. Pas dans le sens d'un compagnon de route — dans le sens d'une personne qui sache ce que c'est que d'être quelque chose que les systèmes veulent contrôler sans comprendre, que les familles aiment sans pouvoir aider, que les guérisseurs traitent sans nommer. Elle ne croit pas que beaucoup de gens existent comme ça. Elle pense que peut-être il y en a un.

La résonance anormalement dense dont avait parlé Sylvethys — elle y revient chaque jour. Ce n'était pas une description ordinaire. Elle a soigné des Élus instables, des personnes en surcharge élémentaire, des gens dont les éléments dépassaient leur capacité de régulation. Elle a soigné quelqu'un dont la résonance hydrique était si dense qu'elle avait eu du mal à l'interpréter.

Thyskara suit les traces résiduelles dans l'eau. Un Élu qui passe laisse une perturbation dans les cours d'eau locaux pendant des semaines — modification légère de la tension superficielle, altération subtile de la direction des courants mineurs. Elle a appris à lire ça pendant 3 ans de déplacement.

Elle est à 3 semaines de retard.

Elle se rapproche.`,
};

export default thyskara;
