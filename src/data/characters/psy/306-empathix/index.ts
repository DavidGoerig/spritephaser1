import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 306,
  nom: `Empathix`,
  element: 'Psy',
  classe: 'Battlemage',
  espece: 'Fee',
  region: 'Citadelle',
  faction: 'Empire',
  description_physique: `Fee dont la capacite d'Extraction Mentale a ete internalisee dans un style de combat hybride — elle lit l'intention de combat de son adversaire avant qu'il agisse. Ses bras ont developpe une musculature supplementaire. Peau d'un blanc teinte bleu, veines psy visibles qui rougissent quand elle anticipe.`,
  description_personnalite: `Loyale a l'Empire parce qu'il lui a donne un cadre ou son double talent — combat et lecture mentale — est valorise plutot que redoute. Sa seule limite morale : elle refuse de lire les pensees des non-combattants.`,
  position_lore: `Empathix est le Battlemage psy de l'Empire deploye contre les Elus Psy des Dissidentes qui operent a la Citadelle et dans les reseaux de Thalassyr. Elle anticipe les strategies ennemies en lisant les signatures psy de leurs sorts avant qu'ils soient lances. Le Calendrier des Fees l'a identifiee comme naissance prioritaire des sa detection — sa combinaison combat-lecture mentale est exactement ce que l'Empire cherche pour neutraliser les operateurs psy dissidents comme Novaex.`,
  style_combat: `Engage en lisant l'action suivante de sa cible via Telepathie active. Swap a l'angle optimal. Corps a corps anticipe avant que l'adversaire finisse son action.`,
  kit: ELEMENT_KITS['Psy'],
  modifications_classe: `Peut predire et contrer un sort ennemi une fois par tour. Corps a corps inflige +20% si elle a lu l'intention de la cible ce tour.`,
};

export default character;
