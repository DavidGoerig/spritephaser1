import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 305,
  nom: `Telepyne`,
  element: 'Psy',
  classe: 'Mage-Burst',
  espece: 'Nereide',
  region: 'Thalassyr',
  faction: 'Independant',
  description_physique: `Nereide dont le surplus de puissance psy se manifeste physiquement — des arcs de lumiere bleue partent de ses tempes quand elle accumule. Les objets dans un rayon de deux metres flottent involontairement a sa proximite. Ses yeux sont devenus blancs de surcharge chronique. Porte des vetements tres lourds comme ancre physique.`,
  description_personnalite: `Independante parce qu'elle est dangereuse pour tout le monde y compris ses allies en mode pleine puissance. Deux tentatives dans des brigades se sont soldees par des incidents collateux. Accepte des missions ponctuelles avec niveau de destruction clarifie a l'avance.`,
  position_lore: `Telepyne est nee a Thalassyr dans la generation du Silence des Vents. Sa puissance psy brute est documentee comme l'une des plus elevees chez une Nereide non-captee par la Citadelle. L'Empire veut la capturer depuis des annees — le Calendrier l'avait identifiee comme naissance prioritaire. Elle a ete hors de portee depuis l'enfance, protegee par une famille de marchands qui a compris ce que l'enregistrement imperial signifiait. Elle travaille pour les Dissidentes quand leurs objectifs coincident avec les siens.`,
  style_combat: `Accumulation via Pression Mentale sequencee. A charge maximale, Confusion Massive totale. Domination sur la cible la plus puissante pendant la confusion.`,
  kit: ELEMENT_KITS['Psy'],
  modifications_classe: `Confusion Massive rayon de 8 cases, dure 3 tours. Pression Mentale accumule +30% degats par cast successif. Apres 3 sorts en 1 tour, prochain sort maximise automatiquement.`,
};

export default character;
