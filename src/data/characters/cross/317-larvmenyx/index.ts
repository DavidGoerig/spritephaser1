import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 317,
  nom: `Larvmenyx`,
  element: 'Insecte',
  element2: 'Psy',
  classe: 'Vanguard',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Convergence',
  description_physique: `Chthoniens dont la nature Insecte s'exprime par [à définir] et dont la double affinité Psy se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Insecte/Psy. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Insecte et Psy — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Convergence) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Ruche consciente — ses insectes ont une intelligence collective telepathique. Il dirige ses colonies mentalement sans effort. La Reine des Essaims partage sa conscience.`,
  kit: ELEMENT_KITS['Insecte'],
  modifications_classe: `Peut contrôler ses insectes télékinétiquement à portée infinie. Reine des Essaims partage ses sorts Psy sur ses cibles.`,
};

export default character;
