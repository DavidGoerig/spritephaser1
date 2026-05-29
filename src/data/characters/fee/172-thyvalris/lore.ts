import type { PersonnageLoreComplet } from '../../../lore-types';

const thyvalris: PersonnageLoreComplet = {
  id: 172,
  nom: 'Thyvalris',
  element: 'Fée',
  espece: 'Givrin',
  region: 'Crysalme',
  faction: 'Monarchie',

  apparence: {
    taille_corpulence: 'Givrine de 200 ans à apparence de 40 ans — la longévité Fée maintient une apparence de maturité stable. Conseillère royale, posture de quelqu\'un dont la présence est attendue dans les salles du pouvoir.',
    peau: 'Blanche-cristalline avec des reflets féeriques — l\'élément Fée d\'une Givrine produit des irisations subtiles dans le froid.',
    yeux: 'Blancs avec une qualité de quelqu\'un qui a déjà vu cette situation et connaît la réponse.',
    vetements: 'Tenue de conseillère royale Givrine — formelle, ancienne, inchangée depuis des décennies.',
    signes_particuliers: 'Elle conseille la Monarchie Givrine depuis 200 ans. Son conseil n\'a pas changé depuis 150 ans — les mêmes recommandations, les mêmes formulations, appliquées à des situations qui ont évolué.',
  },

  psychologie: {
    dominante: 'Conseillère royale Givrine-Fée de 200 ans. Elle a conseillé plusieurs générations de monarques. Son conseil était précis et adapté pendant ses 50 premières années de service. Il n\'a pas changé depuis. Les situations auxquelles elle l\'applique ont changé.',
    mecanisme_de_defense: 'La continuité du conseil comme légitimité. Elle a 200 ans d\'expérience. Son conseil a traversé plusieurs crises. Sa durée est sa validation.',
    contradiction_interne: 'Son conseil de 200 ans était adapté à un contexte qui n\'existe plus entièrement. Elle applique des réponses aux questions d\'un monde légèrement différent. La différence est subtile — subtile au point qu\'elle ne l\'a pas remarquée, ou qu\'elle l\'a remarquée et ne l\'a pas adaptée.',
    rapport_aux_autres: 'Keldris (57) est sa hiérarchie directe — le monarque qu\'elle conseille actuellement. Leth (34) est un contact lointain — un réseau Fée qui lui rappelle que le monde extérieur à Crysalme continue d\'évoluer.',
    vision_du_monde: 'La Monarchie Givrine a survécu 300 ans avec le Gel Éternel grâce à un équilibre précis. Cet équilibre a été maintenu grâce au conseil. Son travail est de maintenir cet équilibre.',
  },

  histoire: {
    enfance: {
      titre: 'La Fée de Crysalme',
      contenu: 'Née à Crysalme 200 ans avant la présente, avec un élément Fée inhabituellement actif pour une Givrine. Elle avait commencé à servir la Monarchie à 30 ans — d\'abord comme assistante, puis comme conseillère.',
    },
    arrivee: {
      titre: 'Le premier conseil',
      contenu: 'Ses 50 premières années de conseil avaient été précises — elle adaptait ses recommandations au contexte politique du moment. À 80 ans, son conseil était reconnu comme indispensable.',
    },
    premier_conflit: {
      titre: 'La stagnation',
      contenu: 'À 100 ans, un conseiller plus jeune avait noté que ses recommandations répétaient des formulations de 20 ans avant. Elle avait répondu que les principes de gouvernance ne changeaient pas. Le conseiller avait eu tort de ne pas insister.',
    },
    revelation: {
      titre: 'Le conseil figé',
      contenu: 'Elle avait compris à 170 ans que son conseil était devenu formulaire. Elle avait choisi de le maintenir — la continuité était une valeur en elle-même. La Monarchie avait besoin de stabilité, pas d\'innovation.',
    },
    etat_actuel: {
      titre: 'La conseillère',
      contenu: 'Elle conseille. Keldris l\'écoute. Le conseil est le même qu\'il y a 150 ans.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyvalris_conseil',
      titre: 'Le conseil inadapté',
      description: 'Thyvalris conseille Keldris (57) avec 200 ans d\'expérience — mais son conseil n\'a pas évolué depuis 150 ans. Si une situation nouvelle se présente — une fracture majeure du Champ, une révélation sur le gel, une pression Dissident sérieuse — son conseil sera formulaire. La Monarchie suivra un conseil conçu pour un contexte qui n\'existe plus.',
      personnages_impliques: [57, 34],
      declencheur: 'Crise nouvelle pour laquelle le conseil de 150 ans n\'est pas adapté',
      consequence: 'Keldris découvrant que son conseillère la plus ancienne ne peut pas répondre à une situation nouvelle',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Conseillère royale Givrine-Fée de 200 ans. Son conseil n\'a pas changé depuis 150 ans. Applique des réponses d\'un contexte passé à des situations qui ont évolué.',

  relations: [
    { id: 57, nom: 'Keldris', type: 'hierarchie', note: 'Monarque actuel qu\'elle conseille depuis plusieurs décennies.' },
    { id: 34, nom: 'Leth', type: 'contact', note: 'Réseau Fée lointain rappelant l\'évolution du monde extérieur.' },
  ],

  combat: {
    sorts: [
      'Aura royale (Fée) — présence de commandement — déstabilisation psychique',
      'Frappe givrée (Glace) — impact de froid — attaque directe',
    ],
  },

  image_prompts: [
    {
      id: 'thyvalris_conseil',
      description: 'Thyvalris conseillant Keldris (57) dans la salle du trône de Crysalme — une Givrine-Fée de 200 ans qui paraît 40, formulant un conseil avec une précision absolue. Keldris l\'écoute. Le conseil est impeccable. Il a 150 ans.',
      style: 'réaliste Givrine-Fée conseillère royale, Crysalme, autorité ancienne, conseil formulaire, salle du trône glacée',
    },
  ],

  lore_long: `Thyvalris conseille la Monarchie Givrine depuis 200 ans. Elle a traversé plusieurs générations de monarques. Son expérience est réelle.

Son conseil n'a pas changé depuis 150 ans. Les mêmes formulations, les mêmes principes, appliqués à des situations qui ont évolué.

Keldris (57) la suit. La Monarchie gouverne avec un conseil conçu pour un monde légèrement différent.`,
};

export default thyvalris;
