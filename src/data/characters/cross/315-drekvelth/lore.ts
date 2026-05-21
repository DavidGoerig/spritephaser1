import type { PersonnageLoreComplet } from '../../../lore-types';

const drekvelth: PersonnageLoreComplet = {
  id: 315,
  nom: 'Drekvelth',
  element: 'Acier',
  element2: 'Roche',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Moyen, avec la carrure d\'un commerçant de mine — assez solide pour être crédible, assez accessible pour ne pas être intimidant. Un équilibre qu\'il a affiné.',
    peau: 'Gris Chthonien avec des reflets métalliques aux poignets et au cou — l\'Acier primaire qui s\'exprime dans les zones de contact régulier avec les outils et les équipements qu\'il vend.',
    yeux: 'Gris-argent, habitués à évaluer les personnes qui entrent — ce qu\'elles cherchent, ce qu\'elles peuvent se permettre, ce qu\'elles ne veulent pas dire.',
    vetements: 'Tenue de commerçant sans marqueur de faction — sobre, propre, avec de bonnes chaussures. Il veut être mémorable pour sa fiabilité, pas pour son apparence.',
    signes_particuliers: 'Il offre toujours un siège aux clients avant de leur parler. Pas par courtoisie — pour qu\'ils restent assez longtemps pour avoir une vraie conversation.',
  },

  psychologie: {
    dominante: 'La boutique comme espace de confiance neutre. Si chaque faction peut venir chez lui sans risquer une rencontre avec ses adversaires, sa boutique devient un point de rencontre inévitable. Ce n\'est pas de la politique — c\'est de la gestion d\'espace.',
    mecanisme_de_defense: 'La règle de la boutique. Il n\'y a pas de politique dans l\'espace de vente. Si deux clients adverses se retrouvent là, il applique la règle. Tout le monde la connaît.',
    contradiction_interne: 'Sa boutique est un point de rencontre non officiel. Les informations qui s\'échangent là ne font pas partie de ce qu\'il vend. Mais elles lui parviennent quand même. Il entend des choses. Il décide séparément de ce qu\'il en fait.',
    rapport_aux_autres: 'Korraven (212) lui achète de l\'équipement pour des projets dont les spécifications suggèrent une utilisation non standard. Drekvar (131) passe régulièrement — pas toujours pour acheter. La boutique est sur une route naturelle de circulation.',
    vision_du_monde: 'Les mines ont besoin d\'équipement. L\'équipement a besoin d\'une boutique. La boutique a besoin d\'un vendeur qui ne prend pas parti. C\'est sa position. Elle est utile à tout le monde et donc protégée par tout le monde.',
  },

  histoire: {
    enfance: {
      titre: 'Le marché comme éducation',
      contenu: 'Né dans une famille de commerçants d\'équipement minier à Ormn-Dur depuis trois générations. À 12 ans, il gérait les stocks. À 18 ans, il négociait avec les fournisseurs. À 25 ans, il avait racheté la boutique de son père avec l\'argent qu\'il avait économisé.',
    },
    arrivee: {
      titre: 'La règle de la boutique',
      contenu: 'À 28 ans, deux clients adverses s\'étaient retrouvés dans sa boutique — un représentant de la Technocratie et un intermédiaire Dissident. Il avait appliqué une règle qu\'il inventait sur le moment : pas de politique dans l\'espace de vente. Les deux avaient accepté. Depuis, la règle existait. Tout le monde à Ormn-Dur la connaissait.',
    },
    premier_conflit: {
      titre: 'La commande de Korraven',
      contenu: 'Korraven (212) lui avait commandé un ensemble d\'équipement dont les spécifications — des capteurs de pression adaptés pour des environnements non standard — suggéraient un usage différent de ce qu\'il avait déclaré. Drekvelth avait fourni l\'équipement sans poser de questions. Il avait noté les spécifications dans son registre. Il n\'avait pas mentionné ses conclusions dans sa comptabilité officielle.',
    },
    revelation: {
      titre: 'Ce qu\'il entend',
      contenu: 'Sa boutique est un espace de rencontre non officiel. Des conversations s\'y tiennent — pas toujours à voix basse. Il entend des choses sur les projets de la Technocratie, sur les routes des Dissidentes, sur les opérations de la Fosse. Il n\'a jamais vendu ces informations à personne. Il les tient dans sa mémoire. Il ne sait pas encore ce qu\'il en fera.',
    },
    etat_actuel: {
      titre: 'La boutique comme archive',
      contenu: 'Sa boutique tourne bien. Il a 12 ans de conversations enregistrées dans sa mémoire — des informations qui ne sont dans aucun registre officiel. Drekvar (131) vient parfois juste pour parler. Drekvelth parle. Il écoute les réponses. Il range mentalement ce qui lui semble important.',
    },
  },

  evenements_narratifs: [
    {
      id: 'drekvelth_archive_memorielle',
      titre: 'Les 12 ans de conversations',
      description: '12 ans de conversations dans sa boutique — des informations sur des projets, des routes, des personnes, des opérations. Rien de cette archive mémorielle n\'est dans un registre. Sa mémoire est la seule trace de certaines choses. Si quelqu\'un pouvait accéder à sa mémoire, il aurait une vue complète de ce qui se passe à Ormn-Dur depuis plus d\'une décennie.',
      personnages_impliques: [131, 212],
      declencheur: '12 ans de boutique comme espace de rencontre non officiel',
      consequence: 'Archive mémorielle unique et inaccessible — valeur informative non monétisée',
    },
    {
      id: 'drekvelth_commande_inhabituelle',
      titre: 'Les spécifications de Korraven',
      description: 'La commande de Korraven (212) avait des spécifications qui suggéraient un usage non standard — des capteurs adaptés à des environnements que Korraven n\'avait pas précisés. Drekvelth a fourni l\'équipement. Il a noté les spécifications dans son registre personnel. Il attend de savoir à quoi elles correspondent dans les conversations futures.',
      personnages_impliques: [212],
      declencheur: 'Commande avec spécifications inhabituelles',
      consequence: 'Équipement fourni — usage réel non confirmé, nota dans le registre personnel',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Point de rencontre neutre à Ormn-Dur. Sa boutique facilite des échanges que personne d\'autre ne peut organiser. Son archive mémorielle de 12 ans est peut-être la ressource la plus complète sur ce qui se passe vraiment dans la ville.',

  relations: [
    { id: 212, nom: 'Korraven', type: 'allié', note: 'Client avec commandes aux spécifications inhabituelles. Usage non déclaré. Drekvelth a noté sans questionner.' },
    { id: 131, nom: 'Drekvar', type: 'allié', note: 'Passage régulier — pas toujours pour acheter. Conversations. Drekvelth écoute.' },
  ],

  combat: {
    sorts: [
      'Lame d\'acier (Acier) — projection de fragments métalliques — attaque à distance',
      'Bouclier de roche (Roche) — levée d\'une barrière de roche — défense improvisée',
      'Fusion d\'équipement (Acier) — renforcement d\'un équipement métallique existant — amélioration de combat',
    ],
  },

  image_prompts: [
    {
      id: 'drekvelth_boutique',
      description: 'Drekvelth derrière son comptoir, en train d\'écouter un client qui parle. Il a l\'air de regarder les équipements rangés derrière lui — mais il écoute. Deux clients dans l\'espace, de factions différentes, qui s\'ignorent soigneusement. La boutique est organisée, neutre, utilisable par tout le monde.',
      style: 'réaliste commerce souterrain, neutralité de l\'espace visible, multiple clients, posture d\'écoute active',
    },
  ],

  lore_long: `Drekvelth tient une boutique d'équipement minier à Ormn-Dur. Toutes les factions peuvent venir sans risquer de croiser leurs adversaires — c'est la règle de la boutique. Tout le monde la connaît.

Il entend des choses dans cet espace. Des conversations qui ne sont pas chuchotées. Des informations sur des projets, des routes, des personnes. 12 ans de conversations dans sa mémoire.

Korraven (212) lui a commandé de l'équipement avec des spécifications inhabituelles. Il a fourni sans questionner. Il a noté les spécifications dans son registre personnel.

Drekvar (131) passe parfois juste pour parler. Drekvelth parle. Il écoute ce qui revient.

Il n'a jamais vendu d'informations à personne. Il n'a pas décidé de ne pas le faire non plus. Il attend de savoir ce que ça vaut et à qui.`,
};

export default drekvelth;
