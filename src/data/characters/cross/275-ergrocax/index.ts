import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 275,
  nom: `Ergrocax`,
  element: 'Sol',
  element2: 'Roche',
  classe: 'Tireur',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Indépendant',
  description_physique: `Chthoniens dont la nature Sol s'exprime par [à définir] et dont la double affinité Roche se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Sol/Roche. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Sol et Roche — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Géologie vivante — contrôle le sous-sol complet. Ses Soulèvements propulsent des Colonnes Rocheuses. Le terrain est un instrument entre ses mains — montagnes sur demande.`,
  kit: ELEMENT_KITS['Sol'],
  modifications_classe: `Soulèvement peut créer directement des Colonnes Rocheuses. Séisme dans ses zones Roche détruit les défenses ennemies instantanément.`,
};

export default character;
