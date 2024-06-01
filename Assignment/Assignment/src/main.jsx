
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';
import { BrowserRouter } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css"

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
)
