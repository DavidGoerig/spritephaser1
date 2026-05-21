import type { PersonnageLoreComplet } from '../../../lore-types';

const sylkraeth: PersonnageLoreComplet = {
  id: 286,
  nom: 'Sylkraeth',
  element: 'Plante',
  element2: 'Poison',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Fine et haute, avec des mouvements précis qui ont l\'air innocents jusqu\'à ce qu\'ils ne le soient plus.',
    peau: 'Brun vert Sylvan avec des stries lilas aux avant-bras — marque de l\'élément Poison Sylvan, différente des teintes Chthoniennes.',
    yeux: 'Vert foncé, évaluateurs. Elle regarde les gens comme elle regarde les plantes — pour estimer leurs propriétés.',
    vetements: 'Robe de Conservatrice Sylvan. C\'est délibéré — elle circule mieux comme Conservatrice que comme ce qu\'elle est.',
    signes_particuliers: 'Elle ne touche pas les plantes toxiques à mains nues depuis un incident à 22 ans. Elle porte toujours des gants fins, même dans des contextes où c\'est inhabituel.',
  },

  psychologie: {
    dominante: 'Précision ciblée. L\'élément Poison n\'est utile que si on sait exactement où il va et ce qu\'il fait.',
    mecanisme_de_defense: 'Le choix éthique articulé. Elle cible exclusivement les agents impériaux actifs dans des opérations contre les Élus. Ce n\'est pas une règle abstraite — elle l\'a réfléchie et elle peut l\'expliquer.',
    contradiction_interne: 'Son travail est précis et délibéré. Elle est efficace. Elle est aussi une arme que les Dissidentes déploient selon leurs objectifs, pas les siens. La ligne entre "ses cibles" et "les cibles qu\'on lui donne" s\'est légèrement déplacée 3 fois en 8 ans.',
    rapport_aux_autres: 'Velshyr (156) fait le même travail à Vel\'Nox avec d\'autres méthodes. Elles ne se sont jamais rencontrées — elles ont juste comparé leurs éthiques de travail via un canal commun une fois. La comparaison était instructive. Ossira (44) est leur point de contact commun.',
    vision_du_monde: 'L\'Empire extrait des gens. Certaines personnes qui font l\'extraction doivent en payer le coût. Ce n\'est pas du plaisir — c\'est une comptabilité.',
  },

  histoire: {
    enfance: {
      titre: 'La plante et son usage',
      contenu: 'Née dans une famille Conservatrice, elle avait appris la botanique sylvane avant de découvrir que certaines plantes qu\'elle étudiait avaient des usages que ses professeurs n\'enseignaient pas. L\'élément Poison était apparu à 18 ans et avait changé sa relation aux plantes toxiques — de l\'étude à la pratique.',
    },
    arrivee: {
      titre: 'L\'incident et la règle',
      contenu: 'À 22 ans, un empoisonnement involontaire — pas une cible, une erreur de contexte. Elle avait survécu. Sa cible aussi. Elle avait passé 6 mois à reformuler ses critères de ciblage, ses méthodes d\'identification, ses seuils d\'action. Les règles qu\'elle applique depuis ont une origine précise : cet incident.',
    },
    premier_conflit: {
      titre: 'La première mission Dissidente',
      contenu: 'Son premier mandat des Dissidentes : un agent impérial actif dans des opérations d\'extraction à Sylvera. Elle avait passé 3 semaines à vérifier l\'identification. L\'opération avait duré 4 minutes. Elle était la seule personne dans la pièce à savoir pourquoi cet homme était sa cible plutôt qu\'un autre.',
    },
    revelation: {
      titre: 'La liste étendue',
      contenu: 'Il y a 2 ans, les Dissidentes lui avaient transmis une liste qui incluait un nom qu\'elle n\'aurait pas choisi elle-même — pas un agent actif d\'extraction, mais quelqu\'un dont les actions avaient des conséquences indirectes sur les Élus. Sa règle disait non. Elle avait refusé. Ça avait créé une friction.',
    },
    etat_actuel: {
      titre: 'La règle maintenue',
      contenu: 'Elle continue à travailler pour les Dissidentes avec sa règle maintenue — cibles actives dans des opérations directes uniquement. La friction de la liste étendue est passée. Elle sait que la prochaine liste pourra contenir un nom similaire. Elle sait ce qu\'elle fera.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sylkraeth_regle_maintenue',
      titre: 'La liste refusée',
      description: 'Il y a 2 ans, elle a refusé un mandat sur quelqu\'un qui ne correspondait pas à ses critères. Les Dissidentes ont intégré le refus sans la sanctionner — sa compétence est trop précieuse. Mais elle sait que la pression reviendra, sous une autre forme, avec une autre liste.',
      personnages_impliques: [],
      declencheur: 'Liste Dissidente incluant une cible hors-critères',
      consequence: 'Indépendance partielle maintenue dans la relation avec les Dissidentes',
    },
    {
      id: 'sylkraeth_velshyr_comparaison',
      titre: 'L\'échange éthique',
      description: 'Elle et Velshyr ont comparé leurs éthiques de travail via un canal commun une fois. Velshyr cible également exclusivement les impériaux mais avec des critères légèrement différents. Leur échange était professionnel — deux personnes qui font un travail similaire et veulent vérifier que leurs cadres sont cohérents.',
      personnages_impliques: [156],
      declencheur: 'Mise en contact via Ossira',
      consequence: 'Validation mutuelle de cadres éthiques — conscience qu\'une autre personne fait le même type d\'évaluation',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Outil de pression des Dissidentes à Sylvera. Elle est précise, éthique selon ses propres critères, et maintient sa règle contre la pression.',

  relations: [
    { id: 156, nom: 'Velshyr', type: 'allié', note: 'Travail similaire à Vel\'Nox. Échange éthique une fois via canal commun. Respect professionnel à distance.' },
    { id: 44, nom: 'Ossira', type: 'allié', note: 'Point de contact commun avec Velshyr. Source de mandats et de soutien logistique.' },
  ],

  combat: {
    sorts: [
      'Extrait ciblé (Poison) — application d\'un toxique sylvan via contact direct — effet dosé avec précision',
      'Brume végétale (Plante) — nuage de spores sylvanes qui altèrent la perception — couverture et désorientation',
      'Empoisonnement à distance (combiné) — projection de pollen toxique dans un flux végétal contrôlé — portée de 20 mètres',
    ],
  },

  image_prompts: [
    {
      id: 'sylkraeth_gants',
      description: 'Sylkraeth en tenue de Conservatrice, les mains gantées manipulant une plante toxique sylvane. Son regard évalue. Elle n\'est pas dangereuse en ce moment — elle travaille. La différence entre les deux est une décision qu\'elle n\'a pas encore prise pour cette situation.',
      style: 'réaliste sylvan, lumière de laboratoire ou de jardin, tension contenue, compétence visible',
    },
  ],

  lore_long: `Sylkraeth empoisonne les agents impériaux qui extraient des Élus à Sylvera. Elle a une règle : uniquement les actifs dans des opérations directes.

Cette règle a une origine précise — un incident à 22 ans, un empoisonnement involontaire, 6 mois à reformuler ses critères. Elle peut expliquer pourquoi chaque personne sur sa liste correspondait à ses critères. Elle l'a fait pour chacune.

Il y a 2 ans, les Dissidentes lui ont transmis une liste incluant quelqu'un hors-critères. Elle a refusé. Ça a créé une friction. La friction est passée. Elle sait que la prochaine liste contiendra peut-être un nom similaire.

Elle a comparé ses critères avec Velshyr à Vel'Nox via un canal commun une fois. Velshyr cible également uniquement les impériaux, avec des critères légèrement différents. L'échange était professionnel — deux personnes qui font un travail difficile et veulent vérifier que leur cadre tient.

Elle circule comme Conservatrice. Les plantes toxiques sylvanes poussent dans les mêmes jardins que les plantes innocentes. Personne ne regarde deux fois une Conservatrice en train de jardiner.`,
};

export default sylkraeth;
