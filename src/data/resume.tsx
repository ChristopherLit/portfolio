import { Icons } from "@/components/icons";

export const DATA = {
  name: "Christopher",
  initials: "CL",
  location: "Ottawa, ON",
  description:
    "I like building things that save time and solve real needs. Whether it's through code, data, or a mix of both.",
  summary:
    " ",
  avatarUrl: "/me.jpg",
  skills: [
  "Java",
  "TypeScript",
  "JavaScript",
  "Python",
  "C#",
  "React",
  "PostgreSQL",
  "Docker",
],

  work: [
      {
      company: "Entrust",
      href: "https://www.entrust.com/",
      badges: [],
      location: "Hybrid",
      title: "Software Engineer Intern",
      logoUrl: "entrust_logo.png",
      start: "September 2025",
      end: "December 2025",
      description:
        "Identity and Security Team",
    },
    {
      company: "Kinaxis",
      href: "https://www.kinaxis.com/",
      badges: [],
      location: "Hybrid",
      title: "Software Engineer Intern",
      logoUrl: "kinaxis_logo_square.png",
      start: "January 2025",
      end: "April 2025",
      description:
        "Built an ETL pipeline in Python and Logstash to process 100K+ data points into Elasticsearch, enabling 10+ teams to visualize performance bottlenecks on Grafana. Improved query speed by 21% by cleaning 4,300+ test records using C# and SQL. Proposed and led AHP-based scoring for test results, cutting false negatives by 43% and saving 2+ hours/week.",
    },
    {
      company: "CEED",
      badges: [],
      href: "https://ceed-uottawa.ca/",
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "ceed_logo_circle.png",
      start: "May 2024",
      end: "August 2024",
      description:
        "Developed a shift scheduling system with TypeScript and React, using batch validation to replace manual entries and reduce errors across 500+ weekly shifts. Optimized role-based queries in PostgreSQL from 1200ms to 70ms by implementing Redis caching in Ruby on Rails, improving permission checks and reducing database load. Maintained CI/CD pipelines with GitHub Actions and Docker, integrating RSpec tests to halve runtime and enable reliable daily deployments.",
    },
  
  ],
  education: [
    {
      school: "University of Ottawa",
      href: "https://www.uottawa.ca/",
      degree: "Bachelor's Degree of Computer Science",
      logoUrl: "uottawa_logo_education.png",
      start: "2022",
      end: "2027",
    }
  ],
  projects: [
      {
      title: "Covara",
      href: "https://covara.vercel.app/",
      active: true,
      description:
        "A web app where startup founders find co-founders with aligned goals, values, and experience by swiping through profiles based on preferences",
      technologies: [
        "React",
        "TypeScript",
        "Supabase",
        "TailwindCSS",
      ],
      links: [
          {
          type: "Website",
          href: "https://covara.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        /*
        {
          type: "Source",
          href: "https://github.com/ProjectCovara/covara-web",
          icon: <Icons.github className="size-3" />,
        },
        */
      
      ],
      image: "",
      video: "https://videos.christopherlit.com/covara_video.mp4",
    },
    {
      title: "MediHub",
      href: "https://github.com/uOttawaSEGA2023/Medihub",
      active: true,
      description:
        "Built an Android mobile app that connects patients with doctors to simplify appointment booking and matching",
      technologies: [
        "Java",
        "Firebase",
        "XML",
        "Android Studio",
      ],
      links: [
    {
          type: "Source",
          href: "https://github.com/uOttawaSEGA2023/Medihub",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://videos.christopherlit.com/medihub_video.mp4",
    },
    {
      title: "Ksolver",
      href: "https://github.com/michaelhum28/kmap-solver",
      active: true,
      description:
        "Developed a web app that solves Karnaugh maps by simplifying boolean expressions for digital circuit design",
      technologies: [
        "React",
        "JavaScript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/michaelhum28/kmap-solver",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://videos.christopherlit.com/kmap_video.mp4",
    },
    {
      title: "Blackjack",
      href: "https://github.com/ChristopherLit/BlackJack",
      active: true,
      description:
        "Developed a web app for playing blackjack with betting mechanics, and a global leaderboard of player scores",
      technologies: [
        "React",
        "Javascript",
        "TailwindCSS",
        "Figma",
      ],
      links: [
    {
          type: "Source",
          href: "https://github.com/ChristopherLit/BlackJack",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://videos.christopherlit.com/blackjack_video.mp4",
    },
  ],

} as const;
