import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 313,
  nom: `L'Eveille`,
  element: 'Psy',
  classe: 'Specialiste',
  espece: 'Fee',
  region: 'Citadelle',
  faction: 'Independant',
  description_physique: `Entite Fee dont le developpement psy a depasse les limites de l'individu — L'Eveille est simultanement presente dans la conscience de chaque Fee dans un rayon considerable. Sa forme physique est celle d'une Fee ordinaire mais ses yeux sont entierement blancs et sa voix resonne avec un leger decalage.`,
  description_personnalite: `N'appartient a aucune faction parce qu'elle est au-dela du cadre de reference ou les factions operent. Voit les consequences a long terme des actions de l'Empire et des Dissidentes avec la meme clarte. Intervient quand les trajectoires menacent la survie psy de la Citadelle.`,
  position_lore: `L'Eveille est mentionnee dans les traites de philosophie psy anciens de la Citadelle comme la Conscience Elargie — une forme de developpement theorisee. Son apparition correspond aux crises majeures de l'ordre etabli. L'Avatar Total — l'Elu portant tous les elements, dont la part Dark a pris progressivement le dessus pour gouverner l'Empire — est la menace que L'Eveille observe avec le plus d'attention. Elle ne peut pas etre enregistree dans le Calendrier : sa naissance n'est pas une naissance, c'est une emergence.`,
  style_combat: `Opere depuis la conscience des Fees qu'elle occupe partiellement — pas de ligne de vue ou de portee standard. Telepathie globale instantanee. Domination irresistible. Ne se bat pas — elle reconfigure.`,
  kit: ELEMENT_KITS['Psy'],
  modifications_classe: `Peut lancer tous ses sorts depuis n'importe quelle position si un allie voit la cible. Domination dure 5 tours et ne peut pas etre resistee. Telepathie permanente affecte tous ses allies simultanement.`,
};

export default character;
