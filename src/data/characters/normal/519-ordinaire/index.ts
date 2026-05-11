import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 519,
  nom: `Ordinaire`,
  element: 'Normal',
  classe: 'Assassin',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Dissidentes',
  description_physique: `Homme-Lien dont le nom est une strategie operationnelle : il est objectivement ordinaire en apparence, en signature elementaire, en comportement mesurable. Les agents imperiaux qui l'ont croise dans les rues de Virex n'ont pas de description utilisable a lui donner.`,
  description_personnalite: `Accepte que sa force soit son insignifiance apparente. N'elimine pas les individus importants mais les petits engrenages que personne ne surveille et sans lesquels les grandes machines s'arretent. Les Dissidentes lui ont appris que les vraies vulnerabilites d'un systeme sont toujours dans les gens ordinaires qui font le travail invisible.`,
  position_lore: `Ancien fonctionnaire de la bureaucratie de Virex qui a compris, en tenant les registres depuis l'interieur, comment le systeme imperial de surveillance reposait sur des dizaines de collaborateurs ordinaires qui ne savaient pas exactement ce qu'ils faisaient collectivement. A rejoint les Dissidentes pour retirer ces engrenages un par un. Son element Normal lui permet de se deplacer dans n'importe quelle structure administrative ou militaire sans declencher d'alerte.`,
  style_combat: `Opere dans les systemes fermés de Virex en passant pour un employe ordinaire. Ses eliminations visent les fonctions plutot que les personnes, et prennent du temps plutot que de la vitesse. Ses actions ne sont reliees a un Elu qu'en cherchant tres longtemps.`,
  kit: ELEMENT_KITS['Normal'],
  modifications_classe: ``,
};

export default character;
