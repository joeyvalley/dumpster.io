import { useState } from "react"
import { createPost } from "../api/posts"

export default function NewPost() {
  const [username, setUsername] = useState('')
  const [post, setPost] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const data = await createPost(post, username)
    console.log(data);
  }

  return (
    <div>
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {/* Username */}
          <div>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Twuut */}
          <div>
            <label>Post</label>
            <textarea 
              value={post}
              onChange={(e) => setPost(e.target.value)}></textarea>
          </div>
        </div>

        <button>Submit</button>
      </form>
    </div>
  )
}