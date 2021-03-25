import React from 'react';
import Preloader from "../modules/common/Preloader";

const withSuspense = (Component: React.FC | React.ComponentClass) => {
    return (props: any) => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
    };
}

export default withSuspense;