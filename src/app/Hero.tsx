import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center min-h-screen bg-no-repeat" style={{ backgroundImage: "url('/aw.jpg')" }}>
      <div className="absolute inset-0 bg-none bg-opacity-50"></div>
      
      {/* Konten utama */}
      <div className="relative container mx-auto flex flex-col justify-center items-start h-screen text-left px-4 md:px-16">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Instant collaboration <br /> for remote teams
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl mb-6 max-w-lg">
          All-in-one place for your remote team to chat, collaborate, and track project progress.
        </p>

        {/* Formulir email dan tombol */}
        <form className="flex flex-col md:flex-row gap-3 justify-start items-start">
          <input 
            type="email" 
            placeholder="Email" 
            className="px-4 py-2 w-full md:w-64 rounded-md text-black focus:outline-none"
          />
          <button className="text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          style={{ backgroundColor: 'rgba(59, 130, 246, 0.7)' }}
          >
            Get Early Access
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
