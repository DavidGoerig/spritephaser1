import type { PersonnageLoreComplet } from '../../../lore-types';

const orven: PersonnageLoreComplet = {
  id: 15,
  nom: 'Orven',
  element: 'Electrique',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Néréide de 71 ans — son corps dit quelqu\'un qui a travaillé avec les mains pendant des décennies mais qui n\'a plus à le faire. Les muscles sont là mais n\'ont plus l\'habitude des outils. Il vit dans la tension de ne pas savoir quoi faire de ses mains.',
    peau: 'Bleutée Néréide avec des marques d\'induction électrique anciennes aux doigts et aux avant-bras — les traces d\'un ingénieur qui a construit avec son propre élément avant de déléguer. Les nouvelles marques sont rares : il ne touche plus les systèmes lui-même.',
    yeux: 'Bleu-gris avec une qualité de surveillance des systèmes — il voit les réseaux. Quand il entre dans une pièce, il note les connexions électriques, les flux d\'énergie, les points de défaillance potentiels.',
    vetements: 'Tenue de technicien de la Confédération — fonctionnelle, propre, sans ornement. Son rang lui permettrait mieux. Il a refusé les vêtements de cérémonie depuis des années.',
    signes_particuliers: 'Il finit les phrases des autres — une habitude d\'anticipation qui vient de décennies à prévoir les défaillances avant qu\'elles arrivent. Dans les conversations techniques, c\'est utile. Dans les conversations humaines, c\'est épuisant.',
  },

  psychologie: {
    dominante: 'Prisonnier de sa propre création — les vents artificiels de Thalassyr qu\'il a conçus fonctionnent depuis 64 ans mais leur maintenance est maintenant hors de son contrôle. L\'Empire a pris la gestion. Il connaît les systèmes mieux que n\'importe qui mais n\'a plus l\'autorité d\'intervenir.',
    mecanisme_de_defense: 'Le perfectionnisme technique comme anesthésie. Tant qu\'il y a un problème à résoudre dans le réseau, il n\'a pas à penser à ce que le réseau a rendu possible politiquement.',
    contradiction_interne: 'Il a créé les vents artificiels pour sauver Thalassyr après le Silence. Ce qu\'il a créé est devenu l\'outil de contrôle de l\'information que la Confédération (et l\'Empire derrière elle) utilise pour filtrer qui sait quoi. Son acte héroïque a créé l\'infrastructure d\'un système d\'oppression.',
    rapport_aux_autres: 'Ishal (22) est son fils — il ne sait pas ce que son père a accepté comme arrangement avec l\'Empire pour maintenir le réseau. Kaeleth (86) et Thyrel (97) sont ses techniciens qui perpétuent ses systèmes sans les questionner. Shaleth (16) utilise son réseau pour filtrer l\'information.',
    vision_du_monde: 'Les systèmes fonctionnent ou ne fonctionnent pas. Ce qu\'on fait avec ce qu\'ils permettent, c\'est la responsabilité de ceux qui les utilisent. Il s\'est dit ça pendant 64 ans. Il ne le croit plus entièrement.',
  },

  histoire: {
    enfance: {
      titre: 'Le génie des courants',
      contenu: 'À 12 ans, il avait compris intuitivement que les courants électriques et les courants aquatiques de Thalassyr répondaient à des lois similaires. À 20 ans, il avait publié un traité sur cette correspondance. À 25 ans, il enseignait à l\'École des Courants de Néris.',
    },
    arrivee: {
      titre: 'La crise du Silence des Vents',
      contenu: 'À 7 ans lors du Silence des Vents, il avait vu Thalassyr perdre ses courants aériens naturels. À 19 ans, il avait commencé à travailler sur une solution — des vents artificiels créés par des champs électriques générant des mouvements d\'air contrôlés. À 25 ans, le premier corridor artificiel fonctionnait.',
    },
    premier_conflit: {
      titre: 'L\'accord avec l\'Empire',
      contenu: 'À 30 ans, pour financer l\'extension du réseau à toute la région de Thalassyr, il avait accepté des fonds impériaux. La condition : l\'Empire aurait accès aux nœuds centraux du réseau pour ses propres "besoins de communication". Il avait cru que c\'était une concession technique. Ce n\'était pas seulement une concession technique.',
    },
    revelation: {
      titre: 'Ce que le réseau permet',
      contenu: 'À 55 ans, il avait compris que Shaleth (16) utilisait son réseau pour filtrer l\'information — les flux d\'air portaient aussi les communications de Thalassyr, et qui contrôlait les flux contrôlait les communications. Il avait demandé des clarifications à la Confédération. On lui avait expliqué que le réseau fonctionnait parfaitement et que c\'était l\'essentiel.',
    },
    etat_actuel: {
      titre: 'Le réseau hors de ses mains',
      contenu: 'À 71 ans, il connaît chaque nœud du réseau qu\'il a construit mais il n\'en a plus le contrôle opérationnel. Kaeleth (86) et Thyrel (97) maintiennent les systèmes selon ses spécifications originales. Il peut observer, conseiller, mais pas intervenir sans autorisation de la Confédération. Et son fils Ishal (22) maintient les systèmes sans savoir ce que son père a accepté.',
    },
  },

  evenements_narratifs: [
    {
      id: 'orven_ishal',
      titre: 'Ce que le fils ne sait pas',
      description: 'Ishal (22) maintient certains nœuds du réseau en suivant les spécifications de son père sans avoir accès aux nœuds de contrôle centraux liés à l\'arrangement avec l\'Empire. Si Ishal découvrait l\'accord original, sa vision de son père changerait. Orven n\'a jamais trouvé le moment de lui dire.',
      personnages_impliques: [22, 86],
      declencheur: 'Proximité d\'Ishal avec les nœuds de contrôle dans le cadre de ses missions de maintenance',
      consequence: 'Risque de découverte de l\'arrangement impérial par Ishal — décision de divulgation imminente',
    },
    {
      id: 'orven_defaillance',
      titre: 'La défaillance prévue',
      description: 'Il a identifié une défaillance structurelle dans un nœud secondaire du réseau — dans les 6 mois sans intervention. Il ne peut pas intervenir directement. Sa demande à la Confédération est "en traitement". Si la défaillance se produit, les communications dans un secteur de Néris seront coupées pendant 3 à 4 jours — et il sait quelles informations ne passeront pas.',
      personnages_impliques: [86, 97],
      declencheur: 'Défaillance prévisible d\'un nœud secondaire sans autorisation d\'intervention',
      consequence: 'Perturbation des communications et révélation du fait qu\'Orven n\'a plus le contrôle sur ce qu\'il a construit',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Créateur du réseau de vents artificiels de Thalassyr. A accepté un arrangement avec l\'Empire pour financer l\'extension du réseau à 30 ans. N\'a plus le contrôle opérationnel de sa propre création. Son fils Ishal (22) maintient le réseau sans connaître l\'arrangement.',

  relations: [
    { id: 22, nom: 'Ishal', type: 'famille', note: 'Son fils. Maintient le réseau sans savoir ce que son père a accepté. La conversation n\'a pas encore eu lieu.' },
    { id: 16, nom: 'Shaleth', type: 'contact', note: 'Utilise le réseau pour filtrer l\'information. Orven sait ce qu\'il fait. Ne peut pas l\'arrêter.' },
    { id: 86, nom: 'Kaeleth', type: 'allié', note: 'Technicien qui maintient les systèmes. Perpétue sans questionner.' },
  ],

  combat: {
    sorts: [
      'Tempête de courant (Electrique) — décharge en zone depuis les nœuds du réseau artificiel — perturbation de tout système électrique dans la portée',
      'Arc de court-circuit (Electrique) — arc entre deux points conducteurs — neutralisation de cibles métalliques',
      'Champ de navigation (Electrique) — génération d\'un courant d\'air électriquement guidé — déplacement rapide ou obstacle',
    ],
  },

  image_prompts: [
    {
      id: 'orven_reseau',
      description: 'Orven dans la salle de contrôle centrale de Néris — un vieux Néréide de 71 ans devant un tableau de connexions électriques qui s\'étend sur tout un mur, ses mains dans le dos. Il regarde sans toucher. Des techniciens plus jeunes s\'affairent autour de lui. Son expression est de quelqu\'un qui regarde son œuvre depuis l\'extérieur.',
      style: 'réaliste vieux ingénieur Néréide, salle de contrôle technique, réseau de vents artificiels, observateur sans autorité',
    },
  ],

  lore_long: `Orven a créé les vents artificiels de Thalassyr à 25 ans pour remplacer ce que le Silence des Vents avait supprimé. À 30 ans, il a accepté des fonds impériaux avec une condition d'accès aux nœuds centraux.

Ce qu'il a construit est devenu l'infrastructure de contrôle de l'information de la Confédération. Shaleth (16) utilise ses flux pour filtrer les communications. Il sait. Il ne peut plus intervenir.

Son fils Ishal (22) maintient le réseau sans connaître l'arrangement. La conversation n'a pas encore eu lieu.`,
};

export default orven;
