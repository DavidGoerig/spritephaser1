import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 343,
  nom: `L'Abyssal`,
  element: 'Tenebres',
  classe: 'Specialiste',
  espece: 'Umbrien',
  region: 'Noctea',
  faction: 'Independent',
  description_physique: `Entite dont la forme humaine est incertaine : on voit un contour, une silhouette, mais les details se derobent. Certains temoins rapportent des yeux comme des trous dans la nuit. D'autres un sourire froid dans une obscurite totale. Il semble avoir ete present dans les archives de Vel'Nox bien avant le Vol de la Lumiere.`,
  description_personnalite: `Observateur millenaire qui a vu passer les regimes, les guerres, les empires de la lumiere et de l'ombre. Pas cynique : lucide. A vu le monde avant le Calendrier, dit-il. Il etait plus honnete. Pas meilleur. Plus honnete.`,
  position_lore: `Anomalie du Calendrier des Fees : sa date de naissance est inscrite dans les archives de la vieille republique lumineuse de Vel'Nox, mais le registre indique egalement qu'il etait deja present lors de la fondation de cette meme republique. Les Fees le classent comme 'entite temporelle instable'. Il vend des informations aux trois factions selon des criteres que personne n'a encore dechiffres completement.`,
  style_combat: `Manipule l'obscurite absolue de maniere incomprehensible pour les observateurs. Ses interventions sur le champ de bataille sont rares mais decisives, et toujours dans une direction que ses propres allies n'avaient pas prevue.`,
  kit: ELEMENT_KITS['Tenebres'],
  modifications_classe: ``,
};

export default character;
