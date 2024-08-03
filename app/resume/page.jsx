"use client"

import { SiFastapi, SiNumpy, SiPytorch, SiStreamlit, SiDjango, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPython,

} from "react-icons/fa"
import { motion } from "framer-motion"

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

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
      fieldName: "Language",      fieldValue: "English, Vietnamese",
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
      icon: <SiFastapi size="2em" />,
      name: "FastAPI",
    },
    {
      icon: <SiNumpy size="2em" />,
      name: "Numpy",
    },
    {
      icon: <SiPytorch size="2em" />,
      name: "Pytorch",
    },
    {
      icon: <SiStreamlit size="2em" />,
      name: "Streamlit",
    },
    {
      icon: <SiDjango size="2em" />,
      name: "Django",
    },
    {
      icon: <SiTailwindcss size="2em" />,
      name: "Tailwindcss",
    },
    {
      icon: <SiNextdotjs size="2em" />,
      name: "Next.js",
    },
    {
      icon: <FaHtml5 size="2em" />,
      name: "HTML",
    },
    {
      icon: <FaCss3 size="2em" />,
      name: "CSS",
    },
    {
      icon: <FaJs size="2em" />,
      name: "Javascript",
    },
    {
      icon: <FaReact size="2em" />,
      name: "React",
    },
    {
      icon: <FaNodeJs size="2em" />,
      name: "Node.js",
    },
    {
      icon: <FaPython size="2em" />,
      name: "Python",
    }
  ]
}

const Resume = () => {
  return <motion.div 
    initial={{ opacity: 0}} 
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
                      {experience.items.map((item, index) => {
                        return <li>
                          <span>{item.duration}</span>
                          <h3>{item.position}</h3>
                          <div>
                            <span></span>
                            <p>{item.company}</p>
                          </div>
                        </li>
                      })}
                  </ScrollArea>
                </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
                Education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
                Skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
                About
            </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>
}

export default Resume