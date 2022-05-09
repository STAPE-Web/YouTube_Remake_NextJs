import Link from "next/link"

const VideoLine = ({ post }) => {
    return (
        <Link href={`/watch?title=${post.title}&id=${post.id}&views=${post.views}&name=${post.channel.name}&cid=${post.channel.id}&csub=${post.channel.subscriptions}&like=${post.like}`}>
            <div className="trend cursor-pointer flex flex-row w-screen trend trendLine gap-4">
                <img src={`https://plane-boeing737.github.io/svg-host/youtube/assets/videoList/${post.id}.png`} width={246} height={140} alt="" />
                <div className="gap-2 items-start">
                    <h2 className="line-clamp-2 text-lg text-white font-bold">{post.title}</h2>
                    <div className="flex gap-2 items-center">
                        <p className="textVid">{post.channel.name}</p>
                        <p className="textVid">•</p>
                        <p className="textVid">{post.views} watching</p>
                    </div>
                    <p className="textVid line-clamp-2 md:w-[570px]">{post.description}</p>
                </div>
            </div>
        </Link>
    )
}

export default VideoLine