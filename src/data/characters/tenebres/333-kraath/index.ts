import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 333,
  nom: `Kraath`,
  element: 'Tenebres',
  classe: 'Juggernaut',
  espece: 'Peuple des Sables',
  region: 'Deserts',
  faction: 'Convergence',
  description_physique: `Masse imposante aux muscles noircis par des scarifications rituelles du Premier Drain. Sa peau a la texture d'un basalte nocturne, dense, rugueuse, presque insensible. Porte des plaques de pierre-ombre soudees a son torse lors d'un rite d'initiation de la Convergence a Ash'Rael.`,
  description_personnalite: `Fanatique tranquille. Ne hurle pas, ne menace pas. Explique. Croit que l'energie des Elus appartient au monde, et que refuser de la restituer est un acte d'egoisme existentiel. N'a aucune pitie pour ceux qui gardent leur don comme une propriete privee.`,
  position_lore: `Ne a Ash'Rael dans une lignee ayant participe au Premier Drain. Pour lui, le Vol de la Lumiere de Vel'Nox n'etait pas un crime mais un precedent : la preuve que l'energie peut etre reaffectee depuis ceux qui l'accumulent vers ceux qui en ont besoin. Sert la Convergence comme chair sacrificielle volontaire, convaincu que son corps est un vecteur de redistribution.`,
  style_combat: `Absorbe l'energie tenebreuse des adversaires pour s'en nourrir, comme un drain vivant. Sa presence siphonne les reserves elementaires des ennemis proches, qu'il reverse sous forme de puissance brute lors des assauts.`,
  kit: ELEMENT_KITS['Tenebres'],
  modifications_classe: ``,
};

export default character;
