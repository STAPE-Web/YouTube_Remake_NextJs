import { SearchIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { useRouter } from "next/router"
import { useRef } from "react"

const Header = ({ setModalRef }) => {

    const router = useRouter()
    const inputRef = useRef(null)

    const search = (e) => {
        e.preventDefault()
        const term = inputRef.current.value

        router.push(`/search?term=${term}`)
    }

    const modal = () => {
        setModalRef(true)
    }

    return (
        <header className="flex w-full h-14 header items-center justify-between px-4">
            <Link href='/'>
                <img className="h-5 cursor-pointer" src='https://pnggrid.com/wp-content/uploads/2021/04/youtube-white-1024x230.png' alt="" />
            </Link>
            <form className="sm:flex items-center search rounded-lg hidden" onSubmit={search}>
                <input ref={inputRef} type="text" placeholder="Search" className="text-white placeholder:text-gray-500 outline-none border-none bg-transparent px-4 py-2" />
                <SearchIcon className="h-6 px-3 text-gray-300 cursor-pointer" />
            </form>
            <img className="h-8 cursor-pointer rounded-full" src="https://avatars.githubusercontent.com/u/72465053?v=4" onClick={modal} alt="" />

        </header>
    )
}

export default Header
