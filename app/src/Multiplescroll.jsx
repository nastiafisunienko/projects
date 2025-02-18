import { useEffect, useState } from "react";

export function MultipleScroll(size1, size2) {
    const [scrolled, setScrolled] = useState(false)
    const [scrolled2, setScrolled2] = useState(false)

    useEffect(()=> {


        const handleScroll =()=> {
            if (window.scrollY > size1) {
                setScrolled(true)
                setScrolled2(false)

            } else if(window.scrollY > size2) {
                setScrolled(false)
                setScrolled2(true)
            } else {
                setScrolled(false)
                setScrolled2(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return() => window.removeEventListener("scroll", handleScroll)
    }, [size1, size2])

    return {scrolled, scrolled2}

}