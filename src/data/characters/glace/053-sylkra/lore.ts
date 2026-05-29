import type { PersonnageLoreComplet } from '../../../lore-types';

const sylkra: PersonnageLoreComplet = {
  id: 53,
  nom: 'Sylkra',
  element: 'Glace',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Monarchie',

  apparence: {
    taille_corpulence: 'Givrine de 67 ans — une gardienne du Champ Gelé dont la silhouette dit les décennies passées dans le froid du Champ. Elle est fine, résistante aux températures extrêmes, avec des réflexes adaptés à la surveillance d\'une zone instable. Elle a l\'apparence de quelqu\'un qui a été dehors dans le froid toute sa vie. Elle a été dehors dans le froid toute sa vie.',
    peau: 'Blanche Givrine avec des cristaux de givre permanents aux tempes — une adaptation de l\'élément Glace sur une longue période d\'exposition. Ces cristaux sont plus développés que chez d\'autres Élus Glace de son âge. Le Champ Gelé a laissé quelque chose en elle.',
    yeux: 'Bleu pâle avec une qualité de détection — elle voit les micro-variations dans les structures cristallines. Cette capacité lui a permis de documenter les anomalies du Champ avant que les instruments officiels ne les détectent. Elle a été réduite au silence avant de pouvoir conclure.',
    vetements: 'Uniforme de gardienne du Champ Gelé — blanc avec des protections thermiques. Elle porte cet uniforme même en dehors de ses heures de service. Ce n\'est pas du zèle — c\'est une façon de dire qu\'elle est toujours en service.',
    signes_particuliers: 'Elle documente tout. Ses carnets de notes couvrent 22 ans de service au Champ Gelé. Ces carnets ne sont pas dans les archives officielles — ils sont chez elle. Keldris (57) ne sait pas qu\'ils existent.',
  },

  psychologie: {
    dominante: 'Gardienne du Champ Gelé depuis 22 ans qui a vu et rapporté les micro-fractures dans les cristaux périphériques — et qui a été réduite au silence par Keldris (57) au nom de la stabilité politique. Elle continue à documenter en secret depuis 18 mois.',
    mecanisme_de_defense: 'La documentation secrète comme acte de résistance. Tant qu\'elle documente, les fractures existent dans un record. Si quelque chose d\'irréversible se produit, son dossier sera la preuve qu\'on savait et qu\'on a choisi de ne pas agir.',
    contradiction_interne: 'Elle travaille toujours pour la Monarchie. Elle a été réduite au silence par la Monarchie. Elle continue à porter son uniforme et à surveiller le Champ, officiellement, tout en documentant secrètement ce que la Monarchie ne veut pas voir. Elle n\'a pas démissionné. Elle n\'a pas dit à Keldris qu\'elle continuait à documenter. Elle ne s\'est pas encore décidée sur ce qu\'elle fera de ses carnets.',
    rapport_aux_autres: 'Thyval (55) est l\'archiviste des serments — il est possible qu\'il ait une copie de son rapport réduit au silence dans les archives officielles. Elle ne lui a pas encore parlé. Aethren (54) est le descendant de coalition qui veut dégeler le Champ — ses objectifs et les siens ne sont pas identiques mais ils convergent sur la vérité sur l\'état du Champ. Keldris (57) est son supérieur hiérarchique — et l\'homme qui lui a dit de se taire.',
    vision_du_monde: 'Un monument géopolitique construit sur quelque chose de physiquement instable devient une bombe à retardement. La Monarchie fait de la stabilité son argument. La stabilité du Champ n\'est plus garantie. Elle est la seule à avoir les données pour le prouver.',
  },

  histoire: {
    enfance: {
      titre: 'Le Champ',
      contenu: 'Née à Crysalme dans une famille de gardiens du Champ Gelé depuis trois générations. Le Champ Gelé n\'était pas un mystère pour elle — c\'était une infrastructure. Elle l\'avait appris comme telle. À 22 ans, elle avait intégré les gardiens comme technicienne de surveillance cristalline.',
    },
    arrivee: {
      titre: 'La première anomalie',
      contenu: 'À 49 ans, elle avait observé la première micro-fracture dans les cristaux périphériques du Champ — une variation de 0,003% dans la densité cristalline d\'un secteur qu\'elle surveillait depuis 5 ans. Elle avait documenté et attendu de voir si ça progressait. Ça avait progressé.',
    },
    premier_conflit: {
      titre: 'Le rapport',
      contenu: 'À 65 ans, après 16 ans d\'observations et 23 micro-fractures documentées, elle avait soumis un rapport formel à Keldris (57). Le rapport décrivait une progression géométrique des fractures — pas linéaire. Keldris l\'avait convoquée et lui avait dit que le rapport ne serait pas transmis. La raison officielle : "données préliminaires insuffisantes pour conclure". La raison réelle : si le rapport sortait, la stabilité géopolitique de Crysalme était menacée.',
    },
    revelation: {
      titre: 'La documentation secrète',
      contenu: 'À 65 ans, après la convocation de Keldris, elle avait continué à documenter dans ses carnets personnels — 18 mois de données supplémentaires, plus précises et plus alarmantes que le rapport original. Elle est maintenant à 47 fractures documentées, dont 12 dans les 4 derniers mois. La progression s\'accélère.',
    },
    etat_actuel: {
      titre: 'La décision',
      contenu: 'Ses carnets contiennent 22 ans de données. Les 18 derniers mois montrent une accélération. Velsa (58) dit entendre quelque chose depuis le Champ depuis 3 mois. Thyval (55) a trouvé quelque chose dans les archives des serments. Elle ne sait pas encore ce que Velsa entend ou ce que Thyval a trouvé. Elle est à un point où continuer à documenter sans agir devient difficile à justifier même pour elle.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sylkra_keldris',
      titre: 'Les carnets secrets',
      description: 'Sylkra a 18 mois de données secrètes après son rapport réduit au silence. Si Keldris (57) découvrait ces carnets, elle serait révoquée et les données disparaîtraient avec elle. Si elle les transmet à quelqu\'un avant que Keldris l\'apprenne — Thyval (55), Aethren (54), ou quelqu\'un en dehors de la Monarchie — les données survivraient à sa révocation.',
      personnages_impliques: [57, 55],
      declencheur: 'Décision de Sylkra sur à qui transmettre ses carnets secrets',
      consequence: 'Les données sur l\'état réel du Champ atteignent quelqu\'un capable d\'agir — ou sont détruites par Keldris',
    },
    {
      id: 'sylkra_velsa',
      titre: 'Ce que Velsa entend',
      description: 'Velsa (58) entend quelque chose depuis le Champ depuis 3 mois. Sylkra voit des micro-fractures depuis 18 mois supplémentaires. Si elles partageaient leurs observations, la corrélation entre ce que Velsa entend et ce que Sylkra voit pourrait confirmer une hypothèse que ni l\'une ni l\'autre ne peut vérifier seule.',
      personnages_impliques: [58, 55],
      declencheur: 'Contact entre Sylkra et Velsa sur leurs observations du Champ',
      consequence: 'Triangulation entre observations physiques et perceptions Spectre sur l\'état du Champ',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Gardienne du Champ Gelé depuis 22 ans. A rapporté les micro-fractures à 65 ans et a été réduite au silence par Keldris (57). Documente secrètement depuis 18 mois — 47 fractures, progression accélérée. A les données les plus précises sur l\'état réel du Champ.',

  relations: [
    { id: 57, nom: 'Keldris', type: 'adversaire', note: 'L\'a réduite au silence. Son supérieur hiérarchique. Ne sait pas qu\'elle continue à documenter.' },
    { id: 55, nom: 'Thyval', type: 'contact', note: 'Archiviste des serments. A peut-être une copie de son rapport. Elle ne lui a pas encore parlé.' },
    { id: 58, nom: 'Velsa', type: 'contact', note: 'Entend quelque chose depuis le Champ depuis 3 mois. Leurs observations pourraient se confirmer mutuellement.' },
  ],

  combat: {
    sorts: [
      'Détection cristalline (Glace) — sensibilité aux variations dans les structures de glace — diagnostic de l\'état du Champ Gelé',
      'Mur de glace (Glace) — barrière cristalline instantanée — protection ou obstacle',
      'Rafale givrante (Glace) — projection de particules de glace — ralentissement d\'une cible',
    ],
  },

  image_prompts: [
    {
      id: 'sylkra_champ',
      description: 'Sylkra devant le Champ Gelé à Crysalme — une Givrine de 67 ans en uniforme de gardienne, agenouillée près de la surface cristalline du Champ, tenant un instrument de mesure dans une main et un carnet dans l\'autre. Une micro-fracture est visible dans les cristaux devant elle. Son expression est de quelqu\'un qui sait et qui attend de décider quoi faire de ce qu\'il sait.',
      style: 'réaliste Givrine gardienne, Champ Gelé de Crysalme, micro-fracture visible, carnet secret, uniforme officiel, documentation secrète, décision imminente',
    },
  ],

  lore_long: `Sylkra a observé la première micro-fracture du Champ Gelé à 49 ans. Elle a documenté pendant 16 ans avant de soumettre un rapport formel. Keldris (57) l'a réduite au silence — "données insuffisantes pour conclure".

Elle documente secrètement depuis 18 mois. 47 fractures, progression géométrique. Elle a les données les plus précises sur l'état réel du Champ.

Velsa (58) entend quelque chose depuis le Champ depuis 3 mois. Elle ne sait pas encore ce que c'est.`,
};

export default sylkra;
