import { FaEye, FaEyeSlash, FaAnkh, FaScroll } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig'; // Adjust path as needed

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate('/'); // Redirect to homepage after successful login
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-stone-900 text-amber-200 flex items-center justify-center p-4">
      {/* Sandstone Tablet Container */}
      <div className="w-full max-w-md bg-stone-800 rounded-lg border-2 border-amber-700 shadow-xl overflow-hidden">
        {/* Hieroglyphic Header */}
        <div className="bg-amber-900 py-4 px-6 flex items-center">
          <FaAnkh className="text-amber-300 text-2xl mr-2" />
          <h2 className="text-2xl font-serif font-bold tracking-wider">
            𓂀 Enter the Sacred Chambers 𓂀
          </h2>
        </div>

        <div className="p-6">
          {error && (
            <div className="mb-4 p-2 bg-red-900 text-amber-100 rounded text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email (Eye of Horus) */}
            <div>
              <label htmlFor="email" className="block font-serif text-amber-300 mb-2">
                <span className="flex items-center">
                  𓁹 <span className="ml-2">Eye of Horus Address</span>
                </span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-stone-700 border border-amber-600 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-100 placeholder-amber-500"
                  placeholder="𓆓𓇌𓏏𓉐@𓊪𓇌𓂋𓇌.𓆎"
                  required
                />
              </div>
            </div>

            {/* Password (Scroll of Secrets) */}
            <div>
              <label htmlFor="password" className="block font-serif text-amber-300 mb-2">
                <span className="flex items-center">
                  <FaScroll className="mr-2" /> Scroll of Secrets
                </span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-stone-700 border border-amber-600 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-100 pr-10"
                  placeholder="𓈖𓅓𓏏𓂋𓅱𓏏𓉐"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-400 hover:text-amber-300"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-amber-700 hover:bg-amber-600 text-amber-100 font-serif font-bold rounded-lg transition duration-200 flex items-center justify-center border border-amber-600 shadow-lg disabled:opacity-70"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Deciphering...
                </>
              ) : (
                '𓋴𓇌𓏏𓂋𓏏𓄿𓈖 Unseal the Gates'
              )}
            </button>

            {/* Footer Links */}
            <div className="pt-4 text-center text-amber-400 font-serif">
              <p className="text-sm">
                Not yet inscribed in the Book of Life?{" "}
                <Link to="/signup" className="text-amber-300 hover:underline">
                  𓅓𓂧𓏏𓀗 Create Cartouche
                </Link>
              </p>
              <p className="text-xs mt-2 text-amber-500">
                𓃭 Forgot your sacred words?{" "}
                <Link to="/forgot-password" className="hover:underline">
                  Consult the Oracles
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Decorative Footer */}
        <div className="bg-stone-900 py-2 text-center text-xs text-amber-600 border-t border-amber-800">
          𓄤 May Thoth guide your journey 𓄤
        </div>
      </div>
    </section>
  );
};

export default SignIn;