import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrsavel: PersonnageLoreComplet = {
  id: 217,
  nom: 'Thyrsavel',
  element: 'Combat',
  element2: 'Feu',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Homme-Lien de 46 ans, instructeur militaire — corpulence d\'un combattant qui a enseigné ce qu\'il pratiquait encore activement.',
    peau: 'Ton méditerranéen avec des marques d\'entraînement intensif depuis 20 ans — les cicatrices sont des leçons.',
    yeux: 'Gris avec une qualité d\'évaluation rapide. Il juge les aptitudes en quelques secondes.',
    vetements: 'Tenue d\'instructeur militaire impérial — formelle mais adaptée à la démonstration physique.',
    signes_particuliers: 'Il forme les Régulateurs depuis 10 ans. Ses méthodes sont exigeantes et ses taux de complétion élevés. Les Régulateurs qu\'il a formés sont réputés pour leur efficacité — et pour leur rigidité dans les situations non-standard.',
  },

  psychologie: {
    dominante: 'Instructeur militaire impérial dans l\'Isthme. Il forme les Régulateurs — les forces de contrôle de l\'Empire — depuis 10 ans. Son double élément Combat/Feu lui donne une compétence de démonstration que ses recrues ne peuvent pas contredire. Ses méthodes d\'entraînement produisent des Régulateurs efficaces dans des situations standard.',
    mecanisme_de_defense: 'La compétence incontestable. Ses méthodes fonctionnent. Les résultats le prouvent. Les critiques de ses méthodes n\'ont pas de base pratique à leur argument.',
    contradiction_interne: 'Ses Régulateurs sont efficaces dans des situations standard — mais la rigidité de leur formation les rend moins adaptables dans des situations non-standard. Il a créé des forces efficaces dans des conditions connues. Les conditions de l\'Isthme sont en train de changer.',
    rapport_aux_autres: 'Avel (64) est dans son réseau hiérarchique — le commandant régional dont les Régulateurs sont ses anciens élèves. Orkhael (11) est dans son réseau — un leader Pyrien dont les contacts avec l\'Empire incluent des observations sur ses méthodes d\'entraînement.',
    vision_du_monde: 'Un Régulateur bien formé est une ressource durable. La formation coûte du temps et des ressources. Elle produit quelque chose d\'utile pendant des années. Son travail est dans l\'investissement à long terme.',
  },

  histoire: {
    enfance: {
      titre: 'Le combat dans l\'Isthme',
      contenu: 'Né dans l\'Isthme, son double élément Combat/Feu s\'était manifesté à 18 ans. L\'Empire l\'avait recruté à 22 ans pour sa combinaison de capacités — Combat et Feu dans un Homme-Lien créaient un profil rare pour les unités d\'élite.',
    },
    arrivee: {
      titre: 'L\'instruction',
      contenu: 'À 36 ans, il avait été transféré de l\'opérationnel vers l\'instruction. Les Régulateurs formés par ses méthodes avaient un taux de résolution de situations standard supérieur à la moyenne. L\'Empire avait institutionnalisé ses méthodes.',
    },
    premier_conflit: {
      titre: 'La situation non-standard',
      contenu: 'Un de ses anciens élèves avait fait face à une situation non-standard — une zone de saturation élémentaire dans l\'Isthme — et avait appliqué les réponses standard. Ça n\'avait pas fonctionné. L\'élève avait survécu mais l\'opération avait échoué. Thyrsavel avait relu ses curricula.',
    },
    revelation: {
      titre: 'La rigidité utile',
      contenu: 'Il avait compris que ses méthodes créaient une efficacité dans les situations connues et une rigidité dans les inconnues. Il avait commencé à ajouter des modules sur les situations non-standard. Les résultats étaient moins uniformes — des élèves plus adaptables mais moins systématiques.',
    },
    etat_actuel: {
      titre: 'L\'instructeur',
      contenu: 'Il forme. Les Régulateurs sortent de son programme. L\'Isthme change.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrsavel_saturation',
      titre: 'Les Régulateurs face à la saturation',
      description: 'Thyrsavel a formé des Régulateurs efficaces dans des situations standard. Si la saturation élémentaire de l\'Isthme produit des situations non-standard en masse — des zones où les protocoles habituels ne fonctionnent pas — ses anciens élèves seront exposés à leur rigidité. L\'efficacité de sa formation sera remise en question.',
      personnages_impliques: [64, 11],
      declencheur: 'Des situations de saturation non-standard dans l\'Isthme exposant les limites de la formation standard des Régulateurs',
      consequence: 'Régulateurs formés par Thyrsavel échouant face à des situations inédites — et Thyrsavel évalué sur l\'inadaptabilité de ses méthodes',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Instructeur militaire impérial formant les Régulateurs dans l\'Isthme. Méthodes produisant une efficacité standard mais une rigidité non-standard. L\'Isthme change.',

  relations: [
    { id: 64, nom: 'Avel', type: 'hierarchie', note: 'Commandant régional dont les Régulateurs sont ses anciens élèves.' },
    { id: 11, nom: 'Orkhael', type: 'contact', note: 'Leader Pyrien avec des observations sur ses méthodes d\'entraînement.' },
  ],

  combat: {
    sorts: [
      'Démonstration de combat (Combat/Feu) — attaque pédagogique maximalement efficace — standard opérationnel',
      'Frappe formative (Combat) — attaque précise sur vulnérabilité identifiée — résultat garanti',
    ],
  },

  image_prompts: [
    {
      id: 'thyrsavel_entrainement',
      description: 'Thyrsavel devant une session d\'entraînement de Régulateurs dans l\'Isthme — un Homme-Lien de 46 ans en démonstration de technique, son double élément Combat/Feu visible dans l\'efficacité de ses mouvements. Les recrues regardent et imitent. Ils apprendront les situations standard. Les situations non-standard viendront ensuite.',
      style: 'réaliste Homme-Lien instructeur militaire impérial, Isthme, formation des Régulateurs, double élément Combat/Feu, efficacité standard',
    },
  ],

  lore_long: `Thyrsavel forme les Régulateurs impériaux dans l'Isthme depuis 10 ans. Son double élément Combat/Feu lui donne une légitimité de démonstration incontestable.

Ses méthodes produisent des Régulateurs efficaces dans les situations standard. Elles créent aussi une rigidité dans les situations non-standard.

L'Isthme change. Les situations non-standard arrivent. Ses anciens élèves feront face.`,
};

export default thyrsavel;
