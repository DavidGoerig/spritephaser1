import type { PersonnageLoreComplet } from '../../../lore-types';

const vashera: PersonnageLoreComplet = {
  id: 266,
  nom: 'Vashera',
  element: 'Normal',
  element2: 'Psy',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Moyenne, présence corporelle ferme — elle occupe l\'espace sans l\'envahir, ce qui est utile quand ses patients le font.',
    peau: 'Dorée, sans marque élémentaire notable — l\'élément Psy ne se manifeste pas visiblement.',
    yeux: 'Brun doré, avec une qualité d\'attention qu\'elle maintient délibérément — elle a appris à regarder de façon à ce que les gens se sentent vus sans se sentir analysés.',
    vetements: 'Tenue simple, sans insigne ni identification de faction. Elle ne porte rien qui puisse signaler quelque chose sur elle à un regard rapide.',
    signes_particuliers: 'Ses mains sont toujours légèrement tièdes — caractéristique Psy faible, chaleur de contact qui n\'a rien d\'élémentaire mais que ses patients trouvent apaisante.',
  },

  psychologie: {
    dominante: 'Soin structurel. Elle aide les jeunes Élus à survivre à des capacités qui les dépassent — pas par vocation romantique, par conviction que si personne ne fait ça, des gens meurent d\'eux-mêmes.',
    mecanisme_de_defense: 'La confiance dans les protocoles Dissidentes. "Extraction réussie" signifie que quelqu\'un est en sécurité. Elle avait accepté ça comme donnée. Cette donnée est en train de se fissurer.',
    contradiction_interne: 'Elle travaille pour les Dissidentes parce qu\'ils protègent ce que l\'Empire cherche à contrôler. Et une de ses patientes a disparu la semaine dernière avec une réponse qui ne lui suffit plus.',
    rapport_aux_autres: 'Sarath l\'a recrutée avant de mourir — elle lui faisait confiance. Sa mort a laissé une absence de référence qu\'elle n\'a pas encore comblée. Les nouvelles réponses viennent de gens qu\'elle connaît moins bien.',
    vision_du_monde: 'Les systèmes échouent les individus. C\'est pour ça qu\'elle fait ce qu\'elle fait — parce que les systèmes, même les bons, ne peuvent pas voir toutes les personnes. Si son système actuel lui dit quelque chose qu\'elle ne croit pas, le problème est peut-être dans le système.',
  },

  histoire: {
    enfance: {
      titre: 'La fille qui comprenait',
      contenu: 'Née dans une famille de médecins à l\'Isthme. Son élément Psy se manifestait comme une empathie amplifiée — elle ressentait les états émotionnels des gens proches avant qu\'ils les expriment. À 12 ans c\'était accablant. À 22 ans elle en avait fait un outil.',
    },
    arrivee: {
      titre: 'Sarath et le réseau',
      contenu: 'Recrutée à 25 ans par Sarath (61) — il cherchait quelqu\'un pour travailler avec les jeunes Élus instables que le réseau Dissident sortait des systèmes impériaux. "Instabilité" signifiait des gens dont les capacités élémentaires dépassaient leur capacité de régulation, souvent des adolescents. Elle avait dit oui.',
    },
    premier_conflit: {
      titre: 'Le Second Avatar sans le savoir',
      contenu: 'Pendant 6 mois, elle avait travaillé avec un jeune homme dont Sarath lui avait simplement dit qu\'il avait "une résonance complexe et une histoire difficile". Elle ne savait pas qui il était. Elle savait que son élément était quelque chose qu\'elle n\'avait jamais vu — pas instable, saturé. Elle avait travaillé sur la régulation de la saturation. Puis il était parti.',
    },
    revelation: {
      titre: 'La patiente disparue',
      contenu: 'La semaine dernière, une patiente — Thyrekavel (275), 22 ans, une des 39 de Virex — avait été "extraite". Le contact Dissident qui l\'avait informée avait dit "extraction réussie, elle est en sécurité". Vashera avait posé une question de suivi sur les conditions. La réponse avait été vague. Elle avait posé une deuxième question. La réponse avait été encore plus vague. Elle n\'y croit pas.',
    },
    etat_actuel: {
      titre: 'La rupture qui commence',
      contenu: 'Elle a 4 autres patients actifs. Elle continue son travail. Et elle cherche à comprendre ce qui s\'est passé avec Thyrekavel — via des canaux que ses contacts Dissidentes ne savent pas qu\'elle utilise. Sarath lui avait dit un jour que si une organisation te demande de faire confiance sans expliquer, c\'est une bonne organisation si elle peut expliquer quand c\'est vraiment important. Elle va tester ça.',
    },
  },

  evenements_narratifs: [
    {
      id: 'vashera_second_avatar_6_mois',
      titre: 'Les 6 mois avec le Second Avatar',
      description: 'Elle avait travaillé avec lui pendant 6 mois. Elle avait appris à lire une résonance élémentaire saturée, à travailler avec une densité qu\'elle ne comprenait pas entièrement, à construire des techniques de régulation pour quelque chose qui dépassait ses outils habituels. Elle n\'avait pas su que c\'était le Second Avatar. Si elle le savait maintenant, elle comprendrait pourquoi le travail avait été si différent.',
      personnages_impliques: [59],
      declencheur: 'Mission de soutien psychologique pour un sujet non identifié',
      consequence: 'Expérience pratique avec la résonance du Second Avatar — outil potentiel si elle le retrouve',
    },
    {
      id: 'vashera_thyrekavel_disparue',
      titre: 'Thyrekavel',
      description: 'Thyrekavel (275) avait 22 ans, une multi-résonance faible inhabituellement stable, et une façon de poser des questions qui montrait qu\'elle comprenait quelque chose que les gens autour d\'elle ne comprenaient pas. Vashera l\'aimait comme patiente — pas au sens personnel, au sens qu\'elle lui apprenait des choses sur son propre travail. Elle a disparu la semaine dernière. "Extraction réussie" est une réponse insuffisante.',
      personnages_impliques: [275],
      declencheur: 'Disparition d\'une patiente avec réponse inadequate du réseau',
      consequence: 'Rupture de confiance en cours — Vashera commence à chercher indépendamment',
    },
    {
      id: 'vashera_thyven_orientation',
      titre: 'L\'orientation vers Virex',
      description: 'Thyven (62) l\'avait orientée vers Virex — il avait dit qu\'il y avait là-bas des jeunes Élus qui avaient besoin de quelqu\'un comme elle. Elle n\'avait pas demandé comment il savait. Maintenant elle se demande si Thyven sait ce qu\'est devenu Thyrekavel. Thyven a une façon de savoir des choses sans les dire directement.',
      personnages_impliques: [62],
      declencheur: 'Orientation initiale vers Virex',
      consequence: 'Contact potentiel pour l\'enquête indépendante de Vashera',
    },
  ],

  arcs: ['arc_second_avatar'],
  position_dans_arc: 'En rupture naissante. Elle a travaillé 6 mois avec le Second Avatar sans le savoir. Elle cherche maintenant une vérité que son réseau lui cache. Ces deux fils peuvent se rejoindre.',

  relations: [
    { id: 59, nom: 'Second Avatar', type: 'disciple', note: 'A travaillé avec lui 6 mois sans savoir qui il était. Expérience unique avec sa résonance.' },
    { id: 275, nom: 'Thyrekavel', type: 'disciple', note: 'Patiente disparue la semaine dernière. "Extraction réussie" — elle n\'y croit pas.' },
    { id: 61, nom: 'Sarath', type: 'fantôme', note: 'L\'a recrutée avant de mourir. Sa mort a laissé une absence de référence.' },
    { id: 62, nom: 'Thyven', type: 'contact_nécessaire', note: 'L\'a orientée vers Virex — sait peut-être ce qu\'est devenu Thyrekavel.' },
  ],

  combat: {
    sorts: [
      'Lecture empathique (Psy) — perception de l\'état émotionnel et des tensions élémentaires d\'un sujet',
      'Régulation de saturation (Psy) — technique de stabilisation d\'une surcharge élémentaire par accompagnement — nécessite le consentement du sujet',
      'Barrière intérieure (Normal) — isolation de l\'état émotionnel personnel pour travailler dans des conditions de surcharge externe',
    ],
  },

  image_prompts: [
    {
      id: 'vashera_session',
      description: 'Vashera dans une salle de travail simple, en face d\'un siège vide. Sur une table, les notes de la dernière session avec Thyrekavel. Son expression est celle de quelqu\'un qui a reçu une réponse suffisante et qui ne la croit pas.',
      style: 'réaliste humain, lumière douce, salle de travail sobre, tons neutres et dorés',
    },
  ],

  lore_long: `"Extraction réussie, elle est en sécurité."

Vashera a posé une deuxième question. La réponse était plus vague. Elle a posé une troisième question. On lui a dit que les détails opérationnels ne pouvaient pas être partagés pour des raisons de sécurité.

Sarath lui avait dit quelque chose une fois — pas comme une règle, comme une façon de penser : une bonne organisation peut expliquer quand c'est vraiment important. Les raisons de sécurité, ça cache parfois de la sécurité réelle. Ça cache parfois autre chose.

Thyrekavel avait 22 ans et une multi-résonance faible qui n'aurait jamais fait d'elle un Avatar, une arme ou une cible particulièrement précieuse. Ce n'est pas le profil d'une extraction prioritaire. Ce n'est pas le profil de quelqu'un dont l'extraction déclenche une réponse vague.

Elle travaille avec le Second Avatar pendant 6 mois sans savoir qui il était. Ce qu'elle sait : sa résonance était saturée d'une façon qu'elle n'avait jamais vue, ses techniques habituelles de régulation ne fonctionnaient que partiellement, elle avait dû en développer de nouvelles en temps réel, et quand il était parti elle avait l'impression d'avoir effleuré quelque chose qu'elle ne pouvait pas nommer. Elle ne sait pas que c'était lui. Elle ne sait pas que ce qu'elle a appris pendant ces 6 mois est peut-être la seule expérience pratique qui existe sur comment stabiliser une saturation de cet ordre.

Elle cherche Thyrekavel par des canaux que ses contacts Dissidentes ne savent pas qu'elle utilise.

Elle ne sait pas encore où ça va la mener. Elle sait que quelque chose ne va pas. C'est suffisant pour commencer.`,
};

export default vashera;
