function Section({ children, title }) {
  return (
    <section className="px-8 py-4 bg-gray-100 flex flex-row border-t">
      <h1 className="w-32">{title}</h1>
      <div className="w-full">{children}</div>
    </section>
  )
}

function Experience({ title, date, subtitle, jobtitle, children, last = false }) {
  return (
    <article className={`${last ? '' : 'pb-4 border-b mb-4'}`}>
      <div className="flex flex-row justify-between">
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
      <h3 className="text-xs">{subtitle}</h3>
      <h4 className="font-medium">{jobtitle}</h4>
      <p className="text-sm text-gray-800">{children}</p>
    </article>
  )
}

function SmallItem({ title, children }) {
  return (
    <div>
      <div>{title}</div>
      {children && <div className="text-sm text-gray-800">{children}</div>}
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
        overflow: 'hidden',
      }}>
      <div className="flex flex-1 justify-between px-8 py-4">
        <div>
          <h1>Léandre Daumont</h1>
          <h2>Software Engineer</h2>
        </div>
        <div>mail coming soon</div>
      </div>
      <Section title="Profile">
        <p>
          Specialized in <b>Fullstack JS</b> with 4 years of experience using React.
        </p>
      </Section>
      <Section title="Experience">
        <Experience
          title="Yubo - Paris"
          date="2019 - Present"
          subtitle="The generation Z social network"
          jobtitle="Lead Software Engineer - Safety">
          Created moderation tools using <b>React</b> with <b>SCSS</b> and <b>Redux</b> for our
          specialists worldwide to keep our platform safe for the users. Backend using{' '}
          <b>Express</b>, <b>Typescript</b> and <b>SocketCluster</b>. Data engineering using{' '}
          <b>Postgres</b>, <b>MongoDB</b>, <b>ElasticSearch</b>, <b>BigQuery</b>, <b>Redis</b> and{' '}
          <b>AWS S3</b>. Deployed on <b>GCP</b> using <b>Kubernetes</b>. Designed views using{' '}
          <b>Figma</b>.
        </Experience>
        <Experience
          title="Sharedress - Paris"
          date="2016 - Present"
          subtitle="B2B app"
          jobtitle="CTO">
          Created a B2B tablet app using <b>Cloud functions</b> in <b>Firebase</b>,{' '}
          <b>React-native</b> and <b>Redux</b> to suggest the business customers the best
          personalized products and services for them.
        </Experience>
        <Experience
          title="Allianz - Paris"
          date="2016 - 2019"
          subtitle="Multinational financial services"
          jobtitle="Software Developer - Social protection department"
          last>
          Created tools to track contracts anomalies and automate parts of communications with
          allowed service providers. Used <b>SAS</b>, <b>SQL</b> and <b>VBA</b> for Excel and
          Access.
        </Experience>
      </Section>
      <Section title="Education">
        <Experience
          title="Ingésup/YNOV - Paris"
          subtitle="Web developement, mobile &amp; IoT"
          jobtitle="Master's Degree"
          date="2017 - 2019">
          Deployed projects on <b>Azure</b>.
        </Experience>
        <Experience
          title="CNAM - Paris"
          subtitle="Analysis and Design of Decision-Making Information Systems"
          jobtitle="License"
          date="2016 - 2017"
          last
        />
      </Section>
      <Section title="Skills">
        <div className="grid grid-cols-3 gap-y-4">
          <SmallItem title="Front">
            React
            <br />
            Redux
            <br />
            React-native
          </SmallItem>
          <SmallItem title="Back">
            Node.js
            <br />
            PHP <span className="text-xs">(made several commercial websites during studies)</span>
          </SmallItem>
          <SmallItem title="DevOps">
            Kubernetes
            <br />
            Docker
            <br />
            GCP
            <br />
            Azure
          </SmallItem>
        </div>
      </Section>
      <Section title="Languages">
        <div className="grid grid-cols-2">
          <SmallItem title="French">Native</SmallItem>
          <SmallItem title="English">Professional use</SmallItem>
        </div>
      </Section>
      <Section title="Hobbies">
        <div className="grid grid-cols-3">
          <SmallItem title="Mobile app dev">For encouraging ideas</SmallItem>
          <SmallItem title="Game dev">Prototyping is fun</SmallItem>
          <SmallItem title="3D modeling">Not an artist... yet</SmallItem>
        </div>
      </Section>
    </div>
  )
}
