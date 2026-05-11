import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 280,
  nom: `Grillom`,
  element: 'Nuee',
  classe: 'Escrimeur',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Empire',
  description_physique: `Chthonien dont la mutation a produit des organes stridulateurs — plaques de chitine sur les avant-bras qui generent des sons haute frequence desorganisant les systemes nerveux des non-Chthoniens. Lames de chitine deployables depuis les poignets.`,
  description_personnalite: `Dueliste imperial qui utilise une asymetrie d'information — ses stridulations sont en partie infrasoniques, perceptibles comme un malaise avant d'etre identifies comme une attaque. Exploite la confusion avec methode.`,
  position_lore: `Grillom est deploye par l'Empire contre les Elus Nuee des Dissidentes qui utilisent leurs colonies comme reseaux de communication — sa stridulation brouille les signaux pheromone. Une capacite nee de sa propre origine dans une zone de la Fosse Interdite : il a appris a interferer avec les reseaux biologiques distribues en comprenant leurs frequences de communication. Il a rencontre Mantis une fois — l'un des rares combats dont il n'est pas sorti vainqueur.`,
  style_combat: `Stridulation desorganisante en ouverture. Corps a corps avec lames de chitine. Paralysie par venin. Perturbation des communications biologiques adverses.`,
  kit: ELEMENT_KITS['Nuee'],
  modifications_classe: `En 1v1, stridulations s'appliquent automatiquement — la cible perd 1 action par tour. Piqure en duel inflige Paralysie 2 tours.`,
};

export default character;
