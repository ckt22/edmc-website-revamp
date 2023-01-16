import styles from './index.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next';
import caseStudyData from './content.json';

type CaseStudyData = {
    title: string,
    projectName: string,
    projectDescription: string,
    projectImage: string,
    challengesDescription: string,
    challengesImage: string,
    issuesDescription: string,
    issuesImage: string,
    solutionsDescription: string,
    solutionsImage: string
}

type CaseStudiesStaticProps = {
    caseStudyData: CaseStudyData
}

type CaseStudyId = {
    cid: string
}

export default function CaseStudyDetails({ caseStudyData }: { caseStudyData: CaseStudyData }) {

    return (
        <div className={styles.pageContainer}>
            <div className={styles.sectionContainer}>
                <h1 className={styles.pageHeader}>{caseStudyData.title}</h1>
            </div>
            <div className={styles.galleryContainer}>
                <div className={`${styles.projectsCardContainer} ${styles.absLeft}`}>
                    <h1 className={`${styles.cardTitle}`}>{caseStudyData.projectName}</h1>
                    <div className={styles.card}>
                        {caseStudyData.projectDescription}
                    </div>
                </div>
                <div className={`${styles.imageContainer} ${styles.absRight} ${styles.top}`}>
                    <Image className={styles.theImage} src='/gogh.png' alt='aesop' width={200} height={200} />
                </div>
            </div>

            <div className={styles.galleryContainer}>
                <div className={`${styles.imageContainer} ${styles.absLeft}`}>
                    <Image className={styles.theImage} src='/gogh.png' alt='aesop' width={200} height={200} />
                </div>
                <div className={`${styles.projectsCardContainer} ${styles.absRight} ${styles.top}`}>
                    <h1 className={`${styles.cardTitle}`}>Challenges</h1>
                    <div className={`${styles.card} ${styles.wide_60}`}>
                        {caseStudyData.challengesDescription}
                    </div>
                </div>
            </div>

            <div className={styles.galleryContainer}>
                <div className={`${styles.projectsCardContainer} ${styles.top} ${styles.center} ${styles.absTop}`}>
                    <h1 className={`${styles.cardTitle}`}>Issues</h1>
                    <div className={`${styles.card} ${styles.wide_50}`}>
                        {caseStudyData.issuesDescription}
                    </div>
                </div>
                <div className={`${styles.imageContainer} ${styles.center} ${styles.image_45}`}>
                    <Image className={styles.theImage} src='/gogh.png' alt='aesop' width={200} height={200} />
                </div>
            </div>

            <div className={styles.galleryContainer}>
                <div className={`${styles.projectsCardContainer} ${styles.absLeft} ${styles.top}`}>
                    <h1 className={`${styles.cardTitle}`}>Solution</h1>
                    <div className={`${styles.card} ${styles.wide_60}`}>
                        {caseStudyData.solutionsDescription}
                    </div>
                </div>
                <div className={`${styles.imageContainer} ${styles.absRight} `}>
                    <Image className={styles.theImage} src='/gogh.png' alt='aesop' width={200} height={200} />
                </div>
            </div>

            <div className={styles.footerButtonContainer}>
                <div className={styles.buttonWhite}>
                    More Case Studies
                    <Image src='/arrowRightBlue.svg' alt='arrow right' width={20} height={20} />
                </div>
            </div>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths<{ pid: string }> = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }

}

export const getStaticProps: GetStaticProps<CaseStudiesStaticProps, CaseStudyId> = (context: GetStaticPropsContext) => {

    const _data : { [key: string]: CaseStudyData; } = caseStudyData;

    const cid = context.params?.cid as string;

    const ca = _data[cid];
    
    if (!ca) {
        return {
            notFound: true
        }
    }

    return {
      props: { caseStudyData: ca }
    }
}