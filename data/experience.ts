export type ExperienceEntry = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location?: string;
  progression?: string;
};

export type EducationEntry = {
  degree: string;
  school: string;
  period: string;
};

export const workExperience: ExperienceEntry[] = [
  {
    role: "Software Development Engineer",
    company: "Cubic Logics",
    companyUrl: "https://www.cubiclogics.com/",
    period: "Mar 2023 – Feb 2026",
    location: "Bengaluru, Karnataka, India",
    progression:
      "Trainee Software Specialist → Software Specialist → Software Development Engineer",
  },
];

export const education: EducationEntry[] = [
  {
    degree: "Master of Computer Applications, Computer Science",
    school: "Shri Khushal Das University",
    period: "Jul 2022 – Jul 2024",
  },
  {
    degree: "Bachelor of Computer Applications, Computer Science",
    school: "SGN Khalsa PG College",
    period: "Jul 2018 – Sep 2021",
  },
];
