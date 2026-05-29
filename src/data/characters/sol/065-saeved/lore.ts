import type { PersonnageLoreComplet } from '../../../lore-types';

const saeved: PersonnageLoreComplet = {
  id: 65,
  nom: 'Saeved',
  element: 'Sol',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Mort depuis 41 ans. Dans les représentations de la Convergence : un Homme-Lien d\'apparence ordinaire de 29 ans. La Convergence n\'a pas canonisé son apparence de façon cohérente — il existe 11 représentations officielles avec 11 descriptions différentes. C\'est peut-être voulu : un saint sans visage fixe s\'incarne plus facilement dans chaque croyant.',
    peau: 'Dans les récits fondateurs de la Convergence : "brune, sans luminescence élémentaire particulière". Un Élu Sol ordinaire. Cette ordinarité est centrale dans le mythe — si lui pouvait le faire, n\'importe qui le pourrait.',
    yeux: 'Dans les versions : "clairs" ou "sombres" selon le récit. La variabilité est significative. Ce qui est cohérent dans tous les récits : son expression. Quelque chose qu\'aucun mot n\'arrive à tout à fait capturer.',
    vetements: 'Dans les récits : tenue ordinaire. La Convergence a essayé d\'inventer une tenue emblématique. Les anciens membres ont dit que ça trahissait le sens de son acte. Ils ont gagné ce débat.',
    signes_particuliers: 'Il est mort. Son ombre pèse sur tous les personnages de l\'arc — sur les croyants de la Convergence, sur ceux qui utilisent la doctrine du Drain volontaire, sur ceux qui la rejettent. Personne dans cet arc n\'est indifférent à ce que son nom représente.',
  },

  psychologie: {
    dominante: 'Le premier Drain volontaire — il a offert son énergie élémentaire à la Convergence il y a 41 ans, en An -41. Pas sous la contrainte, pas dans une crise. Une décision réfléchie qu\'il a expliquée dans un document qui est devenu le texte fondateur de la Convergence. Il est mort pendant ou juste après le Drain. La Convergence est construite sur ce qu\'il a fait et ce qu\'elle pense que ça signifie.',
    mecanisme_de_defense: 'Pas applicable — mort.',
    contradiction_interne: 'Ce qu\'il a fait — offrir volontairement son énergie élémentaire — et ce que la Convergence en a fait — une doctrine de redistribution qui peut impliquer des éléments non-volontaires — sont deux choses différentes. La contradiction n\'est pas la sienne : c\'est celle de ce que le mythe a fait de son acte.',
    rapport_aux_autres: 'Lysael (63) croit à la doctrine issue de son acte. Shael (48) utilise cette doctrine comme justification pour des pratiques qu\'il n\'examine pas. Le Second Avatar (59) connaît son histoire et ne sait pas encore ce qu\'il en pense. Le Premier Avatar (60) l\'utilise comme argument de l\'existence d\'un Drain "volontaire" qui justifie la politique de l\'Empire envers les Avatars.',
    vision_du_monde: 'Ce que son texte fondateur dit — selon les interprétations les moins déformées : "Je donne ceci parce que je le peux et parce que quelqu\'un en a besoin. Je ne donne pas de prescription. Ce que je fais est ce que je peux faire. Chacun décide ce qu\'il peut faire."',
  },

  histoire: {
    enfance: {
      titre: 'Avant la Convergence',
      contenu: 'Il avait vécu les 29 premières années de sa vie avant l\'existence de la Convergence. Ce qu\'il avait vu pendant ces 29 ans — les disparités élémentaires, les inégalités liées à l\'accès aux éléments, les vies que l\'absence d\'élément fermait — avait construit quelque chose en lui qu\'il n\'avait pas encore appelé conviction.',
    },
    arrivee: {
      titre: 'La décision',
      contenu: 'À 29 ans, il avait contacté un petit groupe d\'Élus qui discutaient de redistribution élémentaire. Pas une organisation formelle — une conversation. Il avait proposé d\'être le premier à tester si un Drain volontaire était possible. Il avait survécu au processus de planification. Le Drain lui-même l\'avait tué.',
    },
    premier_conflit: {
      titre: 'Le texte',
      contenu: 'Dans les semaines avant le Drain, il avait écrit un texte court — les raisons de sa décision et ce qu\'il pensait que ça signifiait pour les autres. Ce texte n\'est pas une prescription. C\'est une description de sa propre décision. La Convergence l\'a interprété comme une prescription. Ce glissement est la source de tout ce qui est discutable dans la doctrine.',
    },
    revelation: {
      titre: 'Le saint',
      contenu: 'Il est mort. Il est devenu saint de la Convergence. Son image est sur les bâtiments de la Convergence. Son texte est cité dans chaque débat sur la redistribution élémentaire. Ce qu\'il aurait pensé de ce qu\'on a fait de lui est inconnaissable. Ce qu\'on peut raisonnablement supposer depuis son texte : il n\'aurait probablement pas voulu ça.',
    },
    etat_actuel: {
      titre: 'L\'ombre',
      contenu: 'Mort depuis 41 ans. Son ombre pèse sur tous les personnages qui croient à la doctrine ou qui la rejettent. Il n\'y a pas de personnage dans l\'arc 8 qui n\'ait pas de position sur ce que Saeved représente. Cette position dit quelque chose sur le personnage, pas sur Saeved.',
    },
  },

  evenements_narratifs: [
    {
      id: 'saeved_doctrine',
      titre: 'L\'acte et le mythe',
      description: 'Ce que Saeved a fait — Drain volontaire — et ce que la Convergence en a fait — doctrine de redistribution applicable à d\'autres — sont deux choses différentes. Si quelqu\'un dans l\'arc 8 lisait son texte sans interprétation de la Convergence, il pourrait comprendre la différence. Cette compréhension changerait la façon dont la doctrine est discutée.',
      personnages_impliques: [63, 59],
      declencheur: 'Quelqu\'un lisant le texte de Saeved sans l\'interprétation canonique de la Convergence',
      consequence: 'Remise en question de la doctrine — pas de l\'acte de Saeved, mais de ce qu\'on en a fait',
    },
    {
      id: 'saeved_second_avatar',
      titre: 'Ce que le Second Avatar pense',
      description: 'Le Second Avatar (59) a une position sur Saeved qu\'il n\'a pas encore articulée. Son parcours — visiter les 9 régions pour comprendre avant d\'agir — inclut implicitement une évaluation de ce que Saeved représente. Ce qu\'il décide de penser de Saeved informera ce qu\'il décide de penser de ce que la Convergence attend de lui.',
      personnages_impliques: [59, 63],
      declencheur: 'Second Avatar articulant sa position sur Saeved',
      consequence: 'Clarification de sa relation avec la Convergence — alliée, rivale, ou quelque chose d\'autre',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Mort depuis 41 ans. Premier Drain volontaire. Saint de la Convergence. Son ombre pèse sur tous les personnages de l\'arc — croyants, critiques, indifférents. Il n\'y a pas de position neutre sur ce que son nom représente.',

  relations: [
    { id: 63, nom: 'Lysael', type: 'contact', note: 'Croit à la doctrine issue de son acte. Fait quelque chose qu\'il n\'avait pas prescrit.' },
    { id: 59, nom: 'Second Avatar', type: 'contact', note: 'N\'a pas encore articulé sa position sur ce que Saeved représente. Il le fera.' },
  ],

  combat: {
    sorts: [
      'Ancrage de sol (Sol) — connexion profonde au sol — stabilité absolue dans toute conditions',
      'Transmission tellurique (Sol) — partage d\'énergie via le sol — soutien à distance des alliés',
      'Sacrifice volontaire (Sol) — don complet de l\'énergie élémentaire — l\'acte qui l\'a tué et fondé la Convergence',
    ],
  },

  image_prompts: [
    {
      id: 'saeved_representations',
      description: 'Onze représentations de Saeved côte à côte — un Homme-Lien de 29 ans dans 11 versions légèrement différentes. Aucune n\'est identique. La seule constante : l\'expression. Quelque chose qu\'aucun mot n\'arrive à capturer. En dessous de toutes les représentations : le même texte court, les mêmes mots, interprétés différemment par ceux qui les lisent.',
      style: 'réaliste collection de représentations, saint de la Convergence, 11 visages pour une seule personne, texte fondateur, ambiguïté du mythe',
    },
  ],

  lore_long: `Saeved est mort il y a 41 ans. Il a été le premier Drain volontaire. Il a laissé un texte qui décrivait sa propre décision — pas une prescription.

La Convergence a fait de ce texte une doctrine. Elle en a fait un saint.

Ce qu'il aurait pensé de ce qu'on a fait de lui est inconnaissable. Son ombre pèse sur tous les personnages de l'arc — croyants, critiques, et ceux qui décident encore.`,
};

export default saeved;
