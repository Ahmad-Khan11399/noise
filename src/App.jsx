import "./App.css";
import Intro from "./intro.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

 function App() {

return (
<>
     <Router>
      <Routes>
        <Route path="/" element={<Intro />}>
        </Route>
      </Routes>
    </Router>
</>
)
}
export default App;
