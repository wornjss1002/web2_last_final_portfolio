'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'

interface Topic {
  _id: string
  description: string
  createdAt: string
  updatedAt: string
}

interface Comment {
  _id: string;
  content: string;
  createdAt: string;
}

export default function TopicsList() {
  const [topics, setTopics] = useState<Topic[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    async function fetchTopics() {
      try {
        const res = await fetch('/api/topics')
        if (!res.ok) throw new Error('Failed to fetch topics')
        const data = await res.json()
        setTopics(data.topics)
      } catch (error) {
        console.error('Error loading topics: ', error)
        setError('Failed to load topics')
      } finally {
        setLoading(false)
      }
    }

    fetchTopics()
  }, [])

  useEffect(() => {
    // 댓글 목록 가져오기
    async function fetchComments() {
      try {
        const res = await fetch('/api/comments')
        if (!res.ok) throw new Error('Failed to fetch comments')
        const data = await res.json()
        setComments(data.comments)
      } catch (error) {
        console.error('Error loading comments: ', error)
      }
    }

    fetchComments()
  }, [])

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: comment }),
      })

      if (!res.ok) {
        throw new Error('댓글 작성에 실패했습니다')
      }

      const data = await res.json()
      setComments(prev => [...prev, data.comment])
      setComment('') // 입력 폼 초기화
    } catch (error) {
      console.error('댓글 작성 중 오류 발생:', error)
    }
  }

  return (
    <div className="space-y-6">
      {/* 댓글 입력 폼 */}
      <div className="border border-slate-300 p-4 rounded-lg">
        <form onSubmit={handleSubmitComment}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="댓글을 입력하세요..."
            rows={3}
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            댓글 작성
          </button>
        </form>
      </div>

      {/* 댓글 목록 */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment._id} className="border border-slate-200 p-4 rounded-lg">
            <p>{comment.content}</p>
            <p className="text-sm text-gray-500 mt-2">
              작성일: {new Date(comment.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>

      {/* 토픽 목록 */}
      {topics.map((topic: Topic) => (
        <div
          key={topic._id}
          className="border border-slate-300 my-3 p-4"
        >
          <div className="flex items-start justify-between gap-5">
            <div>
              <div>{topic.description}</div>
              <div className="flex gap-4">
                <p>Created: {topic.createdAt}</p>
                <p>Updated: {topic.updatedAt}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link href={`/editTopic/${topic._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}