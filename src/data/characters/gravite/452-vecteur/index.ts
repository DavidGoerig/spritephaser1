import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 452,
  nom: `Vecteur`,
  element: 'Gravite',
  classe: 'Enchanteur-Capteur',
  espece: 'Nereide',
  region: 'Thalassyr',
  faction: 'Empire',
  description_physique: `Nereide d'une precision geometrique, chaque geste calculant le vecteur optimal. Ses instruments de mesure gravitationnelle sont integres a ses avant-bras sous forme d'implants technologiques nes de la collaboration entre Neris et l'Empire. Son regard analyse constamment les trajectoires et les forces ambiantes.`,
  description_personnalite: `Scientifique de l'Empire convaincu que la mesure precise est la meilleure forme de justice. Les Elus Gravite non enregistres representent des forces non mesurees : dangereuses, imprecises, inutiles a la societe. L'enregistrement leur donne une forme gerable.`,
  position_lore: `Technicien de la confederation marchande de Neris recrute par l'Empire apres que le Silence des Vents a revele la dependance de Thalassyr aux flux d'information feeriques. Son don Gravite lui permet de localiser les Elus par leur signature de distorsion gravitationnelle : chaque Elu deforme legerement l'espace autour de lui, et Vecteur peut lire ces deformations comme une carte.`,
  style_combat: `Detecte les Elus non enregistres par les micro-distorsions gravitationnelles qu'ils emettent en permanence. Ses sorts de capture utilisent la gravite locale pour immobiliser les cibles sans violence directe, preservant l'Elu intact pour l'enregistrement au Calendrier.`,
  kit: ELEMENT_KITS['Gravite'],
  modifications_classe: ``,
};

export default character;
