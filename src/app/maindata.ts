export type TimeLineEntry = {
    name: string
    type: "education" | "experience"
    location: string
    startDate: string
    endDate?: string
    url?: string
    description: string
    title: string
    banner?: string
    imgSrc?: string
    active?: boolean
    roleType?: 'Fulltime' | 'Part-time' | 'Consultant' | 'Freelance'
}

export let experienceData: TimeLineEntry[] = [
    {
        name: "Gedu Services",
        type: "experience",
        location: ", Noida Sector 64",
        roleType: "Fulltime",
        startDate: "7 April 2025",
        url: "https://geduservices.com/",
        title: "FrontEnd Developer",
        description: "Developed and maintained responsive web applications using React.js, TypeScript, and TailwindCSS, ensuring clean UI and seamless user experience. Collaborated with backend services built in Node.js to deliver efficient, scalable, and modern solutions.",
        active: true,
    },
    {
        name: "Infosys LTD",
        type: "experience",
        location: ", Mississauga, Ontario, Canada",
        roleType: "Fulltime",
        startDate: "26 July 2022",
        endDate: "25 July 2023",
        url: "https://www.infosys.com/",
        title: "FullStack Software Developer",
        description: "Developed RESTful web services using Java (Spring Boot) and Node.js, enabling efficient front-end and back-end integration Optimized a banking portal with React.js and Spring Boot, enhancing user experience and performance; utilized Node.js for scalable server-side applications.",
        imgSrc: "string",
        active: false,
    },
    {
        name: "IEnergizer",
        type: "experience",
        location: ", Noida Sector 56",
        roleType: "Fulltime",
        startDate: "November 2019",
        endDate: "February 2020",
        url: "https://www.ienergizer.com/",
        title: "Customer Service Representative",
        description: "Maintained customer satisfaction with forward-thinking strategies focused on addressing customer needs and resolving concerns. Provided 100 % primary customer support to internal and external customers.",
        imgSrc: "string",
        active: false,
    }
]


export let educationData: TimeLineEntry[] = [
    {
        title: "Wireless Information Networking",
        type: "education",
        location: ", Peterborough,Ontario,Canada",
        startDate: "September 2020",
        endDate: "April 2022",
        url: "2be",
        description: "Activities and Societies: Raspberry Pi Cloud Security Penetration Testing Achieved the 3rd position among 50 participants in the final project, showcasing exceptional skills and dedication that contributed to a 20% increase in project efficiency, as evaluated by a panel of judges.",
        name: "Sir Sanford Fleming College",
    },
    {

        title: "Bachelors Of Computer Application",
        type: "education",
        location: ", Noida Sector 64, Uttar Pradesh",
        startDate: "August 2015",
        endDate: "August 2018",
        url: "2be",
        description: "Applied advanced algorithm design and implementation skills to optimize the performance of a critical system module, resulting in a 30% reduction in processing time and significantly enhancing overall system functionality.",
        name: "Institute Of Management Studies",
    },
    {
        title: "Penetration Tester Certification",
        type: "education",
        location: ", Online",
        startDate: "April 2022",
        banner: "https://tryhackme.com/api/v2/badges/public-profile?userPublicId=911279",

        //<iframe src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=911279" style='border:none;'></iframe>

        url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-NY5NISYXGG.pdf",
        description: "Securing Systems Ethically Hacking Systems, Servers, Network,Network Inspection,Maintaining Access",
        name: "TryHackme.com",
    },
    {
        title: ".Net Certification",
        type: "education",
        location: ", Noida Sector - 15",
        startDate: ", September 2018",
        endDate: "April 2019",
        url: "2be",
        description: ".net Programming",
        name: "Cetpa Infotech",
    },
    {
        title: "Senior Secondary Education",
        type: "education",
        location: ", Preet Vihar, Delhi",
        startDate: "April 2014",
        endDate: "April 2015",
        url: "2be",
        description: "2be",
        name: "Universal Public School",
    },
]