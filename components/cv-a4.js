function Section({ children, title }) {
  return (
    <section className="p-4 bg-gray-100 flex flex-row border-t-2 border-red-500">
      <h1 className="w-2/12">{title}</h1>
      <div className="w-10/12">{children}</div>
    </section>
  )
}

function Experience({ title, date, subtitle, jobtitle, desc, last = false }) {
  return (
    <article className={`${last ? '' : 'pb-4 border-b  mb-4'}`}>
      <div className="flex flex-row justify-between">
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
      <h3>{subtitle}</h3>
      <h4 className="font-medium">{jobtitle}</h4>
      <p className="text-sm">{desc}</p>
    </article>
  )
}

export default function CV(props) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        boxSizing: 'border-box',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        height: '297mm',
        margin: '0 auto',
        // transform: 'scale(1.0)',
        transformOrigin: 'top left',
        width: '210mm',
      }}>
      <div>
        <h1>Léandre Daumont</h1>
      </div>
      <Section title="Experience">
        <Experience
          title="Yubo - Paris"
          date="Oct. 2019 - Present"
          subtitle="The generation Z social network"
          jobtitle="Safety - Lead Software Engineer"
          desc="Created great satefy tools for our safety specialists working all around the world."
        />
        <Experience
          title="Allianz - Paris"
          date="2016 - 2019"
          subtitle="Multinational financial services"
          jobtitle="Software Developer"
          desc="Created tools to track contracts anomalies and automate part of communications with allowed service providers."
          last
        />
      </Section>
      <Section title="Education">
        <Experience
          title="Master's Degrees"
          subtitle="Web developement, mobile &amp; IoT"
          date="2017 - 2019"
        />
      </Section>
      <section className="p-4">
        <h1>Skills</h1>
        <ol>
          <li>ReactJs</li>
          <li>NodeJs</li>
          <li>Redux</li>
          <li>Kubernetes</li>
        </ol>
      </section>
      <section className="p-4">
        <h1>Hobbies</h1>
        <ol>
          <li>Game dev</li>
          <li>Software</li>
          <li>3D modeling</li>
        </ol>
      </section>
      <section className="p-4">
        <h1>let me some time to fill it pls</h1>
      </section>
    </div>
  )
}
