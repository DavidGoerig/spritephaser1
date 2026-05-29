import type { PersonnageLoreComplet } from '../../../lore-types';

const tharvyn: PersonnageLoreComplet = {
  id: 190,
  nom: 'Tharvyn',
  element: 'Electrique',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Homme-Lien de 28 ans, saboteur — corpulence agile, habituée aux infiltrations rapides.',
    peau: 'Ton clair avec des traces légères de brûlures électriques — son élément interagit parfois avec ses cibles.',
    yeux: 'Jaunes vifs avec une qualité d\'énergie contenue.',
    vetements: 'Tenue de nuit pratique — sombre, sans réfléchissants, adapté à des opérations discrètes.',
    signes_particuliers: 'Il sabote les registres d\'enregistrement obligatoire des Élus dans l\'Isthme. Son méthode : des interférences électriques précises qui corrompent des données sans détruire les équipements — des erreurs qui ressemblent à des défaillances techniques ordinaires.',
  },

  psychologie: {
    dominante: 'Saboteur Dissident dans l\'Isthme spécialisé dans les interférences électriques sur les systèmes d\'enregistrement obligatoire des Élus. Il corrompt des données spécifiques — les identifications des Élus — sans détruire les systèmes, de façon à ce que les pannes ressemblent à des défaillances techniques.',
    mecanisme_de_defense: 'La défaillance plausible. Les systèmes d\'enregistrement tombent en panne. C\'est banal. Ses interférences sont dans les marges du banal. Personne n\'a encore relié les pannes à un pattern intentionnel.',
    contradiction_interne: 'Corrompre les données d\'enregistrement protège des Élus de l\'identification immédiate — mais les données corrompues peuvent aussi créer des erreurs qui exposent des Élus innocents lors de vérifications ultérieures. Son sabotage a des effets secondaires qu\'il ne contrôle pas complètement.',
    rapport_aux_autres: 'Cendrix (2) est un adversaire indirect — le responsable de l\'enregistrement obligatoire que Tharvyn sabote. Le Second Avatar (59) est dans son réseau — les décisions politiques sur l\'enregistrement que son sabotage ralentit.',
    vision_du_monde: 'L\'enregistrement obligatoire des Élus est un mécanisme de contrôle. Ralentir ce mécanisme donne aux Élus du temps. Du temps, c\'est des options.',
  },

  histoire: {
    enfance: {
      titre: 'L\'élément Electrique',
      contenu: 'Son élément Electrique s\'était manifesté avec une aptitude naturelle pour les interférences — il pouvait perturber les systèmes électriques sans les détruire. Il avait commencé à l\'utiliser à des fins pratiques avant de comprendre ses applications politiques.',
    },
    arrivee: {
      titre: 'Les registres',
      contenu: 'Les Dissidentes l\'avaient approché à 23 ans quand l\'enregistrement obligatoire des Élus avait commencé dans l\'Isthme. Sa spécificité — corrompre sans détruire — était exactement ce dont ils avaient besoin.',
    },
    premier_conflit: {
      titre: 'La panne remarquée',
      contenu: 'Un technicien avait remarqué que les pannes se concentraient géographiquement près des quartiers d\'Élus connus. Il avait changé ses patterns d\'intervention — plus aléatoire dans la géographie, moins efficace mais moins identifiable.',
    },
    revelation: {
      titre: 'Les effets secondaires',
      contenu: 'Un Élu avait été vérifié lors d\'un contrôle — ses données avaient été corrompues par une interférence de Tharvyn. La vérification avait pris plus de temps parce que ses données ne correspondaient à rien. Il avait été retenu pendant des heures. Il n\'avait pas été identifié — mais il avait eu peur. Tharvyn avait compris que ses effets secondaires existaient.',
    },
    etat_actuel: {
      titre: 'Le saboteur',
      contenu: 'Il sabote. Les registres sont corrompus. Personne n\'a encore relié les pannes.',
    },
  },

  evenements_narratifs: [
    {
      id: 'tharvyn_registre',
      titre: 'Le pattern identifié',
      description: 'Tharvyn sabote les registres d\'enregistrement des Élus dans l\'Isthme. Si Cendrix (2) — ou un analyste impérial — identifie un pattern dans les pannes techniques qui les relie à des quartiers spécifiques ou à des moments précis, ses opérations seront compromises et des Élus qu\'il avait protégés pourraient être retrouvés via les données corrompues.',
      personnages_impliques: [2, 59],
      declencheur: 'Un analyste impérial identifiant le pattern dans les pannes techniques',
      consequence: 'Tharvyn identifié — et risque d\'exposition pour des Élus dont les données corrompues deviennent suspectes',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Saboteur des registres d\'enregistrement obligatoire des Élus dans l\'Isthme. Interférences électriques imitant des défaillances techniques. Personne n\'a encore relié les pannes.',

  relations: [
    { id: 2, nom: 'Cendrix', type: 'adversaire', note: 'Responsable de l\'enregistrement obligatoire que Tharvyn sabote.' },
    { id: 59, nom: 'Second Avatar', type: 'contact', note: 'Décisions politiques sur l\'enregistrement que son sabotage ralentit.' },
  ],

  combat: {
    sorts: [
      'Décharge précise (Electrique) — interférence ciblée — sabotage de systèmes',
      'Arc électrique (Electrique) — attaque directe — défense en urgence',
    ],
  },

  image_prompts: [
    {
      id: 'tharvyn_sabotage',
      description: 'Tharvyn devant un terminal d\'enregistrement dans un bureau officiel de l\'Isthme — un Homme-Lien de 28 ans dont les mains génèrent une légère interférence électrique. Les données sur l\'écran se corrompent lentement. L\'écran ne s\'éteint pas. La panne ressemblera à une défaillance technique ordinaire demain matin.',
      style: 'réaliste Homme-Lien saboteur électrique, Isthme, interférence sur registre d\'enregistrement, défaillance plausible, Dissidentes',
    },
  ],

  lore_long: `Tharvyn sabote les registres d'enregistrement obligatoire des Élus dans l'Isthme. Son élément Electrique lui permet de corrompre des données sans détruire les systèmes — des pannes qui ressemblent à des défaillances techniques.

Ses opérations protègent des Élus de l'identification immédiate. Elles créent aussi des données corrompues qui peuvent causer des complications lors de vérifications ultérieures.

Personne n'a encore identifié le pattern. Pour l'instant.`,
};

export default tharvyn;
