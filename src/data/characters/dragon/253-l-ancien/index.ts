import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 253,
  nom: `L'Ancien`,
  element: 'dragon',
  classe: 'Specialiste',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Independant',
  description: {
    physique: `Le plus vieux Dragon Élu connu. Ses écailles ont la couleur et la texture de la pierre-dragon des formations les plus anciennes de Varkhôl — des teintes bordeaux presque noires à la surface, révélant en profondeur des strates orange et or. Sa taille dépasse les deux mètres. Ses mouvements sont délibérément lents mais jamais incertains.`,
    personnalite: `Sa naissance prédate le Calendrier des Fées lui-même — aucun dossier à la Citadelle du Voile ne le mentionne, ce que les Fées trouvent profondément inquiétant. Il intervient occasionnellement dans des événements historiques, produit une action décisive, et retourne dans les profondeurs volcaniques. Personne ne sait pourquoi il agit quand il agit.`,
    lore: `Il a été présent lors de la catastrophe fondatrice qui a créé la Forge Silencieuse — certains temoignages indirects le placent sur les lieux avant la Rupture Thermique, comme s'il l'avait prévue. La Citadelle du Voile a lancé une enquête. L'enquête a été classée. L'Ancien est plus vieux que le Calendrier lui-même et répond à une logique que personne n'a encore formulée.`,
    combat: `Mémoire des Profondeurs (rappelle toutes les naissances Dragon survenues dans la zone depuis des siècles, révélant les sites et les lignes de vulnérabilité), Volcan Décision (déstabilise tout le terrain de jeu via une réponse tectonique), Éveil Primordial (une fois par partie : activation de tous les sites draconiques de la carte, transformant le terrain). Passif Avant le Calendrier : ses capacités ne peuvent pas être prédites ni contraren par des effets de détection.`,
  },
  stats: ELEMENT_KITS['dragon']['Specialiste'],
  modificateurs: [],
};

export default character;
