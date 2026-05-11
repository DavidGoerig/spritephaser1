import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 400,
  nom: `Caustius`,
  element: 'Poison',
  classe: 'Escrimeur',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Empire',
  description_physique: `Dueliste elance dont la lame est gravee de formules chimiques en guise d'ornementation, hommage a l'esthetique technocratique de Kar-Dum. Ses gants sont traites pour resister aux acides et aux toxines de contact. Sa posture de garde est d'ecole, formee dans la tradition des duelistes imperiaux du Bureau d'Application.`,
  description_personnalite: `Methodiste. Respecte les regles du duel comme une forme de loi vivante. Croit que l'Empire a raison parce que l'Empire a de l'ordre, et que l'ordre vaut mieux que n'importe quelle liberte chaotique. La Fosse Interdite existe parce que quelqu'un a refuse les regles. Il ne fera pas la meme erreur.`,
  position_lore: `Ne a Kar-Dum dans une famille de juristes technocratiques. Forme a la fois dans la tradition chimique des ingenieurs chthoniens et dans les arts martiaux de l'Empire. Patrouille les zones profondes d'Ormn-Dur pour identifier les Elus Poison non enregistres qui utilisent la Fosse comme base d'operation. Sa lame peut etre enduiite d'acide chimique reglementaire, documente, dose, legal.`,
  style_combat: `Dueliste precis qui utilise son acide de lame pour corroder les defenses adverses progressivement. Chaque echange reduit la resistance de l'adversaire, rendant les affrontements prolonges inevitablement a son avantage.`,
  kit: ELEMENT_KITS['Poison'],
  modifications_classe: ``,
};

export default character;
