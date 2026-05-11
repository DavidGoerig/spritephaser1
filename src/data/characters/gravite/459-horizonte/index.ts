import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 459,
  nom: `Horizonte`,
  element: 'Gravite',
  classe: 'Assassin',
  espece: 'Nereide',
  region: 'Thalassyr',
  faction: 'Dissidentes',
  description_physique: `Nereide dont la presence est difficile a localiser avec precision : son element altere la perception de sa distance reelle. Elle est toujours soit plus proche soit plus loin que ce que les sens indiquent. Sa silhouette semble se deplacer sur un plan different de celui ou elle se trouve reellement.`,
  description_personnalite: `Precise et silencieuse. Cible les agents du Calendrier qui operent dans les zones de surveillance sous-marine de Neris, ceux que la confederation marchande a accepte d'heberger pour maintenir son acces aux flux d'information feeriques. La neutralite de Neris, dit-elle, est une trahison avec des sourires.`,
  position_lore: `Nee dans les abysses de Thalassyr, dans les zones les plus profondes ou la gravite interagit avec les courants thermiques pour creer des environnements de pression variable. Son don lui permet de manipuler la courbure gravitationnelle locale pour faire apparaitre sa position comme differente de ce qu'elle est. Agit pour les Dissidentes contre les infrastructures du Calendrier installes dans Neris depuis le Silence des Vents.`,
  style_combat: `Frappe depuis une position dont la distance et l'angle reels sont impossibles a determiner pour l'adversaire. Ses attaques semblent venir de plusieurs directions simultanement grace aux distorsions gravitationnelles qu'elle maintient autour d'elle en permanence.`,
  kit: ELEMENT_KITS['Gravite'],
  modifications_classe: ``,
};

export default character;
