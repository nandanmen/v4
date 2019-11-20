const space = [0, 8, 12, 20, 32, 48, 80, 128, 208]
space.pageMargin = space[7]

const fontSizes = [14, 16, 20, 24, 32, 46, 64, 72, 80]
fontSizes.lg = 20

const breakpoints = [768, 1024, 1366]
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]

export default {
  breakpoints,
  colors: {
    blacks: {
      title: `#262626`,
      body: `#595959`,
    },
    blue: `#1890ff`,
    grays: {
      dark: `#8c8c8c`,
      med: `#e8e8e8`,
      light: `#fafafa`,
    },
    projects: {
      coin: `#5cdbd3`,
      dictionary: `#69c0ff`,
      music: `#ff85c0`,
    },
  },
  fonts: {
    body: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;`,
    var: `'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;`,
    mono: `source-code-pro, Menlo, Consolas, 'Courier New', Courier,
    monospace;`,
  },
  fontSizes,
  fontWeights: {
    bold: 700,
    semi: 600,
    medium: 500,
    regular: 400,
  },
  grid: {
    columns: "repeat(12, 1fr)",
    gap: space[4],
  },
  sizes: [0, 288, 368],
  space,
  radii: {
    default: 8,
  },
}
