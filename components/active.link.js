import { useRouter } from 'next/router'
// import Link from 'next/link'

const ActiveLink = ({ children, href}) => {
    const router = useRouter()

    const style = {
        color: router.asPath === href ? '#a3a3a3' : '#141414',
    }

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick} style={style}>
            {children}
        </a>
    )
}

export default ActiveLink;