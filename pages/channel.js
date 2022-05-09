import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../components/Header'
import LeftSide from '../components/LeftSide'
import { useState } from 'react'
import Modal from '../components/Modal'

const channel = () => {

    const router = useRouter()
    const [modalRef, setModalRef] = useState(false)

    return (
        <div>
            <Head>
                <title>{router.query.name} - YouTube</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='fixed w-screen z-10'>
                <Header setModalRef={setModalRef} />
                <LeftSide />
            </div>
            <Modal modalRef={modalRef} setModalRef={setModalRef} />
            <div className='absolute w-screen h-screen channel lg:pl-60 mt-14'>
                <img src={`https://plane-boeing737.github.io/svg-host/youtube/assets/channels/banners/${router.query.id}.png`} className='w-screen h-[30vh] object-none' />
                <div className='flex w-full body px-[20px] lg:px-[200px] items-center gap-5 py-[20px]'>
                    <img src={`https://plane-boeing737.github.io/svg-host/youtube/assets/channels/${router.query.id}.png`} className='h-[80px] w-[80px], rounded-full' />
                    <div>
                        <h1 className='text-[24px] text-white'>{router.query.name}</h1>
                        <p className='textVid'>{router.query.sub} subscribers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default channel