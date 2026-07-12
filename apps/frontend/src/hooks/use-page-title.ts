import { useEffect } from "react";

export function usePageTitle(title: string) {
    useEffect(() => {
        document.title = title + " - InsureBank";
    }, [title]);
}