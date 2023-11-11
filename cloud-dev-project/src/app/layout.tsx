
import '@/src/styles/global.css'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import ThemeRegistry from './ThemeRegistry'
import {AuthProvider} from '@/src/context/AuthContext'


require('dotenv').config();

const JetBrains = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
        <body suppressHydrationWarning={true} className={JetBrains.className}>
          <ThemeRegistry options={{ key: 'mui' }}>
            {/* <AuthProvider> */}
              {children}
            {/* </AuthProvider> */}
          </ThemeRegistry>
        </body>
    </html>
    
  )
}
