import type { PersonnageLoreComplet } from '../../../lore-types';

const brysketh: PersonnageLoreComplet = {
  id: 211,
  nom: 'Brysketh',
  element: 'Feu',
  element2: 'Acier',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Pyrien de 31 ans, saboteur logistique — corpulence agile adaptée aux mouvements rapides sur les lignes d\'approvisionnement.',
    peau: 'Rouge-ardente avec des intégrations acier utilisées comme outils — il peut projeter des fragments métalliques.',
    yeux: 'Orangés avec des éclats argentés vifs.',
    vetements: 'Tenue de sabotage noire avec des protections métalliques intégrées — protection et outil simultanément.',
    signes_particuliers: 'Il cible les lignes d\'approvisionnement en acier de l\'Empire — les convois qui transportent l\'acier Chthonien vers les forges impériales. Son double élément lui permet de travailler directement sur l\'acier des convois.',
  },

  psychologie: {
    dominante: 'Saboteur Dissident Pyrien dans Varkhôl. Il cible les lignes d\'approvisionnement en acier de l\'Empire — des convois qui transportent de l\'acier Chthonien vers les forges impériales qui produisent les armes des Régulateurs. Son double élément lui permet d\'agir directement sur l\'acier : le chauffer, le déformer, le rendre inutilisable.',
    mecanisme_de_defense: 'La spécificité de la cible. Il cible l\'approvisionnement, pas les personnes. Les convois, pas les convoyeurs. Cette distinction lui permet de maintenir une ligne entre sabotage et violence directe.',
    contradiction_interne: 'Saboter les lignes d\'approvisionnement ralentit la production d\'armes impériales — mais ça ralentit aussi l\'acier qui va vers des forgerons indépendants. Sa cible est l\'Empire, mais les effets collatéraux atteignent parfois des artisans qui ne lui ont rien fait.',
    rapport_aux_autres: 'Brasia (1) est dans son réseau — la cheffe qui lui assigne les convois prioritaires à saboter. Thyrvum (136) est dans son réseau — un Chthonien Dissident d\'Ormn-Dur avec qui il coordonne les sabotages des deux côtés de la chaîne d\'approvisionnement.',
    vision_du_monde: 'Les armes ont besoin de métal. Le métal vient de quelque part. Couper l\'approvisionnement en métal, c\'est couper la capacité à produire des armes. C\'est de la logistique, pas de l\'idéologie.',
  },

  histoire: {
    enfance: {
      titre: 'Le double élément',
      contenu: 'Né à Varkhôl, son double élément s\'était manifesté à 16 ans. Il avait découvert qu\'il pouvait travailler l\'acier directement avec ses mains — le déformer à temperature, le fragmenter. Les Dissidentes l\'avaient recruté à 24 ans pour cette capacité spécifique.',
    },
    arrivee: {
      titre: 'Les convois',
      contenu: 'Sa première mission avait été de compromettre un convoi d\'acier militaire — pas le détruire complètement, mais rendre le matériau inutilisable pour la forge militaire tout en le laissant paraître intact. La Technocratie d\'Ormn-Dur avait reçu sa cargaison. Les forges impériales avaient rejeté l\'acier défectueux.',
    },
    premier_conflit: {
      titre: 'Le convoyeur innocent',
      contenu: 'Un convoyeur avait failli être blessé dans une de ses opérations — un accident de timing. Il n\'avait pas été blessé. Brysketh avait révisé ses procédures pour minimiser les risques pour les convoyeurs.',
    },
    revelation: {
      titre: 'Les effets collatéraux',
      contenu: 'Il avait appris que certaines de ses compromissions de convois avaient affecté des livraisons d\'acier vers des artisans indépendants — des forgerons comme Kressovak (208). Les effets collatéraux de son sabotage n\'atteignaient pas uniquement l\'Empire.',
    },
    etat_actuel: {
      titre: 'Le saboteur de convois',
      contenu: 'Il sabote. Les lignes d\'approvisionnement sont moins fiables. Il affine ses cibles.',
    },
  },

  evenements_narratifs: [
    {
      id: 'brysketh_convoi',
      titre: 'Le sabotage trop large',
      description: 'Brysketh sabote les lignes d\'approvisionnement en acier impérial. Si un de ses sabotages affecte suffisamment l\'approvisionnement général d\'acier dans Varkhôl — pas seulement le militaire — des artisans et des civils seront touchés, créant une opposition locale à ses opérations et exposant les Dissidentes à une critique sur leurs méthodes.',
      personnages_impliques: [1, 136],
      declencheur: 'Sabotage de Brysketh affectant l\'approvisionnement civil en acier de Varkhôl',
      consequence: 'Opposition locale aux Dissidentes due aux effets collatéraux — et Brysketh contraint de préciser davantage ses cibles',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Saboteur Dissident des lignes d\'approvisionnement en acier impérial à Varkhôl. Double élément Feu/Acier permettant de travailler directement sur l\'acier des convois.',

  relations: [
    { id: 1, nom: 'Brasia', type: 'contact', note: 'Cheffe Dissidente assignant les convois prioritaires à saboter.' },
    { id: 136, nom: 'Thyrvum', type: 'contact', note: 'Chthonien Dissident d\'Ormn-Dur coordonnant les sabotages des deux côtés de la chaîne.' },
  ],

  combat: {
    sorts: [
      'Projection d\'acier fondu (Feu/Acier) — fragments d\'acier chauffés projetés — attaque à distance',
      'Déformation d\'acier (Acier) — déformation structurelle directe — sabotage d\'équipement',
    ],
  },

  image_prompts: [
    {
      id: 'brysketh_convoi',
      description: 'Brysketh sur une route de convoi nocturne à Varkhôl — un Pyrien de 31 ans dont les mains chauffent l\'acier d\'une caisse de chargement. Le métal se déforme subtilement — il sera rejeté à la forge mais paraît intact à l\'inspection visuelle. Il travaille vite et silencieusement.',
      style: 'réaliste Pyrien saboteur double élément, Varkhôl, lignes d\'approvisionnement impériales, acier compromis, Dissidentes',
    },
  ],

  lore_long: `Brysketh sabote les lignes d'approvisionnement en acier impérial à Varkhôl pour les Dissidentes. Son double élément Feu/Acier lui permet de déformer l'acier des convois directement.

Il cible l'approvisionnement, pas les personnes. Mais ses effets collatéraux atteignent parfois des artisans indépendants.

Il affine ses cibles. L'approvisionnement militaire impérial est moins fiable qu'avant.`,
};

export default brysketh;
