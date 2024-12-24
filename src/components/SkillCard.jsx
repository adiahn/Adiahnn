export default function SkillCard({ title, skills }) {
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