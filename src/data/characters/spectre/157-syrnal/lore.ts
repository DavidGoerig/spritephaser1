import type { PersonnageLoreComplet } from '../../../lore-types';

const syrnal: PersonnageLoreComplet = {
  id: 157,
  nom: 'Syrnal',
  element: 'Spectre',
  espece: 'Umbrien',
  region: 'Vel\'Nox',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Umbrien de taille ordinaire avec la posture d\'un artiste — observer, mémoriser, reproduire.',
    peau: 'Gris translucide Umbrien avec des filaments spectraux visibles — son élément est intégré à sa façon de voir.',
    yeux: 'Blancs avec une qualité de quelqu\'un qui capture des détails que les autres manquent.',
    vetements: 'Tenue simple de portraitiste — fonctionnelle, avec des surfaces sur lesquelles il peut travailler immédiatement.',
    signes_particuliers: 'Il vend des portraits de mémoire aux anciens de Vel\'Nox — des représentations de personnes que les anciens ont connues et qui n\'existent plus. Son service est de la nostalgie matérialisée.',
  },

  psychologie: {
    dominante: 'Artiste Umbrien qui crée des portraits de mémoire — des représentations visuelles de personnes décédées ou disparues, construites à partir des souvenirs de ses clients. Il vend ces portraits aux anciens de Vel\'Nox. Son travail intersecte la mémoire historique : certains de ces portraits représentent des personnes de l\'avant-Vol.',
    mecanisme_de_defense: 'L\'art comme médiation. Il matérialise des mémoires — pas les siennes. La distance artistique le protège de la charge émotionnelle.',
    contradiction_interne: 'Il crée des portraits de personnes disparues à partir de mémoires subjectives. Ces portraits deviennent des archives non-officielles de l\'avant-Vol. Leur précision dépend de la mémoire du client — qui peut être fausse, partielle ou réinterprétée.',
    rapport_aux_autres: 'Nyrreth (47) est dans son réseau — quelqu\'un dont les activités à Vel\'Nox créent des demandes de portraits. Osara (51) est dans son réseau — une vieille qui lui fournit des souvenirs de l\'avant-Vol.',
    vision_du_monde: 'Les gens ont besoin d\'avoir les visages des personnes perdues — pas juste leurs noms. Son travail est de rendre possible cette confrontation avec la perte.',
  },

  histoire: {
    enfance: {
      titre: 'L\'art spectral',
      contenu: 'Né avec un élément Spectre orienté vers la perception visuelle plutôt que le mouvement. Il avait développé sa technique de portrait de mémoire à 25 ans — une application artistique de sa capacité à voir ce que les autres ne voient pas.',
    },
    arrivee: {
      titre: 'Les anciens',
      contenu: 'Les anciens de Vel\'Nox avaient été ses premiers clients — des personnes qui voulaient garder le visage de proches décédés. Il avait compris rapidement que certains de ces proches étaient des personnages de l\'avant-Vol.',
    },
    premier_conflit: {
      titre: 'Le portrait inexact',
      contenu: 'Un client avait reconnu que son portrait d\'un proche décédé ne correspondait pas entièrement à ce qu\'il avait décrit. La mémoire du client était partielle. Son portrait était une reconstruction d\'une reconstruction.',
    },
    revelation: {
      titre: 'L\'archive non-officielle',
      contenu: 'Il avait réalisé que sa collection de portraits représentait une archive visuelle de Vel\'Nox d\'avant le Vol — imparfaite, subjective, mais unique.',
    },
    etat_actuel: {
      titre: 'Les portraits',
      contenu: 'Il crée. Sa collection s\'agrandit. Les anciens qui alimentent sa mémoire meurent peu à peu.',
    },
  },

  evenements_narratifs: [
    {
      id: 'syrnal_archive',
      titre: 'L\'archive avant sa disparition',
      description: 'Syrnal crée des portraits de mémoire — une archive visuelle de l\'avant-Vol construite sur des mémoires subjectives. Quand les derniers anciens mourront, ses portraits seront la seule représentation visuelle de personnages de l\'avant-Vol. Si quelqu\'un comprend la valeur de cette archive, elle devra être préservée — ou des factions voudront la contrôler.',
      personnages_impliques: [47, 51],
      declencheur: 'Quelqu\'un comprenant la valeur historique de la collection de portraits',
      consequence: 'Collection identifiée comme archive — avec toutes les implications de contrôle et de préservation',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Artiste de portraits de mémoire. Archive visuelle non-officielle de l\'avant-Vol. Travaille avec les derniers anciens de Vel\'Nox.',

  relations: [
    { id: 47, nom: 'Nyrreth', type: 'contact', note: 'Réseau de Vel\'Nox créant des demandes de portraits.' },
    { id: 51, nom: 'Osara', type: 'contact', note: 'Ancienne qui fournit des souvenirs de l\'avant-Vol.' },
  ],

  combat: {
    sorts: [
      'Projection spectrale (Spectre) — matérialisation d\'image — confusion',
      'Voile visuel (Spectre) — manipulation de perception — désorientation',
    ],
  },

  image_prompts: [
    {
      id: 'syrnal_portrait',
      description: 'Syrnal travaillant sur un portrait de mémoire dans son atelier à Vel\'Nox — un Umbrien concentré sur une représentation d\'une personne décédée, guidé par les souvenirs d\'un ancien assis en face de lui. Le portrait n\'est pas encore fini. Les traits du visage émergent de la mémoire partagée.',
      style: 'réaliste Umbrien artiste spectral, Vel\'Nox, portrait de mémoire, archive non-officielle, avant-Vol',
    },
  ],

  lore_long: `Syrnal crée des portraits de mémoire pour les anciens de Vel'Nox — des représentations de personnes de l'avant-Vol construites à partir de souvenirs.

Sa collection est une archive visuelle non-officielle de l'avant-Vol. Imparfaite, subjective, mais unique.

Quand les derniers anciens mourront, personne ne pourra alimenter de nouveaux portraits.`,
};

export default syrnal;
