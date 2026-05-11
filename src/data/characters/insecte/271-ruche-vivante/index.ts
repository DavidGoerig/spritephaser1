import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 271,
  nom: `Hexara`,
  element: 'Nuee',
  classe: 'Enchanteur-Soutien',
  espece: 'Chthonienne',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',
  description_physique: `Chthonienne dont le corps heberge une colonie symbiotique de scarabees intelligents qui circulent sous sa peau — visibles aux tempes et aux poignets comme des boursouflures mobiles noir-bleutte. Ses yeux ont pris une teinte d'ambre facette. Sa peau emet une pheromone de soin permanente nee de sa symbiose avec la zone hyperfongique de la Fosse Interdite.`,
  description_personnalite: `Pense en termes de colonie — chaque individu est un noeud d'un reseau plus grand qui doit etre maintenu. Sa generosite est pragmatique : les Dissidentes sont sa colonie elargie. Elle soigne parce que les reseaux biologiques distribues fonctionnent mieux quand tous les noeuds sont actifs.`,
  position_lore: `Hexara est nee dans une zone adjacente a la Fosse Interdite — la catastrophe nee quand un Elu Rock ambitieux a creuse trop profond et libere une zone hyperfongique saturee de reseaux biologiques inconnus. Son symbiose avec ce reseau a produit une signature elementaire que le Calendrier des Fees classe comme 'evolution progressive, non-datee' — impossible a enregistrer precisement. Les Dissidentes la protegent precisement parce que la Citadelle ne peut pas la tracer. Elle soigne les brigades dans les zones profondes d'Ormn-Dur que les agents imperiaux n'osent pas approcher.`,
  style_combat: `Soins par colonie distribuee envoyee sur les allies blesses a distance. Essaim Protecteur sur les unites exposees. Infestation defensive pour ralentir les agresseurs. Sa presence en zone stabilise le reseau biologique ambiant.`,
  kit: ELEMENT_KITS['Nuee'],
  modifications_classe: `Soins de Hexara ne laissent pas de signature elementaire traçable — invisibles aux detecteurs imperiaux. Sa colonie symbiotique peut soigner 2 allies simultanement.`,
};

export default character;
