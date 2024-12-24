export default function ProjectCard({ title, description, link, tech }) {
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
        className="mt-4 inline-block text-blue-400 hover:text-blue-300 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project →
      </a>
    </div>
  );
}