
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from "./components/Profile";



import Products from './components/Products'
import Orders from './components/Orders'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Profile />
    </BrowserRouter>
  );
}

export default App;

    <Router>
      <div>

        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
        
        </Routes>
      </div>
    </Router>
  )
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

