import Link from 'next/link'

const Channels = ({ post }) => {
    return (
        <Link href={`/channel?name=${post.name}&id=${post.id}&sub=${post.subscriptions}`}>
            <div className='flex items-center h-10 cursor-pointer px-6 gap-5 hover:btns'>
                <img src={`https://plane-boeing737.github.io/svg-host/youtube/assets/channels/${post.id}.png`} width={25} height={25} className="rounded-full" alt='' />
                <h1 className='text-white line-clamp-1'>{post.name}</h1>
            </div>
        </Link>
    )
}

export default Channels