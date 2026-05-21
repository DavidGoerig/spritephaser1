import type { PersonnageLoreComplet } from '../../../lore-types';

const thyvsrael: PersonnageLoreComplet = {
  id: 362,
  nom: 'Thyvsrael',
  element: 'Electrique',
  element2: 'Combat',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Militaire — une carrure adaptée aux zones de saturation avec une tolérance aux décharges électriques développée par exposition prolongée. Des marques d\'induction sévères aux avant-bras.',
    peau: 'Brun clair Homme-Lien avec des cicatrices en réseau aux mains et aux avant-bras — exposition directe aux zones de saturation de niveau élevé dans le cadre de ses opérations.',
    yeux: 'Gris avec une qualité de scan — il évalue les personnes dans les espaces comme des sources potentielles de signature électrique.',
    vetements: 'Tenue militaire impériale avec protection électrique renforcée — il opère dans des zones où la saturation peut interférer avec ses propres capacités.',
    signes_particuliers: 'Il entre dans une zone et attend — quelques secondes de perception électrique ambiante avant d\'agir. Les personnes qui ne savent pas ce qu\'il fait pensent qu\'il hésite.',
  },

  psychologie: {
    dominante: 'Localisation et neutralisation d\'Élus dont les capacités Electrique sont devenues instables dans les zones de saturation élevée de l\'Isthme — des Élus dont les décharges incontrôlées menacent les infrastructures et les populations.',
    mecanisme_de_defense: 'Le mandat opérationnel. Il neutralise des Élus instables. L\'instabilité est réelle — il a vu des décharges incontrôlées. Le mandat est donc justifié. Il ne traite pas ce qu\'il fait à tous les Élus qu\'il neutralise, pas seulement les instables.',
    contradiction_interne: 'Ses critères d\'instabilité sont définis par Avel (64) — et ces critères se sont élargis progressivement. Ce qui était "instabilité sévère" est maintenant "instabilité modérée potentielle". Il applique les critères. Il ne les redéfinit pas. Il remarque l\'élargissement mais ne l\'a pas contesté.',
    rapport_aux_autres: 'Avel (64) définit les critères d\'instabilité et lui fournit les cibles. Orven II (263) commande les opérations dans les zones de saturation de l\'Isthme — Thyvsrael est sous son autorité opérationnelle pour les interventions de terrain.',
    vision_du_monde: 'Les zones de saturation électrique de l\'Isthme créent des Élus instables dont les décharges sont des risques réels. Les neutraliser est une protection de la population. Cette justification est partiellement vraie.',
  },

  histoire: {
    enfance: {
      titre: 'L\'incident du quartier',
      contenu: 'À 18 ans, un Élu du quartier où il habitait avait perdu le contrôle de ses capacités Electrique pendant une période de saturation intense — une décharge avait blessé 3 personnes. Les autorités impériales étaient intervenues. Il avait vu l\'intervention. Il avait compris que les capacités non maîtrisées étaient dangereuses.',
    },
    arrivee: {
      titre: 'L\'intégration aux unités de régulation',
      contenu: 'À 24 ans, sa propre capacité Electrique lui avait valu un recrutement dans les unités de régulation impériales — des unités qui géraient les incidents liés aux Élus dans les zones de saturation. La logique initiale était la protection des populations. Il avait accepté.',
    },
    premier_conflit: {
      titre: 'L\'élargissement des critères',
      contenu: 'À 29 ans, il avait reçu un dossier sur un Élu classé instable. En lisant le dossier, il avait réalisé que le classement était basé sur une décharge datant de 4 ans — sans incident depuis. Les critères avaient dû s\'élargir depuis son recrutement. Il avait exécuté le mandat.',
    },
    revelation: {
      titre: 'Les données de Thyvsaevyn',
      contenu: 'Thyvsaevyn (357) lui avait fourni des données de signature électrique sur des Élus de Virex — des données précises sur les niveaux et patterns de signature. Ces données permettaient d\'identifier des Élus avant toute manifestation d\'instabilité, sur la base de leur signature seule. C\'était une capacité nouvelle.',
    },
    etat_actuel: {
      titre: 'Les 3 mandats actifs',
      contenu: 'Il a 3 mandats actifs sur des Élus de la zone de Virex — tous classés instables sur la base des données de Thyvsaevyn (357). Aucun des 3 n\'a eu d\'incident de décharge documenté. Leur classement est entièrement basé sur la signature. La démonstration de Kasevolt (360) dans 2 semaines va générer de nouvelles données et potentiellement de nouveaux mandats.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyvsrael_criteres_signature',
      titre: 'Les mandats sans incident',
      description: 'Ses 3 mandats actifs sont basés sur des signatures électriques anormales, pas sur des incidents documentés. Avel (64) a autorisé ce critère. Thyvsaevyn (357) fournit les données. Il exécute les mandats. Si la démonstration de Kasevolt (360) produit des identifications supplémentaires, le volume de mandats va augmenter au-delà de sa capacité actuelle.',
      personnages_impliques: [64, 357],
      declencheur: 'Critères de classification étendus aux signatures sans incident',
      consequence: 'Volume de mandats potentiellement non gérable après démonstration de Kasevolt',
    },
    {
      id: 'thyvsrael_saturation_propre',
      titre: 'L\'exposition cumulée',
      description: 'Ses interventions dans les zones de saturation de niveau 4 de l\'Isthme ont produit une exposition électrique cumulée élevée. Son propre niveau d\'induction électrique augmente progressivement. Orven II (263) lui a recommandé une période de repos opérationnel. Il n\'a pas pris de repos — les mandats actifs ne le permettent pas.',
      personnages_impliques: [263, 64],
      declencheur: 'Exposition cumulée aux zones de saturation de niveau 4',
      consequence: 'Dégradation progressive de la résistance — risque opérationnel à moyen terme',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Régulateur impérial neutralisant des Élus classés instables à Virex. 3 mandats actifs basés sur des signatures, pas des incidents. L\'élargissement progressif des critères d\'Avel ne lui a pas été explicitement signalé.',

  relations: [
    { id: 64, nom: 'Avel', type: 'supérieur', note: 'Définit les critères d\'instabilité et fournit les mandats. Critères progressivement élargis.' },
    { id: 263, nom: 'Orven II', type: 'supérieur', note: 'Commande les opérations de terrain. A recommandé un repos opérationnel non suivi.' },
  ],

  combat: {
    sorts: [
      'Décharge de suppression (Electrique) — décharge électrique ciblée neutralisant temporairement les capacités d\'un Élu Electrique — suppression de capacité',
      'Impact de régulation (Combat) — frappe physique coordonnée à une décharge — neutralisation combinée',
      'Résistance d\'induction renforcée (Electrique) — isolation active contre les décharges de haute intensité — protection en zone de saturation sévère',
    ],
  },

  image_prompts: [
    {
      id: 'thyvsrael_intervention',
      description: 'Thyvsrael dans une zone de saturation électrique de Virex — l\'air légèrement lumineux autour de lui. Il est immobile, les yeux mi-clos, percevant les signatures électriques de la zone. Ses avant-bras ont des marques d\'induction sévères. Son expression est professionnelle et fermée.',
      style: 'réaliste régulateur militaire Homme-Lien, zone de saturation électrique, perception active, marques d\'induction',
    },
  ],

  lore_long: `Thyvsrael neutralise des Élus classés instables dans les zones de saturation de l'Isthme. Sa justification initiale était la protection des populations face aux décharges incontrôlées.

Ses critères d'instabilité viennent d'Avel (64) — et ces critères se sont élargis progressivement. Ses 3 mandats actifs sont basés sur des signatures de Thyvsaevyn (357), pas sur des incidents documentés.

Son exposition cumulée aux zones de saturation de niveau 4 dégrade sa propre résistance électrique. Orven II (263) lui a recommandé un repos qu'il n'a pas pris.`,
};

export default thyvsrael;
