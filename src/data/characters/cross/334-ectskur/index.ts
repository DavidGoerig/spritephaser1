import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 334,
  nom: `Ectskur`,
  element: 'Ténèbres',
  element2: 'Spectre',
  classe: 'Enchanteur-Capteur',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Empire',
  description_physique: `Umbriens dont la nature Ténèbres s'exprime par [à définir] et dont la double affinité Spectre se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Ténèbres/Spectre. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Ténèbres et Spectre — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Néant absolu — combine l'obscurité et le vide spectral. Ses zones sont à mi-chemin entre l'existence et la non-existence. Les ennemis dans ses zones ne peuvent pas être soignés.`,
  kit: ELEMENT_KITS['Ténèbres'],
  modifications_classe: `Ses zones combinent Ténèbres et Spectre — seuls les sorts Fée peuvent les pénétrer. Les ennemis dans ses zones ne peuvent pas régénérer de ressources.`,
};

export default character;
