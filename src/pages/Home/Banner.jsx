import { easeOut, motion } from "motion/react"
const Banner = () => {
    return (
        <div className="hero bg-green-50 min-h-96 mt-4">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
                <div className="flex-1">
                    <motion.h1 className="text-4xl md:text-5xl font-extrabold text-gray-800"
                        animate={{ x: 50 }}
                        transition={{duration: 2, delay: 1, ease: easeOut, repeat: Infinity}}>
                        Welcome to <span className="text-green-600">BlogSphere ✨</span>
                    </motion.h1>
                    <p className="text-gray-800 text-lg py-4">
                        Where stories come alive, ideas connect, and your words can inspire the world.Discover blogs that spark new ideas and connect hearts 💡.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;