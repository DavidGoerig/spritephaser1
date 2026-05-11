import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 262,
  nom: `Terrfeel`,
  element: 'Plante',
  element2: 'Sol',
  classe: 'Tireur',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Indépendant',
  description_physique: `Sylvans dont la nature Plante s'exprime par [à définir] et dont la double affinité Sol se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Plante/Sol. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Plante et Sol — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Contrôle les racines souterraines. Ses Vrilles surgissent depuis les cases Sol sans prévenir. Le terrain qu'il contrôle a des racines partout — s'arrêter 1 tour = être piégé.`,
  kit: ELEMENT_KITS['Plante'],
  modifications_classe: `Ses sorts Plante opèrent depuis les cases Sol adjacentes (racines souterraines). Ses cases Sol se couvrent de Vrilles après 2 tours.`,
};

export default character;
