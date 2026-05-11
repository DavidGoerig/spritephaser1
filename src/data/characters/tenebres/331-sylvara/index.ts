import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 331,
  nom: `Sylvara`,
  element: 'Tenebres',
  classe: 'Enchanteur-Soutien',
  espece: 'Umbrien',
  region: 'Noctea',
  faction: 'Dissidentes',
  description_physique: `Silhouette mince aux cheveux noir de jais stries de fils argentes. Sa peau capte la lumiere comme un prisme inverse, absorbant la clarte, diffusant l'ombre. Ses vetements sont tisses d'un materiau issu des archives textiles de la vieille republique lumineuse de Vel'Nox, avant le Vol.`,
  description_personnalite: `Douce et methodique, portee par une conviction tranquille. Elle n'impose jamais ses convictions par la violence, elle les insuffle par la persistance. Croit que la nuit peut soigner autant que la lumiere, si on sait l'utiliser.`,
  position_lore: `Nee dans les decombres de l'ancien quartier marchand de Vel'Nox, district Lumiel, detruit lors du Vol de la Lumiere. Guerisseuse de guilde clandestine, elle soigne les Elus non enregistres que les Fees traquent, les cachant dans les recoins ombreux que les capteurs feeriques ne savent plus lire depuis la nuit fondatrice.`,
  style_combat: `Utilise les zones d'ombre comme tissu de soin : ses allies plonges dans l'obscurite se regenerent plus vite. Dissimule les blessures dans le noir, reduisant les signatures elementaires detectables par les Capteurs adverses.`,
  kit: ELEMENT_KITS['Tenebres'],
  modifications_classe: ``,
};

export default character;
