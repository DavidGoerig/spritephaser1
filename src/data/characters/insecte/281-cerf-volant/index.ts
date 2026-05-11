import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 281,
  nom: `Volantix`,
  element: 'Nuee',
  classe: 'Vanguard',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Convergence',
  description_physique: `Chthonien dont la symbiose avec la Fosse Interdite a produit des ailes de deux metres d'envergure, membraneuses et nervurees de chitine, permettant un vol soutenu. Silhouette de planeur en vol, discret au sol avec les ailes repliees.`,
  description_personnalite: `Vanguard aerien — ouvre des acces par le haut plutot que par le front. Psychologie de premier de cordee : eclaireur qui fait immediatement de la place pour les suivants.`,
  position_lore: `Volantix est utilise par la Convergence pour les operations en terrain vertical des galeries d'Ormn-Dur. Depuis la Fosse Interdite, les profondeurs d'Ormn-Dur ont une geometrie verticale complexe que seuls les Elus Nuee avec capacite de vol peuvent naviguer rapidement. La Convergence est theologiquement fascinee par les Elus Nuee — le reseau hyperfongique EST deja un systeme de redistribution biologique naturelle. Volantix le sait et le verbalise comme justification doctrinale.`,
  style_combat: `Monte en premier vers la position haute. Attaque en plongee sur la ligne adverse. Etablit la tete de pont pour les allies terrestres.`,
  kit: ELEMENT_KITS['Nuee'],
  modifications_classe: `Mue vers des cases en hauteur sans cout supplementaire. Infestation depuis altitude superieure couvre une zone 4x4.`,
};

export default character;
