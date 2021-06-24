import normalizeText from './normalizeText'

export const baseFontSize = 14
export const baseSpacing = 16

export const colors = {
  downy: '#61C5CB',
  lightDowny: '#A6E2E5',
  darkDowny: '#57B1B7',
  white: '#FFFFFF',
  black: '#354A4B',
  aquaHaze: '#F0F4F6',
  porcelain: '#E4E8EA',
  rockBlue: '#98B4CE',
  rockBlue03: '#98B4CE4D',
  red: '#EB5757',
  provincialPink: '#FDEBE9',
  poloBlue: '#97B3CD',
  rockBlue05: 'rgba(152, 180, 206, 0.5)'
}

export const imagesStyle = {
  width: 24,
  height: 24
}

export const fonts = {
  header1: normalizeText(baseFontSize * 3),
  header2: normalizeText(baseFontSize * 2.5),
  header3: normalizeText(baseFontSize * 2),
  header4: normalizeText(baseFontSize * 1.75),
  header5: normalizeText(baseFontSize * 1.5),
  header6: normalizeText(baseFontSize * 1.25),
  medium: normalizeText(baseFontSize * 1.125),
  normal: normalizeText(baseFontSize),
  small: normalizeText(baseFontSize * 0.875),
  xsmall: normalizeText(baseFontSize * 0.75),
  xxsmall: normalizeText(baseFontSize * 0.5),
  bold: 600,
  bolder: 800
}

export const fontsFamily = {
  BoldItalic: 'Segoe-UI-Bold-Italic',
  Bold: 'Segoe-UI-Bold',
  Italic: 'Segoe-UI-Italic',
  LightItalic: 'Segoe-UI-Light-Italic',
  Light: 'Segoe-UI-Light',
  Regular: 'Segoe-UI-Regular',
  SemiBoldItalic: 'Segoe-UI-SemiBold-Italic',
  SemiBold: 'Segoe-UI-SemiBold'
}

export const spacings = {
  none: 0,
  full: '100%',
  xxsmall: normalizeText(baseSpacing * 0.25),
  xsmall: normalizeText(baseSpacing * 0.5),
  small: normalizeText(baseSpacing * 0.75),
  normal: normalizeText(baseSpacing),
  medium: normalizeText(baseSpacing * 1.5),
  large: normalizeText(baseSpacing * 2),
  xLarge: normalizeText(baseSpacing * 2.5),
  xxLarge: normalizeText(baseSpacing * 3),
  xxxLarge: normalizeText(baseSpacing * 3.5),
  xxxxLarge: normalizeText(baseSpacing * 4)
}
