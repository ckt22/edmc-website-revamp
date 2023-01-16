import styles from './index.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next';

const tags = ['Cultural Space', 'Central', '500 - 1000 sq ft'];

type ProjectData = {
    title: string,
    projectId: string,
    description: string,
    description2?: string
}

type ProjectStaticProps = {
    projectData: ProjectData
}

type ProjectId = {
    pid: string
}

const projects: { [key: string]: ProjectData; } = {
    'aesop-gogh-street': {
        title: 'Aesop Gogh Street',
        projectId: 'aesop-gogh-street',
        description: 'Aesop Gough Street sits on a bustling corner in central Hong Kong. With long-standing collaborators, it has nestled a translucent structure into the pre-existing, pockmarked concrete shell.',
        description2: `A topography of large concrete artefacts is revealed underneath the modulating bricks. Forgotten, interstitial spaces are fossilised. A floating grid or ladder emerges from between the bricks, evoking the stacked density of Hong Kong's high-rise buildings. `
    }
}


export default function AesopGoghStreetProject({ projectData }: { projectData: ProjectData }) {

    const router = useRouter();

    const goToCaseStudies = () => router.push(`/case-studies/${projectData.projectId}`);
    const backToHome = () => router.push('/');

    return (
        <div className={styles.pageContainer}>
            <div className={styles.sectionContainer}>
                <h1 className={styles.pageHeader}>{projectData.title}</h1>
            </div>
            <div className={styles.tagsContainer}>
                {tags.map((t, idx) => (<div key={idx} className={styles.tagsWhite}>{t}</div>))}
            </div>
            <div className={styles.carouselContainer}>
                <Image className={styles.carouselImage} src='/aesop.jpeg' alt='aesop' fill />
                <div className={`${styles.absLeft} ${styles.carouselButtons}`}>
                    <Image src='/arrowLeft.svg' alt='arrow left' width={30} height={30} />
                </div>
                <div className={`${styles.absRight} ${styles.carouselButtons}`}>
                <Image src='/arrowRight.svg' alt='arrow right' width={30} height={30} />
                </div>
            </div>
            <div className={styles.captionContainer}>
                {projectData.description}
            </div>

            <div className={styles.prjDetailImageContainer}>
                <Image className={styles.image} src='/prjDetail.png' alt='project detail' fill />
            </div>

            <div className={styles.galleryContainer}>
                <div className={`${styles.projectsCardContainer} ${styles.absLeft} ${styles.top}`}>
                    <div className={styles.card}>
                        {projectData.description2}
                    </div>
                </div>
                <div className={`${styles.imageContainer} ${styles.absRight}`}>
                    <Image className={styles.theImage} src='/gogh.png' alt='aesop' width={200} height={200} />
                </div>
            </div>

            <div className={styles.footerButtonContainer}>
                <div className={styles.buttonWhite} onClick={goToCaseStudies}>
                    View Case Studies
                    <Image src='/arrowRightBlue.svg' alt='arrow right' width={20} height={20} />
                </div>
                <div className={styles.buttonSecondary} onClick={backToHome}>
                    <Image src='/arrowLeftBlue.svg' alt='arrow right' width={20} height={20} />
                    Back
                </div>
            </div>
        </div>
    );
}

// even if you don't want to create any page on build time you need to create
// a getStaticPaths method to set the fallback property and let NextJS know what 
// to do when the page you are trying to get doesn't exist.
export const getStaticPaths: GetStaticPaths<{ pid: string }> = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }

}

export const getStaticProps: GetStaticProps<ProjectStaticProps, ProjectId> = (context: GetStaticPropsContext) => {

    const pid = context.params?.pid as string;

    const prj = projects[pid];
    
    if (!prj) {
        return {
            notFound: true
        }
    }

    return {
      props: { projectData: prj }
    }
}