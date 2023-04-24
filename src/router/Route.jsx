import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Cetagori from "../pages/Home/cetagori/Cetagori";
import News from "../pages/News/News/News";
import NewsLayout from "./../Layout/NewsLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element: <Cetagori></Cetagori>,
            loader: () => fetch('http://localhost:3001/news')
        },{
            path: '/category/:id',
            element:<Cetagori></Cetagori>,
            loader: ({params}) => fetch(`http://localhost:3001/catagories/${params.id}`)
        }
      ]
    },
    {
      path:'news',
      element: <NewsLayout></NewsLayout>,
      children:[
        {
          path: ':id',
          element:<News></News>,
          loader: ({params}) => fetch(`http://localhost:3001/news/${params.id}`)
        }
      ]
    }
  ]);

  export default router