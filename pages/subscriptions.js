import Head from 'next/head'
import Header from '../components/Header'
import LeftSide from '../components/LeftSide'
import Video from '../components/Video'
import { subscriptionsList, videoList } from '../Objects'
import Link from 'next/link'
import { useState } from 'react'
import Modal from '../components/Modal'

const subscriptions = () => {

    const [modalRef, setModalRef] = useState(false)

    return (
        <div>
            <Head>
                <title>Subscriptions - YouTube</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='fixed w-screen z-10'>
                <Header setModalRef={setModalRef} />
                <LeftSide />
            </div>
            <Modal modalRef={modalRef} setModalRef={setModalRef} />
            <div className='absolute mt-14 lg:ml-60 body'>
                <h1 className='text-4xl textVid p-4'>My Subscriptions</h1>
                <div className='flex items-center p-4 gap-4 border-b border-neutral-700 flex-wrap justify-center md:justify-start'>
                    {subscriptionsList.map((sub) => (
                        <Link href={`/channel?name=${sub.name}&id=${sub.id}&sub=${sub.subscriptions}`} key={sub.id}>
                            <div className='text-center w-[80px] cursor-pointer'>
                                <img src={`https://plane-boeing737.github.io/svg-host/youtube/assets/channels/${sub.id}.png`} width={80} height={80} className='rounded-full' />
                                <h1 className='text-white font-bold line-clamp-1'>{sub.name}</h1>
                            </div>
                        </Link>
                    ))}
                </div>
                <h2 className='text-2xl text-white p-4'>Today</h2>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-3 gap-y-6 p-4'>
                    {videoList.map((video) => <Video post={video} key={video.id} />)}
                </div>
            </div>
        </div>
    )
}

export default subscriptions