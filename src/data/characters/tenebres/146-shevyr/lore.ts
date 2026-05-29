import type { PersonnageLoreComplet } from '../../../lore-types';

const shevyr: PersonnageLoreComplet = {
  id: 146,
  nom: 'Shevyr',
  element: 'Ténèbres',
  espece: 'Umbrien',
  region: 'Vel\'Nox',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Umbrien de taille ordinaire, avec la posture de quelqu\'un qui écoute plus qu\'il ne parle. Ses mouvements sont économiques — pas de geste superflu.',
    peau: 'Gris-bleu Umbrien avec une luminescence nocturne faible — il minimise son rayonnement élémentaire pour rester discret.',
    yeux: 'Noirs avec une qualité de quelqu\'un qui évalue la valeur de chaque information qu\'il reçoit.',
    vetements: 'Tenue sobre de marchand — ni trop pauvre pour être ignoré, ni assez riche pour attirer l\'attention.',
    signes_particuliers: 'Marchand d\'informations à Vel\'Nox depuis 20 ans. Sa règle absolue : neutre absolu par intérêt financier. Il ne vend pas à une faction contre une autre — il vend à tous.',
  },

  psychologie: {
    dominante: 'Marchand d\'informations à Vel\'Nox depuis 20 ans. Sa neutralité n\'est pas éthique — elle est financière. Un marchand qui prend parti perd des clients. Sa réputation de neutralité est son capital principal.',
    mecanisme_de_defense: 'La neutralité comme business model. Il ne choisit pas de camps — il choisit des marges.',
    contradiction_interne: 'Sa neutralité financière a des limites qu\'il n\'a pas encore testées. Si une transaction lui était proposée qui causerait un dommage systémique à Vel\'Nox — sa base de clients — sa neutralité absolue serait confrontée à son intérêt personnel.',
    rapport_aux_autres: 'Tharyn (50) est dans son réseau — un fournisseur d\'informations de qualité. Le Vol de la Lumière est le contexte narratif qui structure son marché.',
    vision_du_monde: 'L\'information est la monnaie de Vel\'Nox. La vendre à tous crée un marché équilibré. Prendre parti crée un monopole favorable à un camp — et une vendetta de l\'autre.',
  },

  histoire: {
    enfance: {
      titre: 'Le marché',
      contenu: 'Né à Vel\'Nox dans les marchés nocturnes. Il avait commencé à vendre de l\'information à 15 ans — des rumeurs d\'abord, des données vérifiées ensuite. La différence de prix entre une rumeur et un fait vérifié avait structuré son éthique professionnelle.',
    },
    arrivee: {
      titre: 'La neutralité',
      contenu: 'À 22 ans, il avait failli perdre un client majeur en vendant une information à ses adversaires. Il avait réalisé que sa survie professionnelle dépendait d\'une neutralité absolue — pas une neutralité partielle.',
    },
    premier_conflit: {
      titre: 'La tentation factionnelle',
      contenu: 'Plusieurs factions de Vel\'Nox lui avaient offert des conditions préférentielles pour une exclusivité partielle. Il avait refusé toutes les offres. La neutralité valait plus que les marges supplémentaires.',
    },
    revelation: {
      titre: '20 ans',
      contenu: 'Après 20 ans, il était la référence de l\'information à Vel\'Nox — précisément parce qu\'il n\'avait jamais trahi sa neutralité. Sa réputation était son actif principal.',
    },
    etat_actuel: {
      titre: 'Le marché',
      contenu: 'Il vend. Toutes les factions lui achètent. Sa neutralité tient.',
    },
  },

  evenements_narratifs: [
    {
      id: 'shevyr_neutralite',
      titre: 'La transaction qui teste la neutralité',
      description: 'Shevyr est le marchand d\'information le plus fiable de Vel\'Nox parce qu\'il est neutre. Si une transaction lui est proposée — une information qui permettrait à une faction de dominer définitivement les marchés nocturnes — sa neutralité financière entre en conflit avec son intérêt de marché. Sa décision définira ce que sa neutralité vaut vraiment.',
      personnages_impliques: [50],
      declencheur: 'Transaction proposée qui avantagerait définitivement une faction à Vel\'Nox',
      consequence: 'Shevyr maintenant sa neutralité ou la brisant — et les conséquences sur son marché',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Marchand d\'information neutre de Vel\'Nox depuis 20 ans. Sa neutralité est financière, pas éthique. Toutes les factions lui font confiance.',

  relations: [
    { id: 50, nom: 'Tharyn', type: 'contact', note: 'Fournisseur d\'informations de qualité.' },
  ],

  combat: {
    sorts: [
      'Voile de ténèbres (Ténèbres) — obscurcissement — fuite ou distraction',
      'Absorption d\'ombre (Ténèbres) — absorption de lumière ambiante — camouflage nocturne',
    ],
  },

  image_prompts: [
    {
      id: 'shevyr_marche',
      description: 'Shevyr dans un marché nocturne de Vel\'Nox — un Umbrien discret qui écoute une transaction entre deux partis qui ne savent pas qu\'il écoute. Son expression est de quelqu\'un qui calcule la valeur de ce qu\'il entend.',
      style: 'réaliste Umbrien marchand d\'information, Vel\'Nox, neutralité financière, marchés nocturnes, écoute professionnelle',
    },
  ],

  lore_long: `Shevyr vend de l'information à Vel'Nox depuis 20 ans. Sa règle : neutralité absolue par intérêt financier. Toutes les factions lui achètent.

Sa réputation de neutralité est son capital principal. La briser lui coûterait plus que n'importe quelle transaction.

Si une offre lui était faite qui testerait vraiment cette neutralité, il n'a jamais eu à décider.`,
};

export default shevyr;
