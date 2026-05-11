import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 395,
  nom: `Morbiax`,
  element: 'Poison',
  classe: 'Mage-Burst',
  espece: 'Umbrien',
  region: 'Noctea',
  faction: 'Independent',
  description_physique: `Silhouette asymetrique, un bras plus developpe que l'autre, celui qui canalise les eruptions de poison. Sa peau est marbree de vert-noir autour de la main dominante, comme si l'element tentait de s'echapper en permanence. Ses vetements sont brules aux emplacements de ses precedentes eruptions incontrooees.`,
  description_personnalite: `Anarchique et auto-centre. La violence de ses explosions de poison lui vaut une reputation qui lui ouvre les portes et qui les ferme aussi. A refuse des contrats imperiaux, de la Convergence et des Dissidentes. Sa puissance n'est pas une ressource collective. Elle est la sienne.`,
  position_lore: `Ne a Vel'Nox d'une lignee qui mele heritage ombrien et contamination chimique des guildes noires de la ville. Son eveil a l'element Poison a ete si violent qu'il a detruit le laboratoire clandestin ou il se cachait des Capteurs imperiaux. Les Fees ont signale son nom comme 'anomalie de puissance classe A, capture prioritaire'. Vit depuis dans les bas-fonds entre Noctea et Ormn-Dur.`,
  style_combat: `Libere des eruptions de poison concentre de portee courte mais d'une puissance devastatrice. Zone d'effet large, collateral inevitable : ses allies se mefient autant que ses ennemis, et cette reputation lui convient parfaitement.`,
  kit: ELEMENT_KITS['Poison'],
  modifications_classe: ``,
};

export default character;
