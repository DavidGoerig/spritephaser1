import type { PersonnageLoreComplet } from '../../../lore-types';

const vaskryn: PersonnageLoreComplet = {
  id: 214,
  nom: 'Vaskryn',
  element: 'Feu',
  element2: 'Acier',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Pyrien de 37 ans, officier de quartier — corpulence d\'autorité, maintien impérial visible.',
    peau: 'Rouge-ardente avec des intégrations acier formant des plaques naturelles — il porte une armure partielle intégrée.',
    yeux: 'Orangés avec des éclats argentés durs. Il ne détourne pas le regard.',
    vetements: 'Uniforme d\'officier impérial de quartier — identification visible, rang affiché.',
    signes_particuliers: 'Il applique les lois d\'enregistrement des Élus dans son quartier de Varkhôl. Son double élément est visible dans son autorité physique — il n\'a pas besoin de menacer, il convainc par présence.',
  },

  psychologie: {
    dominante: 'Officier de quartier impérial à Varkhôl. Il applique l\'enregistrement obligatoire des Élus dans son secteur. Son double élément lui donne une autorité physique que ses supérieurs valorisent — il représente l\'Empire de façon convaincante sans nécessiter de soutien visible.',
    mecanisme_de_defense: 'L\'autorité structurelle. Il représente l\'Empire. Ses demandes sont des demandes impériales. Refuser ses demandes, c\'est refuser l\'Empire. Cette structure protège ses opérations.',
    contradiction_interne: 'Il applique des lois qu\'il connaît être controversées dans son propre quartier — des personnes qu\'il connaît depuis des années sont maintenant dans ses registres d\'enregistrement. Il fait son travail. Les implications personnelles sont à côté de son travail.',
    rapport_aux_autres: 'Cendrix (2) est dans son réseau hiérarchique — le responsable régional qui lui assigne ses quotas d\'enregistrement. Kessav (79) est un adversaire — un Élu connu dans son quartier qui évite l\'enregistrement avec l\'aide de la communauté.',
    vision_du_monde: 'Les lois s\'appliquent. Il applique les lois. Les implications personnelles de l\'application des lois appartiennent à ceux qui ont rédigé les lois, pas à ceux qui les appliquent.',
  },

  histoire: {
    enfance: {
      titre: 'L\'Empire et Varkhôl',
      contenu: 'Né à Varkhôl dans une famille Pyrien alignée avec l\'Empire depuis la génération précédente. L\'Empire lui avait offert une position à 22 ans en échange de loyauté et de résultats.',
    },
    arrivee: {
      titre: 'L\'enregistrement',
      contenu: 'Il avait été assigné à l\'application de l\'enregistrement des Élus à 30 ans. Son quartier avait une population d\'Élus significant. Son double élément lui avait permis d\'approcher les situations de façon plus directe que ses collègues.',
    },
    premier_conflit: {
      titre: 'La famille connue',
      contenu: 'Une famille qu\'il connaissait depuis l\'enfance avait un enfant non-enregistré. Il avait appliqué la procédure d\'enregistrement. La famille l\'avait regardé d\'une façon qu\'il avait mise dans la catégorie "implications personnelles à côté du travail".',
    },
    revelation: {
      titre: 'Le travail et ses conséquences',
      contenu: 'Il avait compris qu\'appliquer les lois d\'enregistrement dans son propre quartier, avec des personnes qu\'il connaissait, avait des conséquences relationnelles qu\'il n\'avait pas anticipées. Il avait maintenu sa position. Les relations avaient changé.',
    },
    etat_actuel: {
      titre: 'L\'officier',
      contenu: 'Il applique. Les registres s\'allongent. Les relations dans son quartier se changent.',
    },
  },

  evenements_narratifs: [
    {
      id: 'vaskryn_kessav',
      titre: 'L\'Élu qui évite',
      description: 'Vaskryn applique l\'enregistrement dans son quartier. Kessav (79) évite l\'enregistrement avec l\'aide de la communauté. Si Vaskryn parvient à localiser Kessav, il devra choisir entre appliquer la loi sur un Élu connu ou laisser passer — compromettant ses quotas mais maintenant une relation communautaire.',
      personnages_impliques: [2, 79],
      declencheur: 'Vaskryn localisant Kessav dans son quartier',
      consequence: 'Vaskryn choisissant entre application stricte et accommodement — avec des conséquences sur sa position impériale ou sur sa relation communautaire',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Officier de quartier impérial appliquant l\'enregistrement des Élus à Varkhôl. Double élément Feu/Acier donnant une autorité physique. Applique les lois sur des personnes qu\'il connaît.',

  relations: [
    { id: 2, nom: 'Cendrix', type: 'hierarchie', note: 'Responsable régional assignant les quotas d\'enregistrement.' },
    { id: 79, nom: 'Kessav', type: 'adversaire', note: 'Élu évitant l\'enregistrement avec l\'aide de la communauté.' },
  ],

  combat: {
    sorts: [
      'Autorité thermique (Feu) — présence écrasante de chaleur — intimidation et contrôle',
      'Saisie d\'acier (Acier) — emprise métallique — immobilisation',
    ],
  },

  image_prompts: [
    {
      id: 'vaskryn_quartier',
      description: 'Vaskryn dans son quartier de Varkhôl — un Pyrien de 37 ans en uniforme impérial frappant à la porte d\'une famille. Ses plaques d\'acier intégrées sont visibles. La famille à travers la fenêtre le reconnaît. Il fait son travail. Ils le savent tous les deux.',
      style: 'réaliste Pyrien officier de quartier impérial, Varkhôl, enregistrement des Élus, double élément Feu/Acier, autorité vs relations communautaires',
    },
  ],

  lore_long: `Vaskryn applique l'enregistrement obligatoire des Élus dans son quartier de Varkhôl pour l'Empire. Son double élément Feu/Acier lui donne une autorité physique qui rend les refus plus difficiles.

Il applique les lois sur des personnes qu'il connaît depuis des années. Il met les implications personnelles dans la catégorie "à côté du travail".

Les relations dans son quartier se transforment. Il continue à appliquer.`,
};

export default vaskryn;
