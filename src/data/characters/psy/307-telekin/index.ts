import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 307,
  nom: `Telekyn`,
  element: 'Psy',
  classe: 'Artillerie',
  espece: 'Nereide',
  region: 'Thalassyr',
  faction: 'Dissidentes',
  description_physique: `Nereide dont la Telekinesie a ete specialisee dans la manipulation d'objets lourds a longue distance. Ses bras ont perdu de leur masse musculaire inutile, ses mains fines toujours en mouvement comme si elles malaxaient un materiau invisible. Sa posture est toujours tournee de biais pour optimiser la projection de son champ psy.`,
  description_personnalite: `Tacticien de l'environnement. Avant un combat, evalue ce qui peut etre projete, dans quelle direction, avec quelle energie. Son style d'artillerie est entierement base sur ce qui est disponible sur le terrain — il n'apporte pas ses projectiles, il utilise les votres.`,
  position_lore: `Telekyn est un artilleur psy des Dissidentes specialise dans les operations en terrain urbain de la Citadelle et dans les couloirs commerciaux de Thalassyr. Il bombarde les positions imperiales avec leurs propres fortifications — une subversion materielle que les architectes militaires imperiaux n'avaient pas prevue. Depuis le Silence des Vents, qui a fragmente les flux d'information a Thalassyr, il connait precisement quels noeuds de reconstruction artificielle sont les plus fragiles.`,
  style_combat: `Identifie les plus gros objets via Telepathie de perception spatiale. Souleve et maintient. Liberation a vitesse maximale vers la cible. Cage Psychique sur les approchants.`,
  kit: ELEMENT_KITS['Psy'],
  modifications_classe: `Telekinesie peut soulever des objets jusqu'a 5 fois sa propre masse. Pression Mentale en suivi de Telekinesie est gratuite.`,
};

export default character;
