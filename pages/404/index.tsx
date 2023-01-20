import { useEffect } from 'react';
import { useRouter } from 'next/router';

// when user tries to access an unknown page
// redirects user to the home page instead
export default function Custom404() {
    const router = useRouter();

    useEffect(() => {
      router.push('/');
    }, [router]);

}