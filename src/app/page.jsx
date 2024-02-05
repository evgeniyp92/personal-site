const data = {
  activeSince: 2019,
  skills: [],
  techStacks: {
    __head: 1,
    1: {
      platform: "Desktop",
      stack: ["C#", ".NET Core", "Powershell"],
      usingSince: 2019,
      next: 2,
    },
    2: {
      platform: "Web",
      stack: ["HTML", "CSS", "ES5", "jQuery"],
      usingSince: 2020,
      next: 3,
    },
    3: {
      platform: "Web",
      stack: ["PostgreSQL", "Express", "React", "Node"],
      usingSince: 2021,
      next: 4,
    },
    4: {
      platform: "Web",
    },
  },
  contactInfo: "contact@${firstName}${lastName}.com",
};

export default function Home() {
  return (
    <div className='w-full h-full p-4'>
      <div className='py-2'>
        <h1 className='font-extralight text-6xl'>Evgeniy Pimenov</h1>
        <h2 className='font-extralight text-2xl'>Veteran software developer, former United States Air Force</h2>
      </div>
      <div className='py-2'>
        <h2 className='font-light text-2xl'>Skills</h2>
        <ul>
          <li>Frontend</li>
          <li>Backend</li>
          <li>Server/Devops</li>
          <li>PM</li>
          <li>Misc</li>
        </ul>
      </div>
      <div className='py-2'>
        <h2 className='font-light text-2xl'>Projects</h2>
        <ul>
          <li>Lost Horizon</li>
          <li>QA Toolkit</li>
          <li>Equilibrium</li>
          <li>Crimson Tide</li>
          <li>Fahrenheit 451</li>
        </ul>
      </div>
    </div>
  );
}
