import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Header({ profileUrl }) {
  return (
    <header className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <img 
              src={profileUrl || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"} 
              alt="Profile" 
              className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-xl"
            />
          </div>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Adiahn</h1>
          <p className="mt-4 text-xl text-gray-300 flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5" /> Nigeria
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="https://github.com/Adiahn" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/adnan-muhammad-mukhtar-b26b40183/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:adnanmukhtar2321@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}