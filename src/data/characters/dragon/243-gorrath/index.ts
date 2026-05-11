import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 243,
  nom: `Gorrath`,
  element: 'dragon',
  classe: 'Juggernaut',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Convergence',
  description: {
    physique: `Massif, avec des écailles noircies par douze extractions rituelles partielles que la Convergence appelle 'restitutions'. Ses écailles ont des fractures visibles aux jointures — chaque extraction en a laissé une nouvelle. Sa puissance brute est préservée, mais ses collègues de la Convergence savent que sa signature élémentaire est partiellement creuse.`,
    personnalite: `Volontaire pour les extractions. Croit que la puissance d'un Élu Dragon appartient au monde qui l'a produite, non à l'individu. Ne souffre pas en présence des ritualistes de la Convergence — ou affirme ne pas souffrir, ce qui n'est pas tout à fait la même chose.`,
    lore: `La Convergence le présente comme la preuve que les extractions peuvent être menées sur un Élu Dragon sans le tuer — douze fois, argument irréfutable. Ce qu'ils ne présentent pas, c'est le coût sur sa capacité à penser à long terme, ni le fait qu'il n'a pas demandé de médecin lors des trois dernières extractions. Pour la Convergence, il est un investissement. Pour lui, il est l'argument vivant d'une théologie qu'il choisit de croire.`,
    combat: `Pression Draconique (aura de force physique qui repousse tout ce qui est adjacent), Charge de Pierre-Dragon (rush lourd qui détruit les obstacles), Corps Primordial (mode de survie où toutes les sources de dégâts sont absorbées et restituées en éclat de zone). Passif Endurance Ancestrale : réduction massive des dégâts quand les PV passent sous 30%.`,
  },
  stats: ELEMENT_KITS['dragon']['Juggernaut'],
  modificateurs: [],
};

export default character;
