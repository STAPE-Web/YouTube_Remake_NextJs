import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../components/Header'
import { useState, useEffect, useRef } from 'react'
import Modal from '../components/Modal'
import { videoList } from '../Objects'
import Link from 'next/link'
import { HeartIcon, ShareIcon, SortAscendingIcon, BellIcon } from '@heroicons/react/outline'

const watch = () => {

    const router = useRouter()
    const [modalRef, setModalRef] = useState(false)
    const videoPlayer = useRef(null)
    const changeMod = useRef(null)
    const controlRef = useRef(null)
    const channelRef = useRef(null)

    const controls = [
        {
            id: 1,
            name: router.query.like,
            icon: HeartIcon
        },
        {
            id: 2,
            name: 'SHARE',
            icon: ShareIcon
        },
        {
            id: 3,
            name: 'SAVE',
            icon: SortAscendingIcon
        }
    ]

    useEffect(() => {

        const mod = changeMod.current
        const vid = videoPlayer.current
        const control = controlRef.current
        const channel = channelRef.current

        document.addEventListener('keypress', (e) => {
            if (e.key === 'f' || 'F') {
                mod.classList.remove('xl:flex-row');
                vid.classList.add('w-full', 'h-[80vh]')
                control.classList.remove('xl:px-0')
                channel.classList.remove('xl:px-0')
            }
        });

        return () => {
            document.removeEventListener('keypress', (e) => {
                if (e.key === 'f' || 'F') {
                    mod.classList.remove('xl:flex-row');
                    vid.classList.add('w-full', 'h-[80vh]')
                    control.classList.remove('xl:px-0')
                    channel.classList.remove('xl:px-0')
                }
            });
        };
    }, []);

    return (
        <div>
            <Head>
                <title>{router.query.title} - YouTube</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='fixed w-screen z-10'>
                <Header setModalRef={setModalRef} />
            </div>
            <Modal modalRef={modalRef} setModalRef={setModalRef} />
            <div className='absolute w-screen h-screen mt-14 body'>
                <div ref={changeMod} className='flex flex-col xl:flex-row body w-screen justify-center pt-5'>
                    <div>
                        <video
                            ref={videoPlayer}
                            src={`https://plane-boeing737.github.io/svg-host/youtube/assets/main/${router.query.id}.mp4`}
                            playsInline loop controls
                            className="" />
                        <div ref={controlRef} className='py-5 text-[18px] border-b border-neutral-700 flex justify-between items-start px-5 flex-col sm:flex-row sm:items-center xl:px-0'>
                            <div>
                                <h1 className='font-bold text-white line-clamp-2'>{router.query.title}</h1>
                                <p className='textVid'>{router.query.views} views</p>
                            </div>
                            <div className='flex items-center gap-5'>
                                {controls.map((control) => (
                                    <div key={control.id} className='flex items-center gap-2 cursor-pointer'>
                                        <control.icon className='w-[24px] h-[24px] text-white' />
                                        <p className='text-white font-bold'>{control.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div ref={channelRef} className='py-5 flex items-center justify-between px-5 xl:px-0'>
                            <Link href={`/channel?name=${router.query.name}&id=${router.query.cid}&sub=${router.query.csub}`}>
                                <div className='flex items-center gap-3 cursor-pointer'>
                                    <img className='w-[50px] h-[50px]' src={`https://plane-boeing737.github.io/svg-host/youtube/assets/channels/${router.query.cid}.png`} />
                                    <div>
                                        <h1 className='text-white'>{router.query.name}</h1>
                                        <p className='textVid'>{router.query.csub} subscribers</p>
                                    </div>
                                </div>
                            </Link>
                            <div className='flex items-center gap-3'>
                                <button className="sub text-white uppercase px-[16px] py-[7px] text-[14px]">Subscribe</button>
                                <BellIcon className='w-[24px] h-[24px] text-white cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full p-3 sm:w-[400px] flex flex-col gap-3 sm:ml-5 px-0 pb-5'>
                        {videoList.map((vid) => (
                            <Link key={vid.id} href={`/watch?title=${vid.title}&id=${vid.id}&views=${vid.views}&name=${vid.channel.name}&cid=${vid.channel.id}&csub=${vid.channel.subscriptions}&like=${vid.like}`}>
                                <div className='flex gap-3 cursor-pointer'>
                                    <img src={`https://plane-boeing737.github.io/svg-host/youtube/assets/videoList/${vid.id}.png`} className='w-[170px] h-[100px]' alt='' />
                                    <div>
                                        <h1 className='font-bold text-white line-clamp-2'>{vid.title}</h1>
                                        <p className='textVid'>{vid.channel.name}</p>
                                        <p className='textVid'>{vid.views} views</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default watch