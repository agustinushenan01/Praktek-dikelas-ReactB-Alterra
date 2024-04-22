import '../../index.css';

export default function AboutUs() {
    return (
        <>
            <>
                {/* About us */}
                <div className="bg-white flex flex-col lg:flex-row my-10 sm:justify-around mx-6">
                    <div className="flex flex-col font-jost mb-6 lg:mb-0 w-72">
                        <h3 className="font-semibold text-[#37517E] text-xl sm:text-2xl">
                            Arsha
                        </h3>
                        <a
                            href="https://maps.app.goo.gl/6GexdRU9TbmRFxok7"
                            target="_blank"
                            rel="noopener"
                            className="text-sm sm:text-base hover:text-[#292929] text-[#5E5E5E]"
                        >
                            A108 Adam Street
                        </a>
                        <a
                            href="https://maps.app.goo.gl/6GexdRU9TbmRFxok7"
                            target="_blank"
                            rel="noopener"
                            className="text-sm sm:text-base hover:text-[#292929] text-[#5E5E5E]"
                        >
                            New York, NY 535022
                        </a>
                        <a
                            href="https://maps.app.goo.gl/6GexdRU9TbmRFxok7"
                            target="_blank"
                            rel="noopener"
                            className="text-sm sm:text-base hover:text-[#292929] text-[#5E5E5E] mb-4"
                        >
                            United States
                        </a>
                        <a
                            href=""
                            className="text-[#5E5E5E] hover:text-[#292929] text-sm sm:text-base"
                        >
                            <span className="font-bold">Phone:</span> +1 5589 55488 55
                        </a>
                        <a
                            href=""
                            className="text-[#5E5E5E] hover:text-[#292929] text-sm sm:text-base"
                        >
                            <span className="font-bold">Email:</span> info@example.com
                        </a>
                    </div>
                    <div className="mb-6 flex flex-col w-72 lg:mb-0 font-open-sans">
                        <h4 className="font-bold text-[#37517E] font-jost">Useful Links</h4>
                        <a
                            href=""
                            className="text-[#5E5E5E] hover:text-[#292929] text-sm sm:text-base"
                        >
                            Home
                        </a>
                        <a
                            href=""
                            className="text-[#5E5E5E] hover:text-[#292929] text-sm sm:text-base"
                        >
                            About us
                        </a>
                        <a
                            href=""
                            className="text-[#5E5E5E] hover:text-[#292929] text-sm sm:text-base"
                        >
                            Services
                        </a>
                        <a
                            href=""
                            className="text-[#5E5E5E] hover:text-[#292929] text-sm sm:text-base"
                        >
                            Terms of service
                        </a>
                        <a
                            href=""
                            className="text-[#5E5E5E] hover:text-[#292929] text-sm sm:text-base"
                        >
                            Privacy policy
                        </a>
                    </div>
                    <div className="mb-6 flex flex-col w-72 lg:mb-0 font-open-sans">
                        <h4 className="font-bold text-[#37517E] font-jost">Our Services</h4>
                        <a
                            href=""
                            className="text-[#5E5E5E] hover:text-[#292929] text-sm sm:text-base"
                        >
                            Web Design
                        </a>
                        <a
                            href=""
                            className="text-[#5E5E5E] hover:text-[#292929] text-sm sm:text-base"
                        >
                            Web Development
                        </a>
                        <a
                            href=""
                            className="text-[#5E5E5E] hover:text-[#292929] text-sm sm:text-base"
                        >
                            Product Management
                        </a>
                        <a
                            href=""
                            className="text-[#5E5E5E] hover:text-[#292929] text-sm sm:text-base"
                        >
                            Marketing
                        </a>
                        <a
                            href=""
                            className="text-[#5E5E5E] hover:text-[#292929] text-sm sm:text-base"
                        >
                            Graphic Design
                        </a>
                    </div>
                    <div className="mb-6 flex flex-col w-72 lg:mb-0 font-open-sans">
                        <h4 className="font-bold text-[#37517E] font-jost">
                            Our Social Networks
                        </h4>
                        <p className="text-[#5E5E5E] text-sm sm:text-base">
                            Cras fermentum odio eu feugiat lide par naso tierra videa magna derita
                            valies
                        </p>
                        <div className="flex mt-5 rounded-full">
                            <div className="bg-[#47B2E4] w-9 h-9 mr-4 rounded-full" />
                            <div className="bg-[#47B2E4] w-9 h-9 mr-4 rounded-full" />
                            <div className="bg-[#47B2E4] w-9 h-9 mr-4 rounded-full" />
                            <div className="bg-[#47B2E4] w-9 h-9 mr-4 rounded-full" />
                            <div className="bg-[#47B2E4] w-9 h-9 rounded-full" />
                        </div>
                    </div>
                </div>
            </>

        </>
    )
}