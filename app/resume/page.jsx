"use client"

import { SiFastapi, SiNumpy, SiPytorch, SiStreamlit, SiDjango, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,

} from "react-icons/fa"
import { motion } from "framer-motion"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";


const about = {
  title: "About Me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quam sint quibusdam neque perferendis dignissimos, hic ipsa quod numquam nulla dolorem saepe natus labore quae voluptate nisi! Alias, et repellendus!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Khanh Thanh",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+86) 364491720",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Vietnam",
    },
    {
      fieldName: "Email",
      fieldValue: "thanhkt27507@gmail.com",
    },
    {
      fieldName: "Language", fieldValue: "English, Vietnamese",
    },
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel diam non nisi faucibus tempor. Donec viverra, neque vel fringilla laoreet, est nisi consectetur velit, vel malesuada lectus velit vel velit. Sed in condimentum velit, ut fermentum neque. Morbi consectetur, neque vel scelerisque dignissim, mauris mi consectetur enim, non consectetur neque nunc vel velit. Sed vel turpis ac velit semper pulvinar.',
  items: [
    {
      company: "Team Vietnam ",
      position: "Software Engineer",
      duration: "May 2021 - Present",
    },
    {
      company: "Team Singapore ",
      position: "Software Engineer",
      duration: "March 2020 - May 2021",
    },
    {
      company: "Team Japan ",
      position: "Software Engineer",
      duration: "January 2019 - March 2020",
    },
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel diam non nisi faucibus tempor. Donec viverra, neque vel fringilla laoreet, est nisi consectetur velit, vel malesuada lectus velit vel velit. Sed in condimentum velit, ut fermentum neque. Morbi consectetur, neque vel scelerisque dignissim, mauris mi consectetur enim, non consectetur neque nunc vel velit. Sed vel turpis ac velit semper pulvinar.',
  items: [
    {
      school: "University of Singapore",
      degree: "Bachelor of Computer Science",
      duration: "September 2016 - May 2020",
    },
    {
      school: "National University of Singapore",
      degree: "Master of Computer Science",
      duration: "September 2020 - Present",
    },
    {
      school: "National University of Singapore",
      degree: "Master of Computer Science",
      duration: "September 2020 - Present",
    },
  ]
}

const skills = {
  title: "My Skills",
  description: "lord of Computer Science",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 s />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },

    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiFastapi />,
      name: "FastAPI",
    },
    {
      icon: <SiPytorch />,
      name: "Pytorch",
    },
    {
      icon: <SiStreamlit />,
      name: "Streamlit",
    },
    {
      icon: <SiDjango />,
      name: "Django",
    },

  ]
}

const Resume = () => {
  return <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.4, delay: 2.4, ease: "easeIn" } }}

    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
    <div className="container mx-auto">
      <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="about" index={0}>About</TabsTrigger>
          <TabsTrigger value="experience" index={1}>Experience</TabsTrigger>
          <TabsTrigger value="education" index={2}>Education</TabsTrigger>
          <TabsTrigger value="skills" index={3}>Skills</TabsTrigger>
        </TabsList>
        <div className="min-h-[70vh] w-full">
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span
                        className="text-accent"
                      >{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.company}</p>
                      </div>
                    </li>
                  })}
                </ul>

              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span
                        className="text-accent"
                      >{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.school}</p>
                      </div>
                    </li>
                  })}
                </ul>

              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="skills" className="w-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                {skills.skillList.map((skill, index) => {
                  return <li key={index} className="flex items-center gap-3">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                })}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                  return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                    <span className="text-white/60">{item.fieldName}</span>
                    <span className="">{item.fieldValue}</span>
                  </li>
                })}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>
}

export default Resume