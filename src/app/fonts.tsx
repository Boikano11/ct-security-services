// fonts.ts
import { Mulish } from 'next/font/google'
import { Poppins } from 'next/font/google'

export const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  display: 'swap',
})

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  display: 'swap',
})
