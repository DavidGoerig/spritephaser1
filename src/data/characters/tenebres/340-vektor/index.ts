import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 340,
  nom: `Vektor`,
  element: 'Tenebres',
  classe: 'Escrimeur',
  espece: 'Umbrien',
  region: 'Noctea',
  faction: 'Empire',
  description_physique: `Silhouette elegante et precise, comme taillee pour le duel. Ses mouvements sont d'une economie absolue. Porte une rapiere fine dont la lame est incrustee de fragments de verre noir recuperes dans les decombres du quartier Lumiel, detruit lors du Vol de la Lumiere.`,
  description_personnalite: `Dueliste philosophe qui croit que la loi feerique est la seule structure capable de prevenir le chaos de la nuit fondatrice. Pas cruel, ritualiste. Chaque duel est pour lui une ceremonie de l'ordre contre l'entropie. Il ne se bat pas contre une personne : il se bat contre ce qu'elle represente.`,
  position_lore: `Issu d'une famille de juristes de Vel'Nox qui ont survecu au Vol de la Lumiere grace a l'intervention imperiale. Forme dans l'ecole des duelistes imperiaux de Noctea, dont la methode mele loi feerique et technique de combat nocturne. Participe regulierement aux Duels du Voile, joutes codifiees qui resolvent les differends juridiques entre maisons de Vel'Nox.`,
  style_combat: `Dueliste de precision qui manie la lame et l'ombre avec une maitrise egale. Ses feintes sont impossibles a distinguer de ses attaques reelles, et sa lame porte une charge d'obscurite qui perturbe la concentration adverse.`,
  kit: ELEMENT_KITS['Tenebres'],
  modifications_classe: ``,
};

export default character;
