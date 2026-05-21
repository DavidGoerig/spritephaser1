import type { PersonnageLoreComplet } from '../../../lore-types';

const karvdrekh: PersonnageLoreComplet = {
  id: 306,
  nom: 'Karvdrekh',
  element: 'Sol',
  element2: 'Poison',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Moyenne, avec une légèreté de mouvement inhabituelle pour une Chthonienne — comme si elle s\'attendait toujours à ne pas avoir d\'air.',
    peau: 'Gris-vert Chthonien avec des veinures dorées aux avant-bras — le Poison secondaire qui a modifié sa chimie cutanée en réponse à l\'immunité développée. Les veinures sont visibles mais ne brillent pas.',
    yeux: 'Vert-gris, avec une légère dilatation permanente des pupilles — adaptation à des environnements de faible luminosité et d\'émanations.',
    vetements: 'Tenue de mineur sans équipement de filtration — ce qui est immédiatement visible pour quiconque connaît les niveaux profonds. Elle n\'en porte pas parce qu\'elle n\'en a pas besoin.',
    signes_particuliers: 'Elle peut décrire la composition approximative d\'une vapeur fongique par son odeur. Elle le fait pour s\'orienter, pas pour impressionner.',
  },

  psychologie: {
    dominante: 'Immunité comme condition de travail, pas comme don. Elle peut travailler là où d\'autres meurent. Ce n\'est pas une bénédiction — c\'est un outil qu\'elle utilise.',
    mecanisme_de_defense: 'L\'ignorance stratégique. Elle sait que la Convergence l\'observe. Elle fait semblant de ne pas le savoir pour continuer de travailler librement.',
    contradiction_interne: 'Son immunité est probablement génétique — un trait que ses enfants pourraient hériter. Elle n\'a pas eu d\'enfants en partie pour cette raison. Elle ne veut pas être la source d\'une lignée que la Convergence voudra contrôler.',
    rapport_aux_autres: 'Graveth (43) a envoyé un chercheur l\'examiner sous prétexte d\'une étude de santé minière. Elle a coopéré partiellement — suffisamment pour que la Convergence sache qu\'elle existe, pas assez pour qu\'ils sachent tout. Kharven (140) travaille dans les mêmes zones. Ils se croisent souvent. Kharven n\'est pas immunisée — elle porte un équipement standard.',
    vision_du_monde: 'La Fosse est un environnement de travail. Elle a les outils pour y travailler. Elle utilise ces outils. Les factions qui veulent étudier ses outils ne font pas partie de son calcul de travail.',
  },

  histoire: {
    enfance: {
      titre: 'La découverte de l\'immunité',
      contenu: 'À 19 ans, elle avait accompagné un groupe de maintenance dans une zone à vapeurs fongiques légères. Tout le monde avait porté des masques. Elle avait oublié le sien. Elle n\'avait pas eu de symptômes. Le médecin de la mine avait testé et re-testé. L\'immunité était réelle. Il n\'avait pas su quoi en faire.',
    },
    arrivee: {
      titre: 'Les niveaux interdits',
      contenu: 'À 25 ans, elle avait commencé à travailler dans des zones que personne d\'autre ne pouvait atteindre sans équipement complet. L\'équipement complet réduisait la précision de travail. Elle travaillait sans, avec une précision que l\'équipement ne permettait pas. Elle était productive dans des zones qui étaient autrement marginalement exploitables.',
    },
    premier_conflit: {
      titre: 'L\'examen de la Convergence',
      contenu: 'Graveth (43) avait envoyé un chercheur sous couverture d\'une étude de santé minière de routine. Elle avait identifié la couverture au deuxième entretien — les questions n\'étaient pas des questions de routine. Elle avait continué de répondre partiellement. Assez pour que la Convergence sache qu\'elle était réelle. Pas assez pour qu\'ils aient tout.',
    },
    revelation: {
      titre: 'La question des enfants',
      contenu: 'Un médecin de la Technocratie avait mentionné, lors d\'un examen annuel, que son immunité présentait les caractéristiques d\'un trait transmissible. Elle avait posé des questions sur ce que cela impliquait légalement. La réponse : ses enfants seraient automatiquement enregistrés comme Élus Poison potentiels et soumis à évaluation impériale dès la naissance. Elle n\'avait plus posé de questions.',
    },
    etat_actuel: {
      titre: 'Le travail dans les zones profondes',
      contenu: 'Elle travaille dans les niveaux profonds d\'Ormn-Dur. La Convergence continue d\'observer à distance. Elle continue de faire semblant de ne pas le voir. Kharven (140) lui a posé des questions sur son équipement de filtration — elle répond qu\'elle a une technique qui compense. Ce n\'est pas tout à fait un mensonge.',
    },
  },

  evenements_narratifs: [
    {
      id: 'karvdrekh_convergence_observation',
      titre: 'L\'observation à distance',
      description: 'La Convergence sait qu\'elle existe et est immunisée. Elle sait qu\'ils savent. Ni l\'un ni l\'autre n\'a formalisé la situation. La Convergence observe en espérant qu\'elle fera quelque chose d\'utile pour eux. Elle travaille en espérant qu\'ils ne trouvent pas de raison de formaliser. Cet équilibre peut tenir longtemps ou cesser brusquement.',
      personnages_impliques: [43, 140],
      declencheur: 'Immunité aux vapeurs fongiques découverte et partiellement divulguée',
      consequence: 'Surveillance de la Convergence sans intervention — équilibre fragile',
    },
    {
      id: 'karvdrekh_trait_transmissible',
      titre: 'La décision sur les enfants',
      description: 'Elle sait que son immunité est probablement transmissible. Elle a choisi de ne pas avoir d\'enfants pour cette raison. Ce choix n\'est pas documenté et n\'a été expliqué à personne. Si la Convergence ou la Technocratie apprend que l\'immunité est transmissible, leur intérêt pour elle passera d\'observation à extraction. Elle a calculé que le risque d\'enfants connus dépasse son désir d\'en avoir.',
      personnages_impliques: [],
      declencheur: 'Information sur la transmissibilité de l\'immunité',
      consequence: 'Décision personnelle de non-reproduction pour éviter une vulnérabilité systémique',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Travailleuse avec un accès unique aux zones les plus profondes et toxiques. Son immunité est un atout et une cible. Elle maintient sa liberté par l\'ignorance feinte.',

  relations: [
    { id: 43, nom: 'Graveth', type: 'ennemi', note: 'La Convergence qu\'il représente l\'observe. Elle coopère partiellement pour ne pas déclencher une action directe.' },
    { id: 140, nom: 'Kharven', type: 'allié', note: 'Travaille dans les mêmes zones. A posé des questions sur l\'équipement. Répond partiellement.' },
  ],

  combat: {
    sorts: [
      'Vapeur souterraine (Poison) — relâchement de vapeurs fongiques concentrées — zone toxique improvisée',
      'Ancrage de sol (Sol) — fixation au terrain qui résiste aux déplacements forcés — défense contre éjection',
      'Absorption fongique (Poison) — neutralisation de toxines dans l\'environnement immédiat — purification locale',
    ],
  },

  image_prompts: [
    {
      id: 'karvdrekh_zone_profonde',
      description: 'Karvdrekh dans un niveau profond dont les murs ont la teinte dorée-verdâtre de la zone fongique. Elle travaille sans masque, sans équipement de filtration. Dans l\'arrière-plan, un autre mineur en tenue complète de protection. Le contraste est immédiat.',
      style: 'réaliste chthonien unique, teinte fongique environnante, absence d\'équipement comme signe distinctif, travail actif',
    },
  ],

  lore_long: `Karvdrekh est immunisée aux vapeurs fongiques de la Fosse. Elle travaille dans des zones où les autres meurent sans équipement complet.

La Convergence le sait. Elle le sait. Aucun des deux n'a formalisé la situation.

Elle a coopéré partiellement à un examen de la Convergence — assez pour qu'ils sachent qu'elle est réelle, pas assez pour qu'ils aient tout.

Son immunité est probablement transmissible. Elle n'a pas eu d'enfants pour cette raison. Ce calcul n'a été expliqué à personne.

La Convergence observe en attendant qu'elle soit utile. Elle travaille en faisant semblant de ne pas les voir. Cet équilibre peut tenir longtemps ou cesser brusquement.`,
};

export default karvdrekh;
