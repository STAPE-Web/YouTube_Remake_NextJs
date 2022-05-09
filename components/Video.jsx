import Link from "next/link"

const Video = ({ post }) => {
    return (
        <Link href={`/watch?title=${post.title}&id=${post.id}&views=${post.views}&name=${post.channel.name}&cid=${post.channel.id}&csub=${post.channel.subscriptions}&like=${post.like}`}>
            <div className="cursor-pointer hover:scale-105 duration-200">
                <img src={`https://plane-boeing737.github.io/svg-host/youtube/assets/videoList/${post.id}.png`} alt="" />
                <div className="flex gap-2 items-start mt-[15px]">
                    <img src={`https://plane-boeing737.github.io/svg-host/youtube/assets/channels/${post.channel.id}.png`} width={36} height={36} alt="" />
                    <div>
                        <h2 className="line-clamp-2 text-white font-bold">{post.title}</h2>
                        <p className="textVid">{post.channel.name}</p>
                        <p className="textVid">{post.views} watching</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Video