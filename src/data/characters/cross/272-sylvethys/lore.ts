import type { PersonnageLoreComplet } from '../../../lore-types';

const sylvethys: PersonnageLoreComplet = {
  id: 272,
  nom: 'Sylvethys',
  element: 'Fée',
  element2: 'Eau',
  espece: 'Hommes-Liens',
  region: 'Thalassyr',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Moyenne, toujours en mouvement — pas nerveuse, itinérante. Son corps a l\'aisance de quelqu\'un qui est rarement au même endroit deux jours de suite.',
    peau: 'Légèrement dorée par les routes, reflets aquatiques Eau aux poignets. La Fée secondaire ajoute une légère luminosité qui fluctue selon son niveau d\'attention.',
    yeux: 'Bleu-vert changeant selon la lumière, avec une qualité d\'attention directe — elle regarde les gens pour les voir, pas pour les analyser.',
    vetements: 'Tenue de guérisseuse de route, pratique et réparable. Elle a un sac de matériel compact dont la taille n\'a pas changé depuis 8 ans — elle a appris exactement ce qu\'il faut.',
    signes_particuliers: 'Ses mains s\'orientent vers la source d\'une détresse élémentaire avant qu\'elle l\'ait identifiée consciemment — réflexe de 8 ans de pratique.',
  },

  psychologie: {
    dominante: 'Présence totale dans l\'instant. Elle soigne ce qui est devant elle avec tout ce qu\'elle a. Elle n\'appartient pas à un camp. Cette neutralité est un choix actif.',
    mecanisme_de_defense: 'L\'itinérance comme protection. Elle ne reste jamais assez longtemps pour être recrutée, engagée, utilisée par qui que ce soit.',
    contradiction_interne: 'Elle a traité quelqu\'un dont la résonance élémentaire était anormalement dense — elle le sait, elle l\'a dit à quelqu\'un (Thyskara), et cette information est maintenant en mouvement. Sa neutralité a eu des conséquences qu\'elle n\'a pas calculées.',
    rapport_aux_autres: 'Shiveth (232) est dans le même réseau de guérisseurs itinérants — ils se croisent rarement mais se font confiance immédiatement quand ils se croisent. C\'est une forme de famille professionnelle.',
    vision_du_monde: 'La maladie et la blessure n\'ont pas de faction. Elle non plus.',
  },

  histoire: {
    enfance: {
      titre: 'L\'enfant de la côte',
      contenu: 'Née à Thalassyr d\'une famille de pêcheurs. L\'élément Eau était naturel dans ce contexte. L\'élément Fée secondaire — apparu à 14 ans — lui avait donné une sensibilité aux états élémentaires des gens autour d\'elle qui dépassait la médecine ordinaire.',
    },
    arrivee: {
      titre: 'La décision itinérante',
      contenu: 'À 26 ans, après une formation de guérisseuse dans une école côtière, elle avait refusé un poste fixe. Elle avait vu les guérisseurs dans des structures fixes se transformer en fonctionnaires — des gens qui soignaient encore mais dont la capacité à voir les situations atypiques s\'était érodée. Elle avait choisi la route.',
    },
    premier_conflit: {
      titre: 'La neutralité contestée',
      contenu: 'Plusieurs groupes l\'avaient approchée au fil des ans pour la recruter — Dissidentes, Empire, Convergence. Chaque fois elle avait refusé. Chaque refus avait provoqué de la pression, parfois de la menace. Elle avait appris à partir avant que la pression devienne intenable.',
    },
    revelation: {
      titre: 'Le patient à résonance dense',
      contenu: 'Il y a 6 mois, un jeune homme s\'était présenté dans un port de Thalassyr — épuisé, en surcharge élémentaire manifeste. Elle avait travaillé 3 heures sur lui. Sa résonance était quelque chose qu\'elle n\'avait jamais vu — pas pathologique, saturée. Comme si trop de quelque chose cherchait à s\'exprimer dans un espace trop petit. Elle l\'avait stabilisé. Il était reparti sans donner son nom.',
    },
    etat_actuel: {
      titre: 'La mention à Thyskara',
      contenu: 'Quatre mois plus tard, elle avait partagé un abri une nuit avec Thyskara (262) — une jeune femme en route vers quelque chose. Thyskara avait demandé si elle avait jamais rencontré quelqu\'un avec une résonance "extraordinairement dense". Sylvethys avait dit oui, il y a 6 mois, dans un port. Elle n\'avait pas donné plus de détails. Elle avait vu quelque chose dans l\'expression de Thyskara qui lui avait dit que les détails importaient.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sylvethys_second_avatar_soin',
      titre: 'Les 3 heures de travail',
      description: 'Elle a passé 3 heures à stabiliser une surcharge élémentaire qu\'elle ne comprenait pas entièrement. Ses méthodes habituelles ne suffisaient pas — elle avait dû improviser, travailler à tâtons sur quelque chose de trop dense pour ses repères habituels. Elle avait réussi. Il était reparti stable. Si quelqu\'un lui demandait si elle pourrait le refaire, elle dirait qu\'elle aurait besoin de revoir ses notes de la session.',
      personnages_impliques: [59],
      declencheur: 'Consultation d\'un patient inconnu en surcharge',
      consequence: 'Expérience pratique avec la résonance du Second Avatar — documentation dans ses carnets',
    },
    {
      id: 'sylvethys_thyskara_mention',
      titre: 'L\'information transmise',
      description: 'Elle a mentionné le patient à Thyskara sans calculer les conséquences — une réponse honnête à une question directe. Maintenant Thyskara suit une piste qui mène au Second Avatar. Sylvethys ne sait pas ce que Thyskara lui veut. Si elle le savait, elle ne sait pas si ça aurait changé ce qu\'elle a dit.',
      personnages_impliques: [262],
      declencheur: 'Question directe sur une résonance extraordinaire',
      consequence: 'Information transmise en bonne foi — conséquences inconnues et non calculées',
    },
    {
      id: 'sylvethys_shiveth_reseau',
      titre: 'Le réseau de guérisseurs',
      description: 'Shiveth (232) est dans le même réseau informel de guérisseurs itinérants. Ils se sont croisés 3 fois en 8 ans. Chaque fois la reconnaissance est immédiate — même type de travail, même éthique de neutralité, même fatigue des recrutements. Ils ne savent pas grand-chose l\'un de l\'autre en dehors de ces croisements.',
      personnages_impliques: [232],
      declencheur: 'Appartenance au même réseau informel',
      consequence: 'Confiance professionnelle sans histoire personnelle — type de lien rare et fiable',
    },
  ],

  arcs: ['arc_second_avatar'],
  position_dans_arc: 'Témoin involontaire. Elle a soigné le Second Avatar et mentionné sa résonance à quelqu\'un qui le cherche. Ces deux actes, sans intention derrière eux, ont eu des effets dans le monde.',

  relations: [
    { id: 59, nom: 'Second Avatar', type: 'contact_nécessaire', note: 'Soigné il y a 6 mois. Résonance documentée dans ses carnets. Ne connaît pas son identité.' },
    { id: 262, nom: 'Thyskara', type: 'allié', note: 'A mentionné le patient — informée sans calculer les conséquences.' },
    { id: 232, nom: 'Shiveth', type: 'allié', note: 'Même réseau de guérisseurs itinérants — confiance immédiate lors des croisements rares.' },
  ],

  combat: {
    sorts: [
      'Soin de Fée (Fée) — accélération de régénération naturelle par harmonisation fée-biologique',
      'Purification d\'Eau (Eau) — neutralisation des toxines et agents pathogènes via flux aquatique contrôlé',
      'Lecture de résonance (Fée) — perception de l\'état élémentaire d\'un sujet — diagnostic précis sans instrumentation',
    ],
  },

  image_prompts: [
    {
      id: 'sylvethys_route',
      description: 'Sylvethys sur une route côtière, sac de guérisseuse sur l\'épaule, regardant la mer. Elle n\'est pas en route vers quelque chose de précis — elle suit les besoins. Son expression est celle de quelqu\'un en paix avec l\'incertitude de la destination.',
      style: 'réaliste humain-fée, lumière côtière de Thalassyr, tons bleu-vert et doré, légèreté du mouvement',
    },
  ],

  lore_long: `Sylvethys ne sait pas qui elle a soigné.

3 heures de travail sur une résonance qu'elle ne savait pas nommer. Elle a des notes de la session — des notes techniques, précises, avec les méthodes qui avaient fonctionné et celles qui n'avaient pas fonctionné. La résonance était saturée d'une façon qu'elle n'avait jamais vue : pas pathologique, pas instable — trop dense pour les repères habituels, comme si la capacité de quelqu'un dépassait l'espace dans lequel elle était supposée tenir.

Elle avait réussi à stabiliser. Il était reparti stable et sans donner son nom.

Elle avait mentionné ça à Thyskara 4 mois plus tard parce que Thyskara avait posé une question directe et qu'elle répond honnêtement aux questions directes. Elle avait vu quelque chose dans l'expression de Thyskara — une reconnaissance, un espoir, quelque chose de suffisamment fort pour qu'elle retienne les détails qu'elle avait donnés.

Elle ne sait pas si donner ces détails était juste. Elle ne sait pas ce que Thyskara va en faire. Elle sait que Thyskara cherchait quelque chose et qu'elle lui a peut-être donné une direction.

Sa neutralité ne la protège pas contre les conséquences d'une information transmise.

Shiveth fait le même travail sur d'autres routes. Quand ils se croisent — rarement — ils n'ont pas besoin de beaucoup de mots. Le réseau qu'ils partagent n'a pas de nom officiel, pas de structures, pas de hiérarchie. C'est juste des gens qui soignent sans s'arrêter assez longtemps pour appartenir à quelque chose.

C'est suffisant pour elle.`,
};

export default sylvethys;
