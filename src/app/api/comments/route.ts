import { NextResponse } from 'next/server'
import { MongoClient, ObjectId } from 'mongodb'

const uri = process.env.MONGODB_URI!
const client = new MongoClient(uri)

export async function GET() {
  try {
    await client.connect()
    const database = client.db('your-database-name')
    const comments = database.collection('comments')
    
    const result = await comments.find().sort({ createdAt: -1 }).toArray()
    
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json({ error: '댓글을 불러오는데 실패했습니다.' }, { status: 500 })
  } finally {
    await client.close()
  }
}

export async function POST(request: Request) {
  try {
    const { name, content } = await request.json()
    
    await client.connect()
    const database = client.db('your-database-name')
    const comments = database.collection('comments')
    
    const result = await comments.insertOne({
      name,
      content,
      createdAt: new Date(),
    })
    
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json({ error: '댓글 작성에 실패했습니다.' }, { status: 500 })
  } finally {
    await client.close()
  }
}