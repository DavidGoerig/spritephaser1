import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['plante']['Soutien'];

export const personnage: Personnage = {
  id: 121,
  nom: 'Sylvara',
  element: 'plante',
  classe: 'Soutien',
  espece: 'Sylvane',
  region: 'Sylvera',
  faction: 'Dissidentes',
  niveau: 1,
  xp: 0,
  stats: {
    hp: modifs.hp,
    atk: modifs.atk,
    def: modifs.def,
    spe_atk: modifs.spe_atk,
    spe_def: modifs.spe_def,
    vit: modifs.vit,
  },
  description: {
    physique: `Sylvane aux cheveux entrelacés de racines fines, peau légèrement verte en été, yeux couleur sève dorée. Ses mains laissent pousser de petites pousses là où elle soigne.`,
    personnalite: `Guérisseuse de la forêt, refusant que ses soins soient réservés aux Élus enregistrés. Les Conservateurs de la Sève la voient comme une alliée ; l'Empire comme un problème.`,
    lore: `Sylvara soigne à Leth'Var depuis la Faim des Racines — l'événement où un réseau racinaire conscient créé par un Élu Plante extraordinaire a dévoré son substrat, détruisant des pans entiers de la mémoire ancienne de Sylvera. Elle travaille à restaurer ce qui peut l'être, en dehors du contrôle féerique. Les Dissidentes lui ont appris que certaines archives perdues dans la Faim pourraient révéler les origines des Fées — que la Citadelle trouve très commode que ces archives aient disparu.`,
    combat: `Régénération végétale sur les alliés, soins qui laissent une trace de végétation protectrice. Barricades de racines pour bloquer les assaillants. Réseau souterrain de communication entre ses alliés.`,
  },
};
