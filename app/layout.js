import './globals.css'
import Cursor from '@/components/Cursor'
import ClientEffects from '@/components/ClientEffects'

export const metadata = {
  title: 'Agencia Audiovisual · Santiago',
  description: 'Producimos el contenido audiovisual que necesitas para atraer más pacientes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Cursor />
        <ClientEffects />
        {children}
      </body>
    </html>
  )
}
