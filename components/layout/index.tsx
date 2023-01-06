import React from 'react';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Header from '@components/layout/header';
import Footer from '@components/layout/footer';
import styles from './index.module.scss';

type PropsType = {
    children: ReactNode;
};

const Layout: React.FC<PropsType> = (props: PropsType) => {
    const { children } = props;
    return (
        <div className={styles.layout}>
            <Header />
            <Image
                className={styles.backgroundImage}
                src='/aesop.jpeg' 
                alt={'aesop'}
                fill
            />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
