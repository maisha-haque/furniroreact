import React, { useState } from 'react'
import Container from '../common/Container'
import { Link } from 'react-router-dom'
import { FiChevronRight, FiLock, FiMail } from 'react-icons/fi'

const Login = () => {
  const [activeTab, setActiveTab] = useState('login')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [regEmail, setRegEmail] = useState('')
  const [submittedMessage, setSubmittedMessage] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    setSubmittedMessage(`Welcome back! Logged in as ${loginEmail}`)
    setTimeout(() => setSubmittedMessage(''), 4000)
  }

  const handleRegister = (e) => {
    e.preventDefault()
    setSubmittedMessage(`Account created successfully for ${regEmail}!`)
    setTimeout(() => setSubmittedMessage(''), 4000)
  }

  return (
    <div className="w-full pb-20">
      {/* Subpage Header Banner */}
      <div className="py-12 sm:py-16 text-center border-b border-gray-100">
        <Container>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A3A3A] mb-3">
            My Account
          </h1>
          <nav className="flex items-center justify-center gap-2 text-sm sm:text-base font-medium">
            <Link to="/" className="text-black hover:text-[#B88E2F] transition-colors">
              Home
            </Link>
            <FiChevronRight className="text-[#898989]" />
            <span className="text-[#898989]">Account</span>
          </nav>
        </Container>
      </div>

      <Container className="mt-12 sm:mt-16">
        <div className="max-w-2xl mx-auto">
          {/* Notification */}
          {submittedMessage && (
            <div className="mb-6 p-4 rounded-lg bg-[#2EC1AC]/10 border border-[#2EC1AC] text-[#2EC1AC] font-medium text-center text-sm sm:text-base animate-fadeIn">
              {submittedMessage}
            </div>
          )}

          {/* Tab Selector */}
          <div className="flex border-b border-gray-200 mb-8 sm:mb-10">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 pb-4 text-lg sm:text-xl font-bold transition-all text-center cursor-pointer ${
                activeTab === 'login'
                  ? 'border-b-2 border-[#B88E2F] text-[#B88E2F]'
                  : 'text-[#898989] hover:text-[#3A3A3A]'
              }`}
            >
              Log In
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 pb-4 text-lg sm:text-xl font-bold transition-all text-center cursor-pointer ${
                activeTab === 'register'
                  ? 'border-b-2 border-[#B88E2F] text-[#B88E2F]'
                  : 'text-[#898989] hover:text-[#3A3A3A]'
              }`}
            >
              Register
            </button>
          </div>

          {/* Form Card */}
          <div className="bg-[#F4F5F7] p-6 sm:p-10 rounded-xl shadow-sm border border-gray-100">
            {activeTab === 'login' ? (
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#3A3A3A] mb-2">
                    Username or email address
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                    <input
                      type="text"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="Your email"
                      className="w-full pl-11 pr-4 py-3.5 bg-white rounded-lg border border-gray-200 text-sm sm:text-base focus:outline-none focus:border-[#B88E2F] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#3A3A3A] mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                    <input
                      type="password"
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-11 pr-4 py-3.5 bg-white rounded-lg border border-gray-200 text-sm sm:text-base focus:outline-none focus:border-[#B88E2F] transition-colors"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-2 text-sm">
                  <label className="flex items-center gap-2 cursor-pointer text-[#666666]">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="accent-[#B88E2F] w-4 h-4 rounded"
                    />
                    <span>Remember me</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => alert('Password reset link will be sent to your email.')}
                    className="text-xs sm:text-sm text-[#B88E2F] hover:underline font-medium cursor-pointer"
                  >
                    Lost your password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#B88E2F] hover:bg-[#967425] text-white font-bold py-3.5 px-6 rounded-lg text-sm sm:text-base tracking-wider uppercase transition-all shadow-md active:scale-98 cursor-pointer"
                >
                  Log In
                </button>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#3A3A3A] mb-2">
                    Email address
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                    <input
                      type="email"
                      required
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      placeholder="Your email"
                      className="w-full pl-11 pr-4 py-3.5 bg-white rounded-lg border border-gray-200 text-sm sm:text-base focus:outline-none focus:border-[#B88E2F] transition-colors"
                    />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#898989] leading-relaxed">
                  A link to set a new password will be sent to your email address. Your personal data will be used to support your experience throughout this website.
                </p>

                <button
                  type="submit"
                  className="w-full bg-[#B88E2F] hover:bg-[#967425] text-white font-bold py-3.5 px-6 rounded-lg text-sm sm:text-base tracking-wider uppercase transition-all shadow-md active:scale-98 cursor-pointer"
                >
                  Register
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Login
