import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 252,
  nom: `Fortrakken`,
  element: 'dragon',
  classe: 'Gardien',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Dissidentes',
  description: {
    physique: `Écailles calcifiées en couches si épaisses qu'elles ne sont plus des écailles mais une armure organique continue. Il ne peut pas faire de mouvements amples — sa mobilité est extrêmement limitée — mais ce qu'il protège ne peut pas être atteint à travers lui. Il garde des sanctuaires Dissidents sous la Forge Silencieuse, dans des tunnels que seuls les Dragon Élus peuvent naviguer.`,
    personnalite: `Immobilité comme doctrine. Ne parle pas en combat. Hors combat, parle peu mais avec une précision absolue. Sa présence est perceptible physiquement — la chaleur irradie de ses écailles comme d'un mur de basalte chaud.`,
    lore: `Protecteur des sanctuaires Dissidents enfouis dans les tunnels thermiques sous la Forge Silencieuse — des espaces que l'Empire ne cartographie pas parce que les formations draconiques perturbent leurs instruments de mesure. Fortrakken est la raison pour laquelle personne de l'Empire n'a jamais atteint ces tunnels. Il n'a pas besoin de bouger pour être la raison.`,
    combat: `Rempart d'Écaille (zone d'interdiction de passage impassable pendant 2 tours), Absorption Draconique (prend les dégâts d'un allié adjacent), Réponse Ancestrale (décharge la chaleur absorbée en une onde de zone). Passif Forteresse Organique : réduction des dégâts de 35% tant qu'il reste immobile.`,
  },
  stats: ELEMENT_KITS['dragon']['Gardien'],
  modificateurs: [],
};

export default character;
