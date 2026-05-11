import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 278,
  nom: `Moustikx`,
  element: 'Nuee',
  classe: 'Tireur',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Independant',
  description_physique: `Chthonien fin et rapide, ailes fonctionnelles et silencieuses de la Fosse Interdite lui permettant des deplacements courts sans vibrations detectables. Proboscides naturels qui injectent un venin de drainase. Peau brun tres sombre, aucun equipement visible.`,
  description_personnalite: `Operateur independant qui travaille pour la faction representant la plus petite contrainte sur ses methodes. Ethique operationnelle stricte : uniquement des combattants, jamais des civils.`,
  position_lore: `Moustikx est mercenaire dans Ormn-Dur depuis la Fosse Interdite qui a genere une demande pour des operateurs discrets capables de naviguer les zones contaminees. Sa specialite — rendre des unites inutilisables sans les tuer, donc capturables plutot que martyrisables — est valorisee par toutes les factions y compris l'Empire. Son venin de drainase est un derive biologique de la zone hyperfongique. Il ne peut pas etre enregistre dans le Calendrier : il n'a pas de signature elementaire stable.`,
  style_combat: `Tirs depuis une position dissimilee pres d'un Nid allie. Venin de drainase a longue portee. Repositionnement invisible entre les tirs.`,
  kit: ELEMENT_KITS['Nuee'],
  modifications_classe: `Piqure de Moustikx draine 5 PM. Ses attaques ne revelent pas sa position.`,
};

export default character;
