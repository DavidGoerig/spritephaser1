import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 338,
  nom: `Faelmalia`,
  element: 'Fée',
  element2: 'Poison',
  classe: 'Battlemage',
  espece: 'Fées',
  region: 'Citadelle',
  faction: 'Empire',
  description_physique: `Fées dont la nature Fée s'exprime par [à définir] et dont la double affinité Poison se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Fée/Poison. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Fée et Poison — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Paradoxe bénédicton — sa lumière guérit ses alliés et empoisonne ses ennemis simultanément. La même Aura de Soin est un Aura de Venin pour ses ennemis dans la même zone.`,
  kit: ELEMENT_KITS['Fée'],
  modifications_classe: `Ses sorts Fée ont un double effet : soin pour alliés, poison pour ennemis dans la même zone. Purification peut être inversée pour empoisonner.`,
};

export default character;
