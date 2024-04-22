import '../../index.css';
export default function PageContent2() {
    return (
        <>
            <>
                {/* Content 2 */}
                <div className="w-full bg-[#F3F5FA] flex flex-col text-center px-2 py-7 sm:py-10">
                    <h2 className="font-jost text-[#37517E] font-semibold text-xl sm:text-2xl mb-5">
                        Join Our Newsletter
                    </h2>
                    <p className="text-sm sm:text-base font-open-sans text-[#444444] mb-4">
                        Tamen quem nulla quae legam multos aute sint culpa legam noster magna
                    </p>
                    <div className="static flex mx-auto text-center justify-center">
                        <form action="">
                            <input
                                type="text"
                                className="focus:outline-none focus:ring focus:ring-[#47B2E4] shadow rounded-full font-open-sans px-5 py-2 w-72 sm:w-96"
                            />
                            <button
                                type="button"
                                className="font-open-sans text-white bg-[#47B2E4] hover:bg-[rgb(50,176,226)] drop-shadow-[0_2px_15px_rgba(0, 0, 0, 0.1)] rounded-full px-5 py-2 absolute z-10 -ml-28 sm:-ml-28"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </>

        </>
    )
}