import Comments from '@/components/comments'
import FormComment from '@/components/form-comments'
import React from 'react'

const BlogDetailPage = () => {
    return (
        <div className='max-w-4xl mx-auto py-8'>
            <h1 className='text-3xl font-bold'>Post one</h1>
            <p>Written by: Cristian</p>
            <div className='mt-4'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum excepturi eius temporibus quas sint commodi cumque id explicabo earum deleniti! Nihil debitis a placeat blanditiis vero optio reiciendis cum quidem!
            </div>
            <Comments />
            <FormComment />
        </div>
    )
}

export default BlogDetailPage