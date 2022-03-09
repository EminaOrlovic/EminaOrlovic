/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Emina",
  logo_name: "Emina Orlovic",
  nickname: "",
  full_name: "Emina Orlovic",
  subTitle:
    "Strong Communication Skills, Creativity, and Leadership Experience. Eager to learn new skills and expand my knowledge.",
  resumeLink: "",
  mail: "mailto:emina.orlovic1@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "",
  linkedin: "https://www.linkedin.com/in/emina-orlovic-314b7a233/",
  gmail: "emina.orlovic1@gmail.com",
  gitlab: "",
  facebook: "",
  twitter: "",
  instagram: "",
};

const degrees = {
  degrees: [
    {
      title: "Pheonix University",
      subtitle: "Bachelor of Science in Criminal Justice",
      logo_path: "uopx-logo.png",
      alt_name: "phoenix",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ Analyzed historical and current domestic violence cases to identify trends and patterns to help prevent and respond to domestic violence.",
        "⚡ Examined statistical data on various case studies and charted trends for easier interpretation.",
        "⚡ Studied the importance of data science in the field of criminal justice to understand the need for data science in the field of criminal justice.",
      ],
      website_link: "https://www.phoenix.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Deep Learning Specialization",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/737a9587023c666b8e6cb303157aaeba",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#47A048",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteering",
  description:
    "I am someone who can bring a diverse skill set and creative drive to any professional team. I specialize in thinking outside the box to find unique solutions for the task at hand. Working hard to produce and excel, and work around difficult, extenuating circumstances.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Shift Supervisor and Team Lead",
          company: "Bath and Body Works",
          company_url: "https://www.bathandbodyworks.com/",
          logo_path: "bbw.png",
          duration: "October 2020 - Present",
          location: "Snellville, GA",
          description:
            "Ensured that the we have a high level of customer satisfaction and customer service. I also worked with the team to ensure that the company was on track to meet its goals. I was responsible for ensuring that the team was on schedule and that the team was working to meet the company's goals.",
          color: "#2962FF",
        },
        {
          title: "Top Seller",
          company: "Bath and Body Works",
          company_url: "https://www.bathandbodyworks.com/",
          logo_path: "bbw.png",
          duration: "December 2017 - October 2020",
          location: "Snellville, GA",
          description:
            "As a top seller, I was responsible for ensuring that the team was on target and meeting their sales goals for the week. Also my main focus was to be a subject matter expert on all the products that are being sold to ensure that the customer was getting the best possible experience and a product they will love.",
          color: "#2962FF",
        },
        {
          title: "Sales Associate",
          company: "Bath and Body Works",
          company_url: "https://www.bathandbodyworks.com/",
          logo_path: "bbw.png",
          duration: "August 2016 - December 2017",
          location: "Snellville, GA",
          description:
            "I was responsible for qualifying the customer so I can understand their needs and provide the best recommendations. Working in multitude of different areas of the business, from customer service, working the registers to sales.",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Volunteer Experience",
      experiences: [
        {
          title: "Citizen's Police Academy",
          company: "City of Snellville",
          company_url:
            "https://www.snellville.org/police-department/citizens-police-academy",
          logo_path: "cpa.png",
          duration: "Spring of 2017",
          location: "Snellville, GA",
          description:
            "The Snellville Citizen's Police Academy, founded in the spring of 2003, is a ten (10) week program held in the spring and fall each year. The Academy is designed to educate the public about the operation of the police department and how community involvement can help to deter crime.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "undraw_modern_professional_re_3b6l.svg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Medium.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  degrees,
  certifications,
  experience,
  contactPageData,
};
