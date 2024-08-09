import PageSection from './PageSection'
import './App.css'

function App() {

  return (
    <>
    <PageSection backgroundColor="#04182B" height="fit" padding={"6.25rem 0 0 0"} style={{textAlign: "center", padding: "40px 0"}}>
      <div className='content__cont vert' style={{maxWidth: 700}}>
        <h1>Accelerate your app's growth</h1>
        <p>Your end-to-end solution for every stage of the app marketing journey. Measure, optimize, and scale app growth across platforms.</p>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem", padding: "1rem 0"}}>
          <button className="App__top btn-primary">Request a demo</button>
          <button className="App__top btn-secondary">Learn more</button>
        </div>
      </div>
    </PageSection>
    </>
  )
}

export default App
