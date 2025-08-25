import { easeOut, motion } from "motion/react"
import banner1 from "../../assets/banner1.jpg"
import banner2 from "../../assets/banner2.jpg"

const Banner = () => {
    return (
        <div className="hero bg-green-50 min-h-96 mt-4">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <motion.img
                        src={banner1}
                        animate={{y: [50, 100, 50]}}
                        transition={{duration: 10, repeat: Infinity}}
                        className="max-w-sm rounded-t-[40px] rounded-br-[40px] shadow-2xl w-80 border-b-4 border-l-4 border-green-500"
                    />
                    <motion.img
                        src={banner2}
                        animate={{x: [100, 150, 100]}}
                        transition={{duration: 10,
                            delay: 5, repeat: Infinity}}
                        className="max-w-sm rounded-t-[40px] rounded-br-[40px] shadow-2xl w-80 border-b-4 border-l-4 border-green-500"
                    />
                </div>
                <div className="flex-1 overflow-hidden">
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