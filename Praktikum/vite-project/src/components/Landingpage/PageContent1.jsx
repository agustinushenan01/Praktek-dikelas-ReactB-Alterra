import image from '../../../public/Untitled.png'
import '../../index.css';

export default function PageContent1() {
    return (
        <>
            {/* Content 1 */}
            <div className="w-full h-dvh bg-[#37517E] flex flex-col sm:flex-row justify-center items-center px-6 py-9 sm:px-10 sm:py-12">
                <div>
                    <h1 className="text-white font-bold text-3xl lg:text-5xl mb-4 font-jost">
                        Better Solutions For Your Business
                    </h1>
                    <p className="text-white/60 font-medium text-xl lg:text-2xl mb-10 font-jost">
                        We are team of talented designers making websites with Bootstrap
                    </p>
                    <div className="text-white mb-6 font-open-sans">
                        <button
                            type="button"
                            className="bg-[#47B2E4] hover:bg-[rgb(50,176,226)] px-4 py-2 sm:mr-4 rounded-full sm:px-6"
                        >
                            Get Started
                        </button>
                        <button
                            type="button"
                            className="hover:bg-[#47B2E4] px-4 py-2 mr-4 rounded-full sm:px-6"
                        >
                            Watch Video
                        </button>
                    </div>
                </div>
                <div>
                    <img
                        src={image}
                        alt="Image"
                        className="w-52 sm:w-72 lg:w-full"
                    />
                </div>
            </div>
        </>
    )
}