
import postData from "../data/posts.json";
console.log(postData)

export default function DisplayPosts() {
    return (
        <div className= "listOfPosts">
            {postData.map((post)=> {
                return <>
                <div className="post" key= {post.id}>
                <img src={post.image}/>
                <h3>{post.title}</h3>
                <h5>{post.location}</h5>
                <p>{post.content}</p>
                <a className="btn btn-outline-primary">Go to post</a>
            </div>
            </>
            })}
        </div>
    )
}