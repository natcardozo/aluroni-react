import styles from './PaginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';
import stylesTema from 'styles/Tema.module.scss';
import React from 'react';

export default function PaginaPadrao({ children }: { children?: React.ReactNode}) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <div className={stylesTema.container}>
        <Outlet /> {/* children do React Router Dom, serve para utilizar o Route com um children para renderizar componentes apenas em páginas específicas, ou seja, permite que esse elemento tenha elementos-filhos */}
        {children}
      </div>
    </>
  );
}