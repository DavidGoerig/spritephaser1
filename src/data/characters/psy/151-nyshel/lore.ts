import type { PersonnageLoreComplet } from '../../../lore-types';

const nyshel: PersonnageLoreComplet = {
  id: 151,
  nom: 'Nyshel',
  element: 'Psy',
  espece: 'Umbrien',
  region: 'Vel\'Nox',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Umbrienne de taille ordinaire avec une présence psychique qui précède son arrivée physique dans une salle.',
    peau: 'Gris-bleu Umbrien avec des pulsations psychiques régulières — elle ne cache pas son élément.',
    yeux: 'Blancs-gris avec une qualité de quelqu\'un qui voit plus que ce qu\'on lui montre.',
    vetements: 'Tenue sobre et professionnelle — elle reçoit des clients, pas des missions.',
    signes_particuliers: 'Interrogatrice freelance. Elle lit les mensonges. Elle ne travaille pour aucun réseau — elle travaille pour quiconque peut payer. Cette indépendance est absolue.',
  },

  psychologie: {
    dominante: 'Interrogatrice freelance qui lit les mensonges en utilisant son élément Psy. Elle travaille contre rémunération pour n\'importe quel client — pas d\'affiliation de faction. Son service est la détection de mensonge, pas le jugement de ce qu\'on fait avec cette information.',
    mecanisme_de_defense: 'L\'indépendance absolue comme protection. Si elle travaille pour tout le monde, personne ne peut l\'accuser de partialité.',
    contradiction_interne: 'Elle lit des mensonges — elle sait que le résultat de son travail peut causer des dommages à la personne interrogée. Elle ne juge pas cet usage. Mais elle a des limites sur qui elle n\'interrogera pas.',
    rapport_aux_autres: 'Shael (48) est dans son réseau indirect — elle a travaillé pour la Convergence mais maintient une distance. Nyrreth (47) est dans son réseau — quelqu\'un avec qui elle partage un cadre professionnel.',
    vision_du_monde: 'Les mensonges ont des conséquences. Les lire est un service technique. Ce qu\'on en fait appartient au client. Cette position est défendable et inconfortable en même temps.',
  },

  histoire: {
    enfance: {
      titre: 'La lecture',
      contenu: 'Née avec une sensibilité Psy orientée vers la détection du mensonge — un sous-type spécifique rare. Elle avait commencé à le pratiquer professionnellement à 25 ans.',
    },
    arrivee: {
      titre: 'L\'indépendance',
      contenu: 'Plusieurs factions l\'avaient approchée pour une intégration régulière. Elle avait refusé toutes. L\'indépendance lui coûtait en tarifs réguliers — elle compensait par des tarifs plus élevés par mission.',
    },
    premier_conflit: {
      titre: 'Le client difficile',
      contenu: 'Elle avait une fois refusé une mission — pas pour des raisons morales, mais parce que le contexte impliquait un risque physique pour elle. Cette unique exception avait défini ses limites professionnelles.',
    },
    revelation: {
      titre: 'La valeur de l\'indépendance',
      contenu: 'Elle avait constaté que son indépendance lui valait des missions que les agents de factions ne pouvaient pas accepter — des interrogatoires entre factions, des situations où aucun agent de faction ne serait neutre. Elle occupait un espace unique.',
    },
    etat_actuel: {
      titre: 'Les missions',
      contenu: 'Elle interroge. Les clients varient. Son indépendance tient.',
    },
  },

  evenements_narratifs: [
    {
      id: 'nyshel_interrogatoire',
      titre: 'L\'interrogatoire qui ne peut pas rester neutre',
      description: 'Nyshel est freelance — elle peut interroger pour n\'importe qui. Si une mission lui est proposée où son résultat favorise clairement une faction et en défavorise une autre de façon significative, son indépendance sera testée. Elle devra décider si refuser ou accepter est plus compatible avec sa position.',
      personnages_impliques: [48, 47],
      declencheur: 'Mission d\'interrogatoire avec des implications factiionnelles significatives',
      consequence: 'Nyshel choisissant sa position — ou trouvant un cadre pour rester neutre dans une situation qui ne le permet pas',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Interrogatrice freelance de Vel\'Nox. Lit les mensonges pour n\'importe quel client. Indépendance absolue de faction.',

  relations: [
    { id: 48, nom: 'Shael', type: 'contact', note: 'A travaillé pour la Convergence — maintient une distance professionnelle.' },
    { id: 47, nom: 'Nyrreth', type: 'contact', note: 'Cadre professionnel partagé.' },
  ],

  combat: {
    sorts: [
      'Lecture forcée (Psy) — extraction psychique d\'information — interrogatoire de terrain',
      'Pression mentale (Psy) — attaque psychique — désorientation ciblée',
    ],
  },

  image_prompts: [
    {
      id: 'nyshel_interrogatoire',
      description: 'Nyshel dans un espace d\'interrogatoire de Vel\'Nox — une Umbrienne en face d\'un client et d\'une personne interrogée. Son expression est neutre et analytique. Elle lit ce qu\'on lui dit et ce qu\'on tait. Elle ne juge pas l\'usage de ce qu\'elle trouve.',
      style: 'réaliste Umbrienne interrogatrice, Vel\'Nox, freelance, lecture de mensonge, neutralité professionnelle',
    },
  ],

  lore_long: `Nyshel lit les mensonges à Vel'Nox. Elle travaille pour n'importe quel client contre rémunération. Aucune affiliation de faction.

Son indépendance lui permet d'interroger dans des situations où aucun agent de faction ne serait acceptable.

Ce qu'on fait de ses résultats ne la regarde pas. Cette position a des limites qu'elle n'a pas encore atteintes.`,
};

export default nyshel;
