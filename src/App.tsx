import React from 'react';
import { Github, Linkedin, Mail, MapPin, Briefcase, Code, Database, Terminal } from 'lucide-react';
import pic from './img/pic.jpg';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-b from-gray-800 to-gray-900 shadow-xl">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 pt-24 pb-20 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Profile Image */}
            <div className="mb-8">
              <div className="relative inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75"></div>
                <img 
                  src={pic} // Replace with your image URL
                  alt="Profile"
                  className="relative w-60 h-60 rounded-full border-4 border-white/10 shadow-2xl object-cover"
                />
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Adiahn
            </h1>
            <p className="mt-6 text-xl text-gray-300 flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-blue-400" /> Nigeria
            </p>
            <div className="mt-8 flex justify-center gap-6">
              <a 
                href="https://github.com/Adiahn" 
                className="text-gray-400 hover:text-white transform hover:scale-110 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-7 h-7" />
              </a>
              <a 
                href="https://linkedin.com/in/Adiahn" 
                className="text-gray-400 hover:text-white transform hover:scale-110 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-7 h-7" />
              </a>
              <a 
                href="mailto:pkhalisoft@gmail.com" 
                className="text-gray-400 hover:text-white transform hover:scale-110 transition-all"
              >
                <Mail className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Projects Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Kwadai Foods"
              description="E-commerce platform for food delivery"
              link="http://kwadaifoods.ng"
              tech={["React", "Node.js", "MongoDB"]}
            />
            <ProjectCard 
              title="AMS"
              description="Asset Management System"
              link="http://ams.suntecnig.ng"
              tech={["React", "Express", "PostgreSQL"]}
            />
            <ProjectCard 
              title="Muaga"
              description="Real Estate Platform"
              link="http://muaga.ng"
              tech={["Next.js", "Prisma", "PostgreSQL"]}
            />
            <ProjectCard 
              title="DigiKat"
              description="Digital Marketing Mobile App"
              link="https://play.google.com/store/apps/details?id=com.digikat.digikat_app"
              tech={["Flutter", "Firebase"]}
            />
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <Terminal className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">Skills</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard title="Frontend" skills={["React", "Next.js", "Vue.js", "Flutter"]} />
            <SkillCard title="Languages" skills={["JavaScript", "TypeScript", "HTML", "CSS"]} />
            <SkillCard title="Tools & Libraries" skills={["Git", "Tailwind CSS", "Redux", "REST APIs"]} />
          </div>
        </section>

        {/* Experience Section */}
        <section className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">Experience</h2>
          </div>
          <div className="space-y-8">
            <ExperienceCard 
              title="Senior Developer I"
              company="Suntecnig"
              period="2024 - Present"
              description="Developed a scalable asset management system for Katsina State Asset Management Agency. Improved UI/UX by implementing modern design principles and ensuring mobile responsiveness. Mentored junior developers in the frontend team, enhancing project delivery quality."
            />
            <ExperienceCard 
              title="Senior Frontend Developer"
              company="Kwadai Foods"
              period="2023 - Present"
              description="Designed and implemented a user-friendly system to streamline food management operations (kwadaifoods.ng). Built frontend components using React and Tailwind CSS for performance optimization."
            />
            <ExperienceCard 
              title="Frontend Developer"
              company="Edstream"
              period="2024 - Present"
              description="Designed and implemented a user-friendly School management System operation (edstream.ng). Built frontend components using React and Tailwind CSS for performance optimization."
            />
            <ExperienceCard 
              title="Frontend Developer"
              company="Muaga Limited"
              period="2024 - Present"
              description="Designed and launched the company's e-commerce platform (muaga.ng), optimizing performance and accessibility. Integrated RESTful APIs to ensure seamless communication between the client and server."
            />
            <ExperienceCard 
              title="Frontend Developer"
              company="Digikat"
              period="2023 - 2024"
              description="Led the development of 'Digital Katsina,' a platform and mobile app for digitizing the state's records. Utilized modern frameworks to develop modular and reusable UI components."
            />
            <ExperienceCard 
              title="Junior Developer"
              company="Lumilab"
              period="2018 - 2020"
              description="Assisted in the development of dynamic web applications and gained foundational experience in React and JavaScript."
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-black to-gray-900 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">© 2024 Adiahn. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ title, description, link, tech }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-gray-300">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">
            {t}
          </span>
        ))}
      </div>
      <a 
        href={link}
        className="mt-4 inline-block text-blue-400 hover:text-blue-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project →
      </a>
    </div>
  );
}

function SkillCard({ title, skills }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ title, company, period, description }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-300 mt-1">{company}</p>
      <p className="text-gray-400 text-sm mt-1">{period}</p>
      <p className="mt-4 text-gray-300">{description}</p>
    </div>
  );
}

export default App;