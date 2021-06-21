export default function cv(props) {
  return (
    <div
      style={{
        height: '297mm',
        width: '210mm',
        transformOrigin: 'top left',
        transform: 'scale(0.1)',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
      }}>
      <div style={col}>
        <div style={{ backgroundColor: '#ccc', ...section }}>
          <h1>Experiences</h1>
          <ol>
            <li>2019 - now - Yubo - Lead Software Engineer</li>
            <li>2018 - now - Sharedress - CTO</li>
            <li>2016 - 2019 - Allianz - Social Protection Dev</li>
          </ol>
        </div>
        <div style={{ backgroundColor: '#eee', ...section }}>
          <h1>Skills</h1>
          <ol>
            <li>ReactJs</li>
            <li>NodeJs</li>
            <li>Redux</li>
          </ol>
        </div>
      </div>
      <div style={col}>
        <div style={{ backgroundColor: '#ddd', ...section }}>
          <h1>Hobbies</h1>
          <ol>
            <li>Game dev</li>
            <li>Software</li>
            <li>3D modeling</li>
          </ol>
        </div>
        <div style={{ backgroundColor: '#aaa', ...section }}>
          <h1>JSP encore</h1>
        </div>
      </div>
    </div>
  )
}

const col = { flex: 1, flexDirection: 'column', display: 'flex' }
const section = { padding: 10 }
