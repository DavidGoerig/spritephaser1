import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 426,
  nom: `Thanatoss`,
  element: 'Spectre',
  classe: 'Battlemage',
  espece: 'Givrin',
  region: 'Crysalme',
  faction: 'Empire',
  description_physique: `Grand et pale, comme fige dans sa propre version du Gel Eternel. Ses mouvements sont d'une lenteur deliberee qui contraste avec leur efficacite absolue. Porte l'uniforme des Battlemages imperiaux avec des incrustations de glace-spectre chargees de signatures elementaires d'Elus morts au service de l'Empire.`,
  description_personnalite: `Loyal a la Citadelle avec la rigidite des glaciers d'Iskral. Croit que le Voile d'Equite protege reellement les Elus enregistres mieux que la clandestinite ne le ferait jamais. La difference entre protection et prison depend du point de vue de celui qui n'a jamais vu les deux.`,
  position_lore: `Forme dans la tradition militaire de Crysalme, qui maintient une alliance diplomatique historique avec les Fees depuis le Gel Eternel. Son don Spectre lui permet de canaliser les signatures residuelles des Elus morts au service de l'Empire comme armement. Patrouille les zones frontieres entre Crysalme et les regions rebelles, traquant les Dissidentes qui utilisent les archives d'Iskral.`,
  style_combat: `Combat en mobilisant les signatures elementaires des Elus morts comme boucliers et projectiles. Sa presence ralentit les adversaires en les enveloppant de residus spectraux qui perturbent leur coordination elementaire.`,
  kit: ELEMENT_KITS['Spectre'],
  modifications_classe: ``,
};

export default character;
