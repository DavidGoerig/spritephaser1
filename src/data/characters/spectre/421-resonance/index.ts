import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 421,
  nom: `Resonance`,
  element: 'Spectre',
  classe: 'Enchanteur-Soutien',
  espece: 'Givrin',
  region: 'Crysalme',
  faction: 'Dissidentes',
  description_physique: `Silhouette translucide aux contours tremblants, comme un reflet dans la glace profonde. Sa peau a la couleur des glaciers d'Iskral, traversee par des filaments lumineux qui bougent selon ses emotions. Elle porte des cristaux de glace-memoire issus du champ gele du Gel Eternel, chacun contenant une signature d'Elu mort.`,
  description_personnalite: `Douce et melancolique, portee par la conviction que les morts meritent d'etre entendus autant que les vivants. Recueille les fragments de memoire des Elus captures par la Convergence lors des drains, les preservant dans ses cristaux. Croit que les Dissidentes se battent aussi pour les morts.`,
  position_lore: `Nee a Iskral dans une lignee de conservateurs de memoire qui maintiennent les registres des Elus depuis le Gel Eternel. Son don Spectre lui permet de percevoir les signatures elementaires residuelles des Elus morts, en particulier ceux qui ont ete extraits lors des drains rituels de la Convergence. Aide les Dissidentes en localisant les zones ou des extractions illegales ont eu lieu, revelant des crimes que l'Empire prefererait effacer.`,
  style_combat: `Invoque les resonances elementaires des Elus morts pour soutenir ses allies. Ses soins prennent la forme de fragments de memoire spectrale qui renforcent les capacites des allies vivants en leur pretant la force de ceux qui ne peuvent plus combattre.`,
  kit: ELEMENT_KITS['Spectre'],
  modifications_classe: ``,
};

export default character;
