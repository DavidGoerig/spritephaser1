import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 455,
  nom: `Collapseur`,
  element: 'Gravite',
  classe: 'Mage-Burst',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Independent',
  description_physique: `Corps massif marque de fissures naturelles dans la peau, comme si la pression gravitationnelle interne cherchait a s'echapper par la surface. Ses eruptions de gravite laissent des impacts visibles longtemps apres l'evenement : le sol s'affaisse, les structures se compriment.`,
  description_personnalite: `Puissance brute sans doctrine. A teste ses limites jusqu'a detruire un pan entier de la Fosse Interdite lors d'une eruption non controlee, creant une nouvelle chambre vide dans les profondeurs. L'Empire l'a classe 'anomalie destructrice'. La Convergence veut le drainer. Les Dissidentes ne savent pas quoi faire de lui.`,
  position_lore: `Ne dans les zones les plus profondes de Kar-Dum, dans un secteur directement adjacent a la Fosse Interdite. Son don Gravite s'est manifeste lors d'un tremblement de terre mineur qu'il a amplifie involontairement en un effondrement majeur. La technocratie de contribution de Kar-Dum l'a expulse pour risque infrastructurel. Vit dans les zones peripheriques, refusant toute supervision.`,
  style_combat: `Libere des collapses gravitationnels localises qui compriment violemment tout ce qui se trouve dans leur rayon. Les structures adverses s'effondrent, les projectiles sont deviees, et les zones de combat sont rendues intraversables pendant plusieurs minutes.`,
  kit: ELEMENT_KITS['Gravite'],
  modifications_classe: ``,
};

export default character;
