import postData from "../data/posts.json";

export default function PostsByLocation() {
  return (
    <div className="postsByLocation">
        <h4>Posts By Location</h4>
        <div className= "location" >
            <h5>Locations</h5>
            {postData.map((post) => {
                return (
                    <ul>
                        <li>{post.location}</li>
                    </ul>
                )
            })}
        </div>
        <div className="countOfPosts">
            <h5>Posts</h5>
            {postData.map((post) => {
                return (
                    <ul>
                        <article>1</article>
                    </ul>
                )
            })}
        </div>

    </div>
    )
}