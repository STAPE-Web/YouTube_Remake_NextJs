import { useRef, useEffect } from "react"
import { myChannel } from "../Objects"
import Link from 'next/link'
import { UserIcon, PresentationChartBarIcon, CogIcon } from '@heroicons/react/outline'

const Modal = ({ modalRef, setModalRef }) => {

    const modal = useRef(null)

    useEffect(() => {
        if (modalRef) {
            modal.current.classList.add('flex')
            modal.current.classList.remove('hidden')
        } else {
            modal.current.classList.add('hidden')
            modal.current.classList.remove('flex')
        }
    })

    const closeModal = () => {
        setModalRef(false)
    }

    const modalLinks = [
        {
            id: 1,
            icon: UserIcon,
            name: 'Your Channel',
            path: `/channel?name=${myChannel.name}&id=${myChannel.id}&sub=${myChannel.subscriptions}`
        },
        {
            id: 2,
            icon: CogIcon,
            name: 'Settings',
            path: '/settings'
        }
    ]

    return (
        <div ref={modal} className='fixed z-40 w-screen h-screen justify-end items-start hidden' onClick={closeModal}>
            <div className="bg-white w-[300px] mt-14 border border-neutral-700 modalBg" onClick={(e) => e.stopPropagation()}>
                <div className="border-b border-neutral-700 flex items-center p-4 gap-3 cursor-pointer">
                    <img src={`https://plane-boeing737.github.io/svg-host/youtube/assets/channels/${myChannel.id}.png`} className='h-10' alt="" />
                    <h1 className="font-bold text-white">{myChannel.name}</h1>
                </div>
                <div className="">
                    {modalLinks.map((link) => (
                        <Link href={link.path} key={link.id}>
                            <div className='flex items-center p-4 gap-3 hover:btns cursor-pointer'>
                                <link.icon className="h-8 text-white" />
                                <h1 className="text-white font-bold">{link.name}</h1>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Modal