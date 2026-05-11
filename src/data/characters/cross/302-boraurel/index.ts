import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 302,
  nom: `Boraurel`,
  element: 'Vent',
  element2: 'Fée',
  classe: 'Assassin',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Dissidentes',
  description_physique: `Aérides dont la nature Vent s'exprime par [à définir] et dont la double affinité Fée se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Vent/Fée. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Vent et Fée — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Vents bénis — ses Rafales transportent Bénédictions et soins. Ses alliés dans ses zones de Vent reçoivent des buffs à chaque déplacement. Le souffle divin de ses zones est thérapeutique.`,
  kit: ELEMENT_KITS['Vent'],
  modifications_classe: `Ses zones Vent diffusent Bénédiction passive aux alliés en mouvement. Vague Sacrée lancée depuis ses zones de Vent a portée triplée.`,
};

export default character;
