import type { PersonnageLoreComplet } from '../../../lore-types';

const kethvae: PersonnageLoreComplet = {
  id: 124,
  nom: 'Kethvae',
  element: 'Feu',
  espece: 'Sylvan',
  region: 'Sylvera',
  faction: 'Gardiens',

  apparence: {
    taille_corpulence: 'Sylvan de 54 ans, corpulence de forgeron — large, stable, construit par le travail physique.',
    peau: 'Écorce rougeâtre avec des traces de métal fondu — les marques d\'un Sylvan qui travaille avec le feu et le métal régulièrement.',
    yeux: 'Ambre avec une qualité pragmatique. Il voit les outils, pas les idéologies.',
    vetements: 'Tablier de forge, tenue résistante à la chaleur. Aucune décoration factionnelle — les forgerons ont un statut fonctionnel qui transcende les partis.',
    signes_particuliers: 'Il fabrique les outils des forestiers Gardiens. Il est pragmatique, pas idéologique — les outils qu\'il fabrique servent une méthode, pas une croyance.',
  },

  psychologie: {
    dominante: 'Forgeron Sylvan qui fabrique les outils des forestiers Gardiens. Son allégeance est pragmatique — les Gardiens ont besoin de ses outils, il les fabrique. Il ne participe pas aux débats idéologiques. Son travail est concret : des outils qui fonctionnent.',
    mecanisme_de_defense: 'Le pragmatisme comme protection. Il fabrique des outils. La question de ce qu\'on en fait n\'est pas entièrement de sa responsabilité.',
    contradiction_interne: 'Ses outils sont utilisés pour brûler. Il le sait. Il estime que la question de la justesse du brûlage appartient aux forestiers, pas aux forgerons. Cette distinction est confortable mais pas entièrement satisfaisante.',
    rapport_aux_autres: 'Kessyn (32) est dans son réseau — quelqu\'un qui travaille avec ses outils. Krath (36) est aussi dans son réseau — l\'utilisateur principal de ses créations les plus robustes.',
    vision_du_monde: 'Un bon outil fait ce pour quoi il est conçu. Un mauvais usage d\'un bon outil est la faute de celui qui l\'utilise. Cette philosophie a ses limites qu\'il n\'explore pas.',
  },

  histoire: {
    enfance: {
      titre: 'La forge',
      contenu: 'Né dans une famille de forgerons Sylvan. L\'élément Feu chez un Sylvan est rare — dans sa famille, c\'était un héritage professionnel. La forge était naturelle.',
    },
    arrivee: {
      titre: 'Les Gardiens',
      contenu: 'Il avait commencé à fabriquer pour les Gardiens à 30 ans — le seul groupe à Sylvera qui avait besoin de l\'outillage de gestion forestière à grande échelle qu\'il fabriquait. La demande existait, il avait répondu.',
    },
    premier_conflit: {
      titre: 'Les Conservateurs',
      contenu: 'Des Conservateurs lui avaient demandé ses services — pour des outils différents, de soin et de préservation. Il avait accepté. Il fabriquait pour les deux. La faction était dans l\'usage, pas dans l\'outil.',
    },
    revelation: {
      titre: 'Krath et les outils de brûlage',
      contenu: 'Krath (36) lui avait commandé des outils spécifiques pour des brûlages à plus grande échelle. Il les avait fabriqués. Il savait ce pour quoi ils allaient servir. Il avait quand même fabriqué.',
    },
    etat_actuel: {
      titre: 'La forge',
      contenu: 'Il forge. Les outils qu\'il fabrique partent dans les deux directions — soin et brûlage. Il maintient sa neutralité professionnelle.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kethvae_outil',
      titre: 'L\'outil et son usage',
      description: 'Kethvae fabrique des outils pour les deux factions. Si une crise éclate à Sylvera — si un brûlage causé par ses outils détruit quelque chose d\'irréparable — sa neutralité professionnelle sera interrogée. Il devra décider s\'il peut continuer à fabriquer pour Krath (36) ou si cette neutralité a une limite.',
      personnages_impliques: [32, 36],
      declencheur: 'Un brûlage causant des dommages irréparables avec ses outils',
      consequence: 'Kethvae confronté à la limite de sa neutralité professionnelle',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Forgeron pragmatique des Gardiens. Fabrique aussi pour les Conservateurs. Neutralité professionnelle face à l\'usage de ses outils.',

  relations: [
    { id: 32, nom: 'Kessyn', type: 'contact', note: 'Utilisateur de ses outils dans le réseau Gardien.' },
    { id: 36, nom: 'Krath', type: 'contact', note: 'Utilisateur principal de ses créations de brûlage.' },
  ],

  combat: {
    sorts: [
      'Forge de combat (Feu) — manipulation de métal en fusion — attaque et défense',
      'Outil de contrainte (Feu) — projection d\'élément — immobilisation',
    ],
  },

  image_prompts: [
    {
      id: 'kethvae_forge',
      description: 'Kethvae dans sa forge à Sylvera — un Sylvan Feu de 54 ans travaillant le métal. Des outils de forestier sont en cours de fabrication — certains pour soigner, d\'autres pour brûler. Son expression est concentrée et pragmatique. La question de l\'usage ne l\'arrête pas.',
      style: 'réaliste Sylvan forgeron, Sylvera, forge, pragmatisme professionnel, outils de forestiers Gardiens',
    },
  ],

  lore_long: `Kethvae fabrique les outils des forestiers de Sylvera — principalement pour les Gardiens, parfois pour les Conservateurs.

Il est pragmatique, pas idéologique. Un outil n'a pas de faction — seulement un usage.

Si ses outils causent quelque chose d'irréparable, cette neutralité sera interrogée.`,
};

export default kethvae;
