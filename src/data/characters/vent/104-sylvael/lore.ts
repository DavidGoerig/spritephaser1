import type { PersonnageLoreComplet } from '../../../lore-types';

const sylvael: PersonnageLoreComplet = {
  id: 104,
  nom: 'Sylvael',
  element: 'Vent',
  espece: 'Aéride',
  region: 'Asterciel',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Aéride de 34 ans, athlétique avec la grâce d\'un pilote expérimenté. Elle connaît son corps et son élément comme un outil précis.',
    peau: 'Pâle bleutée Aéride avec une luminescence de vent intense aux mains et au dos — l\'élément Vent d\'une pilote qui vole autant qu\'elle marche.',
    yeux: 'Gris-bleu avec une qualité d\'orientation permanente. Elle lit les courants d\'air instinctivement.',
    vetements: 'Tenue de vol légère — aérodynamique, couches fonctionnelles. Ses lunettes de pilote sont autour du cou.',
    signes_particuliers: 'Trois routes aériennes non-cartographiées entre les strates. Elle est la seule à les connaître. Trois ans de vol pour les développer.',
  },

  psychologie: {
    dominante: 'Pilote Dissidente qui transporte des personnes hors des strates supérieures d\'Asterciel via 3 routes aériennes non-cartographiées. Elle a développé ces routes en 3 ans. Aucune faction ne les connaît sauf ses clients.',
    mecanisme_de_defense: 'La compétence de vol comme liberté. Tant qu\'elle vole mieux que ceux qui pourraient la poursuivre, les routes restent siennes.',
    contradiction_interne: 'Elle transporte des personnes hors des strates supérieures — des personnes qui fuient l\'aristocratie. Elle est elle-même Aéride, l\'espèce de cette aristocratie. Ce paradoxe est résolu pour elle : l\'espèce n\'est pas la position.',
    rapport_aux_autres: 'Caerra (28) est dans son réseau — elle fournit des sorties aériennes pour les opérations de Caerra. Velath (49) est un réseau client — ses passagers viennent parfois de là.',
    vision_du_monde: 'Les strates supérieures ont des règles d\'accès. Ces règles peuvent être contournées si on connaît les routes. Elle connaît les routes.',
  },

  histoire: {
    enfance: {
      titre: 'Le vol',
      contenu: 'Née dans les strates moyennes d\'Asterciel. Son élément Vent était fort dès l\'enfance. Elle avait appris à voler avant de savoir lire — une progression naturelle pour une Aéride avec ses capacités.',
    },
    arrivee: {
      titre: 'Les Dissidentes',
      contenu: 'À 26 ans, elle avait été recrutée par les Dissidentes pour ses compétences de vol et sa connaissance des courants d\'Asterciel. Sa première mission d\'exfiltration avait été réussie. Elle était restée.',
    },
    premier_conflit: {
      titre: 'Les routes',
      contenu: 'Les 3 routes qu\'elle utilisait avaient été développées progressivement — chaque exfiltration apprenait quelque chose sur les courants, les points de contrôle, les angles morts. 3 ans pour les stabiliser.',
    },
    revelation: {
      titre: 'La valeur',
      contenu: 'Elle avait compris que ses routes n\'étaient pas seulement utiles pour les Dissidentes — elles étaient une ressource unique. Si elles étaient connues, elles perdraient leur valeur.',
    },
    etat_actuel: {
      titre: 'Les exfiltrations',
      contenu: 'Elle continue à piloter des exfiltrations. Les routes tiennent. Leur valeur tient aussi longtemps que leur secret.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sylvael_routes',
      titre: 'Les routes compromises',
      description: 'Les 3 routes aériennes de Sylvael sont uniques et secrètes. Si une exfiltration est surveillée et que la route est identifiée, la valeur de tout son travail disparaît. Elle devra développer de nouvelles routes — ou abandonner l\'exfiltration aérienne.',
      personnages_impliques: [28, 49],
      declencheur: 'Une exfiltration suivie par des agents de l\'aristocratie ou de l\'Empire',
      consequence: 'Une ou plusieurs routes révélées — nécessité de reconstruction',
    },
  ],

  arcs: ['arc_chute_des_nuages'],
  position_dans_arc: 'Pilote Dissidente d\'Asterciel. 3 routes aériennes non-cartographiées. Exfiltre des personnes hors des strates supérieures.',

  relations: [
    { id: 28, nom: 'Caerra', type: 'allié', note: 'Réseau Dissident. Sorties aériennes pour ses opérations.' },
    { id: 49, nom: 'Velath', type: 'contact', note: 'Réseau client. Passagers venant de là.' },
  ],

  combat: {
    sorts: [
      'Vol accéléré (Vent) — vitesse maximale en vol — fuite ou exfiltration rapide',
      'Rafale de combat (Vent) — attaque depuis les airs — avantage de hauteur',
    ],
  },

  image_prompts: [
    {
      id: 'sylvael_vol',
      description: 'Sylvael en vol dans les passages entre strates d\'Asterciel — une Aéride de 34 ans transportant un passager sur une route non-cartographiée. Ses mains luisent de vent. Elle connaît chaque courant.',
      style: 'réaliste Aéride pilote Dissidente, vol inter-strates, routes secrètes d\'Asterciel, exfiltration',
    },
  ],

  lore_long: `Sylvael transporte des personnes hors des strates supérieures d'Asterciel via 3 routes aériennes qu'elle est la seule à connaître.

3 ans de développement progressif. Leur valeur tient aussi longtemps que leur secret.

Elle est Aéride — l'espèce de l'aristocratie qu'elle aide à fuir. Ce paradoxe est résolu pour elle.`,
};

export default sylvael;
