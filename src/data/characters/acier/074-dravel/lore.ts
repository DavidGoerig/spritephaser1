import type { PersonnageLoreComplet } from '../../../lore-types';

const dravel: PersonnageLoreComplet = {
  id: 74,
  nom: 'Dravel',
  element: 'Acier',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Pyrien de 44 ans, robuste avec les bras du forgeron. Il se déplace avec son atelier portable — chariot à deux roues, outils attachés en ordre précis. Sa corpulence dit le travail physique constant.',
    peau: 'Brune Pyrien avec une luminescence argentée aux bras et aux épaules — l\'élément Acier sur un Pyrien, combinaison rare qui lui permet de travailler le métal avec une précision particulière.',
    yeux: 'Brun-rouge, avec la qualité d\'un praticien. Il regarde les structures et les matériaux avant de regarder les personnes.',
    vetements: 'Tablier de forgeron renforcé aux avant-bras, tenue pratique sous. Ses vêtements portent les marques de son travail — brûlures, traces de métal. Il n\'essaie pas de les cacher.',
    signes_particuliers: 'Il connaît les défauts des abris de Varkhôl mieux que leurs concepteurs. Il les a réparés. Un forgeron ambulant voit ce qu\'un architecte ne voit qu\'une fois.',
  },

  psychologie: {
    dominante: 'Forgeron ambulant qui répare les abris endommagés depuis la Rupture. Il va là où les structures ont besoin de lui — sans faction, sans parti. Sa connaissance des défauts structurels est accidentelle et profonde.',
    mecanisme_de_defense: 'Le travail comme réponse à tout. Il y a toujours quelque chose à réparer. Tant qu\'il répare, il ne s\'arrête pas.',
    contradiction_interne: 'Il connaît des défauts structurels importants dans des abris habités. Certains devraient être évacués plutôt que réparés. Il répare. La réparation est ce qu\'on lui demande de faire.',
    rapport_aux_autres: 'Valdris (12) est une référence architecturale — Dravel a réparé des structures de Valdris. Ses réparations parlent de ce que les plans originaux avaient manqué. Skarith (9) — il a réparé des structures dans des zones proches de l\'activité de Skarith sans avoir de contact direct.',
    vision_du_monde: 'Les structures peuvent être réparées. Parfois c\'est suffisant. Parfois ce n\'est pas suffisant. La différence, c\'est ce que lui sait — et il ne décide pas toujours quoi en faire.',
  },

  histoire: {
    enfance: {
      titre: 'L\'élément Acier',
      contenu: 'Né dans une famille de forgerons Pyriens. L\'élément Acier était inattendu — plus souvent Chthonien — mais sa famille l\'avait utilisé comme avantage professionnel. Il avait appris à forger avant de savoir lire.',
    },
    arrivee: {
      titre: 'L\'ambulant',
      contenu: 'À 28 ans, il avait décidé de se spécialiser dans la réparation mobile plutôt que dans un atelier fixe. Plus de clients, moins de concurrence. La Rupture avait explosé sa demande.',
    },
    premier_conflit: {
      titre: 'Ce qu\'il voyait',
      contenu: 'En réparant des structures, il avait commencé à voir leur état réel — pas l\'état dans les rapports, l\'état dans les murs. Certains abris tenaient par habitude plus que par physique. Il réparait. Il ne transmettait pas ses observations.',
    },
    revelation: {
      titre: 'Valdris et les plans',
      contenu: 'Il avait réparé plusieurs structures signées Valdris. Les défauts qu\'il avait réparés n\'auraient pas dû exister dans des plans de cette qualité. Il avait conclu que les plans avaient été modifiés en cours de construction — ou que quelque chose d\'autre s\'était passé.',
    },
    etat_actuel: {
      titre: 'Les réparations continuent',
      contenu: 'Il continue à se déplacer entre les quartiers de Varkhôl. Sa connaissance des structures est la plus précise disponible en dehors des archives officielles — et plus à jour.',
    },
  },

  evenements_narratifs: [
    {
      id: 'dravel_structures',
      titre: 'La carte des défauts',
      description: 'Dravel a une connaissance des défauts structurels de Varkhôl qu\'aucun architecte n\'a. Cette connaissance informelle — dans sa tête, pas dans des documents — est une ressource si quelqu\'un comprend ce qu\'il sait.',
      personnages_impliques: [12, 9],
      declencheur: 'Quelqu\'un demandant à Dravel l\'état réel d\'une structure critique',
      consequence: 'Dravel devant décider si sa connaissance informelle lui donne une responsabilité',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Forgeron ambulant réparant les abris endommagés de Varkhôl. Connaît les défauts mieux que les concepteurs. Sa connaissance est informelle et précise.',

  relations: [
    { id: 12, nom: 'Valdris', type: 'contact', note: 'A réparé ses structures. Les défauts réparés parlent des plans originaux.' },
    { id: 9, nom: 'Skarith', type: 'contact', note: 'Zones proches. Contact indirect.' },
  ],

  combat: {
    sorts: [
      'Frappe d\'acier (Acier) — impact amplifié par l\'élément — dommage concentré sur les équipements et armures',
      'Renforcement (Acier) — durcissement temporaire d\'une structure — réparation d\'urgence sous pression',
    ],
  },

  image_prompts: [
    {
      id: 'dravel_reparation',
      description: 'Dravel avec son chariot de forgeron devant un abri endommagé de Varkhôl — un Pyrien robuste évaluant une structure. Ses bras luisent argentés. Il voit les défauts que le concepteur n\'a pas vus. Son expression est professionnelle et légèrement préoccupée.',
      style: 'réaliste Pyrien forgeron ambulant, abris endommagés de Varkhôl, connaissance informelle des défauts structurels',
    },
  ],

  lore_long: `Dravel répare les abris endommagés de Varkhôl depuis la Rupture. Son élément Acier combiné à son travail de terrain lui a donné une connaissance des défauts structurels plus précise que n'importe quel architecte.

Il connaît des défauts importants dans des structures habitées. Il répare. C'est ce qu'on lui demande.

Sa connaissance informelle est une ressource que personne n'a encore demandé à exploiter.`,
};

export default dravel;
