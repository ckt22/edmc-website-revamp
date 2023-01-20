import { useEffect, useState } from 'react';
import DropDown from '@components/dropdown';
import Image from 'next/image';
import styles from './index.module.scss';
import ProjectsCard from '@components/projectsCard';
import projects from './content.json';

type Projects = {
    title: string,
    description: string,
    image: string,
    tags: Array<{name: string, value: string}>,
    viewPageLink: string
}

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
    const [filters, setFilters] = useState<string>('');
    const [filteredProjects, setFilteredProjects] = useState<Array<Projects>>();

    useEffect(() => {
        setFilteredProjects(projects);
    }, []);

    useEffect(() => {
        setFilteredProjects(filteredProjects?.filter((prj) => prj.tags.some((tag => tag.value === filters))));
    }, [filters, filteredProjects]);

    return (
        <div className={styles.projectPageContainer}>
            <div className={styles.dropdownContainer}>
                <div className={styles.space} />
                <DropDown name={'All Projects'} />
                <DropDown name={'Property'} optionsList={propertySelectOptions} />
                <DropDown name={'Location'} optionsList={propertySelectOptions} />
                <DropDown name={'Size'} optionsList={propertySelectOptions} />
            </div>
            {(projects || []).map((item, idx) => 
                (<div key={idx} className={styles.galleryContainer}>
                    <div className={`${styles.imageContainer} ${idx % 2 == 0 ? `${styles.absLeft}` : `${styles.absRight}`}`}>
                        <Image className={styles.theImage} src={item.image} alt='aesop' width={200} height={200} />
                    </div>
                    <div className={`${styles.projectsCardContainer} ${styles.top} ${ idx % 2 == 0 ? `${styles.absRight}` : `${styles.absLeft}`}`}>
                        <ProjectsCard title={item.title} description={item.description} tags={item.tags} viewPageLink={item.viewPageLink} />
                    </div>
                </div>)
                )
            }
        </div>
    );
}

export default Projects;
