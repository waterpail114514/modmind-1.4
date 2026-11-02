# Third-Party Notices

## @streamparser/json

Conversation history paging uses `@streamparser/json` 0.0.26 to validate JSON incrementally.
Upstream: https://github.com/juanjoDiaz/streamparser-json

Copyright (c) 2020 Juanjo Diaz

Provided under the MIT License; the MIT permission and warranty text reproduced
in the React Zoom Pan Pinch section below applies.

## node-semver

Isolated server fixture dependency checks use `semver` 7.8.5.
Upstream: https://github.com/npm/node-semver

The ISC License

Copyright (c) Isaac Z. Schlueter and Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

## LobeHub Icons

The Codex brand path in `src/renderer/src/components/AgentBrandIcon.tsx`
is adapted from LobeHub Icons (`packages/static-svg/icons/codex.svg`).
Upstream: https://github.com/lobehub/lobe-icons

Copyright (c) 2023 LobeHub

Provided under the MIT License; the MIT permission and warranty text reproduced
in the React Zoom Pan Pinch section below applies. Brand marks remain the property
of their respective owners.

## React Zoom Pan Pinch

Image previews use `react-zoom-pan-pinch` 4.2.0, provided under the MIT License.
Upstream: https://github.com/BetterTyped/react-zoom-pan-pinch

Copyright (c) 2019 prc5

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Three.js

Resource model previews use the existing Three.js 0.180.0 dependency and its
upstream OrbitControls. Project: https://github.com/mrdoob/three.js

Copyright © 2010-2025 three.js authors. Three.js is provided under the MIT
License; the MIT permission and warranty text reproduced above applies.

## PDF.js

Read-only PDF text extraction uses Mozilla PDF.js (`pdfjs-dist` 4.10.38),
licensed under Apache-2.0. Its license and bundled font/CMap notices are retained
in the dependency distribution. Project: https://github.com/mozilla/pdf.js

## Gradle Wrapper

ModMind bundles the unmodified Gradle Wrapper scripts and JAR from Gradle 9.2.1 so
new and migrated projects can use their pinned Gradle distribution. Gradle is provided
under the Apache License 2.0. Upstream metadata, SHA-256 checksums, and the license are
retained under `vendor/gradle-wrapper`.

- Project: https://github.com/gradle/gradle/tree/v9.2.1
- License: Apache-2.0

## Blockbench

ModMind includes an unmodified offline copy of the official Blockbench Web application.

- Version: 5.1.4
- Upstream commit: `8fe8d9d9568de8233d77cd592744acad495d46b0`
- Project: https://github.com/JannisX11/blockbench
- License: GNU General Public License v3.0 or later

The upstream license, source metadata, build instructions, and file checksums are retained
under `vendor/blockbench`. Distribution of ModMind must preserve these materials and make
the corresponding Blockbench source available as required by its license. The licensing of
the combined distributed application should be reviewed before a public release.

## XMCL Launcher Core

ModMind uses `@xmcl/core` and `@xmcl/installer` for Minecraft metadata parsing,
dependency installation, managed Java runtimes, Fabric installation, and process launch.
It uses `@xmcl/asm` to read legacy Forge annotations from Java class files. The XMCL
packages are provided by the Voxelum project; the ASM port retains the upstream
BSD-3-Clause license and notices.

## HeadlessMC

The optional HeadlessMC smoke-test action downloads the official pinned HeadlessMC launcher
release at first use, verifies its published SHA-256 digest, and stores it in the user's
application-data directory. It is not bundled with ModMind. HeadlessMC is provided under
the MIT License by the HeadlessHQ contributors.

- Version: 2.10.0
- Project: https://github.com/headlesshq/headlessmc
- License: MIT

## ServerPackCreator

The deterministic server-pack synchronization action bundles and invokes the unmodified,
pinned ServerPackCreator CLI release. The application verifies the bundled JAR's SHA-256
before every invocation. Its upstream license and release checksum manifest are retained
under `resources/server-pack-creator`.

- Version: 8.1.2
- Project: https://github.com/Griefed/ServerPackCreator
- Release: https://github.com/Griefed/ServerPackCreator/releases/tag/8.1.2
- License: LGPL-2.1
- Release SHA-256: `6ecb5f604326a8cb74ede15f667d170e2001cd968ab7f99592a0045ff27b0fca`

## extract-zip

ModMind uses `extract-zip` to unpack the verified Gradle distribution. It is provided
under the BSD-2-Clause License.

## electron-updater

ModMind uses `electron-updater` for signed metadata verification, resumable and
differential application downloads, and NSIS update installation. It is provided under
the MIT License by the electron-builder contributors.

- Project: https://github.com/electron-userland/electron-builder
- License: MIT

## React Virtuoso

ModMind uses the unmodified `Virtuoso` React component for viewport-only rendering
of long local conversation timelines. Conversation history remains complete in the
local ConversationStore journal; virtualization only limits mounted DOM nodes.

- Version: 4.18.13
- Project: https://github.com/petyosi/react-virtuoso
- License: MIT

## yazl

ModMind uses unmodified `yazl` 3.3.1 (MIT, Copyright (c) 2014 Josh Wolfe)
for streaming ZIP and ZIP64 MRPack exports. The package and its upstream license
are included with the application dependencies.

- Project: https://github.com/thejoshwolfe/yazl
- License: MIT

The existing in-memory ZIP helper cannot export large packs with bounded memory;
the existing 7-Zip integration is designed for archive import. yazl provides the
required streaming writer and automatic ZIP64 support as a small JavaScript
dependency (about 58 KiB unpacked, plus buffer-crc32), without staging a second
copy of the pack or downloading a runtime. Existing lock and inventory services
continue to supply pack metadata and verified download sources. No upstream
source modifications are made.

## proper-lockfile

ModMind uses `proper-lockfile` for the advisory inter-process lock around each
append-only conversation journal. The package is used without source changes.

- Version: 4.1.2
- Project: https://github.com/moxystudio/node-proper-lockfile
- License: MIT

## OpenCode and Roo Code storage patterns

The conversation journal adapter follows the upstream append/reconcile conventions
used by OpenCode and Roo Code. No upstream runtime is bundled; the local adapter is
limited to the project storage boundary and keeps this application's existing types.

- OpenCode: https://github.com/anomalyco/opencode (MIT)
- Roo Code: https://github.com/RooCodeInc/Roo-Code (Apache-2.0)

## smol-toml

ModMind uses `smol-toml` to parse Forge and NeoForge mod descriptors according to
the TOML specification. It is provided under the BSD-3-Clause License.

- Project: https://github.com/squirrelchat/smol-toml
- License: BSD-3-Clause

## fzstd

ModMind uses `fzstd` to decompress Zstandard-encoded local Agent requests on
Electron releases whose embedded Node.js runtime does not provide Zstandard.
It is provided under the MIT License by Arjun Barrett.

- Project: https://github.com/101arrowz/fzstd
- License: MIT

## 7zip-bin / 7-Zip

ModMind bundles the `7za` executable from `7zip-bin` for importing common project
archives, including 7z, RAR, CAB, ISO, and compressed TAR variants. 7-Zip is provided
under the GNU LGPL with the upstream unRAR license restriction where applicable.

- Project: https://www.7-zip.org/
- Binary wrapper: https://github.com/develar/7zip-bin

## ffmpeg-static

ModMind uses `ffmpeg-static` to convert imported audio to OGG Vorbis. The packaged
FFmpeg executable is distributed under GPL-3.0-or-later. Its license and build information
are retained beside the executable in the unpacked `node_modules/ffmpeg-static` directory.

- Project: https://github.com/eugeneware/ffmpeg-static
- FFmpeg: https://ffmpeg.org/
- License: GPL-3.0-or-later

## Sound Workspace

ModMind uses Tone.js for local music synthesis and sequencing, @tonejs/midi
for MIDI import and export, and jfxr for game sound-effect synthesis.
Tone.js and @tonejs/midi are distributed under the MIT License; jfxr is
distributed under the BSD-3-Clause License. The installed packages retain
their upstream license files.

- Tone.js: https://github.com/Tonejs/Tone.js
- @tonejs/midi: https://github.com/Tonejs/Midi
- jfxr: https://github.com/ttencate/jfxr

ModMind bundles the unmodified BeepBox 4.2.2 editor and synthesizer from its
official offline release for local music authoring. The files are licensed
under MIT; their license and source checksums are retained in
`resources/renderer-public/beepbox/`.

- BeepBox: https://github.com/johnnesky/beepbox/releases/tag/v4.2.2

The offline Minecraft sound-event catalog in `src/main/data/soundCatalog.json`
is derived from the 1.20.1 and 1.21.1 `sounds.json` and Chinese language data
in InventivetalentDev/minecraft-assets. It contains event names, references,
settings, and subtitles; no Minecraft audio files are bundled. Original game
content remains the property of Mojang Studios.

- Data source: https://github.com/InventivetalentDev/minecraft-assets

## mappings.dev

ModMind can query class and member mapping pages from https://mappings.dev at runtime.
Downloaded indexes and pages are stored as a local cache and are not bundled with the
application. Mapping licenses for each Minecraft version are linked by the upstream site.

## Image Processing

ModMind uses `sharp` for local image decoding, resizing, and nearest-neighbor fallback
processing. Sharp is distributed under the Apache-2.0 license.

ModMind uses React Flow (`@xyflow/react`) for the image workflow canvas under the MIT
license.

ModMind bundles miniPaint v4.14.3 as the embedded manual image editor under the MIT
license. The upstream license, source metadata, archive checksum, and bundled browser
assets are retained under `resources/renderer-public/minipaint`.

- Project: https://github.com/viliusle/miniPaint
- License: MIT

The background-removal action detects and removes a solid background color using the
bundled `sharp` package. It does not perform semantic (AI-based) subject removal.

ModMind includes an embedded TypeScript implementation of the grid detection, refinement,
and sampling algorithm from `perfect-pixel` 0.1.x. The upstream project is MIT licensed.
The embedded implementation is compiled into the application and does not require the
upstream Python package or a separate runtime on the user's machine.

- Project: https://github.com/theamusing/perfectPixel
- License: MIT

## FTB Quests Editor

ModMind uses `ftbq-nbt` to parse and serialize legacy FTB Quests SNBT task books, and
`json5` to read modern JSON5 task books. Both packages are provided under the MIT License.

- ftbq-nbt: https://github.com/Krutoy242/ftbq-nbt
- json5: https://github.com/json5/json5

## AionUi Agent Conversation UI

ModMind's Agent workbench conversation surface is adapted from AionUi's
`ChatLayout`, `MessageList`, `MessageText`, `MessageThinking`,
`MessageToolGroupSummary`, `ConversationPlanBar`, `ThoughtDisplay`, and
`SendBox` components at commit `4f7da7e7243f7696ddb7a558d8187a1803c157b6`.
The copied layout hierarchy and styling are wired to ModMind's existing React
components and Agent event protocol. No AionUi runtime, account, database, or
design-system dependency is bundled.

- Project: https://github.com/iOfficeAI/AionUi
- Copyright: 2025 AionUi (aionui.com)
- License: Apache-2.0
# Minecraft Development server plugin starters

The Bukkit/Velocity lifecycle starter templates are adapted from
https://github.com/minecraft-dev/MinecraftDev at revision
dec3e63ba62b9f6aaea5ad6a21bc011fe087b08c (LGPL-3.0).
Exact upstream files, SHA-256 values, source and license texts are retained in
resources/server-plugin-starters and included with the application resources.
Generated plugin projects and JARs retain template attribution and license texts.

## Model context registry datasets

The bundled model context registry derives numeric model limits from models.dev
and LiteLLM. Source URLs, SHA-256 hashes, and the snapshot date are recorded in
src/main/modelContextRegistry.json. LiteLLM's imported data is outside its
separately licensed enterprise directory.

- models.dev: https://github.com/anomalyco/models.dev — Copyright (c) 2025 models.dev
- LiteLLM: https://github.com/BerriAI/litellm — Copyright (c) 2023 Berri AI

Both datasets are provided under the following MIT License:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Vanilla Item Catalog

The offline item lists in `src/main/data/vanilla-items-*.json` are derived from
PrismarineJS minecraft-data (MIT) and Chinese item names from Mojang's Minecraft
language assets mirrored by misode/mcmeta. Minecraft names and artwork remain
the property of Mojang Studios.

Upstream: https://github.com/PrismarineJS/minecraft-data
Language source: https://github.com/misode/mcmeta

Copyright (c) PrismarineJS contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Minecraft Mod MCP

ModMind downloads pinned, SHA-256 verified JARs from langyo/minecraft-mod-mcp v0.3.0 on demand for owned Java mod test clients. The TypeScript MCP adapter in ModMind uses the upstream mod HTTP API; the upstream npm launcher is not bundled.

Upstream: https://github.com/langyo/minecraft-mod-mcp/tree/v0.3.0

ModMind modifies the McpHttpServer class constant to bind only to 127.0.0.1 instead of 0.0.0.0. Patched test JARs retain upstream files and include this license and a modification notice. Source release assets remain unmodified in the download cache.

ModMind also replaces ScreenshotHelper with its own native framebuffer capture
implementation (AGPL-3.0-only), and adapts upstream WindowHelper (MIT) to query
actual framebuffer dimensions. Sources are retained under `resources/minecraft-mcp`;
the generated classes and source hashes are in `src/main/nativeMinecraftMcpHelper.json`.

The upstream MIT license is selected from its MIT / Apache-2.0 / CC0 licensing options:

MIT License

Copyright (c) 2025 langyo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Background Game Control Agent

The application embeds ASM 9.11.1 (BSD-3-Clause, INRIA and France
Telecom) inside its Java 8-compatible game control agent. ASM is relocated to
`dev.modmind.gamecontrol.asm` to avoid conflicts with Minecraft loaders. The
pinned upstream artifact and SHA256 are recorded in
`scripts/compile-game-control-agent.mjs`; the complete license is retained in
`resources/game-control/LICENSE-ASM.txt` and in the generated agent JAR.
The bridge does not bundle Minecraft, game assets, or a Java runtime.


## Forge 1.7.2 Java Compatibility

Forge 1.7.2 on Java 8 uses the upstream LegacyJavaFixer 2.0.1 coremod (6,630 bytes), under the MIT license. This optional startup compatibility component does not provide game control. The embedded artifact is pinned to its official Forge Maven SHA256; its license is copied beside the JAR in the owned test instance.

Upstream: https://github.com/MinecraftForge/LegacyJavaFixer
Source revision: 4b28ed9af160b38236be8601b376f96f19f837e4

The MIT License (MIT)

Copyright (c) 2014 LexManos

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.




## 图像工坊无限画布（2026-11-01）

画布基于 ZeroLu/open-canvas，导入与 main 图像工坊 1.5.2 一致的参考快照；React 18 / React Flow 12 保持宿主版本。来源、改动与版权详见 vendor/open-canvas/NOTICE.md、SOURCE_SNAPSHOT.json、INTEGRATION.md。

### ZeroLu/open-canvas

MIT License

Copyright (c) 2026 ZeroLu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


### @radix-ui/react-dialog 1.1.17

MIT License

Copyright (c) 2022 WorkOS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


### @radix-ui/react-dropdown-menu 2.1.18

MIT License

Copyright (c) 2022 WorkOS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


### @radix-ui/react-hover-card 1.1.17

MIT License

Copyright (c) 2022 WorkOS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


### @radix-ui/react-label 2.1.10

MIT License

Copyright (c) 2022 WorkOS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


### @radix-ui/react-progress 1.1.10

MIT License

Copyright (c) 2022 WorkOS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


### @radix-ui/react-select 2.3.1

MIT License

Copyright (c) 2022 WorkOS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


### @radix-ui/react-slot 1.3.0

MIT License

Copyright (c) 2022 WorkOS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


### @radix-ui/react-tabs 1.1.15

MIT License

Copyright (c) 2022 WorkOS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


### @tailwindcss/postcss 4.3.3

MIT License

Copyright (c) Tailwind Labs, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


### class-variance-authority 0.7.1

                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   Copyright 2022 Joe Bell

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


### clsx 2.1.1

MIT License

Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


### sonner 2.0.7

MIT License

Copyright (c) 2023 Emil Kowalski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


### tailwind-merge 3.3.1

MIT License

Copyright (c) 2021 Dany Castillo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


### zustand 5.0.12

MIT License

Copyright (c) 2019 Paul Henschel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
