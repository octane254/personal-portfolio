import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "KPM SALESTRACK",
    description: "Manage your team, optimize routes, and boost productivity all in one place.",
    image: "https://cdn.dribbble.com/userupload/44267663/file/bc1afb5eeb432f6424eee9ad8272f681.png?resize=400x0",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://kpm-sales-track-frontend.vercel.app/",
    githubUrl: "https://github.com/octane254/KPM-salesTrack-Frontend",
  },
  {
    id: 2,
    title: "ChessPython",
    description:
      "♟️ Interactive chessboard with piece ⚡ Optimized performance using Vite ✅ Real-time move validation 🔍 Possible moves highlighting 🤖 Basic AI opponent",
    image: "https://media.gettyimages.com/id/1280004365/photo/close-up-of-chessmen-on-chessboard-with-the-focus-on-a-queen.jpg?s=612x612&w=0&k=20&c=T_d5M7pZBnExva9wFLjwPFRsjFTo9cTrEpagfYFieS8=",
    tags: ["Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/octane254/chesspython",
  },
  {
    id: 3,
    title: "Chess With React",
    description:
      "A game built using React, JavaScript, HTML/CSS on the frontend and a custom REST API on the backend. The app supports AI gameplay, legal move validation, and optionally multiplayer.",
    image: "https://media.gettyimages.com/id/1195575719/photo/chess-concept.jpg?s=612x612&w=0&k=20&c=xW3wFfz618STi1AkTrhcFPyn-Js6L8oZU2aEkmDJezQ=",
    tags: ["React", "Javascript", "HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/octane254/CHESS-PROJECT-1",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/octane254"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
