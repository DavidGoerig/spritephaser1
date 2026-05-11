import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 277,
  nom: `Scutax`,
  element: 'Nuee',
  classe: 'Artillerie',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',
  description_physique: `Chthonien dont la symbiose a produit des tubes de chitine dans les avant-bras — structures de lancement biologique qui projettent des charges d'acide a grande portee. Carapace dorsale deployable en couvert de tir. Trappu, centre de gravite bas pour la stabilite.`,
  description_personnalite: `Artilleur patient. Choisit une position, s'installe, tire jusqu'a ce que la mission soit accomplie. Sa regularite rend les commandants calmes des qu'ils savent qu'il est en position.`,
  position_lore: `Scutax bombarde les formations imperiales depuis des positions hors de portee en exploitant la connaissance des galeries d'Ormn-Dur que seuls les Chthoniens natifs possedent. Depuis la Fosse Interdite, les agents imperiaux evitent certaines zones — Scutax les utilise comme bases de tir. Son acide a la particularite de provenir du reseau hyperfongique de la Fosse : il contamine durablement les surfaces touchees, creant des zones que meme les Chthoniens ordinaires evitent.`,
  style_combat: `Position haute ou point de vue optimal. Tir de harcelement continu. Contamination de terrain par acide hyperfongique. Corrosion Massive sur les concentrations.`,
  kit: ELEMENT_KITS['Nuee'],
  modifications_classe: `Acide de Scutax cree une flaque toxique persistante. Si stationnaire depuis son dernier tour, +3 portee et +25% degats.`,
};

export default character;
