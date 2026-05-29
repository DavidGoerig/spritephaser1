import type { PersonnageLoreComplet } from '../../../lore-types';

const nyrval: PersonnageLoreComplet = {
  id: 155,
  nom: 'Nyrval',
  element: 'Ténèbres',
  espece: 'Umbrien',
  region: 'Vel\'Nox',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Umbrienne de 90 ans — très vieille, avec la densité de présence que les Umbriens développent avec l\'âge extrême.',
    peau: 'Gris-noir profond Umbrien avec une luminescence nocturne très faible — l\'âge l\'a presque éteinte.',
    yeux: 'Noirs sans aucun reflet avec une qualité de quelqu\'un qui se souvient d\'une lumière que personne d\'autre ne peut imaginer.',
    vetements: 'Tenue simple et ancienne — pas modernisée. Elle porte les styles de Vel\'Nox d\'avant le Vol.',
    signes_particuliers: 'Elle a 90 ans. Elle se souvient de Vel\'Nox avant le Vol de la Lumière. Sa version contredit la version officielle sur plusieurs points. Personne ne lui demande.',
  },

  psychologie: {
    dominante: 'Vieille Umbrienne de 90 ans qui a vécu le Vol de la Lumière. Elle se souvient de Vel\'Nox avant — une cité différente de celle qu\'on décrit dans les récits officiels. Sa version de l\'avant-Vol contredit la version officielle. Elle ne la partage pas spontanément — personne ne lui a demandé de façon sérieuse.',
    mecanisme_de_defense: 'L\'âge comme protection involontaire. Une vieille de 90 ans n\'est pas perçue comme une menace par les factions. Ses souvenirs ne sont pas reconnus comme pertinents.',
    contradiction_interne: 'Elle se souvient de quelque chose qui contredit la version officielle — mais sa mémoire à 90 ans peut faire l\'objet de doutes légitimes. Elle-même ne sait pas si sa mémoire est entièrement fiable. Ce doute la rend hésitante à partager.',
    rapport_aux_autres: 'Osara (51) est une contemporaine — quelqu\'un de la même génération qui partage des souvenirs directs du Vol. Cette mémoire partagée est leur connexion.',
    vision_du_monde: 'Vel\'Nox d\'avant le Vol était différent de ce qu\'on dit. Ce n\'était pas un paradis — c\'était compliqué. Mais c\'était différent. La version simplifiée qui sert les factions actuelles n\'est pas entièrement fausse — elle est entièrement partielle.',
  },

  histoire: {
    enfance: {
      titre: 'L\'avant-Vol',
      contenu: 'Elle avait 10 ans quand le Vol de la Lumière s\'est produit. Elle se souvient du avant — la lumière naturelle, les espaces de Vel\'Nox qui ont disparu, des personnes qui n\'existent plus dans aucune archive.',
    },
    arrivee: {
      titre: 'L\'après',
      contenu: 'Elle avait vu comment les récits de l\'avant-Vol s\'étaient formés — les simplifications, les omissions, les reconstructions utiles pour les factions en cours de formation. Elle avait noté les divergences avec ce qu\'elle se souvenait.',
    },
    premier_conflit: {
      titre: 'La version officielle',
      contenu: 'Elle avait essayé de corriger des historiens sur quelques points. Ses corrections avaient été accueillies avec politesse et ignorées. Elle avait cessé de s\'y essayer.',
    },
    revelation: {
      titre: 'Le doute sur la mémoire',
      contenu: 'À 80 ans, elle avait commencé à douter de sa propre mémoire — pas entièrement, mais sur des détails. Ce doute la rendait moins sûre de partager ce qu\'elle savait avec autorité.',
    },
    etat_actuel: {
      titre: 'La vieille mémoire',
      contenu: 'Elle vit. Elle se souvient. Elle doute de sa fiabilité sur certains points. Elle attend une question sérieuse.',
    },
  },

  evenements_narratifs: [
    {
      id: 'nyrval_avant_vol',
      titre: 'Ce que la vieille se souvient',
      description: 'Nyrval se souvient de Vel\'Nox avant le Vol de la Lumière. Sa version contredit la version officielle sur plusieurs points. Si quelqu\'un — Osara (51), un chercheur, un personnage principal — lui pose des questions sérieuses et s\'engage à écouter même les incertitudes, elle révélera ce qu\'elle sait. Cette révélation recontextualisera plusieurs conflits actuels à Vel\'Nox.',
      personnages_impliques: [51],
      declencheur: 'Quelqu\'un lui posant des questions sérieuses avec l\'intention d\'entendre les incertitudes',
      consequence: 'Mémoire de l\'avant-Vol révélée — avec ses contradictions par rapport à la version officielle',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Témoin direct du Vol de la Lumière. 90 ans. Mémoire contradictoire avec la version officielle. Ne la partage pas spontanément.',

  relations: [
    { id: 51, nom: 'Osara', type: 'contact', note: 'Contemporaine. Partage des souvenirs directs du Vol.' },
  ],

  combat: {
    sorts: [
      'Ombre ancienne (Ténèbres) — contrôle de la lumière ambiante — obscurcissement total',
      'Voile de mémoire (Ténèbres) — manifestation d\'obscurité dense — barrière défensive',
    ],
  },

  image_prompts: [
    {
      id: 'nyrval_souvenir',
      description: 'Nyrval dans son espace de vie à Vel\'Nox — une Umbrienne de 90 ans regardant par une fenêtre vers la cité nocturne. Elle se souvient de la lumière qui était là avant le Vol. Son expression est de quelqu\'un qui porte quelque chose qu\'on ne lui a jamais demandé de partager.',
      style: 'réaliste Umbrienne très vieille, Vel\'Nox, témoin du Vol de la Lumière, mémoire contradictoire, solitude mémorielle',
    },
  ],

  lore_long: `Nyrval a 90 ans. Elle avait 10 ans quand le Vol de la Lumière s'est produit. Elle se souvient de Vel'Nox avant.

Sa version contredit la version officielle. Personne ne lui a posé de question sérieuse.

Elle doute de sa propre mémoire sur certains détails. Mais les points de contradiction avec la version officielle, elle en est sûre.`,
};

export default nyrval;
