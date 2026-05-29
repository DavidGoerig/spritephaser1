import type { PersonnageLoreComplet } from '../../../lore-types';

const kelveth: PersonnageLoreComplet = {
  id: 71,
  nom: 'Kelveth',
  element: 'Roche',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Pyrien de 32 ans, mince avec des mains qui connaissent les plans et les pierres. Architecte junior — il a la posture de quelqu\'un qui passe ses journées à se pencher sur des tables à dessin et ses nuits à se demander ce qu\'il devrait dire.',
    peau: 'Brune Pyrien avec une luminescence dorée-terreux aux avant-bras — l\'élément Roche qui ressemble à de la poussière de pierre sur sa peau.',
    yeux: 'Brun-rouge, qui évitent le contact. Il sait quelque chose qu\'il n\'a jamais dit. Ça se voit.',
    vetements: 'Tenue d\'architecte junior de Varkhôl — fonctionnelle avec des poches pour les instruments de mesure. Rien qui identifie une faction.',
    signes_particuliers: 'Il connaît les défauts des plans du district Nord. Il les a vus dans les archives de Valdris. Il n\'a jamais parlé. Ce silence a peut-être des conséquences.',
  },

  psychologie: {
    dominante: 'Architecte junior de Valdris (12) qui a eu accès aux plans des structures du district Nord. Les plans ont des défauts — des défauts qui pourraient expliquer certains effondrements. Il sait depuis 4 ans. Il n\'a jamais dit à personne.',
    mecanisme_de_defense: 'L\'insignifiance hiérarchique comme excuse. Il est junior. Ce n\'est pas à lui de parler. Quelqu\'un d\'autre sûrement le sait. Ce raisonnement se dégrade chaque fois qu\'il y pense.',
    contradiction_interne: 'Il admire Valdris comme architecte. Les plans défectueux sont signés Valdris. Ces deux faits ensemble ne font pas un tout qu\'il peut accepter.',
    rapport_aux_autres: 'Valdris (12) est son supérieur — il le respecte et ne peut pas lui dire ce qu\'il sait. Cette impossibilité est le cœur de son immobilisme.',
    vision_du_monde: 'Les bâtiments doivent être solides. C\'est l\'axiome de son métier. Il le croit sincèrement. C\'est pour ça que ce qu\'il sait est insupportable à porter.',
  },

  histoire: {
    enfance: {
      titre: 'L\'architecture',
      contenu: 'Né dans une famille de maçons Pyriens. L\'élément Roche était naturel dans son métier. À 22 ans, il avait rejoint l\'atelier de Valdris — la meilleure formation d\'architecture de Varkhôl.',
    },
    arrivee: {
      titre: 'Les archives',
      contenu: 'À 28 ans, il avait eu accès aux archives internes pour un projet de rénovation. Les plans du district Nord étaient là. Il avait vu les défauts — des calculs de charge incorrects, des fondations sous-dimensionnées pour ce qu\'elles supportaient.',
    },
    premier_conflit: {
      titre: 'La première occasion',
      contenu: 'Il avait failli en parler à Valdris 4 fois. Les 4 fois, il avait décidé qu\'il devait mieux comprendre avant de parler. Il comprenait depuis longtemps. Il ne parlait toujours pas.',
    },
    revelation: {
      titre: 'Les effondrements',
      contenu: 'Quand certains secteurs avaient montré des signes d\'instabilité post-Rupture, Kelveth avait relu ses notes. Les effondrements correspondaient aux zones des plans défectueux. Il avait toujours rien dit.',
    },
    etat_actuel: {
      titre: 'Le silence',
      contenu: 'Il continue à travailler pour Valdris. Il continue à ne rien dire. Son silence devient plus lourd à chaque rapport d\'instabilité structurelle.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kelveth_plans',
      titre: 'Les plans que personne ne lit',
      description: 'Kelveth est la seule personne qui a vu les plans défectueux du district Nord et compris leur signification. Si les structures concernées s\'effondrent davantage, il sera peut-être la seule personne capable d\'expliquer pourquoi — et de justifier pourquoi il n\'avait rien dit.',
      personnages_impliques: [12],
      declencheur: 'Nouvel effondrement structurel dans le district Nord',
      consequence: 'Kelveth forcé de parler — ou de se taire dans une situation où le silence a des morts',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Architecte junior de Valdris (12). Sait pour les plans défectueux du district Nord. N\'a jamais parlé. Son silence pèse depuis 4 ans.',

  relations: [
    { id: 12, nom: 'Valdris', type: 'allié', note: 'Supérieur hiérarchique. Respecté. Kelveth ne peut pas lui dire ce qu\'il sait.' },
  ],

  combat: {
    sorts: [
      'Analyse structurelle (Roche) — perception des tensions dans les matériaux — identification des points de rupture',
      'Frappe de roche (Roche) — impact amplifié par l\'élément — usage défensif seulement',
    ],
  },

  image_prompts: [
    {
      id: 'kelveth_plans',
      description: 'Kelveth dans les archives de l\'atelier de Valdris — un Pyrien de 32 ans penché sur des plans architecturaux, son doigt sur une ligne de calcul. Son expression est de quelqu\'un qui sait quelque chose et ne sait pas quoi en faire. Les plans du district Nord sont sur la table.',
      style: 'réaliste Pyrien architecte junior, archives de Varkhôl, plans défectueux, poids du silence, connaissance sans action',
    },
  ],

  lore_long: `Kelveth connaît les défauts dans les plans du district Nord de Varkhôl. Il les a vus dans les archives de Valdris (12) il y a 4 ans.

Il n'a jamais dit à personne. Son silence a peut-être des conséquences dans les effondrements post-Rupture.

Il admire Valdris. Les plans défectueux sont signés Valdris. Ces deux faits ensemble ne font pas un tout qu'il peut accepter.`,
};

export default kelveth;
