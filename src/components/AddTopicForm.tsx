'use client'

import { createTopic } from '@/actions/topicActions'
import React, { useState } from 'react'

export default function AddTopicForm() {
  const [description, setDescription] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await createTopic(description)
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
