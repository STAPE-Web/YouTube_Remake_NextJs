import { useRef, useEffect } from "react";
import { PlayIcon, PauseIcon, VolumeUpIcon, VolumeOffIcon } from "@heroicons/react/outline";
import { HeartIcon, ChatIcon, ShareIcon } from "@heroicons/react/solid";
import Link from 'next/link'

const Shorts = ({ post }) => {

    const play = useRef(null)
    const pause = useRef(null)
    const volumeUp = useRef(null)
    const volumeOff = useRef(null)
    const short = useRef(null)

    useEffect(() => {
        pause.current.addEventListener('click', () => {
            short.current.pause()
            pause.current.classList.add('hidden')
            play.current.classList.remove('hidden')
        })

        play.current.addEventListener('click', () => {
            short.current.play()
            play.current.classList.add('hidden')
            pause.current.classList.remove('hidden')
        })

        volumeOff.current.addEventListener('click', () => {
            short.current.muted = false
            volumeOff.current.classList.add('hidden')
            volumeUp.current.classList.remove('hidden')
        })

        volumeUp.current.addEventListener('click', () => {
            short.current.muted = true
            volumeUp.current.classList.add('hidden')
            volumeOff.current.classList.remove('hidden')
        })
    }, [])

    const stats = [
        {
            icon: HeartIcon,
            title: post.like
        },
        {
            icon: ChatIcon,
            title: post.comments
        },
        {
            icon: ShareIcon,
            title: 'Share'
        }
    ]


    return (
        <div className="w-screen body flex justify-center py-[30px]">
            <div className="group">
                <div className='group-hover:flex hidden absolute items-center w-[450px] z-10 px-3 pt-3 pb-5 controls rounded-xl justify-between'>
                    <div>
                        <PlayIcon ref={play} className="h-7 text-white hidden cursor-pointer" />
                        <PauseIcon ref={pause} className="h-7 text-white cursor-pointer" />
                    </div>
                    <div>
                        <VolumeUpIcon ref={volumeUp} className="h-7 text-white hidden cursor-pointer" />
                        <VolumeOffIcon ref={volumeOff} className="h-7 text-white cursor-pointer" />
                    </div>
                </div>
                <video
                    ref={short}
                    src={`https://plane-boeing737.github.io/svg-host/youtube/assets/shorts/${post.id}.mp4`}
                    playsInline loop autoPlay muted
                    className="w-[450px] h-[800px] rounded-xl" />

                <div className="absolute w-[450px] mt-[-90px] flex flex-col gap-3 px-3">
                    <h1 className="text-white line-clamp-1">{post.title}</h1>
                    <div className="flex justify-between items-center">
                        <Link href={`/channel?name=${post.channel.name}&id=${post.channel.id}&sub=${post.channel.subscriptions}`}>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <img src={`https://plane-boeing737.github.io/svg-host/assets/channels/${post.channel.id}.png`} className='rounded-full w-[36px] h-[36px]' alt="" />
                                <h2 className="text-white font-bold text-[14px]">{post.channel.name}</h2>
                            </div>
                        </Link>
                        <button className="sub text-white uppercase px-[16px] py-[7px] text-[14px]">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-end gap-3">
                {stats.map((stat) => (
                    <div key={stat.title} className='text-center ml-3 cursor-pointer'>
                        <stat.icon className="textVid" />
                        <h1 className="textVid font-bold">{stat.title}</h1>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Shorts