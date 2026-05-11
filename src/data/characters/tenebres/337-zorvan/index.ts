import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 337,
  nom: `Zorvan`,
  element: 'Tenebres',
  classe: 'Artillerie',
  espece: 'Umbrien',
  region: 'Noctea',
  faction: 'Dissidentes',
  description_physique: `Grand et maigre, les doigts toujours legerement noircis par l'artisanat de ses projectiles d'ombre. Lunettes a double verre pour la vision nocturne perfectionnee. Porte des sangles d'equipement faites de cuir vieilli recupere dans les archives des guildes marchandes de l'ancienne Vel'Nox.`,
  description_personnalite: `Calme au tir, passionne en debat. Croit que les infrastructures de controle feerique sont des cibles legitimes avant d'etre des edifices. Ne detruit pas de la pierre : il demantele un systeme.`,
  position_lore: `Ancien technicien des reseaux d'information de Vel'Nox, recrute par les Dissidentes apres avoir decouvert que la neutralite de la ville servait en realite a transmettre les positions des Elus non enregistres a l'Empire. Utilise ses connaissances des systemes d'information de Vel'Nox pour cibler precisement les relais du Calendrier des Fees.`,
  style_combat: `Tire des projectiles d'ombre concentree depuis une distance maximale, ciblant les infrastructures et les postes de commandement adverses. Ses obus d'obscurite perdurent et s'etendent apres l'impact, rendant la zone instable pour les Capteurs qui y opereraient.`,
  kit: ELEMENT_KITS['Tenebres'],
  modifications_classe: ``,
};

export default character;
