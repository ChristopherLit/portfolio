"use client"

export default function Animation() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 py-12">
      {/* Outer centered container with max-width */}
      <div className="w-full max-w-7xl flex flex-col items-start space-y-12">
        {/* Animation Area */}
        <div className="relative w-96 h-96">
          {/* Blue gradient blob */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 rounded-full opacity-80 blur-3xl animate-float">
              <div className="w-full h-full rounded-full bg-gradient-radial from-blue-600 via-blue-800 to-blue-950"></div>
            </div>
          </div>

          {/* Purple gradient blob */}
          <div className="absolute inset-0 flex items-center justify-center translate-x-24 translate-y-16">
            <div className="w-72 h-72 rounded-full opacity-75 blur-3xl animate-float-delayed">
              <div className="w-full h-full rounded-full bg-gradient-radial from-purple-600 via-purple-800 to-purple-950"></div>
            </div>
          </div>

          {/* Orange/Red gradient blob */}
          <div className="absolute inset-0 flex items-center justify-center -translate-x-20 translate-y-24">
            <div className="w-76 h-76 rounded-full opacity-70 blur-3xl animate-float-slow">
              <div className="w-full h-full rounded-full bg-gradient-radial from-orange-700 via-red-700 to-red-950"></div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="z-10 max-w-lg text-white text-left">
          <h1 className="text-6xl font-bold leading-tight">
            Favourite <span className="text-blue-400">clips</span> from
            <span> my films.</span>
          </h1>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          25% {
            transform: translate(15px, -10px) scale(1.02);
          }
          50% {
            transform: translate(-10px, 15px) scale(0.98);
          }
          75% {
            transform: translate(10px, 5px) scale(1.01);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translate(96px, 64px) scale(1);
          }
          33% {
            transform: translate(80px, 80px) scale(1.03);
          }
          66% {
            transform: translate(110px, 50px) scale(0.97);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translate(-80px, 96px) scale(1);
          }
          50% {
            transform: translate(-65px, 80px) scale(1.01);
          }
        }

        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3.5s ease-in-out infinite;
          animation-delay: -0.75s;
        }

        .animate-float-slow {
          animation: float-slow 4.5s ease-in-out infinite;
          animation-delay: -1.75s;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }

        .w-76 {
          width: 19rem;
        }

        .h-76 {
          height: 19rem;
        }
      `}</style>
    </div>
  )
}
