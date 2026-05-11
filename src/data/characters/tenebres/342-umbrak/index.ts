import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 342,
  nom: `Umbrak`,
  element: 'Tenebres',
  classe: 'Gardien',
  espece: 'Umbrien',
  region: 'Noctea',
  faction: 'Independent',
  description_physique: `Massif et calme, peau noire profonde dont les reflets changent selon l'angle de la lumiere ou de l'ombre. Sa carapace naturelle d'ombre condensee s'est developpee autour de ses epaules et de son torse au fil des annees, rendant certains projectiles physiquement inefficaces.`,
  description_personnalite: `Protecteur instinctif sans ideologie tranchee. Protege les gens qu'il a choisi de proteger, point. N'a pas d'opinion sur la politique des Fees. A une opinion sur qui se trouve derriere lui.`,
  position_lore: `Ancien garde du corps prive des maisons marchandes de Vel'Nox, devenu independant apres que toutes les maisons qu'il servait ont soit ete absorbees par l'Empire, soit detruites par les guildes clandestines. Propose maintenant ses services a des tarifs exorbitants, avec une liste de clients selectionnes sur un critere simple : pas lies a la Convergence ni a la capture d'Elus.`,
  style_combat: `Genere des zones d'ombre impenetrables autour de lui et de ses allies. Les projectiles entrant dans sa zone d'obscurite perdent leur trajectoire et s'eteignent, et les capteurs elementaires adverses ne percoivent plus rien a l'interieur de son bouclier.`,
  kit: ELEMENT_KITS['Tenebres'],
  modifications_classe: ``,
};

export default character;
