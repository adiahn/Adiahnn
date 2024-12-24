export default function ExperienceCard({ title, company, period, description }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-300 mt-1">{company}</p>
      <p className="text-gray-400 text-sm mt-1">{period}</p>
      <p className="mt-4 text-gray-300">{description}</p>
    </div>
  );
}