import type { PersonnageLoreComplet } from '../../../lore-types';

const velkris: PersonnageLoreComplet = {
  id: 166,
  nom: 'Velkris',
  element: 'Stellaire',
  espece: 'Givrin',
  region: 'Crysalme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Givrin de 51 ans, astronome — posture de quelqu\'un qui regarde vers le haut plus que vers les autres.',
    peau: 'Blanche-cristalline avec des luminescences stellaires argentées — l\'élément Stellaire chez un Givrin produit des effets visuels particulièrement nets dans le froid.',
    yeux: 'Argentés avec une qualité de quelqu\'un qui a une hypothèse et attend que les étoiles la confirment.',
    vetements: 'Tenue d\'astronome indépendant — pas de l\'équipement officiel de la Monarchie.',
    signes_particuliers: 'Il cherche les alignements stellaires liés au gel de Karath. Son hypothèse est que le gel était déclenché par un alignement astronomique précis. Cette hypothèse est considérée hérétique par la Monarchie.',
  },

  psychologie: {
    dominante: 'Astronome Givrin indépendant qui cherche une explication stellaire au gel de Karath. Son hypothèse : le gel de Karath était lié à un alignement astronomique — pas à une décision ou un pouvoir élémentaire pur. Cette hypothèse implique que le gel était prédictible et potentiellement reproductible. La Monarchie la considère hérétique.',
    mecanisme_de_defense: 'La science comme légitimité. Son hypothèse est scientifique — elle peut être vérifiée par les données astronomiques. Si les données la confirment, elle devient irréfutable.',
    contradiction_interne: 'Si son hypothèse est correcte, le gel de Karath peut se reproduire lors d\'un alignement similaire. Cette implication est ce que la Monarchie ne veut pas qu\'il pense. Lui-même n\'est pas sûr de vouloir avoir raison.',
    rapport_aux_autres: 'Thyval (55) est dans son réseau — quelqu\'un qui comprend l\'importance de ses recherches. Karath (52) est l\'archive — les données historiques qu\'il analyse.',
    vision_du_monde: 'Les phénomènes extrêmes ont des causes identifiables. Le gel de Karath a une cause stellaire. Identifier cette cause ne dévaluerait pas le gel — ça l\'expliquerait.',
  },

  histoire: {
    enfance: {
      titre: 'L\'astronomie',
      contenu: 'Formation en astronomie à Crysalme. Il avait commencé à s\'intéresser aux alignements stellaires au moment du gel de Karath à 25 ans — en étudiant les archives historiques, pas en observant directement.',
    },
    arrivee: {
      titre: 'L\'hypothèse',
      contenu: 'À 38 ans, il avait formulé une corrélation entre les données stellaires au moment du gel de Karath et un alignement particulier. La corrélation était suffisamment forte pour mériter une vérification. Il avait publié une note préliminaire.',
    },
    premier_conflit: {
      titre: 'L\'hérésie',
      contenu: 'La Monarchie avait qualifié sa note d\'"hérétique" — l\'hypothèse stellaire réduisait le gel de Karath à un phénomène physique, ce qui était incompatible avec la version Monarchique. Il avait continué ses recherches de façon indépendante.',
    },
    revelation: {
      titre: 'La prochaine occurrence',
      contenu: 'En calculant les cycles d\'alignements, il avait identifié une date approximative pour un alignement similaire à celui du gel de Karath. Cette date était dans les 40 prochaines années. Il n\'avait pas publié ce calcul.',
    },
    etat_actuel: {
      titre: 'L\'astronome hérétique',
      contenu: 'Il observe. Ses données s\'accumulent. La date qu\'il a calculée se rapproche.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velkris_alignement',
      titre: 'La prochaine occurrence calculée',
      description: 'Velkris a calculé une date approximative pour un alignement stellaire similaire à celui du gel de Karath — dans les 40 prochaines années. Si son hypothèse est correcte, cet alignement pourrait déclencher un nouveau gel. Si quelqu\'un prend cette hypothèse au sérieux — Thyval (55), Velsa (58) — les implications pour Crysalme sont immenses.',
      personnages_impliques: [55, 52],
      declencheur: 'Quelqu\'un prenant l\'hypothèse stellaire au sérieux et demandant ses calculs',
      consequence: 'Date de prochain alignement révélée — et implications pour le Gel Éternel exposées',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Astronome hérétique cherchant l\'explication stellaire du gel de Karath. A calculé une date pour la prochaine occurrence possible. Ne l\'a pas publiée.',

  relations: [
    { id: 55, nom: 'Thyval', type: 'contact', note: 'Comprend l\'importance des recherches.' },
    { id: 52, nom: 'Karath', type: 'contact', note: 'Archive historique centrale de ses données.' },
  ],

  combat: {
    sorts: [
      'Faisceau stellaire givrin (Stellaire) — projection de lumière stellaire dans le froid — attaque précise',
      'Cartographie céleste (Stellaire) — identification précise de position — avantage de terrain',
    ],
  },

  image_prompts: [
    {
      id: 'velkris_observation',
      description: 'Velkris dans son observatoire à Crysalme — un Givrin de 51 ans regardant vers le ciel nocturne étoilé. Ses calculs sur le prochain alignement sont devant lui. Son expression est de quelqu\'un qui espère avoir tort sur une de ses conclusions.',
      style: 'réaliste Givrin astronome hérétique, Crysalme, alignements stellaires, hypothèse du gel de Karath, calcul de prochaine occurrence',
    },
  ],

  lore_long: `Velkris cherche l'explication stellaire du gel de Karath. Son hypothèse : un alignement astronomique a déclenché le gel. La Monarchie la considère hérétique.

Il a calculé la date approximative d'un prochain alignement similaire — dans les 40 prochaines années. Il n'a pas publié ce calcul.

Si son hypothèse est correcte, un nouveau gel est prévisible.`,
};

export default velkris;
