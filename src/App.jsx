import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landing'
import About from './pages/about'
import Collection from './pages/collection'
import ContactUs from './pages/contact-us'
import RootLayout from './layouts/rootLayout'
import MoreProducts from "./pages/landing/components/more-products";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
      
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "collection",
        element: <Collection />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "more-products",
        element: <MoreProducts />,
      },
      ]
    },
   
  ]);
  return <RouterProvider router={router} />;
}

export default App

