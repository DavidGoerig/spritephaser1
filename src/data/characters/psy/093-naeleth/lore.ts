import type { PersonnageLoreComplet } from '../../../lore-types';

const naeleth: PersonnageLoreComplet = {
  id: 93,
  nom: 'Naeleth',
  element: 'Psy',
  espece: 'Néréide',
  region: 'Thalassyr',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: 'Néréide de 33 ans, de taille ordinaire avec une façon de s\'approcher des gens qui est douce et calculée en même temps. Elle ne semble pas menaçante. C\'est voulu.',
    peau: 'Bleutée Néréide avec une luminescence violette aux mains — l\'élément Psy d\'une recruteuse qui utilise la lecture psychique pour identifier les profils qu\'elle cherche.',
    yeux: 'Bleu-violet, avec une qualité d\'empathie précise. Elle sait ce que les gens veulent entendre. Elle le dit.',
    vetements: 'Tenue civile ordinaire — rien qui identifie la Convergence. La discrétion est professionnelle.',
    signes_particuliers: 'Elle recrute discrètement pour la Convergence à Thalassyr. Sa cible : des profils d\'Élus purs pour Crysta (20). Sa méthode : l\'empathie instrumentalisée.',
  },

  psychologie: {
    dominante: 'Recruteuse Convergence à Thalassyr. Elle cherche des Élus avec un élément pur et fort pour Crysta (20) — des profils utiles au Protocole d\'Identification. Elle utilise son élément Psy pour identifier ces profils avant de les approcher.',
    mecanisme_de_defense: 'La conviction de la Convergence comme protection. Elle recrute des personnes pour une organisation qui a une doctrine. La doctrine justifie la méthode.',
    contradiction_interne: 'Elle utilise l\'empathie pour recruter. La lecture psychique lui donne des informations sur ses cibles qu\'elles ne lui ont pas données volontairement. Cette asymétrie n\'est pas dans la doctrine de la Convergence qu\'elle suit.',
    rapport_aux_autres: 'Crysta (20) est sa destinataire — les profils qu\'elle recrute vont à Crysta. Shael (48) est dans son réseau étendu — leurs activités se superposent sans contact direct.',
    vision_du_monde: 'La Convergence redistribue les ressources élémentaires. Les Élus purs sont des ressources. La redistribution nécessite des ressources.',
  },

  histoire: {
    enfance: {
      titre: 'La Convergence',
      contenu: 'Née dans une famille proche de la Convergence. Son élément Psy l\'avait orientée vers le travail de terrain — identifier les profils compatibles avec la doctrine.',
    },
    arrivee: {
      titre: 'Thalassyr',
      contenu: 'Affectée à Thalassyr à 28 ans. La région avait une densité d\'Élus intéressante pour la Convergence — beaucoup d\'Élus Eau, quelques profils plus rares.',
    },
    premier_conflit: {
      titre: 'La méthode',
      contenu: 'Elle avait développé sa méthode sur le terrain : identifier avant d\'approcher, approcher avec le bon argument par personne, ne pas expliquer entièrement le rôle de la Convergence au début. Cette méthode fonctionnait.',
    },
    revelation: {
      titre: 'Crysta',
      contenu: 'Ce que Crysta (20) faisait des profils qu\'elle envoyait n\'était pas toujours clair pour Naeleth. Les profils devenaient des ressources dans un système plus large qu\'elle ne contrôlait pas.',
    },
    etat_actuel: {
      titre: 'Le recrutement',
      contenu: 'Elle recrute. Les profils circulent. Elle préfère ne pas savoir exactement ce qu\'ils deviennent.',
    },
  },

  evenements_narratifs: [
    {
      id: 'naeleth_profils',
      titre: 'Ce que devient un profil recruté',
      description: 'Naeleth recrute des profils pour Crysta (20). Elle ne sait pas exactement ce que Crysta en fait. Si elle apprenait le destin réel des personnes qu\'elle a recrutées, elle devrait décider si sa conviction dans la Convergence résiste à cette information.',
      personnages_impliques: [20, 48],
      declencheur: 'Naeleth apprenant le destin d\'un profil qu\'elle a recruté',
      consequence: 'Remise en question de son travail — ou rationalisation de la doctrine',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Recruteuse discrète de la Convergence à Thalassyr. Cherche des profils d\'Élus purs pour Crysta (20).',

  relations: [
    { id: 20, nom: 'Crysta', type: 'allié', note: 'Sa destinataire. Reçoit les profils recrutés.' },
    { id: 48, nom: 'Shael', type: 'contact', note: 'Réseau étendu. Activités qui se superposent.' },
  ],

  combat: {
    sorts: [
      'Empathie instrumentalisée (Psy) — identification précise des besoins d\'une cible — approche sur-mesure',
      'Brouillage de perception (Psy) — interruption de la conscience d\'une cible — protection lors d\'une fuite',
    ],
  },

  image_prompts: [
    {
      id: 'naeleth_recrutement',
      description: 'Naeleth dans un marché de Thalassyr — une Néréide de 33 ans en conversation avec un Élu. Son expression est d\'empathie sincère. Ses mains luisent légèrement. Elle évalue ce qu\'elle écoute.',
      style: 'réaliste Néréide recruteuse Convergence, marché de Thalassyr, empathie instrumentalisée, profils ciblés',
    },
  ],

  lore_long: `Naeleth recrute des profils d'Élus purs pour Crysta (20) à Thalassyr. Sa méthode : identifier avec l'élément Psy, approcher avec l'empathie.

Elle utilise de l'information que ses cibles ne lui ont pas donnée volontairement.

Ce que Crysta fait des profils n'est pas toujours clair pour elle. Elle préfère ne pas demander.`,
};

export default naeleth;
