import type { PersonnageLoreComplet } from '../../../lore-types';

const syrethvon: PersonnageLoreComplet = {
  id: 323,
  nom: 'Syrethvon',
  element: 'Psy',
  element2: 'Ténèbres',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Grand avec une présence délibérément imposante — quelqu\'un qui utilise son corps comme un premier instrument d\'interrogation avant même d\'activer ses éléments.',
    peau: 'Gris-bleu foncé Umbrien avec des reflets froids aux tempes et aux joues — les deux éléments qui s\'activent simultanément lors des interrogatoires.',
    yeux: 'Noirs avec un anneau violacé. Ils ne bougent pas pendant une interrogation. Cette immobilité est apprise.',
    vetements: 'Tenue impériale sobre sans excès de marqueurs hiérarchiques. Il ne veut pas que ses sujets se concentrent sur son rang — il veut qu\'ils se concentrent sur ses questions.',
    signes_particuliers: 'Il pose des questions dans un ordre particulier — jamais la question importante en premier. La question importante arrive quand le sujet a déjà répondu à des dizaines d\'autres.',
  },

  psychologie: {
    dominante: 'Extraction d\'information comme discipline technique. Il fait ça bien parce qu\'il a appris à le faire bien. La question de si ce qu\'on lui demande d\'extraire mérite d\'être extrait est une question qu\'il a posé une fois et à laquelle il n\'a pas reçu de réponse satisfaisante.',
    mecanisme_de_defense: 'La professionnalisation complète. Il ne pense pas en termes de victimes et de bourreaux — il pense en termes de processus et de résultats. Tant qu\'il reste dans ce cadre, il fonctionne.',
    contradiction_interne: 'Il est efficace. Cette efficacité fait qu\'on lui confie des cas de plus en plus sensibles. Les cas sensibles produisent des résultats dont il entend parfois les conséquences après coup. Plus il est efficace, moins il peut ignorer ce que ses extractions produisent.',
    rapport_aux_autres: 'Oraveth (89) lui confie les dossiers impériaux à Vel\'Nox — les priorités, les profils, les limites autorisées. Syreth (153) est son équivalent dans une autre région — ils comparent des méthodes sans jamais se voir en personne.',
    vision_du_monde: 'L\'information existe. Extraire l\'information qui existe n\'est pas la créer. Il ne crée pas de vérités — il accède à celles qui sont là.',
  },

  histoire: {
    enfance: {
      titre: 'La double perception précoce',
      contenu: 'À 13 ans, manifestation simultanée du Psy et des Ténèbres — peu commune. L\'Empire avait repéré cet enfant Umbrien avec une capacité rare. Il avait été intégré dans un programme de formation impérial à 15 ans. Il n\'avait pas demandé à ses parents si c\'était ce qu\'ils voulaient. On ne lui avait pas non plus demandé.',
    },
    arrivee: {
      titre: 'La première extraction',
      contenu: 'À 22 ans, premier interrogatoire seul — un suspect Dissident à Vel\'Nox. Il avait été efficace. Oraveth (89) avait noté l\'efficacité. À 26 ans, il était le premier opérateur d\'extraction de la région.',
    },
    premier_conflit: {
      titre: 'La question posée',
      contenu: 'À 34 ans, il avait demandé à Oraveth (89) ce qui était advenu d\'un sujet particulier après son interrogatoire — un cas dont l\'extraction avait été particulièrement difficile. Oraveth lui avait répondu que ce n\'était pas son domaine. Il avait noté que la question avait produit une réponse de clôture. Il n\'avait pas posé de seconde question. Il avait noté que l\'absence de réponse était elle-même une réponse.',
    },
    revelation: {
      titre: 'L\'efficacité croissante',
      contenu: 'Sur 10 ans, les cas qui lui avaient été confiés avaient progressivement changé de nature — moins de suspects ordinaires, plus de personnes avec des connexions Dissidentes établies ou présumées. Les connexions présumées lui posaient plus de problèmes que les établies. Il ne l\'avait jamais dit à Oraveth.',
    },
    etat_actuel: {
      titre: 'Les dossiers actuels',
      contenu: 'Il a 3 dossiers actifs d\'Oraveth (89). Deux sont des cas établis — des personnes dont la connexion aux Dissidentes est documentée. Le troisième est une connexion présumée — une personne que l\'Empire soupçonne sans preuve. Il a commencé l\'interrogatoire du troisième. Il a décidé de prendre plus de temps sur ce dossier que les deux autres.',
    },
  },

  evenements_narratifs: [
    {
      id: 'syrethvon_troisieme_dossier',
      titre: 'Le dossier présumé',
      description: 'Le troisième dossier est une connexion présumée sans preuve documentée. Il prend plus de temps sur ce dossier — pas explicitement pour protéger le sujet, mais parce que ses méthodes requièrent une plus grande certitude avant les extractions profondes sur un cas non établi. Cette distinction de tempo ne lui a pas encore été reproché par Oraveth (89).',
      personnages_impliques: [89],
      declencheur: 'Dossier de connexion présumée non documentée',
      consequence: 'Tempo différent sur un cas non établi — tension entre efficacité et précision',
    },
    {
      id: 'syrethvon_question_non_reposee',
      titre: 'La question qu\'il ne repose pas',
      description: 'Il sait depuis 6 ans que les réponses à ses questions sur les sujets après leurs interrogatoires ne lui seront pas données. Il a cessé de poser ces questions. Cette décision d\'arrêter de poser la question n\'est pas de l\'indifférence — c\'est une économie. Il dépense ses questions ailleurs.',
      personnages_impliques: [89, 153],
      declencheur: 'Réponse de clôture d\'Oraveth il y a 6 ans',
      consequence: 'Information sur les conséquences de ses extractions délibérément ignorée — équilibre fragile',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Outil de l\'Empire pour l\'extraction d\'information dans Vel\'Nox. Son efficacité est son utilité et sa fragilité — plus il est efficace, moins il peut ignorer ce que ses extractions servent.',

  relations: [
    { id: 89, nom: 'Oraveth', type: 'allié', note: 'Confie les dossiers. Ne répond pas aux questions sur les conséquences. Relation hiérarchique avec clôtures délibérées.' },
    { id: 153, nom: 'Syreth', type: 'allié', note: 'Équivalent dans une autre région. Comparaison de méthodes sans rencontre directe.' },
  ],

  combat: {
    sorts: [
      'Extraction psy (Psy) — accès forcé aux structures mémorielle d\'une cible — interrogatoire profond',
      'Ombre inhibante (Ténèbres) — immobilisation d\'une cible dans une zone d\'ombre concentrée — contention',
      'Double pression (Psy + Ténèbres) — combinaison des deux éléments sur un point psychique unique — surcharge',
    ],
  },

  image_prompts: [
    {
      id: 'syrethvon_interrogatoire',
      description: 'Syrethvon assis en face d\'un sujet dans une pièce de Vel\'Nox sans fenêtre. Ses yeux ne bougent pas. Il pose une question qui n\'est pas la question importante. Il attend. Sa présence occupe l\'espace sans effort visible.',
      style: 'réaliste interrogatoire umbrien, tension statique, immobilité calculée, espace confiné',
    },
  ],

  lore_long: `Syrethvon extrait des informations pour l'Empire dans Vel'Nox. Il est efficace.

Il a posé une fois la question de ce qui advient de ses sujets après ses interrogatoires. Oraveth (89) a répondu que ce n'était pas son domaine. Il n'a pas reposé la question depuis 6 ans. Ce n'est pas de l'indifférence — c'est une décision économique.

Le troisième dossier actuel est une connexion présumée sans preuve. Il prend plus de temps sur ce dossier. Pas pour protéger explicitement le sujet — parce que ses méthodes requièrent plus de certitude pour les cas non établis.

Plus il est efficace, moins il peut ignorer ce que ses extractions servent. Il continue de fonctionner dans le cadre du processus.`,
};

export default syrethvon;
