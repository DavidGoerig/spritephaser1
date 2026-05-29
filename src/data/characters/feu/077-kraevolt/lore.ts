import type { PersonnageLoreComplet } from '../../../lore-types';

const kraevolt: PersonnageLoreComplet = {
  id: 77,
  nom: 'Kraevolt',
  element: 'Feu',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Parti du Feu',

  apparence: {
    taille_corpulence: 'Pyrien de 52 ans, de taille ordinaire avec une présence physique amplifiée par sa façon d\'occuper l\'espace. Il parle avec les bras. Il n\'a pas l\'air d\'un menteur — il a l\'air de quelqu\'un qui croit profondément à des choses qui ne sont pas entièrement vraies.',
    peau: 'Brune Pyrien avec une luminescence rouge-orangée aux bras — l\'élément Feu d\'un homme qui a survécu à la Rupture et qui en porte la lumière comme une identité.',
    yeux: 'Rouges avec une qualité de conviction sincère — et c\'est le problème. Il croit ses exagérations.',
    vetements: 'Tenue du mémorialiste — sobre avec des détails qui signalent l\'autorité mémorielle. Un badge auto-créé, des textes qu\'il porte sur lui.',
    signes_particuliers: 'Il a survécu à la Rupture dans le Quatrième District. Ce témoignage est authentique. Les chiffres qu\'il y associe ne le sont pas.',
  },

  psychologie: {
    dominante: 'Mémorialiste auto-proclamé de la Rupture Thermique. Il a survécu. Il archive. Ses archives exagèrent les chiffres pour amplifier la colère — et il croit que c\'est juste, que la vérité émotionnelle vaut plus que la vérité factuelle.',
    mecanisme_de_defense: 'La conviction sincère comme autorisation. S\'il croit que les vrais chiffres sont insuffisants pour créer la colère nécessaire, exagérer devient un acte de justice.',
    contradiction_interne: 'Il a vu la Rupture. Il sait ce qu\'il a vu. Il sait que ses chiffres sont plus grands que ce qu\'il a vu. Il a résolu cette contradiction en se convainquant que la différence est insignifiante face à l\'injustice réelle.',
    rapport_aux_autres: 'Orkhael (11) — Kraevolt le sert sans en être conscient. Ses archives exagérées servent la rhétorique du Parti. Orkhael ne lui a jamais dit de les corriger. Gravel (3) — figure de référence dans ses archives. Kraevolt le cite sans nécessairement lui avoir parlé.',
    vision_du_monde: 'La Rupture a tué des milliers de Pyriens. Les chiffres officiels sont faux par le bas. Les siens sont peut-être faux par le haut — mais dans la bonne direction.',
  },

  histoire: {
    enfance: {
      titre: 'La Rupture',
      contenu: 'Il était dans le Quatrième District quand la Rupture s\'est produite. Il avait 37 ans. Il avait survécu en se mettant à l\'abri dans un sous-sol. Il était ressorti dans des décombres. Ce qu\'il avait vu avait changé quelque chose dans sa façon de voir les nombres.',
    },
    arrivee: {
      titre: 'L\'archive',
      contenu: 'Dans les mois suivant la Rupture, il avait commencé à collecter des témoignages. Au début, ses chiffres étaient précis. Ensuite, il avait compris que les chiffres précis ne créaient pas assez d\'indignation. Il avait ajusté.',
    },
    premier_conflit: {
      titre: 'La confrontation',
      contenu: 'Brask (69) — orateur plus jeune — lui avait dit une fois que ses chiffres ne correspondaient pas à ce qu\'il avait lui-même vu. Kraevolt avait répondu que Brask n\'avait pas accès à toutes les sources. Brask avait laissé tomber.',
    },
    revelation: {
      titre: 'L\'usage des archives',
      contenu: 'Orkhael (11) avait cité ses archives dans un discours public sans le corriger. Kraevolt y avait vu une validation. Il n\'avait pas compris que c\'était de l\'utilisation.',
    },
    etat_actuel: {
      titre: 'Les archives',
      contenu: 'Ses archives circulent dans le mouvement. Personne dans le mouvement ne les vérifie — elles confirment ce que les gens veulent croire.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kraevolt_archives',
      titre: 'La vérité des archives',
      description: 'Les archives de Kraevolt sont citées dans des discours politiques. Si quelqu\'un avec les chiffres réels — Vrassyn (70) avec les données impériales, par exemple — les confrontait aux archives de Kraevolt, les deux ensembles de faux chiffres dans des directions opposées créeraient une situation impossible à démêler.',
      personnages_impliques: [11, 3],
      declencheur: 'Une confrontation publique entre les chiffres de Kraevolt et d\'autres données sur la Rupture',
      consequence: 'Délégitimation du mémorialiste — ou validation de la vérité émotionnelle sur la vérité factuelle',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Mémorialiste auto-proclamé de la Rupture. Ses archives exagèrent les chiffres. Il croit que c\'est juste. Ses archives servent la rhétorique d\'Orkhael.',

  relations: [
    { id: 11, nom: 'Orkhael', type: 'allié', note: 'Le sert sans en être conscient. Orkhael ne corrige pas ses chiffres.' },
    { id: 3, nom: 'Gravel', type: 'contact', note: 'Figure de référence dans ses archives. Citation sans contact direct.' },
  ],

  combat: {
    sorts: [
      'Aura de mémoire (Feu) — chaleur émotionnelle rayonnante — amplification de la présence lors des discours',
      'Frappe de conviction (Feu) — attaque désorganisée mais chargée — peu efficace en combat réel',
    ],
  },

  image_prompts: [
    {
      id: 'kraevolt_archive',
      description: 'Kraevolt devant ses archives de la Rupture — un Pyrien de 52 ans entouré de documents, de témoignages collectés, de chiffres. Son expression est de conviction profonde. Les chiffres sur ses documents ne correspondent pas entièrement à ce qu\'il a vu.',
      style: 'réaliste Pyrien mémorialiste, archives de la Rupture Thermique, conviction sincère, exagération justifiée, Varkhôl',
    },
  ],

  lore_long: `Kraevolt est le mémorialiste auto-proclamé de la Rupture Thermique. Il a survécu. Il archive.

Ses archives exagèrent les chiffres pour amplifier la colère. Il croit que c'est juste. La vérité émotionnelle vaut, selon lui, plus que la vérité factuelle.

Orkhael (11) utilise ses archives sans les corriger. Kraevolt l'interprète comme une validation.`,
};

export default kraevolt;
