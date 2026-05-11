import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 516,
  nom: `Standard`,
  element: 'Normal',
  classe: 'Battlemage',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Empire',
  description_physique: `Homme-Lien dont la posture au combat est la reference pedagogique de toutes les academies militaires de Virex : les manuels l'utilisent comme illustration du positionnement correct. Son uniforme imperial est d'une conformite absolue. Il est litteralement le standard.`,
  description_personnalite: `Croit que la standardisation est la forme la plus elevee de la civilisation. Le Calendrier des Fees, les uniformes imperiaux, les protocoles de combat : autant de normes qui permettent a des milliers de personnes de cooperer sans se detruire. Les Dissidentes voient de la liberte dans le chaos. Lui voit de la souffrance.`,
  position_lore: `Instructeur senior des academies militaires de Virex converti en officier operationnel de l'Empire. Son element Normal lui permet d'adapter parfaitement sa technique a n'importe quel contexte elementaire, ce qui en fait un agent extraordinairement efficace dans les zones d'anomalie de la Saturation. Applique la loi feerique en utilisant sa connaissance intime de Virex et de ses anomalies.`,
  style_combat: `Combat avec une technique qui est la reference de son element : parfaitement adapte a toutes les conditions elementaires, maximalement efficace dans toutes les zones de Virex. Son element Normal lui permet de contre-combattre n'importe quel element adverse avec la technique optimale.`,
  kit: ELEMENT_KITS['Normal'],
  modifications_classe: ``,
};

export default character;
