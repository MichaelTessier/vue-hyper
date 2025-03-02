export const rules: any[] | undefined = [
  [
    /^shadow-btn-(.+)$/,
    ([, name]: [any, string]) => ({
      'box-shadow': `0px 2px 5px rgb(from var(--hyp-color-${name}) r g b / 0.5)`,
    }),
  ],
  [
    /^grid-auto-(.+)$/,
    ([, size]: [any, string]) => ({
      'grid-template-columns': `repeat(auto-fit, minmax(${size}px, 1fr))`,
    }),
  ],
  [
    /^text-(.*)$/,
    ([, color]: [any, string], { theme }: any) => {
      if (theme.textColors[color]) return { color: theme.textColors[color] }
    },
  ],
  [
    /^surface-(.*)$/,
    ([, color]: [any, string], { theme }: any) => {
      if (theme.surfaceColors[color])
        return { 'background-color': theme.surfaceColors[color] }
    },
  ],
  [
    /^bg-(.*)$/,
    ([, color]: [any, string], { theme }: any) => {
      if (theme.backgroundColors[color])
        return { 'background-color': theme.backgroundColors[color] }
    },
  ],
  [
    /^border-(.*)$/,
    ([, color]: [any, string], { theme }: any) => {
      if (theme.borderColors[color])
        return { 'border-color': theme.borderColors[color] }
    },
  ],
]
