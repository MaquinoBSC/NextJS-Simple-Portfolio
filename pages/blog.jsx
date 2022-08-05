import Link from "next/link";
import Layout from "../components/Layout";
import { posts } from '../profile';

const PostCard = ({ post }) => {
    return (
        <div className="col-md-4">
            <div className="card my-3">
                <div className="overflow">
                    <img src={ post.imageURL } className="card-img-top" />
                </div>
                <div className="card-body">
                    <h1>{ post.title }</h1>
                    <p>{ post.content }</p>
                </div>
                <Link href={ `/posts?title=${post.title}`} as={`/posts/${post.title}`}>
                    <button className="btn btn-outline-info my-3 mx-4">Read</button>
                </Link>
            </div>
        </div>
    )
}

const Blog = () => (
    <Layout footer={ false } title={"My Blog"} dark>
        <div className="row">
            {
                posts.map((post, idx) => (
                    <PostCard post={ post } key={ idx } />
                ))
            }
        </div>
    </Layout>
)

export default Blog;