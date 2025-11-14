import { Check } from "lucide-react";
import aboutImage from '../../assets/alazar-kassahun-GV9_jUGReBo-unsplash.jpg';

function About() {
  return (
    <section className="about-section py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <img
            src={aboutImage}
            alt="About Posh Nail Hub"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Posh Nail Hub</h2>
          <p className="text-lg mb-6 text-gray-700">
            At Posh Nail Hub, we are dedicated to providing top-notch nail care services in a luxurious and relaxing environment. Our team of skilled nail technicians is passionate about delivering exceptional results while ensuring the utmost hygiene and safety standards.
          </p>
          <ul className="list-none space-y-4">
            <li className="flex items-start">
              <Check className="w-6 h-6 text-pink-500 mr-3 mt-1" />
              <span className="text-gray-700">Experienced and certified nail technicians.</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-pink-500 mr-3 mt-1" />
              <span className="text-gray-700">Wide range of nail services including manicures, pedicures, nail art, and more.</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-pink-500 mr-3 mt-1" />
              <span className="text-gray-700">Use of high-quality, non-toxic nail products.</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-pink-500 mr-3 mt-1" />
              <span className="text-gray-700">A relaxing and hygienic salon environment.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default About;