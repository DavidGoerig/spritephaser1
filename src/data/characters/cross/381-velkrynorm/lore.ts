import type { PersonnageLoreComplet } from '../../../lore-types';

const velkrynorm: PersonnageLoreComplet = {
  id: 381,
  nom: 'Velkrynorm',
  element: 'Normal',
  element2: 'Vent',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Messagère — légère avec des jambes construites pour la distance. Elle n\'est presque jamais assise — même au repos, elle est en mouvement léger.',
    peau: 'Brun clair Homme-Lien avec des marques d\'exposition aux éléments de plusieurs régions — des tons variés selon les zones traversées. Elle a couvert beaucoup de terrain.',
    yeux: 'Vert-gris avec une habitude de navigation — elle lit les terrains comme des cartes.',
    vetements: 'Tenue de déplacement rapide — légère, sans équipement superflu. Rien qui clique ou qui brille. Elle voyage vite et discrètement.',
    signes_particuliers: 'Elle ne prend jamais de notes. Ce qu\'elle porte est dans sa tête. Elle ferme les yeux quand elle mémorise un message — une façon de l\'enregistrer complètement.',
  },

  psychologie: {
    dominante: 'Transmission de messages entre réseaux Dissidents sur de longues distances — mémorisation des messages sans les écrire, transit physique entre les relais, délivrance exacte aux destinataires désignés.',
    mecanisme_de_defense: 'La mémoire comme protection. Si elle n\'a rien d\'écrit sur elle, une fouille ne trouve rien. Ce qu\'elle porte est inviolable à moins de violer sa personne. Elle fait confiance à cette protection jusqu\'à un certain point.',
    contradiction_interne: 'Elle mémorise des messages dont elle ne comprend parfois pas le contenu — des codes, des informations techniques, des plans dont le sens lui échappe. Elle les transmet fidèlement. Elle ne sait pas ce qu\'elle contribue à mettre en mouvement.',
    rapport_aux_autres: 'Aelthys (268) est son contact pour les messages prioritaires des Dissidents dans l\'Isthme — les messages qu\'elle porte pour Aelthys ont des délais courts et des conséquences si retardés. Caeryn (101) est un contact dans d\'autres régions pour la réception des messages à longue distance.',
    vision_du_monde: 'Les réseaux tiennent par la communication. La communication tient par la discrétion. Elle est la discrétion.',
  },

  histoire: {
    enfance: {
      titre: 'La mémoire',
      contenu: 'À 12 ans, elle avait réalisé qu\'elle pouvait mémoriser des textes longs mot pour mot après une seule lecture. Elle avait utilisé cette capacité pour des paris — réciter des textes qu\'on lui montrait. Elle avait gagné jusqu\'à ce qu\'on arrête de parier contre elle.',
    },
    arrivee: {
      titre: 'Le premier message',
      contenu: 'À 20 ans, Aelthys (268) avait entendu parler de sa mémoire et lui avait posé une question directe : est-ce qu\'elle pouvait mémoriser un message de 200 mots et le transmettre exactement. Elle avait dit oui. Il avait testé. Elle avait transmis. Elle travaillait pour les Dissidents depuis.',
    },
    premier_conflit: {
      titre: 'Le message inconnu',
      contenu: 'À 25 ans, elle avait transmis un message en code dont elle ne comprenait pas le contenu. La réception avait entraîné des actions que l\'expéditeur n\'avait pas anticipées. Elle avait demandé à Aelthys si c\'était un problème. Aelthys avait dit que non — le problème venait d\'une mauvaise interprétation en réception.',
    },
    revelation: {
      titre: 'La limite de la mémoire',
      contenu: 'Elle mémorisait des messages en 4 langues. À 28 ans, elle avait commencé à mémoriser des messages dans une 5ème — un code Dissident développé spécifiquement pour les communications de crise. Elle ne comprenait pas ce code. Elle le transmettait avec la même fidélité que les autres. C\'était la limite de sa méthode.',
    },
    etat_actuel: {
      titre: 'Le circuit de l\'Isthme',
      contenu: 'Elle a 3 messages actifs à transmettre dans les zones de l\'Isthme dans les prochaines 72 heures — des messages liés aux préparatifs autour de la démonstration de Kasevolt (360). Aelthys lui a dit que ces messages étaient critiques. Elle n\'a pas demandé le contenu.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velkrynorm_messages_kasevolt',
      titre: 'Les 72 heures',
      description: '3 messages critiques à transmettre dans 72 heures autour de la démonstration de Kasevolt (360). Elle ne connaît pas leur contenu — code Dissident de crise. Les destinataires sont à des distances que ses capacités de déplacement permettent dans les délais. Elle est en mouvement.',
      personnages_impliques: [268, 101],
      declencheur: 'Messages critiques liés à la démonstration de Kasevolt à transmettre en 72 heures',
      consequence: 'Transmission dans les délais — contenu non connu mais conséquences dépendantes de la fidélité',
    },
    {
      id: 'velkrynorm_fouille',
      titre: 'Le checkpoint de Thyrkael',
      description: 'Ses 3 routes vers Virex passent toutes près des checkpoints de Thyrkael (351). Une fouille ne trouverait rien d\'écrit. Mais un interrogatoire sur ses déplacements récurrents dans la zone pourrait attirer l\'attention sur ses relais. Elle modifie ses approches.',
      personnages_impliques: [268, 101],
      declencheur: 'Présence des checkpoints de Thyrkael sur ses routes de transit vers Virex',
      consequence: 'Modification des approches — temps de transit augmenté mais exposition réduite aux relais',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Messagère Dissidente mémorisant et transmettant des messages sans écrit dans les réseaux de l\'Isthme. 3 messages critiques liés à la démonstration de Kasevolt (360) à transmettre en 72 heures. Routes modifiées autour des checkpoints de Thyrkael.',

  relations: [
    { id: 268, nom: 'Aelthys', type: 'supérieur', note: 'Contact pour les messages prioritaires Dissidents dans l\'Isthme. A dit que les messages actuels sont critiques.' },
    { id: 101, nom: 'Caeryn', type: 'allié', note: 'Contact dans d\'autres régions pour la réception des messages à longue distance.' },
  ],

  combat: {
    sorts: [
      'Sprint de transit (Vent) — accélération maximale en ligne directe — transit rapide entre deux points',
      'Dissimulation de mouvement (Normal) — adaptation du rythme de déplacement à l\'environnement — traversée discrète d\'une zone surveillée',
      'Rafale d\'obstacle (Vent + Normal) — combinaison de vitesse et d\'adaptation — franchissement rapide d\'un obstacle physique',
    ],
  },

  image_prompts: [
    {
      id: 'velkrynorm_transit',
      description: 'Velkrynorm en déplacement rapide dans une zone de l\'Isthme — ses yeux fermés un instant pour consolider un message récemment mémorisé, ses jambes en mouvement continu. Elle ne s\'arrête pas. L\'environnement autour d\'elle est flou — elle va vite.',
      style: 'réaliste messagère Homme-Lien Dissidente, déplacement rapide dans l\'Isthme, yeux mi-clos de mémorisation, mouvement continu',
    },
  ],

  lore_long: `Velkrynorm mémorise et transmet des messages Dissidents sans rien écrire. Ce qu'elle porte est inviolable sans violer sa personne.

3 messages critiques liés à la démonstration de Kasevolt (360) à transmettre dans 72 heures. Elle ne connaît pas leur contenu — code Dissident de crise. Elle transmet fidèlement.

Les checkpoints de Thyrkael (351) modifient ses routes. Temps augmenté, exposition réduite aux relais.`,
};

export default velkrynorm;
