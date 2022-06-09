import Head from 'next/head'
import Header from '../components/Header'
import LeftSide from '../components/LeftSide'
import VideoLine from '../components/VideoLine'
import { videoList } from '../Objects'
import { TrendingUpIcon, MusicNoteIcon, FilmIcon, StatusOnlineIcon, PuzzleIcon, NewspaperIcon } from '@heroicons/react/outline'
import Category from '../components/Category'
import { useState } from 'react'
import Modal from '../components/Modal'


export default function explore() {

    const [modalRef, setModalRef] = useState(false)

    const categores = [
        {
            name: 'Trending',
            icon: TrendingUpIcon,
        },
        {
            name: 'Music',
            icon: MusicNoteIcon,
        },
        {
            name: 'Film',
            icon: FilmIcon,
        },
        {
            name: 'Live',
            icon: StatusOnlineIcon,
        },
        {
            name: 'Gaming',
            icon: PuzzleIcon,
        },
        {
            name: 'Newspaper',
            icon: NewspaperIcon,
        },
    ]

    return (
        <div className='body w-screen h-screen bg-fixed'>
            <Head>
                <title>Explore - YouTube</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='fixed w-screen z-20'>
                <Header setModalRef={setModalRef} />
                <LeftSide />
            </div>
            <Modal modalRef={modalRef} setModalRef={setModalRef} />
            <div className='absolute mt-14 lg:ml-60 body p-4'>
                <div className='flex gap-1 cursor-pointer flex-wrap lg:justify-start justify-center'>
                    {categores.map((cat) => <Category post={cat} key={cat.name} />)}
                </div>
                <div className='flex flex-col gap-4 mt-10'>
                    {videoList.map((video) => <VideoLine post={video} key={video.id} />)}
                </div>
            </div>
        </div>
    )
}
