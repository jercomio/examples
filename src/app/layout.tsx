import { Providers } from './providers';
import './styles/globals.css';

type LayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: LayoutProps) {
  return (
    <html lang="en" className='screen-bg settings'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
