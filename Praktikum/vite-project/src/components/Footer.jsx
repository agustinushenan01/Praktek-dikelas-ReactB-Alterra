import '../index.css';

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <footer className="bg-[#37517E] flex-wrap text-white flex justify-between py-5 px-4 sm:py-6 sm:px-7 lg:py-7 lg:px-10 text-sm font-open-sans">
                <div>
                    <p>
                        © Copyright <span className="font-bold">Arsha.</span> All Rights
                        Reserved
                    </p>
                </div>
                <div>
                    <div>
                        Designed by <span className="text-[#47B2E4]">BootstrapMade</span>
                        <p />
                    </div>
                </div>
            </footer>
        </>
    )
}