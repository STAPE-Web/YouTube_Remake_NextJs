import Link from 'next/link'

const Links = ({ post }) => {
    return (
        <Link href={post.path}>
            <div className='flex items-center h-10 cursor-pointer px-6 gap-5 hover:btns'>
                <post.icon className="h-6 text-white" />
                <h1 className='text-white'>{post.name}</h1>
            </div>
        </Link>
    )
}

export default Links