import mongoose from 'mongoose'

export default async function connectMongoDB() {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log('이미 MongoDB에 연결되어 있습니다.')
      return
    }
    
    if (!process.env.MONGODB_URI) {
      throw new Error('MongoDB URI가 환경변수에 설정되지 않았습니다.')
    }

    await mongoose.connect(process.env.MONGODB_URI)
    console.log('MongoDB 연결 성공')
  } catch (error) {
    console.error('MongoDB 연결 실패:', error)
    throw error // 상위 레벨에서 에러 처리할 수 있도록 에러를 전파
  }
}