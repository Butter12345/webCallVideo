import BaseForm from './components/forms/BaseForm';
import SignUp from './components/forms/signUp';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './components/layouts/AppLayout';
import Dashboard from './components/layouts/Dashboard';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/acceuil" element={ <Dashboard/> } />
        <Route path="/" element={
            <AppLayout>
              <BaseForm/>
            </AppLayout>
            } />
        <Route path="/sign-up" element={
            <AppLayout>
              <SignUp />
            </AppLayout>
          } />
      </Routes>
      
    </div>
  )
}

/*
<AppLayout>
        <Routes>
            <Route path="/" element={<BaseForm />} />
            <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </AppLayout>

*/
