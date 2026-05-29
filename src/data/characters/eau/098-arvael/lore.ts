import type { PersonnageLoreComplet } from '../../../lore-types';

const arvael: PersonnageLoreComplet = {
  id: 98,
  nom: 'Arvael',
  element: 'Eau',
  espece: 'Néréide',
  region: 'Thalassyr',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Néréide de 50 ans, vagabond dans sa façon d\'occuper l\'espace — léger sur ses pieds, habitué aux routes. Il n\'a pas de domicile fixe. Sa posture dit le mouvement constant.',
    peau: 'Bleutée Néréide avec une luminescence aqueuse ordinaire — ni forte ni faible. L\'élément Eau d\'un homme en déplacement constant.',
    yeux: 'Bleus avec une qualité d\'observation sans enregistrement — il voit tout et ne retient que ce qui a de la valeur.',
    vetements: 'Tenue de voyage usée et réparée plusieurs fois. Ses poches sont organisées pour l\'accès rapide. Il sait toujours où chaque chose est.',
    signes_particuliers: 'Il transporte des nouvelles entre Thalassyr et l\'Isthme hors de tout réseau officiel. Ce qu\'il sait n\'appartient à aucun réseau — et donc ne peut pas être intercepté via un réseau.',
  },

  psychologie: {
    dominante: 'Vagabond qui transporte des informations entre régions sans appartenir à aucun réseau. Il vend des nouvelles à qui paye. Sa neutralité est commerciale — il ne choisit pas ses clients selon leur faction.',
    mecanisme_de_defense: 'L\'appartenance à rien comme protection. Sans réseau, il n\'y a pas de chaîne à remonter jusqu\'à lui. Chaque information est une transaction individuelle.',
    contradiction_interne: 'Il est un intermédiaire neutre pour des informations qui ont des conséquences sur des personnes. Sa neutralité est possible parce qu\'il ne porte pas les conséquences.',
    rapport_aux_autres: 'Thyven (62) est un contact à l\'Isthme — quelqu\'un qui lui achète parfois des nouvelles de Thalassyr. Le Silence des Vents est dans ses routes depuis ses débuts.',
    vision_du_monde: 'Les nouvelles ont de la valeur pour ceux qui en ont besoin. Il fournit de la valeur contre paiement. Ce que les clients font de ses nouvelles n\'est pas son affaire.',
  },

  histoire: {
    enfance: {
      titre: 'Le mouvement',
      contenu: 'Il n\'avait jamais voulu rester. À 18 ans, il avait quitté Thalassyr pour la première fois. À 25 ans, il avait compris que ses mouvements entre régions avaient une valeur commerciale — il savait des choses que les gens dans chaque ville voulaient savoir.',
    },
    arrivee: {
      titre: 'La route Thalassyr-Isthme',
      contenu: 'La route entre Thalassyr et l\'Isthme était devenue sa principale. Les deux régions avaient des enjeux que chacune voulait suivre dans l\'autre. Sa position intermédiaire avait une valeur stable.',
    },
    premier_conflit: {
      titre: 'La neutralité',
      contenu: 'Il avait vendu des nouvelles à des parties opposées dans un même conflit. Les deux parties avaient profité de ses nouvelles. Il avait décidé que c\'était sa définition du succès.',
    },
    revelation: {
      titre: 'Thyven',
      contenu: 'Thyven (62) était devenu un contact régulier à l\'Isthme. Un administrateur qui payait bien pour des nouvelles fiables de Thalassyr. Arvael ne savait pas ce que Thyven faisait de ces nouvelles. Ce n\'était pas son affaire.',
    },
    etat_actuel: {
      titre: 'Les routes',
      contenu: 'Il continue à voyager. Les routes ont changé depuis le Silence des Vents mais pas sa façon de les parcourir.',
    },
  },

  evenements_narratifs: [
    {
      id: 'arvael_nouvelles',
      titre: 'La route qui relie les arcs',
      description: 'Arvael voyage entre Thalassyr et l\'Isthme. Il a des contacts dans les deux régions. Si un événement majeur dans l\'une affecte l\'autre, il est la chaîne de transmission la plus rapide et la moins surveillée. Sa neutralité est un outil pour qui comprend sa valeur.',
      personnages_impliques: [62],
      declencheur: 'Un événement majeur à Thalassyr ou à l\'Isthme dont l\'autre région doit être informée',
      consequence: 'Arvael portant une information critique — avec la décision de la vendre, de la retenir, ou de choisir à qui',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Vagabond transportant des nouvelles entre Thalassyr et l\'Isthme hors de tout réseau. Neutralité commerciale. Contact de Thyven (62).',

  relations: [
    { id: 62, nom: 'Thyven', type: 'contact', note: 'Client régulier à l\'Isthme. Achète des nouvelles de Thalassyr.' },
  ],

  combat: {
    sorts: [
      'Esquive fluide (Eau) — mouvement rapide utilisant l\'élément comme accélérateur — fuite',
      'Barrière d\'eau (Eau) — protection de base — usage instinctif',
    ],
  },

  image_prompts: [
    {
      id: 'arvael_route',
      description: 'Arvael sur une route entre Thalassyr et l\'Isthme — un Néréide de 50 ans qui marche avec la légèreté de quelqu\'un qui n\'a rien de lourd à porter sauf des nouvelles. Son expression est de quelqu\'un en transit perpétuel.',
      style: 'réaliste Néréide vagabond, route Thalassyr-Isthme, nouvelles commercialisées, neutralité sans faction',
    },
  ],

  lore_long: `Arvael transporte des nouvelles entre Thalassyr et l'Isthme hors de tout réseau. Neutralité commerciale depuis 25 ans.

Il vend des nouvelles à qui paye, quelle que soit la faction. Sa protection : sans réseau, il n'y a pas de chaîne à remonter.

Thyven (62) est un client régulier à l'Isthme.`,
};

export default arvael;
