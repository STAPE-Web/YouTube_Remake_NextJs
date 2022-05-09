import React from 'react'

const Category = ({ post }) => {
    return (
        <div className='w-52 h-[115px] flex justify-center items-center textVid flex-col header rounded-lg'>
            <post.icon className="h-10" />
            <h1>{post.name}</h1>
        </div>
    )
}

export default Category