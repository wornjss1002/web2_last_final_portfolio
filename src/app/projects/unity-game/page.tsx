export default function UnityGameProject() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Unity X Android Game Development</h1>
            
            {/* 메인 콘텐츠 영역 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 왼쪽: 플레이 영상 섹션 */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">플레이 영상</h2>
                    <div className="space-y-4">
                        <div className="relative aspect-[9/16] max-w-[370px] mx-auto">
                            <video 
                                className="rounded-lg w-full h-full object-cover"
                                controls
                                playsInline
                                preload="metadata"
                            >
                                <source src="/trash_flight.mp4" type="video/mp4" />
                                브라우저가 비디오 재생을 지원하지 않습니다.
                            </video>
                        </div>
                    </div>
                </section>

                {/* 오른쪽: 프로젝트 정보 섹션 */}
                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">프로젝트 개요</h2>
                        <p className="text-gray-">
                            Unity 엔진을 사용하여 개발한 안드로이드 모바일 미니 게임입니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">사용 기술</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Unity Engine</li>
                            <li>C#</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}