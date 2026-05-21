import type { PersonnageLoreComplet } from '../../../lore-types';

const sythavel: PersonnageLoreComplet = {
  id: 269,
  nom: 'Sythavel',
  element: 'Glace',
  element2: 'Ténèbres',
  espece: 'Hommes-Liens',
  region: 'Déserts',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: 'Petite, très économe de mouvement — elle a appris à observer sans être observée, et cette économie est devenue posturale.',
    peau: 'Pâle pour quelqu\'un des Déserts — protégée par l\'intérieur plutôt que par le soleil. Légèrement bleutée aux poignets, reflets de Glace.',
    yeux: 'Gris perle, presque translucides. Difficiles à lire — elle a travaillé ça.',
    vetements: 'Tenue d\'analyste Convergence, neutre. Elle ne porte rien qui distrait le regard — ni couleurs, ni ornements. Elle veut que les gens oublient sa présence immédiatement après qu\'elle est partie.',
    signes_particuliers: 'Elle prend ses notes à la main plutôt que de les dicter — les instruments d\'enregistrement laissent des preuves supplémentaires. Ses carnets ont une calligraphie extrêmement petite et dense.',
  },

  psychologie: {
    dominante: 'Compréhension comme outil de prédiction. Elle ne comprend pas pour comprendre — elle comprend pour anticiper. La distinction lui semble évidente. Elle a tort de la trouver évidente.',
    mecanisme_de_defense: 'Le sujet comme problème à résoudre. Tant que le Second Avatar est une équation, elle n\'est pas amenée à poser d\'autres questions.',
    contradiction_interne: 'Elle l\'a identifié comme quelqu\'un qui cherche à comprendre plutôt qu\'à fuir. C\'est une caractérisation précise et empathique — elle a dû se mettre à sa place pour y arriver. Elle n\'examine pas ce que ça signifie de l\'avoir fait.',
    rapport_aux_autres: 'Razhal (231) et Lysael (63) reçoivent ses analyses. Elle produit, ils utilisent. Elle ne sait pas toujours comment — et a décidé que ça ne la regardait pas.',
    vision_du_monde: 'La connaissance est une ressource. Elle produit de la connaissance. Ce qu\'on fait avec est une question séparée.',
  },

  histoire: {
    enfance: {
      titre: 'L\'enfant qui lisait les gens',
      contenu: 'Née dans les Déserts dans une famille de marchands itinérants. Son élément Glace — inhabituellement fort pour les Déserts — lui donnait une perception froide des situations, une capacité à lire les intentions sans y être émotionnellement engagée. L\'élément Ténèbres secondaire avait renforcé sa capacité à percevoir ce qui est caché.',
    },
    arrivee: {
      titre: 'La Convergence et l\'analyse',
      contenu: 'Recrutée à 29 ans — son profil correspondait exactement à ce que la Convergence cherchait dans ses analystes. Elle avait vu ça aussi : son profil correspondait, et la Convergence lui offrait les ressources nécessaires pour faire ce qu\'elle faisait naturellement à grande échelle. Elle avait accepté sans idéologie particulière.',
    },
    premier_conflit: {
      titre: 'La première observation du Second Avatar',
      contenu: 'Il y a 3 ans, elle avait reçu un dossier initial sur un "Élu non-enregistré à haute cohérence élémentaire" — plusieurs observations convergentes de comportement inhabituels. Elle avait passé une semaine à lire le dossier avant d\'écrire la première ligne d\'analyse.',
    },
    revelation: {
      titre: 'La distinction cruciale',
      contenu: 'Ses supérieurs pensaient que le Second Avatar fuyait — comportement de survie, décisions réactives. Elle avait réalisé la distinction au bout de 6 mois d\'analyse : ses déplacements n\'étaient pas de la fuite, ils étaient de la recherche. Il cherchait à comprendre quelque chose. Cette distinction lui permettait de prédire ses prochaines destinations avec une précision que ses supérieurs attribuaient à de la chance.',
    },
    etat_actuel: {
      titre: 'La prédiction en cours',
      contenu: 'Elle a prédit sa prochaine destination il y a 11 jours. Il devrait être dans le port de l\'Isthme d\'ici 2 semaines. Elle l\'a transmis à Razhal et à Lysael. Rhethora (270) a reçu ces coordonnées pour ses propres ordres. Elle ne sait pas ce que Rhethora fera avec elles.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sythavel_prediction_avatar',
      titre: 'La précision qui dérange',
      description: 'Ses prédictions sur les déplacements du Second Avatar ont un taux de précision de 80% sur 3 ans — un chiffre que ses supérieurs trouvent impressionnant et qu\'elle trouve insuffisant. Les 20% d\'erreur sont liés aux variables qu\'elle ne peut pas contrôler : rencontres aléatoires, conditions météorologiques, décisions impulsives. Elle travaille à réduire cette marge en comprenant mieux les déclencheurs des décisions impulsives.',
      personnages_impliques: [59],
      declencheur: 'Analyse de 3 ans de déplacements',
      consequence: 'Outil de prédiction le plus précis sur le Second Avatar — basé sur une empathie cognitive qu\'elle ne nomme pas',
    },
    {
      id: 'sythavel_razhal_lysael_usage',
      titre: 'L\'usage de ses analyses',
      description: 'Elle sait que Razhal (231) et Lysael (63) utilisent ses prédictions pour planifier des opérations. Elle ne sait pas exactement quelles opérations. Elle a décidé que ça ne la regardait pas — elle produit de l\'analyse, pas des décisions opérationnelles. Si les opérations sont ce qu\'elle suppose qu\'elles pourraient être, sa décision de ne pas demander est un choix moral qu\'elle ne nomme pas comme tel.',
      personnages_impliques: [231, 63],
      declencheur: 'Distribution de ses analyses à des destinataires opérationnels',
      consequence: 'Séparation analyse/opération — fragmentation de la responsabilité morale',
    },
    {
      id: 'sythavel_rhethora_coordonnees',
      titre: 'Les coordonnées transmises à Rhethora',
      description: 'Rhethora (270) a reçu ses coordonnées pour "empêcher la récupération impériale". Sythavel n\'est pas sûre de ce que "empêcher" signifie dans les ordres de Rhethora. Elle n\'a pas demandé. Si "empêcher" signifie tuer, alors ses coordonnées sont ce qui a rendu le meurtre possible. Elle a décidé de ne pas examiner cette phrase.',
      personnages_impliques: [270],
      declencheur: 'Transmission de coordonnées de prédiction à un agent opérationnel',
      consequence: 'Responsabilité indirecte dans ce que Rhethora fera — non reconnue par Sythavel',
    },
  ],

  arcs: ['arc_second_avatar', 'arc_convergence_drain'],
  position_dans_arc: 'L\'œil le plus précis sur le Second Avatar — et la moins impliquée dans ce que ça fait d\'elle. Elle produit la connaissance. Ce que la connaissance produit ensuite n\'est pas son problème. Sauf que si.',

  relations: [
    { id: 59, nom: 'Second Avatar', type: 'ennemi', note: 'Sa cible d\'analyse depuis 3 ans. L\'a compris suffisamment pour prédire ses déplacements à 80%. Ne l\'a jamais rencontré.' },
    { id: 231, nom: 'Razhal', type: 'mentor', note: 'Destinataire de ses analyses — ne sait pas ce qu\'il en fait exactement.' },
    { id: 63, nom: 'Lysael', type: 'allié', note: 'Reçoit ses prédictions pour les opérations — usage non précisé.' },
    { id: 270, nom: 'Rhethora', type: 'contact_nécessaire', note: 'A reçu ses coordonnées pour une mission dont les ordres sont ambigus. Sythavel n\'a pas demandé ce qu\'elle fera.' },
  ],

  combat: {
    sorts: [
      'Analyse de Ténèbres (Ténèbres) — lecture des intentions non exprimées dans un espace — perception des sous-entendus comportementaux',
      'Ralentissement de Glace (Glace) — abaissement de la température corporelle d\'une cible pour réduire sa réactivité',
      'Présence effacée (Ténèbres) — réduction de l\'impression mémorielle laissée dans un espace après un départ',
    ],
  },

  image_prompts: [
    {
      id: 'sythavel_carnet',
      description: 'Sythavel à une table, carnet ouvert, calligraphie minuscule et dense. Une carte est étalée à côté. Elle trace une ligne entre deux points avec une précision de géomètre. Son expression est concentrée et légèrement absente — elle est dans le problème, pas dans le monde autour.',
      style: 'réaliste humain, lumière froide d\'analyste, cartes et notes, tons gris et bleu pâle',
    },
  ],

  lore_long: `Sythavel comprend le Second Avatar mieux que n'importe qui dans la Convergence.

Pas parce qu'elle a plus d'informations — Razhal a autant de rapports de terrain. Parce qu'elle a compris la distinction qui change tout : il ne fuit pas. Il cherche.

Cette distinction, elle ne l'a pas déduite d'une analyse statistique. Elle l'a déduite de s'être mise à sa place pendant 6 mois — de s'être demandé ce que quelqu'un qui est ce qu'il est voudrait comprendre, quelles questions se poseraient à lui, quelles destinations le rapprochemment de réponses possibles. Elle a fait ça avec précision et froideur et sans jamais admettre que faire ça ressemble à de l'empathie.

Ses prédictions ont un taux de précision de 80%. Ce chiffre la dérange. Les 20% d'erreur sont liés aux décisions qu'elle ne peut pas anticiper parce qu'elles viennent de rencontres aléatoires — une guérisseuse dans un abri, une conversation dans une maison de transit. Les relations humaines imprévisibles.

Elle a transmis les coordonnées du port de l'Isthme. Rhethora les a reçues. Ses ordres sont d'empêcher la récupération impériale. Sythavel ne sait pas ce que "empêcher" signifie dans les ordres de Rhethora.

Elle a décidé de ne pas demander.

C'est une décision qu'elle a prise en 3 secondes et qu'elle n'a pas ré-examinée. Elle sait que les décisions prises en 3 secondes sur des questions importantes méritent une ré-examen. Elle ne l'a pas fait.

Elle a un taux de compréhension de 80% sur quelqu'un qu'elle n'a jamais rencontré. Elle a un taux de compréhension de 0% sur ce qu'elle fait de cette compréhension.`,
};

export default sythavel;
