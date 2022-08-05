import Layout from "../components/Layout";
import Error from "./_error";

const GitHub = (props) => {
    if(props.statusCode){
        return <Error statusCode={ props.statusCode } />
    }


    return (
        <Layout>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h1>{ props.user.name }</h1>
                        <img src={ props.user.avatar_url } />
                        <p>{ props.user.bio }</p>
                        <a href={ props.user.blog} target="_blank" className="btn btn-info my-2"> My Blog </a>
                        <a href={ props.user.html_url} target="_blank" className="btn btn-outline-info"> Go to GitHub </a>
                    </div>
                </div>
            </div>
        </Layout>
    )    
}

export async function getServerSideProps() {
    const res= await fetch('https://api.github.com/users/maquinoBSC');
    const data = await res.json();
    console.log(data);

    const statusCode = res.status > 200 ? res.status : false;

    return {
        props: {
            user: data,
            statusCode,
        }
    }
}

export default GitHub;