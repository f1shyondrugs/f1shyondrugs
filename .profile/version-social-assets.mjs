import { createHash } from 'node:crypto';

// A changed chip must use a new URL: GitHub can retain an old SVG at a reused path.
export function versionSocialAssets(files, readme) {
  const versioned = {};
  for (const [path, svg] of Object.entries(files)) {
    if (!/^assets\/social-.*-(light|dark)\.svg$/.test(path)) {
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
