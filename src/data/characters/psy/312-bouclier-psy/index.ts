import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 312,
  nom: `Psychark`,
  element: 'Psy',
  classe: 'Gardien',
  espece: 'Fee',
  region: 'Citadelle',
  faction: 'Dissidentes',
  description_physique: `Fee dont la specialite defensive psy a produit une physique inhabituelle — sa peau a une texture matte qui absorbe la lumiere, son aura defensive psy est visible comme une distorsion de l'air en permanence. Grande pour une Fee. Pas d'armure conventionnelle — son champ psy est son armure.`,
  description_personnalite: `Defend ce qui doit l'etre avec la conviction de quelqu'un qui a vu ce qui arrive quand la defense fait defaut. A vecu la prise de la Citadelle par l'Empire enfant. Gardienne parce que c'est ce qu'elle aurait voulu avoir a sa disposition ce jour-la.`,
  position_lore: `Psychark garde les brigades des Dissidentes a la Citadelle avec une priorite absolue sur Veylith, la coordinatrice telepathique. Depuis la prise progressive de la Citadelle par l'Empire — qui a transforme l'observatoire cosmique en prison-academie-caserne controlant le Calendrier des Fees — les Fees des Dissidentes qui operent encore dans la Citadelle sont en danger constant. Psychark maintient les boucliers psy des unites les plus importantes pendant les operations d'extraction.`,
  style_combat: `Cage Psychique defensive autour des allies exposes. Reconstruction en cours de combat sur les unites critiques. Illusion sur les positions des allies pour tromper les capteurs psy adverses.`,
  kit: ELEMENT_KITS['Psy'],
  modifications_classe: `Cage Psychique en mode Bouclier autour d'un allie — protege des sorts a cible unique pendant 2 tours. Soins de deux cibles simultanement. Sorts a cible unique adverses perdent 30% d'efficacite contre ses allies proches.`,
};

export default character;
