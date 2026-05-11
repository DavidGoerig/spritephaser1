import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 237,
  nom: `Kristel`,
  element: 'Glace',
  element2: 'Vent',
  classe: 'Assassin',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Dissidentes',
  description_physique: `Givrins dont la nature Glace s'exprime par [à définir] et dont la double affinité Vent se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Glace/Vent. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Glace et Vent — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Blizzard permanent — son Vent est un vent du nord glacial. Ses Rafales portent des projectiles de glace. La température de ses zones de Vent baisse progressivement au fil des tours.`,
  kit: ELEMENT_KITS['Glace'],
  modifications_classe: `Ses sorts Vent dans les zones de Glace infligent des dégâts Glace supplémentaires. Cyclone de glace ralentit les ennemis à 20% de vitesse.`,
};

export default character;
