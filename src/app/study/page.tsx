export default function StudyPage() {
    return (
        <div className="min-h-screen from-gray-50 to-white">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-12 text-center text-gray-800 relative">
                    <span className="text-gray-100">
                        Study & Presentations
                    </span>
                </h1>

                <section className="mb-16">
                    <h2 className="text-gray-200 text-2xl font-semibold mb-8 pb-2 border-b-2 border-blue-200 flex items-center gap-2">
                        <span className="text-blue-600">🌐</span>
                        Web
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                            <div className="p-6">
                                <h3 className="text-xl text-gray-800 font-semibold mb-3 flex items-center gap-2">
                                    <span className="text-blue-500">📑</span>
                                    PHP, MySQL
                                </h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                        2024.04.03
                                    </span>
                                    <a 
                                        href="/pdf/PHP, MySQL_천재권.pdf" 
                                        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium group"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        자료 보기
                                        <span className="transform transition-transform group-hover:translate-x-1">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                            <div className="p-6">
                                <h3 className="text-xl text-gray-800 font-semibold mb-3 flex items-center gap-2">
                                    <span className="text-blue-500">📑</span>
                                    XSS
                                </h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                        2024.05.07
                                    </span>
                                    <a 
                                        href="/pdf/XSS.pdf" 
                                        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium group"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        자료 보기
                                        <span className="transform transition-transform group-hover:translate-x-1">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                            <div className="p-6">
                                <h3 className="text-xl text-gray-800 font-semibold mb-3 flex items-center gap-2">
                                    <span className="text-blue-500">📑</span>
                                    Command Injection
                                </h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                        2024.05.30
                                    </span>
                                    <a 
                                        href="/pdf/command_injection.pdf" 
                                        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium group"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        자료 보기
                                        <span className="transform transition-transform group-hover:translate-x-1">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                            <div className="p-6">
                                <h3 className="text-xl text-gray-800 font-semibold mb-3 flex items-center gap-2">
                                    <span className="text-blue-500">📑</span>
                                    CSP
                                </h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                        2024.07.24
                                    </span>
                                    <a 
                                        href="/pdf/CSP.pdf" 
                                        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium group"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        자료 보기
                                        <span className="transform transition-transform group-hover:translate-x-1">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                            <div className="p-6">
                                <h3 className="text-xl text-gray-800 font-semibold mb-3 flex items-center gap-2">
                                    <span className="text-blue-500">📑</span>
                                    CSS Injection
                                </h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                        2024.08.07
                                    </span>
                                    <a 
                                        href="/pdf/css_injection.pdf" 
                                        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium group"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        자료 보기
                                        <span className="transform transition-transform group-hover:translate-x-1">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-gray-200 text-2xl font-semibold mb-8 pb-2 border-b-2 border-purple-200 flex items-center gap-2">
                        <span className="text-purple-600">📱</span>
                        Mobile
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                            <div className="p-6">
                                <h3 className="text-xl text-gray-800 font-semibold mb-3 flex items-center gap-2">
                                    <span className="text-purple-500">📱</span>
                                    Android Function Hooking
                                </h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                        2024.07.11
                                    </span>
                                    <a 
                                        href="/pdf/Android_Function_Hooking.pdf" 
                                        className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-800 font-medium group"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        자료 보기
                                        <span className="transform transition-transform group-hover:translate-x-1">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                            <div className="p-6">
                                <h3 className="text-xl text-gray-800 font-semibold mb-3 flex items-center gap-2">
                                    <span className="text-purple-500">📱</span>
                                    Deep Link
                                </h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                        2024.08.21
                                    </span>
                                    <a 
                                        href="/pdf/Deep_Link.pdf" 
                                        className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-800 font-medium group"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        자료 보기
                                        <span className="transform transition-transform group-hover:translate-x-1">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                            <div className="p-6">
                                <h3 className="text-xl text-gray-800 font-semibold mb-3 flex items-center gap-2">
                                    <span className="text-purple-500">📱</span>
                                    Broadcast Receiver
                                </h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                        2024.10.01
                                    </span>
                                    <a 
                                        href="/pdf/Broadcast_Receiver.pdf" 
                                        className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-800 font-medium group"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        자료 보기
                                        <span className="transform transition-transform group-hover:translate-x-1">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                            <div className="p-6">
                                <h3 className="text-xl text-gray-800 font-semibold mb-3 flex items-center gap-2">
                                    <span className="text-purple-500">📱</span>
                                    Content Provider
                                </h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                        2024.10.29
                                    </span>
                                    <a 
                                        href="/pdf/Content_Provider.pdf" 
                                        className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-800 font-medium group"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        자료 보기
                                        <span className="transform transition-transform group-hover:translate-x-1">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                            <div className="p-6">
                                <h3 className="text-xl text-gray-800 font-semibold mb-3 flex items-center gap-2">
                                    <span className="text-purple-500">📱</span>
                                    Smali Code
                                </h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                        2024.11.20
                                    </span>
                                    <a 
                                        href="/pdf/Smali_Code.pdf" 
                                        className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-800 font-medium group"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        자료 보기
                                        <span className="transform transition-transform group-hover:translate-x-1">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}