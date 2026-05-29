import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrvalis: PersonnageLoreComplet = {
  id: 175,
  nom: 'Thyrvalis',
  element: 'Glace',
  espece: 'Givrin',
  region: 'Crysalme',
  faction: 'Monarchie',

  apparence: {
    taille_corpulence: 'Givrin de 55 ans, historien officiel — posture académique, l\'autorité de quelqu\'un dont la version fait foi.',
    peau: 'Blanche-cristalline dense avec des marques d\'encre givrée — il passe ses journées à écrire l\'histoire.',
    yeux: 'Bleus avec une qualité de quelqu\'un qui sait qu\'il contrôle le récit et que ce contrôle est un travail sérieux.',
    vetements: 'Tenue d\'historien officiel de la Monarchie Givrine — titre visible, position claire.',
    signes_particuliers: 'Sa version officielle du gel de Karath contredit celle de Syraris (164) sur 3 points critiques. Syraris a 400 ans. Elle était présente. Thyrvalis est né 145 ans après le gel.',
  },

  psychologie: {
    dominante: 'Historien officiel du Gel Éternel. Il est l\'auteur de la version canonique des événements du gel de Karath. Sa version est basée sur les archives officielles — les archives que Keldris (57) contrôle. Elle contredit les témoignages de Syraris (164), qui était présente au moment du gel.',
    mecanisme_de_defense: 'Les archives comme légitimité. Sa version est documentée dans des sources primaires officielles. Les témoignages oraux d\'un individu sont moins fiables que des archives institutionnelles. C\'est une position académiquement défendable.',
    contradiction_interne: 'Les archives officielles qu\'il cite ont été constituées après le gel — certaines, révisées après. Syraris était présente. Sur les 3 points où leurs versions divergent, Syraris donne des détails cohérents avec des sources indépendantes que Thyrvalis n\'a pas consultées ou n\'a pas cités.',
    rapport_aux_autres: 'Syraris (164) est son adversaire indirect — il n\'a jamais eu de confrontation directe avec elle, mais sa version officielle invalide son témoignage. Thyval (55) est dans son réseau — quelqu\'un qui a accès aux deux versions et voit les divergences.',
    vision_du_monde: 'L\'histoire est ce que les archives disent. Les archives sont ce que les institutions conservent. Les institutions ont la responsabilité de conserver des récits cohérents. Sa version est cohérente.',
  },

  histoire: {
    enfance: {
      titre: 'L\'histoire de Crysalme',
      contenu: 'Formation d\'historien à Crysalme. Spécialisation dans le Gel Éternel — le corpus le plus riche et le plus complexe de l\'historiographie Givrine.',
    },
    arrivee: {
      titre: 'La version officielle',
      contenu: 'Il avait été nommé historien officiel du Gel Éternel à 40 ans. Sa première tâche avait été de synthétiser les archives existantes en une version canonique. Il avait produit un document de référence qui était depuis devenu la base de toute histoire officielle du gel.',
    },
    premier_conflit: {
      titre: 'Le témoignage de Syraris',
      contenu: 'Quelqu\'un lui avait transmis des extraits des témoignages de Syraris (164) — les métaphores de la Givrine-Fée de 400 ans. Il avait identifié les 3 points de divergence. Il avait conclu que les témoignages oraux d\'un individu, même vieux de 400 ans, n\'avaient pas la même valeur que les archives institutionnelles.',
    },
    revelation: {
      titre: 'Les sources indépendantes',
      contenu: 'Thyval (55) lui avait signalé des sources indépendantes — des correspondances familiales non-officielles de familles de soldats gelés — qui corroboraient certains détails de Syraris sur les 3 points divergents. Il avait noté les sources. Il ne les avait pas intégrées dans sa version canonique.',
    },
    etat_actuel: {
      titre: 'L\'historien officiel',
      contenu: 'Il écrit. Sa version fait foi. Les sources indépendantes sont dans ses notes.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrvalis_syraris',
      titre: 'Les 3 points divergents',
      description: 'Thyrvalis et Syraris (164) ont des versions divergentes du gel de Karath sur 3 points précis. Si quelqu\'un — Thyval (55), Velkris (166) — comparait les deux versions avec des sources indépendantes, les 3 divergences pourraient révéler que la version officielle a été révisée pour supprimer des informations gênantes sur les circonstances réelles du gel.',
      personnages_impliques: [164, 55],
      declencheur: 'Comparaison directe des deux versions avec des sources indépendantes',
      consequence: 'Révélation que la version officielle du gel de Karath contient des révisions intentionnelles',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Historien officiel du Gel Éternel. Sa version canonique contredit celle de Syraris (164) sur 3 points critiques. Né 145 ans après le gel. Syraris était présente.',

  relations: [
    { id: 164, nom: 'Syraris', type: 'adversaire', note: 'Témoin direct dont le témoignage contredit sa version officielle sur 3 points.' },
    { id: 55, nom: 'Thyval', type: 'contact', note: 'A accès aux deux versions et aux sources indépendantes corroborant Syraris.' },
  ],

  combat: {
    sorts: [
      'Gel historique (Glace) — immobilisation de position — contrôle de terrain',
      'Barrière d\'archives (Glace) — protection défensive — survie académique',
    ],
  },

  image_prompts: [
    {
      id: 'thyrvalis_version',
      description: 'Thyrvalis dans ses bureaux à Crysalme — un Givrin de 55 ans devant la version officielle du gel de Karath. Sur une feuille séparée, des notes sur les témoignages de Syraris (164) avec 3 points marqués d\'un trait. Les sources indépendantes qui corroborent Syraris sont dans un tiroir. Son expression est de quelqu\'un qui sait exactement où se trouvent les divergences.',
      style: 'réaliste Givrin historien officiel, Crysalme, version canonique vs témoignage, 3 points divergents, archives révisées',
    },
  ],

  lore_long: `Thyrvalis est l'historien officiel du Gel Éternel à Crysalme. Sa version canonique du gel de Karath est la référence institutionnelle.

Elle contredit celle de Syraris (164) sur 3 points précis. Syraris a 400 ans et était présente. Thyrvalis est né 145 ans après.

Des sources indépendantes corroborent Syraris sur ces 3 points. Elles sont dans ses notes, pas dans sa version officielle.`,
};

export default thyrvalis;
