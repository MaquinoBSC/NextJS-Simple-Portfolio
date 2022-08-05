import { useRouter } from 'next/router';
import Layout from "../components/Layout";
import { posts } from '../profile.js';

const Posts = () => {
    const router = useRouter();
    const { title } = router.query;

    const postFiltred = posts.filter(post => post.title === title)[0];
    console.log(postFiltred);

    return (
        <Layout footer={ false } title={ postFiltred.title }>
            <div className="text-center">
                <img src={ postFiltred.imageURL} className="img-fluid mt-4" width={'350px'} />
                <p className='mt-4'>{ postFiltred.content}</p>
            </div>
        </Layout>
    )
}

export default Posts;