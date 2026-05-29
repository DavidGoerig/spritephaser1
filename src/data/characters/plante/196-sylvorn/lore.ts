import type { PersonnageLoreComplet } from '../../../lore-types';

const sylvorn: PersonnageLoreComplet = {
  id: 196,
  nom: 'Sylvorn',
  element: 'Plante',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Homme-Lien de 63 ans, jardinier — corpulence de quelqu\'un qui travaille avec les mains depuis des décennies. Calme profond.',
    peau: 'Ton terreux avec des taches de terre permanentes que les lavages n\'éliminent plus complètement.',
    yeux: 'Verts avec une qualité de quelqu\'un qui observe des plantes et comprend que les plantes observent en retour.',
    vetements: 'Tenue de jardinage — pratique, portée avec la dignité de quelqu\'un dont le travail est sérieux.',
    signes_particuliers: 'Son jardin pousse anormalement vite depuis 6 mois. Il ne comprend pas pourquoi. Les plantes font ce qu\'elles ont toujours fait, mais plus vite et plus intensément.',
  },

  psychologie: {
    dominante: 'Jardinier de l\'Isthme dont le jardin montre une croissance anormale depuis 6 mois. Il n\'est pas un Élu — son élément Plante est minimal, juste suffisant pour comprendre les plantes et les aider à pousser. Cette accélération de croissance dépasse son compréhension de ce que son élément devrait produire.',
    mecanisme_de_defense: 'L\'observation patiente. Les plantes ont leur propre logique. Quelque chose a changé dans l\'environnement. Il observe, il documente, il attend de comprendre avant de conclure.',
    contradiction_interne: 'Son jardin répond à quelque chose dans l\'environnement de l\'Isthme — probablement la saturation élémentaire, dont il n\'est pas conscient en termes politiques. Sa croissance anormale est un indicateur de saturation que des personnes comme Kareol (183) ou Sorvael (188) chercheraient à analyser s\'ils en étaient informés.',
    rapport_aux_autres: 'La Saturation de l\'Isthme est ce qui affecte son jardin sans qu\'il le sache. Thaeval (255) est une résonance lointaine — un contact Sylvan dont les connaissances botaniques pourraient expliquer ce qu\'il observe si une connexion était établie.',
    vision_du_monde: 'Les jardins répondent à leur environnement. Ce qui se passe dans son jardin dit quelque chose sur ce qui se passe dans l\'Isthme. Il n\'a pas les mots pour dire quoi.',
  },

  histoire: {
    enfance: {
      titre: 'Le jardin',
      contenu: 'Jardinier depuis l\'âge de 15 ans dans l\'Isthme. Son élément Plante minimal lui avait permis de développer une intuition pour les végétaux — pas une magie spectaculaire, mais une communication subtile avec ce qu\'il cultivait.',
    },
    arrivee: {
      titre: 'L\'anomalie',
      contenu: 'Il y a 6 mois, ses plantes avaient commencé à pousser plus vite que normal — des cycles de croissance comprimés, des floraisons hors-saison, des racines s\'étendant dans des directions inhabituelles. Il avait cherché une cause dans ses pratiques. Ses pratiques n\'avaient pas changé.',
    },
    premier_conflit: {
      titre: 'L\'inexpliqué',
      contenu: 'Il avait consulté un botaniste local qui n\'avait pas trouvé d\'explication dans les conditions du sol, l\'eau, ou le climat. Le botaniste avait suggéré que ses méthodes avaient dû changer sans qu\'il s\'en souvienne. Il savait que non.',
    },
    revelation: {
      titre: 'Le jardin qui sait',
      contenu: 'Il avait commencé à penser que ses plantes répondaient à quelque chose qu\'il ne pouvait pas percevoir directement. L\'environnement avait changé d\'une façon qu\'il ne pouvait pas nommer. Ses plantes l\'avaient senti avant lui.',
    },
    etat_actuel: {
      titre: 'Le jardinier inquiet',
      contenu: 'Il jardine. Les plantes poussent trop vite. Il observe et ne comprend pas.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sylvorn_jardin',
      titre: 'Le jardin comme indicateur',
      description: 'Le jardin de Sylvorn pousse anormalement depuis 6 mois — une réponse à la saturation élémentaire de l\'Isthme que personne n\'a encore reliée à d\'autres indicateurs. Si quelqu\'un — Kareol (183), Sorvael (188) — entend parler de son jardin et le relie à ses propres observations, le jardin de Sylvorn devient un indicateur supplémentaire d\'une saturation plus grave qu\'estimée.',
      personnages_impliques: [255],
      declencheur: 'Quelqu\'un reliant la croissance anormale du jardin de Sylvorn aux données de saturation élémentaire',
      consequence: 'Un indicateur supplémentaire de saturation élémentaire dans l\'Isthme — et Sylvorn comprenant ce qui affecte son jardin',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Jardinier de l\'Isthme dont le jardin pousse anormalement depuis 6 mois. Ne comprend pas pourquoi. Son jardin est un indicateur non-reconnu de saturation élémentaire.',

  relations: [
    { id: 255, nom: 'Thaeval', type: 'contact', note: 'Résonance lointaine — connaissances botaniques Sylvan qui pourraient expliquer l\'anomalie.' },
  ],

  combat: {
    sorts: [
      'Enchevêtrement végétal (Plante) — racines et tiges comme entraves — contrôle de terrain',
      'Croissance accélérée (Plante) — végétation rapide comme barrière — défense',
    ],
  },

  image_prompts: [
    {
      id: 'sylvorn_jardin',
      description: 'Sylvorn dans son jardin de l\'Isthme — un Homme-Lien de 63 ans regardant des plantes qui ont poussé d\'une façon qui n\'a pas de sens pour lui. Des fleurs hors-saison, des tiges deux fois plus hautes que prévu. Il touche une feuille avec perplexité. Quelque chose dans son jardin répond à quelque chose qu\'il ne peut pas voir.',
      style: 'réaliste Homme-Lien jardinier, Isthme, croissance anormale, saturation élémentaire non-reconnue, observation patiente',
    },
  ],

  lore_long: `Sylvorn est jardinier dans l'Isthme depuis 48 ans. Son jardin pousse anormalement vite depuis 6 mois.

Il n'est pas un Élu puissant — son élément Plante est minimal. Ce qu'il observe dépasse ce que son élément devrait produire.

Ses plantes répondent à la saturation élémentaire de l'Isthme qu'il ne peut pas percevoir directement. Son jardin est un indicateur que personne n'a encore relié à d'autres données.`,
};

export default sylvorn;
