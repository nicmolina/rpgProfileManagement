import React from 'react';
import { useRouter } from "../hooks/useRouter";

function Index() {
    const router = useRouter();

    router.push('/login');

    return null;
}

export default Index;