import type { PersonnageLoreComplet } from '../../../lore-types';

const saelkrael: PersonnageLoreComplet = {
  id: 361,
  nom: 'Saelkrael',
  element: 'Combat',
  element2: 'Electrique',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Athlétique avec une économie de mouvement — elle ne fait pas de gestes inutiles. Chaque déplacement est calculé pour être silencieux ou rapide selon le contexte.',
    peau: 'Brun Homme-Lien avec des marques d\'impact aux articulations et une cicatrice linéaire à l\'avant-bras gauche — souvenir d\'une grille électrifiée traversée trop vite.',
    yeux: 'Noirs avec une habitude de lecture rapide des espaces — elle évalue les issues avant les personnes dans une pièce.',
    vetements: 'Tenue neutre sans marqueur d\'affiliation — des couches superposées qui permettent des changements d\'apparence rapides. Un compartiment dissimulé à la ceinture.',
    signes_particuliers: 'Elle parle peu en opération — des gestes codifiés avec les personnes qui travaillent avec elle. Elle parle normalement en dehors des opérations, ce qui surprend ceux qui ne la connaissent que dans le travail.',
  },

  psychologie: {
    dominante: 'Infiltrations rapides dans des installations impériales pour extraire des Élus identifiés ou récupérer des informations critiques — entrée, extraction, sortie, sans laisser de trace de présence.',
    mecanisme_de_defense: 'La préparation comme contrôle. Elle prépare chaque infiltration avec une précision obsessionnelle. Si elle a tout préparé, les imprévus sont des variations sur des plans existants, pas des surprises.',
    contradiction_interne: 'Ses infiltrations les plus efficaces sont aussi les plus dangereuses pour elle — les installations où les Élus sont détenus ont des protections électriques qui interagissent avec son élément Electrique de façon imprévisible. Elle a eu 3 incidents où sa propre signature électrique a déclenché des alarmes qu\'elle était venue neutraliser.',
    rapport_aux_autres: 'Vashera (266) est son contact réseau pour les informations de terrain — elle fournit les plans des installations, les rotations de gardes, les points d\'accès. Sarevolt (350) demande des extractions d\'urgence qui court-circuitent sa préparation habituelle.',
    vision_du_monde: 'Les installations impériales ont des failles. Chaque système de sécurité a été conçu par quelqu\'un qui a fait des compromis. Elle cherche ces compromis.',
  },

  histoire: {
    enfance: {
      titre: 'Les bâtiments du quartier',
      contenu: 'À 13 ans, elle avait exploré chaque bâtiment abandonné de son quartier de l\'Isthme — pas pour du vandalisme, par curiosité structurelle. Comment les bâtiments étaient construits, où les accès étaient, comment les systèmes fonctionnaient. C\'était du jeu. Ça lui avait enseigné quelque chose.',
    },
    arrivee: {
      titre: 'Le premier contact Dissident',
      contenu: 'À 22 ans, Vashera (266) l\'avait abordée après qu\'elle avait, par curiosité, signalé une faille dans la sécurité d\'un bâtiment impérial à un commerçant qui connaissait Vashera. Vashera avait demandé si elle pouvait utiliser cette faille. La question suivante avait été : est-ce qu\'elle pouvait entrer et sortir elle-même.',
    },
    premier_conflit: {
      titre: 'La signature électrique',
      contenu: 'À 26 ans, lors d\'une infiltration dans un centre de détention, ses capteurs électriques avaient réagi à son propre élément Electrique — le champ de détection avait reconnu sa signature. Elle avait eu 4 secondes pour sortir avant le verrouillage. Elle était sortie avec 3 secondes d\'avance. Elle avait passé 2 semaines à comprendre comment masquer sa signature pendant une infiltration.',
    },
    revelation: {
      titre: 'La demande de Sarevolt',
      contenu: 'Sarevolt (350) lui avait transmis une demande d\'extraction d\'urgence — un Élu identifié à Virex qui devait sortir dans les 48 heures. Elle avait 3 heures de préparation au lieu de ses 3 jours habituels. L\'extraction avait réussi. Elle avait compris que ses standards de préparation n\'étaient pas toujours compatibles avec les urgences de Sarevolt.',
    },
    etat_actuel: {
      titre: 'Le protocole d\'urgence',
      contenu: 'Elle a développé un protocole d\'infiltration d\'urgence — une version réduite de sa préparation habituelle applicable en moins de 2 heures. Elle ne l\'aime pas. Il laisse plus de marge d\'imprévus. Mais les demandes de Sarevolt sont réelles et la démonstration terrain de Kasevolt (360) dans 2 semaines signifie que les extractions d\'urgence vont augmenter.',
    },
  },

  evenements_narratifs: [
    {
      id: 'saelkrael_protocole_urgence',
      titre: 'La démonstration de Kasevolt',
      description: 'La démonstration terrain du prototype de Kasevolt (360) à Virex va identifier des Élus dans la zone. Chaque identification peut déclencher une demande d\'extraction d\'urgence de Sarevolt (350). Elle prépare son protocole d\'urgence pour ce scénario — plusieurs extractions rapides dans une fenêtre courte. C\'est contre ses principes de préparation. C\'est nécessaire.',
      personnages_impliques: [350, 266],
      declencheur: 'Anticipation des extractions d\'urgence liées à la démonstration de Kasevolt',
      consequence: 'Protocole d\'urgence préparé — capacité d\'extraction multiple en fenêtre courte',
    },
    {
      id: 'saelkrael_signature_electrique',
      titre: 'L\'interaction avec les détecteurs',
      description: 'Les détecteurs de Kasevolt (360) lisent les signatures électriques. Sa propre signature électrique a déclenché des alarmes dans des installations impériales standard. Les détecteurs de Kasevolt sont plus précis. Elle doit développer une méthode de masquage de sa propre signature pour les infiltrations dans des zones où ces détecteurs sont actifs.',
      personnages_impliques: [359, 266],
      declencheur: 'Découverte que les détecteurs de Kasevolt peuvent lire sa propre signature électrique',
      consequence: 'Besoin de méthode de masquage personnel — contact potentiel avec Thyrsaevyn (359)',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Infiltreuse Dissidente spécialisée dans les extractions rapides à Virex. Prépare un protocole d\'urgence pour les extractions liées à la démonstration du prototype de Kasevolt. Sa propre signature électrique pourrait être détectée par les détecteurs qu\'elle cherche à contourner.',

  relations: [
    { id: 266, nom: 'Vashera', type: 'allié', note: 'Fournit les informations de terrain pour les infiltrations — plans, rotations, accès.' },
    { id: 350, nom: 'Sarevolt', type: 'allié', note: 'Demande des extractions d\'urgence qui court-circuitent sa préparation habituelle.' },
  ],

  combat: {
    sorts: [
      'Frappe désactivante (Combat) — impact ciblé sur les points de contrôle d\'un système ou d\'un gardien — neutralisation silencieuse',
      'Surcharge de signature (Electrique) — émission d\'un bref pic électrique — déclenchement ciblé d\'un système pour créer une distraction',
      'Réflexe d\'extraction (Combat + Electrique) — combinaison de vitesse et de décharge — sortie forcée d\'une zone verrouillée',
    ],
  },

  image_prompts: [
    {
      id: 'saelkrael_preparation',
      description: 'Saelkrael dans un espace de préparation — des plans d\'installation étalés devant elle, des instruments de mesure de signature électrique, une tenue d\'infiltration préparée. Elle est concentrée et silencieuse. Son expression est de calcul pur — pas d\'anxiété, pas d\'excitation.',
      style: 'réaliste infiltreuse Homme-Lien, préparation d\'opération, plans et instruments, concentration pure',
    },
  ],

  lore_long: `Saelkrael s'infiltre dans des installations impériales pour extraire des Élus identifiés. Sa préparation est obsessionnelle — 3 jours minimum par opération standard.

Sa propre signature électrique a déclenché des alarmes impériales 3 fois. Elle a développé des méthodes de masquage. Les détecteurs de Kasevolt (360) sont plus précis que les systèmes standard.

La démonstration terrain de Kasevolt dans 2 semaines va générer des identifications d'Élus à Virex. Sarevolt (350) va demander des extractions d'urgence. Elle prépare un protocole réduit qu'elle n'aime pas mais qui sera nécessaire.`,
};

export default saelkrael;
