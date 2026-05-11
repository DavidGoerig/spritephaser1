import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 272,
  nom: `Zethrix`,
  element: 'Nuee',
  classe: 'Enchanteur-Capteur',
  espece: 'Chthonienne',
  region: 'Ormn-Dur',
  faction: 'Empire',
  description_physique: `Chthonienne dont la mutation a oriente sa symbiose vers la production de pheromones de detection. Ses glandes salivaires ont ete remplacees par des organes producteurs d'une substance acide legere. Ses yeux sont multifacettes, vert iridescent, avec acuite dans le spectre UV.`,
  description_personnalite: `Travaille pour l'Empire parce qu'il lui a fourni un laboratoire et une structure. Sa loyaute est a la recherche en biologie distribuee, pas a l'ideologie. Elle catalogue les Elus Nuee avec la meme methodologie qu'elle catalogue des specimens biologiques.`,
  position_lore: `Zethrix est l'agente de surveillance entomologique de l'Empire a Ormn-Dur. Elle identifie les Elus Nuee resistants au programme de captation en detectant leurs signatures de pheromone — une technique qu'elle a developpee en etudiant la Fosse Interdite. Le probleme fondamental de la Citadelle avec les Elus Nuee : leur evolution est progressive, sans date de naissance claire, ce qui rend leur enregistrement au Calendrier difficile. Zethrix travaille sur ce probleme. Elle connait Hexara de loin — elle a sa signature de soin dans ses archives imperiaux.`,
  style_combat: `Nids de detection qui enregistrent les signatures de pheromone. Acide de venin sur les unites portant des colonies symbiotiques. Marquage de cibles pour suivi imperial a long terme.`,
  kit: ELEMENT_KITS['Nuee'],
  modifications_classe: `Les Nids de Zethrix restent actifs indefiniment et enregistrent toutes les signatures qui passent. Piqure de Zethrix marque sa cible — visible a toute la coalition imperiale pendant 5 tours.`,
};

export default character;
