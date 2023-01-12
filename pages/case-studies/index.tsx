import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function CaseStudies() {

  const router = useRouter();

  useEffect(() => {
    router.push('/case-studies/1');
  }, [router]);

};