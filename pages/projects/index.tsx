import { useState } from 'react';
import DropDown from '@components/dropdown';
import Image from 'next/image';
import styles from './index.module.scss';
import ProjectsCard from '@components/projectsCard';

const propertySelectOptions = [
    {
        name: 'Cultural Space Institutional',
        value: 'cultural'
    },
    {
        name: 'Residentail',
        value: 'residential'
    }
];

function Projects() {

    const [galleryImageIndex, setGalleryImageIndex] = useState<number>(0);
    const [property, setProperty] = useState<string>('');

    return (
        <div className={styles.projectPageContainer}>
            <div className={styles.dropdownContainer}>
                <div className={styles.space} />
                <DropDown name={'All Projects'} />
                <DropDown name={'Property'} optionsList={propertySelectOptions} />
                <DropDown name={'Location'} optionsList={propertySelectOptions} />
                <DropDown name={'Size'} optionsList={propertySelectOptions} />
            </div>
            <div className={styles.galleryContainer}>
                <div className={`${styles.imageContainer} ${styles.absLeft}`}>
                    <Image className={styles.theImage} src='/gogh.png' alt='aesop' width={200} height={200} />
                </div>
                <div className={`${styles.projectsCardContainer} ${styles.absRight} ${styles.top}`}>
                    <ProjectsCard title='Lo Ip Gallery' description='Some Description' tags={['Sheung Wan', 'Wah Chai']} viewPageLink='/projects/aesop-gogh-street' />
                </div>
            </div>
            <div className={styles.galleryContainer}>
                <div className={`${styles.projectsCardContainer} ${styles.absLeft} ${styles.top}`}>
                    <ProjectsCard title='Lo Ip Gallery' description='Some Description' tags={['Sheung Wan', 'Wah Chai']} viewPageLink='/projects/aesop-gogh-street' />
                </div>
                <div className={`${styles.imageContainer} ${styles.absRight}`}>
                    <Image className={styles.theImage} src='/gogh.png' alt='aesop' width={200} height={200} />
                </div>
            </div>
        </div>
    );
}

export default Projects;
