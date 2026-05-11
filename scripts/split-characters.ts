/**
 * Splits the monolithic characters.ts into one folder per character.
 *
 * Output structure:
 *   src/data/characters/{element}/{id}-{slug}/index.ts   — 237 files
 *   src/data/characters/{element}/index.ts               — 18 element arrays
 *   src/data/characters/index.ts                         — main registry
 *   public/characters/characters.json                    — JSON export for browser tool
 *
 * Run with: npx tsx scripts/split-characters.ts
 */

import { TOUS_PERSONNAGES } from '../src/data/characters.js';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const CHARS_SRC = path.join(ROOT, 'src/data/characters');
const CHARS_PUBLIC = path.join(ROOT, 'public/characters');

// ── Helpers ────────────────────────────────────────────────────

function slug(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function esc(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function write(filePath: string, content: string) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('  wrote', path.relative(ROOT, filePath));
}

// ── Group by element ───────────────────────────────────────────

type CharEntry = {
  varName: string;
  folderName: string;
  elementSlug: string;
  char: (typeof TOUS_PERSONNAGES)[0];
};

const byElement = new Map<string, CharEntry[]>();

for (const char of TOUS_PERSONNAGES) {
  const elSlug = slug(char.element);
  const idStr = String(char.id).padStart(3, '0');
  const nameStr = slug(char.nom);
  const folderName = `${idStr}-${nameStr}`;
  const varName = `c${idStr}`;

  const entry: CharEntry = { varName, folderName, elementSlug: elSlug, char };

  if (!byElement.has(elSlug)) byElement.set(elSlug, []);
  byElement.get(elSlug)!.push(entry);
}

// ── Generate individual character files ────────────────────────

console.log('\n── Individual character files ──');

for (const entries of byElement.values()) {
  for (const { varName, folderName, elementSlug, char } of entries) {
    const dir = path.join(CHARS_SRC, elementSlug, folderName);
    const el2Line = char.element2 ? `  element2: '${char.element2}',\n` : '';

    const content = `\
import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: ${char.id},
  nom: \`${esc(char.nom)}\`,
  element: '${char.element}',
${el2Line}\
  classe: '${char.classe}',
  espece: '${char.espece}',
  region: '${char.region}',
  faction: '${char.faction}',
  description_physique: \`${esc(char.description_physique)}\`,
  description_personnalite: \`${esc(char.description_personnalite)}\`,
  position_lore: \`${esc(char.position_lore)}\`,
  style_combat: \`${esc(char.style_combat)}\`,
  kit: ELEMENT_KITS['${char.element}'],
  modifications_classe: \`${esc(char.modifications_classe)}\`,
};

export default character;
`;
    write(path.join(dir, 'index.ts'), content);
  }
}

// ── Generate element-level index files ─────────────────────────

console.log('\n── Element index files ──');

const elementExports: string[] = [];

for (const [elSlug, entries] of byElement.entries()) {
  const exportName = `PERSONNAGES_${elSlug.toUpperCase().replace(/-/g, '_')}`;

  const imports = entries
    .map(e => `import ${e.varName} from './${e.folderName}';`)
    .join('\n');

  const arr = entries.map(e => `  ${e.varName},`).join('\n');

  const content = `\
import type { Personnage } from '../../character-types';

${imports}

export const ${exportName}: Personnage[] = [
${arr}
];
`;
  write(path.join(CHARS_SRC, elSlug, 'index.ts'), content);
  elementExports.push(exportName);
}

// ── Generate main registry ─────────────────────────────────────

console.log('\n── Main registry ──');

const elementSlugs = [...byElement.keys()];

const registryImports = elementSlugs
  .map(el => {
    const exportName = `PERSONNAGES_${el.toUpperCase().replace(/-/g, '_')}`;
    return `export { ${exportName} } from './${el}';`;
  })
  .join('\n');

const allSpreads = elementSlugs
  .map(el => `  ...PERSONNAGES_${el.toUpperCase().replace(/-/g, '_')},`)
  .join('\n');

// Re-import for TOUS_PERSONNAGES construction
const reImports = elementSlugs
  .map(el => {
    const exportName = `PERSONNAGES_${el.toUpperCase().replace(/-/g, '_')}`;
    return `import { ${exportName} } from './${el}';`;
  })
  .join('\n');

const registryContent = `\
export type { Classe, Personnage, CharacterAssets, AnimationSlot } from '../character-types';
export { CLASSE_DESCRIPTIONS, ANIMATION_SLOTS } from '../character-types';

${registryImports}

${reImports}
import type { Personnage } from '../character-types';
import type { ElementLore } from '../lore';
import type { Classe } from '../character-types';
import type { FactionLore } from '../lore';

export const TOUS_PERSONNAGES: Personnage[] = [
${allSpreads}
];

export function getPersonnageById(id: number): Personnage | undefined {
  return TOUS_PERSONNAGES.find(p => p.id === id);
}

export function getPersonnagesParElement(element: ElementLore): Personnage[] {
  return TOUS_PERSONNAGES.filter(p => p.element === element);
}

export function getPersonnagesParClasse(classe: Classe): Personnage[] {
  return TOUS_PERSONNAGES.filter(p => p.classe === classe);
}

export function getPersonnagesParFaction(faction: FactionLore): Personnage[] {
  return TOUS_PERSONNAGES.filter(p => p.faction === faction);
}
`;

write(path.join(CHARS_SRC, 'index.ts'), registryContent);

// ── Generate public/characters/characters.json ─────────────────

console.log('\n── characters.json ──');

fs.mkdirSync(CHARS_PUBLIC, { recursive: true });

const jsonData = TOUS_PERSONNAGES.map(char => {
  const elSlug = slug(char.element);
  const idStr = String(char.id).padStart(3, '0');
  const nameStr = slug(char.nom);
  const base = `characters/${idStr}-${nameStr}`;
  return {
    id: char.id,
    nom: char.nom,
    element: char.element,
    element2: char.element2 ?? null,
    classe: char.classe,
    espece: char.espece,
    region: char.region,
    faction: char.faction,
    description_physique: char.description_physique,
    description_personnalite: char.description_personnalite,
    position_lore: char.position_lore,
    style_combat: char.style_combat,
    modifications_classe: char.modifications_classe,
    folder: `${elSlug}/${idStr}-${nameStr}`,
    assets: {
      portrait:  `${base}/portrait.png`,
      idle:      `${base}/idle.png`,
      run:       `${base}/run.png`,
      swim:      `${base}/swim.png`,
      fly:       `${base}/fly.png`,
      attack: Array.from({ length: 10 }, (_, i) =>
        `${base}/attack-${String(i + 1).padStart(2, '0')}.png`
      ),
      hurt:      `${base}/hurt.png`,
      die:       `${base}/die.png`,
      model_glb: `${base}/model.glb`,
    },
  };
});

write(
  path.join(CHARS_PUBLIC, 'characters.json'),
  JSON.stringify(jsonData, null, 2)
);

// ── Summary ────────────────────────────────────────────────────

const total = TOUS_PERSONNAGES.length;
console.log(`\n✓ Done — ${total} characters split into src/data/characters/`);
console.log(`  Run: npx tsc --noEmit  to verify`);
console.log(`  Then delete: src/data/characters.ts  (replaced by the directory)`);
