import type { PersonnageLoreComplet } from '../../../lore-types';

const thyvalskren: PersonnageLoreComplet = {
  id: 340,
  nom: 'Thyvalskren',
  element: 'Glace',
  element2: 'Stellaire',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Monarchie',

  apparence: {
    taille_corpulence: 'Élancée, avec une tendance à lever les yeux — un réflexe de quelqu\'un dont le travail est de regarder ce qui est au-dessus. Dans un espace intérieur, ce comportement peut sembler distrait.',
    peau: 'Blanc-argenté Givrin avec des reflets subtils qui bougent légèrement — l\'élément Stellaire secondaire qui anime sa présence d\'une luminosité variable.',
    yeux: 'Argent brillant. Ils semblent parfois regarder au-delà de la pièce — pas vers quelque chose de précis, vers une distance qui n\'est pas physiquement présente.',
    vetements: 'Tenue royale astronomique — bleue foncée avec des incrustations qui réfléchissent la lumière de façon à simuler des étoiles dans des conditions d\'obscurité appropriées. Fonctionnelle pour l\'observation nocturne, représentative pour la cour.',
    signes_particuliers: 'Elle peut donner l\'heure à la minute près en regardant la position de n\'importe quelle source lumineuse — soleil, lune, étoile — par rapport à la glace réfléchissante. Ce talent n\'a pas semblé exceptionnel à elle avant que d\'autres lui signalent que c\'est inhabituels.',
  },

  psychologie: {
    dominante: 'Lecture des trajectoires stellaires dans les surfaces glacées réfléchissantes de Crysalme. La glace de Crysalme, dans certaines conditions, réfléchit les étoiles avec une précision qui permet des observations astronomiques sans équipement spécialisé. Elle a développé une méthode de lecture qui utilise ces surfaces comme instrument.',
    mecanisme_de_defense: 'Les données comme autorité. Ses lectures sont vérifiables — une trajectoire stellaire prédite peut être confirmée. Cette vérifiabilité lui donne une position dans une cour où beaucoup d\'affirmations ne sont pas vérifiables.',
    contradiction_interne: 'Ses lectures confirment les calculs de Velskrevyn (342) sur la "fenêtre de 18 mois" — une convergence d\'alignements stellaires qui correspondrait à une période de dégel possible. Elle l\'a confirmé à Thyval (55). Elle ne sait pas si Thyval utilise cette confirmation pour des décisions politiques sans lui en informer.',
    rapport_aux_autres: 'Thyval (55) lui confie les décisions à valider par observation stellaire — elle donne un avis astronomique, Thyval décide politiquement. Velkris (166) est un autre astronome de la région qui compare parfois ses calculs avec les siens.',
    vision_du_monde: 'Les étoiles bougent selon des lois qui ne changent pas selon les saisons politiques. Leurs trajectoires peuvent être calculées des siècles à l\'avance. Dans un monde où beaucoup de choses sont incertaines, cette régularité est une forme de vérité.',
  },

  histoire: {
    enfance: {
      titre: 'La glace comme miroir',
      contenu: 'À 14 ans, elle avait découvert que la surface du Lac Krael gelé réfléchissait les étoiles avec une précision supérieure à un miroir poli. Elle avait passé 3 nuits d\'hiver à observer et noter. Les notes avaient conduit à sa première prédiction de trajectoire confirmée 6 mois plus tard.',
    },
    arrivee: {
      titre: 'L\'astronome royale',
      contenu: 'À 27 ans, Thyval (55) l\'avait intégrée à la cour comme astronome royale. La Monarchie Givrin avait une tradition d\'observation stellaire — mais ses méthodes utilisaient des instruments. Les siennes utilisaient la glace. Elle avait prouvé que sa méthode était plus précise dans les conditions de Crysalme.',
    },
    premier_conflit: {
      titre: 'La décision sans observation',
      contenu: 'À 35 ans, Thyval avait pris une décision politique en utilisant une "lecture stellaire" — mais une lecture qu\'elle n\'avait pas faite. Quelqu\'un d\'autre avait fourni l\'interprétation astronomique. Elle avait confronté Thyval discrètement. Thyval avait dit que l\'interprétation était "cohérente avec ses méthodes". Elle avait demandé à revoir toutes les lectures utilisées pour des décisions.',
    },
    revelation: {
      titre: 'La fenêtre de 18 mois',
      contenu: 'Ses observations des alignements stellaires sur 6 mois correspondaient exactement aux calculs de Velskrevyn (342) — une convergence d\'alignements dans les 18 prochains mois qui créerait des conditions favorables à un dégel. Elle avait présenté la concordance à Thyval. Thyval avait dit "je le sais". Thyval savait déjà. Il n\'avait pas partagé l\'information avec elle.',
    },
    etat_actuel: {
      titre: 'Le suivi de la fenêtre',
      contenu: 'Elle observe la progression vers la fenêtre de 18 mois avec une fréquence mensuelle maintenant. Les alignements progressent comme prévu. Elle rapporte à Thyval. Elle rapporte aussi à Velkris (166) indépendamment — un partage de données entre astronomes qui n\'est pas demandé par la Monarchie.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyvalskren_fenetre_progression',
      titre: 'La fenêtre confirmée',
      description: 'Ses observations mensuelles confirment la progression vers la fenêtre de 18 mois — les alignements stellaires évoluent comme prévu par les calculs de Velskrevyn (342). Elle rapporte à Thyval (55) mensuellement. Thyval "le sait déjà" — une information qu\'il avait sans lui. Elle ne sait pas d\'où il l\'avait.',
      personnages_impliques: [55, 166],
      declencheur: 'Confirmation mensuelle de la progression vers la fenêtre d\'alignement',
      consequence: 'Fenêtre confirmée et en progression — Thyval a accès à cette information indépendamment d\'elle',
    },
    {
      id: 'thyvalskren_partage_velkris',
      titre: 'Le partage non autorisé',
      description: 'Elle partage ses données d\'observation avec Velkris (166) indépendamment de la Monarchie. Ce partage n\'est pas interdit explicitement — il n\'est pas demandé non plus. Si Thyval le sait, il n\'a pas commenté. Si Thyval ne le sait pas, c\'est une information astronomique qui circule hors du canal royal.',
      personnages_impliques: [166, 55],
      declencheur: 'Décision de partage de données avec un collègue astronome indépendant',
      consequence: 'Données astronomiques circulant hors canal royal — statut de ce partage non clarifié',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Astronome royale de Crysalme. Ses lectures stellaires dans la glace réfléchissante confirment la "fenêtre de 18 mois" calculée par Velskrevyn. Thyval sait des choses sur cette fenêtre qu\'il ne lui a pas dites.',

  relations: [
    { id: 55, nom: 'Thyval', type: 'supérieur', note: 'Reçoit les lectures stellaires et les utilise pour des décisions politiques. Savait déjà la concordance avec Velskrevyn avant qu\'elle le rapporte.' },
    { id: 166, nom: 'Velkris', type: 'allié', note: 'Astronome indépendant. Partage de données comparatives. Non autorisé par la Monarchie, non interdit.' },
  ],

  combat: {
    sorts: [
      'Réfraction de glace (Glace) — utilisation d\'une surface glacée comme miroir directif de lumière — éblouissement ou signalement',
      'Éclat stellaire (Stellaire) — concentration d\'énergie stellaire en un point — impact lumineux ciblé',
      'Carte de glace (Glace + Stellaire) — projection d\'une carte des trajectoires stellaires dans l\'espace — désorientation par information excessive',
    ],
  },

  image_prompts: [
    {
      id: 'thyvalskren_observation',
      description: 'Thyvalskren agenouillée sur la surface du Lac Krael gelé en pleine nuit, observant le reflet d\'un alignement stellaire dans la glace. Sa silhouette argentée se confond légèrement avec le reflet. Elle note sur un carnet tenu contre sa cuisse. La glace réfléchit les étoiles avec une clarté parfaite.',
      style: 'réaliste astronomie sur glace, nuit de Crysalme, reflet stellaire dans le lac gelé, observation solitaire',
    },
  ],

  lore_long: `Thyvalskren lit les trajectoires stellaires dans les surfaces glacées réfléchissantes de Crysalme. Ses méthodes sont plus précises dans les conditions locales que les instruments standard.

Ses observations confirment la "fenêtre de 18 mois" calculée par Velskrevyn (342) — une convergence d\'alignements propice à un dégel. Elle a présenté la concordance à Thyval (55). Thyval a dit "je le sais". Il savait déjà. Il ne lui avait pas dit d'où.

Elle partage ses données avec Velkris (166) indépendamment. La Monarchie n'a pas commenté.

Les alignements progressent comme prévu. Elle observe chaque mois.`,
};

export default thyvalskren;
