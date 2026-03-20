import * as p from '@clack/prompts'
import { VERSION } from '../constants.js'
import { detectProject } from '../utils/detect.js'
import { configExists, writeConfig } from '../utils/config.js'
import { injectTokens } from '../utils/tokens.js'

export async function init() {
  p.intro(`LokaUI v${VERSION}`)

  try {
    if (configExists()) {
      const shouldOverwrite = await p.confirm({
        message: 'lokaui.json already exists. Overwrite?',
        initialValue: false,
      })
      if (p.isCancel(shouldOverwrite) || !shouldOverwrite) {
        p.cancel('Init cancelled.')
        process.exit(0)
      }
    }

    const detected = detectProject()

    p.note(
      [
        `Framework:  ${detected.framework}`,
        `Language:   ${detected.language}`,
        `Styling:    ${detected.styling}`,
      ].join('\n'),
      'Detected project settings'
    )

    const isReactNative = detected.framework === 'react-native'

    const framework = await p.select({
      message: 'Framework',
      initialValue: detected.framework,
      options: [
        { value: 'react', label: 'React' },
        { value: 'react-native', label: 'React Native' },
      ],
    })
    if (p.isCancel(framework)) {
      p.cancel('Init cancelled.')
      process.exit(0)
    }

    const isRN = framework === 'react-native'

    let language = 'ts'
    if (!isRN) {
      language = await p.select({
        message: 'Language',
        initialValue: detected.language,
        options: [
          { value: 'js', label: 'JavaScript' },
          { value: 'ts', label: 'TypeScript' },
        ],
      })
      if (p.isCancel(language)) {
        p.cancel('Init cancelled.')
        process.exit(0)
      }
    }

    const stylingOptions = isRN
      ? [
          { value: 'tailwind', label: 'Tailwind (NativeWind)' },
          { value: 'stylesheet', label: 'StyleSheet' },
        ]
      : [
          { value: 'tailwind', label: 'Tailwind CSS' },
          { value: 'css', label: 'CSS' },
        ]

    const styling = await p.select({
      message: 'Styling',
      initialValue: isRN ? (detected.styling === 'tailwind' ? 'tailwind' : 'stylesheet') : detected.styling,
      options: stylingOptions,
    })
    if (p.isCancel(styling)) {
      p.cancel('Init cancelled.')
      process.exit(0)
    }

    const componentsDir = await p.text({
      message: 'Components directory',
      initialValue: 'src/components/ui',
      placeholder: 'src/components/ui',
    })
    if (p.isCancel(componentsDir)) {
      p.cancel('Init cancelled.')
      process.exit(0)
    }

    const skipTokens = isRN && styling === 'stylesheet'
    let cssFile = null

    if (!skipTokens) {
      cssFile = await p.text({
        message: 'CSS tokens file',
        initialValue: 'src/styles.css',
        placeholder: 'src/styles.css',
      })
      if (p.isCancel(cssFile)) {
        p.cancel('Init cancelled.')
        process.exit(0)
      }

      const shouldInject = await p.confirm({
        message: `Add LokaUI CSS tokens to ${cssFile}?`,
        initialValue: true,
      })
      if (p.isCancel(shouldInject)) {
        p.cancel('Init cancelled.')
        process.exit(0)
      }

      if (shouldInject) {
        const spinner = p.spinner()
        spinner.start('Injecting CSS tokens...')
        const result = await injectTokens(cssFile)
        if (result.skipped) {
          spinner.stop('CSS tokens already present, skipped.')
        } else {
          spinner.stop('CSS tokens added.')
        }
      }
    }

    const config = {
      version: VERSION,
      framework,
      ...(isRN ? {} : { language }),
      styling,
      componentsDir,
      ...(cssFile ? { cssFile } : {}),
    }

    writeConfig(config)

    p.note(
      [
        'Add a component:',
        '  npx @lokaui/cli add button',
        '',
        'Add multiple components:',
        '  npx @lokaui/cli add button input badge',
        '',
        'Interactive picker:',
        '  npx @lokaui/cli add',
        '',
        'Browse all components:',
        '  npx @lokaui/cli list',
      ].join('\n'),
      'Next steps'
    )

    p.outro('LokaUI initialized successfully!')
  } catch (error) {
    p.cancel(`Error: ${error.message}`)
    process.exit(1)
  }
}
