import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 520,
  nom: `Cadence`,
  element: 'Normal',
  classe: 'Escrimeur',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Empire',
  description_physique: `Homme-Lien au rythme de combat hypnotique : ses attaques suivent une cadence qui semble previsible jusqu'a ce qu'elle ne le soit plus. Ses cicatrices de formation viennent des competitions de Virex ou il a appris a combattre tous les styles elementaires.`,
  description_personnalite: `Dueliste academique qui croit que la regularite du Voile d'Equite est une forme de cadence sociale : previsible, rassurant, et fondamentalement necessaire pour eviter le chaos de la Saturation non reglee. A vu ce que Virex est sans administration. Ne veut pas le revoir.`,
  position_lore: `Champion de plusieurs ecoles de duel de Virex, recrute par les Escrimeurs imperiaux pour sa capacite a combattre des adversaires de tous les elements elementaires avec la meme efficacite. Son element Normal lui permet de s'adapter au rythme de combat de n'importe quel adversaire en quelques echanges, puis de le decaler de sa cadence optimale pour creer des ouvertures. Participe aux Duels du Voile de Virex, la forme la plus visible de la presence imperiale dans la ville.`,
  style_combat: `Dueliste qui apprend le rythme de l'adversaire en quelques echanges, puis l'altere progressivement jusqu'a ce que l'adversaire commette une erreur de cadence. Efficace contre tous les elements elementaires car son adaptation ne depende pas d'une contre-strategie elementaire fixe.`,
  kit: ELEMENT_KITS['Normal'],
  modifications_classe: ``,
};

export default character;
