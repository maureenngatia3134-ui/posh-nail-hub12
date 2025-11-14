import bgHero from '../../assets/theclan-nailsalon-t91cj5p3a-o-unsplash.jpg';
import Logo from '../common/Logo'

function Hero() {
  return (
  <section
      className="relative bg-cover bg-center bg-no-reapeat min-h-screen w-full flex flex-col justify-center items-center text-white pb-20"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      {/* top bar: Logo on left,nav on right */}
      <div className="absolute top-6 left-0 w-full flex justify-between items-center p-4 text-white z-100">
        <Logo />
        <nav>
          <ul className="flex space-x-10 text-lg md:text-xl font-medium text-white">
            <li><a href="/" className='hover:text-yellow-400 transition'>Home</a> </li>
            <li><a href="/services" className='hover:text-yellow-400 transition'>Services</a></li>
            <li><a href="/about" className='hover:text-yellow-400 transition'>About Us</a></li>
            <li><a href="/contact" className='hover:text-yellow-400 transition'>Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center px-4">
        <Logo />
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Posh Nail Hub</h2>
        <p className="text-lg md:text-2xl mb-8">Your Ultimate Destination for Luxurious Nail Care</p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300">
          Book an Appointment
        </button>
      </div>
    </section>

  );
}
export default Hero;
