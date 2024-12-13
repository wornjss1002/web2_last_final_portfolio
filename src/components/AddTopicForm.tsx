'use client'

import { createTopic } from '@/actions/topicActions'
import React, { useState } from 'react'

export default function AddTopicForm() {
  const [description, setDescription] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await createTopic(description)
      // 폼 제출 후 입력 필드 초기화
      setDescription('')
      // 페이지 새로고침하여 최신 데이터 가져오기
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <textarea
        className="border border-slate-500 p-4 h-32 text-black"
        placeholder="input your comment"
        value={description}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setDescription(e.target.value)
        }
      />
      <button
        className="bg-green-800 text-white font-bold px-6 py-3 w-fit rounded-md"
        type="submit"
      >
        Add Topic
      </button>
    </form>
  )
}
