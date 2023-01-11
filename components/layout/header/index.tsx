import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';
import { useRouter } from 'next/router';

const pageTab = [
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Case Studies', path: '/case-studies' }
];

const Header: React.FC = () => {

    const router = useRouter();
    const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

    const navToRoot = () => router.push('/'); // THINKING: consolidate it in a route util.

    return (
        <>
            <div className={styles.pcView}>
                <div className={styles.header}>
                    {/* FIXME: not recommend to put ther */}
                    <div onClick={navToRoot}>
                        <Image className={styles.icon} src='/logo.png' alt='AAXPay' width={110} height={110} />
                    </div>
                    <div className={styles.space} />
                    <div className={styles.right}>
                        {/* TODO: component - Icon */}
                        {/* FIXME: fn issue, please ref navToRoot */}
                        <button className={styles.locationButton} onClick={() => { router.push('/about#location') }}>
                            <Image src='/locationLogo.svg' width={20} height={20} alt='location' />
                        </button>
                        {/* TODO: component - Typography, since duplicate using the styles.pageListItem */}
                        <span className={styles.pageListItem}>
                            edmc@edmc.hk
                        </span>
                        <span className={styles.pageListItem}>
                            +852 3620 3086
                        </span>
                        {/* TODO: combine with your Dropdown component, and handle the business requirement with css */}
                        <button
                            className={styles.menuButton}
                            onClick={() => setIsOpenDrawer(!isOpenDrawer)}
                        >
                            {isOpenDrawer ? <Image src='/cross.svg' alt='close' width={20} height={20} /> : <Image src='/burger.svg' alt='menu' width={20} height= {20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* UI COMMENT: Is not sexy for real, should be better in UI perspective */}
            <div className={isOpenDrawer ? styles.drawer : styles.drawerClosed}>
                <div className={styles.linkContainer}>
                    {pageTab.map((tab) => (
                        <Link type="text" key={tab.name} href={tab.path} className={styles.pageListItemDrawer} onClick={() => setIsOpenDrawer(false)}>
                            {tab.name}
                        </Link>
                    ))}
                </div>
            </div>

            <div className={styles.tabletView}>

            </div>
        </>
    )
}

export default Header;