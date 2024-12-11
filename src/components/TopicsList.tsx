'use client'

import { Topic } from '@/types/topic'
import AddTopicForm from '@/components/AddTopicForm'
interface TopicsListProps {
  topics: Topic[]
}

export default function TopicsList({ topics }: TopicsListProps) {
  return (
    <>
      <AddTopicForm />
      {topics.map((topic: Topic) => (
        <div
          key={topic._id}
          className="p-4 border border-slate-300 my-3 flex justify-between items-start gap-5"
        >
          <div>
            <div> {topic.description} </div>
            <div className="flex gap-4">
              <p>Created: {new Date(topic.createdAt).toLocaleDateString()}</p>
              <p>Updated: {new Date(topic.updatedAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
