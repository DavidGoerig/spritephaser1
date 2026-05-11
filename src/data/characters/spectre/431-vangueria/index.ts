import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 431,
  nom: `Vangueria`,
  element: 'Spectre',
  classe: 'Vanguard',
  espece: 'Givrin',
  region: 'Crysalme',
  faction: 'Convergence',
  description_physique: `Silhouette imposante parcourue de lignes lumineuses correspondant aux signatures elementaires qu'elle a integrees lors des drains. Chaque drain la rend legerement differente : sa forme evolue selon ce qu'elle absorbe. L'image qu'on retient d'elle depend de quand on l'a vue.`,
  description_personnalite: `Avant-garde doctrinale de la Convergence dans les zones ou les residus spectraux sont abondants : apres un drain, apres une crise, apres une destruction. Les signatures des morts demontrent la justesse de la redistribution. Ils sont partis. Leur puissance reste. Elle la gere.`,
  position_lore: `Nee a Iskral dans une periode ou l'alliance diplomatique de Crysalme avec les Fees etait encore solide, mais recrutee par la Convergence apres avoir vu comment l'Empire utilisait les archives royales pour controler les lignees givrines. Son don Spectre lui permet de guider les equipes de drain vers les zones a haute concentration de signatures residuelles, optimisant les recoltes.`,
  style_combat: `Ouvre la voie dans les zones post-drain en absorbant les residus spectraux ambiants qui ralentiraient ses allies. Sa presence transforme les champs de bataille riches en signatures en ressources directement utilisables pour la Convergence.`,
  kit: ELEMENT_KITS['Spectre'],
  modifications_classe: ``,
};

export default character;
