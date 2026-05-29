import type { PersonnageLoreComplet } from '../../../lore-types';

const tyraneth: PersonnageLoreComplet = {
  id: 83,
  nom: 'Tyraneth',
  element: 'Psy',
  espece: 'Néréide',
  region: 'Thalassyr',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Néréide de 37 ans, fine avec les mouvements calmes d\'une analyste. Elle ne prend pas d\'espace inutile. Son travail se fait derrière des instruments et des données.',
    peau: 'Bleutée Néréide avec une luminescence violette aux tempes — l\'élément Psy visible de façon caractéristique chez un analyste qui passe ses journées à lire des signatures psychiques.',
    yeux: 'Bleu-violet, avec une qualité d\'observation sans affect. Elle catalogue.',
    vetements: 'Tenue confédérale d\'analyste — sobre, aucun insigne de rang particulier. Ce qu\'elle porte n\'annonce pas ce qu\'elle fait.',
    signes_particuliers: 'Ses rapports arrivent à l\'Empire. Elle croit travailler pour la Confédération. La distinction lui échappe encore.',
  },

  psychologie: {
    dominante: 'Analyste confédérale qui surveille les Élus non-enregistrés à Thalassyr. Ses données sont transmises à l\'Empire via un réseau dont elle ne connaît pas le nœud de transmission. Elle pense contribuer à la sécurité régionale.',
    mecanisme_de_defense: 'La légitimité institutionnelle comme protection. Elle travaille pour la Confédération. La Confédération est une institution légitime. Ses activités le sont aussi.',
    contradiction_interne: 'Elle surveille des personnes non-enregistrées — une catégorie qui inclut des personnes qui n\'ont pas pu ou voulu s\'enregistrer. Elle traite ces cas comme équivalents.',
    rapport_aux_autres: 'Shaleth (16) est dans sa chaîne de reporting — elle lui transmet des données. Cendrix (2) est dans le réseau impérial qui reçoit ses rapports — un lien qu\'elle ne connaît pas.',
    vision_du_monde: 'Les Élus non-enregistrés sont un risque de sécurité. C\'est la définition institutionnelle. Elle l\'accepte.',
  },

  histoire: {
    enfance: {
      titre: 'L\'élément Psy',
      contenu: 'Son élément Psy l\'avait orientée vers l\'analyse psychique dès son éducation confédérale. La surveillance des signatures élémentaires était une application directe de sa compétence.',
    },
    arrivee: {
      titre: 'Thalassyr',
      contenu: 'Affectée à Thalassyr à 30 ans pour surveiller les anomalies élémentaires dans une région marquée par le Silence des Vents. La densité d\'Élus non-enregistrés était plus haute que prévu.',
    },
    premier_conflit: {
      titre: 'La chaîne',
      contenu: 'Elle avait demandé une fois à qui ses rapports étaient destinés au-delà de Shaleth. On lui avait répondu "protocole standard". Elle avait arrêté de demander.',
    },
    revelation: {
      titre: 'Les arrestations',
      contenu: 'Elle avait constaté que certaines personnes qu\'elle avait signalées avaient été arrêtées rapidement — plus vite que les procédures confédérales ne l\'auraient permis. Elle avait classé ça comme "système efficace".',
    },
    etat_actuel: {
      titre: 'L\'analyse continue',
      contenu: 'Elle continue à surveiller et à signaler. Ses rapports continuent à circuler dans une chaîne dont elle ne connaît pas entièrement les nœuds.',
    },
  },

  evenements_narratifs: [
    {
      id: 'tyraneth_chaine',
      titre: 'La chaîne révélée',
      description: 'Les rapports de Tyraneth arrivent à l\'Empire. Si elle apprenait que sa chaîne de reporting dépasse la Confédération, elle devrait décider si elle continue à signaler des Élus non-enregistrés à un système impérial.',
      personnages_impliques: [16, 2],
      declencheur: 'Tyraneth apprenant que ses rapports arrivent à l\'Empire',
      consequence: 'Décision de continuer sous un cadre redéfini — ou refus',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Analyste confédérale qui surveille les Élus non-enregistrés. Ses rapports arrivent à l\'Empire via Shaleth. Elle ne sait pas encore.',

  relations: [
    { id: 16, nom: 'Shaleth', type: 'contact', note: 'Dans sa chaîne de reporting. Nœud de transmission qu\'elle ne questionne pas.' },
    { id: 2, nom: 'Cendrix', type: 'contact', note: 'Reçoit ses rapports via le réseau impérial. Elle ne connaît pas ce lien.' },
  ],

  combat: {
    sorts: [
      'Lecture psychique (Psy) — analyse des signatures élémentaires à distance — identification sans contact',
      'Brouillage de perception (Psy) — interférence dans les sens d\'une cible — outil de surveillance défensive',
    ],
  },

  image_prompts: [
    {
      id: 'tyraneth_analyse',
      description: 'Tyraneth dans son poste d\'analyse à Thalassyr — une Néréide de 37 ans devant des instruments de mesure psychique. Elle catalogue des signatures élémentaires. Ses tempes luisent violettes. Ses données circulent dans une chaîne qu\'elle ne voit pas entièrement.',
      style: 'réaliste Néréide analyste, poste de surveillance, Thalassyr, chaîne de reporting opaque, Silence des Vents',
    },
  ],

  lore_long: `Tyraneth surveille les Élus non-enregistrés à Thalassyr pour la Confédération. Ses rapports arrivent à l'Empire via Shaleth (16).

Elle croit travailler pour la Confédération. La distinction lui échappe encore.

Certaines arrestations rapides qu'elle a constatées lui ont semblé indiquer "système efficace".`,
};

export default tyraneth;
