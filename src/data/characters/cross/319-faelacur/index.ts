import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 319,
  nom: `Faelacur`,
  element: 'Insecte',
  element2: 'Fée',
  classe: 'Spécialiste',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Indépendant',
  description_physique: `Chthoniens dont la nature Insecte s'exprime par [à définir] et dont la double affinité Fée se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Insecte/Fée. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Insecte et Fée — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Pollinisateurs enchantés — ses insectes transportent des bénédictions. Chaque piqûre peut guérir un allié ou blesser un ennemi selon son intention. L'essaim bienveillant est redouté.`,
  kit: ELEMENT_KITS['Insecte'],
  modifications_classe: `Son Essaim peut être configuré en mode Soin (bénédictions) ou mode Attaque. Piqûre en mode Soin régénère les alliés au lieu de blesser.`,
};

export default character;
