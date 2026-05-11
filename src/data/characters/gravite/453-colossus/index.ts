import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 453,
  nom: `Colossus`,
  element: 'Gravite',
  classe: 'Juggernaut',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Convergence',
  description_physique: `Masse physique exceptionnelle, comme si la gravite le comprimait vers le sol plus que les autres. Ses pas laissent des empreintes visibles dans le sol le plus dur. La pression de sa simple presence est physiquement perceptible dans un rayon de plusieurs metres.`,
  description_personnalite: `Croit que la gravite est la plus honnete des forces : elle prend proportionnellement a la masse, elle ne ment pas. La Convergence, dit-il, fonctionne sur le meme principe. Ce qu'on a en surplus est attire vers ceux qui en manquent. C'est physique, pas politique.`,
  position_lore: `Ne dans les zones profondes de Kar-Dum ou la pression tellurique est plus forte qu'en surface. Son don Gravite s'est manifeste sous une forme qui l'a rendu physiquement exceptionnel : chaque cellule de son corps est comprimee par une densite gravitationnelle interne. La Convergence l'utilise comme vehicule de pression physique dans les rituels de drain qui necessitent de maintenir les Elus immobiles.`,
  style_combat: `Genere un champ de haute gravite autour de lui qui immobilise les adversaires et empeche toute fuite. Plus ils resistent, plus la pression augmente. Sa presence garantit aux equipes de drain de la Convergence un environnement de travail stable et incontestable.`,
  kit: ELEMENT_KITS['Gravite'],
  modifications_classe: ``,
};

export default character;
