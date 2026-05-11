import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 428,
  nom: `Eclipse Morte`,
  element: 'Spectre',
  classe: 'Tireur',
  espece: 'Aeride',
  region: 'Asterciel',
  faction: 'Independent',
  description_physique: `Corps d'une maigreur extreme, peau d'un blanc presque lumineux. Ses yeux captent les residus spectraux comme des objectifs photographiques. Porte des lunettes a verres sombres qui filtrent les signatures elementaires excessives, lui permettant de viser dans des environnements riches en residus.`,
  description_personnalite: `Mercenaire specialisee dans les zones a haute densite spectrale : les champs de bataille apres un drain, les archives brulees, les quartiers devastees par des crises elementaires. Tire ou les autres ne peuvent pas voir, dans des environnements que son element lui rend parfaitement lisibles.`,
  position_lore: `Ancienne ingenieure des systemes optiques d'Heliora, devenue mercenaire apres la Chute des Nuages qui a detruit ses laboratoires. Decouvrit lors de cet evenement que son don Spectre lui permettait de voir les trajectoires des signatures elementaires residuelles comme des lignes de tir naturelles. Vend maintenant ses services sans allegiance doctrinale.`,
  style_combat: `Tire depuis des positions ou les residus spectraux masquent sa propre signature elementaire. Ses fleches portent des charges de vide spectral qui effacent temporairement les capacites elementaires de la cible, comme un mini-drain non letal.`,
  kit: ELEMENT_KITS['Spectre'],
  modifications_classe: ``,
};

export default character;
