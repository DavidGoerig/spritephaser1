import type { PersonnageLoreComplet } from '../../../lore-types';

const velgraevyn: PersonnageLoreComplet = {
  id: 372,
  nom: 'Velgraevyn',
  element: 'Gravité',
  element2: 'Sol',
  espece: 'Hommes-Liens',
  region: 'Déserts',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: 'Ingénieur robuste avec des épaules larges — quelqu\'un habitué à travailler sur des systèmes physiques lourds. Ses bras montrent des marques de pression gravitationnelle intense — il travaille parfois directement dans les champs qu\'il crée.',
    peau: 'Brun Homme-Lien avec des marques de compression aux articulations des mains et des poignets — zones de concentration des capacités gravitationnelles lors de manipulations précises.',
    yeux: 'Marron avec une habitude d\'évaluation des masses et distances — il voit les objets en termes de poids et de trajectoires potentielles.',
    vetements: 'Tenue d\'ingénieur de terrain renforcée — protection aux zones de contact avec les champs gravitationnels. Des instruments de mesure des champs portés à la ceinture.',
    signes_particuliers: 'Il soupèse les objets — une habitude de ses capacités Gravité. Il perçoit les masses autour de lui en permanence et ajuste inconsciemment sa perception des poids réels.',
  },

  psychologie: {
    dominante: 'Utilisation de la manipulation gravitationnelle pour accélérer les processus de Drain dans les zones ciblées — compression gravitationnelle des zones de résonance élémentaire pour extraire les énergies pures plus rapidement que les méthodes passives.',
    mecanisme_de_defense: 'L\'efficacité comme valeur. Il fait les Drains plus rapides. Des Drains plus rapides signifient moins de temps d\'exposition pour les opérateurs, moins de détectabilité, moins de perturbations locales. L\'efficacité sert tout le monde.',
    contradiction_interne: 'Les Drains accélérés par sa méthode ont des effets secondaires sur les zones environnantes — des anomalies gravitationnelles résiduelles qui persistent après le Drain et qui peuvent être détectées. Kaevorn (243) lui a demandé de minimiser ces signatures. Il n\'a pas encore trouvé comment.',
    rapport_aux_autres: 'Sykavel (242) est son supérieur Convergence — il reçoit les missions de Drain et définit les zones prioritaires. Kaevorn (243) est son coordinateur de terrain pour les opérations — il gère la logistique autour des zones de Drain.',
    vision_du_monde: 'Les Drains élémentaires sont une méthode de collecte d\'énergie pure. Sa contribution est de les rendre plus efficaces. La question de ce que l\'énergie pure est utilisée pour appartient à Sykavel.',
  },

  histoire: {
    enfance: {
      titre: 'Les mines des Déserts',
      contenu: 'À 17 ans, dans les zones minières des Déserts, il avait utilisé pour la première fois sa capacité Gravité pour accélérer l\'extraction de minerai — une compression qui brisait les roches plus efficacement que les outils standard. Il avait été engagé immédiatement.',
    },
    arrivee: {
      titre: 'Le recrutement Convergence',
      contenu: 'À 25 ans, Kaevorn (243) l\'avait contacté pour un travail différent — appliquer la même logique de compression gravitationnelle à des zones élémentaires. Le principe était identique. La matière différente. La rémunération considérablement plus élevée.',
    },
    premier_conflit: {
      titre: 'Les signatures résiduelles',
      contenu: 'À 29 ans, Kaevorn lui avait signalé que ses Drains accélérés laissaient des anomalies gravitationnelles détectables dans les zones traitées — des signatures qui persistaient plusieurs semaines et qui alertaient les analystes locaux. Il avait dû ralentir ses méthodes pour réduire les signatures.',
    },
    revelation: {
      titre: 'La zone critique',
      contenu: 'Sykavel (242) lui avait assigné une zone de Drain proche de la Fosse Interdite — une zone où les anomalies gravitationnelles ambiantes étaient déjà anormalement fortes. Dans cette zone, ses méthodes de compression interagissaient avec les anomalies existantes de façon imprévisible. Le premier Drain avait produit une décharge gravitationnelle non planifiée.',
    },
    etat_actuel: {
      titre: 'Les contraintes de la Fosse',
      contenu: 'Il a 3 Drains actifs dans des zones proches de la Fosse. Les anomalies gravitationnelles ambiantes de la Fosse interfèrent avec son contrôle — il doit réduire l\'intensité de ses compressions dans ces zones, ce qui réduit l\'efficacité. Sykavel attend des résultats qui compensent les contraintes. Il n\'est pas encore sûr de pouvoir les fournir.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velgraevyn_interference_fosse',
      titre: 'Les anomalies ambiantes',
      description: 'Les anomalies gravitationnelles de la Fosse Interdite — documentées par Drethvael (370) — interfèrent avec ses compressions dans les zones proches. L\'amplitude croissante du 4ème cycle de Drethvael aggrave progressivement ces interférences. Si l\'amplitude continue d\'augmenter, ses Drains dans ces zones deviendront impossibles à contrôler.',
      personnages_impliques: [242, 243],
      declencheur: 'Interférences gravitationnelles de la Fosse sur les compressions de Drain',
      consequence: 'Perte progressive de contrôle sur les Drains proches de la Fosse — efficacité dégradée',
    },
    {
      id: 'velgraevyn_signatures',
      titre: 'Les traces résiduelles',
      description: 'Ses compressions gravitationnelles laissent des anomalies résiduelles qui persistent après les Drains. Dans les zones proches de la Fosse, ces anomalies se mêlent aux anomalies ambiantes — rendant ses signatures difficiles à distinguer des phénomènes naturels. C\'est un avantage involontaire qu\'il cherche à systématiser.',
      personnages_impliques: [243, 242],
      declencheur: 'Découverte que les signatures résiduelles se confondent avec les anomalies naturelles de la Fosse',
      consequence: 'Méthode de Drain à signature masquée potentiellement développable dans les zones de la Fosse',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Ingénieur Convergence accélérant les Drains via compression gravitationnelle. 3 Drains actifs proches de la Fosse. Les anomalies ambiantes du 4ème cycle de Drethvael interfèrent avec son contrôle. Ses signatures résiduelles se confondent involontairement avec les phénomènes naturels de la Fosse.',

  relations: [
    { id: 242, nom: 'Sykavel', type: 'supérieur', note: 'Définit les zones prioritaires et attend des résultats. Assigné les zones proches de la Fosse.' },
    { id: 243, nom: 'Kaevorn', type: 'allié', note: 'Coordinateur de terrain. A signalé les problèmes de signatures résiduelles.' },
  ],

  combat: {
    sorts: [
      'Compression gravitationnelle (Gravité) — concentration d\'un champ gravitationnel intense sur une zone — extraction ou écrasement',
      'Masse de sol (Sol) — projection de roches avec une accélération gravitationnelle — impact massif',
      'Champ de Drain (Gravité + Sol) — compression combinée qui extrait les énergies élémentaires d\'une zone — accélération du processus de Drain',
    ],
  },

  image_prompts: [
    {
      id: 'velgraevyn_drain',
      description: 'Velgraevyn dans une zone de Drain proche de la Fosse Interdite — ses mains concentrent un champ gravitationnel visible, la zone autour de lui est légèrement déformée. Des particules de sol flottent dans le champ. Son expression est concentrée — il contrôle quelque chose qui tend à lui échapper.',
      style: 'réaliste ingénieur Homme-Lien Convergence, champ gravitationnel de Drain, zone proche de la Fosse, contrôle tendu',
    },
  ],

  lore_long: `Velgraevyn accélère les Drains élémentaires de la Convergence via compression gravitationnelle. Dans les zones proches de la Fosse Interdite, les anomalies ambiantes interfèrent avec son contrôle — le 4ème cycle de Drethvael (370) aggrave progressivement ces interférences.

Ses signatures résiduelles se confondent involontairement avec les anomalies naturelles de la Fosse — avantage involontaire qu'il cherche à systématiser.

Sykavel (242) attend des résultats dans des zones où son contrôle est dégradé.`,
};

export default velgraevyn;
