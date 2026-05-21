import type { PersonnageLoreComplet } from '../../../lore-types';

const vorkheth: PersonnageLoreComplet = {
  id: 312,
  nom: 'Vorkheth',
  element: 'Poison',
  element2: 'Sol',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Moyen, avec une façon d\'occuper l\'espace qui suggère une attention aux sorties. Il ne tourne pas le dos aux portes.',
    peau: 'Gris Chthonien standard, propre et soigné — une apparence délibérément sans marqueur qui facilite la mobilité entre les zones.',
    yeux: 'Gris-vert, avec une habitude de noter les réactions physiologiques des gens autour de lui. Un œil de chercheur appliqué aux humains.',
    vetements: 'Tenue neutre sans marqueur impérial — il ne représente pas l\'Empire en public. Tenue de routine de mine ou de technicien selon la zone. Plusieurs ensembles selon les contextes.',
    signes_particuliers: 'Il se souvient des noms et des détails physiologiques des personnes qu\'il a observées. Ce n\'est pas de l\'empathie — c\'est de la méthodologie.',
  },

  psychologie: {
    dominante: 'Collecte de données expérimentales sur des effets que les instruments ne peuvent pas mesurer seuls. L\'Empire a besoin de données sur les vapeurs fongiques sur des sujets non préparés. Il produit ces données.',
    mecanisme_de_defense: 'La rationalisation par l\'utilité. Les données qu\'il collecte servent à protéger d\'autres personnes à terme. Il croit ça. Parfois.',
    contradiction_interne: 'Il teste des effets sur des Élus non-consentants. Il sait ce que c\'est. Il a une terminologie qui rend ça plus neutre dans ses rapports. La terminologie ne change pas ce que c\'est.',
    rapport_aux_autres: 'Thyss (42) est son contact impérial pour les directives et les sujets potentiels. La Fosse Interdite est son laboratoire — les sujets sont des travailleurs qui entrent dans des zones marquées comme sûres alors qu\'elles ne le sont pas complètement.',
    vision_du_monde: 'L\'Empire a besoin de données sur la toxicologie fongique avancée. Ces données ne peuvent pas être produites en laboratoire seul. Il produit des données réelles. C\'est sa fonction.',
  },

  histoire: {
    enfance: {
      titre: 'La formation impériale spécialisée',
      contenu: 'Sélectionné à 20 ans dans un programme impérial de recherche toxicologique avancée. Formation de 5 ans dans des installations de la Citadelle — des installations dont il ne peut pas mentionner le nom dans ses rapports. À 25 ans, affecté à Ormn-Dur pour des raisons de proximité avec la Fosse.',
    },
    arrivee: {
      titre: 'Les premiers tests',
      contenu: 'À 26 ans, premiers tests sur des travailleurs dans des zones où les concentrations fongiques dépassaient légèrement les seuils annoncés. Les premiers résultats avaient été présentés à Thyss (42) comme des données de terrain — des observations sur des travailleurs dans des conditions difficiles. Thyss avait validé le rapport sans commentaire.',
    },
    premier_conflit: {
      titre: 'Le sujet qui a posé des questions',
      contenu: 'À 31 ans, un travailleur avait réalisé que sa zone de travail avait des concentrations supérieures à ce qui était annoncé et qu\'il souffrait de symptômes documentés nulle part dans les rapports de sécurité. Il avait posé des questions auprès de la supervision. Vorkheth avait été informé. Il avait préparé une réponse qui expliquait les symptômes par d\'autres facteurs. La réponse avait été transmise au travailleur. Le travailleur avait arrêté de poser des questions.',
    },
    revelation: {
      titre: 'Les données sur les Élus',
      contenu: 'La directive de Thyss (42) avait évolué : priorité sur des Élus non-enregistrés pour les prochains tests — leur réponse physiologique aux vapeurs fongiques était différente des non-Élus, ce qui intéressait la Citadelle spécifiquement. Il avait reçu une liste de sujets potentiels. Des personnes dans des zones de la Fosse sans enregistrement officiel.',
    },
    etat_actuel: {
      titre: 'Les tests en cours',
      contenu: 'Il gère 3 tests en parallèle sur des populations de travailleurs dans des zones à concentrations contrôlées. Les sujets ne savent pas qu\'ils participent. Ses rapports à Thyss (42) utilisent un vocabulaire de santé occupationnelle. Les données réelles sont dans une archive à accès restreint. Il y pense de moins en moins en termes éthiques depuis 3 ans.',
    },
  },

  evenements_narratifs: [
    {
      id: 'vorkheth_tests_elus',
      titre: 'La liste des sujets Élus',
      description: 'La directive de Thyss (42) inclut des sujets Élus non-enregistrés — une liste fournie par des sources que Vorkheth ne connaît pas. Des personnes dans les zones de la Fosse sans papiers. Ses tests sur cette population sont en cours. Les données de réponse Élu/vapeur fongique vont à la Citadelle directement, pas à Thyss.',
      personnages_impliques: [42],
      declencheur: 'Directive impériale priorisant les sujets Élus non-enregistrés',
      consequence: 'Tests sur des Élus sans consentement — données envoyées directement à la Citadelle',
    },
    {
      id: 'vorkheth_archive_restreinte',
      titre: 'L\'archive à accès restreint',
      description: 'Ses données réelles sont dans une archive à accès restreint que ni la Technocratie d\'Ormn-Dur ni la supervision locale de la Fosse ne peuvent consulter. La Citadelle peut. Thyss peut avec autorisation spéciale. Si quelqu\'un d\'autre accédait à cette archive, l\'ensemble de ce qu\'il a produit depuis 10 ans serait visible.',
      personnages_impliques: [],
      declencheur: 'Architecture d\'information conçue pour l\'opacité',
      consequence: 'Archive de 10 ans de tests non consentis — inaccessible sauf par la Citadelle',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Agent impérial qui utilise la Fosse comme laboratoire non consenti. Ses données vont à la Citadelle. Son existence est l\'un des usages réels de la Fosse que la Technocratie ne connaît pas.',

  relations: [
    { id: 42, nom: 'Thyss', type: 'allié', note: 'Contact impérial direct. Reçoit les directives, valide les rapports. Ne connaît pas tous les détails des tests sur Élus.' },
  ],

  combat: {
    sorts: [
      'Vapeur ciblée (Poison) — concentration d\'une vapeur fongique spécifique sur une cible — effet précis non léthal ou léthal selon la dose',
      'Ancrage (Sol) — fixation d\'une cible au sol — immobilisation pour tests ou interrogation',
      'Dissipation chimique (Poison) — neutralisation d\'un agent toxique dans une zone — effacement de preuve environnementale',
    ],
  },

  image_prompts: [
    {
      id: 'vorkheth_rapport',
      description: 'Vorkheth écrivant un rapport dans un bureau souterrain sans fenêtre. Sur son bureau, deux documents — un en clair, un encodé. Il écrit dans le document encodé. Son expression est neutre, professionnelle. Il n\'y a rien dans son visage qui indique ce qu\'il documente.',
      style: 'réaliste bureaucratique sombre, bureau souterrain, double documentation, neutralité de surface',
    },
  ],

  lore_long: `Vorkheth teste les effets des vapeurs fongiques sur des travailleurs de la Fosse qui ne savent pas qu'ils participent.

Ses rapports officiels utilisent le vocabulaire de la santé occupationnelle. Les données réelles sont dans une archive à accès restreint — Citadelle uniquement.

Thyss (42) lui a transmis une directive : priorité aux Élus non-enregistrés. Leur réponse aux vapeurs intéresse la Citadelle. Il a reçu une liste. Les tests sont en cours.

Un travailleur a posé des questions il y a 4 ans. Vorkheth a préparé une réponse. Le travailleur a arrêté de poser des questions.

Il y pense de moins en moins en termes éthiques depuis 3 ans. Ce n'est pas qu'il a conclu que c'est acceptable. C'est qu'il a arrêté de poser la question.`,
};

export default vorkheth;
