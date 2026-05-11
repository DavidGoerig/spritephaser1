import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 424,
  nom: `Effroi`,
  element: 'Spectre',
  classe: 'Plongeur',
  espece: 'Umbrien',
  region: 'Noctea',
  faction: 'Dissidentes',
  description_physique: `Silhouette qui genere autour d'elle un halo d'ombre spectrale : on la voit, mais quelque chose dans le cerveau refuse d'enregistrer sa presence completement. Mince et rapide, les vetements superposant des couches de tissu sombre issus des archives textiles des guildes noires de Vel'Nox.`,
  description_personnalite: `Pragmatique et efficace, specialisee dans l'extraction des Elus de zones hautement surveillees. Utilise l'effet de dissonance perceptive que son element Spectre genere pour passer inaperue dans les patrouilles imperiales. Ne theorise pas : extrait.`,
  position_lore: `Ancienne agente double des guildes d'ombre de Vel'Nox, recrutee par les Dissidentes apres le Vol de la Lumiere quand elle a vu combien de signatures elementaires d'Elus morts flottaient dans les archives noires de la ville, temoignant de drains non documentes. Son don lui permet de masquer les signatures elementaires des Elus qu'elle extrait, les rendant invisibles aux capteurs imperiaux.`,
  style_combat: `Plonge dans les zones de forte surveillance en emportant ses proteges dans un cone de silence spectral qui masque leurs signatures elementaires. Sa vitesse d'extraction est inversement proportionnelle au nombre de residus spectraux dans la zone, qu'elle absorbe pour s'alimenter.`,
  kit: ELEMENT_KITS['Spectre'],
  modifications_classe: ``,
};

export default character;
