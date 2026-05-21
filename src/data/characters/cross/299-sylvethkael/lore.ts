import type { PersonnageLoreComplet } from '../../../lore-types';

const sylvethkael: PersonnageLoreComplet = {
  id: 299,
  nom: 'Sylvethkael',
  element: 'Plante',
  element2: 'Fée',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Conservateurs',

  apparence: {
    taille_corpulence: 'Moyenne avec une façon d\'occuper l\'espace qui varie selon si elle chante ou non. En chantant, elle semble plus grande.',
    peau: 'Brun doré Sylvan avec une légère luminosité aux gorge et aux mains — la Fée secondaire qui se concentre dans ses instruments de chant.',
    yeux: 'Vert chaud, fermés la plupart du temps quand elle chante. Ouverts, ils ont une qualité d\'attention qui cherche.',
    vetements: 'Robe Sylvan simple avec des ornements végétaux — des feuilles et fleurs entrelacées dans les manches. Ces ornements changent selon les saisons et les arbres qu\'elle visite.',
    signes_particuliers: 'Quand elle chante à proximité d\'un arbre-mémoire, les feuilles bougent légèrement même sans vent. Elle dit que c\'est l\'arbre qui écoute.',
  },

  psychologie: {
    dominante: 'Restauration par la transmission. Les chants perdus de Sylvera sont dans la mémoire collective fragmentée. Elle les reconstruit, les transmet aux arbres. Si ça fonctionne, les arbres les portent à leur tour.',
    mecanisme_de_defense: 'La continuité de la pratique. Si ça n\'a pas fonctionné aujourd\'hui, ça peut fonctionner demain. Elle ne s\'arrête pas.',
    contradiction_interne: 'Elle enseigne les chants aux arbres. Elle ne sait pas avec certitude si les arbres les enregistrent ou si elle chante dans le vide avec une foi que les réactions des feuilles renforcent. La distinction entre "ça fonctionne" et "je veux que ça fonctionne" lui résiste.',
    rapport_aux_autres: 'Sylketh (116) lui a transmis des fragments de chants-mémoire qu\'il collecte dans ses routes. Sylvae (31) soutient son travail avec la prudence de quelqu\'un qui a appris à ne pas être certain des résultats avant qu\'ils soient prouvés.',
    vision_du_monde: 'Les arbres-mémoire ont été vidés par la Faim des Racines. Les chants qu\'ils portaient peuvent peut-être être retransmis — si on les chante dans les bonnes conditions, avec le bon élément. Elle est peut-être le seul vecteur possible.',
  },

  histoire: {
    enfance: {
      titre: 'Les chants de la famille',
      contenu: 'Née dans une famille qui portait une tradition de chant sylvan — des chants qui aidaient les plantes à pousser, des chants de soin, des chants de mémoire. La Fée secondaire lui avait donné une résonance dans le chant que les autres membres de sa famille n\'avaient pas. Les arbres autour de chez elle avaient commencé à répondre à 15 ans.',
    },
    arrivee: {
      titre: 'La théorie de Sylvae',
      contenu: 'À 23 ans, Sylvae lui avait exposé une théorie : les chants-mémoire sylvans ancienes n\'étaient pas seulement des préservations culturelles — ils avaient une fonction active dans l\'entretien de la mémoire des arbres. Si les chants avaient été transmis régulièrement, les arbres auraient mieux résisté à la Faim. Elle avait commencé à tester si l\'inverse était possible.',
    },
    premier_conflit: {
      titre: 'Le premier arbre',
      contenu: 'Son premier arbre-mémoire cible — un arbre centenaire qui avait survécu à la Faim avec une mémoire partielle. Elle l\'avait chanté pendant 3 semaines de suite, deux heures par jour. Les feuilles avaient répondu. La mémoire de l\'arbre était-elle restaurée ou renforcée ? Elle n\'avait pas eu de moyen de vérifier. Elle avait continué.',
    },
    revelation: {
      titre: 'Sylketh et les fragments',
      contenu: 'Sylketh lui avait apporté des fragments de chants qu\'il avait collectés dans ses routes — des variantes régionales des mêmes chants, avec des différences qui suggéraient des strates chronologiques. En combinant ses fragments avec ceux de Sylketh, elle avait pu reconstituer des versions plus anciennes. Ces versions avaient des effets différents sur les arbres — elle le croyait.',
    },
    etat_actuel: {
      titre: 'Les 12 arbres',
      contenu: 'Elle travaille régulièrement avec 12 arbres-mémoire spécifiques dans une zone de Sylvera. Certains répondent plus clairement que d\'autres. Elle a une hypothèse sur pourquoi — les arbres qui avaient déjà eu des contacts avec des chants avant la Faim répondent différemment. Elle ne peut pas prouver cette hypothèse sans accès à des données historiques qu\'elle n\'a pas.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sylvethkael_12_arbres',
      titre: 'Les réponses différenciées',
      description: 'Ses 12 arbres de travail ont des niveaux de réponse différents. Trois répondent de façon marquée — feuilles, légère luminosité de l\'écorce, modifications de croissance mesurables. Cinq répondent modérément. Quatre ne répondent pas de façon perceptible. Elle documente. Elle ne sait pas encore si les quatre non-répondants ont un profil commun.',
      personnages_impliques: [31, 116],
      declencheur: 'Observations sur 3 ans de travail avec les mêmes arbres',
      consequence: 'Données différenciées qui pourraient révéler un pattern si interprétées',
    },
    {
      id: 'sylvethkael_orvkethyn_verification',
      titre: 'La vérification possible',
      description: 'Orvkethyn (298) porte la mémoire d\'un arbre-mémoire mort. Si les chants qu\'elle transmet aux arbres actuels correspondent aux souvenirs que l\'arbre mort avait sur la façon dont les chants lui avaient été transmis dans le passé, elle aurait une vérification indirecte que sa méthode est correcte. Elle n\'a pas encore eu cette conversation avec Orvkethyn.',
      personnages_impliques: [298],
      declencheur: 'Existence d\'Orvkethyn comme archive vivante d\'un arbre-mémoire',
      consequence: 'Vérification potentielle de sa méthode non encore réalisée',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Méthode de restauration mémorielle par le chant. Si ça fonctionne, c\'est une contribution unique à la restauration de Sylvera. Si ça ne fonctionne pas, elle est la seule à le savoir.',

  relations: [
    { id: 31, nom: 'Sylvae', type: 'mentor', note: 'A transmis la théorie initiale. Soutien prudent — ne valide pas encore les résultats mais ne les conteste pas.' },
    { id: 116, nom: 'Sylketh', type: 'allié', note: 'Source de fragments de chants anciens. Collaboration qui améliore la qualité des chants transmis.' },
    { id: 298, nom: 'Orvkethyn', type: 'contact_nécessaire', note: 'Pourrait fournir une vérification indirecte de sa méthode. Conversation non encore eue.' },
  ],

  combat: {
    sorts: [
      'Chant de croissance (Plante) — accélération végétale via vibrations sonores fée — affecte une zone plutôt qu\'une cible',
      'Résonance fée (Fée) — projection sonore qui affecte les états émotionnels — désorientation ou apaisement selon le chant',
      'Voix de forêt (combiné) — mobilisation de l\'ensemble des végétaux d\'une zone via le chant — effet de terrain large',
    ],
  },

  image_prompts: [
    {
      id: 'sylvethkael_chant',
      description: 'Sylvethkael devant un arbre-mémoire ancien, chantant, les yeux fermés. Les feuilles autour d\'elle bougent légèrement sans vent. Sa bioluminescence fée se concentre dans ses mains levées vers l\'arbre. Elle ne sait pas si l\'arbre enregistre. Elle chante quand même.',
      style: 'réaliste sylvan-fée, lumière de forêt filtrée, chant silencieux dans l\'image, connexion entre la chanteuse et l\'arbre',
    },
  ],

  lore_long: `Sylvethkael enseigne les chants perdus aux arbres-mémoire de Sylvera.

Elle ne sait pas avec certitude si les arbres les enregistrent. Les feuilles bougent quand elle chante — même sans vent. Elle appelle ça une réponse. C'est peut-être une réponse.

Sylketh lui apporte des fragments de chants de ses routes — des variantes régionales avec des strates chronologiques. En les combinant avec ses propres fragments, elle reconstitue des versions plus anciennes. Ces versions ont des effets différents sur les arbres.

Ses 12 arbres de travail ont des niveaux de réponse différents. Trois répondent clairement. Cinq modérément. Quatre ne répondent pas. Elle cherche le pattern.

Orvkethyn porte la mémoire d'un arbre mort depuis 300 ans. Si les chants qu'elle transmet correspondent aux souvenirs de l'arbre sur la façon dont les chants lui ont été transmis dans le passé, elle aurait une vérification. Elle n'a pas encore eu cette conversation.

La distinction entre "ça fonctionne" et "je veux que ça fonctionne" lui résiste. Elle continue de chanter.`,
};

export default sylvethkael;
