import type { PersonnageLoreComplet } from '../../../lore-types';

const kressovak: PersonnageLoreComplet = {
  id: 208,
  nom: 'Kressovak',
  element: 'Feu',
  element2: 'Acier',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Pyrien de 49 ans, artisan itinérant — corpulence de quelqu\'un qui porte ses outils et son atelier avec lui.',
    peau: 'Rouge-ardente avec des intégrations métalliques légères — des éclats d\'acier qui sont devenus permanents dans ses bras.',
    yeux: 'Orangés avec des éclats argentés moins prononcés que chez Drenvark — son Acier est utilitaire, pas guerrier.',
    vetements: 'Tenue d\'itinérant pratique avec des outils de forge portables accrochés à la ceinture.',
    signes_particuliers: 'Il répare les équipements dans les deux régions sans demander l\'affiliation de ses clients. Sa neutralité est définie par définition professionnelle — réparer est neutre.',
  },

  psychologie: {
    dominante: 'Artisan Pyrien itinérant avec un double élément Feu/Acier. Il répare des équipements dans Varkhôl et Ormn-Dur — les deux régions qui ont le plus besoin de maintenance de précision. Sa neutralité est fonctionnelle : réparer l\'équipement d\'un Dissident ou d\'un Régulateur impérial est le même travail.',
    mecanisme_de_defense: 'La neutralité professionnelle intrinsèque. Réparer est par définition un service neutre — il ne crée pas de nouvelles capacités, il restaure des capacités existantes. Cette neutralité est intellectuellement plus défendable que celle d\'un marchand.',
    contradiction_interne: 'Réparer l\'équipement d\'un Régulateur et réparer l\'équipement d\'un Dissident sont techniquement le même travail — mais leurs effets contribuent à des camps opposés. Sa neutralité professionnelle ne neutralise pas les effets de son travail.',
    rapport_aux_autres: 'Dravel (74) est dans son réseau de Varkhôl — un artisan avec qui il partage des informations sur les matériaux disponibles. Karveth (144) est dans son réseau d\'Ormn-Dur — un forgeron Chthonien qui connaît les alliages spécifiques aux galeries.',
    vision_du_monde: 'Les équipements cassent. Quelqu\'un doit les réparer. Il fait ce travail. L\'affiliation de ceux qui le paient n\'est pas une variable dans la qualité de sa réparation.',
  },

  histoire: {
    enfance: {
      titre: 'L\'artisanat itinérant',
      contenu: 'Né à Varkhôl dans une famille d\'artisans itinérants. Il avait commencé à voyager avec son père à 15 ans, apprenant à réparer des équipements variés dans des contextes variés. Son double élément avait émergé à 17 ans.',
    },
    arrivee: {
      titre: 'Les deux régions',
      contenu: 'À 28 ans, il avait commencé à étendre ses routes vers Ormn-Dur — une région avec des besoins en maintenance très spécifiques liés aux galeries. Son double élément lui permettait de travailler les alliages Chthoniens que les Pyriens standards ne maîtrisaient pas.',
    },
    premier_conflit: {
      titre: 'Le client problématique',
      contenu: 'Un Dissident lui avait demandé de réparer un équipement qui avait été endommagé lors d\'un sabotage. Il avait réparé. Plus tard, un Régulateur lui avait demandé de réparer de l\'équipement endommagé par le même sabotage — du côté de l\'Empire. Il avait réparé aussi. Il avait compris la position dans laquelle il se trouvait.',
    },
    revelation: {
      titre: 'Le réparateur de tout',
      contenu: 'Il avait accepté sa position : réparer pour tous signifiait qu\'il contribuait à tous les camps. Il avait décidé que c\'était préférable à ne réparer que pour un camp et être perçu comme partisan.',
    },
    etat_actuel: {
      titre: 'L\'itinérant',
      contenu: 'Il voyage. Il répare. Il ne prend pas de position.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kressovak_reparation',
      titre: 'L\'équipement des deux camps',
      description: 'Kressovak répare pour tous. Si une faction découvre qu\'il vient de réparer de l\'équipement pour la faction adverse, elle pourrait exiger qu\'il choisisse — ou utiliser sa neutralité comme levier pour obtenir des informations sur l\'autre camp (sur quoi il travaillait, quel équipement était cassé).',
      personnages_impliques: [74, 144],
      declencheur: 'Une faction découvrant qu\'il répare aussi pour la faction adverse et exigeant des informations',
      consequence: 'Kressovak contraint de compromettre sa neutralité ou de refuser un camp — perdant un marché de toute façon',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Artisan itinérant réparant des équipements dans Varkhôl et Ormn-Dur. Neutralité professionnelle absolue. Double élément Feu/Acier lui permettant de travailler les alliages des deux régions.',

  relations: [
    { id: 74, nom: 'Dravel', type: 'contact', note: 'Artisan de Varkhôl partageant des informations sur les matériaux disponibles.' },
    { id: 144, nom: 'Karveth', type: 'contact', note: 'Forgeron Chthonien d\'Ormn-Dur connaissant les alliages spécifiques aux galeries.' },
  ],

  combat: {
    sorts: [
      'Frappe d\'artisan (Feu/Acier) — coup précis adapté à la faiblesse de l\'équipement adverse — efficacité maximale',
      'Résistance métallique (Acier) — intégration défensive d\'acier — protection',
    ],
  },

  image_prompts: [
    {
      id: 'kressovak_reparation',
      description: 'Kressovak réparant un équipement dans un atelier de fortune entre Varkhôl et Ormn-Dur — un Pyrien de 49 ans dont les mains combinent chaleur et précision métallique. L\'équipement qu\'il répare n\'a pas d\'identification de faction visible. Il travaille avec la même précision pour tous.',
      style: 'réaliste Pyrien artisan itinérant double élément, route entre Varkhôl et Ormn-Dur, réparation d\'équipement neutre, Feu/Acier',
    },
  ],

  lore_long: `Kressovak est artisan itinérant avec un double élément Feu/Acier. Il répare des équipements dans Varkhôl et Ormn-Dur sans demander l'affiliation de ses clients.

Réparer est par définition un service neutre. Cette neutralité ne neutralise pas les effets de son travail — il contribue aux deux camps.

Il a décidé que c'était préférable à choisir.`,
};

export default kressovak;
