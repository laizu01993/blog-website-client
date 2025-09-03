const TipsAndTricks = () => {
    return (
        <div className="py-12 px-4 bg-green-50 rounded-lg mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Tips & Tricks</h2>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-white rounded-xl shadow-md">
                    <h3 className="font-semibold mb-2">Writing Tip</h3>
                    <p className="text-gray-600 text-sm">Use short paragraphs to improve readability for your blog readers.</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-md">
                    <h3 className="font-semibold mb-2">SEO Tip</h3>
                    <p className="text-gray-600 text-sm">Include relevant keywords in your headings to boost search rankings.</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-md">
                    <h3 className="font-semibold mb-2">Design Tip</h3>
                    <p className="text-gray-600 text-sm">Use consistent colors and spacing for a professional look.</p>
                </div>
            </div>
        </div>

    );
};

export default TipsAndTricks;