import type { PersonnageLoreComplet } from '../../../lore-types';

const drekryn: PersonnageLoreComplet = {
  id: 202,
  nom: 'Drekryn',
  element: 'Feu',
  element2: 'Ténèbres',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Pyrien de 45 ans, marchand — corpulence de quelqu\'un habitué aux routes longues entre des régions climatiquement opposées.',
    peau: 'Rouge-ardente avec des zones d\'obscurité moins prononcées que chez Threnvox — son Feu est dominant, l\'obscurité est secondaire.',
    yeux: 'Orangés avec des reflets sombres qui s\'intensifient dans Vel\'Nox.',
    vetements: 'Tenue de marchand adaptée aux deux régions — thermique pour Varkhôl, sombre pour Vel\'Nox.',
    signes_particuliers: 'Il opère des routes commerciales entre Varkhôl et Vel\'Nox — des routes mixtes que son double élément lui permet de naviguer mieux que des marchands mono-élémentaires.',
  },

  psychologie: {
    dominante: 'Marchand Pyrien avec un double élément Feu/Ténèbres. Ses routes commerciales entre Varkhôl et Vel\'Nox sont possibles parce qu\'il peut opérer confortablement dans les deux environnements. Son indépendance est réelle — il vend à tous et n\'appartient à aucune faction.',
    mecanisme_de_defense: 'La neutralité commerciale absolue. Il vend ce que ses clients veulent acheter. Ses routes sont disponibles pour des marchandises de toutes origines. Le politique est l\'affaire de ses clients, pas de son commerce.',
    contradiction_interne: 'Ses routes mixtes entre Varkhôl et Vel\'Nox sont utilisées pour des marchandises légitimes — et pour d\'autres choses qu\'il ne contrôle pas toujours. En maintenant une neutralité absolue, il facilite parfois des flux qu\'il n\'approuverait pas s\'il les examinait.',
    rapport_aux_autres: 'Korvel (66) est dans son réseau — un marchand Pyrien de Varkhôl avec qui il partage des informations sur les routes. Shevyr (146) est dans son réseau — un marchand Umbrien neutre de Vel\'Nox avec qui il coordonne les arrivées.',
    vision_du_monde: 'Le commerce est le langage universel. Varkhôl et Vel\'Nox ont des besoins complémentaires. Il est le pont. Le pont ne choisit pas qui le traverse.',
  },

  histoire: {
    enfance: {
      titre: 'Le double élément et le commerce',
      contenu: 'Né à Varkhôl avec un double élément qui lui avait permis de voyager vers Vel\'Nox sans les difficultés habituelles des Pyriens dans l\'obscurité. Il avait transformé cette capacité en avantage commercial à 22 ans.',
    },
    arrivee: {
      titre: 'Les routes mixtes',
      contenu: 'Il avait développé ses routes entre Varkhôl et Vel\'Nox sur 15 ans. Des routes qui évitaient les points de contrôle habituels en utilisant des passages qu\'il connaissait dans les deux environnements.',
    },
    premier_conflit: {
      titre: 'La marchandise douteuse',
      contenu: 'Un client lui avait remis une cargaison sans en préciser le contenu. À mi-route, il avait compris que la cargaison était liée à des Élus. Il avait livré. Il avait refusé ce client ensuite. Il n\'avait pas demandé ce qu\'il avait livré exactement.',
    },
    revelation: {
      titre: 'La neutralité et ses limites',
      contenu: 'Il avait compris que la neutralité absolue était une fiction pratique — ses routes avaient des usages qu\'il ne contrôlait pas. Il avait choisi de maintenir la neutralité parce que l\'alternative — choisir — aurait fermé la moitié de ses routes.',
    },
    etat_actuel: {
      titre: 'Le marchand mixte',
      contenu: 'Il commercialise. Ses routes fonctionnent. Il ne demande pas tout ce qu\'il transporte.',
    },
  },

  evenements_narratifs: [
    {
      id: 'drekryn_route',
      titre: 'La route entre les deux mondes',
      description: 'Drekryn maintient des routes commerciales entre Varkhôl et Vel\'Nox. Si une faction — Empire, Dissidentes — lui propose de transporter quelque chose de spécifique et qu\'il accepte, sa neutralité sera compromise. Si une autre faction l\'apprend, ses routes dans les deux régions seront menacées simultanément.',
      personnages_impliques: [66, 146],
      declencheur: 'Une faction lui proposant un transport qui compromettrait sa neutralité',
      consequence: 'Drekryn choisissant entre maintenir la neutralité ou accepter un contrat plus lucratif avec des conséquences sur ses routes dans les deux régions',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Marchand Pyrien opérant des routes mixtes entre Varkhôl et Vel\'Nox grâce à son double élément Feu/Ténèbres. Neutralité absolue par nécessité commerciale.',

  relations: [
    { id: 66, nom: 'Korvel', type: 'contact', note: 'Marchand Pyrien de Varkhôl avec qui il partage des informations de routes.' },
    { id: 146, nom: 'Shevyr', type: 'contact', note: 'Marchand Umbrien neutre de Vel\'Nox coordonnant les arrivées.' },
  ],

  combat: {
    sorts: [
      'Frappe mixte (Feu/Ténèbres) — impact combinant chaleur et obscurité — attaque directe',
      'Évasion dans l\'ombre (Ténèbres) — repositionnement dans l\'obscurité — survie commerciale',
    ],
  },

  image_prompts: [
    {
      id: 'drekryn_route',
      description: 'Drekryn sur une route entre Varkhôl et Vel\'Nox — un Pyrien de 45 ans avec une cargaison sur un transport, à mi-chemin entre la chaleur de Varkhôl et l\'obscurité de Vel\'Nox. Son apparence change légèrement selon l\'environnement — plus chaud dans Varkhôl, plus sombre dans Vel\'Nox. Il regarde la prochaine destination.',
      style: 'réaliste Pyrien marchand double élément, route entre Varkhôl et Vel\'Nox, neutralité commerciale, transition élémentaire',
    },
  ],

  lore_long: `Drekryn est marchand Pyrien avec un double élément Feu/Ténèbres. Il opère des routes commerciales entre Varkhôl et Vel'Nox que son double élément lui permet de naviguer mieux que des marchands mono-élémentaires.

Sa neutralité absolue lui permet de vendre à tous. Elle facilite aussi parfois des flux qu'il n'examinerait pas s'il le pouvait.

Le pont ne choisit pas qui le traverse.`,
};

export default drekryn;
