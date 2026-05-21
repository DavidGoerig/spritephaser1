import type { PersonnageLoreComplet } from '../../../lore-types';

const sylkravel: PersonnageLoreComplet = {
  id: 293,
  nom: 'Sylkravel',
  element: 'Plante',
  element2: 'Eau',
  espece: 'Sylvans',
  region: 'Thalassyr',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Moyenne, avec une façon de se déplacer qui s\'adapte au terrain — terrestre ou aquatique selon les besoins du moment.',
    peau: 'Brun-vert Sylvan avec des reflets bleutés aux épaules et aux clavicules — l\'eau qui monte depuis son travail côtier.',
    yeux: 'Vert changeant, avec une qualité de lecture des gens similaire à celle qu\'elle a pour les plantes : elle cherche l\'état sous l\'apparence.',
    vetements: 'Tenue de guérisseuse adaptée aux deux milieux — tissus qui résistent à l\'eau de mer sans perdre leurs propriétés de conservation d\'herbes. Toujours un sac avec ses préparations.',
    signes_particuliers: 'Ses plantes médicinales — même les espèces forestières — poussent dans des contenants d\'eau salée sans décliner. Elle a développé ça sur 8 ans. Personne ne lui a demandé comment.',
  },

  psychologie: {
    dominante: 'Soin itinérant entre deux mondes. Elle soigne sans appartenir. Les deux communautés lui font confiance parce qu\'elle n\'est récupérable par aucune.',
    mecanisme_de_defense: 'La mobilité. Si une situation devient trop complexe pour rester neutre, elle part.',
    contradiction_interne: 'Elle a développé une expertise unique sur les espèces végétales qui survivent en eau salée. Cette expertise est médicalement utile et géographiquement rare. Des gens aimeraient qu\'elle reste — à Thalassyr pour les Néréides, à Sylvera pour les Sylvans. Elle ne reste pas.',
    rapport_aux_autres: 'Kraethyn (122) lui a transmis des savoirs sylvans de soin qu\'elle n\'avait pas. Sylvethys (272) est une guérisseuse itinérante avec une éthique similaire — neutralité par conviction, pas par commodité. Elles se sont croisées deux fois.',
    vision_du_monde: 'La frontière entre les eaux de Thalassyr et les forêts de Sylvera est une zone médicale que personne ne couvre entièrement. Elle la couvre en se déplaçant.',
  },

  histoire: {
    enfance: {
      titre: 'La côte et la forêt',
      contenu: 'Née dans un village côtier proche de Sylvera — assez proche pour que les deux biomes soient accessibles à pied. Elle avait passé son enfance à alterner entre les deux, à comprendre les différences entre les plantes sylvanes et les végétaux côtiers. L\'élément Eau était venu naturellement avec l\'environnement.',
    },
    arrivee: {
      titre: 'La découverte accidentelle',
      contenu: 'À 28 ans, elle soignait un marin Néréide avec une infection — elle n\'avait pas ses herbes sylvanes sèches avec elle et avait improvisé avec des espèces marines. La combinaison avait fonctionné mieux que prévu. Elle avait commencé à expérimenter systématiquement.',
    },
    premier_conflit: {
      titre: 'Le choix d\'appartenance',
      contenu: 'Les Conservateurs lui avaient proposé un poste fixe à Sylvera. Les médecins portuaires de Thalassyr lui avaient proposé une intégration dans leur réseau. Elle avait refusé les deux pour la même raison : un poste fixe l\'aurait rendue utile à une faction et inutile à l\'autre.',
    },
    revelation: {
      titre: 'Les contenants d\'eau salée',
      contenu: 'Elle avait compris après 3 ans d\'expérimentation que ses espèces sylvanes médicinales survivaient indéfiniment dans des contenants d\'eau salée — un fait contre-intuitif qui permettait de transporter des herbes forestières sur des routes entièrement maritimes. Elle avait documenté les conditions exactes. Cette découverte avait changé ses routes de soin.',
    },
    etat_actuel: {
      titre: 'Les routes combinées',
      contenu: 'Elle parcourt maintenant des routes qui alternent entre forêt et côte — des trajets que seule sa double expertise lui permet de couvrir. Elle soigne des gens que ni les médecins sylvans ni les médecins néréides ne traitent bien — ceux qui vivent entre les deux biomes.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sylkravel_plantes_eau_salee',
      titre: 'La découverte des contenants',
      description: 'Les plantes sylvanes médicinales dans l\'eau salée — un fait que personne ne sait sauf elle et ses patients. Cette connaissance est pratique et transmissible. Elle ne l\'a pas encore partagée avec une institution parce qu\'une institution voudrait en faire quelque chose qu\'elle ne contrôlerait plus.',
      personnages_impliques: [122],
      declencheur: 'Expérimentation sur les conditions de transport des herbes',
      consequence: 'Technique de transport unique non partagée — connaissance vulnérable à sa mobilité',
    },
    {
      id: 'sylkravel_sylvethys_croisement',
      titre: 'Les deux rencontres',
      description: 'Elle et Sylvethys (272) se sont croisées deux fois — une dans un port de Thalassyr, une sur une route côtière. Les deux fois, la reconnaissance a été immédiate : deux guérisseuses itinérantes avec la même éthique de neutralité. Ils n\'ont pas échangé de secrets. Ils ont échangé des techniques.',
      personnages_impliques: [272],
      declencheur: 'Croisements sur les routes côtières',
      consequence: 'Réseau informel de guérisseuses itinérantes — confiance immédiate lors des croisements',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Médecine de frontière entre Sylvera et Thalassyr. Sa double expertise couvre une zone médicale que personne d\'autre ne couvre.',

  relations: [
    { id: 122, nom: 'Kraethyn', type: 'mentor', note: 'A transmis des savoirs sylvans de soin. Source d\'une partie de son expertise forestière.' },
    { id: 272, nom: 'Sylvethys', type: 'allié', note: 'Guérisseuse itinérante neutre. Deux croisements, échange de techniques, confiance immédiate.' },
  ],

  combat: {
    sorts: [
      'Soin végétal accéléré (Plante) — accélération de la régénération naturelle par application directe d\'espèces médicinales',
      'Courant protecteur (Eau) — création d\'un courant d\'eau qui isole et protège une zone',
      'Mélange d\'urgence (combiné) — préparation rapide d\'un traitement à partir d\'espèces marines et terrestres — efficacité en conditions de terrain',
    ],
  },

  image_prompts: [
    {
      id: 'sylkravel_route',
      description: 'Sylkravel sur un chemin de côte, son sac de guérisseuse à l\'épaule, marchant vers Thalassyr ou s\'en éloignant. À mi-chemin entre la forêt et la mer. Elle n\'est pas pressée — elle connaît sa route.',
      style: 'réaliste côtier, lumière de frontière entre biomes, liberté de mouvement, neutralité tranquille',
    },
  ],

  lore_long: `Sylkravel soigne des gens que personne d'autre ne soigne bien — ceux qui vivent entre Thalassyr et Sylvera.

Elle a mis 3 ans à découvrir que ses plantes sylvanes médicinales survivaient indéfiniment dans des contenants d'eau salée. C'est contre-intuitif. C'est reproductible. Elle a documenté les conditions exactes. Cette découverte lui a permis de couvrir des routes entièrement maritimes avec ses herbes forestières.

Les Conservateurs voulaient qu'elle reste à Sylvera. Les médecins portuaires voulaient qu'elle s'intègre à Thalassyr. Elle a refusé les deux — un poste fixe l'aurait rendue utile à une faction et inutile à l'autre.

Kraethyn lui a transmis des savoirs sylvans qu'elle n'avait pas. Sylvethys lui a transmis des méthodes de soin côtier. Ces échanges se passent dans des croisements rapides sur les routes, sans promesse de suivi.

Elle ne partage pas sa technique de conservation en eau salée avec une institution. Une institution en ferait quelque chose qu'elle ne contrôlerait plus.`,
};

export default sylkravel;
