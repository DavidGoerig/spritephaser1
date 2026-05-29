import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrvox: PersonnageLoreComplet = {
  id: 205,
  nom: 'Thyrvox',
  element: 'Ténèbres',
  element2: 'Feu',
  espece: 'Umbrien',
  region: 'Vel\'Nox',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Umbrien de 52 ans, artisan — corpulence de quelqu\'un qui travaille de ses mains avec précision. Calme du métier.',
    peau: 'Grise profonde avec des filaments lumineux orangés dans les paumes — visibles quand il travaille sur une lanterne.',
    yeux: 'Noirs avec des éclats dorés-orangés stables. Il ne les cache pas.',
    vetements: 'Tenue d\'artisan pratique — adaptée au travail fin avec des matériaux thermiques et des composants d\'obscurité.',
    signes_particuliers: 'Il crée des lanternes élémentaires qui combinent Ténèbres et Feu — des objets qui projettent une lumière tiède dans l\'obscurité de Vel\'Nox sans éblouir. Ses lanternes sont vendues dans les deux régions.',
  },

  psychologie: {
    dominante: 'Artisan Umbrien indépendant fabriquant des lanternes élémentaires combinant Ténèbres et Feu. Ses lanternes répondent à un besoin pratique dans Vel\'Nox — la lumière sans éblouissement pour des yeux adaptés à l\'obscurité. Il vend aussi à Varkhôl, où ses lanternes sont des objets de curiosité décorative.',
    mecanisme_de_defense: 'L\'artisan comme neutralité. Il fait des objets utiles. Ses objets sont achetés par des personnes de toutes factions parce qu\'ils fonctionnent. Ce qu\'elles en font après ne le concerne pas.',
    contradiction_interne: 'Ses lanternes élémentaires — une combinaison rare Ténèbres/Feu — sont des objets de valeur qui attirent l\'attention. La Convergence pourrait voir en lui une ressource pour identifier d\'autres doubles éléments. Il a évité cette attention jusqu\'ici.',
    rapport_aux_autres: 'La saturation du Vol de la Lumière est son contexte de vie — il travaille avec ce qui reste de lumière dans Vel\'Nox. Korvel (66) est dans son réseau à Varkhôl — un de ses clients Pyriens qui commande des lanternes.',
    vision_du_monde: 'Vel\'Nox manque de lumière depuis le Vol. Ses lanternes donnent un peu de lumière sans trahir l\'obscurité pour qui elle appartient. C\'est un équilibre qu\'il maîtrise bien.',
  },

  histoire: {
    enfance: {
      titre: 'L\'artisanat dans l\'obscurité',
      contenu: 'Né à Vel\'Nox, il avait appris l\'artisanat de son père — des objets pratiques pour la vie dans l\'obscurité. Son double élément s\'était manifesté à 18 ans et avait transformé son artisanat.',
    },
    arrivee: {
      titre: 'Les lanternes',
      contenu: 'Il avait développé sa première lanterne élémentaire à 30 ans — un objet qui utilisait son double élément pour projeter une lumière tiède sans être éblouissante. La demande à Vel\'Nox avait été immédiate. Il avait développé une gamme.',
    },
    premier_conflit: {
      titre: 'L\'intérêt impérial',
      contenu: 'Des Régulateurs impériaux avaient demandé à voir ses techniques de fabrication — ils pensaient que ses lanternes pourraient être utilisées pour des opérations de surveillance dans l\'obscurité de Vel\'Nox. Il avait dit que ses techniques étaient des secrets professionnels. Ils n\'avaient pas insisté.',
    },
    revelation: {
      titre: 'L\'objet politique',
      contenu: 'Il avait compris que ses lanternes — des objets pratiques à son sens — étaient des objets politiques pour d\'autres. Une lanterne qui donne de la lumière dans Vel\'Nox sans éblouir est aussi une lanterne qui révèle des choses dans l\'obscurité.',
    },
    etat_actuel: {
      titre: 'L\'artisan',
      contenu: 'Il fabrique. Ses lanternes s\'achètent. Il maintient ses secrets professionnels.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrvox_lanternes',
      titre: 'Les lanternes comme outil de surveillance',
      description: 'Thyrvox fabrique des lanternes qui fonctionnent dans l\'obscurité de Vel\'Nox. Si l\'Empire ou la Convergence parvenait à obtenir ses techniques de fabrication, ces lanternes pourraient être utilisées pour des opérations de surveillance dans des zones où l\'obscurité était jusqu\'ici une protection pour les Umbriens.',
      personnages_impliques: [66],
      declencheur: 'Une faction obtenant les techniques de fabrication de Thyrvox par contrainte ou par un intermédiaire',
      consequence: 'Lanternes élémentaires utilisées pour la surveillance dans Vel\'Nox — l\'obscurité comme protection compromise',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Artisan indépendant fabriquant des lanternes combinant Ténèbres et Feu. Vend dans les deux régions. Ses techniques sont des secrets professionnels que plusieurs factions voudraient obtenir.',

  relations: [
    { id: 66, nom: 'Korvel', type: 'contact', note: 'Client Pyrien de Varkhôl commandant des lanternes.' },
  ],

  combat: {
    sorts: [
      'Frappe de lumière tiède (Ténèbres/Feu) — impact lumineux calibré — attaque non-éblouissante',
      'Extinction (Ténèbres) — suppression de lumière — avantage dans l\'obscurité',
    ],
  },

  image_prompts: [
    {
      id: 'thyrvox_atelier',
      description: 'Thyrvox dans son atelier à Vel\'Nox — un Umbrien de 52 ans finissant une lanterne élémentaire. Dans ses mains, un objet qui projette une lumière tiède-orangée dans l\'obscurité sans éblouir. Son atelier est éclairé uniquement par ses propres créations. L\'équilibre entre l\'ombre et la chaleur dans l\'air est précis.',
      style: 'réaliste Umbrien artisan double élément, Vel\'Nox, lanternes élémentaires Ténèbres/Feu, atelier dans l\'obscurité, lumière tiède',
    },
  ],

  lore_long: `Thyrvox fabrique des lanternes élémentaires qui combinent Ténèbres et Feu dans son atelier à Vel'Nox. Ses lanternes projettent une lumière tiède sans éblouir des yeux adaptés à l'obscurité.

Il vend dans les deux régions. Ses techniques sont des secrets professionnels.

Ses lanternes sont pratiques pour lui. Elles sont politiques pour d'autres — une lumière dans l'obscurité révèle des choses que l'obscurité cachait.`,
};

export default thyrvox;
