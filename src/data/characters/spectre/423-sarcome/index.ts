import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 423,
  nom: `Sarcome`,
  element: 'Spectre',
  classe: 'Juggernaut',
  espece: 'Givrin',
  region: 'Crysalme',
  faction: 'Convergence',
  description_physique: `Masse imposante dont le corps semble avoir integre des fragments de signatures elementaires d'Elus extraits : des eclats de lumiere spectrale visible sous sa peau, comme des braises refroidies. Sa chair est plus dense que la normale, compactee par les drains auxquels il a participe comme vecteur.`,
  description_personnalite: `Croit que les signatures elementaires des morts sont des ressources non exploitees que la Convergence a le devoir de recuperer. Les Elus morts ont deja paye le prix de leur don. Il s'assure que leur sacrifice n'est pas gaspille.`,
  position_lore: `Ne a Iskral dans une periode d'alliance diplomatique entre Crysalme et les Fees. Initie a la doctrine de la Convergence par des agents venus d'Ash'Rael qui lui ont montre que le Gel Eternel etait un exemple de puissance accumulee non redistribuee. Sert comme Juggernaut dans les zones ou la Convergence cherche a drainer des Elus dont les predecesseurs sont morts sans extraction.`,
  style_combat: `Absorbe les residus spectraux des Elus morts qui flottent dans les zones de drain anterieur, les convertissant en puissance brute. Sa presence dans un lieu ou un drain a eu lieu amplifie considerablement ses capacites offensives.`,
  kit: ELEMENT_KITS['Spectre'],
  modifications_classe: ``,
};

export default character;
