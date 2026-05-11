import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 336,
  nom: `Kaemis`,
  element: 'Tenebres',
  classe: 'Battlemage',
  espece: 'Umbrien',
  region: 'Noctea',
  faction: 'Empire',
  description_physique: `Bati en largeur, regard froid et methodique. Porte l'uniforme gris fer des Battlemages imperiaux avec une cape courte aux reflets d'ebene, signe de sa specialisation en combat nocturne. Cicatrice ancienne sur la joue gauche, souvenir d'une confrontation avec une guilde clandestine de Vel'Nox.`,
  description_personnalite: `Loyal, rigide, croyant sincere au Voile d'Equite. Ne doute pas, ou refuse de douter. A vu Vel'Nox avant l'Empire, dans le chaos de la nuit fondatrice, et ne veut pas que cela recommence. Philosophie simple : l'ordre imperial imparfait vaut mieux que la liberte destructrice de la Nuit.`,
  position_lore: `Ne apres le Vol de la Lumiere dans une Vel'Nox en reconstruction. A grandi en voyant l'Empire restaurer les infrastructures lumiineuses de la ville. Recrute par le Bureau d'Application du Voile a dix-sept ans. Aujourd'hui, il patrouille les districts ou les archives noires circulent encore, appliquant la loi feerique avec une competence redoutable et un doute inexistant.`,
  style_combat: `Manie la loi feerique comme une arme : ses sorts d'ombre sont encadres de runes imperiales qui les rendent precis et mesures. Combat en corps-a-corps, absorbant les attaques adverses avec des barrieres d'obscurite codifiee avant de contre-attaquer.`,
  kit: ELEMENT_KITS['Tenebres'],
  modifications_classe: ``,
};

export default character;
