import { HomeIcon, ChartPieIcon, FastForwardIcon, CollectionIcon, CogIcon } from '@heroicons/react/solid'
import Links from './Links'
import Channel from './Channels'
import { subscriptionsList } from '../Objects'

const LeftSide = () => {

    const links = [
        {
            name: 'Home',
            icon: HomeIcon,
            path: '/'
        },
        {
            name: 'Explore',
            icon: ChartPieIcon,
            path: '/explore'
        },
        {
            name: 'Shorts',
            icon: FastForwardIcon,
            path: '/shorts'
        },
        {
            name: 'Subscriptions',
            icon: CollectionIcon,
            path: '/subscriptions'
        },
    ]

    return (
        <div className='header w-60 h-screen fixed hidden lg:block'>
            <div className='border-b border-neutral-700 py-3'>
                {links.map((link) => <Links post={link} key={link.name} />)}
            </div>
            <div className='border-b border-neutral-700 py-3'>
                <h2 className='px-6 uppercase text-zinc-500 font-bold mb-3'>Subscriptions</h2>
                {subscriptionsList.map((sub) => <Channel post={sub} key={sub.id} />)}
            </div>
            <div className='py-3'>
                <Links post={{ name: 'Settings', icon: CogIcon, path: '/settings' }} />
            </div>
        </div>
    )
}

export default LeftSide