import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 393,
  nom: `Sclerotis`,
  element: 'Poison',
  classe: 'Juggernaut',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Convergence',
  description_physique: `Corps massif dont la peau a durci en plaques squameuses resistantes sous l'exposition prolongee aux toxines de la Fosse Interdite. Il ne ressent plus la douleur depuis des annees. Ses cicatrices forment des reliefs geographiques sur son torse, carte tactile de ses participations aux rituels de drain.`,
  description_personnalite: `Croit avec une conviction absolue que son corps est un vecteur de redistribution collective. A absorbe ce que la Fosse a produit, et renvoie ce qu'elle lui a donne. La philosophie de la Convergence lui semble une evidence biologique : tout systeme vivant fonctionne sur le principe de redistribution.`,
  position_lore: `Ne dans les zones les plus profondes de Kar-Dum, directement expose aux emanations de la Fosse Interdite depuis l'enfance. Sa tolerance aux toxines en fait un candidat ideal pour la Convergence, qui l'utilise comme vecteur dans les zones ou les rituels de drain habituels seraient interrompus par l'environnement chimique hostile. A accepte de participer a trois drains rituels, perdant a chaque fois une part de sa sensibilite.`,
  style_combat: `Absorbe les poisons adverses et les accumule jusqu'a les liberer en flux de drain sur les ennemis proches. Plus il absorbe, plus sa contre-attaque est violente. Sa carapace le rend presque impermeaable aux stratégies d'empoisonnement directes.`,
  kit: ELEMENT_KITS['Poison'],
  modifications_classe: ``,
};

export default character;
