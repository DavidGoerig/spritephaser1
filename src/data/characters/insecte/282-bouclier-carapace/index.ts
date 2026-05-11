import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 282,
  nom: `Sklerix`,
  element: 'Nuee',
  classe: 'Gardien',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',
  description_physique: `Chthonien dont la carapace a atteint une epaisseur maximale documentee — plaques dorsales et pectorales de quatre centimetres de chitine composite. En position de bouclier, couvre deux metres de large. Se deplace lentement.`,
  description_personnalite: `Gardien dans l'ame — pas un combattant qui defend, un defenseur qui combat si necessaire. Son role est de garantir que les personnes derriere lui peuvent faire leur travail. Protege Hexara en priorite absolue.`,
  position_lore: `Sklerix tient les positions que les Dissidentes d'Ormn-Dur etablissent dans les zones adjacentes a la Fosse Interdite. Sa carapace, nee de la symbiose avec le reseau hyperfongique de la zone, a des proprietes de resistance que les materiaux manufactures imperiaux ne peuvent pas egaler a ce niveau de masse. L'Empire a note qu'attaquer Sklerix dans une position etablie est non-economique : le cout en ressources depasse systematiquement les gains tactiques. La Convergence (Scaramax) est son homologue adverse — une opposition de deux colosses defensifs avec des allegiances differentes.`,
  style_combat: `Interposition entre la menace et ses allies. Exosquelette Actif maximal. Infestation sur les approches pour ralentir. Il ne bouge pas — les ennemis bougent autour de lui.`,
  kit: ELEMENT_KITS['Nuee'],
  modifications_classe: `Essaim Protecteur peut etre applique en reaction. Exosquelette Actif toujours actif a 20% de reduction de degats de base.`,
};

export default character;
