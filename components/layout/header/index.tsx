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
                        <Image className={styles.icon} src="/next.svg" alt="AAXPay" width={120} height={120} />
                    </div>
                    <div className={styles.space} />
                    <div className={styles.right}>
                        <button>
                            Some location
                        </button>
                        <span className={styles.pageListItem}>
                            edmc@edmc.hk
                        </span>
                        <span className={styles.pageListItem}>
                            +852 3620 3086
                        </span>
                        <button className={styles.pageListItem}>
                            Some Button
                        </button>
                    </div>
                </div>

                <div className={styles.drawer}>
                    {/* {pageTab.map((tab) => (
                        <Link type="text" key={tab.name} href={tab.path} className={styles.pageListItem}>
                            {tab.name}
                        </Link>
                    ))} */}
                </div>
            </div>

            <div className={styles.tabletView}>

            </div>
        </>
    )
}

export default Header;