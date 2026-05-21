import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrsknorm: PersonnageLoreComplet = {
  id: 382,
  nom: 'Thyrsknorm',
  element: 'Normal',
  element2: 'Eau',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Archiviste itinérante — une corpulence adaptée au voyage long avec des équipements d\'enregistrement. Elle porte plus que sa taille ne le suggère — des carnets, des instruments, des archives partielles.',
    peau: 'Brun Homme-Lien avec des marques d\'encre aux mains et aux poignets — traces d\'une activité d\'écriture intense et prolongée.',
    yeux: 'Gris avec une qualité d\'écoute — elle regarde les personnes quand elles parlent et enregistre plus que les mots.',
    vetements: 'Tenue de voyage avec des poches supplémentaires pour les carnets. Elle porte une mallette imperméable — protection pour les archives en zones humides.',
    signes_particuliers: 'Elle répète ce qu\'on lui dit avant de l\'écrire — une habitude d\'archiviste pour valider qu\'elle a bien compris. Les personnes qui ne savent pas ce que c\'est trouvent ça perturbant.',
  },

  psychologie: {
    dominante: 'Collecte de témoignages de toutes les régions pour les archives de la Confédération — voyages répétés vers les zones actives pour documenter les événements du point de vue des personnes qui les vivent, pas des factions qui les interprètent.',
    mecanisme_de_defense: 'Le témoignage comme position neutre. Elle archive des voix, pas des conclusions. Sa neutralité est sa méthode — elle lui permet d\'accéder à des personnes qui ne parleraient pas à quelqu\'un de déclaré.',
    contradiction_interne: 'Les archives qu\'elle constitue pour la Confédération alimentent les analyses que la Confédération utilise dans ses négociations avec l\'Empire. Elle documente des témoignages sur des événements comme les checkpoints de Virex — ces témoignages alimentent indirectement les dossiers de négociation. Sa neutralité a des effets.',
    rapport_aux_autres: 'Thariel (18) est son supérieur archiviste à la Confédération — il reçoit les archives et définit les zones prioritaires de témoignage. Varaveth (100) est un contact dans d\'autres régions qui lui signale des événements à documenter.',
    vision_du_monde: 'Les événements sont vécus par des personnes. Ces personnes ont des témoignages. Ces témoignages sont la mémoire réelle de ce qui se passe — pas les analyses des factions. Elle archive la mémoire réelle.',
  },

  histoire: {
    enfance: {
      titre: 'Les témoignages du quartier',
      contenu: 'À 14 ans, après un incident dans son quartier, elle avait interrogé les personnes présentes et noté leurs témoignages. Aucun n\'était identique à un autre. Elle avait compris que les événements n\'existaient pas — seuls les témoignages existaient.',
    },
    arrivee: {
      titre: 'L\'intégration Confédération',
      contenu: 'À 23 ans, Thariel (18) l\'avait recrutée pour le programme d\'archivage itinérant de la Confédération. Sa méthode d\'interrogation — respectueuse et neutre — obtenait des témoignages que les archivistes institutionnels n\'obtenaient pas.',
    },
    premier_conflit: {
      titre: 'Le témoignage sensible',
      contenu: 'À 28 ans, elle avait collecté des témoignages sur des extractions impériales dans une zone de l\'Isthme — des témoignages directs de familles. Thariel avait utilisé ces témoignages dans un dossier de négociation avec l\'Empire. Elle n\'avait pas été informée de cet usage avant la collecte.',
    },
    revelation: {
      titre: 'La chaîne d\'usage',
      contenu: 'Elle avait demandé à Thariel comment ses archives étaient utilisées. La réponse avait été complète — les archives alimentaient les analyses, les analyses alimentaient les négociations, les négociations avaient des effets réels. Sa neutralité dans la collecte n\'éliminait pas les effets de ce qu\'elle collectait.',
    },
    etat_actuel: {
      titre: 'Les témoignages de Virex',
      contenu: 'Thariel lui a demandé de documenter les témoignages des habitants de Virex sur l\'installation des checkpoints de Thyrkael (351) — des témoignages qui alimenteront le dossier de Thyrkrael (364). Elle est à Virex. Elle collecte. Les témoignages qu\'elle récolte sont précis et douloureux.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrsknorm_temoignages_virex',
      titre: 'La documentation des checkpoints',
      description: 'Les témoignages des habitants de Virex sur les checkpoints de Thyrkael (351) — perquisitions, délais, incidents — alimentent le dossier de Thyrkrael (364) qui alimente les négociations de Vashkael (352). Sa neutralité dans la collecte a des effets dans la chaîne. Les personnes qui lui parlent savent-elles que leurs mots vont dans un dossier de négociation ?',
      personnages_impliques: [18, 364],
      declencheur: 'Collecte de témoignages sur les checkpoints pour le dossier de négociation Confédération',
      consequence: 'Témoignages alimentant le dossier de Thyrkrael — effets indirects sur les négociations de Vashkael',
    },
    {
      id: 'thyrsknorm_consentement',
      titre: 'Les témoins qui parlent',
      description: 'Les personnes qui lui donnent des témoignages à Virex croient-elles que ces témoignages resteront dans des archives confidentielles ? Elle n\'a pas dit qu\'ils seraient utilisés dans des négociations. Elle n\'a pas dit non plus qu\'ils ne le seraient pas. La question du consentement éclairé de ses témoins n\'a pas été posée.',
      personnages_impliques: [18, 364],
      declencheur: 'Prise de conscience du décalage entre ce que comprennent les témoins et l\'usage réel de leurs témoignages',
      consequence: 'Question du consentement éclairé non résolue — tension entre la méthode et l\'usage',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Archiviste itinérante Confédération collectant des témoignages à Virex sur les checkpoints de Thyrkael (351). Ses archives alimentent les dossiers de négociation. La question du consentement éclairé de ses témoins non résolue.',

  relations: [
    { id: 18, nom: 'Thariel', type: 'supérieur', note: 'Supérieur archiviste Confédération. A été transparent sur l\'usage des archives dans les négociations.' },
    { id: 100, nom: 'Varaveth', type: 'allié', note: 'Contact dans d\'autres régions. Signale les événements à documenter.' },
  ],

  combat: {
    sorts: [
      'Adaptation de terrain (Normal) — ajustement physique à un environnement imprévu — stabilité dans les situations de crise',
      'Flux de neutralisation (Eau) — projection d\'eau avec pression — interposition entre une personne et une menace',
      'Archive vivante (Normal + Eau) — enregistrement sous pression — mémorisation d\'un événement malgré le chaos environnant',
    ],
  },

  image_prompts: [
    {
      id: 'thyrsknorm_archive',
      description: 'Thyrsknorm dans un espace de Virex — assise face à un habitant qui lui parle, son carnet ouvert sur ses genoux, son stylo prêt. Elle répète la dernière phrase avant d\'écrire. Son expression est de présence totale — elle écoute vraiment.',
      style: 'réaliste archiviste Homme-Lien itinérante, Virex, collecte de témoignage, écoute active, carnet ouvert',
    },
  ],

  lore_long: `Thyrsknorm collecte des témoignages pour les archives de la Confédération. À Virex, elle documente les témoignages des habitants sur les checkpoints de Thyrkael (351) — archives qui alimenteront le dossier de Thyrkrael (364) et les négociations de Vashkael (352).

Sa neutralité dans la collecte ne supprime pas les effets de ce qu'elle collecte. Les personnes qui lui parlent savent-elles que leurs témoignages alimentent des négociations ? Elle n'a pas posé la question.`,
};

export default thyrsknorm;
