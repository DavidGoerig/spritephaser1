import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 351,
  nom: `Vectel`,
  element: 'Gravité',
  element2: 'Normal',
  classe: 'Battlemage',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Empire',
  description_physique: `Néréides dont la nature Gravité s'exprime par [à définir] et dont la double affinité Normal se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Gravité/Normal. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Gravité et Normal — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Ingénieur de la masse — utilise la gravité avec une précision d'horloger. Ses Singularités ont une taille exactement calculée. Jamais de Collapse Gravitationnel non planifié.`,
  kit: ELEMENT_KITS['Gravité'],
  modifications_classe: `Ses sorts Gravité consomment 25% moins. Ses champs gravitationnels peuvent être annulés sans résidu (contrôle parfait).`,
};

export default character;
