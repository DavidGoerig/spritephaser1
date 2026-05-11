import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 291,
  nom: `Borgur`,
  element: 'Roche',
  element2: 'Ténèbres',
  classe: 'Vanguard',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Convergence',
  description_physique: `Chthoniens dont la nature Roche s'exprime par [à définir] et dont la double affinité Ténèbres se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Roche/Ténèbres. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Roche et Ténèbres — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Convergence) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Pierre des ombres — ses formations rocheuses sont noires et absorbent la lumière. Ses cases Roche sont des zones de ténèbres. Son Labyrinthe Noir est impossible à cartographier pour les ennemis.`,
  kit: ELEMENT_KITS['Roche'],
  modifications_classe: `Ses cases Roche génèrent des zones Ténèbres. Labyrinthe de Pierre Noire : les ennemis à l'intérieur perdent le sens de l'orientation.`,
};

export default character;
