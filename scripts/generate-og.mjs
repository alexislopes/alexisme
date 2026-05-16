// Generates public/og.png from public/og.svg using @resvg/resvg-js.
// Fonts come from @fontsource packages installed as devDependencies.
// Run with `npm run og:build`.

import { readFile, writeFile } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Resvg } from '@resvg/resvg-js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const svgPath = resolve(root, 'public/og.svg')
const pngPath = resolve(root, 'public/og.png')

const fontFiles = [
  resolve(root, 'node_modules/@expo-google-fonts/dm-sans/400Regular/DMSans_400Regular.ttf'),
  resolve(root, 'node_modules/@expo-google-fonts/dm-sans/500Medium/DMSans_500Medium.ttf'),
  resolve(root, 'node_modules/@expo-google-fonts/dm-sans/700Bold/DMSans_700Bold.ttf'),
  resolve(root, 'node_modules/@expo-google-fonts/jetbrains-mono/400Regular/JetBrainsMono_400Regular.ttf'),
  resolve(root, 'node_modules/@expo-google-fonts/jetbrains-mono/600SemiBold/JetBrainsMono_600SemiBold.ttf'),
]

const svg = await readFile(svgPath, 'utf8')

const resvg = new Resvg(svg, {
  font: {
    fontFiles,
    loadSystemFonts: false,
    defaultFontFamily: 'DM Sans',
  },
  fitTo: { mode: 'width', value: 1200 },
})

const png = resvg.render().asPng()
await writeFile(pngPath, png)
console.log(`wrote ${pngPath} (${(png.length / 1024).toFixed(1)} KB)`)
