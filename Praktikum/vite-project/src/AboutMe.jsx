import './index.css';
import PeopleImg from '../public/people.jpg';
// import './assets/css/AboutMe.css';

export default function AboutMe() {
    return (
        <>
            <div id='AboutMe' className='flex flex-col justify-center items-center w-full h-auto px-1 py-6 sm:py-10 sm:px-7 bg-gradient-to-b from-[#73737d] to-violet-500'>
                <div className=' flex flex-col bg-white shadow py-8 rounded-md w-[95%] sm:w-4/5 lg:w-3/5'>
                    <h2 className='text-center text-xl sm:text-3xl font-bold mb-10'>About Us</h2>
                    {/* <div className='Bg-Aboutus mb-10'></div> */}
                    <img className='mb-10 w-full h-[100px] bg-cover bg-center bg-no-repeat sm:h-[300px] lg:h-[600px]' src={PeopleImg} alt="Image People" />
                    <div className='px-4'>
                        <p className='first-letter:ml-4  sm:first-letter:ml-10'>People are social beings who live together in groups. They are connected by various factors, such as culture, traditions, and values. Interactions between people form societies and drive the advancement of civilization.</p>
                        <br />
                        <p className='first-letter:ml-4 sm:first-letter:ml-10'>Each individual possesses unique characteristics and potential. Human diversity serves as a source of strength and inspiration in building a better world. Mutual respect and appreciation for differences are key to realizing a harmonious life.</p>
                        <br />
                        <p className='first-letter:ml-4 sm:first-letter:ml-10'>In this digital age, humans are faced with various new opportunities and challenges. Technology allows people to connect globally, yet it can also trigger disparities and isolation. A balance between technology utilization and meaningful social interaction is needed to create a more humanistic future.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
