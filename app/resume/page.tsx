export default function Resume() {
  return (
    <div className="min-h-screen bg-white px-8 py-6" style={{ fontFamily: 'monospace' }}>

      {/* Nav */}
      <nav className="flex justify-between items-center mb-16">
        <span className="font-medium tracking-widest uppercase">Anas Yusuf</span>
        <div className="flex gap-10">
          <a href="/" className="text-gray-800 font-medium hover:text-blue-600">Home</a>
          <a href="/resume" className="text-blue-600 font-medium">Résumé</a>
          <a href="/contact" className="text-gray-800 font-medium hover:text-blue-600">Contact</a>
        </div>
      </nav>

      {/* Titel */}
      <h1 className="text-5xl font-bold mb-12">Résumé</h1>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">💼 Skills</h2>
        <hr className="mb-8" />
        <div className="grid grid-cols-3 gap-8">
          <div>
            <p className="font-bold mb-4">Backend:</p>
            <div className="flex flex-wrap gap-2">
              {["Java", "Spring Boot", "Node.js", "PostgreSQL", "REST API"].map(skill => (
                <span key={skill} className="border border-gray-200 px-3 py-1 rounded text-sm">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold mb-4">Frontend:</p>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS"].map(skill => (
                <span key={skill} className="border border-gray-200 px-3 py-1 rounded text-sm">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold mb-4">Other:</p>
            <div className="flex flex-wrap gap-2">
              {["Git", "Docker", "Unit Testing", "CI/CD", "Domain Driven Design"].map(skill => (
                <span key={skill} className="border border-gray-200 px-3 py-1 rounded text-sm">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">💼 Professional Experience</h2>
        <hr className="mb-8" />

        {/* Projekt 1 */}
        <div className="mb-8">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold">Delivery Platform</h3>
            <span className="text-gray-500 text-sm">2024 - Present</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Designed and developed a full-stack delivery platform end-to-end, implementing customer ordering, a dedicated driver interface, and secure user authentication — following best practices in software architecture and deploying the application to a live production environment.
          </p>
        </div>

        {/* Projekt 2 — FIKTIV, skal erstattes */}
        <div className="mb-8 opacity-30">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold">[ project 2 ]</h3>
            <span className="text-gray-500 text-sm">2026</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            [ teskt ]
          </p>
        </div>

      </section>

    </div>
  );
}