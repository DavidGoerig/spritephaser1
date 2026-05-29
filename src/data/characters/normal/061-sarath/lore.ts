import type { PersonnageLoreComplet } from '../../../lore-types';

const sarath: PersonnageLoreComplet = {
  id: 61,
  nom: 'Sarath',
  element: 'Normal',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Mort depuis environ 5 ans. Dans les descriptions du Second Avatar (59) qui le mentionne : "quelqu\'un qui n\'avait pas l\'air de quelqu\'un d\'important et qui l\'était plus que n\'importe qui d\'autre que j\'ai rencontré". De taille ordinaire. D\'apparence ordinaire. Sans élément visible.',
    peau: 'Dans les descriptions fragmentaires : brune Homme-Lien ordinaire, sans luminescence élémentaire. Un Homme-Lien Normal — sans accès aux éléments. Dans un monde où les éléments définissent la valeur, il était sans valeur dans ce registre. Il avait choisi de ne pas le considérer comme une limite.',
    yeux: 'Dans les récits du Second Avatar : "il regardait les personnes comme si le fait d\'être en face de lui leur donnait automatiquement de l\'importance". Cette description est la plus fréquente dans les rares témoignages sur lui.',
    vetements: 'Tenue simple des Dissidentes. Il n\'a laissé aucun objet particulier — il vivait avec le minimum. Ce qui reste de lui est dans le Second Avatar, pas dans des objets.',
    signes_particuliers: 'Il est mort. Sa présence dans cet arc est entièrement à travers ce que le Second Avatar dit de lui. Il ne parle pas à travers sa propre voix — il parle à travers la façon dont il a changé la façon de penser du Second Avatar.',
  },

  psychologie: {
    dominante: 'Homme-Lien Normal sans élément qui a caché le Second Avatar (59) pendant 3 ans et qui est mort avant que le Second Avatar puisse lui rembourser cette dette. Il a choisi de cacher quelqu\'un qui mettait en danger sa propre vie par conviction — pas par espoir de récompense, pas par idéologie pure. Par conviction simple que c\'était la bonne chose à faire.',
    mecanisme_de_defense: 'Pas applicable. Il n\'a pas été décrit comme quelqu\'un qui avait besoin de se défendre de ses propres décisions.',
    contradiction_interne: 'Il n\'avait pas d\'élément mais vivait dans un monde où les éléments définissaient la valeur. Il avait choisi de ne pas accepter cette définition pour lui-même. Sa mort — dans des circonstances non précisées — a peut-être eu lieu dans le contexte de ce refus.',
    rapport_aux_autres: 'Le Second Avatar (59) est la personne qu\'il a cachée. Cette relation est présente dans chaque décision du Second Avatar depuis. Les Dissidentes qui connaissaient Sarath disent qu\'il n\'était jamais sur les listes d\'importance — et qu\'il faisait plus que ceux qui y étaient.',
    vision_du_monde: 'Ce qu\'on peut inférer de ses actions : ce qu\'une personne sans élément peut faire dans un monde qui valorise les éléments n\'est limité que par ce que cette personne décide de faire. Sa décision avait été de cacher quelqu\'un que personne d\'autre ne pouvait cacher.',
  },

  histoire: {
    enfance: {
      titre: 'Sans élément',
      contenu: 'Né sans accès aux éléments — un "Normal" dans la terminologie des Hommes-Liens. Dans les strates sociales de l\'Isthme, ça voulait dire une position spécifique : utile dans les rôles de soutien, invisible dans les rôles de décision. Il avait intégré les Dissidentes à 25 ans — une organisation qui valorisait les compétences pratiques plus que les éléments.',
    },
    arrivee: {
      titre: 'Le Second Avatar',
      contenu: 'À 32 ans, les Dissidentes lui avaient demandé de cacher quelqu\'un pendant quelques semaines. Il avait dit oui. Les quelques semaines étaient devenues 3 ans. Il n\'avait pas demandé pourquoi ça durait — il faisait ce qu\'il avait dit qu\'il ferait.',
    },
    premier_conflit: {
      titre: 'La mort',
      contenu: 'Il est mort dans des circonstances que les Dissidentes n\'ont pas rendu publiques — peut-être une opération impériale, peut-être une autre raison. Il avait 35 ans environ. Le Second Avatar avait environ 23 ans à ce moment. Il n\'était pas là quand Sarath est mort.',
    },
    revelation: {
      titre: 'La dette',
      contenu: 'La dette du Second Avatar envers Sarath n\'a pas de remboursement possible — Sarath est mort. Le Second Avatar le sait. Cette impossibilité de rembourser est présente comme une forme de culpabilité diffuse dans chaque décision qu\'il prend. Ce n\'est pas de la paralysie — c\'est une présence.',
    },
    etat_actuel: {
      titre: 'Le fantôme',
      contenu: 'Sarath est mort. Sa présence dans l\'arc est entièrement à travers le Second Avatar — ce qu\'il a appris de lui, ce qu\'il lui doit, ce qu\'il fait à cause de lui. Dans les discussions du Second Avatar sur ses décisions, le nom de Sarath revient souvent sans qu\'il soit directement cité.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sarath_presence',
      titre: 'La dette irremboursable',
      description: 'Le Second Avatar (59) doit quelque chose à Sarath qu\'il ne peut pas rembourser. Cette dette informe ses décisions sur ce qu\'il accepte de risquer pour les autres — il accepte plus que ce que sa propre sécurité justifierait. C\'est l\'héritage direct de Sarath.',
      personnages_impliques: [59, 62],
      declencheur: 'Toute situation où le Second Avatar doit décider s\'il risque quelque chose pour quelqu\'un d\'autre',
      consequence: 'Les décisions du Second Avatar influencées par la dette envers Sarath — un fantôme qui dirige des actions réelles',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Mort depuis environ 5 ans. A caché le Second Avatar (59) pendant 3 ans sans élément et sans reconnaissance. Présent dans chaque décision du Second Avatar comme une dette irremboursable. Le seul personnage de l\'arc dont la force venait entièrement de l\'absence d\'élément.',

  relations: [
    { id: 59, nom: 'Second Avatar', type: 'contact', note: 'A caché pendant 3 ans. La dette est présente comme fantôme dans ses décisions.' },
  ],

  combat: {
    sorts: [
      'Aucun élément (Normal) — pas d\'accès aux éléments — compétences entièrement physiques et tactiques',
      'Discrétion (Normal) — absence de signature élémentaire — passage dans des zones de détection élémentaire sans déclencher d\'alerte',
      'Soutien logistique (Normal) — organisation de ressources non-élémentaires — efficacité dans des contextes de survie',
    ],
  },

  image_prompts: [
    {
      id: 'sarath_cache',
      description: 'Sarath dans un espace de cache — un Homme-Lien ordinaire d\'environ 32 ans, assis dans une pièce petite, veillant sur une silhouette endormie. Pas de luminescence élémentaire. Son expression est de quelqu\'un qui fait quelque chose de normal pour lui dans une situation extraordinaire. Il ne semble pas héroïque. Il est là et c\'est tout.',
      style: 'réaliste Homme-Lien sans élément, espace de cache, veille ordinaire, absence d\'héroïsme affiché, présence comme acte suffisant',
    },
  ],

  lore_long: `Sarath a caché le Second Avatar (59) pendant 3 ans. Il n'avait pas d'élément. Il est mort avant que le Second Avatar puisse rembourser cette dette.

Sa présence dans cet arc est entièrement à travers ce que le Second Avatar fait à cause de lui. Pas de voix directe — une influence sur chaque décision.

Il n'était jamais sur les listes d'importance des Dissidentes. Il faisait plus que ceux qui y étaient.`,
};

export default sarath;
