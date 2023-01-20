import Image from 'next/image';
import styles from './index.module.scss';
import { useRouter } from 'next/router';

export default function ProjectsCard({ title, description, tags = [], viewPageLink } : { title: string, description: string, tags?: Array<{name: string, value: string}>, viewPageLink: string }) {
    
    const router = useRouter();
    const toProjectPage = () => router.push(viewPageLink);

    return (
        <div className={styles.projectsCardContainer}>
            <h1>{title}</h1>
            {description}
            <div className={styles.projectsCardButtonContainer}>
                <div className={styles.space} />
                {tags.map((t, idx) => (<div className={styles.cardButton} key={idx}>{t.name}</div>))}
                <div className={`${styles.cardButton} ${styles.clickAble}`} onClick={toProjectPage}>
                    View
                    <Image src='/arrowRightBlue.svg' width={16} height={16} alt='arrow right' />
                </div>
            </div>
        </div>
    );
}