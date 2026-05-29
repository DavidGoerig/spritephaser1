import type { PersonnageLoreComplet } from '../../../lore-types';

const gavryn: PersonnageLoreComplet = {
  id: 102,
  nom: 'Gavryn',
  element: 'Electrique',
  espece: 'Aéride',
  region: 'Asterciel',
  faction: 'Technocratie',

  apparence: {
    taille_corpulence: 'Aéride de 36 ans, de taille ordinaire avec l\'expression perpétuellement préoccupée d\'un technicien qui voit des problèmes que personne ne finance.',
    peau: 'Pâle bleutée Aéride avec des éclairs électriques aux tempes et aux mains — son élément réagit à sa frustration.',
    yeux: 'Gris électrique, avec une qualité d\'inventaire permanent. Il cataloguE ce qui fonctionne, ce qui ne fonctionne pas, ce qui va cesser de fonctionner.',
    vetements: 'Tenue de technicien de la Technocratie — outils partout, rien de décoratif. Ses vêtements ont des taches de brûlure électrique.',
    signes_particuliers: 'Il voit les défaillances des liens inter-strates avant qu\'elles arrivent. Il n\'a pas de budget pour les réparer. Cette situation dure depuis 3 ans.',
  },

  psychologie: {
    dominante: 'Technicien des liens inter-strates à Asterciel. Il voit venir les défaillances avec une précision de 2-3 semaines. Il fait des rapports. Il n\'a pas de budget pour les réparations. Les défaillances arrivent quand même.',
    mecanisme_de_defense: 'Le rapport comme décharge de responsabilité. Il a signalé. Si personne n\'agit sur ses signalements, la responsabilité n\'est pas la sienne.',
    contradiction_interne: 'Il fait des rapports qui ne donnent pas lieu à des actions. Il continue à faire des rapports. À un moment, continuer à faire des rapports sans résultats est une façon d\'éviter de décider quoi faire d\'autre.',
    rapport_aux_autres: 'Talvyn (23) est un contact de réseau — quelqu\'un qui utilise parfois ses données techniques pour ses propres calculs. Caerra (28) est quelqu\'un qui comprend ses frustrations.',
    vision_du_monde: 'Les systèmes techniques ont des limites prévisibles. La prévisibilité devrait permettre la prévention. Elle ne le permet pas si personne n\'agit sur les prévisions.',
  },

  histoire: {
    enfance: {
      titre: 'La technique',
      contenu: 'Formation technique dans la Technocratie. Son élément Electrique et son aptitude pour les systèmes inter-strates lui avaient valu une position dans la maintenance.',
    },
    arrivee: {
      titre: 'Les liens',
      contenu: 'À 28 ans, il avait pris en charge le suivi des liens inter-strates à Asterciel. Dans les 6 premiers mois, il avait identifié 12 défaillances potentielles. 8 s\'étaient produites.',
    },
    premier_conflit: {
      titre: 'Le budget',
      contenu: 'Ses demandes de budget de prévention avaient été classées "non-urgence" systématiquement. On lui avait dit que les réparations curatives coûtaient moins cher que la maintenance préventive. Cette logique le rendait inutile.',
    },
    revelation: {
      titre: 'Le rythme',
      contenu: 'Les défaillances arrivaient à un rythme prévisible. Les réparations curatives coûtaient plus cher que la prévention. Personne ne semblait calculer ça sur la durée.',
    },
    etat_actuel: {
      titre: 'Les rapports',
      contenu: 'Il continue à faire des rapports. Les prochaines défaillances sont identifiées. Les budgets ne sont pas alloués.',
    },
  },

  evenements_narratifs: [
    {
      id: 'gavryn_defaillance',
      titre: 'La défaillance prévue',
      description: 'Gavryn a prévu 3 défaillances importantes dans les liens inter-strates pour les 2 prochains mois. Aucun budget n\'a été alloué. Si une défaillance majeure se produit — coupant un lien entre strates — ses rapports préalables deviennent une preuve que la défaillance était évitable.',
      personnages_impliques: [23, 28],
      declencheur: 'Défaillance majeure d\'un lien inter-strates qu\'il avait identifié',
      consequence: 'Gavryn devant décider s\'il utilise ses rapports préalables — et à qui',
    },
  ],

  arcs: ['arc_chute_des_nuages'],
  position_dans_arc: 'Technicien des liens inter-strates. Voit les défaillances. N\'a pas le budget pour les prévenir. Ses rapports restent sans suite.',

  relations: [
    { id: 23, nom: 'Talvyn', type: 'contact', note: 'Utilise ses données techniques pour ses calculs.' },
    { id: 28, nom: 'Caerra', type: 'contact', note: 'Comprend ses frustrations.' },
  ],

  combat: {
    sorts: [
      'Surcharge de lien (Electrique) — court-circuit d\'un lien technique — sabotage défensif',
      'Décharge électrique (Electrique) — attaque directe — usage en dernier recours',
    ],
  },

  image_prompts: [
    {
      id: 'gavryn_rapport',
      description: 'Gavryn dans les structures des liens inter-strates d\'Asterciel — un Aéride de 36 ans documentant une défaillance imminente sur son rapport. Son expression est de frustration contenue. Ce rapport ne donnera pas lieu à un budget.',
      style: 'réaliste Aéride technicien, liens inter-strates d\'Asterciel, rapport de défaillance, budget absent, frustration professionnelle',
    },
  ],

  lore_long: `Gavryn voit venir les défaillances des liens inter-strates d'Asterciel avec 2-3 semaines d'avance. Il fait des rapports.

Il n'a pas de budget pour les réparations préventives. Les défaillances arrivent quand même.

Ses rapports préalables prouvent que les défaillances étaient évitables. Personne ne lit les rapports à temps.`,
};

export default gavryn;
