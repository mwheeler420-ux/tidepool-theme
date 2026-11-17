import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'

// Muted blue-green: sea-glass by day, a deep tidepool by night.
const { theme, problems } = makeColors({
  label: 'Tidepool',
  roles: { accent: '#3f7a86', danger: '#b0524a', success: '#4f8a68', warning: '#a8823a', pro: '#5e6f9a' },
  light: {
    gray: {
      anchors: {
        'surface-0': '#e3ebe8',
        'surface-1': '#eaf1ee',
        'surface-2': '#f2f6f4',
        'text-primary': '#1c2b2a',
        'text-secondary': '#3c4f4d',
        'text-muted': '#556866',
      },
    },
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#141d1f',
        'surface-1': '#1a2528',
        'surface-2': '#202c30',
        'surface-3': '#263337',
        'text-primary': '#e2ece9',
        'text-secondary': '#bccbc8',
        'text-muted': '#94a6a3',
      },
    },
  },
})

const LOOK: ThemeSetArgs = { colors: theme }

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))
    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)
    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }
    return next(e)
  })
}
