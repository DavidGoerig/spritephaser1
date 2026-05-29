import type { PersonnageLoreComplet } from '../../../lore-types';

const lysara: PersonnageLoreComplet = {
  id: 14,
  nom: 'Lysara',
  element: 'Eau',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Néréide de 79 ans — vieille mais pas fragile. Elle porte sa vieillesse comme quelqu\'un qui a décidé qu\'elle était une information, pas une limitation. Ses mouvements sont économiques, précis.',
    peau: 'Bleutée pâle Néréide avec des reflets irisés plus marqués que la moyenne — l\'exposition aux courants profonds pendant des décennies. Ses mains ont la texture de quelqu\'un qui a passé sa vie dans l\'eau.',
    yeux: 'Bleu très profond avec une luminescence aquatique discrète — ses yeux semblent légèrement humides en permanence, même hors de l\'eau. Quand elle regarde quelque chose, c\'est avec toute son attention.',
    vetements: 'Robes de tissus légers qui sèchent rapidement — une nécessité pratique devenue esthétique. Elle porte un petit flacon en verre scellé autour du cou, toujours. C\'est là le fragment du vent naturel.',
    signes_particuliers: 'Elle touche parfois le flacon à son cou — pas souvent, jamais en public, mais ses doigts y reviennent quand elle pense à Lyraen. Les personnes qui l\'observent assez longtemps remarquent le geste.',
  },

  psychologie: {
    dominante: 'Témoin du Silence des Vents et apprentie de Lyraen — elle était présente quand le vent naturel de Thalassyr a été remplacé. Elle a capturé un fragment dans un flacon. Elle garde ce fragment depuis 64 ans comme preuve que quelque chose a été perdu.',
    mecanisme_de_defense: 'La mémoire précise comme ancre. Elle documente tout ce dont elle se souvient du vent naturel — sa texture, sa température, ses variations selon les saisons. Cette documentation est inutile à quiconque maintenant. Elle sait que ce sera différent plus tard.',
    contradiction_interne: 'Elle a le fragment mais ne sait pas quoi en faire. Le rendre à Vel (17) qui cherche? L\'archiver avec Thariel (18)? Le garder comme témoin personnel? Elle a repoussé cette décision depuis 64 ans. Elle n\'a plus autant de temps qu\'avant pour continuer à repousser.',
    rapport_aux_autres: 'Vel (17) est son contemporain — il cherche qui a tué Lyraen depuis 64 ans. Elle cherche à préserver ce que Lyraen représentait. Leurs quêtes sont parallèles. Selara (96) est sa dernière apprentie qui se souvient encore du vent naturel — ensemble.',
    vision_du_monde: 'Ce qui a disparu peut laisser des traces si on choisit de les garder. Elle a choisi. Le monde d\'après le Silence des Vents est fonctionnel — elle ne nie pas ça. Mais fonctionnel et vrai ne sont pas la même chose.',
  },

  histoire: {
    enfance: {
      titre: 'L\'apprentissage de Lyraen',
      contenu: 'À 15 ans, elle avait commencé à apprendre la magie des courants aquatiques sous la maîtresse Lyraen — une Néréide dont la spécialité était la compréhension des flux entre eau et vent. Ces deux éléments se répondaient dans les courants de Thalassyr. Lyraen lui avait appris à les entendre ensemble.',
    },
    arrivee: {
      titre: 'Le Silence des Vents',
      contenu: 'À 15 ans lors du Silence des Vents, elle avait senti le changement avant de le comprendre — une qualité différente dans les courants d\'eau, comme si quelque chose manquait dans leur interlocuteur aérien. Elle avait capturé de l\'air naturel dans un flacon de verre scellé pendant les dernières minutes du vent d\'origine. Personne ne lui avait demandé pourquoi — Lyraen venait de disparaître.',
    },
    premier_conflit: {
      titre: 'La mort de Lyraen',
      contenu: 'Lyraen était morte pendant le Silence des Vents. Les circonstances officielles : épuisement lors de la crise. Vel (17) pensait alors et pense encore que ce n\'était pas la version complète. Lysara ne savait pas ce qu\'elle pensait — elle sait ce qu\'elle a vu. Ce qu\'elle a vu n\'est pas identique aux circonstances officielles.',
    },
    revelation: {
      titre: 'Les 64 ans de conservation',
      contenu: 'Pendant 64 ans, elle avait maintenu le flacon intact — une prouesse technique qui requérait une surveillance élémentaire régulière. Elle avait refusé plusieurs offres de le confier à des archives. Elle avait refusé plusieurs offres de le "analyser" par des chercheurs qui voulaient comprendre sa composition. Elle avait dit non systématiquement. Elle n\'était pas certaine d\'avoir eu raison.',
    },
    etat_actuel: {
      titre: 'Le temps qui se compte',
      contenu: 'À 79 ans, elle commence à penser à ce que Vel (17) et Selara (96) feront du flacon quand elle ne pourra plus le maintenir. Elle n\'a pas encore eu cette conversation. Elle sait qu\'elle doit l\'avoir. La décision de conserver était plus facile que la décision de transmettre.',
    },
  },

  evenements_narratifs: [
    {
      id: 'lysara_flacon',
      titre: 'La transmission',
      description: 'Lysara doit décider à qui transmettre le flacon. Vel (17) a passé 64 ans à chercher la vérité sur Lyraen — le flacon est une preuve de ce qui existait avant. Thariel (18) archive tout — le flacon serait en sécurité mais deviendrait une donnée parmi d\'autres. Selara (96) est sa continuité la plus proche. Chaque option a un coût.',
      personnages_impliques: [17, 18],
      declencheur: 'Conscience de l\'âge et de la fragilité de la conservation continue',
      consequence: 'Décision imminente sur la transmission du seul fragment de vent naturel conservé',
    },
    {
      id: 'lysara_vel',
      titre: 'Ce qu\'elle a vu',
      description: 'Elle a vu quelque chose pendant la mort de Lyraen que la version officielle ne mentionne pas. Vel (17) cherche cette information depuis 64 ans. Elle ne lui a jamais dit directement — elle lui a donné des fragments sur 64 ans, assez pour qu\'il continue à chercher mais jamais assez pour qu\'il cesse. Ce n\'était peut-être pas juste.',
      personnages_impliques: [17, 96],
      declencheur: 'La décision de transmettre le flacon force aussi la décision de transmettre ce qu\'elle sait',
      consequence: 'Vel obtient enfin l\'information complète — ou Lysara emporte le secret avec elle',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Apprentie de Lyraen présente lors du Silence des Vents. Garde le seul fragment de vent naturel conservé depuis 64 ans. Possède une information sur la mort de Lyraen qu\'elle n\'a jamais transmise complètement à Vel (17).',

  relations: [
    { id: 17, nom: 'Vel', type: 'allié', note: 'Cherche qui a tué Lyraen depuis 64 ans. Elle lui a donné des fragments d\'information — jamais tout.' },
    { id: 18, nom: 'Thariel', type: 'contact', note: 'Archiviste non filtrée. Destinataire potentiel du flacon.' },
    { id: 96, nom: 'Selara', type: 'allié', note: 'Dernière apprentie qui se souvient du vent naturel avec elle. Continuité possible.' },
  ],

  combat: {
    sorts: [
      'Flux mémoriel (Eau) — vague lente et précise qui transporte des objets fragiles — transport sans contact',
      'Sceau de conservation (Eau) — renforcement d\'un contenant — maintient l\'intégrité de ce qu\'il contient',
      'Courant de rappel (Eau) — rappel d\'objets ou de personnes dans un flux — contrôle de distance',
    ],
  },

  image_prompts: [
    {
      id: 'lysara_flacon',
      description: 'Lysara à Thalassyr — une vieille Néréide de 79 ans debout au bord d\'un quai, tenant un petit flacon de verre scellé dans ses deux mains. À l\'intérieur du flacon, quelque chose d\'à peine visible — une légère agitation, comme de l\'air capturé qui n\'a nulle part où aller. Son expression est de concentration et de quelque chose d\'autre — une décision qui approche.',
      style: 'réaliste vieille Néréide, Thalassyr, flacon de vent naturel, quai, poids d\'une décision longtemps différée',
    },
  ],

  lore_long: `Lysara avait 15 ans quand elle a capturé de l'air naturel dans un flacon pendant les dernières minutes du vent originel de Thalassyr. Elle a 79 ans. Le flacon est toujours intact.

Elle sait quelque chose sur la mort de Lyraen que la version officielle ne dit pas. Vel (17) cherche cette information depuis 64 ans. Elle lui a donné des fragments — jamais tout.

À 79 ans, les deux décisions convergent : qui reçoit le flacon, et qui reçoit ce qu'elle sait.`,
};

export default lysara;
