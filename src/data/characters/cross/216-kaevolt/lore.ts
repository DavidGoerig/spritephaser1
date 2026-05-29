import type { PersonnageLoreComplet } from '../../../lore-types';

const kaevolt: PersonnageLoreComplet = {
  id: 216,
  nom: 'Kaevolt',
  element: 'Feu',
  element2: 'Combat',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Pyrien de 34 ans, combattant Dissident — corpulence d\'un guerrier entraîné avant que les enregistrements obligatoires n\'existent. Il porte son élément comme une identité.',
    peau: 'Rouge-ardente avec des marques de combat réel — des cicatrices qui viennent de situations où fuir n\'était pas une option.',
    yeux: 'Orangés avec une qualité d\'alerte permanente. Il évalue chaque espace pour ses lignes de retraite.',
    vetements: 'Tenue de protection civile Dissidente — suffisamment sombre pour ne pas attirer l\'attention, suffisamment protectrice pour combattre.',
    signes_particuliers: 'Il a été formé à Virex avant que l\'enregistrement obligatoire des Élus n\'existe — une formation sans fichier impérial. Cette lacune dans les registres est sa liberté de mouvement.',
  },

  psychologie: {
    dominante: 'Combattant Pyrien Dissident à Varkhôl. Son double élément Feu/Combat lui donne une capacité de combat supérieure qu\'il utilise pour protéger des civils dans les quartiers les plus touchés par la Rupture Thermique. Il n\'est pas dans les registres impériaux — sa formation date d\'avant l\'enregistrement obligatoire.',
    mecanisme_de_defense: 'L\'absence de registre. Ce qui n\'existe pas dans les fichiers impériaux est plus difficile à localiser. Il maintient un profil minimal pour protéger cette absence.',
    contradiction_interne: 'Son absence de registre est sa principale protection — mais elle limite aussi ses déplacements officiels. Des zones de Varkhôl qui nécessitent une identification ne lui sont pas accessibles sans risque. Il opère dans les marges.',
    rapport_aux_autres: 'La Rupture Thermique de Varkhôl est son contexte opérationnel — les zones les plus affectées sont celles où il est le plus actif. Sarevorn (261) est dans son réseau — un coordinateur d\'extraction qui utilise ses capacités pour des opérations nécessitant une force physique.',
    vision_du_monde: 'Les civils dans les zones de Rupture n\'ont personne pour les protéger directement. Les structures officielles de sécurité servent l\'Empire ou leurs propres intérêts. Il est là où elles ne sont pas.',
  },

  histoire: {
    enfance: {
      titre: 'La formation à Virex',
      contenu: 'Il avait été formé à Virex dans l\'Isthme à 15 ans — une période avant que l\'enregistrement obligatoire n\'existe. Sa formation était hors-registre par défaut. Il ne l\'avait pas planifié ainsi.',
    },
    arrivee: {
      titre: 'La Rupture',
      contenu: 'Quand la Rupture Thermique s\'était produite à Varkhôl, il avait rejoint les Dissidentes à 26 ans pour sa connaissance du terrain et ses capacités de combat. Sa liberté de mouvement sans registre avait été identifiée comme une ressource.',
    },
    premier_conflit: {
      titre: 'Les zones de Rupture',
      contenu: 'Il avait opéré dans les zones les plus affectées par la Rupture — des quartiers où les structures officielles étaient absentes. Sa protection des civils y était réelle et limitée simultanément — il ne pouvait pas être partout.',
    },
    revelation: {
      titre: 'La liberté et ses marges',
      contenu: 'Il avait compris que son absence de registre lui donnait une liberté de mouvement — et une limitation de fait dans les zones officiellement contrôlées. Il opérait dans les marges. Les marges étaient aussi là où les civils abandonnés se trouvaient.',
    },
    etat_actuel: {
      titre: 'Le protecteur des marges',
      contenu: 'Il protège. Dans les zones où personne d\'autre n\'est.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kaevolt_registre',
      titre: 'La découverte de l\'absence',
      description: 'Kaevolt n\'est pas dans les registres impériaux. Si un Régulateur remarque son absence lors d\'un contrôle — ou si ses opérations de protection deviennent assez visibles pour attirer une investigation — l\'absence de registre deviendra un problème actif plutôt qu\'une protection passive.',
      personnages_impliques: [261],
      declencheur: 'Un Régulateur investiguant Kaevolt et remarquant son absence de registre',
      consequence: 'Kaevolt contraint de disparaître complètement ou de s\'exposer pour obtenir une fausse identité — perdant une de ses libertés dans tous les cas',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Combattant Dissident protégeant des civils dans les zones de Rupture Thermique à Varkhôl. Formé avant l\'enregistrement obligatoire — absent des registres impériaux. Liberté de mouvement dans les marges.',

  relations: [
    { id: 261, nom: 'Sarevorn', type: 'contact', note: 'Coordinateur utilisant ses capacités de combat pour des opérations nécessitant une force physique.' },
  ],

  combat: {
    sorts: [
      'Frappe de feu combiné (Feu/Combat) — attaque synthétisant chaleur et technique — efficacité maximale',
      'Défense civile (Combat) — protection d\'un groupe non-combattant — technique de couverture',
    ],
  },

  image_prompts: [
    {
      id: 'kaevolt_protection',
      description: 'Kaevolt dans une zone de Rupture Thermique à Varkhôl — un Pyrien de 34 ans qui guide des civils loin d\'une zone d\'effondrement structural dû à la chaleur. Il est entre les civils et la menace. Son double élément Feu/Combat est actif. Il n\'y a pas de Régulateur dans cette zone — il est là à la place.',
      style: 'réaliste Pyrien combattant Dissident, Varkhôl, zones de Rupture Thermique, protection des civils, absence de registre',
    },
  ],

  lore_long: `Kaevolt protège des civils dans les zones de Rupture Thermique à Varkhôl pour les Dissidentes. Son double élément Feu/Combat lui donne des capacités de combat supérieures.

Il n'est pas dans les registres impériaux — sa formation date d'avant l'enregistrement obligatoire. Cette absence est sa liberté de mouvement.

Il opère dans les zones où les structures officielles ne sont pas. Les civils abandonnés s'y trouvent aussi.`,
};

export default kaevolt;
