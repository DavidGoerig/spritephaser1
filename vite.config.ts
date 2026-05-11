import fs   from 'node:fs';
import path from 'node:path';

export default {
  plugins: [
    {
      name: 'mpa-characters',
      configureServer(server: any) {
        // ── POST /api/save-file  (saves binary to public/) ────────────
        server.middlewares.use('/api/save-file', (req: any, res: any, next: any) => {
          if (req.method !== 'POST') { next(); return; }
          const relPath = (req.headers['x-file-path'] as string ?? '').replace(/\.\./g, '');
          if (!relPath) { res.writeHead(400); res.end('missing x-file-path'); return; }
          const abs = path.join(process.cwd(), 'public', relPath);
          const chunks: Buffer[] = [];
          req.on('data', (c: Buffer) => chunks.push(c));
          req.on('end', () => {
            const buf = Buffer.concat(chunks);
            fs.mkdirSync(path.dirname(abs), { recursive: true });
            fs.writeFileSync(abs, buf);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ ok: true, saved: relPath }));
          });
        });

        // ── Redirect /characters → index.html ─────────────────────────
        server.middlewares.use((req: any, res: any, next: any) => {
          if (req.url === '/characters' || req.url === '/characters/') {
            res.writeHead(301, { Location: '/characters/index.html' });
            res.end();
          } else {
            next();
          }
        });
      },
    },
  ],
  build: {
    minify: "terser",
    terserOptions: {
      parse: { html5_comments: false },
      compress: { drop_console: true },
      format: { comments: false },
    },
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
}
