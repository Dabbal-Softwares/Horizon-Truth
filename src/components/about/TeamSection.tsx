import { AbduljPhoto, AbdurehmanA, AbdurezakIsak, AjaibMoh, BilkesEl, Getahun, MohammedHas1, MohammedIb, MohammedMum, RemlaHa, worknehD } from "../../assets/photos";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    other?: string;
  };
}

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Abdurahman Abrar",
    role: "PI, AI & Data Science Lead",
    image: AbdurehmanA,
    description: "Leads AI and data science strategy, oversees model development and experimentation, and guides project planning in alignment with research goals."
  },
  {
    id: 2,
    name: "Muhammed Hassen",
    role: "Co-PI, Data & Web Engineering Lead",
    image: MohammedHas1,
    description: "Back-end developer responsible for data and backend architecture, database and pipeline design, and ensuring scalability and reliability of infrastructure."
  },
  {
    id: 3,
    name: "Abdurezak Yisak",
    role: "Co-PI, UX/UI Designer",
    image: AbdurezakIsak,
    description: "UX/UI designer focused on user-friendly interfaces, inclusive design practices, and collaboration with engineers to ensure accessibility and usability."
  },
  {
    id: 4,
    name: "Mohammed Ibrahim",
    role: "Co-PI & Lead Content Developer",
    image: MohammedIb,
    description: "Develops educational narratives and scenarios with a focus on cultural relevance and pedagogy. Oversees content review and improvement."
  },
  {
    id: 5,
    name: "Getahun Assefa",
    role: "Community and Communication Manager",
    image: Getahun,
    description: "Leads community outreach, gathers user feedback for product improvement, and coordinates communication between users and the development team."
  },
  {
    id: 6,
    name: "Ajaib Mohammed",
    role: "DevOps Manager",
    image:AjaibMoh,
    description: "Manages CI/CD pipelines, monitors system performance, ensures infrastructure scalability, and oversees cloud infrastructure and security."
  },
  {
    id: 7,
    name: "Bilkes Elias",
    role: "AI & Machine Learning Expert",
    image:  BilkesEl,
    description: "Develops and fine-tunes machine learning models, performs data processing, and supports AI integration within the product platform."
  },
  {
    id: 8,
    name: "Dr. Muhammed Mumtaz",
    role: "ICT Consultant",
    image:  MohammedMum,
    description: "Director of ICT at Jimma University, Provides strategic ICT guidance, supports quality assurance and code review, and offers technical advice across the stack."
  },
  {
    id: 9,
    name: "Remela Habib",
    role: "UI & UX Expert",
    image: RemlaHa,
    description: "Conducts usability testing and UI design, iterates based on feedback, and ensures accessible design across platforms."
  },
  {
    id: 10,
    name: "Abduljebar Sani",
    role: "Front-End Developer",
    image: AbduljPhoto,
    description: "Implements interactive UI components, collaborates on design handoff, and ensures responsive and performant front-end code."
  },
  {
    id: 11,
    name: "Workineh Diribsa",
    role: "Language Expert (Localization Advisor)",
    image: worknehD,
    description: "Translates content and validates localization accuracy, supports regional dialects, and ensures inclusive language use."
  }
];

const TeamSection = () => {
  return (
    <section id="our-team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sky-500 font-semibold tracking-wider">OUR TEAM</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet The Horizon Truth Team</h2>
          <p className="text-gray-700">Dedicated professionals working together to combat misinformation.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member) => (
            <div key={member.id} className="team-card bg-white p-6 rounded-xl shadow-md text-center">
              <img 
                alt={member.name} 
                src={member.image} 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-sky-500 font-medium mb-3">{member.role}</p>
              <p className="text-gray-700 text-sm">{member.description}</p>
              <div className="flex justify-center space-x-3 mt-4">
                <a href="#" className="text-gray-400 hover:text-sky-500">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-sky-500">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://truth.debbal.com/contact" 
            className="inline-block bg-sky-500 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;