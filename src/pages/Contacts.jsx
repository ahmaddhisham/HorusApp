import { FaScroll, FaMonument, FaRing, FaWater } from "react-icons/fa";
import { GiEgyptianBird, GiStonePath, GiAnubis } from "react-icons/gi";

const Contact = () => {
  return (
    <section className="py-12 px-4 bg-stone-900 text-amber-200">
      {/* Decorative Header with Anubis Guardians */}
      <div className="max-w-4xl mx-auto text-center mb-12 relative">
        <GiAnubis className="absolute left-0 top-1/2 transform -translate-y-1/2 text-amber-600 opacity-80 text-3xl" />
        <h2 className="text-4xl font-bold mb-4 font-serif tracking-wide">
          𓂀 <span className="mx-2">Speak to the Pharaoh</span> 𓂀
        </h2>
        <GiAnubis className="absolute right-0 top-1/2 transform -translate-y-1/2 text-amber-600 opacity-80 text-3xl rotate-y-180" />
        <p className="text-lg italic text-amber-400">
          Carve your words into the walls of eternity
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Contact Methods (Tomb-Inspired) */}
        <div className="bg-stone-800 p-6 rounded-lg border-2 border-amber-700 shadow-xl">
          <h3 className="text-2xl font-bold mb-6 flex items-center font-serif text-amber-400">
            <FaScroll className="mr-2 text-amber-500" /> Sacred Channels
          </h3>

          <div className="space-y-6">
            {/* Carrier Pigeon (Email) */}
            <div className="flex items-start space-x-4">
              <GiEgyptianBird className="text-amber-500 text-2xl mt-1" />
              <div>
                <h4 className="font-bold text-amber-300">By Celestial Ibis</h4>
                <p className="text-amber-400">pharaoh@duat.net</p>
              </div>
            </div>

            {/* Pyramid Address */}
            <div className="flex items-start space-x-4">
              <FaMonument className="text-amber-500 text-2xl mt-1" />
              <div>
                <h4 className="font-bold text-amber-300">At the Sphinx's Gaze</h4>
                <p className="text-amber-400">West Bank, Thebes</p>
              </div>
            </div>

            {/* Golden Ring (Phone) */}
            <div className="flex items-start space-x-4">
              <FaRing className="text-amber-500 text-2xl mt-1" />
              <div>
                <h4 className="font-bold text-amber-300">Scarab Whisper</h4>
                <p className="text-amber-400">+20 𓆼𓆼𓆼𓆼𓆼𓆼</p>
              </div>
            </div>

            {/* Nile River (Social Media) */}
            <div className="flex items-start space-x-4">
              <FaWater className="text-amber-500 text-2xl mt-1" />
              <div>
                <h4 className="font-bold text-amber-300">Follow the River</h4>
                <div className="flex space-x-3 mt-2">
                  <a href="#" className="text-amber-500 hover:text-amber-300 text-xl">
                    𓃭
                  </a>
                  <a href="#" className="text-amber-500 hover:text-amber-300 text-xl">
                    𓊵
                  </a>
                  <a href="#" className="text-amber-500 hover:text-amber-300 text-xl">
                    𓋹
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Hieroglyphic Form (Dark Papyrus) */}
        <div className="bg-stone-800 p-6 rounded-lg border-2 border-amber-700 shadow-xl">
          <h3 className="text-2xl font-bold mb-6 flex items-center font-serif text-amber-400">
            𓃭 <span className="mx-2">Inscribe Your Demand</span> 𓃭
          </h3>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-bold mb-1 text-amber-300">
                Your Cartouche
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded border border-amber-700 bg-stone-900 text-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-600 placeholder-amber-600"
                placeholder="𓄿𓃭𓅓𓅱"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-bold mb-1 text-amber-300">
                Eye of Horus Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded border border-amber-700 bg-stone-900 text-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-600 placeholder-amber-600"
                placeholder="𓆓𓇌𓏏𓉐@𓊪𓇌𓂋𓇌.𓆎"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-bold mb-1 text-amber-300">
                Words for the Gods
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 rounded border border-amber-700 bg-stone-900 text-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-600 placeholder-amber-600"
                placeholder="𓋴𓇋𓈖𓂧 𓂧𓄿𓇋𓈖𓎡𓇌 𓅓𓂝 𓊪𓏏𓇯..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-amber-800 hover:bg-amber-700 text-amber-100 font-bold rounded transition duration-200 flex items-center justify-center border border-amber-700 shadow-lg"
            >
              <GiAnubis className="mr-2" /> Seal with Anubis' Mark
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;