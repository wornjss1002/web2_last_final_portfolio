import mongoose from 'mongoose'

export default async function connectMongoDB() {
  try {
    const uri = process.env.MONGODB_URI
    if (!uri) {
      throw new Error('MONGODB_URI가 환경 변수에 설정되지 않았습니다.')
    }

    if (mongoose.connection.readyState === 1) {
      return
    }

    await mongoose.connect(uri)
    console.log('MongoDB 연결 성공')
  } catch (error) {
    console.error('MongoDB 연결 실패:', error)
    throw error
  }
}