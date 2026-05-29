import type { PersonnageLoreComplet } from '../../../lore-types';

const sylketh: PersonnageLoreComplet = {
  id: 116,
  nom: 'Sylketh',
  element: 'Plante',
  espece: 'Sylvan',
  region: 'Sylvera',
  faction: 'Conservateurs',

  apparence: {
    taille_corpulence: 'Sylvan de taille ordinaire, avec la posture souple d\'un voyageur — jamais tout à fait immobile. Il arrive, chante, repart.',
    peau: 'Écorce claire avec des motifs foliaires qui changent selon la saison. Les Sylvans itinérants portent les marques de plusieurs forêts.',
    yeux: 'Verts profonds avec une qualité de mémoire — il stocke ce qu\'il entend autant que ce qu\'il voit.',
    vetements: 'Tenue de voyage légère, adaptée à la forêt. Aucun insigne de faction visible — les chanteurs itinérants traversent tous les territoires.',
    signes_particuliers: 'Certains des chants-mémoire qu\'il transporte sont interdits par les Gardiens. Il les transporte quand même.',
  },

  psychologie: {
    dominante: 'Chanteur itinérant qui transporte les chants-mémoire entre les communautés Sylvan de Sylvera. Les chants-mémoire sont la tradition orale — histoire, écologie, rituels. Certains ont été interdits par les Gardiens comme dangereux. Sylketh les transporte quand même, sous couvert d\'itinérance.',
    mecanisme_de_defense: 'L\'itinérance comme neutralité apparente. Il traverse les territoires de toutes les factions. Personne n\'est certain de ses allégeances.',
    contradiction_interne: 'Il est Conservateur dans ses valeurs — il préserve. Mais sa méthode de préservation le met en conflit avec les deux factions.',
    rapport_aux_autres: 'Sylvae (31) est dans son réseau — elle comprend la valeur de ce qu\'il transporte. Sylkae (127) archive les mêmes chants sans le savoir — deux préservations parallèles qui s\'ignorent.',
    vision_du_monde: 'Les chants-mémoire sont des racines orales. Les brûler ne détruit pas la forêt — ça détruit la mémoire de la forêt. Cette distinction est celle qu\'il défend.',
  },

  histoire: {
    enfance: {
      titre: 'Les chants',
      contenu: 'Né dans une communauté Sylvan de Sylvera avec une tradition de chants-mémoire forte. Il avait appris à voyager avec les chants à 30 ans — quand sa communauté avait réalisé que certains chants disparaissaient faute de transmission.',
    },
    arrivee: {
      titre: 'L\'interdit',
      contenu: 'Les Gardiens avaient interdit certains chants comme "prophétiques" — des chants qui décrivaient la Faim des Racines d\'une façon qui contredisait leur version de l\'histoire. Sylketh continuait de les transporter.',
    },
    premier_conflit: {
      titre: 'La fouille',
      contenu: 'Des Gardiens l\'avaient fouillé à la frontière d\'un territoire. Ils avaient cherché des objets, pas des chants. Il n\'avait rien de physique à cacher. Les chants étaient dans sa mémoire.',
    },
    revelation: {
      titre: 'Sylkae',
      contenu: 'Il avait appris par Sylvae (31) qu\'une archiviste — Sylkae (127) — archivait les mêmes chants sans le savoir. Deux préservations parallèles qui s\'ignoraient. Il n\'avait pas cherché à la contacter.',
    },
    etat_actuel: {
      titre: 'L\'itinérance',
      contenu: 'Il continue de voyager. Les chants interdits sont dans sa mémoire. Personne ne peut les lui prendre sans l\'en effacer.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sylketh_chants_interdits',
      titre: 'Les chants que les Gardiens cherchent',
      description: 'Sylketh porte des chants-mémoire interdits par les Gardiens. Si les Gardiens comprennent que les chants sont dans sa mémoire — pas dans des objets — leur seule façon de les détruire est de l\'arrêter. Un chanteur arrêté est une mémoire bloquée. Sylkae (127) archive les mêmes chants — si Sylketh est arrêté, cette archive devient la seule copie.',
      personnages_impliques: [31, 127],
      declencheur: 'Les Gardiens comprenant que les chants interdits sont portés oralement',
      consequence: 'Sylketh arrêté ou protégé — et Sylkae devenant la seule archive des chants',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Chanteur itinérant Conservateur. Transporte des chants-mémoire interdits par les Gardiens. Préservation orale de la mémoire de la Faim.',

  relations: [
    { id: 31, nom: 'Sylvae', type: 'contact', note: 'Comprend la valeur des chants-mémoire.' },
    { id: 127, nom: 'Sylkae', type: 'contact', note: 'Archive les mêmes chants en parallèle — ignorance mutuelle.' },
  ],

  combat: {
    sorts: [
      'Chant de forêt (Plante) — résonance avec la végétation environnante — perturbation de terrain',
      'Vrille végétale (Plante) — projection racinaire — entrave',
    ],
  },

  image_prompts: [
    {
      id: 'sylketh_chant',
      description: 'Sylketh dans une forêt de Sylvera — un Sylvan itinérant qui chante pour un petit groupe. Les chants qu\'il transmet sont visibles dans l\'air comme des motifs lumineux verts. Certains sont interdits. Son expression est de quelqu\'un qui préserve quelque chose de fragile.',
      style: 'réaliste Sylvan chanteur itinérant, forêt de Sylvera, chants-mémoire interdits, tradition orale',
    },
  ],

  lore_long: `Sylketh transporte les chants-mémoire de Sylvera entre les communautés Sylvan. Certains de ces chants sont interdits par les Gardiens.

Ils sont dans sa mémoire — pas dans des objets. Les Gardiens ne peuvent pas les confisquer.

Sylkae (127) archive les mêmes chants sans le savoir. Deux préservations parallèles qui s'ignorent.`,
};

export default sylketh;
