import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrel: PersonnageLoreComplet = {
  id: 97,
  nom: 'Thyrel',
  element: 'Electrique',
  espece: 'Néréide',
  region: 'Thalassyr',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Néréide de 28 ans, mince avec la posture d\'un technicien de deuxième génération — il n\'a jamais connu que le réseau artificiel. Il entretient ce qu\'il considère comme le réseau normal.',
    peau: 'Bleutée Néréide avec des éclairs électriques légers aux doigts — l\'élément Electrique d\'un technicien formé sur le réseau artificiel.',
    yeux: 'Bleus-électriques clairs, avec une qualité de quelqu\'un qui ne questionne pas les fondations.',
    vetements: 'Tenue de technicien confédéral — standard, sans variations personnelles. Il est interchangeable avec 30 autres techniciens.',
    signes_particuliers: 'Il perpétue le réseau artificiel sans questionner. Kaeleth (86) est son collègue senior. Orven (15) est une figure historique dans sa formation — qu\'il n\'a pas connue directement.',
  },

  psychologie: {
    dominante: 'Ingénieur du réseau artificiel de Thalassyr (deuxième génération). Il a 28 ans — le Silence des Vents et le réseau artificiel sont des réalités pré-existantes pour lui. Il n\'a pas de référence pour ce qui était avant.',
    mecanisme_de_defense: 'L\'absence de référence alternative. Pour lui, le réseau artificiel est le système normal. Questionner sa légitimité nécessiterait une référence qu\'il n\'a pas.',
    contradiction_interne: 'Il perpétue un système dont il ne connaît pas les intentions de conception originales. Ce qu\'il maintient n\'est pas entièrement ce qu\'Orven (15) avait conçu.',
    rapport_aux_autres: 'Kaeleth (86) est son collègue senior — il a une compréhension partielle du réseau. Orven (15) est une figure de formation — il n\'a appris de lui que par des documents.',
    vision_du_monde: 'Le réseau artificiel fournit le vent à Thalassyr. C\'est suffisant comme définition du système.',
  },

  histoire: {
    enfance: {
      titre: 'La deuxième génération',
      contenu: 'Né à Thalassyr après le Silence des Vents. Le réseau artificiel était là avant lui. Sa formation technique s\'était construite sur ce réseau sans référence au système naturel.',
    },
    arrivee: {
      titre: 'Le travail',
      contenu: 'Rejoint le service de maintenance à 22 ans. Kaeleth (86) était son formateur de terrain. Il avait appris le réseau par la pratique.',
    },
    premier_conflit: {
      titre: 'Les défaillances',
      contenu: 'Il réparait les défaillances selon les protocoles que Kaeleth lui avait transmis. Quand Kaeleth ne savait pas, ils cherchaient dans les archives d\'Orven. Les archives n\'étaient pas toujours complètes.',
    },
    revelation: {
      titre: 'La transmission incomplète',
      contenu: 'Il avait compris progressivement que les connaissances sur le réseau s\'étaient dégradées à chaque transmission. Ce qu\'il savait était moins que ce que Kaeleth savait, qui était moins que ce qu\'Orven savait.',
    },
    etat_actuel: {
      titre: 'La maintenance',
      contenu: 'Il maintient le réseau. Les lacunes s\'accumulent sans que personne ne les documente formellement.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrel_lacunes',
      titre: 'La dégradation de la transmission',
      description: 'Le savoir sur le réseau artificiel s\'est dégradé à chaque génération. Thyrel maintient le réseau avec des connaissances partielles héritées de Kaeleth (86), qui les avait héritées d\'Orven (15) partiellement. Si une défaillance systémique se produit, ni Thyrel ni Kaeleth ne peuvent la résoudre.',
      personnages_impliques: [86, 15],
      declencheur: 'Défaillance systémique du réseau artificiel',
      consequence: 'Nécessité de retrouver les archives originales d\'Orven ou Orven lui-même',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Ingénieur du réseau artificiel de deuxième génération. Ne questionne pas. Le réseau artificiel est son monde normal.',

  relations: [
    { id: 15, nom: 'Orven', type: 'contact', note: 'Figure de formation. Connu seulement par les documents.' },
    { id: 86, nom: 'Kaeleth', type: 'allié', note: 'Collègue senior. Sa référence directe de formation.' },
  ],

  combat: {
    sorts: [
      'Décharge électrique (Electrique) — attaque directe — usage défensif',
      'Maintenance électrique (Electrique) — réparation rapide des systèmes conducteurs — compétence technique',
    ],
  },

  image_prompts: [
    {
      id: 'thyrel_maintenance',
      description: 'Thyrel dans les structures du réseau artificiel de Thalassyr — un Néréide de 28 ans en train de réparer une jonction. Son expression est concentrée et sans questionnement. Le réseau artificiel est son normal.',
      style: 'réaliste Néréide technicien deuxième génération, réseau artificiel de Thalassyr, perpétuation sans questionnement',
    },
  ],

  lore_long: `Thyrel entretient le réseau artificiel de Thalassyr. Il a 28 ans — le Silence des Vents et le réseau artificiel sont des réalités pré-existantes pour lui.

Il perpétue sans questionner. Le savoir sur le réseau s'est dégradé à chaque génération de techniciens.

Ce qu'il sait est moins que ce que Kaeleth (86) savait, qui était moins qu'Orven (15).`,
};

export default thyrel;
