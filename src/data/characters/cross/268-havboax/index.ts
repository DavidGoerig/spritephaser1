import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 268,
  nom: `Havboax`,
  element: 'Plante',
  element2: 'Ténèbres',
  classe: 'Enchanteur-Soutien',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Dissidentes',
  description_physique: `Sylvans dont la nature Plante s'exprime par [à définir] et dont la double affinité Ténèbres se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Plante/Ténèbres. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Plante et Ténèbres — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Végétation de l'ombre — ses plantes poussent sans lumière dans les ténèbres. La jungle sombre qu'il crée est impénétrable et son intérieur est toujours en Nuit Absolue.`,
  kit: ELEMENT_KITS['Plante'],
  modifications_classe: `Ses zones Plante comptent comme zones Ténèbres pour ses sorts. Forêt Instantanée génère automatiquement Voile d'Ombre à l'intérieur.`,
};

export default character;
