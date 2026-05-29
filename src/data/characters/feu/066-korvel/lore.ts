import type { PersonnageLoreComplet } from '../../../lore-types';

const korvel: PersonnageLoreComplet = {
  id: 66,
  nom: 'Korvel',
  element: 'Feu',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Pyrien trapu d\'une cinquantaine d\'années — la corpulence du forgeron et du marchand combinés. Ses mains portent les marques du travail au métal, ses habits portent les marques des marchés couverts. Il n\'a jamais eu l\'air de quelqu\'un d\'important et il le sait.',
    peau: 'Brune Pyrien avec une luminescence rouge-orangée aux paumes — l\'élément Feu d\'un homme qui a travaillé les métaux toute sa vie. La chaleur est dans ses mains.',
    yeux: 'Rouges foncés, directement professionnels. Il évalue la qualité d\'un métal ou d\'un interlocuteur avec le même regard.',
    vetements: 'Tablier de marchand par-dessus une tenue de travail. Rien qui identifie une faction. C\'est voulu.',
    signes_particuliers: 'Il ne demande pas l\'origine des métaux qu\'il achète. Cette règle n\'est pas négociable et pas expliquée. Les gens qui ont besoin de vendre comprennent.',
  },

  psychologie: {
    dominante: 'Marchand de métaux recyclés de la Forge Silencieuse depuis 20 ans. Il opère dans l\'espace entre les factions — pas par idéologie, par pragmatisme. Skarith (9) est un client régulier. La Rupture a créé un marché pour les métaux récupérés dans les décombres. Il ne commente pas.',
    mecanisme_de_defense: 'La neutralité commerciale comme protection. Il vend. Il ne pose pas de questions. Il ne répond pas aux questions qu\'on ne lui pose pas.',
    contradiction_interne: 'Il connaît l\'origine de beaucoup des métaux qu\'il vend — décombres du Quatrième District, structures effondrées. Il pourrait le dire. Il ne le dit pas. Ce silence a une valeur.',
    rapport_aux_autres: 'Skarith (9) est un client stable et honnête. La Rupture lui a fourni un stock qui durera des années. Les deux faits coexistent sans qu\'il les réconcilie.',
    vision_du_monde: 'Les métaux ne choisissent pas d\'où ils viennent. Les marchands qui survivent non plus.',
  },

  histoire: {
    enfance: {
      titre: 'La Forge Silencieuse',
      contenu: 'Né à Varkhôl dans une famille de petits marchands. La Forge Silencieuse était le marché de sa jeunesse — les petits artisans qui vendaient à prix fixe sans négocier avec les grandes guildes. Il y avait appris le commerce avant d\'y avoir un stand.',
    },
    arrivee: {
      titre: 'Les métaux',
      contenu: 'À 30 ans, il s\'était spécialisé dans les métaux recyclés — une niche que personne ne voulait, trop proche de la récupération sur décombres pour être respectable. Il avait décidé que la respectabilité était surévaluée.',
    },
    premier_conflit: {
      titre: 'La Rupture',
      contenu: 'La Rupture Thermique avait détruit le Quatrième District et créé le plus grand stock de métaux récupérables que Varkhôl ait jamais vu. Korvel avait compris ce que ça représentait avant que les guildes bougent. Il était déjà sur les décombres.',
    },
    revelation: {
      titre: 'La règle',
      contenu: 'Un acheteur lui avait demandé une fois d\'où venait une pièce de métal particulière. Korvel avait répondu qu\'il ne posait pas de questions sur l\'origine. L\'acheteur avait insisté. Korvel avait remballé ses affaires. La règle s\'était établie à partir de là.',
    },
    etat_actuel: {
      titre: 'Le marché',
      contenu: 'Il opère à la Forge Silencieuse avec un stock qui grossit régulièrement. Skarith (9) achète des métaux pour ses projets. D\'autres achètent pour d\'autres projets. Korvel vend. C\'est suffisant.',
    },
  },

  evenements_narratifs: [
    {
      id: 'korvel_origine',
      titre: 'Ce que les métaux savent',
      description: 'Korvel connaît l\'origine de certains métaux qu\'il a vendus à des factions opposées. Cette information — qui a acheté quoi, depuis les décombres de qui — est un levier qu\'il n\'a jamais utilisé. Si quelqu\'un comprenait ce qu\'il sait, sa neutralité commerciale deviendrait une cible.',
      personnages_impliques: [9],
      declencheur: 'Quelqu\'un posant les bonnes questions sur la provenance des métaux achetés',
      consequence: 'Korvel forcé de défendre sa neutralité ou de choisir un camp',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Marchand de métaux recyclés à la Forge Silencieuse. Ne demande pas l\'origine. Client régulier de Skarith (9). Connaît l\'origine de plus de choses qu\'il ne le dit.',

  relations: [
    { id: 9, nom: 'Skarith', type: 'contact', note: 'Client régulier. Transactions honnêtes.' },
  ],

  combat: {
    sorts: [
      'Frappe thermique (Feu) — chaleur concentrée dans les paumes — repousse les agresseurs à courte distance',
      'Résistance à la chaleur (Feu) — immunité aux températures extrêmes — protection passive liée à son travail',
    ],
  },

  image_prompts: [
    {
      id: 'korvel_forge',
      description: 'Korvel à son stand de la Forge Silencieuse — un Pyrien trapu entouré de métaux récupérés, des pièces de toutes origines. Son expression est professionnellement neutre. Un acheteur examine une pièce. Korvel ne commente pas d\'où elle vient.',
      style: 'réaliste Pyrien marchand, Forge Silencieuse de Varkhôl, métaux recyclés, neutralité commerciale, post-Rupture',
    },
  ],

  lore_long: `Korvel vend des métaux recyclés à la Forge Silencieuse de Varkhôl depuis 20 ans. La Rupture Thermique lui a fourni le plus grand stock de sa carrière.

Il ne demande pas l'origine des métaux qu'il achète. Skarith (9) est un client régulier. Les deux faits coexistent.

Ce qu'il sait sur la provenance de certains métaux — et à qui ils ont été vendus — est une information qu'il n'a jamais utilisée.`,
};

export default korvel;
