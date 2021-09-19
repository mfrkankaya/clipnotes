const generateHSL = (h, s, l, a) => `hsla(${h},${s}%,${l}%,${a})`

export const generateColor = (h, s = 50) => {
  const getShade = (shade = 50, alpha = 1) => generateHSL(h, s, shade, alpha)

  return { shade: getShade }
}
