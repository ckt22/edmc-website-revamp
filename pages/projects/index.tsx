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
        name: 'Art & Cultural Spaces',
        value: 'cultural'
    },
    {
        name: 'Art Installation',
        value: 'art-installation'
    },
    {
        name: 'Commercial Spaces',
        value: 'commercial'
    },
    {
        name: 'Government Public Sector Spaces',
        value: 'public'
    },
    {
        name: 'Residential Spaces',
        value: 'residential'
    },
];

function Projects() {

    const [galleryImageIndex, setGalleryImageIndex] = useState<number>(0);
    const [filter, setFilter] = useState<{ name: string, value: string }>();
    const [filteredProjects, setFilteredProjects] = useState<Array<Projects>>(projects);

    useEffect(() => {
        if (filter) {
            setFilteredProjects(projects?.filter((prj) => prj.tags.some((tag => tag.value === filter.value))));
        }
    }, [filter]);

    return (
        <div className={styles.projectPageContainer}>
            <div className={styles.dropdownContainer}>
                <div className={styles.space} />
                <DropDown 
                    name={'All Projects'} 
                    optionsList={propertySelectOptions}
                    onChange={setFilter}
                    value={filter}
                />
            </div>
            <div className={styles.galleryContainer}>
            {filteredProjects.length ?
                (filteredProjects).map((item, idx) => 
                (<div key={idx} className={styles.galleryContainer}>
                    <div className={`${styles.imageContainer} ${idx % 2 == 0 ? `${styles.absLeft}` : `${styles.absRight}`}`}>
                        <Image className={styles.theImage} src={item.image} alt='aesop' width={200} height={200} />
                    </div>
                    <div className={`${styles.projectsCardContainer} ${styles.top} ${ idx % 2 == 0 ? `${styles.absRight}` : `${styles.absLeft}`}`}>
                        <ProjectsCard title={item.title} description={item.description} tags={item.tags} viewPageLink={item.viewPageLink} />
                    </div>
                </div>)
                )
            :
                <div className={`${styles.galleryContainer} ${styles.contentCenter}`}>
                    <h1>No results for the selected category.</h1>
                </div>
            }
            </div>
        </div>
    );
}

export default Projects;
