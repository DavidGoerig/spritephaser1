import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 515,
  nom: `Absolu`,
  element: 'Normal',
  classe: 'Mage-Burst',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Independent',
  description_physique: `Homme-Lien dont les eruptions d'element Normal paradoxalement devastatrices : il normalise la zone au-dela de ce que les structures physiques peuvent supporter. Les materiaux enchantes se defont. Les barrières elementaires s'effondrent. Les signatures qui se cachaient se revelent. Son element est une violence de la norme.`,
  description_personnalite: `Philosophiquement trouble par sa propre puissance. L'element Normal est suppose etre l'element le moins puissant. Il a prouve que c'est faux : la normalisation forcee d'une zone elementairement saturee cree une explosion. Les Fees ne l'ont pas prevu. Personne ne l'avait prevu.`,
  position_lore: `Ne dans la zone la plus dense de la Saturation des Elus de Virex, dans un quartier ou la coexistence de tous les elements avait cree une pression elementaire extreme. Son eveil a l'element Normal s'est produit comme une decompression : tout ce qui s'etait accumule autour de lui s'est normalise instantanement, creant une vague de destruction equivalente a une explosion elementaire majeure. Les Fees l'ont classe 'anomalie critique, risque de saturation inverse'. Il vit dans les zones les plus denses de Virex, les seules ou sa puissance ne peut pas se declencher accidentellement.`,
  style_combat: `Libere des ondes de normalisation forcee qui devastent les zones de haute saturation elementaire. Dans les zones ordinaires, son element semble peu dangereux. Dans les zones d'anomalie comme Virex, il est l'arme la plus destructrice disponible.`,
  kit: ELEMENT_KITS['Normal'],
  modifications_classe: ``,
};

export default character;
