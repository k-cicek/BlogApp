import Comments from '@/components/comments'
import FormComment from '@/components/form-comments'
import prisma from '@/lib/db'
import { FC } from 'react';

interface BlogDetailPageProps {
    params: {
        id: string
    }
}


const BlogDetailPage: FC<BlogDetailPageProps> = async ({ params }) => {
    const posts = await prisma.post.findFirst({
        where: {
            id: params.id
        },
        include: {
            author: true
        }
    });

    console.log(posts);
    return (
        <div className='max-w-4xl mx-auto py-8'>
            <h1 className='text-3xl font-bold'>{posts?.title}</h1>
            <p>{posts?.author?.name}</p>
            <div className='mt-4'>
                {posts?.content}
            </div>
            <Comments postId={params.id} />
            <FormComment postId={params.id} />
        </div>
    )
}

export default BlogDetailPage