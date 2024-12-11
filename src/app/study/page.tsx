export default function StudyPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Study & Presentations</h1>

            {/* Web Development 섹션 */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 pb-2 border-b-2 border-gray-200">
                    Web Development
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* 발표 자료 카드 예시 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6">
                            <h3 className="text-xl text-gray-800 font-semibold mb-2">발표 제목</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">2024.03.20</span>
                                <a 
                                    href="/Android_Function_Hooking.pdf" 
                                    className="text-blue-600 hover:text-blue-800 font-medium"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    자료 보기 →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile App Development 섹션 */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 pb-2 border-b-2 border-gray-200">
                    Mobile App Development
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* 발표 자료 카드 컴포넌트로 분리하면 좋을 것 같습니다 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6">
                            <h3 className="text-xl text-gray-800 font-semibold mb-2">발표 제목</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">2024.03.20</span>
                                <a 
                                    href="#" 
                                    className="text-blue-600 hover:text-blue-800 font-medium"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    자료 보기 →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 추가 카테고리가 필요하다면 같은 형식으로 섹션을 추가할 수 있습니다 */}
        </div>
    );
}