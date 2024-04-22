import '../index.css';
import Bghome from '../../public/Bg-home.jpg';

export default function WelcomeSection() {
    return (
        <>
            <div className="flex justify-center items-center w-full h-dvh flex-col bg-cover bg-no-repeat bg-center text-white text-center" style={{ backgroundImage: `url(${Bghome})` }}>
                <h1 className="text-lg sm:text-4xl font-bold">Welcome To Our Website</h1>
                <p className="sm:text-lg">Lorem ipsum dolor sit ame consectetur.</p>
            </div>
        </>
    )
}