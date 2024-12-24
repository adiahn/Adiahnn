import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import ExperienceCard from './components/ExperienceCard';
import ThemeToggle from './components/ThemeToggle';
import { frontendSkills } from './data/skills';

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <Header profileUrl="" />

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Kwadai Foods"
              description="E-commerce platform with responsive design and modern UI"
              link="http://kwadaifoods.ng"
              tech={["React", "Tailwind CSS", "Framer Motion"]}
            />
            <ProjectCard 
              title="AMS Dashboard"
              description="Asset management dashboard with rich data visualization"
              link="http://ams.suntecnig.ng"
              tech={["React", "Material UI", "Chart.js"]}
            />
            <ProjectCard 
              title="Muaga"
              description="Real estate platform with dynamic search and filtering"
              link="http://muaga.ng"
              tech={["Next.js", "Tailwind CSS", "React Query"]}
            />
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(frontendSkills).map(([category, skills]) => (
              <SkillCard key={category} title={category} skills={skills} />
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>
          <div className="space-y-8">
            <ExperienceCard 
              title="Frontend Developer"
              company="SunTec Nigeria"
              period="2022 - Present"
              description="Led frontend development of enterprise web applications, focusing on responsive design and performance optimization"
            />
            <ExperienceCard 
              title="Frontend Engineer"
              company="Kwadai Foods"
              period="2021 - 2022"
              description="Developed and maintained the customer-facing web application using React and modern frontend technologies"
            />
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 mt-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 dark:text-gray-400">© 2024 Adiahn. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;