import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 344,
  nom: `Toxdenan`,
  element: 'Poison',
  element2: 'Gravité',
  classe: 'Gardien',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',
  description_physique: `Chthoniens dont la nature Poison s'exprime par [à définir] et dont la double affinité Gravité se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Poison/Gravité. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Poison et Gravité — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Dissout sous pression. Sa Haute Gravité accélère l'absorption des toxines. Ses toxines dans les zones de haute gravité pénètrent les armures comme si elles n'existaient pas.`,
  kit: ELEMENT_KITS['Poison'],
  modifications_classe: `Ses toxines dans les zones Haute Gravité ignorent toutes les résistances. Collapse Gravitationnel libère une Pandémie dans la zone d'effondrement.`,
};

export default character;
