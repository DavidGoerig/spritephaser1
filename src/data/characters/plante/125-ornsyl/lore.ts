import type { PersonnageLoreComplet } from '../../../lore-types';

const ornsyl: PersonnageLoreComplet = {
  id: 125,
  nom: 'Ornsyl',
  element: 'Plante',
  espece: 'Sylvan',
  region: 'Sylvera',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Sylvan de 44 ans, mobile avec des mouvements qui connaissent tous les passages d\'une forêt. Il ne va jamais au même endroit deux fois par le même chemin.',
    peau: 'Écorce verte-grise adaptée à plusieurs types de végétation — il se fond dans les forêts de transition et dans les forêts denses également.',
    yeux: 'Verts avec une qualité de vigilance permanente. Il évalue les risques avant d\'agir.',
    vetements: 'Tenue de voyage neutre — aucune marque de faction. Il est connu des deux factions mais n\'appartient à aucune officiellement.',
    signes_particuliers: 'Passeur clandestin entre Sylvera et l\'extérieur. Il aide les Sylvans qui refusent de choisir une faction — l\'exil volontaire comme alternative.',
  },

  psychologie: {
    dominante: 'Passeur Sylvan qui aide ceux qui ne veulent pas choisir entre Conservateurs et Gardiens à quitter Sylvera. Les Dissidentes financent discrètement son travail parce qu\'il affaiblit les factions en les privant de membres. Son alignement personnel est plus complexe.',
    mecanisme_de_defense: 'La mobilité comme protection. Il ne reste jamais assez longtemps pour être identifié comme menace structurelle.',
    contradiction_interne: 'Il aide des gens à quitter Sylvera pour préserver leur liberté de choix. Mais partir est aussi un choix — qui renforce les factions en éliminant ceux qui pourraient les transformer de l\'intérieur.',
    rapport_aux_autres: 'Sylvae (31) est dans son réseau — elle l\'utilise parfois pour faire passer des personnes en danger. Aeris (35) est son adversaire indirect — un agent de l\'Empire qui surveille les flux entre Sylvera et l\'extérieur.',
    vision_du_monde: 'Sylvera a deux factions qui se disputent une forêt. L\'extérieur existe. Ceux qui ne veulent pas vivre dans ce conflit binaire devraient avoir l\'option de partir.',
  },

  histoire: {
    enfance: {
      titre: 'Les passages',
      contenu: 'Né dans une famille de Sylvans qui commercialisaient entre Sylvera et les régions voisines. Il avait appris les passages discrets depuis l\'enfance — une compétence commerciale avant d\'être une compétence politique.',
    },
    arrivee: {
      titre: 'Le premier exilé',
      contenu: 'À 28 ans, il avait aidé un jeune Sylvan à quitter Sylvera après que les deux factions lui avaient rendu la vie impossible. Ce n\'était pas planifié. Il avait répété parce que la demande existait.',
    },
    premier_conflit: {
      titre: 'Aeris',
      contenu: 'Aeris (35) avait commencé à surveiller les flux entre Sylvera et l\'extérieur — les Sylvans qui partaient portaient des connaissances sur les forêts que l\'Empire voulait cartographier. Ornsyl avait dû adapter ses routes.',
    },
    revelation: {
      titre: 'Les Dissidentes',
      contenu: 'Les Dissidentes lui avaient proposé un financement — discret, sans contrepartie officielle. Il avait compris leur logique : il affaiblissait les factions. Il avait accepté l\'argent sans accepter leur cadre entièrement.',
    },
    etat_actuel: {
      titre: 'Les passages',
      contenu: 'Il continue à faire passer des Sylvans. Les routes changent. Aeris cherche. Il évite.',
    },
  },

  evenements_narratifs: [
    {
      id: 'ornsyl_aeris',
      titre: 'Le passeur et l\'agent',
      description: 'Ornsyl fait passer des Sylvans hors de Sylvera. Aeris (35) surveille ces flux. Si Aeris identifie un passage et le bloque — ou si quelqu\'un qu\'Ornsyl devait exfiltrer est arrêté — Ornsyl devra choisir : cesser ses opérations, changer complètement ses routes, ou affronter Aeris directement.',
      personnages_impliques: [31, 35],
      declencheur: 'Aeris identifiant et bloquant un passage d\'Ornsyl',
      consequence: 'Ornsyl contraint de changer de méthode — ou de confronter Aeris',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Passeur Dissident entre Sylvera et l\'extérieur. Aide les Sylvans sans faction à partir. Adversaire indirect d\'Aeris (35).',

  relations: [
    { id: 31, nom: 'Sylvae', type: 'contact', note: 'Utilise parfois ses routes pour des personnes en danger.' },
    { id: 35, nom: 'Aeris', type: 'adversaire', note: 'Agent impérial qui surveille les flux entre Sylvera et l\'extérieur.' },
  ],

  combat: {
    sorts: [
      'Passage végétal (Plante) — création de voies à travers la végétation dense — fuite et infiltration',
      'Camouflage forestier (Plante) — disparition dans la végétation — invisibilité de terrain',
    ],
  },

  image_prompts: [
    {
      id: 'ornsyl_passage',
      description: 'Ornsyl guidant un petit groupe de Sylvans à travers un passage discret à la frontière de Sylvera — un Sylvan de 44 ans qui connaît chaque racine du chemin. Son expression est alerte et concentrée. Le groupe qu\'il guide ne sait pas exactement où il va.',
      style: 'réaliste Sylvan passeur, frontière de Sylvera, passage clandestin, vigilance, aide aux exilés',
    },
  ],

  lore_long: `Ornsyl aide les Sylvans qui refusent de choisir entre Conservateurs et Gardiens à quitter Sylvera. Les Dissidentes financent discrètement son travail.

Aeris (35) surveille les flux entre Sylvera et l'extérieur. Ornsyl change ses routes régulièrement.

Si Aeris bloque un passage, Ornsyl devra choisir entre cesser et confronter.`,
};

export default ornsyl;
