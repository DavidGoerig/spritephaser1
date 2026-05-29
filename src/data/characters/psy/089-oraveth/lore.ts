import type { PersonnageLoreComplet } from '../../../lore-types';

const oraveth: PersonnageLoreComplet = {
  id: 89,
  nom: 'Oraveth',
  element: 'Psy',
  espece: 'Néréide',
  region: 'Thalassyr',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Néréide de 44 ans, de taille ordinaire avec une façon d\'occuper l\'espace qui crée une asymétrie — il est plus présent que son gabarit ne le suggère. L\'élément Psy d\'un interrogateur.',
    peau: 'Bleutée Néréide avec une luminescence violette aux tempes — l\'élément Psy dans sa version la plus disciplinée et la plus directionnelle.',
    yeux: 'Bleu-violet avec une qualité de pénétration. Il ne regarde pas les gens — il les lit.',
    vetements: 'Tenue impériale d\'interrogateur — aucun insigne visible, mais une qualité qui signale l\'autorité.',
    signes_particuliers: 'Il teste la loyauté des Élus enregistrés à Thalassyr. Son travail est de détecter les mensonges. Sa compétence est établie. Ce qu\'il choisit de ne pas détecter ne l\'est pas.',
  },

  psychologie: {
    dominante: 'Interrogateur impérial qui teste la loyauté des Élus enregistrés à Thalassyr. Son élément Psy lui donne une capacité réelle de lecture psychique. Il est efficace. Il est aussi sélectif dans ce qu\'il rapporte.',
    mecanisme_de_defense: 'La compétence comme couverture. Son efficacité est documentée. Ce qu\'il choisit de ne pas remarquer reste non-documenté.',
    contradiction_interne: 'Il est dans le réseau de Shaleth (16) — il a des informations sur des agents dont il maintient la couverture. Cette double position est délicate.',
    rapport_aux_autres: 'Shaleth (16) est dans son réseau — une relation qui complique la neutralité professionnelle. Crysta (20) est une personne qu\'il a interrogée — il sait qu\'elle cache quelque chose, il a classé "non-concluant".',
    vision_du_monde: 'La loyauté est un spectre. Il le sait mieux que la plupart. Ce qu\'il rapporte comme "loyal" et ce qu\'il sait comme "complexe" sont deux catégories différentes.',
  },

  histoire: {
    enfance: {
      titre: 'L\'élément Psy',
      contenu: 'Son élément Psy avait été identifié et recruté par l\'Empire à 18 ans. La formation d\'interrogateur avait duré 7 ans. Il était efficace depuis le début.',
    },
    arrivee: {
      titre: 'Thalassyr',
      contenu: 'Affecté à Thalassyr pour surveiller les Élus enregistrés post-Silence des Vents. La région avait des taux d\'anomalie élémentaire plus élevés que la moyenne.',
    },
    premier_conflit: {
      titre: 'Shaleth',
      contenu: 'Sa relation avec Shaleth (16) avait évolué vers quelque chose qui n\'était pas entièrement professionnel. Il savait des choses sur Shaleth qu\'il n\'avait pas entièrement transmises à ses supérieurs.',
    },
    revelation: {
      titre: 'La sélectivité',
      contenu: 'Il avait compris à un moment que sa sélectivité dans les rapports était une décision avec des conséquences. Il l\'avait acceptée. Les conséquences étaient gérables tant que le réseau de Shaleth tenait.',
    },
    etat_actuel: {
      titre: 'Les interrogatoires',
      contenu: 'Il continue à tester les loyautés. Son taux de rapport "loyal" est stable. Son taux réel de détection est plus haut.',
    },
  },

  evenements_narratifs: [
    {
      id: 'oraveth_shaleth',
      titre: 'Ce que l\'interrogateur sait',
      description: 'Oraveth sait des choses sur Shaleth (16) qu\'il n\'a pas transmises. Si Shaleth tombe ou si le réseau se désintègre, Oraveth est exposé — il a des informations retenues, ce qui est une faute professionnelle impériale. Sa sélectivité le rend vulnérable.',
      personnages_impliques: [16, 20],
      declencheur: 'Shaleth exposé ou la chaîne de transmission découverte',
      consequence: 'Oraveth devant rendre compte des informations qu\'il a retenues',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Interrogateur impérial à Thalassyr. Dans le réseau de Shaleth. Sélectif dans ses rapports. Sa sélectivité le rend vulnérable.',

  relations: [
    { id: 16, nom: 'Shaleth', type: 'contact', note: 'Dans son réseau. A des informations retenues à son sujet.' },
    { id: 20, nom: 'Crysta', type: 'contact', note: 'A interrogée. Classé "non-concluant" alors qu\'il sait autre chose.' },
  ],

  combat: {
    sorts: [
      'Lecture psychique (Psy) — analyse des états mentaux — détection de mensonges et d\'intentions',
      'Contrainte mentale (Psy) — pression psychique — compliance forcée temporaire',
    ],
  },

  image_prompts: [
    {
      id: 'oraveth_interrogatoire',
      description: 'Oraveth face à un Élu enregistré dans un bureau d\'interrogatoire de Thalassyr — un Néréide de 44 ans dont les tempes luisent violet. Il lit son interlocuteur. Ce qu\'il choisit de noter est une décision séparée de ce qu\'il voit.',
      style: 'réaliste Néréide interrogateur impérial, bureau d\'interrogatoire, Thalassyr, lecture psychique, sélectivité dans les rapports',
    },
  ],

  lore_long: `Oraveth est interrogateur impérial à Thalassyr. Il teste la loyauté des Élus enregistrés.

Il est dans le réseau de Shaleth (16). Ce qu'il sait sur Shaleth n'a pas entièrement été transmis à ses supérieurs.

Sa sélectivité dans les rapports est une décision avec des conséquences. Elle le rend vulnérable si le réseau de Shaleth se désintègre.`,
};

export default oraveth;
