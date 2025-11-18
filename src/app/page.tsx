// src/app/page.tsx (CORRIGIDO)

import Link from 'next/link';
import Header from '../components/Header';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import styles from '../styles/index.module.scss';
import {
  BOOK_TITLE,
  AUTHOR_NAME,
  SINOPSE,
  CTA_AMAZON,
  CONTACTS,
} from '../data/content';

export default function Home() { 
  return (
    // Usa o Fragment para envolver o Header e o Main
    <> 
      {/* 5. HEADER (FIXO) */}
      <Header /> 

      <main className={styles.container}>
        {/* 1. SEÇÃO DE TOPO (HERO) */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            
            <Image
              src="/espirito_ilicito_cover.jpg" // Sua capa corrigida
              alt={`Capa do livro ${BOOK_TITLE}`}
              width={300}
              height={450}
              className={styles.bookCover}
              priority
            />

            <div className={styles.heroText}>
              <h1>{BOOK_TITLE}</h1>
              <h2>Edição eBook Kindle</h2>
              <p className={styles.authorName}>Por {AUTHOR_NAME}</p>

              {/* CTA 1: Compra */}
              <Link href={CTA_AMAZON.link} target="_blank" className={styles.ctaButtonPrimary}>
                {CTA_AMAZON.text}
              </Link>

              {/* CTA 2: Prévia */}
              <Link href={CONTACTS.previa_pdf} target="_blank" className={styles.ctaButtonSecondary}>
                Leia a Prévia Completa (PDF)
              </Link>
            </div>
          </div>
        </section>

        {/* 2. SEÇÃO DE SINOPSE - AMBIENTAÇÃO */}
        <section className={styles.synopsis}>
          <h3 className={styles.sectionTitle}>A História por Trás da Ilha</h3>
          <p>{SINOPSE}</p>

          <div className={styles.storyHighlights}>
              <p>Margarida é enviada para um orfanato católico.</p>
              <p>Encontra fragmentos de cartas de um rapaz que fugiu do convento e hoje está desaparecido.</p>
              <p>Os moradores sentem seu espírito ilícito pela ilha.</p>
          </div>
        </section>


        {/* 2.5. SEÇÃO: DEPOIMENTOS (Reviews/Provas Social) */}
        <section className={styles.reviews}>
          <h3 className={styles.sectionTitle}>O que os leitores estão dizendo</h3>
          
          <div className={styles.reviewGrid}>
              {/* Card de Depoimento 1 (Placeholder) */}
              <div className={styles.reviewCard}>
                  <p className={styles.reviewQuote}>"Uma leitura emocionante que nos aproxima das experiências vividas no espectro autista."</p>
                  <div className={styles.stars}>⭐️⭐️⭐️⭐️⭐️</div>
                  <p className={styles.reviewSource}>Leitor Verificado</p>
              </div>
              
              {/* Card de Depoimento 2 (Placeholder) */}
              <div className={styles.reviewCard}>
                  <p className={styles.reviewQuote}>"Um livro essencial para quem deseja entender melhor o TEA através de uma escrita sensível e cativante."</p>
                  <div className={styles.stars}>⭐️⭐️⭐️⭐️⭐️</div>
                  <p className={styles.reviewSource}>Leitor Verificado</p>
              </div>

              {/* Card de Depoimento 3 (Placeholder) */}
              <div className={styles.reviewCard}>
                  <p className={styles.reviewQuote}>"Nos guia por reflexões profundas, tornando a leitura uma experiência única."</p>
                  <div className={styles.stars}>⭐️⭐️⭐️⭐️⭐️</div>
                  <p className={styles.reviewSource}>Leitor Verificado</p>
              </div>
          </div>
        </section>

        {/* 3. SEÇÃO SOBRE O AUTOR E CONTATOS */}
        <section className={styles.authorContact}>
          <h3 className={styles.sectionTitle}>Sobre o Autor e Contato</h3>
          <p>Pablo Costa é autor e criador da Edição Poesia Secreta.</p>
          
          <div className={styles.contactLinks}>
              {/* Links de contato (Ícones e Alinhamento Flexbox) */}
              <p>
                  <FaInstagram className={styles.contactIcon} />
                  <Link href={CONTACTS.instagram.link} target="_blank">
                    @{CONTACTS.instagram.handle}
                  </Link>
              </p>
              <p>
                  <FaEnvelope className={styles.contactIcon} />
                  <Link href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</Link>
              </p>
          </div>      
        </section>

        {/* 4. RODAPÉ (FOOTER) */}
        <footer className={styles.footer}>
          <p>&copy; {new Date().getFullYear()} {BOOK_TITLE} - {AUTHOR_NAME}. Todos os direitos reservados.</p>
        </footer>
      </main>
    </>
  );
}