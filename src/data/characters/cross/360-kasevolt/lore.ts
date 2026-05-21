import type { PersonnageLoreComplet } from '../../../lore-types';

const kasevolt: PersonnageLoreComplet = {
  id: 360,
  nom: 'Kasevolt',
  element: 'Normal',
  element2: 'Electrique',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: 'Technicien — une corpulence de laboratoire, avec des mains de précision. Pas de marques de terrain — il travaille surtout sur des instruments, pas dans des zones actives.',
    peau: 'Brun clair Homme-Lien propre — il porte des gants dans les zones de travail. Peu de marques d\'exposition.',
    yeux: 'Gris avec une qualité d\'évaluation d\'instruments. Il regarde les lectures avant les situations.',
    vetements: 'Tenue de laboratoire avec des éléments de terrain — il est parfois envoyé sur des zones d\'anomalie pour calibrer ses instruments. La tenue mixte reflète ces deux contextes.',
    signes_particuliers: 'Il parle de son travail avec enthousiasme technique — les propriétés des signatures, les défis de détection, les innovations de ses instruments. Cet enthousiasme est réel et indépendant des usages de son travail.',
  },

  psychologie: {
    dominante: 'Développement de détecteurs d\'éléments purs basés sur les signatures électriques — instruments capables d\'identifier des capacités élémentaires spécifiques à travers le bruit de fond des zones de saturation. Son travail est présenté comme de la recherche sur les zones de saturation. Son usage est la localisation d\'Élus.',
    mecanisme_de_defense: 'L\'enthousiasme technique comme distance. Il est passionné par les instruments, par les défis techniques, par la précision. Cette passion est authentique et lui permet de ne pas traiter son travail comme ce qu\'il est dans ses usages.',
    contradiction_interne: 'Ses détecteurs, croisés avec les données de Karevolt (356) de la Confédération, créent un système de localisation d\'Élus plus précis que ses instruments seuls. Il sait que Karevolt ne sait peut-être pas que ses données sont utilisées dans ce croisement. Il n\'a pas demandé à Sykavel (242) si le partage était explicite.',
    rapport_aux_autres: 'Sykavel (242) est son supérieur à la Convergence — il reçoit les instruments développés et les intègre dans les opérations. Karevolt (356) est son adversaire fonctionnel — leurs données se recoupent dans un sens qui n\'est peut-être pas connu d\'elle.',
    vision_du_monde: 'Les signatures élémentaires sont des phénomènes mesurables. Développer des instruments pour les mesurer est de la recherche. La recherche est neutre. Les usages appartiennent à ceux qui commandent la recherche.',
  },

  histoire: {
    enfance: {
      titre: 'Les instruments du père',
      contenu: 'À 16 ans, son père avait des instruments de mesure électrique pour son travail dans les zones de saturation de l\'Isthme. Il les avait démontés et remontés pour comprendre comment ils fonctionnaient. À 17 ans, il en avait amélioré un avec des modifications que son père n\'avait pas pensées.',
    },
    arrivee: {
      titre: 'Le recrutement par la Convergence',
      contenu: 'À 26 ans, Sykavel (242) l\'avait recruté avec une proposition directe : la Convergence avait besoin d\'instruments de détection plus précis pour les zones de saturation de l\'Isthme. Il avait posé des questions techniques. Sykavel avait répondu techniquement. Il avait accepté.',
    },
    premier_conflit: {
      titre: 'L\'usage de la précision',
      contenu: 'À 31 ans, ses instruments avaient atteint une précision suffisante pour distinguer des signatures d\'Élus dans les zones de saturation. Sykavel avait utilisé les premières données pour localiser un Élu. Kasevolt avait vu les résultats. Il avait compris que sa recherche servait à localiser des personnes spécifiques. Il avait continué.',
    },
    revelation: {
      titre: 'Les données de Karevolt',
      contenu: 'Sykavel lui avait présenté un ensemble de données sur les anomalies électriques de l\'Isthme — des données de la Confédération, comme il avait pu en déduire des formats. Ces données, intégrées à ses instruments, amélioraient significativement la précision de détection. Il n\'avait pas posé de question sur l\'origine ou le consentement des sources.',
    },
    etat_actuel: {
      titre: 'Le prototype avancé',
      contenu: 'Son dernier prototype peut distinguer des signatures d\'Élus dans des zones de saturation de niveau 4 — les zones les plus denses de l\'Isthme. C\'est un niveau de précision qui n\'existait pas avant lui. Sykavel lui a demandé une démonstration sur le terrain à Virex dans les 2 prochaines semaines.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kasevolt_demonstration_virex',
      titre: 'La démonstration de terrain',
      description: 'Sykavel (242) lui demande une démonstration terrain de son prototype avancé à Virex — une zone de saturation de niveau 4. Cette démonstration utilisera des signatures d\'Élus réels dans la zone. Les Élus que détectera son prototype lors de la démonstration seront identifiés. C\'est la première démonstration dans une zone avec des Élus actifs connus.',
      personnages_impliques: [242, 356],
      declencheur: 'Demande de démonstration terrain par Sykavel à Virex',
      consequence: 'Prototype testé sur des Élus réels en zone de saturation — résultats de localisation opérationnels',
    },
    {
      id: 'kasevolt_donnees_karevolt',
      titre: 'Les données sans consentement explicite',
      description: 'Les données de Karevolt (356) de la Confédération sont intégrées dans ses instruments. Il n\'a pas vérifié si Karevolt savait que ses données serviraient à localiser des Élus. Karevolt a demandé une clarification du protocole de partage à Karesyl (180). Si cette clarification révèle l\'usage, la source de données pourrait être coupée.',
      personnages_impliques: [356, 242],
      declencheur: 'Demande de clarification de Karevolt sur le protocole de partage',
      consequence: 'Source de données potentiellement compromise si Karevolt découvre l\'usage de localisation',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Technicien Convergence développant des détecteurs d\'Élus à Virex. Son prototype peut distinguer des signatures dans les zones de saturation les plus denses. Démonstration terrain dans 2 semaines. Ses données croisées avec celles de Karevolt créent un système de localisation dont Karevolt n\'est peut-être pas informée.',

  relations: [
    { id: 242, nom: 'Sykavel', type: 'supérieur', note: 'Reçoit les instruments et intègre les données dans les opérations. A demandé une démonstration terrain.' },
    { id: 356, nom: 'Karevolt', type: 'adversaire', note: 'Données Confédération intégrées sans clarification de l\'usage. Karevolt questionne le protocole de partage.' },
  ],

  combat: {
    sorts: [
      'Détection de signature (Electrique) — émission d\'un champ de lecture des signatures élémentaires — cartographie des présences dans une zone',
      'Surcharge d\'instrument (Normal) — émission de bruit électrique intense — neutralisation de capteurs adverses',
      'Analyse de saturation (Electrique + Normal) — lecture des anomalies électriques d\'une zone — identification des gradients de saturation',
    ],
  },

  image_prompts: [
    {
      id: 'kasevolt_prototype',
      description: 'Kasevolt dans un espace de développement, son prototype avancé devant lui sur une surface de travail. L\'instrument est compact mais complexe — des capteurs disposés autour d\'un processeur central. Il calibre un dernier ajustement. Son expression est d\'enthousiasme technique pur.',
      style: 'réaliste technicien Homme-Lien, prototype de détecteur de signature, atelier de développement, enthousiasme technique',
    },
  ],

  lore_long: `Kasevolt développe des détecteurs d'éléments purs basés sur les signatures électriques pour la Convergence. Son dernier prototype distingue des signatures d'Élus dans les zones de saturation les plus denses.

Démonstration terrain à Virex dans 2 semaines — sur des Élus réels dans une zone de saturation active.

Ses instruments intègrent les données de Karevolt (356) de la Confédération. Karevolt questionne le protocole de partage. Si elle découvre l'usage de ses données, la source pourrait être coupée avant la démonstration.`,
};

export default kasevolt;
