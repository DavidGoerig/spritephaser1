import type { PersonnageLoreComplet } from '../../../lore-types';

const velryn152: PersonnageLoreComplet = {
  id: 152,
  nom: 'Velryn',
  element: 'Ténèbres',
  espece: 'Umbrien',
  region: 'Vel\'Nox',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Umbrien de 47 ans, corpulence de quelqu\'un qui a maintenu la paix dans des espaces violents pendant 15 ans. Pas imposant — efficace.',
    peau: 'Gris-noir Umbrien avec une stabilité dans sa luminescence nocturne — pas de pulsation, pas de fluctuation. Contrôle total.',
    yeux: 'Noirs avec une qualité de quelqu\'un qui surveille plusieurs directions simultanément sans que ça soit visible.',
    vetements: 'Tenue neutre — aucune affiliation visible. Il n\'a aucune couleur de faction.',
    signes_particuliers: 'Gardien de la paix armée entre les factions aux marchés nocturnes de Vel\'Nox depuis 15 ans. Il maintient l\'équilibre. Tout le monde le respecte — personne ne sait pour qui il travaillerait si l\'équilibre tombait.',
  },

  psychologie: {
    dominante: 'Gardien de la paix armée dans les marchés nocturnes de Vel\'Nox. Depuis 15 ans, il empêche les factions de s\'affronter physiquement dans les zones commerciales. Son autorité est fondée sur le respect mutuel — toutes les factions ont intérêt à ce que les marchés fonctionnent.',
    mecanisme_de_defense: 'La neutralité fonctionnelle comme autorité. Il est respecté parce qu\'il protège les intérêts de tout le monde. Prendre parti effacerait cette autorité.',
    contradiction_interne: 'Il maintient un équilibre qui profite aussi à des factions qu\'il n\'approuve pas. La neutralité de l\'équilibre est sa valeur — mais elle a un coût éthique qu\'il gère quotidiennement.',
    rapport_aux_autres: 'Vethis (46) est dans son réseau — quelqu\'un dont les activités dans les marchés nocturnes bénéficient de la paix qu\'il maintient. Tharyn (50) aussi est dans son réseau.',
    vision_du_monde: 'Les marchés nocturnes de Vel\'Nox fonctionnent parce que les factions y trouvent un intérêt commun. Son travail est de maintenir cette évidence face aux tensions ponctuelles.',
  },

  histoire: {
    enfance: {
      titre: 'Vel\'Nox',
      contenu: 'Né dans les marchés nocturnes de Vel\'Nox. Il avait travaillé dans la sécurité des marchés depuis 20 ans — d\'abord comme garde ordinaire, puis comme médiateur.',
    },
    arrivee: {
      titre: 'La paix armée',
      contenu: 'À 32 ans, il avait géré une confrontation majeure entre deux factions dans un marché nocturne. Sa gestion avait évité une bataille ouverte. Les deux factions l\'avaient ensuite reconnu comme arbitre neutre.',
    },
    premier_conflit: {
      titre: 'La neutralité testée',
      contenu: 'Une faction l\'avait approché pour une alliance préférentielle après un incident. Il avait refusé — clairement et publiquement. Le refus avait renforcé sa réputation de neutralité.',
    },
    revelation: {
      titre: '15 ans',
      contenu: 'Après 15 ans, il était l\'institution de la paix des marchés nocturnes. Son autorité était personnelle — si il partait, cette paix n\'aurait pas de successeur évident.',
    },
    etat_actuel: {
      titre: 'La paix',
      contenu: 'Il maintient. Les marchés fonctionnent. La paix tient à sa présence.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velryn_equilibre',
      titre: 'Quand l\'équilibre bascule',
      description: 'Velryn maintient la paix aux marchés nocturnes depuis 15 ans. Si une faction décide de prendre unilatéralement le contrôle d\'un marché — forçant une confrontation — sa neutralité sera impossible à maintenir. Il devra soit s\'interposer physiquement, soit révéler une position qu\'il a évitée pendant 15 ans.',
      personnages_impliques: [46, 50],
      declencheur: 'Action unilatérale d\'une faction forçant une confrontation dans un marché nocturne',
      consequence: 'Velryn contraints de prendre position — et l\'équilibre des marchés nocturnes redéfini',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Gardien de la paix armée aux marchés nocturnes de Vel\'Nox. 15 ans de neutralité. Autorité personnelle sans succession.',

  relations: [
    { id: 46, nom: 'Vethis', type: 'contact', note: 'Bénéficie de la paix maintenue dans les marchés.' },
    { id: 50, nom: 'Tharyn', type: 'contact', note: 'Réseau des marchés nocturnes.' },
  ],

  combat: {
    sorts: [
      'Voile de neutralisation (Ténèbres) — absorption d\'énergie offensive — désescalade forcée',
      'Frappe de ténèbres (Ténèbres) — attaque directe — force d\'arbitrage',
    ],
  },

  image_prompts: [
    {
      id: 'velryn_marche',
      description: 'Velryn patrouillant dans un marché nocturne de Vel\'Nox — un Umbrien de 47 ans qui surveille sans être vu surveiller. Des représentants de deux factions adverses le regardent passer et restent calmes. Son expression est de quelqu\'un qui sait que sa présence est ce qui maintient la situation.',
      style: 'réaliste Umbrien gardien de paix, marchés nocturnes de Vel\'Nox, neutralité armée, autorité personnelle',
    },
  ],

  lore_long: `Velryn maintient la paix armée entre les factions dans les marchés nocturnes de Vel'Nox depuis 15 ans. Son autorité est fondée sur le respect mutuel — toutes les factions ont intérêt aux marchés.

Sa neutralité est fonctionnelle, pas éthique. Elle lui coûte.

Si une faction force une confrontation, il devra prendre position pour la première fois en 15 ans.`,
};

export default velryn152;
