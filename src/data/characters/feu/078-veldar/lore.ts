import type { PersonnageLoreComplet } from '../../../lore-types';

const veldar: PersonnageLoreComplet = {
  id: 78,
  nom: 'Veldar',
  element: 'Feu',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Pyrien de 55 ans, large d\'épaules avec la posture d\'un ancien garde — droit mais sans la rigidité du service actif. Ses mains sont habituées aux armes mais il ne les porte plus pour l\'Empire.',
    peau: 'Brune Pyrien avec une luminescence rouge pâle aux épaules — l\'élément Feu d\'un homme qui a appris à le contrôler et a décidé de ne pas l\'amplifier.',
    yeux: 'Rouges avec une qualité d\'épuisement neutre. Pas de haine, pas de conviction — juste de la fatigue d\'avoir trop vu.',
    vetements: 'Tenue de gardien de marché — veste rembourrée, rien qui identifie l\'Empire. Aucun insigne. Aucun symbole.',
    signes_particuliers: 'Il était garde civile de Skarith. Il est maintenant gardien de marché. La différence entre les deux positions est plus grande qu\'elle n\'en a l\'air.',
  },

  psychologie: {
    dominante: 'Ancien garde civile reconverti en gardien de marché après la Rupture. Neutre épuisé. Il a servi l\'Empire, il a servi Skarith (9), et il a décidé que le meilleur service qu\'il pouvait rendre maintenant était de maintenir la paix dans un marché.',
    mecanisme_de_defense: 'La neutralité comme repos. Il a fini de choisir des camps. Son seul critère maintenant est la paix du marché.',
    contradiction_interne: 'Il connaît des gens des deux camps — il a travaillé avec des personnes qui sont maintenant dans des factions opposées. Sa neutralité les déçoit tous les deux.',
    rapport_aux_autres: 'Skarith (9) est son ancien supérieur — ils ne se sont pas parlé depuis sa reconversion. La relation est intacte sans être active. La Rupture est quelque chose qu\'il a vu de près, pas de loin.',
    vision_du_monde: 'Il a vu suffisamment pour savoir que tous les côtés ont des raisons et des torts. Cette conclusion l\'a épuisé. La paix d\'un marché est une ambition à sa mesure maintenant.',
  },

  histoire: {
    enfance: {
      titre: 'Le service',
      contenu: 'À 22 ans, il avait rejoint la garde civile de Varkhôl. La formation, le service, les années de patrouille. À 40 ans, il était sous les ordres de Skarith — une période qu\'il décrit, quand on lui demande, comme "correcte".',
    },
    arrivee: {
      titre: 'La Rupture',
      contenu: 'La Rupture avait tout changé. Il avait été déployé dans les décombres pendant les premières semaines. Ce qu\'il avait vu l\'avait changé d\'une façon qu\'il n\'avait pas entièrement articulée. À 42 ans, il avait demandé une reconversion.',
    },
    premier_conflit: {
      titre: 'La reconversion',
      contenu: 'Quitter la garde civile pendant une crise avait été mal perçu. On lui avait offert une transition vers des fonctions administratives. Il avait refusé. Il avait fini gardien de marché à la Forge Silencieuse.',
    },
    revelation: {
      titre: 'Le marché',
      contenu: 'Le marché avait des conflits — vol, disputes commerciales, quelques altercations. Rien de comparable à ce qu\'il avait vu en service. Sa présence suffisait généralement. C\'était une révélation par contraste.',
    },
    etat_actuel: {
      titre: 'La paix du marché',
      contenu: 'Il garde le marché. Les commerçants l\'ont accepté. Les factions qui opèrent dans le marché le respectent parce qu\'il ne choisit pas de camp. Sa neutralité coûte — elle prive les deux camps d\'un allié.',
    },
  },

  evenements_narratifs: [
    {
      id: 'veldar_neutralite',
      titre: 'La neutralité épuisée',
      description: 'Veldar maintient la paix dans un marché traversé par des factions opposées. Sa neutralité est respectée parce qu\'il la défend constamment. Si un conflit entre factions atteint le marché, sa neutralité ne suffit plus — il doit choisir ou partir.',
      personnages_impliques: [9],
      declencheur: 'Un conflit de factions entrant dans le marché de la Forge Silencieuse',
      consequence: 'Veldar forcé de défendre sa neutralité ou d\'abandonner sa position',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Ancien garde de Skarith (9). Gardien de marché neutre depuis la Rupture. Épuisé par trop de camps. La paix du marché comme ambition à sa mesure.',

  relations: [
    { id: 9, nom: 'Skarith', type: 'contact', note: 'Ancien supérieur. Relation intacte sans être active.' },
  ],

  combat: {
    sorts: [
      'Frappe de garde (Feu) — coup contrôlé pour neutraliser sans blesser — dissuasion de marché',
      'Résistance thermique (Feu) — protection passive — habitude d\'un service de terrain',
    ],
  },

  image_prompts: [
    {
      id: 'veldar_marche',
      description: 'Veldar au poste d\'entrée du marché de la Forge Silencieuse — un Pyrien de 55 ans, large, avec une expression de neutralité épuisée. Des vendeurs de toutes factions passent devant lui. Il ne choisit pas. Il maintient la paix.',
      style: 'réaliste Pyrien ancien garde, marché de la Forge Silencieuse, neutralité épuisée, post-Rupture Varkhôl',
    },
  ],

  lore_long: `Veldar était garde civile sous Skarith (9) à Varkhôl. La Rupture l'a changé. Il a quitté le service et est devenu gardien de marché.

Neutre épuisé. Il a vu suffisamment pour savoir que tous les côtés ont des raisons et des torts.

La paix d'un marché est une ambition à sa mesure maintenant.`,
};

export default veldar;
