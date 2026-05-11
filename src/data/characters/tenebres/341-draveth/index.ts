import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 341,
  nom: `Draveth`,
  element: 'Tenebres',
  classe: 'Vanguard',
  espece: 'Peuple des Sables',
  region: 'Deserts',
  faction: 'Convergence',
  description_physique: `Imposant, la peau marquee de rituels de la Convergence : cicatrices geometriques en spirale sur tout le torse et les bras, chaque cicatrice representant un drain auquel il a participe. Ses yeux ont une teinte doree particuliere, effet secondaire de l'exposition prolongee a l'energie extraite lors des rituels d'Ash'Rael.`,
  description_personnalite: `Predicateur zele de la doctrine sacrificielle, convaincu que l'energie des Elus est une ressource collective que l'Empire vole autant que les individus. Preche avant le combat, combat avec la meme ferveur qu'il preche. Se voit comme la pointe de la doctrine qui penetre dans les zones de resistance.`,
  position_lore: `Ne a Ash'Rael, a participe a son premier Drain rituel a seize ans. Pour lui, le Vol de la Lumiere de Vel'Nox etait un acte cosmique de reequilibrage : la lumiere accumulee par une caste marchande illegitimement rendue a ceux qui en etaient prives. Aujourd'hui avant-garde doctrinale en territoire nocteen, tentant de convaincre les guildes d'ombre que leur double jeu est une forme degradee de la redistribution qu'il preeche.`,
  style_combat: `Ouvre la voie pour les unites de drain en absorbant les premiers chocs. Sa presence sur le front aspire l'energie adverse et la reverse immediatement a ses allies sous forme d'impulsion tenebreuse.`,
  kit: ELEMENT_KITS['Tenebres'],
  modifications_classe: ``,
};

export default character;
