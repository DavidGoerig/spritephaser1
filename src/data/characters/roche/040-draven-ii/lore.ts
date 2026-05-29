import type { PersonnageLoreComplet } from '../../../lore-types';

const dravenII: PersonnageLoreComplet = {
  id: 40,
  nom: 'Draven II',
  element: 'Roche',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Chthonien de 51 ans — la corpulence d\'un représentant qui passe ses journées en réunions plutôt qu\'en explorations souterraines. Il est large, massif, avec une présence physique qui dit son espèce plutôt que son travail. Il a l\'allure de quelqu\'un qui devrait être dans les mines et qui a décidé de rester dans les salles de décision.',
    peau: 'Gris foncé Chthonien avec des veines de roche visibles aux avant-bras — un héritage élémentaire prononcé. Sa peau est plus dure que la moyenne. Il met cette dureté physique en avant dans les réunions : ça dit l\'espèce, la solidité, la durabilité.',
    yeux: 'Noirs profonds avec une qualité de poids — ses yeux donnent l\'impression d\'appuyer sur ce qu\'ils regardent. C\'est une qualité héréditaire de la lignée de Draven, selon les récits. Il ne sait pas si c\'est vrai ou si les récits ont simplement façonné ce que les gens voient quand ils le regardent.',
    vetements: 'Tenue représentative de la Confédération Ormn-Dur — sombres, formels, avec les insignes de sa fonction. Il porte une chaîne de représentation qui est passée de père en fils depuis le fondateur Draven. Il la porte mais ne l\'aime pas.',
    signes_particuliers: 'Il demande souvent "pourquoi" avant de répondre à une requête — pas pour retarder, mais parce que comprendre la motivation lui permet de répondre différemment. Cette habitude agace certains. Il ne s\'arrête pas pour autant.',
  },

  psychologie: {
    dominante: 'Descendant de Draven, le fondateur de l\'accord initial avec la Fosse Interdite — un accord que son ancêtre a négocié en sacrifiant quelque chose que la famille ne mentionne plus. Draven II vit avec une culpabilité héréditaire dont il ne connaît pas entièrement les raisons. Il sait que l\'acte fondateur était moralement ambigu. Il ne sait pas à quel point.',
    mecanisme_de_defense: 'La gouvernance comme réparation. Il est un meilleur représentant que son ancêtre ne l\'était — plus transparent, plus juste, plus attentif aux individus. Il croit que cette supériorité morale répare quelque chose. Elle ne répare rien.',
    contradiction_interne: 'Il maintient un système de contribution qu\'il croit juste parce qu\'il s\'est amélioré depuis l\'époque de son ancêtre. Ce système est peut-être la forme même de ce que son ancêtre avait sacrifié — une structure qui prend aux individus ce dont la collectivité a besoin. La culpabilité héréditaire qu\'il porte est peut-être pour ça.',
    rapport_aux_autres: 'Karm (41) est l\'archiviste qui étudie les termes de l\'accord original. Draven II l\'a autorisé à accéder aux archives — pas parce qu\'il croit que Karm trouvera quelque chose de problématique, mais parce que refuser l\'accès aurait semblé cacher quelque chose. Il commence à regretter cette décision. Thyss (42) est son directeur de contribution — un homme qu\'il respecte pour sa sincérité et qu\'il surveille pour ses excès de foi dans le système.',
    vision_du_monde: 'Le système de contribution a sauvé Kar-Dum. Le fait qu\'il soit imparfait ne signifie pas qu\'il doit être abandonné — il doit être amélioré. La culpabilité de sa lignée est réelle, mais elle ne justifie pas de détruire ce que la lignée a aussi construit.',
  },

  histoire: {
    enfance: {
      titre: 'La chaîne de Draven',
      contenu: 'À 7 ans, son père lui avait passé la chaîne de représentation et lui avait dit que la famille portait une dette envers Kar-Dum — pas envers les dirigeants, envers la cité elle-même. Il avait demandé pourquoi. Son père avait répondu que quand il serait assez vieux pour comprendre, il le comprendrait seul. Il avait 51 ans et il cherchait encore.',
    },
    arrivee: {
      titre: 'L\'élection',
      contenu: 'À 32 ans, il avait été élu représentant de la Confédération Ormn-Dur — la sixième génération de sa lignée à occuper ce poste. Le processus électoral était réel. Il avait gagné sur son propre mérite, pas seulement son nom. Il était néanmoins conscient que le nom avait ouvert des portes que ses rivaux n\'avaient pas eu.',
    },
    premier_conflit: {
      titre: 'L\'accès de Karm',
      contenu: 'À 44 ans, Karm (41) avait demandé accès aux archives privées de la famille Draven — des documents qui n\'avaient jamais été soumis aux archives officielles. Il avait hésité. Il avait finalement accordé l\'accès. Karm avait passé 3 semaines dans ces archives. Quand il en était sorti, son expression avait changé. Il n\'avait pas dit ce qu\'il avait trouvé.',
    },
    revelation: {
      titre: 'La réduction de contribution',
      contenu: 'À 49 ans, Thyss (42) l\'avait convaincu de réduire la contribution individuelle de 12%. Draven II avait accepté parce que les données économiques supportaient la décision et parce que c\'était la première réduction depuis 15 ans. Il avait annoncé ça comme une victoire. Depuis, il a des doutes — pas sur la réduction elle-même, mais sur si 12% était suffisant ou si c\'était une amélioration cosmétique d\'un système fondamentalement problématique.',
    },
    etat_actuel: {
      titre: 'Ce que Karm sait',
      contenu: 'Karm est "terrified" par ce qu\'il a trouvé dans les archives. Draven II ne sait pas encore ce que c\'est — Karm ne lui a pas encore dit. Mais les micro-fractures dans la Fosse que personne n\'a officiellement rapportées et la nervosité de Karm convergent vers quelque chose que Draven II commence à pressentir sans vouloir articuler.',
    },
  },

  evenements_narratifs: [
    {
      id: 'draven_karm',
      titre: 'Ce que Karm a trouvé',
      description: 'Karm (41) a reconstruit les termes de l\'accord de Valyx (38) et est "terrified" par ce qu\'il a trouvé. Il n\'a pas encore dit à Draven II ce que c\'était. Draven II a autorisé l\'accès aux archives privées de sa famille. Ce que Karm a trouvé dans ces archives concerne peut-être l\'acte fondateur de sa lignée — ce que son ancêtre a sacrifié pour l\'accord initial.',
      personnages_impliques: [41, 42],
      declencheur: 'Karm décidant de révéler à Draven II ce qu\'il a trouvé',
      consequence: 'Draven II apprenant la vraie nature de la culpabilité héréditaire de sa famille — et ce que ça implique pour le système de contribution',
    },
    {
      id: 'draven_thyss',
      titre: 'La contribution insuffisante',
      description: 'Thyss (42) a convaincu Draven II que -12% était une réforme suffisante. Karm pense que la contribution est structurellement liée à l\'accord de Valyx — que sa réduction perturbe quelque chose dans les termes. Si Karm a raison, la réforme de Thyss a accéléré ce que Drevaya (39) voit dans les micro-fractures.',
      personnages_impliques: [42, 39],
      declencheur: 'Connexion entre la réduction de contribution et l\'accélération des micro-fractures',
      consequence: 'La réforme de Thyss identifiée comme facteur aggravant dans la situation de la Fosse',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Descendant de Draven, représentant de la Confédération Ormn-Dur. Porte la culpabilité héréditaire d\'un acte fondateur dont il ne connaît pas les détails complets. A donné à Karm (41) accès aux archives privées. La réforme de contribution de Thyss (42) converge avec ce que Karm a découvert.',

  relations: [
    { id: 41, nom: 'Karm', type: 'contact', note: 'A accès aux archives privées de la famille. Sait quelque chose qu\'il n\'a pas encore dit.' },
    { id: 42, nom: 'Thyss', type: 'allié', note: 'Directeur de contribution sincère. A convaincu Draven II pour la réduction de 12%. Surveillance croissante.' },
    { id: 39, nom: 'Drevaya', type: 'contact', note: 'Gardienne de zone. Draven II ne sait pas encore qu\'elle voit des micro-fractures.' },
  ],

  combat: {
    sorts: [
      'Mur de roche (Roche) — barrière souterraine — protection structurelle d\'une zone',
      'Frappe de terrain (Roche) — impact qui provoque des fissures dans le sol — désorientation et obstacles',
      'Résistance minérale (Roche) — durcissement de la peau — réduction des dommages physiques',
    ],
  },

  image_prompts: [
    {
      id: 'draven_salle',
      description: 'Draven II dans une salle de réunion de Kar-Dum — un Chthonien de 51 ans assis à une table avec des documents devant lui, la chaîne de représentation visible autour du cou. Il regarde quelque chose hors champ avec l\'expression de quelqu\'un qui commence à comprendre quelque chose qu\'il ne voulait pas comprendre.',
      style: 'réaliste Chthonien représentant, salle de réunion Kar-Dum, chaîne de représentation, culpabilité héréditaire, compréhension progressive',
    },
  ],

  lore_long: `Draven II est le descendant du fondateur Draven qui a négocié l'accord initial avec la Fosse Interdite. Il porte une culpabilité héréditaire dont il ne connaît pas encore les détails complets.

Il a donné à Karm (41) accès aux archives privées de sa famille. Karm est sorti de ces archives "terrified" et n'a pas encore dit ce qu'il a trouvé.

La réduction de contribution de 12% qu'il a approuvée avec Thyss (42) pourrait avoir accéléré ce que Drevaya (39) observe dans les micro-fractures de la Fosse.`,
};

export default dravenII;
