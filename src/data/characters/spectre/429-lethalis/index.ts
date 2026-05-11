import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 429,
  nom: `Lethalis`,
  element: 'Spectre',
  classe: 'Assassin',
  espece: 'Givrin',
  region: 'Crysalme',
  faction: 'Dissidentes',
  description_physique: `Quasi-invisible au repos : son element lui permet de se fondre dans les signatures elementaires ambiantes comme un bruit dans du bruit. Quand elle se materialise, sa silhouette semble sortir d'un reve dont personne ne se souvient completement.`,
  description_personnalite: `Clinique et methodique. N'eprouve pas de satisfaction dans l'elimination mais la considere comme un outil necessaire. Cible en priorite les agents imperiaux qui detruisent les archives d'Iskral, les seuls qui documentent les origines des Fees que la Citadelle voudrait effacer.`,
  position_lore: `Formee dans les traditions militaires de Crysalme mais recrutee par les Dissidentes apres avoir decouvert que l'Empire tentait de faire main basse sur les archives royales d'Iskral qui documentaient la relation pre-Voile entre les Fees et les Givrins. Son don Spectre lui permet de passer totalement inaperue dans les zones riches en signatures elementaires residuelles.`,
  style_combat: `Frappe depuis l'interieur du champ de signatures spectrales ambiantes, invisible jusqu'au moment du coup. Ses attaques laissent une marque qui desactive temporairement les capacites elementaires de la cible, comme si elle avait subi un mini-drain.`,
  kit: ELEMENT_KITS['Spectre'],
  modifications_classe: ``,
};

export default character;
