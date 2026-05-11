import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 293,
  nom: `Skaltoxon`,
  element: 'Roche',
  element2: 'Poison',
  classe: 'Spécialiste',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Indépendant',
  description_physique: `Chthoniens dont la nature Roche s'exprime par [à définir] et dont la double affinité Poison se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Roche/Poison. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Roche et Poison — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Minéraux toxiques — ses formations rocheuses libèrent des gaz soufrés. Ses Colonnes empoisonnent l'atmosphère autour d'elles. Son Labyrinthe est une chambre à gaz naturelle.`,
  kit: ELEMENT_KITS['Roche'],
  modifications_classe: `Ses cases Roche libèrent Brouillard Corrosif en zone. Son Labyrinthe génère Épidémie passive pour tous les ennemis à l'intérieur.`,
};

export default character;
