import type { PersonnageLoreComplet } from '../../../lore-types';

const shyrael: PersonnageLoreComplet = {
  id: 90,
  nom: 'Shyrael',
  element: 'Gravité',
  espece: 'Néréide',
  region: 'Thalassyr',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Néréide de 32 ans, athlétique avec le corps d\'une plongeuse des profondeurs — dense, adapté aux pressions extrêmes. Elle se déplace comme si la gravité ne s\'appliquait pas tout à fait aux mêmes règles pour elle.',
    peau: 'Bleutée Néréide avec des variations subtiles de luminescence liées à la profondeur — son élément Gravité se manifeste par des zones de densité lumineuse changeante.',
    yeux: 'Bleus avec une qualité de quelqu\'un qui mesure les profondeurs et les distances avec précision.',
    vetements: 'Équipement de plongée profonde modifié — résistant aux pressions extrêmes. Ses combinaisons ont duré des années de modifications.',
    signes_particuliers: 'Elle connaît les caves sous-marines où Thariel (18) cache ses données. Ce n\'est pas un secret pour elle — elle y a découvert les caches il y a 2 ans. Elle n\'a jamais dit à personne qu\'elle les avait trouvées.',
  },

  psychologie: {
    dominante: 'Plongeuse des profondeurs qui connaît la géographie sous-marine de Thalassyr mieux que quiconque. Elle a trouvé les caches de données de Thariel (18) il y a 2 ans. Elle n\'en a parlé à personne. Ce silence n\'est pas du soutien actif — c\'est de la non-interférence.',
    mecanisme_de_defense: 'La neutralité des profondeurs. Ce qu\'on voit dans les caves sous-marines n\'appartient pas au monde de la surface.',
    contradiction_interne: 'Elle sait où sont les archives de Thariel. Thariel ne sait pas qu\'elle les a trouvées. Cette asymétrie de connaissance est inconfortable mais pas assez pour la forcer à agir.',
    rapport_aux_autres: 'Thariel (18) est quelqu\'un dont elle connaît le travail sans le connaître directement. Narev (21) est dans son réseau — ils explorent les mêmes zones sous-marines.',
    vision_du_monde: 'Les profondeurs ont leurs propres règles. Ce qui y est trouvé y reste. Cette philosophie de plongeuse est sa façon d\'habiter l\'information qu\'elle a.',
  },

  histoire: {
    enfance: {
      titre: 'La plongée',
      contenu: 'Née dans une famille de Néréides plongeurs. Son élément Gravité l\'avait rendue naturellement adaptée aux grandes profondeurs — la pression ne l\'affectait pas comme les autres.',
    },
    arrivee: {
      titre: 'Les caves',
      contenu: 'Elle avait cartographié les caves sous-marines de Thalassyr sur 10 ans. Une des caves contenait des structures artificielles — récentes. Elle avait compris que c\'était un lieu de cache.',
    },
    premier_conflit: {
      titre: 'La découverte',
      contenu: 'En examinant les caches, elle avait compris qu\'elles contenaient des données encodées. Elle n\'avait pas les moyens de les déchiffrer. Elle avait décidé que les caches n\'étaient pas ses affaires.',
    },
    revelation: {
      titre: 'Thariel',
      contenu: 'Elle avait inféré que les caches appartenaient à Thariel (18) — une archiviste dont elle avait entendu parler dans son réseau de plongeurs. Elle n\'avait pas fait le contact direct.',
    },
    etat_actuel: {
      titre: 'La connaissance silencieuse',
      contenu: 'Elle sait. Elle n\'a pas dit. Thariel cache toujours dans les mêmes caves. La situation n\'a pas changé depuis 2 ans.',
    },
  },

  evenements_narratifs: [
    {
      id: 'shyrael_caves',
      titre: 'La cartographe des caches',
      description: 'Shyrael est la seule personne extérieure au réseau de Thariel (18) à connaître la localisation de ses caches. Si ces caches sont menacées et que Thariel ne le sait pas, Shyrael est la seule à pouvoir la prévenir — ou la seule à pouvoir les livrer à quelqu\'un d\'autre.',
      personnages_impliques: [18, 21],
      declencheur: 'Les caches de Thariel menacées par une opération impériale ou autre',
      consequence: 'Shyrael choisissant entre son silence habituel et une intervention qui révèle qu\'elle sait',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Plongeuse des profondeurs. Connaît les caches sous-marines de Thariel (18). Ne l\'a jamais dit à personne. Non-interférence silencieuse.',

  relations: [
    { id: 18, nom: 'Thariel', type: 'contact', note: 'Connaît ses caches sans la connaître directement.' },
    { id: 21, nom: 'Narev', type: 'contact', note: 'Réseau de plongeurs en commun.' },
  ],

  combat: {
    sorts: [
      'Manipulation gravitationnelle (Gravité) — modification locale de la pesanteur — déplacement ou immobilisation',
      'Compression sous-marine (Gravité) — amplification de la pression — dommage concentré en milieu aquatique',
    ],
  },

  image_prompts: [
    {
      id: 'shyrael_plongee',
      description: 'Shyrael dans les caves sous-marines de Thalassyr — une Néréide de 32 ans naviguant dans l\'obscurité profonde avec une fluidité qui défie la gravité. En arrière-plan, une structure de cache. Elle la connaît. Elle passe devant sans s\'arrêter.',
      style: 'réaliste Néréide plongeuse des profondeurs, caves sous-marines de Thalassyr, caches connues, non-interférence silencieuse',
    },
  ],

  lore_long: `Shyrael plonge dans les caves sous-marines de Thalassyr. Elle a trouvé les caches de données de Thariel (18) il y a 2 ans.

Elle n'en a parlé à personne. Ce n'est pas du soutien actif — c'est de la non-interférence.

Thariel cache toujours dans les mêmes caves. Shyrael sait. Le silence dure depuis 2 ans.`,
};

export default shyrael;
