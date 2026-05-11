import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 325,
  nom: `Umbrpson`,
  element: 'Psy',
  element2: 'Ténèbres',
  classe: 'Battlemage',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Empire',
  description_physique: `Néréides dont la nature Psy s'exprime par [à définir] et dont la double affinité Ténèbres se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Psy/Ténèbres. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Psy et Ténèbres — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Terreur psychique absolue. Ses ténèbres sont mentalement amplifiées — ceux qui les voient les ressentent comme infinies. Ses illusions dans les ténèbres deviennent réelles pour les cibles.`,
  kit: ELEMENT_KITS['Psy'],
  modifications_classe: `Ses sorts Psy dans les zones Ténèbres ont des effets doublés. Terreur combinée Psy+Ténèbres est permanente jusqu'à sa mort.`,
};

export default character;
