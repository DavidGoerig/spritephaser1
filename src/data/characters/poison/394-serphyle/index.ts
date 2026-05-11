import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 394,
  nom: `Serphyle`,
  element: 'Poison',
  classe: 'Plongeur',
  espece: 'Sylvan',
  region: 'Sylvera',
  faction: 'Dissidentes',
  description_physique: `Souple comme une liane, couverte d'un reseau de marques vegeto-toxiques, des motifs naturels qui rappellent les dessins des plantes urticantes de Sylvera. Ses secretions cutanees sont legerement toxiques, propriete defensive developpee apres la Faim des Racines pour dissuader les predateurs.`,
  description_personnalite: `Sauvage, impulsive, attachee aux personnes plutot qu'aux principes. Extrait les Elus pieges dans les zones de capture avec une efficacite biologique redoutable. Ne comprend pas vraiment la politique imperiale. Elle comprend les systemes naturels, et pour elle, l'Empire ressemble a une infestation.`,
  position_lore: `Nee a Leth'Var, dans une zone ou la Faim des Racines a laisse des terres appauvries qui ont developpe une chimie defensive particulierement agressive. Son lien a l'element Poison vient de cette chimie vegetale : elle communique avec les plantes toxiques de Sylvera comme d'autres avec des animaux. Aide les Dissidentes a extraire les Elus des zones de capture vegetale dont l'Empire a utilise les lianes memorielles pour pieger des fugitifs.`,
  style_combat: `Plonge dans les zones de couvert vegetal avec une agilite naturelle, empoisonnant les poursuivants via des secretions de contact. Ses toxines laissent des traces sur les ennemis qui permettent de les pister a travers n'importe quelle vegetation.`,
  kit: ELEMENT_KITS['Poison'],
  modifications_classe: ``,
};

export default character;
