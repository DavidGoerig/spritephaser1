import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrvex: PersonnageLoreComplet = {
  id: 322,
  nom: 'Thyrvex',
  element: 'Ténèbres',
  element2: 'Psy',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Moyen, avec une présence apaisante qui n\'est pas de la timidité — quelqu\'un qui sait comment tenir l\'espace sans le menacer.',
    peau: 'Gris-violet Umbrien avec des zones légèrement lumineuses aux paumes — l\'élément Psy qui se concentre dans les mains lors des séances de travail.',
    yeux: 'Violets doux, qui savent regarder sans analyser — une compétence rare chez les Psy.',
    vetements: 'Tenue simple et confortable de praticien. Il reçoit ses clients chez lui. La tenue suggère qu\'il n\'a pas besoin d\'impressionner.',
    signes_particuliers: 'Il offre toujours quelque chose à boire avant de commencer une séance. Ce n\'est pas de la politesse — c\'est un protocole. Le temps qu\'une personne boit quelque chose, il a déjà une lecture de base de son état Ténèbres.',
  },

  psychologie: {
    dominante: 'Aide aux Umbriens dont le double élément Ténèbres/Psy crée des interférences incontrôlables. Les deux éléments amplifient et déforment mutuellement. Sans guidance, certains Umbriens perdent le contrôle de leurs perceptions.',
    mecanisme_de_defense: 'La distinction entre aider et guérir. Il aide les gens à fonctionner. Il ne prétend pas résoudre ce que les deux éléments font — il aide à coexister avec ça.',
    contradiction_interne: 'Ses techniques de stabilisation du double élément seraient très utiles à la Convergence pour contrôler ses opérateurs. Il a refusé de les transmettre formellement. Des versions approximatives circulent quand même — il ne sait pas si quelqu\'un a observé ses séances et reconstruit ses méthodes.',
    rapport_aux_autres: 'Orathyn (181) lui a envoyé plusieurs clients avec des situations complexes. Nyrreth (47) — une thérapeute Umbrien plus ancienne — l\'a formé en partie. Il lui doit ses bases.',
    vision_du_monde: 'Les deux éléments ne sont pas un problème à résoudre. Ce sont deux façons d\'être qui interfèrent quand elles ne sont pas en accord. Le travail est d\'amener l\'accord, pas d\'éliminer l\'un des deux.',
  },

  histoire: {
    enfance: {
      titre: 'Le double élément précoce',
      contenu: 'Manifestation du double élément à 9 ans — précoce même pour un Umbrien. Les Ténèbres et le Psy s\'étaient interférés dans des façons qui rendaient sa perception du monde instable. À 11 ans, Nyrreth (47) avait commencé à le suivre. Il avait mis 3 ans à atteindre une stabilité fonctionnelle.',
    },
    arrivee: {
      titre: 'La transmission inverse',
      contenu: 'À 25 ans, Nyrreth (47) lui avait dit qu\'il avait développé des techniques de stabilisation différentes des siennes — plus adaptées aux cas d\'interférence intense. Elle lui avait suggéré de les formaliser et de les transmettre. Il avait commencé à recevoir des clients.',
    },
    premier_conflit: {
      titre: 'La demande de la Convergence',
      contenu: 'À 32 ans, la Convergence lui avait demandé via un intermédiaire de former leurs opérateurs Ténèbres/Psy. La rémunération était substantielle. Il avait refusé sans donner de raison précise. Il n\'avait pas dit à Vethis (46) que la demande avait eu lieu.',
    },
    revelation: {
      titre: 'Les versions approximatives',
      contenu: 'Orathyn (181) lui avait mentionné, en passant, que des techniques similaires aux siennes circulaient dans certains cercles de la Convergence — des versions moins précises, avec des lacunes. Il avait compris que quelqu\'un avait observé ses séances et reconstruit partiellement sa méthode. Il n\'avait pas su quoi faire de cette information.',
    },
    etat_actuel: {
      titre: 'Les 8 clients réguliers',
      contenu: 'Il suit 8 clients réguliers dans différents stades de stabilisation. Trois sont en phase aiguë — des interférences intenses qui nécessitent des séances hebdomadaires. Cinq sont en maintenance — des séances mensuelles. Il n\'accepte pas de nouveaux clients depuis 6 mois — sa capacité est atteinte.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrvex_methode_copiee',
      titre: 'Les versions approximatives',
      description: 'Des versions partielles de ses techniques circulent dans des cercles de la Convergence — observées et reconstituées par quelqu\'un. Ces versions ont des lacunes qui peuvent produire des résultats imprévisibles si appliquées à des cas sévères. Il ne sait pas qui les utilise ni sur quels opérateurs. Il n\'a pas de moyen de corriger les versions en circulation sans formaliser officiellement ses techniques.',
      personnages_impliques: [181, 47],
      declencheur: 'Information sur la circulation de versions partielles de sa méthode',
      consequence: 'Méthodes partiellement copiées en circulation — lacunes potentiellement dangereuses, pas de moyen de correction',
    },
    {
      id: 'thyrvex_capacite_atteinte',
      titre: 'La liste d\'attente',
      description: 'Il n\'accepte pas de nouveaux clients depuis 6 mois. Orathyn (181) lui a signalé deux cas urgents. Il a évalué les deux — l\'un peut attendre, l\'autre ne peut pas. Pour le cas urgent, il a dégagé du temps en repoussant une séance de maintenance. C\'est le deuxième cas de ce type ce semestre.',
      personnages_impliques: [181],
      declencheur: 'Capacité atteinte face à des demandes urgentes',
      consequence: 'Gestion des priorités en temps contraint — certains clients en maintenance moins suivis',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Thérapeute du double élément dans Vel\'Nox. Ses techniques sont uniques et partiellement copiées par la Convergence. Il est la ressource la plus complète pour les Umbriens en crise d\'interférence.',

  relations: [
    { id: 181, nom: 'Orathyn', type: 'allié', note: 'Envoie des clients complexes. Signale les cas urgents. Intermédiaire de fait.' },
    { id: 47, nom: 'Nyrreth', type: 'mentor', note: 'L\'a formé dans sa jeunesse. Ses bases viennent d\'elle. A reconnu ses techniques comme distinctes des siennes.' },
  ],

  combat: {
    sorts: [
      'Stabilisation (Psy) — ancrage psychique d\'une présence déstabilisée — restauration du contrôle',
      'Ombre équilibrée (Ténèbres) — neutralisation d\'une interférence entre éléments sur une cible — effet défensif',
      'Perception étouffée (Psy) — limitation temporaire des perceptions d\'une cible — réduction de la surcharge',
    ],
  },

  image_prompts: [
    {
      id: 'thyrvex_seance',
      description: 'Thyrvex assis en face d\'un client, les paumes légèrement lumineuses, travaillant sur un point d\'interférence Ténèbres/Psy invisible. Le client a les yeux fermés. L\'espace est calme — des tentures qui absorbent le son. Thyrvex a l\'air de quelqu\'un qui fait quelque chose de difficile avec aisance.',
      style: 'réaliste thérapeute umbrien, espace de soin intime, lumière de paumes, concentration apaisante',
    },
  ],

  lore_long: `Thyrvex aide les Umbriens dont les deux éléments Ténèbres/Psy s'interfèrent de façon incontrôlable.

Il a développé des techniques de stabilisation différentes de celles de Nyrreth (47) — plus adaptées aux interférences intenses. La Convergence lui a demandé de former ses opérateurs. Il a refusé sans explication.

Des versions partielles de ses techniques circulent quand même dans des cercles de la Convergence — observées et reconstituées. Ces versions ont des lacunes. Il n'a pas de moyen de corriger ce qui circule sans officialiser ce qu'il veut garder discret.

8 clients réguliers. Capacité atteinte depuis 6 mois. Il gère les cas urgents au cas par cas.`,
};

export default thyrvex;
