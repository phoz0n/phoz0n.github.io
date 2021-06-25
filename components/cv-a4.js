function Section({ children, title }) {
  return (
    <section className="p-8 bg-gray-100 flex flex-row border-t">
      <h1 className="w-2/12">{title}</h1>
      <div className="w-10/12">{children}</div>
    </section>
  )
}

function Experience({ title, date, subtitle, jobtitle, children, last = false }) {
  return (
    <article className={`${last ? '' : 'pb-8 border-b mb-8'}`}>
      <div className="flex flex-row justify-between">
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
      <h3 className="text-xs">{subtitle}</h3>
      <h4 className="font-medium">{jobtitle}</h4>
      <p className="text-sm">{children}</p>
    </article>
  )
}

function SmallItem({ title, desc }) {
  return (
    <div className="mb-8">
      <div>{title}</div>
      {desc && <div className="text-sm text-gray-800">{desc}</div>}
    </div>
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
      <div className="flex justify-between p-8">
        <div>
          <h1>Léandre Daumont</h1>
          <h2>Software Engineer</h2>
        </div>
        <div>mail coming soon</div>
      </div>
      <Section title="Experience">
        <Experience
          title="Yubo - Paris"
          date="Oct. 2019 - Present"
          subtitle="The generation Z social network"
          jobtitle="Safety - Lead Software Engineer">
          Engineered satefy tools for our safety specialists working all around the world to keep
          the Yubo safe.
        </Experience>
        <Experience
          title="Allianz - Paris"
          date="2016 - 2019"
          subtitle="Multinational financial services"
          jobtitle="Software Developer"
          last>
          Created tools to track contracts anomalies and automate parts of communications with
          allowed service providers.
        </Experience>
      </Section>
      <Section title="Education">
        <Experience
          title="Ingésup/YNOV - Paris"
          subtitle="Web developement, mobile &amp; IoT"
          jobtitle="Master's Degrees"
          date="2017 - 2019">
          Used Angular, React, Ionic, Xamarin.
        </Experience>
        <Experience
          title="CNAM - Paris"
          subtitle="Analysis and Design of Decision-Making Information Systems"
          jobtitle="License"
          date="2016 - 2017"
          last>
          ROLAP, MOLAP, RDBMS, SQL, Java, Unit testing.
        </Experience>
      </Section>
      <Section title="Skills">
        <div className="grid grid-cols-3">
          <SmallItem title="Front" desc={'React, Redux, React-native'} />
          <SmallItem title="Back" desc={'Node.js, PHP'} />
          <SmallItem title="DevOps" desc={'Kubernetes, Docker, GCP, Azure'} />
        </div>
      </Section>
      <Section title="Languages">
        <div className="grid grid-cols-2">
          <SmallItem title="French" desc="Native" />
          <SmallItem title="English" desc="Professional" />
        </div>
      </Section>
      <Section title="Hobbies">
        <div className="grid grid-cols-3">
          <SmallItem title="Mobile app dev" desc="For encouraging ideas" />
          <SmallItem title="Game dev" desc="Prototyping is fun" />
          <SmallItem title="3D modeling" desc="Not an artist... yet" />
        </div>
      </Section>
    </div>
  )
}
