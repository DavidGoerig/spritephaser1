import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrsk: PersonnageLoreComplet = {
  id: 79,
  nom: 'Thyrsk',
  element: 'Sol',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Pyrien de 43 ans, de taille moyenne avec la corpulence du voyageur — ni trop lourd pour les routes, ni trop léger pour être pris au sérieux. Il se présente toujours de façon à être reçu.',
    peau: 'Brune Pyrien avec une luminescence dorée-terreux aux pieds et aux mollets — l\'élément Sol d\'un homme qui marche beaucoup. La connexion au sol est littéralement dans ses jambes.',
    yeux: 'Brun-rouge, avec une qualité de pragmatisme diplomatique. Il évalue les intérêts avant les personnes.',
    vetements: 'Tenue de liaison Confédération — pas d\'insignes militaires, pas de symboles politiques. Identifiable comme représentant sans être identifiable comme partisan.',
    signes_particuliers: 'Il maintient des routes commerciales post-Rupture entre Varkhôl et Ormn-Dur. Ce travail nécessite de ne pas choisir de camp. Il y est expert.',
  },

  psychologie: {
    dominante: 'Agent de liaison Confédération entre Varkhôl et Ormn-Dur depuis 10 ans. Il maintient des équilibres commerciaux et politiques fragiles. Sa compétence est la négociation entre des parties qui ne se font pas confiance.',
    mecanisme_de_defense: 'Le pragmatisme comme identité. Il ne croit pas aux positions idéologiques — il croit aux intérêts. Les intérêts sont négociables. Les positions ne le sont pas.',
    contradiction_interne: 'Il maintient des routes qui profitent également à des factions opposées. Sa neutralité les avantage toutes — y compris l\'Empire. Il y a une forme d\'aide indirecte à des acteurs qu\'il ne soutiendrait pas directement.',
    rapport_aux_autres: 'Draven II (40) est un contact d\'Ormn-Dur — ils ont des routes commerciales en commun. La Rupture est le contexte permanent de ses négociations.',
    vision_du_monde: 'Les routes commerciales sont les veines d\'une région. Couper une route blesse tout le monde. Maintenir une route profite à tout le monde — y compris à ceux dont les intérêts s\'opposent.',
  },

  histoire: {
    enfance: {
      titre: 'La Confédération',
      contenu: 'Rejoint la Confédération à 20 ans pour un poste administratif. Orienté vers la liaison inter-régions à 25 ans — son élément Sol le rendait naturellement adapté aux positions qui nécessitent de rester ancré dans plusieurs contextes à la fois.',
    },
    arrivee: {
      titre: 'La Rupture et les routes',
      contenu: 'La Rupture avait coupé plusieurs routes commerciales entre Varkhôl et Ormn-Dur. La Confédération l\'avait envoyé négocier les alternatives. Il avait trouvé 3 routes alternatives viables dans les 6 semaines suivantes.',
    },
    premier_conflit: {
      titre: 'La neutralité en tension',
      contenu: 'Les deux villes avaient des intérêts différents dans les routes alternatives. Thyrsk avait négocié un accord qui satisfaisait les deux sans avantager ni l\'une ni l\'autre. Les deux parties avaient été légèrement mécontentes — ce qu\'il avait interprété comme un succès.',
    },
    revelation: {
      titre: 'La durée',
      contenu: '10 ans sur les mêmes routes. Les personnes changeaient, les tensions changeaient, les routes restaient. Il avait compris que sa valeur était la continuité — il était le seul à connaître l\'historique complet.',
    },
    etat_actuel: {
      titre: 'Les routes maintenues',
      contenu: 'Les routes fonctionnent. Les tensions politiques fluctuent mais n\'ont pas coupé les routes en 10 ans. Il considère ça comme un succès modeste et réel.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrsk_routes',
      titre: 'Les routes comme infrastructure critique',
      description: 'Les routes que Thyrsk maintient sont utilisées par des factions opposées. Si un conflit majeur entre Varkhôl et Ormn-Dur éclate, ces routes deviennent une infrastructure stratégique que toutes les factions voudront contrôler. Sa neutralité ne survivra pas à ce scénario.',
      personnages_impliques: [40],
      declencheur: 'Escalade d\'un conflit entre Varkhôl et Ormn-Dur',
      consequence: 'Routes commerciales devenons stratégiques — neutralité de Thyrsk non-tenable',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Agent de liaison Confédération Varkhôl-Ormn-Dur. Maintient des routes post-Rupture. Neutralité pragmatique. Contact de Draven II (40).',

  relations: [
    { id: 40, nom: 'Draven II', type: 'contact', note: 'Contact Ormn-Dur. Routes commerciales en commun.' },
  ],

  combat: {
    sorts: [
      'Ancrage au sol (Sol) — stabilisation de position — résistance aux déplacements forcés',
      'Frappe tellurique (Sol) — impact au sol — perturbation de terrain',
    ],
  },

  image_prompts: [
    {
      id: 'thyrsk_route',
      description: 'Thyrsk sur une route entre Varkhôl et Ormn-Dur — un Pyrien de 43 ans marchant avec une confiance de quelqu\'un qui connaît chaque kilomètre. Ses pieds luisent légèrement. Il regarde vers les deux villes à la fois.',
      style: 'réaliste Pyrien agent de liaison, route Varkhôl-Ormn-Dur, neutralité pragmatique, post-Rupture',
    },
  ],

  lore_long: `Thyrsk maintient les routes commerciales entre Varkhôl et Ormn-Dur pour la Confédération depuis 10 ans. La Rupture Thermique avait coupé les routes originales. Il en a trouvé 3 alternatives.

Sa valeur est la neutralité et la continuité. Les deux parties lui font confiance parce qu'il ne favorise personne.

En 10 ans, il est devenu le seul à connaître l'historique complet des négociations de routes.`,
};

export default thyrsk;
