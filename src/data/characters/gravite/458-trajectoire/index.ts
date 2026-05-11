import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 458,
  nom: `Trajectoire`,
  element: 'Gravite',
  classe: 'Tireur',
  espece: 'Nereide',
  region: 'Thalassyr',
  faction: 'Independent',
  description_physique: `Nereide aux yeux qui calculent instinctivement toutes les courbes dans son champ de vision. Ses projectiles suivent des paraboles complexes qui contournent les obstacles en exploitant les micro-variations gravitationnelles locales. Porte un equipement minimal : son don fait le reste.`,
  description_personnalite: `Mercenaire des trajectoires improbables. Tire des angles que les autres considerent impossibles, exploitant les variations gravitationnelles que lui seul percoit. Accepte des contrats specifiques, refuse les allegiances permanentes : la liberte de trajectoire est sa philosophie de vie.`,
  position_lore: `Ancien navigateur de la confederation marchande de Neris, specialise dans les routes abyssales que les courants du Silence des Vents ont rendues impredictibles. Son element lui a permis de developper une intuition des gradients gravitationnels qui s'est traduite dans son combat : il tire en calculant la courbure de la gravite locale pour inflechir ses projectiles apres leur depart.`,
  style_combat: `Tire des projectiles qui suivent des trajectoires non-lineaires exploitant les variations gravitationnelles naturelles. Ses tirs arrivent toujours sous un angle que l'adversaire n'a pas prevu, contournant boucliers et couverts physiques.`,
  kit: ELEMENT_KITS['Gravite'],
  modifications_classe: ``,
};

export default character;
