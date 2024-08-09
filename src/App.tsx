import PageSection from './PageSection'
import './App.css'

function App() {

  return (
    <>
    <PageSection backgroundColor="#04182B" height={490} padding={"6.25rem 0 0 0"} style={{textAlign: "center"}}>
      <h1>Accelerate your app's growth</h1>
      <p>Your end-to-end solution for every stage of the app marketing journey. Measure, optimize, and scale app growth across platforms.</p>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <button className="App__top btn-primary">Request a demo</button>
        <button className="App__top btn-secondary">Learn more</button>
      </div>
    </PageSection>
    </>
  )
}

export default App
