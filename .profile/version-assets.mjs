import { createHash } from 'node:crypto';

// Changed social chips and stack cards need new URLs to avoid stale GitHub images.
export function versionProfileAssets(files, readme) {
  const versioned = {};
  for (const [path, svg] of Object.entries(files)) {
    if (!/^assets\/(?:social-.*|stack)-(light|dark)\.svg$/.test(path)) {
      versioned[path] = svg;
      continue;
    }
    const hash = createHash('sha256').update(svg).digest('hex').slice(0, 12);
    const destination = path.replace(/-(light|dark)\.svg$/, `-${hash}-$1.svg`);
    versioned[destination] = svg;
    readme = readme.replaceAll(path, destination);
  }
  return { files: versioned, readme };
}
