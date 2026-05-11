import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 202,
  nom: `Vrath`,
  element: 'Dragon',
  element2: 'Feu',
  classe: 'Juggernaut',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Convergence',
  description_physique: `Pyriens à la physiologie partiellement draconique — écailles de basalte sur les épaules et les avant-bras, crête osseuse sur le crâne. Taille anormale même pour un Pyrien : deux mètres vingt. Respire une fumée légère en permanence.`,
  description_personnalite: `La puissance de Vrath est telle qu'il parle rarement — sa présence parle pour lui. Croit en la hiérarchie naturelle : les plus forts protègent les plus faibles. La Convergence lui paraît être exactement cela.`,
  position_lore: `Né lors d'une double convergence Dragon/Feu rarissime. L'Empire le voulait pour ses laboratoires. La Convergence fut plus rapide — et lui offrit une mission plutôt qu'une cage. Il est leur arme nucléaire : déployé uniquement pour les situations les plus critiques.`,
  style_combat: `Vrath combine le Souffle Élémentaire Dragon (élémentaire Feu) avec les sorts de terrain Feu. Son Souffle transforme les cases touchées en Dragon+Feu — les cases les plus résistantes et les plus dommageables du jeu. Il est quasi-invincible sur ses propres cases Dragon.`,
  kit: ELEMENT_KITS['Dragon'],
  modifications_classe: `Peut utiliser Traînée Ignée, Mur de Flammes et Météore du kit Feu. Son Souffle Élémentaire laisse des cases Feu sur son passage. La Résonance des Écailles s'applique aussi aux cases Feu adjacentes.`,
};

export default character;
