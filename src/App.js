import React from 'react';
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTestimony from './components/Testimonies/AddTestimony';
import AddImages from './components/HeroSection/AddImages';
import AddFAQs from './components/FAQs/AddFAQs';
import AddUpdate from './components/Updates/AddUpdate';
import ChangePassword from './components/ChangePassword';
import UpdateList from './components/Updates/UpdateList';
import ImagesList from './components/HeroSection/ImagesList';
import FAQsList from './components/FAQs/FAQsList';
import TestimoniesList from "./components/Testimonies/TestimoniesList";
import Login from './pages/Login';
import Main from './pages/Main';
import { useAuthContext } from './hooks/useAuthContext';


function App() {
  // const user = localStorage.getItem('user')
  const user = useAuthContext()

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {user &&
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path='/dashboard' element={<Main />} />
              <Route path='view_testimonies' element={<TestimoniesList />} />
              <Route path='addtestmonies' element={<AddTestimony />} />
              <Route path='imageList' element={<ImagesList />} />
              <Route path="addImage" element={<AddImages />} />
              <Route path='faqsList' element={<FAQsList />} />
              <Route path="addFAQs" element={<AddFAQs />} />
              <Route path='updateList' element={<UpdateList />} />
              <Route path="addUpdates" element={<AddUpdate />} />
              <Route path='changePassword' element={<ChangePassword />} />
            </Route>
          }

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
