import { useState } from 'react';
import DropDown from '@components/dropdown';
import Image from 'next/image';
import styles from './index.module.scss';

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
                <DropDown name={'Property'} optionsList={propertySelectOptions} />
            </div>
        </div>
    );
}

export default Projects;
