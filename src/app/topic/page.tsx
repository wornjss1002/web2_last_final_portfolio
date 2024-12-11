import { getAllTopics } from '@/actions/topicActions'
import TopicsList from '@/components/TopicsList'
import { Suspense } from 'react'

export default async function Home() {
  const { topics } = await getAllTopics()

  return (
    <div>
      <h1 className="text-3xl font-bold">Comment</h1>
      <Suspense fallback={<div>로딩 중...</div>}>
        <TopicsList topics={topics} />
      </Suspense>
    </div>
  )
}
