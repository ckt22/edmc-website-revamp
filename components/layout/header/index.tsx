import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';
import { useRouter } from 'next/router';

const pageTab = [
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    // { name: 'Case Studies', path: '/case-studies' }
];

const Header: React.FC = () => {

    const router = useRouter();
    const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

    const backToHome = () => router.push('/');
    const goToLocation = () => router.push('/about#location');

    return (
        <>
            <div className={styles.pcView}>
                <div className={styles.header}>
                    <div className={styles.icon} onClick={backToHome}>
                        <Image className={styles.icon} src='/logo.png' alt='AAXPay' fill />
                    </div>
                    <div className={styles.space} />
                    <div className={styles.right}>
                        <button className={styles.locationButton} onClick={goToLocation}>
                            <Image src='/locationLogo.svg' width={20} height={20} alt='location' />
                        </button>
                        <span className={styles.pageListItem}>
                            edmc@edmc.hk
                        </span>
                        <span className={styles.pageListItem}>
                            +852 3620 3086
                        </span>
                        <button
                            className={styles.menuButton}
                            onClick={() => setIsOpenDrawer(!isOpenDrawer)}
                        >
                            {isOpenDrawer ? <Image src='/cross.svg' alt='close' width={20} height={20} /> : <Image src='/burger.svg' alt='menu' width={20} height= {20} />}
                        </button>
                    </div>
                </div>
            </div>

            <div className={isOpenDrawer ? styles.drawer : styles.drawerClosed}>
                <div className={styles.linkContainer}>
                    {pageTab.map((tab) => (
                        <Link type="text" key={tab.name} href={tab.path} className={styles.pageListItemDrawer} onClick={() => setIsOpenDrawer(false)}>
                            {tab.name}
                        </Link>
                    ))}
                    <div className={styles.pageListItemDrawer}>
                        Case Studies
                        <span className={styles.pageListItemSmallText}> / Under Construction</span>
                    </div>
                </div>
            </div>

            <div className={styles.tabletView}>

            </div>
        </>
    )
}

export default Header;