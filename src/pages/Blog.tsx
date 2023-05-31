import CreatePost from "./blog/Components/CreatePost";
import PostList from "./blog/Components/PostList";


export default function Blog() {
  return (
    <div className='p-5'>
      <CreatePost />
      <PostList />
    </div>
  )
}
