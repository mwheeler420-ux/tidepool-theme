# Tidepool

A muted blue-green theme for Claude Code's desktop and mobile apps: soft sea-glass
greens by day and a deep tidepool by night. Accents are a dusty teal; errors,
success and warnings stay a muted red, sage green and soft amber so they still
read at a glance. Code highlighting follows the same palette. The terminal and
editors don't draw themes, so it shows only in the apps.

## Install

At the prompt of a Claude Code session:

```
/plugin install tidepool --marketplace mwheeler420-ux/tidepool-theme
```

Answer `y` to add the marketplace, then pick a scope.

From a shell:

```bash
claude plugin install tidepool --marketplace mwheeler420-ux/tidepool-theme
```

The colors live in `hooks/register.ts`.
