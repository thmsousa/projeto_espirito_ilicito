import '../styles/globals.scss'; 

import { Metadata } from 'next'; 

// Defina o objeto metadata
export const metadata: Metadata = {
  // 1. Tags Básicas de SEO
  title: 'ESPÍRITO ILÍCITO | Romance de Mistério por Pablo Costa',
  description: 'Margarida é enviada para um orfanato católico, onde descobre fragmentos de um rapaz desaparecido e se envolve em um mistério. Romance e poesia secreta de Pabl. Costa.',
  keywords: ['Espírito Ilícito', 'Pablo Costa', 'Pabl. Costa', 'Romance LGBTQIAPN+', 'Mistério', 'Poesia Secreta'],
  
  // 2. Tags Open Graph (OG) e Twitter (Para Compartilhamento em Redes Sociais)
  openGraph: {
    title: 'ESPÍRITO ILÍCITO: Romance e Mistério',
    description: 'Margarida descobre um mistério em um orfanato isolado. Adquira o ebook Kindle!',
    url: '',
    siteName: 'Espírito Ilícito | Pabl. Costa',
    // Imagem que aparecerá no compartilhamento (A capa do livro, URL completa)
    images: [
      {
        url: '', // Substitua pelo domínio final
        width: 800,
        height: 600,
        alt: 'Capa do Livro Espírito Ilícito',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

// Importações de Fontes
// import { Montserrat } from 'next/font/google'; 
// import { Lora } from 'next/font/google';
// const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', });
// const lora = Lora({ subsets: ['latin'], variable: '--font-lora', });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Se estiver usando as fontes do Next.js: <html lang="pt-BR" className={`${montserrat.variable} ${lora.variable}`}>
    <html lang="pt-BR"> 
      
      {/* className vazio para evitar erro de parsing. Adicione suppressHydrationWarning se o erro voltar. */}
      <body className={""}>
        
        {children} 
        
      </body>
    </html>
  );
}