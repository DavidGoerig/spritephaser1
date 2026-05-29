import type { PersonnageLoreComplet } from '../../../lore-types';

const kargoth: PersonnageLoreComplet = {
  id: 137,
  nom: 'Kargoth',
  element: 'Roche',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Technocratie',

  apparence: {
    taille_corpulence: 'Chthonien de 58 ans, architecte — la corpulence de quelqu\'un qui conçoit plus qu\'il ne construit, mais qui comprend la construction.',
    peau: 'Pierre grise dense avec des inclusions cristallines — la marque d\'un Chthonien dont l\'élément Roche est mature et solide.',
    yeux: 'Gris avec une qualité de quelqu\'un qui prépare l\'improbable et espère ne pas en avoir besoin.',
    vetements: 'Tenue d\'architecte de la Technocratie — propre, méthodique, avec ses plans toujours accessibles.',
    signes_particuliers: 'Il a conçu les abris souterrains d\'Ormn-Dur en cas de rupture de la Fosse Interdite. Personne ne croit que son plan sera nécessaire. Il croit que si.',
  },

  psychologie: {
    dominante: 'Architecte de la Technocratie qui a conçu les abris souterrains d\'Ormn-Dur pour le scénario d\'une rupture de la Fosse Interdite. Ce plan n\'est pris au sérieux par personne. Il continue à le mettre à jour régulièrement parce qu\'il est convaincu qu\'il sera nécessaire.',
    mecanisme_de_defense: 'La préparation comme réponse à l\'anxiété. Il ne peut pas contrôler si la Fosse rompt. Il peut contrôler la qualité de ses plans d\'abri.',
    contradiction_interne: 'Plus ses plans sont bons, moins les gens les prennent au sérieux — une bonne préparation est invisible. Il n\'a aucun moyen de démontrer la nécessité de son travail sans la catastrophe qu\'il cherche à éviter.',
    rapport_aux_autres: 'Drevaya (39) est dans son réseau — quelqu\'un dont les intérêts incluent la Fosse et qui comprend le risque. La Fosse Interdite est sa préoccupation centrale.',
    vision_du_monde: 'La Fosse Interdite est un risque géologique sous-évalué. Une rupture est possible. La question n\'est pas "si" mais "quand". Ses abris existent pour "quand".',
  },

  histoire: {
    enfance: {
      titre: 'L\'architecture souterraine',
      contenu: 'Formation en architecture structurelle souterraine — tunnels, abris, renforcements. Il avait travaillé sur des projets de la Technocratie pendant 25 ans avant d\'être affecté à la Fosse Interdite.',
    },
    arrivee: {
      titre: 'L\'évaluation de la Fosse',
      contenu: 'Affecté à une évaluation structurelle de la Fosse Interdite, il avait produit un rapport identifiant plusieurs scénarios de rupture possibles. Son rapport avait été classé "prévisionnel à faible probabilité".',
    },
    premier_conflit: {
      titre: 'Le plan d\'abri',
      contenu: 'Il avait proposé de concevoir des abris en cas de rupture. La proposition avait été acceptée — pas parce que le risque était reconnu, mais parce qu\'un plan d\'abri existant permettait de cocher une case administrative.',
    },
    revelation: {
      titre: 'Personne ne croit',
      contenu: 'Il avait réalisé que personne n\'avait vraiment lu son plan d\'abri. Il était approuvé mais pas pris au sérieux. Il continuait à le mettre à jour parce qu\'il était le seul à prendre le risque au sérieux.',
    },
    etat_actuel: {
      titre: 'Les abris',
      contenu: 'Ses abris existent et sont maintenus. Personne ne les connaît assez pour les utiliser en cas de crise. Il l\'a signalé. Sans résultat.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kargoth_rupture',
      titre: 'Le plan dont personne ne veut',
      description: 'Kargoth a conçu les abris pour une rupture de la Fosse Interdite. Si la rupture se produit, ses abris sont la seule infrastructure de survie préparée. Mais personne ne les connaît assez pour s\'y diriger. Kargoth serait le seul à savoir où ils sont et comment les utiliser — et il devra guider une crise que personne ne croyait possible.',
      personnages_impliques: [39],
      declencheur: 'Rupture ou incident grave à la Fosse Interdite',
      consequence: 'Plan de Kargoth activé — et tous ceux qui n\'y croyaient pas ayant besoin de lui pour survivre',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Architecte des abris d\'urgence pour rupture de la Fosse Interdite. Plan préparé, non-pris au sérieux, régulièrement mis à jour.',

  relations: [
    { id: 39, nom: 'Drevaya', type: 'contact', note: 'Comprend le risque de la Fosse. Ressource pour la prise au sérieux du plan.' },
  ],

  combat: {
    sorts: [
      'Abri de roche (Roche) — formation de protection rapide — défense d\'urgence',
      'Renforcement structurel (Roche) — stabilisation de tunnel — résistance aux effondrements',
    ],
  },

  image_prompts: [
    {
      id: 'kargoth_plan',
      description: 'Kargoth dans son bureau à Ormn-Dur — un Chthonien de 58 ans avec ses plans d\'abri d\'urgence étalés devant lui. Il les met à jour. Personne d\'autre dans la pièce ne les a regardés. Son expression est de quelqu\'un qui prépare pour une catastrophe que personne ne croit possible.',
      style: 'réaliste Chthonien architecte, Ormn-Dur, plans d\'abris d\'urgence, Fosse Interdite, préparation solitaire',
    },
  ],

  lore_long: `Kargoth a conçu les abris souterrains d'Ormn-Dur pour une rupture de la Fosse Interdite. Personne ne croit que son plan sera nécessaire.

Il continue à le mettre à jour. Ses abris existent mais personne ne les connaît assez pour les utiliser.

Si la rupture se produit, il sera le seul à savoir où aller.`,
};

export default kargoth;
