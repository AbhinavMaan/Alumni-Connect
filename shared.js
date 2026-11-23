// shared.js - Common helper script and initial data storage for Alumni Portal

// Default demo alumni records with registration IDs
const defaultAlumni = [
    {
        id: 1,
        regId: "ALU202001",
        password: "password123",
        name: "Aman Verma",
        batch: "2020",
        branch: "Computer Science",
        degree: "B.Tech CSE",
        company: "Google",
        role: "Software Engineer III",
        location: "Bangalore",
        email: "aman.verma@alumni.edu",
        phone: "+91 98765 43210",
        skills: ["Cloud Architecture", "System Design", "Go", "Kubernetes"],
        bio: "Passionate about distributed systems and scalable backend infrastructure. Glad to mentor junior devs.",
        isMentor: true,
        avatar: "AV"
    },
    {
        id: 2,
        regId: "ALU201902",
        password: "password123",
        name: "Priya Nair",
        batch: "2019",
        branch: "Electronics & Communication",
        degree: "B.Tech ECE",
        company: "Microsoft",
        role: "Senior Product Manager",
        location: "Hyderabad",
        email: "priya.nair@alumni.edu",
        phone: "+91 98765 12345",
        skills: ["Product Strategy", "Agile", "User Research", "Roadmapping"],
        bio: "Leading product roadmaps for enterprise cloud solutions. Keen on helping students break into PM roles.",
        isMentor: true,
        avatar: "PN"
    },
    {
        id: 3,
        regId: "ALU202103",
        password: "password123",
        name: "Rohan Kulkarni",
        batch: "2021",
        branch: "Computer Science",
        degree: "B.Tech CSE",
        company: "Amazon",
        role: "SDE II",
        location: "Hyderabad",
        email: "rohan.k@alumni.edu",
        phone: "+91 98111 22334",
        skills: ["AWS", "Java", "Microservices", "DynamoDB"],
        bio: "Working on low-latency payment processing systems at AWS. Enthusiastic about competitive programming.",
        isMentor: true,
        avatar: "RK"
    },
    {
        id: 4,
        regId: "ALU202204",
        password: "password123",
        name: "Sneha Patel",
        batch: "2022",
        branch: "Management",
        degree: "MBA Marketing",
        company: "Deloitte",
        role: "Strategy Consultant",
        location: "Mumbai",
        email: "sneha.patel@alumni.edu",
        phone: "+91 98222 33445",
        skills: ["Financial Modeling", "Market Analysis", "Brand Strategy"],
        bio: "Consulting top retail clients on digital transformation and supply chain optimization.",
        isMentor: false,
        avatar: "SP"
    },
    {
        id: 5,
        regId: "ALU201805",
        password: "password123",
        name: "Arjun Mehta",
        batch: "2018",
        branch: "Mechanical Engineering",
        degree: "B.Tech ME",
        company: "Tata Motors",
        role: "EV Powertrain Specialist",
        location: "Pune",
        email: "arjun.m@alumni.edu",
        phone: "+91 98333 44556",
        skills: ["Electric Vehicles", "CAD/CAM", "Battery Thermal Systems"],
        bio: "Designing next-gen EV platforms. Proud to represent our university in the automotive revolution.",
        isMentor: true,
        avatar: "AM"
    },
    {
        id: 6,
        regId: "ALU202306",
        password: "password123",
        name: "Ananya Deshmukh",
        batch: "2023",
        branch: "Computer Science",
        degree: "B.Tech CSE",
        company: "Zomato",
        role: "Frontend Engineer",
        location: "Delhi NCR",
        email: "ananya.d@alumni.edu",
        phone: "+91 98444 55667",
        skills: ["React", "TypeScript", "Performance Optimization", "CSS/UI"],
        bio: "Building delightful food delivery experiences. Open to coffee chats and resume reviews.",
        isMentor: true,
        avatar: "AD"
    },
    {
        id: 7,
        regId: "ALU202007",
        password: "password123",
        name: "Karan Johal",
        batch: "2020",
        branch: "Civil Engineering",
        degree: "B.Tech Civil",
        company: "L&T Construction",
        role: "Project Engineer",
        location: "Delhi NCR",
        email: "karan.j@alumni.edu",
        phone: "+91 98555 66778",
        skills: ["BIM Modeling", "Project Estimation", "Green Infrastructure"],
        bio: "Managing metro rail civil execution works. Always up for infrastructure discussions.",
        isMentor: false,
        avatar: "KJ"
    },
    {
        id: 8,
        regId: "ALU201908",
        password: "password123",
        name: "Meera Sen",
        batch: "2019",
        branch: "Computer Science",
        degree: "M.Tech CSE",
        company: "Adobe",
        role: "Machine Learning Researcher",
        location: "Bangalore",
        email: "meera.sen@alumni.edu",
        phone: "+91 98666 77889",
        skills: ["Deep Learning", "Generative AI", "Computer Vision", "PyTorch"],
        bio: "Researching multimodal foundation models for creative workflows. Mentoring aspiring AI researchers.",
        isMentor: true,
        avatar: "MS"
    },
    {
        id: 9,
        regId: "ALU202200",
        password: "password123",
        name: "Rahul Sharma",
        batch: "2022",
        branch: "Computer Science",
        degree: "B.Tech CSE",
        company: "Microsoft",
        role: "Software Engineer",
        location: "Bangalore",
        email: "rahul.sharma@alumni.edu",
        phone: "+91 98765 00112",
        skills: ["React", "Node.js", "Python", "Cloud Computing"],
        bio: "Passionate developer, tech enthusiast, and proud alumnus. Always excited to connect and mentor fellow students.",
        isMentor: true,
        avatar: "RS"
    }
];

const defaultEvents = [
    {
        id: 1,
        title: "Annual Global Alumni Reunion 2026",
        date: "25 Dec, 2026",
        time: "10:00 AM - 5:00 PM",
        venue: "University Main Auditorium & SDMA Ground",
        category: "Reunion",
        status: "upcoming",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=500",
        description: "Reunite with your classmates, faculty, and leadership. Features keynote addresses, campus nostalgia tours, department meets, and a celebratory evening gala dinner.",
        rsvps: 245,
        userRsvp: false
    },
    {
        id: 2,
        title: "Tech Conclave: AI & Next-Gen Careers",
        date: "15 Jan, 2027",
        time: "02:00 PM - 04:30 PM",
        venue: "Virtual (Google Meet)",
        category: "Webinar",
        status: "upcoming",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500",
        description: "Alumni tech leaders from Google, Microsoft, and Adobe discuss the practical shifts in tech hiring, prompt engineering, and core software engineering trends.",
        rsvps: 180,
        userRsvp: true
    },
    {
        id: 3,
        title: "Young Alumni Startup Pitch & Networking",
        date: "04 Feb, 2027",
        time: "11:00 AM - 03:00 PM",
        venue: "Innovation Hub, Block 34",
        category: "Entrepreneurship",
        status: "upcoming",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500",
        description: "An exclusive pitch session for alumni startup founders looking for angel funding, early team talent, and institutional incubation support.",
        rsvps: 92,
        userRsvp: false
    },
    {
        id: 4,
        title: "Golden Jubilee Alumni Meet 2025",
        date: "18 Oct, 2025",
        time: "10:00 AM - 04:00 PM",
        venue: "University Campus",
        category: "Reunion",
        status: "past",
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500",
        description: "Celebrating decades of student and alumni excellence with retired faculty, honoring distinguished alumni, and unveiling student research grants.",
        rsvps: 410,
        userRsvp: true
    }
];

const defaultAnnouncements = [
    {
        id: 1,
        title: "Alumni Mentorship Cohort 2026-27 Registrations Open",
        category: "Mentorship",
        date: "Nov 20, 2026",
        author: "Alumni Relations Cell",
        content: "We are thrilled to launch the 2026 Mentorship Cohort. Alumni can guide pre-final and final year students through career readiness, interview preparation, and industry insights.",
        pinned: true
    },
    {
        id: 2,
        title: "Campus Placement Season Update & Alumni Referral Drive",
        category: "Career",
        date: "Nov 15, 2026",
        author: "Career Development Centre",
        content: "If your organization is currently hiring for freshers or interns across engineering, analytics, or business roles, please share job openings or contact our placement coordinators.",
        pinned: false
    },
    {
        id: 3,
        title: "Quarterly Alumni Newsletter: Fall Edition Published",
        category: "Newsletter",
        date: "Nov 02, 2026",
        author: "Editorial Board",
        content: "Check out the newest achievements of our alumni founders, faculty publications, research patents, and the recent alumni sports meet highlights.",
        pinned: false
    },
    {
        id: 4,
        title: "New Research Lab Inaugurated with Alumni Contribution",
        category: "Campus News",
        date: "Oct 28, 2026",
        author: "Dean of Academic Affairs",
        content: "Thanks to the generous donations of the Batch of 2012, our brand new High-Performance Computing & AI Research Lab is now functional for all departments.",
        pinned: false
    }
];

// Student Mentees already paired with alumni mentors
const defaultMentees = [
    {
        id: 1,
        studentName: "Aryan Gupta",
        studentId: "12104582",
        program: "B.Tech CSE (Final Year)",
        mentorName: "Aman Verma",
        mentorRegId: "ALU202001",
        topic: "Distributed Systems & SRE Interview Prep",
        startDate: "15 Oct, 2026",
        status: "Active",
        email: "aryan.g@student.edu"
    },
    {
        id: 2,
        studentName: "Pooja Hegde",
        studentId: "12201994",
        program: "B.Tech ECE (3rd Year)",
        mentorName: "Priya Nair",
        mentorRegId: "ALU201902",
        topic: "Associate Product Manager Case Studies",
        startDate: "02 Nov, 2026",
        status: "Active",
        email: "pooja.h@student.edu"
    },
    {
        id: 3,
        studentName: "Sahil Verma",
        studentId: "12108711",
        program: "B.Tech CSE (Final Year)",
        mentorName: "Rahul Sharma",
        mentorRegId: "ALU202200",
        topic: "Full-Stack Web Dev & Placement Roadmap",
        startDate: "10 Nov, 2026",
        status: "Active",
        email: "sahil.v@student.edu"
    }
];

// Incoming mentorship requests submitted by students to alumni
const defaultMentorshipRequests = [
    {
        id: 1,
        studentName: "Devansh Mehta",
        studentId: "12209844",
        program: "B.Tech CSE (3rd Year)",
        mentorName: "Aman Verma",
        mentorRegId: "ALU202001",
        topic: "Kubernetes, Cloud Architecture & System Design",
        date: "21 Nov, 2026",
        status: "Pending",
        note: "Hi sir, I am eager to learn about real-world cloud scale architectures. Would appreciate your guidance."
    },
    {
        id: 2,
        studentName: "Kavita Rao",
        studentId: "12107721",
        program: "MBA (Final Year)",
        mentorName: "Sneha Patel",
        mentorRegId: "ALU202204",
        topic: "Management Consulting & Case Preparation",
        date: "20 Nov, 2026",
        status: "Pending",
        note: "Ma'am, I am preparing for upcoming campus placements and need guidance on structuring consulting cases."
    },
    {
        id: 3,
        studentName: "Nitin Sethi",
        studentId: "12204431",
        program: "B.Tech CSE (3rd Year)",
        mentorName: "Rahul Sharma",
        mentorRegId: "ALU202200",
        topic: "Frontend Architecture & JavaScript Interviews",
        date: "22 Nov, 2026",
        status: "Pending",
        note: "Hello Rahul sir, I saw your profile and would love your mentorship on building production-grade web applications."
    }
];

// Messages strictly between Institute and Alumni
const defaultMessages = [
    {
        contactId: "ALU202001",
        name: "Aman Verma",
        role: "Alumni (Google)",
        avatar: "AV",
        history: [
            { sender: "them", text: "Hello Aman, we would love to have you as a guest speaker for the upcoming Tech Conclave.", time: "Yesterday" },
            { sender: "me", text: "I would be happy to join! Please share the schedule details.", time: "Yesterday" }
        ]
    },
    {
        contactId: "ALU201902",
        name: "Priya Nair",
        role: "Alumni (Microsoft)",
        avatar: "PN",
        history: [
            { sender: "them", text: "Dear Priya, thank you for mentoring our pre-final year students.", time: "2 days ago" },
            { sender: "me", text: "Glad to help my alma mater! The students have great potential.", time: "2 days ago" }
        ]
    },
    {
        contactId: "ALU202200",
        name: "Rahul Sharma",
        role: "Alumni (Microsoft)",
        avatar: "RS",
        history: [
            { sender: "them", text: "Welcome to the Centralized Alumni Platform! Feel free to reach out to the Alumni Cell for transcripts or campus visits.", time: "10:00 AM" },
            { sender: "me", text: "Thank you! I will be attending the Alumni Reunion in December.", time: "10:15 AM" },
            { sender: "them", text: "Wonderful! We look forward to welcoming you back to campus.", time: "10:20 AM" }
        ]
    },
    {
        contactId: "ALU202204",
        name: "Sneha Patel",
        role: "Alumni (Deloitte)",
        avatar: "SP",
        history: [
            { sender: "them", text: "Hi Sneha, please let us know if Deloitte has openings for campus referrals.", time: "3 days ago" }
        ]
    }
];

const defaultCurrentUser = {
    name: "Rahul Sharma",
    regId: "ALU202200",
    role: "Alumni",
    email: "rahul.sharma@alumni.edu",
    phone: "+91 98765 00112",
    batch: "2022",
    branch: "Computer Science",
    degree: "B.Tech CSE",
    company: "Microsoft",
    designation: "Software Engineer",
    location: "Bangalore",
    skills: "React, Node.js, Python, Cloud Computing",
    bio: "Passionate developer, tech enthusiast, and proud alumnus. Always excited to connect and mentor fellow students.",
    avatar: "RS",
    isMentor: true
};

// Initialize localStorage with structured demo data
function initData() {
    let existingList = null;
    try {
        existingList = JSON.parse(localStorage.getItem("alumni_list"));
    } catch(e) {}

    if (!existingList || !Array.isArray(existingList) || existingList.length === 0 || !existingList[0].regId) {
        localStorage.setItem("alumni_list", JSON.stringify(defaultAlumni));
    }

    if (!localStorage.getItem("alumni_events")) {
        localStorage.setItem("alumni_events", JSON.stringify(defaultEvents));
    }
    if (!localStorage.getItem("alumni_announcements")) {
        localStorage.setItem("alumni_announcements", JSON.stringify(defaultAnnouncements));
    }
    if (!localStorage.getItem("alumni_mentorship")) {
        localStorage.setItem("alumni_mentorship", JSON.stringify(defaultMentorshipRequests));
    }
    if (!localStorage.getItem("alumni_mentees")) {
        localStorage.setItem("alumni_mentees", JSON.stringify(defaultMentees));
    }
    if (!localStorage.getItem("alumni_messages")) {
        localStorage.setItem("alumni_messages", JSON.stringify(defaultMessages));
    }
    if (!localStorage.getItem("currentUser")) {
        localStorage.setItem("currentUser", JSON.stringify(defaultCurrentUser));
    }
}

initData();

function getCurrentUser() {
    try {
        return JSON.parse(localStorage.getItem("currentUser")) || defaultCurrentUser;
    } catch(e) {
        return defaultCurrentUser;
    }
}

function isInstituteUser() {
    const user = getCurrentUser();
    return user && user.role === "Institute";
}

// Update sidebar user details across pages
function updateSidebarUser() {
    const user = getCurrentUser();
    const sidebarName = document.getElementById("sidebarName");
    const sidebarRole = document.getElementById("sidebarRole");
    const userAvatar = document.getElementById("userAvatar");
    const topAvatar = document.getElementById("topAvatar");

    if (sidebarName) sidebarName.textContent = user.name || "User";
    if (sidebarRole) sidebarRole.textContent = user.role || "Alumni";
    
    const initials = user.avatar || (user.name ? user.name.split(" ").map(n => n[0]).join("").substring(0,2).toUpperCase() : "U");
    if (userAvatar) userAvatar.textContent = initials;
    if (topAvatar) topAvatar.textContent = initials;
}

// Global search listener in nav bar
function setupGlobalSearch() {
    const searchInputs = document.querySelectorAll(".nav-bar .search");
    searchInputs.forEach(input => {
        input.addEventListener("keypress", function(e) {
            if (e.key === "Enter" && this.value.trim() !== "") {
                const query = encodeURIComponent(this.value.trim());
                const targetPage = isInstituteUser() ? "institute_directory.html" : "alumni_directory.html";
                window.location.href = `${targetPage}?search=${query}`;
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    updateSidebarUser();
    setupGlobalSearch();
});
