import type { PersonnageLoreComplet } from '../../../lore-types';

const brask: PersonnageLoreComplet = {
  id: 69,
  nom: 'Brask',
  element: 'Feu',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Parti du Feu',

  apparence: {
    taille_corpulence: 'Pyrien de 35 ans, grand avec une voix qui porte. Sa corpulence est celle de quelqu\'un qui a connu les décombres et les marchés couverts à égalité. Il a l\'air d\'un orateur parce qu\'il l\'est devenu — pas parce qu\'il l\'était né.',
    peau: 'Brune Pyrien avec une luminescence rouge vive aux épaules et au cou — l\'élément Feu qui monte quand il parle. Ses discours sont visibles avant d\'être audibles.',
    yeux: 'Rouges avec une qualité de conviction directe. Il regarde son auditoire, pas ses notes. Il n\'a pas de notes.',
    vetements: 'Tenue du Quatrième District — modeste, fonctionnelle, identifiable. Il porte l\'origine comme un argument.',
    signes_particuliers: 'Il est sincère là où Orkhael est cynique. C\'est à la fois sa force et sa limite — les gens qui ont vécu la Rupture lui font confiance, et ceux qui l\'utilisent savent que sa sincérité est un outil.',
  },

  psychologie: {
    dominante: 'Réfugié du Quatrième District devenu orateur pour le Parti du Feu. Il a perdu son quartier dans la Rupture. Il a rejoint Orkhael (11) parce que c\'était la seule organisation qui parlait de ça. Il croit à ce qu\'il dit. Orkhael le sait et l\'utilise.',
    mecanisme_de_defense: 'La conviction comme armure. Si sa colère est juste, ce qu\'il fait en son nom l\'est aussi.',
    contradiction_interne: 'Il est le visage sincère d\'un mouvement dont le chef est cynique. Orkhael (11) utilise sa colère réelle pour des objectifs politiques que Brask n\'examine pas. Ce qu\'il dit est vrai. Comment c\'est utilisé ne l\'est pas toujours.',
    rapport_aux_autres: 'Orkhael (11) est le chef — Brask le respecte sans l\'idolâtrer. Gravel (3) est une figure qu\'il a mentionnée dans des discours — une référence à la résistance réelle, pas politique.',
    vision_du_monde: 'Le Quatrième District a été détruit. Des gens sont morts. Personne n\'a été tenu responsable. Le Feu doit répondre pour le Feu.',
  },

  histoire: {
    enfance: {
      titre: 'Le Quatrième District',
      contenu: 'Né et grandi dans le Quatrième District de Varkhôl. Sa famille y vivait depuis trois générations. Il avait 20 ans quand la Rupture l\'avait effacé. Il avait survécu. Sa famille avait partiellement survécu.',
    },
    arrivee: {
      titre: 'Le Parti du Feu',
      contenu: 'Après la Rupture, il avait erré pendant 2 ans. Orkhael (11) l\'avait recruté en lui demandant de raconter son histoire en public. Il avait dit "oui" parce que personne d\'autre ne lui avait jamais posé cette question.',
    },
    premier_conflit: {
      titre: 'L\'orateur',
      contenu: 'Il avait commencé à parler lors de petites réunions. Il était bon — sa colère était réelle, ses souvenirs étaient précis, il n\'exagérait pas. C\'est ce qui le rendait efficace. Orkhael lui avait dit de ne pas changer ça. Il ne changeait pas.',
    },
    revelation: {
      titre: 'La différence',
      contenu: 'Un jour, Kraevolt (77) — autre mémorialiste du Parti — lui avait montré ses propres archives exagérées des victimes de la Rupture. Brask avait dit que ce n\'était pas exact. Kraevolt avait dit que l\'exactitude n\'était pas le but. Brask n\'avait pas su quoi répondre.',
    },
    etat_actuel: {
      titre: 'La voix',
      contenu: 'Il continue à parler. Ses discours attirent des réfugiés qui se reconnaissent dans ce qu\'il dit. Il ne sait pas entièrement ce que le Parti fait de ces rassemblements.',
    },
  },

  evenements_narratifs: [
    {
      id: 'brask_sincerite',
      titre: 'La sincérité comme outil',
      description: 'Brask croit à ce qu\'il dit. C\'est précisément ce qui fait de lui un orateur efficace pour Orkhael (11) — la conviction authentique ne peut pas être simulée. Si quelqu\'un lui montrait comment sa sincérité est utilisée, il devrait décider s\'il continue.',
      personnages_impliques: [11, 3],
      declencheur: 'Brask réalisant la différence entre ce qu\'il dit et ce que le Parti du Feu en fait',
      consequence: 'Rupture avec le Parti ou rationalisation — il est sinc ère, il devrait décider',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Orateur sincère du Parti du Feu. Réfugié du Quatrième District. Croit à ce qu\'il dit là où Orkhael (11) est cynique.',

  relations: [
    { id: 11, nom: 'Orkhael', type: 'allié', note: 'Chef du Parti du Feu. L\'utilise. Brask ne le sait pas entièrement.' },
    { id: 3, nom: 'Gravel', type: 'contact', note: 'Figure de référence dans ses discours — la résistance réelle.' },
  ],

  combat: {
    sorts: [
      'Aura de conviction (Feu) — chaleur rayonnante amplifiée par l\'émotion — présence intimidante en discours',
      'Frappe enflammée (Feu) — attaque directe de Feu — force brute dans une situation de danger réel',
    ],
  },

  image_prompts: [
    {
      id: 'brask_discours',
      description: 'Brask dans un rassemblement du Parti du Feu — un Pyrien de 35 ans qui parle à une foule de réfugiés. Ses épaules luisent rouges. Il regarde son auditoire dans les yeux. Sa conviction est visible. Orkhael est en arrière-plan.',
      style: 'réaliste Pyrien orateur, rassemblement du Parti du Feu, conviction sincère, foule de réfugiés, Varkhôl post-Rupture',
    },
  ],

  lore_long: `Brask est l'orateur sincère du Parti du Feu. Réfugié du Quatrième District. Il croit à chaque mot qu'il dit.

Orkhael (11) le sait et l'utilise. Brask n'examine pas cette différence.

Sa sincérité est ce qui rend ses discours efficaces. C'est aussi ce qui le rend utilisable.`,
};

export default brask;
