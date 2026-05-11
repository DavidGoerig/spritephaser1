import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 513,
  nom: `Roc d'Isthme`,
  element: 'Normal',
  classe: 'Juggernaut',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Convergence',
  description_physique: `Homme-Lien d'une solidite monolithique, corps comme taille dans la pierre de Virex, dont les fondations integrent des materiaux de toutes les regions du monde confluentes en Isthme. Sa peau porte des tatouages de la doctrine de la Convergence superposes aux motifs de plusieurs cultures de passage.`,
  description_personnalite: `Croit que l'element Normal de Virex est la preuve que la redistribution est une loi naturelle : quand tous les elements se concentrent, ils finissent par se niveler. La Convergence accelere simplement ce processus. Personne n'accumule indefiniment ce que le monde a besoin de repartir.`,
  position_lore: `Ne dans les quartiers de confluence de Virex, la ou les flux marchands de toutes les regions se croisent et ou la Saturation des Elus a produit des naissances que personne ne comprend entierement. Recrute par la Convergence qui lui a presente la saturation de Virex comme une demonstration naturelle de leur doctrine : trop d'accumulation produit le chaos. Sert comme Juggernaut dans les operations de drain a Virex, dont la complexite elementaire necessite quelqu'un d'immovable.`,
  style_combat: `Absorbe toutes les energies elementaires adverses avec une equivalence parfaite : son element Normal lui permet de les traiter comme equivalentes, les accumulant sans preference avant de les liberer en force brute de percussion.`,
  kit: ELEMENT_KITS['Normal'],
  modifications_classe: ``,
};

export default character;
