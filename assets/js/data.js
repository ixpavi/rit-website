/* data.js - Centralized CMS-Ready Data for RIT Education & Welfare Society */

const RIT_DATA = {
  // Hero Slider
  heroSlides: [
    {
      id: 1,
      tag: "Welcome to RIT",
      title: "Empowering Education. Building Communities.",
      desc: "RIT Education & Welfare Society is dedicated to providing quality educational resources and social welfare initiatives across India, bridging the gap between talent and opportunity.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
      ctaPrimary: "Learn More",
      ctaPrimaryLink: "about.html",
      ctaSecondary: "Contact Us",
      ctaSecondaryLink: "contact.html"
    },
    {
      id: 2,
      tag: "Skill Development",
      title: "Skills for a Brighter and Self-Reliant Tomorrow.",
      desc: "Our vocational training and technical skill development programs empower youth and women with employment-ready capabilities and entrepreneurship opportunities.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
      ctaPrimary: "Our Programs",
      ctaPrimaryLink: "programs.html",
      ctaSecondary: "Get Involved",
      ctaSecondaryLink: "contact.html"
    },
    {
      id: 3,
      tag: "Community Welfare",
      title: "Creating Stronger, Healthier Communities.",
      desc: "From health camps and blood donation drives to environmental plantation campaigns, we work at the grassroots level to drive impactful social change.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      ctaPrimary: "Our Journey",
      ctaPrimaryLink: "about.html#journey",
      ctaSecondary: "Join Us",
      ctaSecondaryLink: "contact.html"
    }
  ],

  // Activities & Programs
  programs: [
    {
      id: "skill-development",
      title: "Skill Development",
      tag: "Vocational",
      icon: "briefcase",
      desc: "Providing industry-aligned vocational training in computer applications, electronics repair, tailoring, and handicraft creation to help youth secure self-employment.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "womens-empowerment",
      title: "Women's Empowerment",
      tag: "Social Impact",
      icon: "heart",
      desc: "Conducting financial literacy workshops, self-defense classes, and self-help group setups to support women in becoming independent, active community decision-makers.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "digital-literacy",
      title: "Digital Literacy",
      tag: "Education",
      icon: "monitor",
      desc: "Running free computer centers in rural areas to teach MS Office, internet safety, basic coding, and online banking systems to children and elderly members.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "career-guidance",
      title: "Career Guidance",
      tag: "Mentorship",
      icon: "compass",
      desc: "Organizing school seminars, psychometric testing, and counselor-led mentoring drives to help students map post-10th and post-12th academic and career courses.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "youth-development",
      title: "Youth Development",
      tag: "Leadership",
      icon: "users",
      desc: "Facilitating leadership bootcamps, debate tournaments, public speaking training, and sports meets to build character and civic responsibility among local youth.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "community-welfare",
      title: "Community Welfare",
      tag: "Welfare",
      icon: "globe",
      desc: "Conducting health awareness workshops, environment cleanliness drives, safe drinking water setups, and distributed relief programs in underprivileged localities.",
      image: "https://images.unsplash.com/photo-1469571486040-7ba9d10ecd7e?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // News & Announcements
  news: {
    news: [
      {
        id: 1,
        date: "05 Jul",
        year: "2026",
        title: "RIT Launches Digital Literacy Center in Village Chanda",
        meta: "Published by Welfare Desk • Press Release",
        desc: "A brand new computer lab equipped with 15 computers was inaugurated yesterday by the District Education Officer. Over 100 students have registered for the initial batch.",
        link: "news.html#news-1"
      },
      {
        id: 2,
        date: "28 Jun",
        year: "2026",
        title: "Free Medical Check-up Camp Benefited 450+ Residents",
        meta: "Published by Health Committee • Community Welfare",
        desc: "In collaboration with Apollo Clinic, RIT organized a comprehensive medical check-up covering general health, eye screening, and free distribution of prescribed medicines.",
        link: "news.html#news-2"
      },
      {
        id: 3,
        date: "12 Jun",
        year: "2026",
        title: "Annual Skill Certification Convocation Ceremony Held",
        meta: "Published by Vocational Division • Academic",
        desc: "Certificates were distributed to 180 female graduates of our tailoring and digital designing programs. We are proud that 40% of them have already secured work-from-home contracts.",
        link: "news.html#news-3"
      }
    ],
    announcements: [
      {
        id: 1,
        date: "10 Jul",
        year: "2026",
        title: "Applications Invited for RIT Meritorious Scholarship Scheme 2026",
        meta: "Admissions & Scholarships Office",
        desc: "Scholarships covering up to 100% of educational fees are open for students from financially challenged backgrounds who scored 85% and above in secondary board exams.",
        link: "downloads.html"
      },
      {
        id: 2,
        date: "01 Jul",
        year: "2026",
        title: "RIT Announces Partnerships with Local Industries for Apprenticeships",
        meta: "Corporate Relations Cell",
        desc: "Under our new Skill-to-Job program, students completing electrical and computer design courses will be placed in 6-month paid industrial apprenticeships.",
        link: "news.html#ann-2"
      }
    ],
    notices: [
      {
        id: 1,
        date: "11 Jul",
        year: "2026",
        title: "Official Audited Annual Accounts and IT filings for FY 2025-26 Released",
        meta: "Board Office • Public Transparency",
        desc: "The audited financial reports have been filed with the Registrar of Societies and are now uploaded to the downloads section for public review.",
        link: "downloads.html"
      },
      {
        id: 2,
        date: "24 Jun",
        year: "2026",
        title: "Notice: Scheduled Closure of Centers for Summer Term Holidays",
        meta: "Administration Office",
        desc: "All skill centers and offices will remain closed from July 15th to July 25th for annual maintenance. Classes will resume with normal schedules on July 27th.",
        link: "news.html#not-2"
      }
    ],
    events: [
      {
        id: 1,
        date: "20",
        month: "Jul",
        title: "Inter-School Career Counseling Fair 2026",
        loc: "RIT Central Auditorium, New Delhi",
        desc: "A large-scale expo featuring academic counselors, college representatives, and industry guides to mentor secondary school graduates.",
        time: "10:00 AM - 4:00 PM"
      },
      {
        id: 2,
        date: "05",
        month: "Aug",
        title: "Mega Voluntary Blood Donation Camp",
        loc: "Red Cross Center & RIT Welfare Room",
        desc: "Organized in association with the Government Civil Blood Bank on the occasion of our Foundation Day. All citizens are requested to participate.",
        time: "9:00 AM - 5:00 PM"
      },
      {
        id: 3,
        date: "15",
        month: "Aug",
        title: "Independence Day Plantation Drive",
        loc: "Sector 12 Public Park System",
        desc: "Our annual target of planting 1,000 indigenous saplings in surrounding neighborhoods to encourage ecological consciousness among students.",
        time: "7:30 AM onwards"
      }
    ]
  },

  // Gallery Items
  gallery: [
    {
      id: 1,
      category: "Education",
      title: "Village Primary Class Mentoring",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      category: "Seminars",
      title: "National Career Expo Keynote",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      category: "Workshops",
      title: "Interactive Computer Training Module",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      category: "Skill Development",
      title: "Advanced Electronics Lab Class",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      category: "Community Welfare",
      title: "Rural Health Awareness Campaign",
      image: "https://images.unsplash.com/photo-1469571486040-7ba9d10ecd7e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      category: "Women Empowerment",
      title: "Industrial Tailoring Apprenticeship",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      category: "Blood Donation",
      title: "Volunteers at Foundation Blood Camp",
      image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      category: "Plantation Drive",
      title: "Eco-Club Planting Indigenous Trees",
      image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      category: "Celebrations",
      title: "Annual Foundation Day Festivities",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 10,
      category: "Education",
      title: "Distribution of Free Textbooks & Stationary",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 11,
      category: "Workshops",
      title: "Digital Banking Safety Workshop for Women",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 12,
      category: "Skill Development",
      title: "Youth Carpentry & Design Workshop",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Our Journey Timeline
  timeline: [
    {
      year: "2011",
      title: "Foundation & Registration",
      desc: "Founded RIT Education & Welfare Society under the Societies Registration Act, 1860, with a focus on village-level primary coaching centers."
    },
    {
      year: "2015",
      title: "First Skill Training Center",
      desc: "Inaugurated a dedicated vocational training school with standard programs in Computer Applications and Home Science (Tailoring/Crafts) for 100 students."
    },
    {
      year: "2018",
      title: "CSR Partnership & Expansion",
      desc: "Partnered with national corporate groups to scale up our Digital Literacy and Computer Skill labs, adding advanced training modules and certification exams."
    },
    {
      year: "2021",
      title: "COVID Relief & Rural Healthcare",
      desc: "Initiated a large-scale emergency food & medicine distribution drive and setup mobile clinics in 12 remote rural locations, supporting over 10,000 citizens."
    },
    {
      year: "2024",
      title: "Golden Empowerment Award & 15+ Years",
      desc: "Recognized by regional state ministries for outstanding contributions to youth employment and women's self-reliance. Grew student base to 5,000+ graduates."
    },
    {
      year: "2026",
      title: "Integrated Campus & Digital Extension",
      desc: "Constructing our central digital knowledge campus and extending programs through web-based learning portals and virtual vocational guides."
    }
  ],

  // Achievements & Recognition
  achievements: [
    {
      icon: "award",
      title: "National Welfare Excellence Award",
      desc: "Honored by the Federation of Indian NGOs in 2024 for outstanding community integration and rural literacy growth."
    },
    {
      icon: "check-circle",
      title: "ISO 9001:2015 Certified Organization",
      desc: "Officially certified for maintaining standard quality management systems in vocational education and community program execution."
    },
    {
      icon: "users",
      title: "5000+ Students Certified",
      desc: "Empowered more than 5,000 students through our certified training courses, with 65% securing stable livelihoods."
    },
    {
      icon: "shield",
      title: "80G & 12A Registrations Verified",
      desc: "Compliant and certified under the Income Tax Act, offering tax benefits to generous donors who fund rural education projects."
    }
  ],

  // Downloads Section
  downloads: [
    {
      id: 1,
      category: "Certificates",
      title: "Society Registration Certificate (Act XXI of 1860)",
      fileSize: "1.2 MB",
      fileType: "PDF",
      url: "#"
    },
    {
      id: 2,
      category: "Certificates",
      title: "Income Tax 80G & 12A Exempt Registration Certificates",
      fileSize: "950 KB",
      fileType: "PDF",
      url: "#"
    },
    {
      id: 3,
      category: "Reports",
      title: "Annual Financial Statement & Audit Report (FY 2024-25)",
      fileSize: "2.4 MB",
      fileType: "PDF",
      url: "#"
    },
    {
      id: 4,
      category: "Reports",
      title: "Social Impact Progress Assessment Report (2023-24)",
      fileSize: "3.1 MB",
      fileType: "PDF",
      url: "#"
    },
    {
      id: 5,
      category: "Notices",
      title: "Notification: RIT Merit Scholarship Scheme Guidelines 2026",
      fileSize: "420 KB",
      fileType: "PDF",
      url: "#"
    },
    {
      id: 6,
      category: "Brochures",
      title: "Vocational & Skill Training Course Catalog (Brochure 2026)",
      fileSize: "1.8 MB",
      fileType: "PDF",
      url: "#"
    },
    {
      id: 7,
      category: "Admission Forms",
      title: "Admission Form - Computer Literacy and Tailoring Programs",
      fileSize: "550 KB",
      fileType: "PDF",
      url: "#"
    },
    {
      id: 8,
      category: "Admission Forms",
      title: "Merit-cum-Means Financial Aid Application Form",
      fileSize: "680 KB",
      fileType: "PDF",
      url: "#"
    }
  ],

  // Management Members
  management: {
    president: [
      {
        name: "Dr. Ramesh Chandra Sen",
        role: "President",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
        bio: "Former Vice-Chancellor with 35+ years of experience in higher educational governance and policy implementation."
      }
    ],
    chairman: [
      {
        name: "Shri. Ajay Kumar Gupta",
        role: "Chairman",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
        bio: "Eminent social industrialist and philanthropist dedicated to community development and institutional excellence."
      }
    ],
    secretary: [
      {
        name: "Dr. (Mrs.) Sunita Verma",
        role: "Secretary",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        bio: "Social worker, educational expert and researcher, spearheading the operational planning and rural literacy camps."
      }
    ],
    treasurer: [
      {
        name: "Shri. Manoj K. Saxena",
        role: "Treasurer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        bio: "Chartered Accountant managing financial audits, compliance filings and fundraising oversight at RIT."
      }
    ],
    executiveMembers: [
      {
        name: "Prof. Anil Kumar Sharma",
        role: "Executive Member",
        image: "",
        bio: "Professor of Vocational Studies advising on curriculum design for skill centers."
      },
      {
        name: "Smt. Kamala Devi Rawat",
        role: "Executive Member",
        image: "",
        bio: "Grassroots mobilizer specializing in coordinating our rural self-help groups."
      },
      {
        name: "Shri. Vikram Jeet Singh",
        role: "Executive Member",
        image: "",
        bio: "Retired Administrative Officer supervising logistics and project audits."
      }
    ],
    advisoryMembers: [
      {
        name: "Justice (Retd.) K. R. Madhavan",
        role: "Legal Advisor",
        image: "",
        bio: "Retired High Court Judge assisting on legal matters, compliance, and trust governance."
      },
      {
        name: "Dr. Preeti Deshmukh",
        role: "Community Health Advisor",
        image: "",
        bio: "Senior pediatrician guiding our health camps and hygiene awareness campaigns."
      },
      {
        name: "Mr. Rajeev Krishnan",
        role: "Digital Systems Advisor",
        image: "",
        bio: "IT Director assisting in setting up rural digital labs and computer curricula."
      }
    ],
    managementCommittee: [
      { name: "Dr. Ramesh Chandra Sen", designation: "President" },
      { name: "Shri. Ajay Kumar Gupta", designation: "Chairman" },
      { name: "Dr. (Mrs.) Sunita Verma", designation: "Secretary" },
      { name: "Shri. Manoj K. Saxena", designation: "Treasurer" },
      { name: "Prof. Anil Kumar Sharma", designation: "Executive Committee Member" },
      { name: "Smt. Kamala Devi Rawat", designation: "Executive Committee Member" },
      { name: "Shri. Vikram Jeet Singh", designation: "Executive Committee Member" },
      { name: "Dr. Preeti Deshmukh", designation: "Advisory Board Member" },
      { name: "Mr. Rajeev Krishnan", designation: "Advisory Board Member" },
      { name: "Justice (Retd.) K. R. Madhavan", designation: "Patron / Legal Advisor" }
    ]
  }
};
