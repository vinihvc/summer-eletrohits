export const globalStyles = {
  global: () => ({
    'html, body': {
      minH: 'full',
      color: 'text',

      '&:after': {
        bgGradient: 'linear(to-b, bg, #222)',
        right: '0',
        left: '0',
        top: '0',
        bottom: '0',
        pos: 'fixed',
        content: '""',
        zIndex: -2
      }
    }
  })
}
