import photoshop from '../assets/brands/photoshop.svg'
import illustrator from '../assets/brands/illustrator.svg'
import indesign from '../assets/brands/indesign.svg'
import aftereffects from '../assets/brands/aftereffects.svg'
import premierepro from '../assets/brands/premierepro.svg'
import procreate from '../assets/brands/procreate.svg'
import capcut from '../assets/brands/capcut.svg'
import figma from '../assets/brands/figma.svg'
import framer from '../assets/brands/framer.svg'
import html5 from '../assets/brands/html5.svg'
import css3 from '../assets/brands/css3.svg'
import stripo from '../assets/brands/stripo.svg'
import linkedin from '../assets/brands/linkedin.svg'
import instagram from '../assets/brands/instagram.svg'
import word from '../assets/brands/word.svg'
import excel from '../assets/brands/excel.svg'
import powerpoint from '../assets/brands/powerpoint.svg'
import canva from '../assets/brands/canva.svg'

export const brandIcons = {
  photoshop,
  illustrator,
  indesign,
  aftereffects,
  premierepro,
  procreate,
  capcut,
  figma,
  framer,
  html5,
  css3,
  stripo,
  linkedin,
  instagram,
  word,
  excel,
  powerpoint,
  canva,
} as const

export type BrandName = keyof typeof brandIcons

export type BrandVariant = 'color' | 'white' | 'green'
