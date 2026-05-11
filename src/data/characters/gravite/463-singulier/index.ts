import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 463,
  nom: `Singulier`,
  element: 'Gravite',
  classe: 'Specialiste',
  espece: 'Inconnu',
  region: 'Abysses',
  faction: 'Independent',
  description_physique: `Entite dont la forme physique semble organisee autour d'un point central invisible de densite gravitationnelle extreme. Les objets proches devient tres legerement vers elle. Ses traits sont difficiles a memoriser : le regard revient toujours au centre plutot qu'a la peripherie de son visage.`,
  description_personnalite: `Conscience gravitationnelle qui a transcende son substrat physique par accumulation de pression. Observe les trois factions avec une equanimite que certains prennent pour de la sagesse et d'autres pour de l'indifference. Elle est simplement devenue trop dense pour que les ideologies la traversent.`,
  position_lore: `Anomalie des abysses de Thalassyr ou des profondeurs d'Ormn-Dur, sur ce point les temoignages divergent. Le Calendrier des Fees ne contient aucun enregistrement la concernant, ce qui la classe comme 'entite pre-calendrier ou non-naissance'. Les Dissidentes y voient la preuve que le monde peut encore produire des Elus que le systeme imperial ne peut pas cataloguer.`,
  style_combat: `Manipule la gravite de facon globale sur le champ de bataille, alterant les trajectoires de tout projectile et les positions relatives des combattants. Ses interventions sont rares mais reconfigurent completement la geometrie du combat.`,
  kit: ELEMENT_KITS['Gravite'],
  modifications_classe: ``,
};

export default character;
