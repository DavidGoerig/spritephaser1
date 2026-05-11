export type { Classe, Personnage, CharacterAssets, AnimationSlot } from '../character-types';
export { CLASSE_DESCRIPTIONS, ANIMATION_SLOTS } from '../character-types';

export { PERSONNAGES_FEU } from './feu';
export { PERSONNAGES_EAU } from './eau';
export { PERSONNAGES_GLACE } from './glace';
export { PERSONNAGES_ELECTRIQUE } from './electrique';
export { PERSONNAGES_PLANTE } from './plante';
export { PERSONNAGES_SOL } from './sol';
export { PERSONNAGES_ROCHE } from './roche';
export { PERSONNAGES_VENT } from './vent';
export { PERSONNAGES_DRAGON } from './dragon';
export { PERSONNAGES_INSECTE } from './insecte';
export { PERSONNAGES_PSY } from './psy';
export { PERSONNAGES_TENEBRES } from './tenebres';
export { PERSONNAGES_FEE } from './fee';
export { PERSONNAGES_POISON } from './poison';
export { PERSONNAGES_SPECTRE } from './spectre';
export { PERSONNAGES_GRAVITE } from './gravite';
export { PERSONNAGES_COMBAT } from './combat';
export { PERSONNAGES_NORMAL } from './normal';
export { PERSONNAGES_CROSS } from './cross';

import { PERSONNAGES_FEU } from './feu';
import { PERSONNAGES_EAU } from './eau';
import { PERSONNAGES_GLACE } from './glace';
import { PERSONNAGES_ELECTRIQUE } from './electrique';
import { PERSONNAGES_PLANTE } from './plante';
import { PERSONNAGES_SOL } from './sol';
import { PERSONNAGES_ROCHE } from './roche';
import { PERSONNAGES_VENT } from './vent';
import { PERSONNAGES_DRAGON } from './dragon';
import { PERSONNAGES_INSECTE } from './insecte';
import { PERSONNAGES_PSY } from './psy';
import { PERSONNAGES_TENEBRES } from './tenebres';
import { PERSONNAGES_FEE } from './fee';
import { PERSONNAGES_POISON } from './poison';
import { PERSONNAGES_SPECTRE } from './spectre';
import { PERSONNAGES_GRAVITE } from './gravite';
import { PERSONNAGES_COMBAT } from './combat';
import { PERSONNAGES_NORMAL } from './normal';
import { PERSONNAGES_CROSS } from './cross';
import type { Personnage } from '../character-types';
import type { ElementLore } from '../lore';
import type { Classe } from '../character-types';
import type { FactionLore } from '../lore';

export const TOUS_PERSONNAGES: Personnage[] = [
  ...PERSONNAGES_FEU,
  ...PERSONNAGES_EAU,
  ...PERSONNAGES_GLACE,
  ...PERSONNAGES_ELECTRIQUE,
  ...PERSONNAGES_PLANTE,
  ...PERSONNAGES_SOL,
  ...PERSONNAGES_ROCHE,
  ...PERSONNAGES_VENT,
  ...PERSONNAGES_DRAGON,
  ...PERSONNAGES_INSECTE,
  ...PERSONNAGES_PSY,
  ...PERSONNAGES_TENEBRES,
  ...PERSONNAGES_FEE,
  ...PERSONNAGES_POISON,
  ...PERSONNAGES_SPECTRE,
  ...PERSONNAGES_GRAVITE,
  ...PERSONNAGES_COMBAT,
  ...PERSONNAGES_NORMAL,
  ...PERSONNAGES_CROSS,
];

export function getPersonnageById(id: number): Personnage | undefined {
  return TOUS_PERSONNAGES.find(p => p.id === id);
}

export function getPersonnagesParElement(element: ElementLore): Personnage[] {
  return TOUS_PERSONNAGES.filter(p => p.element === element);
}

export function getPersonnagesParClasse(classe: Classe): Personnage[] {
  return TOUS_PERSONNAGES.filter(p => p.classe === classe);
}

export function getPersonnagesParFaction(faction: FactionLore): Personnage[] {
  return TOUS_PERSONNAGES.filter(p => p.faction === faction);
}
