import { FaMonument, FaScroll, FaAnkh, FaBookDead } from "react-icons/fa";
import { GiEgyptianProfile, GiStonePath } from "react-icons/gi";

const About = () => {
  return (
    <section className="py-16 px-4 bg-stone-900 text-amber-200">
      {/* Header with Sphinx Guardians */}
      <div className="max-w-4xl mx-auto text-center mb-12 relative">
        <GiEgyptianProfile className="absolute left-0 top-1/2 transform -translate-y-1/2 text-amber-600 opacity-80 text-3xl" />
        <h2 className="text-4xl font-bold mb-4 font-serif tracking-wide">
          𓂀 <span className="mx-2">Chronicles of the Pharaoh</span> 𓂀
        </h2>
        <GiEgyptianProfile className="absolute right-0 top-1/2 transform -translate-y-1/2 text-amber-600 opacity-80 text-3xl scale-x-[-1]" />
        <p className="text-lg italic text-amber-400">
          Carved in stone, whispered by the winds of the Nile
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Pharaoh's Legacy */}
        <div className="bg-stone-800 p-6 rounded-lg border-2 border-amber-700 shadow-xl">
          <h3 className="text-2xl font-bold mb-6 flex items-center font-serif text-amber-400">
            <FaAnkh className="mr-2 text-amber-500" /> Divine Lineage
          </h3>
          <div className="space-y-4">
            <p className="text-amber-300">
              𓆣 I am <span className="font-bold text-amber-400">Neb-Kheperu-Ra</span>, 
              chosen of Ra, whose name endures in the annals of eternity. 
            </p>
            <p className="text-amber-300">
              𓋹 My reign began when the Nile flooded twice in one season, 
              a sign from Osiris himself.
            </p>
            <div className="flex items-start mt-6 space-x-4">
              <GiEgyptianProfile className="text-amber-500 text-3xl flex-shrink-0" />
              <div>
                <h4 className="font-bold text-amber-300">Sacred Titles</h4>
                <ul className="mt-2 space-y-2 text-amber-400">
                  <li className="flex items-center">
                    <span className="mr-2">𓂓</span> High Priest of Amun
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">𓋾</span> Builder of the Third Pyramid
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">𓁍</span> Vanquisher of the Sea Peoples
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Achievements (Hieroglyphic Tablets) */}
        <div className="bg-stone-800 p-6 rounded-lg border-2 border-amber-700 shadow-xl">
          <h3 className="text-2xl font-bold mb-6 flex items-center font-serif text-amber-400">
            <FaBookDead className="mr-2 text-amber-500" /> Eternal Deeds
          </h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <FaMonument className="text-amber-500 text-2xl mt-1" />
              <div>
                <h4 className="font-bold text-amber-300">Monuments Raised</h4>
                <p className="text-amber-400">
                  𓉐 7 temples along the Nile <br />
                  𓊹 1 pyramid (unfinished) <br />
                  𓍯 12 obelisks bearing my name
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaScroll className="text-amber-500 text-2xl mt-1" />
              <div>
                <h4 className="font-bold text-amber-300">Sacred Knowledge</h4>
                <p className="text-amber-400">
                  𓂧 Deciphered the dreams of the Sphinx <br />
                  𓆓 Wrote 44 spells for the Book of the Dead <br />
                  𓃭 Taught the art of mummification
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-amber-800">
              <h4 className="font-bold text-amber-300 mb-3">Current Quest</h4>
              <p className="text-amber-400 flex items-start">
                <span className="mr-2 text-xl">𓁹</span>
                Seeking the lost Scroll of Thoth to restore Ma'at to the kingdom.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Footer */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <GiStonePath className="mx-auto text-amber-700 opacity-50 text-4xl" />
        <p className="mt-4 text-amber-600 italic">
          "He who knows the words of power shall walk through the underworld unscathed."
        </p>
      </div>
    </section>
  );
};

export default About;