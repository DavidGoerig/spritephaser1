import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrav: PersonnageLoreComplet = {
  id: 150,
  nom: 'Thyrav',
  element: 'Insecte',
  espece: 'Umbrien',
  region: 'Vel\'Nox',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Umbrien de taille ordinaire avec une façon de bouger qui ressemble à l\'observation d\'insectes — patient, précis, capable d\'attendre longtemps.',
    peau: 'Gris-brun Umbrien avec des reflets chitineux — son élément Insecte laisse des marques physiques subtiles sur les Umbriens qui le portent.',
    yeux: 'Bruns avec une qualité de quelqu\'un qui observe plusieurs choses simultanément.',
    vetements: 'Tenue de travail pratique avec des compartiments pour ses colonies d\'insectes bioluminescents.',
    signes_particuliers: 'Son savoir sur les insectes bioluminescents est entièrement oral. Il ne l\'a jamais écrit. Ses colonies éclairent les marchés nocturnes de Vel\'Nox.',
  },

  psychologie: {
    dominante: 'Éleveur d\'insectes bioluminescents dont la lumière est essentielle aux marchés nocturnes de Vel\'Nox. Les insectes bioluminescents sont la seule source de lumière naturelle dans certaines zones de la cité. Son savoir de sélection et d\'élevage est entièrement oral — jamais documenté.',
    mecanisme_de_defense: 'Le savoir oral comme protection. Ce qui n\'est pas écrit ne peut pas être copié directement. Il doit être appris de lui.',
    contradiction_interne: 'Son savoir mourra avec lui si il ne le transmet pas. Il l\'enseigne à quelques apprentis — mais pas entièrement. La part non-transmise est sa protection et sa vulnérabilité.',
    rapport_aux_autres: 'Tharyn (50) est dans son réseau — quelqu\'un dont l\'activité dans les marchés nocturnes dépend de la lumière bioluminescente. Le Vol de la Lumière est le contexte narratif de Vel\'Nox qui donne à sa lumière une valeur particulière.',
    vision_du_monde: 'Vel\'Nox est une cité sans lumière naturelle depuis le Vol de la Lumière. Les insectes bioluminescents sont le substitut. Son travail est de maintenir cette lumière.',
  },

  histoire: {
    enfance: {
      titre: 'Les insectes',
      contenu: 'Né avec un élément Insecte rare dans une famille d\'Umbriens sans cet élément. Il avait commencé à travailler avec les insectes bioluminescents à 20 ans — une spécialité qui n\'avait pas de tradition à Vel\'Nox. Il avait tout développé lui-même.',
    },
    arrivee: {
      titre: 'La lumière',
      contenu: 'Il avait compris à 30 ans que ses insectes résolvaient un problème fondamental de Vel\'Nox : la lumière. Les marchés nocturnes fonctionnaient dans l\'obscurité relative. Ses colonies changeaient ça.',
    },
    premier_conflit: {
      titre: 'La tentative de documentation',
      contenu: 'Un chercheur avait voulu documenter sa méthode d\'élevage. Il avait refusé. Pas par caprice — par conviction que certains savoirs doivent être transmis directement ou pas du tout.',
    },
    revelation: {
      titre: 'La dépendance',
      contenu: 'Il avait réalisé que les marchés nocturnes de Vel\'Nox dépendaient maintenant de ses colonies. Cette dépendance était à la fois sa protection — on ne pouvait pas le remplacer facilement — et une responsabilité.',
    },
    etat_actuel: {
      titre: 'Les colonies',
      contenu: 'Il élève. Les marchés ont de la lumière. Son savoir reste oral.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrav_colonies',
      titre: 'Si les colonies meurent',
      description: 'Les colonies de Thyrav éclairent les marchés nocturnes de Vel\'Nox. Si une maladie ou un incident détruisait une colonie majeure, certains marchés seraient plongés dans l\'obscurité — une perturbation significative dans une cité qui vit de ses marchés nocturnes. Reconstruire sans son savoir oral serait difficile ou impossible.',
      personnages_impliques: [50],
      declencheur: 'Maladie ou incident détruisant une colonie bioluminescente majeure',
      consequence: 'Partie de Vel\'Nox sans lumière — et la valeur irremplaçable du savoir oral de Thyrav exposée',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Éleveur d\'insectes bioluminescents de Vel\'Nox. Savoir entièrement oral. Ses colonies éclairent les marchés nocturnes.',

  relations: [
    { id: 50, nom: 'Tharyn', type: 'contact', note: 'Son activité dans les marchés dépend de la lumière bioluminescente.' },
  ],

  combat: {
    sorts: [
      'Nuée bioluminescente (Insecte) — nuée d\'insectes lumineux — éblouissement et confusion',
      'Essaim défensif (Insecte) — nuée protectrice — protection de zone',
    ],
  },

  image_prompts: [
    {
      id: 'thyrav_colonies',
      description: 'Thyrav dans son espace d\'élevage à Vel\'Nox — un Umbrien entouré de cages remplies d\'insectes bioluminescents. La lumière qu\'ils produisent est la seule lumière de la pièce. Son expression est de quelqu\'un qui sait que ce qu\'il maintient est irremplaçable.',
      style: 'réaliste Umbrien éleveur d\'insectes, Vel\'Nox, bioluminescence, savoir oral, lumière nocturne',
    },
  ],

  lore_long: `Thyrav élève des insectes bioluminescents dont la lumière éclaire les marchés nocturnes de Vel'Nox. Son savoir est entièrement oral — jamais documenté.

Les marchés dépendent de ses colonies. Il est irremplaçable directement.

Si ses colonies meurent, certains marchés de Vel'Nox s'éteignent.`,
};

export default thyrav;
