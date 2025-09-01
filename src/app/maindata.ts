export type TimeLineEntry = {
    name: string
    type: "education" | "experience"
    location: string
    startDate: string
    endDate?: string
    description: string
    title: React.ReactNode;
    content?: React.ReactNode
    banner?: string
    link2Web: string
    imgSrc?: string
    active?: boolean
    roleType?: 'Fulltime' | 'Part-time' | 'Consultant' | 'Freelance'
}

export const experienceData: TimeLineEntry[] = [
    {
        name: "Gedu Services",
        type: "experience",
        location: ", Noida Sector 64",
        roleType: "Fulltime",
        startDate: "7 April 2025",
        imgSrc: "/gedu.png",
        link2Web: "https://gedu.global/",
        title: "FrontEnd Developer",
        description: "Worked as a Frontend Developer, building responsive and user-friendly interfaces with React.js, Next.js, and JavaScript. Implemented dynamic UI components using TailwindCSS and Bootstrap, ensuring cross-device compatibility. Collaborated with backend teams to integrate RESTful APIs and optimize performance for seamless user experiences.",
        active: true,
    },
    {
        name: "Infosys LTD",
        type: "experience",
        location: ", Mississauga, Ontario, Canada",
        roleType: "Fulltime",
        startDate: "26 July 2022",
        endDate: "25 July 2023",
        imgSrc: "/infosys.jpg",
        link2Web: "https://www.infosys.com/",
        title: "FullStack Software Developer",
        description: "Developed RESTful APIs and scalable microservices using Java (Spring Boot) and Node.js, enabling seamless front-end/back-end integration. Built responsive web apps (React.js, Spring Boot) and optimized portals for performance and security with JWT. Designed robust databases (MongoDB/MySQL), resolved critical bugs, and improved system scalability, boosting user engagement and reliability.",
        active: false,
    },
    {
        name: "IEnergizer",
        type: "experience",
        location: ", Noida Sector 56",
        roleType: "Fulltime",
        startDate: "November 2019",
        endDate: "February 2020",
        link2Web: "https://www.ienergizer.com/",
        imgSrc: "ie.jpg",
        title: "Customer Service Representative",
        description: "Maintained customer satisfaction with forward-thinking strategies focused on addressing customer needs and resolving concerns. Provided 100 % primary customer support to internal and external customers.",
        active: false,
    }
]


export const educationData: TimeLineEntry[] = [
    {
        title: "Wireless Information Networking",
        type: "education",
        location: ", Peterborough,Ontario,Canada",
        startDate: "September 2020",
        endDate: "April 2022",
        link2Web: "https://flemingcollege.ca/",
        imgSrc: "/fleming.png",
        description: "Activities and Societies: Raspberry Pi Cloud Security Penetration Testing Achieved the 3rd position among 50 participants in the final project, showcasing exceptional skills and dedication that contributed to a 20% increase in project efficiency, as evaluated by a panel of judges.",
        name: "Sir Sanford Fleming College",
    },
    {

        title: "Bachelors Of Computer Application",
        type: "education",
        location: ", Noida Sector 64, Uttar Pradesh",
        startDate: "August 2015",
        endDate: "August 2018",
        link2Web: "https://www.imsnoida.com/",
        imgSrc: "ims.jpg",
        description: "Applied advanced algorithm design and implementation skills to optimize the performance of a critical system module, resulting in a 30% reduction in processing time and significantly enhancing overall system functionality.",
        name: "Institute Of Management Studies",
    },
    {
        title: "Penetration Tester Certification",
        type: "education",
        location: ", Online",
        link2Web: "https://tryhackme.com/",
        startDate: "April 2022",
        banner: "https://tryhackme.com/api/v2/badges/public-profile?userPublicId=911279",

        //<iframe src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=911279" style='border:none;'></iframe>

        imgSrc: "tryhackme.png",
        description: "Certified as a Junior Penetration Tester with hands-on experience in ethical hacking tools, techniques, and methodologies. Gained practical knowledge in vulnerability assessment, exploitation, and security best practices.",
        name: "TryHackme.com",
    },
    {
        title: ".Net Certification",
        type: "education",
        location: ", Noida Sector - 15",
        link2Web: "https://www.cetpainfotech.com/",
        startDate: ", September 2018",
        endDate: "April 2019",
        imgSrc: "net.png",
        description: "Achieved certification in .NET with hands-on training in C#, ASP.NET, and application development. Strengthened skills in building scalable, enterprise-ready software solutions.",
        name: "Cetpa Infotech",
    },
    {
        title: "Senior Secondary Education",
        type: "education",
        location: ", Preet Vihar, Delhi",
        startDate: "April 2014",
        link2Web: "https://universalpublicschool.in/",
        endDate: "April 2015",
        imgSrc: "ups.jpg",
        description: "“Completed Senior Secondary Education in Commerce with Mathematics, where I gained strong knowledge of Accounts, Business Studies, and Economics. Alongside, I developed technical skills through Computer Programming, which enhanced my logical thinking and problem-solving abilities. This blend of commerce and technical subjects built a balanced foundation in both analytical and computational domains.",
        name: "Universal Public School",
    },
]