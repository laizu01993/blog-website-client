const FollowBlog = () => {
    return (
        <div className="py-12 px-4 bg-gray-50 rounded-lg mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Follow Our Blog?</h2>
            <div className="grid md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md">
                    <span className="text-green-400 text-3xl mb-2">📚</span>
                    <h3 className="font-semibold">Expert Tips</h3>
                    <p className="text-gray-600 text-sm">We provide high-quality, actionable tips for every reader.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md">
                    <span className="text-green-400 text-3xl mb-2">⚡</span>
                    <h3 className="font-semibold">Fast Updates</h3>
                    <p className="text-gray-600 text-sm">Stay updated with the latest blogs and trends.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md">
                    <span className="text-green-400 text-3xl mb-2">💡</span>
                    <h3 className="font-semibold">Creative Ideas</h3>
                    <p className="text-gray-600 text-sm">Our blogs inspire creativity and innovative thinking.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md">
                    <span className="text-green-400 text-3xl mb-2">🌟</span>
                    <h3 className="font-semibold">Trusted Sources</h3>
                    <p className="text-gray-600 text-sm">We research thoroughly to bring reliable and accurate info.</p>
                </div>
            </div>
        </div>

    );
};

export default FollowBlog;