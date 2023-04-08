import {PropsWithChildren, Suspense} from "react";


export function GlobalSuspense({children}: PropsWithChildren<unknown>) {
    return (
        <Suspense
        >
            {children}
        </Suspense>
    )
}