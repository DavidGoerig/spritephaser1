import type { PersonnageLoreComplet } from '../../../lore-types';

const corveth: PersonnageLoreComplet = {
  id: 94,
  nom: 'Corveth',
  element: 'Eau',
  espece: 'Néréide',
  region: 'Thalassyr',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Néréide de 38 ans, musclé avec la silhouette d\'un marin de combat. Il se déplace comme quelqu\'un qui anticipe que la situation peut changer à tout moment.',
    peau: 'Bleutée Néréide avec une luminescence aqueuse vive et turbulente — l\'élément Eau d\'un combattant dont l\'élément amplifie la puissance brute.',
    yeux: 'Bleus avec une qualité d\'alerte permanente. Il surveille les sorties dans n\'importe quelle pièce.',
    vetements: 'Tenue de marin — fonctionnelle, avec des couches qui cachent de l\'équipement. Rien d\'ostensiblement militaire.',
    signes_particuliers: 'Il protège les routes de fuite des Élus non-enregistrés. Velath (49) et Sorthel (82) sont dans son réseau. Il est le bras armé d\'un réseau qui préfère éviter le combat.',
  },

  psychologie: {
    dominante: 'Marin de combat Dissident qui protège les routes de fuite des Élus non-enregistrés à Thalassyr. Il n\'évite pas le combat — il est la garantie que ceux qui fuient peuvent fuir.',
    mecanisme_de_defense: 'L\'action comme protection. Tant qu\'il peut agir, il peut protéger. Le problème serait de ne pas pouvoir agir.',
    contradiction_interne: 'Il protège des fuites — des situations où quelqu\'un est déjà en danger. Il ne prévient pas les situations. Il est la dernière ligne d\'une chaîne dont les maillons précédents ont échoué.',
    rapport_aux_autres: 'Velath (49) est son contact réseau de référence — ils coordonnent les routes. Sorthel (82) fournit les routes maritimes alternatives.',
    vision_du_monde: 'Certains Élus ne peuvent pas s\'enregistrer et ne peuvent pas non plus se défendre seuls. Quelqu\'un doit couvrir leur fuite. Il est ce quelqu\'un.',
  },

  histoire: {
    enfance: {
      titre: 'La mer',
      contenu: 'Formation de marin depuis l\'enfance. Combat naval appris dans les guildes de sécurité maritime de Thalassyr. À 28 ans, il avait aidé à faire fuir un ami non-enregistré par hasard. Il avait continué.',
    },
    arrivee: {
      titre: 'Le réseau',
      contenu: 'Velath (49) l\'avait contacté à 30 ans. Le réseau avait besoin d\'un combattant maritime avec des routes maritimes. Corveth correspondait exactement.',
    },
    premier_conflit: {
      titre: 'La première protection',
      contenu: 'Son premier escorte avait duré 3 jours sur des routes maritimes difficiles avec des agents impériaux en poursuite. Il avait réussi. Ce succès avait fixé son rôle dans le réseau.',
    },
    revelation: {
      titre: 'Le coût',
      contenu: 'Les routes de fuite avaient un coût humain. Pas toujours réussi. Il avait perdu 2 personnes en 8 ans. Ces deux échecs étaient dans sa mémoire d\'une façon particulière.',
    },
    etat_actuel: {
      titre: 'La protection',
      contenu: 'Il continue à protéger les routes. Les demandes d\'escorte augmentent depuis l\'intensification de la surveillance impériale.',
    },
  },

  evenements_narratifs: [
    {
      id: 'corveth_routes',
      titre: 'Les routes surchargées',
      description: 'L\'intensification de la surveillance impériale à Thalassyr augmente la demande de routes de fuite. Corveth protège ces routes mais ses ressources sont limitées. Si plusieurs escortes simultanées sont nécessaires, il devra choisir qui protéger.',
      personnages_impliques: [49, 82],
      declencheur: 'Intensification de la surveillance impériale créant plusieurs besoins de fuite simultanés',
      consequence: 'Corveth forcé de trier des priorités qu\'il n\'a pas les moyens de toutes honorer',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Marin de combat Dissident. Protège les routes de fuite des Élus non-enregistrés. Réseau avec Velath (49) et Sorthel (82).',

  relations: [
    { id: 49, nom: 'Velath', type: 'allié', note: 'Contact réseau principal. Coordination des routes.' },
    { id: 82, nom: 'Sorthel', type: 'contact', note: 'Fournit les routes maritimes alternatives.' },
  ],

  combat: {
    sorts: [
      'Vague de combat (Eau) — manipulation offensive d\'un courant — renversement d\'une cible',
      'Bouclier aquatique (Eau) — barrière d\'eau dense — protection des personnes escortées',
    ],
  },

  image_prompts: [
    {
      id: 'corveth_escorte',
      description: 'Corveth sur un bateau de fuite à Thalassyr — un Néréide de 38 ans debout à la proue, surveillant les eaux derrière. Des personnes escortées dans le bateau. Son expression est d\'alerte totale.',
      style: 'réaliste Néréide marin de combat Dissident, escorte de fuite, mer de Thalassyr, protection, vigilance permanente',
    },
  ],

  lore_long: `Corveth protège les routes de fuite des Élus non-enregistrés à Thalassyr. Marin de combat Dissident depuis 8 ans.

Il a perdu 2 personnes en 8 ans. Ces échecs sont dans sa mémoire d'une façon particulière.

La surveillance impériale augmente. Les demandes d'escorte aussi.`,
};

export default corveth;
