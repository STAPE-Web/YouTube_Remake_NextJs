import Head from 'next/head'
import Header from '../components/Header'
import LeftSide from '../components/LeftSide'
import Shorts from '../components/Shorts'
import { short } from '../Objects'
import { useState } from 'react'
import Modal from '../components/Modal'

const shorts = () => {

    const [modalRef, setModalRef] = useState(false)

    return (
        <div>
            <Head>
                <title>Shorts - YouTube</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='fixed w-screen z-20'>
                <Header setModalRef={setModalRef} />
                <LeftSide />
            </div>
            <Modal modalRef={modalRef} setModalRef={setModalRef} />
            <div className='absolute w-screen h-screen body flex items-center flex-col mt-14 '>
                {short.map((short) => <Shorts post={short} key={short.id} />)}
            </div>
        </div>
    )
}

export default shorts