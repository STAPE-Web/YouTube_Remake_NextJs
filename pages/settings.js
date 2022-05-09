import Head from 'next/head'
import Header from '../components/Header'
import LeftSide from '../components/LeftSide'
import { myChannel } from '../Objects'
import { useState } from 'react'
import Modal from '../components/Modal'

const settings = () => {

    const [modalRef, setModalRef] = useState(false)

    return (
        <div>
            <Head>
                <title>Settings - YouTube</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='fixed w-screen z-10'>
                <Header setModalRef={setModalRef} />
                <LeftSide />
            </div>
            <Modal modalRef={modalRef} setModalRef={setModalRef} />
            <div className='absolute w-screen h-screen body flex items-center flex-col mt-14 '>
                <div className='mt-10'>
                    <div className='border-b border-neutral-700 flex flex-col gap-5 pb-5'>
                        <h3 className='text-white font-bold'>Account</h3>
                        <div>
                            <h1 className='text-[24px] text-white'>Choose how you appear and what you see on YouTube</h1>
                            <p className='textVid'>Signed in as example@example.com</p>
                        </div>
                    </div>
                    <div className='border-b border-neutral-700 flex flex-col gap-2 py-5'>
                        <h3 className='text-white font-bold'>Your YouTube channel</h3>
                        <p className='textVid'>This is your public presence on YouTube. You need a channel to upload your own videos, comment on videos or create playlists.</p>
                        <div className='flex gap-10'>
                            <p className='text-white'>Your channel</p>
                            <div className='flex items-center gap-3'>
                                <img src={`https://plane-boeing737.github.io/svg-host/youtube/assets/channels/${myChannel.id}.png`} className='h-12' alt='' />
                                <h3 className='text-white font-bold'>{myChannel.name}</h3>
                            </div>
                        </div>
                        <p className='text-blue-500 font-bold cursor-pointer'>Delete Channel</p>
                        <p className='text-blue-500 font-bold cursor-pointer'>Create a new channel</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default settings