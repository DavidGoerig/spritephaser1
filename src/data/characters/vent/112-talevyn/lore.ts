import type { PersonnageLoreComplet } from '../../../lore-types';

const talevyn: PersonnageLoreComplet = {
  id: 112,
  nom: 'Talevyn',
  element: 'Vent',
  espece: 'Aéride',
  region: 'Asterciel',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Aéride de 34 ans, mince avec une façon de bouger qui ne laisse pas de trace. Chaque geste est calculé pour ne pas être mémorisable.',
    peau: 'Pâle bleutée Aéride avec une luminescence de vent discrète — il contrôle son élément au point de le rendre invisible en surface.',
    yeux: 'Gris-vert avec une qualité d\'observation constante. Il évalue les sorties avant d\'entrer.',
    vetements: 'Tenue de technicien d\'infrastructure — il appartient à tous les niveaux d\'Asterciel professionnellement, donc à aucun suspect.',
    signes_particuliers: 'Saboteur d\'infrastructure des strates supérieures depuis 3 ans. Jamais identifié. Ses sabotages sont conçus pour ressembler à des défaillances naturelles.',
  },

  psychologie: {
    dominante: 'Saboteur au service des Dissidentes. Il cible l\'infrastructure des strates supérieures — systèmes de navigation, relais d\'alimentation, communications. Chaque sabotage est conçu pour être invisible : une défaillance progressive qui ne pointe vers personne.',
    mecanisme_de_defense: 'L\'invisibilité comme protection totale. Il n\'existe pas dans les registres des Dissidentes — Caerra (28) le connaît, mais il n\'est listé nulle part.',
    contradiction_interne: 'Son travail est efficace précisément parce qu\'il n\'est pas reconnu. Si les Dissidentes gagnaient et revendiquaient ses sabotages, il deviendrait visible — et cible.',
    rapport_aux_autres: 'Caerra (28) est son seul contact dans le réseau Dissident. Il opère seul. C\'est une protection et une limite.',
    vision_du_monde: 'Les strates supérieures maintiennent leur position par leur infrastructure. Dégrader cette infrastructure lentement crée plus de pression qu\'une action visible. Il croit au sabotage patient.',
  },

  histoire: {
    enfance: {
      titre: 'Les strates moyennes',
      contenu: 'Né dans les strates moyennes d\'Asterciel. Formation en maintenance d\'infrastructure — un travail qui lui donnait accès à tous les niveaux sans attirer l\'attention.',
    },
    arrivee: {
      titre: 'Le contact',
      contenu: 'Il y a 4 ans, Caerra (28) l\'avait contacté. Pas pour le recruter ouvertement — pour lui demander si certaines défaillances d\'infrastructure pouvaient être "accélérées". Il avait compris la demande.',
    },
    premier_conflit: {
      titre: 'Le premier sabotage',
      contenu: 'Le relais de navigation de Strate 7 — une défaillance progressive sur 3 semaines. Les techniciens officiels avaient conclu à une usure normale. Il avait regardé leur rapport et n\'avait rien dit.',
    },
    revelation: {
      titre: 'L\'invisibilité',
      contenu: '3 ans de sabotages. Aucune identification. Il avait compris que son efficacité reposait entièrement sur sa non-existence dans tous les registres — Dissident ou impérial.',
    },
    etat_actuel: {
      titre: 'Le saboteur',
      contenu: 'Il continue. Ses sabotages s\'accumulent dans l\'infrastructure des strates supérieures — des défaillances futures que personne ne sait encore relier.',
    },
  },

  evenements_narratifs: [
    {
      id: 'talevyn_identification',
      titre: 'La première trace',
      description: 'Talevyn a 3 ans de sabotages sans identification. Si quelqu\'un — technicien ou agent impérial — relie deux sabotages apparemment distincts et cherche un point commun, Talevyn laisse une trace : son accès à plusieurs zones d\'infrastructure. Sa protection repose sur l\'absence de corrélation.',
      personnages_impliques: [28],
      declencheur: 'Quelqu\'un corrélant deux sabotages d\'infrastructure et cherchant le point commun',
      consequence: 'Talevyn identifié — ou obligé de cesser ses opérations avant identification',
    },
  ],

  arcs: ['arc_chute_des_nuages'],
  position_dans_arc: 'Saboteur Dissident des strates supérieures. Jamais identifié depuis 3 ans. Contact unique : Caerra (28).',

  relations: [
    { id: 28, nom: 'Caerra', type: 'contact', note: 'Seul contact Dissident. Opère seul par protection.' },
  ],

  combat: {
    sorts: [
      'Souffle de dispersion (Vent) — dissolution de présence dans les courants — fuite silencieuse',
      'Rafale de circuit (Vent) — perturbation de systèmes électroniques par pression d\'air — sabotage à distance',
    ],
  },

  image_prompts: [
    {
      id: 'talevyn_infrastructure',
      description: 'Talevyn dans un conduit d\'infrastructure d\'Asterciel — un Aéride de 34 ans en tenue de technicien, manipulant un relais de navigation. Son expression est neutre et concentrée. Rien dans son apparence ne trahit l\'intention.',
      style: 'réaliste Aéride saboteur, infrastructure d\'Asterciel, invisibilité opérationnelle, technicien Dissident',
    },
  ],

  lore_long: `Talevyn sabote l'infrastructure des strates supérieures d'Asterciel depuis 3 ans. Il n'a jamais été identifié.

Ses sabotages sont conçus pour ressembler à des défaillances naturelles — progressives, non-corrélables. Il n'existe dans aucun registre Dissident.

Si quelqu'un relie deux de ses sabotages, sa protection disparaît.`,
};

export default talevyn;
