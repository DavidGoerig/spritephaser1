import type { PersonnageLoreComplet } from '../../../lore-types';

const kaelryn: PersonnageLoreComplet = {
  id: 228,
  nom: 'Kaelryn',
  element: 'Feu',
  element2: 'Plante',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Pyrien de 41 ans, guérisseur — corpulence de quelqu\'un qui travaille avec ses mains dans des environnements difficiles. Solide, pratique.',
    peau: 'Rouge-ardente avec des taches vertes aux paumes — l\'élément Plante laisse des marques persistantes chez un Pyrien.',
    yeux: 'Orangés avec une qualité d\'attention aux détails organiques — il voit la santé des plantes et des personnes en même temps.',
    vetements: 'Tenue de travail pratique avec des poches pour les préparations végétales — il transporte son atelier avec lui.',
    signes_particuliers: 'Il a développé des variétés de plantes médicinales résistantes aux températures élevées — des plantes qui poussent dans les zones de la Rupture Thermique. Ses préparations soignent des blessures thermiques que les médecines standard ne peuvent pas traiter.',
  },

  psychologie: {
    dominante: 'Guérisseur Dissident à Varkhôl spécialisé dans les plantes médicinales résistantes à la chaleur. Son double élément Feu/Plante lui permet de cultiver des espèces qui survivent dans les zones thermiquement endommagées et de préparer des remèdes adaptés aux blessures élémentaires de la Rupture. Il soigne sans demander l\'affiliation.',
    mecanisme_de_defense: 'Les plantes comme couverture. Cultiver des plantes médicinales n\'est pas illégal. Soigner des personnes non-enregistrées l\'est techniquement — mais les Régulateurs ne contrôlent pas les zones où il opère.',
    contradiction_interne: 'Il soigne sans demander l\'affiliation — ce qui signifie qu\'il a soigné des Régulateurs blessés qui opéraient dans les zones de la Rupture. Sa médecine est neutre. Ses affiliations Dissidentes ne le sont pas. La coexistence des deux est maintenue par une discrétion opérationnelle.',
    rapport_aux_autres: 'Thalorn (33) est dans son réseau — un Sylvan dont les connaissances botaniques ont contribué à ses variétés résistantes à la chaleur. Thessandra (10) est dans son réseau — une Pyrien de Varkhôl dont les ressources soutiennent ses préparations.',
    vision_du_monde: 'Les blessures thermiques ne guérissent pas seules. Les plantes qui poussent dans la chaleur de la Rupture peuvent les traiter. Cette correspondance est plus importante que les affiliations des blessés.',
  },

  histoire: {
    enfance: {
      titre: 'Le double élément contradictoire',
      contenu: 'Né à Varkhôl avec un double élément Feu/Plante — une combinaison que les Pyriens trouvaient contradictoire et les Sylvans impossibles. Il avait appris à les combiner en autodidacte, développant une compréhension unique de comment les plantes survivent à la chaleur extrême.',
    },
    arrivee: {
      titre: 'La Rupture Thermique',
      contenu: 'La Rupture Thermique avait produit des blessures que les médecines standard ne reconnaissaient pas. Il avait commencé à expérimenter des préparations adaptées à ces blessures spécifiques — des brûlures élémentaires profondes, des tissus saturés d\'énergie thermique incontrôlée.',
    },
    premier_conflit: {
      titre: 'Le blessé sans affiliation',
      contenu: 'Un Régulateur blessé dans une zone de la Rupture lui avait été amené — inconscient, sans que personne ait dit qui il était. Il l\'avait soigné. Quand le Régulateur avait récupéré et réalisé où il était, il était parti sans incident. Kaelryn n\'avait pas posé de questions.',
    },
    revelation: {
      titre: 'La neutralité médicale comme protection',
      contenu: 'Il avait compris que soigner sans demander l\'affiliation était sa protection principale — si les Régulateurs savaient qu\'il soignait aussi leurs blessés, il était moins probable qu\'ils l\'arrêtent pour soigner des Dissidents. La neutralité médicale était une stratégie autant qu\'un principe.',
    },
    etat_actuel: {
      titre: 'Le guérisseur',
      contenu: 'Il cultive. Il prépare. Il soigne. Les blessures thermiques de la Rupture trouvent un traitement dans ses préparations.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kaelryn_soins',
      titre: 'Le soin qui expose',
      description: 'Kaelryn soigne sans demander l\'affiliation. Si une de ses préparations est identifiée comme issue d\'une culture Dissident — ou si un blessé qu\'il soigne est suivi par des Régulateurs qui remontent jusqu\'à lui — sa neutralité médicale sera mise en question.',
      personnages_impliques: [33, 10],
      declencheur: 'Un blessé soigné par Kaelryn identifié par les Régulateurs, remontant à sa localisation',
      consequence: 'Kaelryn devant justifier ses soins à des non-enregistrés — et la neutralité médicale testée comme protection face à l\'Empire',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Guérisseur Dissident cultivant des plantes résistantes à la chaleur et soignant des blessures thermiques dans les zones de la Rupture à Varkhôl. Double élément Feu/Plante. Neutralité médicale comme principe et protection.',

  relations: [
    { id: 33, nom: 'Thalorn', type: 'contact', note: 'Sylvan dont les connaissances botaniques ont enrichi ses variétés résistantes à la chaleur.' },
    { id: 10, nom: 'Thessandra', type: 'contact', note: 'Pyrien de Varkhôl dont les ressources soutiennent ses préparations.' },
  ],

  combat: {
    sorts: [
      'Racine de chaleur (Plante/Feu) — projection de végétation thermique contraignante — immobilisation en terrain de Rupture',
      'Soin thermique (Feu/Plante) — application d\'énergie végétale-thermique pour blessures élémentaires — guérison de combat',
    ],
  },

  image_prompts: [
    {
      id: 'kaelryn_jardinage',
      description: 'Kaelryn dans une zone de la Rupture Thermique à Varkhôl — un Pyrien de 41 ans cultivant des plantes à feuilles orangées résistantes à la chaleur extrême du sol. Ses paumes vertes travaillent dans un substrat encore chaud. Il prépare des préparations médicinales pour des blessures que les médecines standard ne reconnaissent pas.',
      style: 'réaliste Pyrien guérisseur Dissident, Varkhôl Rupture Thermique, double élément Feu/Plante, plantes résistantes chaleur, soins élémentaires',
    },
  ],

  lore_long: `Kaelryn a développé des variétés de plantes médicinales qui poussent dans les zones thermiquement endommagées de la Rupture à Varkhôl. Son double élément Feu/Plante rend cette culture possible là où aucune autre plante ne survit.

Il soigne sans demander l'affiliation. Des Dissidents, des Indépendants, et au moins un Régulateur ont bénéficié de ses préparations.

La neutralité médicale est un principe. C'est aussi sa protection la plus fiable.`,
};

export default kaelryn;
