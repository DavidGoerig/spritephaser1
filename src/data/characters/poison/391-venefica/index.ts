import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 391,
  nom: `Venefica`,
  element: 'Poison',
  classe: 'Enchanteur-Soutien',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',
  description_physique: `Peau legerement verdatre, veines apparentes d'un violet sombre le long des avant-bras, marque de son travail prolonge avec les toxines de la Fosse Interdite. Ses cheveux sont stries de vert-gris, ses doigts toujours humides d'une secretion apaisante. Porte des contenants hermetiques remplis de son propre plasma regenerateur.`,
  description_personnalite: `Soigneuse devouee qui a accepte de contaminer son propre corps pour mieux soigner les autres. Douce mais intransigeante sur un point : elle refuse de donner ses antidotes a quiconque collabore avec l'Empire ou la Convergence. La guerison n'est pas neutre. Savoir qui on soigne, c'est un choix politique.`,
  position_lore: `Nee dans les quartiers profonds de Kar-Dum, dans une zone contaminee par les emanations de la Fosse Interdite. Son eveil a l'element Poison a coincide avec la decouverte qu'elle pouvait neutraliser les toxines que d'autres subissaient. Aide les Dissidentes a soigner les Elus qui ont subi des tentatives de drain par la Convergence, car les toxines de la Fosse peuvent contrer certains effets de l'extraction.`,
  style_combat: `Inocule des antidotes aux allies qui regenerent leurs capacites sous l'effet des poisons adverses, transformant la contamination en ressource. Ses soins fonctionnent mieux en zone toxique, ou la richesse chimique de la Fosse amplifie ses effets.`,
  kit: ELEMENT_KITS['Poison'],
  modifications_classe: ``,
};

export default character;
