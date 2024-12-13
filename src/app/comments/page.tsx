'use client'

import { useState, useEffect } from 'react'

interface Comment {
  _id: string
  name: string
  content: string
  createdAt: string
}

export default function CommentsPage() {
  const [comments, setComments] = useState<Comment[]>([])
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  // 댓글 불러오기
  useEffect(() => {
    fetchComments()
  }, [])

  const fetchComments = async () => {
    const response = await fetch('/api/comments')
    const data = await response.json()
    setComments(data)
  }

  // 댓글 작성
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          content,
        }),
      })

      if (response.ok) {
        setName('')
        setContent('')
        fetchComments() // 댓글 목록 새로고침
      }
    } catch (error) {
      console.error('댓글 작성 실패:', error)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">댓글</h1>
      
      {/* 댓글 작성 폼 */}
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-md mb-2 text-gray-800"
          placeholder="Name"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded-md text-gray-800"
          placeholder="Comment"
          rows={3}
          required
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Submit
        </button>
      </form>

      {/* 댓글 목록 */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment._id} className="p-4 border rounded-md">
            <div className="font-bold">{comment.name}</div>
            <div className="mt-2">{comment.content}</div>
            <div className="text-sm text-gray-500 mt-1">
              {new Date(comment.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}