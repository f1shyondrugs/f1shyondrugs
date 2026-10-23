# Profile configuration

This profile for `f1shyondrugs` is generated with Expressive Profile.

Edit `profile.json` to change the text, stack groups, links and project cards. `projects.cards` supports `id`, `title`, `url`, `text`, optional `icon`, `tags` and `repoUrl`. Use `repoUrl` only for a public repository; its current stars are reused when available. A project without public repository metadata shows no invented star count. LOTB is deliberately labelled as in development.

The bundled `.profile/render.mjs` preserves custom project names and destinations during scheduled refreshes. The workflow runs hourly using the profile repository's normal GitHub token. No personal access token is included or required. The stack was curated from language metadata and selected manifests; private audits and private repository names are not included.

The visual renderer comes from [metawka/expressive-profile](https://github.com/metawka/expressive-profile), upstream revision `0dacdd6b4cd8d649b71ace733afbfe1b92649955`. The custom-card source patch is in `custom-projects.patch`; upstream and font licenses are in `licenses/`. The original site's editor does not support these extra card fields, so keep this configuration and bundled renderer when editing the profile.

The Refresh profile workflow can also be run manually from the repository's Actions tab. It refreshes public GitHub metadata while retaining the curated stack and custom project cards.
