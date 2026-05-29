import type { PersonnageLoreComplet } from '../../../lore-types';

const threnvox: PersonnageLoreComplet = {
  id: 200,
  nom: 'Threnvox',
  element: 'Feu',
  element2: 'Ténèbres',
  espece: 'Pyrien',
  region: 'Vel\'Nox',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Pyrien de 41 ans, Régulateur-Ombre — corpulence de combattant agile, habitué à opérer dans des espaces restreints entre Varkhôl et Vel\'Nox.',
    peau: 'Rouge-ardente avec des zones d\'obscurité qui absorbent la lumière — son double élément Feu/Ténèbres crée une apparence qui déstabilise les observateurs.',
    yeux: 'Orangés avec des pupilles qui s\'élargissent dans l\'obscurité plutôt que de se contracter.',
    vetements: 'Tenue de Régulateur impérial adaptée à Vel\'Nox — sombre avec des éléments thermiques intégrés.',
    signes_particuliers: 'Il est un pont entre les deux mondes — un Pyrien qui opère dans Vel\'Nox, capable d\'utiliser l\'obscurité des Umbriens pour des missions impériales que les Pyriens standard ne pourraient pas accomplir.',
  },

  psychologie: {
    dominante: 'Régulateur-Ombre employé par l\'Empire pour des missions dans Vel\'Nox. Son double élément Feu/Ténèbres lui permet d\'opérer dans l\'obscurité profonde de Vel\'Nox tout en conservant une puissance thermique Pyrien. Il est la ressource impériale pour les opérations qui nécessitent les deux capacités simultanément.',
    mecanisme_de_defense: 'L\'utilité exceptionnelle. Il est irremplaçable pour un type spécifique de mission. Cette irremplaçabilité lui donne une marge de manœuvre que les Régulateurs standard n\'ont pas.',
    contradiction_interne: 'Être un pont entre deux mondes signifie qu\'il n\'appartient complètement à aucun. Les Pyriens voient son obscurité avec méfiance. Les Umbriens voient sa chaleur comme une intrusion. Il opère dans un interstice qui lui donne accès à tout et appartenance à rien.',
    rapport_aux_autres: 'Cendrix (2) est dans son réseau — le commandant de régulation qui assigne ses missions. Vethis (46) est son adversaire direct — le chef Dissident Umbrien qui voit Threnvox comme une menace particulière parce qu\'il peut opérer dans l\'obscurité de Vel\'Nox.',
    vision_du_monde: 'Les deux éléments qui coexistent en lui lui ont appris que les oppositions supposées — feu et obscurité — sont compatibles avec la bonne expertise. L\'Empire utilise cette compatibilité. Il n\'a pas de problème avec ça.',
  },

  histoire: {
    enfance: {
      titre: 'Le double élément',
      contenu: 'Son double élément Feu/Ténèbres s\'était manifesté à 14 ans — une combinaison rare qu\'il avait mis des années à contrôler. L\'Empire l\'avait identifié et recruté à 20 ans pour sa capacité unique.',
    },
    arrivee: {
      titre: 'Les missions Vel\'Nox',
      contenu: 'Sa première mission dans Vel\'Nox à 28 ans avait révélé l\'utilité de son double élément — il pouvait naviguer dans l\'obscurité profonde sans torche, tout en conservant la puissance thermique d\'un Régulateur Pyrien. L\'Empire avait compris ce qu\'il avait.',
    },
    premier_conflit: {
      titre: 'Vethis',
      contenu: 'Vethis (46) avait identifié que les opérations impériales dans Vel\'Nox utilisaient un agent capable d\'obscurité. L\'adversaire invisible était devenu l\'adversaire nommé. Threnvox avait commencé à opérer avec des contremesures anti-identification.',
    },
    revelation: {
      titre: 'L\'interstice',
      contenu: 'Il avait compris que son utilité à l\'Empire venait précisément de son impossibilité à appartenir à un seul monde. Cette position lui donnait accès mais pas ancrage. Il avait décidé que l\'accès était plus utile.',
    },
    etat_actuel: {
      titre: 'Le Régulateur-Ombre',
      contenu: 'Il opère. Dans Vel\'Nox quand l\'Empire en a besoin. Dans Varkhôl quand il rentre. Il n\'est complètement chez lui nulle part.',
    },
  },

  evenements_narratifs: [
    {
      id: 'threnvox_velnox',
      titre: 'L\'agent dans l\'obscurité',
      description: 'Threnvox est l\'agent impérial qui peut opérer dans l\'obscurité de Vel\'Nox. Si Vethis (46) parvient à l\'identifier complètement et à organiser une interception dans l\'obscurité profonde, l\'Empire perdra sa ressource unique pour les opérations dans Vel\'Nox.',
      personnages_impliques: [2, 46],
      declencheur: 'Vethis organisant une interception ciblée de Threnvox dans une zone d\'obscurité profonde',
      consequence: 'Confrontation dans l\'obscurité entre Threnvox et des Umbriens sur leur terrain — et l\'Empire perdant potentiellement son Régulateur-Ombre',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Régulateur-Ombre impérial opérant entre Varkhôl et Vel\'Nox. Double élément Feu/Ténèbres. Ressource unique de l\'Empire pour les opérations dans l\'obscurité de Vel\'Nox.',

  relations: [
    { id: 2, nom: 'Cendrix', type: 'hierarchie', note: 'Commandant de régulation assignant ses missions.' },
    { id: 46, nom: 'Vethis', type: 'adversaire', note: 'Chef Dissident Umbrien identifiant Threnvox comme menace dans Vel\'Nox.' },
  ],

  combat: {
    sorts: [
      'Frappe d\'ombre ardente (Feu/Ténèbres) — attaque combinant chaleur et obscurité — dommages élémentaires doubles',
      'Immersion dans l\'obscurité (Ténèbres) — disparition dans l\'ombre — invisibilité tactique',
    ],
  },

  image_prompts: [
    {
      id: 'threnvox_operation',
      description: 'Threnvox dans les marchés nocturnes de Vel\'Nox — un Pyrien de 41 ans dont l\'apparence rouge-ardente est partiellement absorbée par des zones d\'obscurité. Il se déplace dans l\'obscurité sans torche, visible seulement par la chaleur résiduelle qu\'il émet. Des Umbriens autour de lui ne savent pas qu\'un Régulateur opère parmi eux.',
      style: 'réaliste Pyrien/Umbrien Régulateur-Ombre, Vel\'Nox, double élément Feu/Ténèbres, opération impériale, obscurité profonde',
    },
  ],

  lore_long: `Threnvox est Régulateur-Ombre pour l'Empire — un Pyrien avec un double élément Feu/Ténèbres qui lui permet d'opérer dans l'obscurité profonde de Vel'Nox.

Il est la ressource impériale pour les missions qui nécessitent à la fois la puissance thermique Pyrien et la capacité à naviguer dans l'obscurité Umbrien.

Vethis (46) l'a identifié. L'interstice entre deux mondes est sa force et son absence d'appartenance.`,
};

export default threnvox;
