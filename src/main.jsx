import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AddCoffee from './componente/AddCoffee';
import UpdateCoffee from './componente/UpdateCoffee';
import Main from './Layout/Main';
import SingUp from './componente/SingUp';
import AuthProvider from './componente/AuthProvider';
import Users from './componente/Users';
import SignIn from './componente/SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <App></App>,
        loader: () => fetch('https://coffe-store-server-eight-tau.vercel.app/coffee')
      },
      {
        path: '/addCoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://coffe-store-server-eight-tau.vercel.app/coffee/${params.id}`)
      },
      {
        path: '/singUp',
        element: <SingUp></SingUp>
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('https://coffe-store-server-eight-tau.vercel.app/user')
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
