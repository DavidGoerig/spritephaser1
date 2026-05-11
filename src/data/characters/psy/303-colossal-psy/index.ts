import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 303,
  nom: `Psykhon`,
  element: 'Psy',
  classe: 'Juggernaut',
  espece: 'Nereide',
  region: 'Thalassyr',
  faction: 'Convergence',
  description_physique: `Nereide dont les capacites de Telekinesie ont ete internalisees au point de modifier sa constitution — densite corporelle anormalement elevee par la pression psy constante vers l'interieur. Mains disproportionnees, veines bleutees qui pulsent lors de l'usage. Son champ psy absorbe les impacts avant qu'ils atteignent sa peau.`,
  description_personnalite: `Un frontalier — il avance, il absorbe, il tient. La Convergence lui convient : son fonctionnement est celui d'un composant fiable d'un systeme plus grand. Sa conversation est directe, son engagement total.`,
  position_lore: `Psykhon est ne a Thalassyr dans la generation qui a suivi le Silence des Vents — l'evenement ou l'assassinat d'un Elu Flying a coupe les flux d'information de la Confederation marchande. Il a grandi dans la reconstruction artificielle des courants, experience qui l'a convaincu que la puissance individuelle sans redistribution crée des vulnerabilites systemiques. La Convergence lui a fourni un cadre doctrinal pour cette conviction. Son champ de Telekinesie defensive est l'un des plus puissants enregistres parmi les Nereides.`,
  style_combat: `Front de choc psy. Pression Mentale en zone sur la ligne ennemie. Telekinesie pour deplacer les obstacles. Cage Psychique sur les casters adverses.`,
  kit: ELEMENT_KITS['Psy'],
  modifications_classe: `Champ psy absorbe passivement 20% des degats mentaux. Pression Mentale en zone 3x3. Ne peut pas etre deplace par des effets de poussee adverses.`,
};

export default character;
