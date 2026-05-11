import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 396,
  nom: `Alcalix`,
  element: 'Poison',
  classe: 'Battlemage',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Empire',
  description_physique: `Stature solide, regard d'un analyste plutot que d'un soldat. Porte une combinaison de protection chimique integree a l'uniforme imperial, innovation des ingenieurs de Kar-Dum specialises dans les missions en zone Fosse. Ses avant-bras sont equipes de diffuseurs d'antidote imperiaux.`,
  description_personnalite: `Pragmatique et loyal, croit que la technocratie de contribution de Kar-Dum et l'Empire ont des interets convergents : les deux maintiennent des systemes qui fonctionnent. Il n'est pas l'Empire. Il est la loi. La loi existe pour que les choses tiennent.`,
  position_lore: `Forme dans les unites chimiques de l'armee imperiale stationne a Ormn-Dur. Applique la loi feerique dans les zones profondes de Kar-Dum, notamment en pourchassant les Elus Poison non enregistres qui utilisent la complexite chimique de la Fosse Interdite comme couverture. Collabore etroitement avec les ingenieurs chthoniens de la technocratie, echangeant discretement des informations contre une protection des infrastructures.`,
  style_combat: `Combat en zone chimique avec une egale efficacite offensive et defensive. Ses sorts de Poison obeissent a une logique de controle imperial : precis, documentes, tracables. Peut neutraliser les toxines adverses aussi facilement qu'il en projette.`,
  kit: ELEMENT_KITS['Poison'],
  modifications_classe: ``,
};

export default character;
