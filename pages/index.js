import Head from 'next/head'
import Header from '../components/Header'
import LeftSide from '../components/LeftSide'
import Video from '../components/Video'
import { videoList } from '../Objects'
import { useState } from 'react'
import Modal from '../components/Modal'

export default function Home() {

  const [modalRef, setModalRef] = useState(false)

  return (
    <div className='body w-screen h-screen bg-fixed'>
      <Head>
        <title>YouTube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='fixed w-screen z-10'>
        <Header setModalRef={setModalRef} />
        <LeftSide />
      </div>
      <Modal modalRef={modalRef} setModalRef={setModalRef} />
      <div className='absolute mt-14 lg:ml-60 body grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-3 gap-y-6 p-4'>
        {videoList.map((video) => <Video post={video} key={video.id} />)}
      </div>
    </div>
  )
}
