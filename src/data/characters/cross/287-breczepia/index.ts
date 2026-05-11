import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 287,
  nom: `Breczepia`,
  element: 'Roche',
  element2: 'Vent',
  classe: 'Artillerie',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',
  description_physique: `Chthoniens dont la nature Roche s'exprime par [à définir] et dont la double affinité Vent se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Roche/Vent. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Roche et Vent — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Balliste naturelle — utilise le Vent pour propulser ses rochers à des vitesses de projectile. Ses Cyclones transportent des débris rocheux. La tempête de pierre qu'il déclenche est une pluie de météores.`,
  kit: ELEMENT_KITS['Roche'],
  modifications_classe: `Projection Rocheuse a portée doublée avec le Vent comme vecteur. Cyclone de rochers frappe toutes les cibles dans son rayon.`,
};

export default character;
