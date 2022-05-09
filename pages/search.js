import Head from 'next/head'
import Header from '../components/Header'
import LeftSide from '../components/LeftSide'
import Video from '../components/Video'
import { videoList } from '../Objects'
import { useRouter } from 'next/router'
import Modal from '../components/Modal'
import { useState } from 'react'


export default function search() {

    const router = useRouter()
    const [modalRef, setModalRef] = useState(false)

    return (
        <div className='body w-screen h-screen bg-fixed'>
            <Head>
                <title>{router.query.term} - YouTube</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='fixed w-screen z-20'>
                <Header setModalRef={setModalRef} />
                <LeftSide />
            </div>
            <Modal modalRef={modalRef} setModalRef={setModalRef} />
            <div className='absolute mt-14 lg:ml-60 body'>
                <h1 className='p-4 text-4xl textVid'>You Searched: {router.query.term}</h1>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-3 gap-y-6 p-4'>
                    {videoList.map((video) => <Video post={video} key={video.id} />)}
                </div>
            </div>
        </div >
    )
}