// src/components/Header.tsx

import Link from 'next/link';
import { BOOK_TITLE, AUTHOR_NAME, CTA_AMAZON } from '../data/content';
import styles from '../styles/index.module.scss';

export default function Header() {
  // Usamos apenas o título do livro para a marca
  const brandName = BOOK_TITLE; 

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        
        {/* Marca/Logo: Título da Obra */}
        <Link href="/" className={styles.headerBrand}>
          {brandName}
        </Link>
        
        {/* Botão CTA Principal (Repetição do botão do Hero) */}
        <Link href={CTA_AMAZON.link} target="_blank" className={styles.headerCtaButton}>
          {CTA_AMAZON.text.replace('Ebook Kindle', '')}
        </Link>
        
      </div>
    </header>
  );
}