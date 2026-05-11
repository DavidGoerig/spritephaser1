import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 255,
  nom: `Boltel`,
  element: 'Electrique',
  element2: 'Ténèbres',
  classe: 'Enchanteur-Soutien',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Dissidentes',
  description_physique: `Aérides dont la nature Electrique s'exprime par [à définir] et dont la double affinité Ténèbres se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Electrique/Ténèbres. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Electrique et Ténèbres — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Éclairs sombres — son électricité est noire et absorbe la lumière. Ses décharges de ténèbres drainent l'énergie plutôt que de brûler. Le Drain électrique épuise instantanément.`,
  kit: ELEMENT_KITS['Electrique'],
  modifications_classe: `Ses sorts Electrique draient également des ressources en plus des dégâts. Nuit Absolue + Tempête de Foudre : combo dévastateur qui combine les deux ultimes.`,
};

export default character;
