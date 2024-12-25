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
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Kwadai Foods"
              description="A comprehensive food ordering system that enables customers to browse menus, place orders, and track deliveries in real-time. Features include user authentication, payment integration, and order management."
              link="http://kwadaifoods.ng"
              tech={["React", "Tailwind CSS", "Framer Motion"]}
            />
            <ProjectCard 
              title="Edstream"
              description="A robust school management system that streamlines administrative tasks, student records, and academic processes. Includes features for attendance tracking, grade management, and parent-teacher communication."
              link="http://edstream.ng"
              tech={["React", "Tailwind CSS", "Framer Motion"]}
            />
            <ProjectCard 
              title="Muaga"
              description="A modern software development company website showcasing services, portfolio, and team expertise. Implements dynamic content management and seamless client communication channels."
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
              period="2024 - Present"
              description="Led frontend development of enterprise web applications, implementing responsive designs and optimizing performance. Collaborated with cross-functional teams to deliver high-quality solutions while maintaining code quality and documentation standards."
            />
            <ExperienceCard 
              title="Frontend Engineer"
              company="Muaga"
              period="2024 - Date"
              description="Spearheaded the development of customer-facing web applications using React and modern frontend technologies. Implemented state management solutions, optimized application performance, and established coding standards for the team."
            />
            <ExperienceCard 
              title="Frontend Engineer"
              company="Edstream"
              period="2024 - Date"
              description="Engineered robust frontend solutions for an educational platform using React and modern web technologies. Implemented responsive designs, integrated third-party APIs, and optimized application performance for improved user experience."
            />
            <ExperienceCard 
              title="Frontend Engineer"
              company="Kwadai Foods"
              period="2022 - 2024"
              description="Developed and maintained a scalable food ordering platform using React and modern frontend technologies. Implemented real-time order tracking, payment integrations, and responsive designs while ensuring optimal performance and user experience."
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