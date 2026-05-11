import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 310,
  nom: `Mindrak`,
  element: 'Psy',
  classe: 'Escrimeur',
  espece: 'Nereide',
  region: 'Thalassyr',
  faction: 'Empire',
  description_physique: `Nereide dont la specialite psy est la resistance et la contre-attaque mentale — son champ psy est naturellement defensif, formant une barriere visible comme une legere distorsion de l'air autour de sa tete. Fixite des yeux indiquant une vigilance mentale permanente.`,
  description_personnalite: `Dueliste psy qui croit dans la superiorite de la defense active. L'Empire lui a fourni la doctrine et les outils. Il challenge les Elus Psy adverses avec une methodologie precise — epuiser leurs ressources en reflectant leurs attaques.`,
  position_lore: `Mindrak est deploye par l'Empire de Thalassyr pour neutraliser les Elus Psy puissants que le Calendrier identifie comme resistants a la captation normale. Sa technique — le duel d'usure psy dans une Cage Psychique permanente — est documentee dans les formations imperiaux comme 'technique Mindrak'. Ses affrontements avec Telepyne (Independante) sont documentes — ils durent invariablement jusqu'a epuisement total de l'un des deux. Thalassyr, comme relais du Calendrier depuis le Silence des Vents, lui fournit les profils des Elus Psy a neutraliser.`,
  style_combat: `Etablit son champ de resistance psy. Cage Psychique permanente autour du perimetre. Force la cible a depenser ses PM en defense. Reflet de chaque sort ennemi.`,
  kit: ELEMENT_KITS['Psy'],
  modifications_classe: `Reflete automatiquement 25% des degats psy recus. En 1v1, Cage Psychique permanente jusqu'a la fin du duel. Concentration en stack : +5% degats psy par sort adverse reflchi.`,
};

export default character;
