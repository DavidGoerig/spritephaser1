import type { PersonnageLoreComplet } from '../../../lore-types';

const kaelvenorm: PersonnageLoreComplet = {
  id: 383,
  nom: 'Kaelvenorm',
  element: 'Normal',
  element2: 'Psy',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Thérapeute — une présence apaisante par la posture autant que par la parole. Ni petite ni grande, avec une façon d\'occuper l\'espace qui réduit la distance perçue avec l\'interlocuteur.',
    peau: 'Brun Homme-Lien avec des traits calmes. Peu de marques de tension — soit sa vie est paisible, soit il a appris à ne pas laisser la tension se lire sur lui.',
    yeux: 'Brun chaud avec une qualité d\'attention totale — quand il regarde quelqu\'un, cette personne a l\'impression d\'être entièrement vue.',
    vetements: 'Tenue sobre et confortable — rien qui crée une distance institutionnelle. Il ne veut pas que ses clients se sentent dans un cabinet médical.',
    signes_particuliers: 'Il laisse les silences exister — il ne les comble pas. Dans les conversations difficiles, c\'est une forme de respect qui déstabilise ceux qui ne l\'ont pas vécu.',
  },

  psychologie: {
    dominante: 'Thérapie pour les Élus à double résonance élémentaire — aide à gérer la tension entre deux éléments en résonance simultanée dans un même individu, un état qui peut être source de puissance ou de souffrance selon la maîtrise.',
    mecanisme_de_defense: 'La présence sans direction. Il n\'oriente pas ses clients vers des conclusions — il les aide à trouver leurs propres réponses. Si elles sont différentes des siennes, ce n\'est pas une erreur.',
    contradiction_interne: 'Certains de ses clients sont des Élus dont les capacités les mettent en danger dans le contexte politique actuel de l\'Isthme. L\'aide qu\'il leur fournit — maîtrise de la résonance — les rend à la fois plus stables et plus capables. Cette capacité accrue peut les mettre davantage en danger.',
    rapport_aux_autres: 'Orathyn (181) est un médecin des Élus avec qui il partage des cas — la dimension psychologique et la dimension physique se complètent. Vashera (266) lui envoie des Élus Dissidents qui ont besoin de thérapie dans un contexte de discrétion.',
    vision_du_monde: 'Deux éléments en résonance simultanée ne sont pas un défaut — c\'est une configuration rare qui demande une maîtrise plus grande que la résonance unique. L\'aider à émerger plutôt qu\'à la supprimer est sa position thérapeutique.',
  },

  histoire: {
    enfance: {
      titre: 'La double voix',
      contenu: 'À 16 ans, un ami avait développé une double résonance élémentaire et vivait dans un état de tension constante — deux éléments en conflit dans un même individu. Kaelvenorm l\'avait accompagné pendant 2 ans à trouver une façon de les faire coexister. L\'ami avait fini par trouver. Kaelvenorm avait su qu\'il voulait faire ça.',
    },
    arrivee: {
      titre: 'Les premiers clients',
      contenu: 'À 24 ans, sa réputation informelle de quelqu\'un qui pouvait aider avec la double résonance lui avait amené ses premiers clients — des Élus dont les médecins classiques ne savaient pas quoi faire de la tension élémentaire. Il avait développé sa méthode par la pratique.',
    },
    premier_conflit: {
      titre: 'La maîtrise dangereuse',
      contenu: 'À 29 ans, un client qu\'il avait aidé à maîtriser sa double résonance était devenu identifiable par les analystes impériaux — sa signature combinée était plus distinctive que sa signature simple antérieure. La maîtrise l\'avait rendu plus visible. Il n\'avait pas de solution simple à ce paradoxe.',
    },
    revelation: {
      titre: 'Les clients de Vashera',
      contenu: 'Vashera (266) lui avait envoyé des Élus dont les profils montraient des situations politiques actives — personnes impliquées dans des activités Dissidentes avec des doubles résonances instables. La thérapie les rendait plus stables et potentiellement plus efficaces dans leurs activités. Il ne demandait pas la nature de ces activités.',
    },
    etat_actuel: {
      titre: 'Les 5 clients actifs',
      contenu: 'Il a 5 clients actifs — 3 venant de Vashera (266), 2 référés par Orathyn (181). Parmi les 3 clients de Vashera, l\'un montre une résonance particulièrement instable — des oscillations entre deux éléments qui s\'aggravent avec le stress. Le stress actuel de la situation à Virex aggrave les oscillations.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kaelvenorm_client_instable',
      titre: 'L\'oscillation sous stress',
      description: 'Un client de Vashera (266) montre des oscillations de résonance qui s\'aggravent avec le stress de la situation à Virex — les checkpoints, la démonstration de Kasevolt (360) approchante, la pression sur les Élus de la zone. Les oscillations non maîtrisées peuvent produire des décharges involontaires qui attirent l\'attention des détecteurs de Thyvsaevyn (357).',
      personnages_impliques: [266, 181],
      declencheur: 'Aggravation des oscillations de résonance d\'un client sous l\'effet du stress contextuel',
      consequence: 'Risque de décharge involontaire détectable — urgence thérapeutique avant la démonstration de Kasevolt',
    },
    {
      id: 'kaelvenorm_paradoxe',
      titre: 'La maîtrise qui expose',
      description: 'Ses clients dont la double résonance est bien maîtrisée ont des signatures plus distinctives — plus facilement identifiables par des détecteurs précis comme celui de Kasevolt (360). La thérapie réussie augmente le risque d\'identification. Il n\'a pas de réponse à ce paradoxe. Il le documente.',
      personnages_impliques: [181, 266],
      declencheur: 'Conscience que la maîtrise thérapeutique augmente la distinctivité de la signature élémentaire',
      consequence: 'Paradoxe documenté — sans solution actuelle. Implications pour la sécurité des clients en zone de détection active',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Thérapeute indépendant aidant les Élus à double résonance de Virex. Un client de Vashera montre des oscillations aggravées par le stress. La maîtrise thérapeutique rend les signatures plus distinctives — paradoxe sans résolution actuelle.',

  relations: [
    { id: 181, nom: 'Orathyn', type: 'allié', note: 'Médecin des Élus. Partage des cas pour compléter les dimensions physique et psychologique.' },
    { id: 266, nom: 'Vashera', type: 'allié', note: 'Envoie des Élus Dissidents en thérapie. Nature des activités non demandée.' },
  ],

  combat: {
    sorts: [
      'Ancrage de résonance (Psy) — stabilisation de la résonance élémentaire d\'une cible — réduction des oscillations instables',
      'Présence apaisante (Normal) — projection d\'une stabilité émotionnelle sur une zone — réduction des tensions dans un groupe',
      'Barrière psychique (Psy + Normal) — protection de l\'intégrité mentale contre une influence externe — résistance à la manipulation',
    ],
  },

  image_prompts: [
    {
      id: 'kaelvenorm_seance',
      description: 'Kaelvenorm dans un espace de consultation simple à Virex — assis face à un client dont la résonance élémentaire est visible comme une légère oscillation autour de lui. Kaelvenorm est calme et présent. Il n\'intervient pas — il attend. Le client cherche ses mots.',
      style: 'réaliste thérapeute Homme-Lien, consultation de résonance élémentaire, Virex, présence calme, oscillation visible',
    },
  ],

  lore_long: `Kaelvenorm aide les Élus à double résonance à gérer la tension entre leurs deux éléments. 5 clients actifs à Virex — 3 via Vashera (266), 2 via Orathyn (181).

Un client montre des oscillations aggravées par le stress de la situation à Virex. Risque de décharge involontaire détectable avant la démonstration de Kasevolt (360).

Paradoxe documenté : la maîtrise thérapeutique rend les signatures plus distinctives — plus facilement identifiables par des détecteurs précis. Pas de solution actuelle.`,
};

export default kaelvenorm;
