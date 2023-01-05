import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';

const pageTab = [
    { name: 'About Us', path: '/about_us' },
    { name: 'Projects', path: '/product' },
    { name: 'Case Studies', path: '/product' }
];

const Header: React.FC = () => {
    return (
        <>
            <div className={styles.pcView}>
                <div className={styles.header}>
                    <div>
                        <Image src="/icon/logo.png" alt="AAXPay" width={100} height={28} />
                        {pageTab.map((tab) => (
                            <Link type="text" key={tab.name} href={tab.path} className={styles.pageListItem}>
                                {tab.name}
                            </Link>
                        ))}
                    </div>
                    <div className={styles.space} />
                    <p>Hello</p>
                </div>
            </div>

            <div className={styles.tabletView}>

            </div>
        </>
    )
}

export default Header;