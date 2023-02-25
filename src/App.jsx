import { useState } from "react"


function App() {

  const[file, setFile] = useState()

  function handleFile(event){
    setFile(event.target.file[0])
    console.log(file)
  }

  return (
    <div className="App">
      <h2>File Uploading in Recat JS</h2>
      <form>
        <input type="file" name='file' onChange={handleFile}/>
        <button>Upload</button>
      </form>
    </div>
  )
}

export default App
