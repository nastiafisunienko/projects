import { useEffect, useState } from "react";

export function useEventListener(size) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=> {


        const handleScroll =()=> {
            if (window.scrollY > size) {
                setScrolled(true)

            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return() => window.removeEventListener("scroll", handleScroll)
    }, [size])

    return scrolled

}

