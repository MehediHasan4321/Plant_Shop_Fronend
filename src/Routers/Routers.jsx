import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home_Page from '../Pages/Home_Page/Home_Page'
import Main_Layout from '../Layout/Main_Layout/Main_Layout'
import Shop from '../Pages/Shop/Shop'

const Routers = createBrowserRouter([
    {
        path:'/',
        element:<Main_Layout/>,
        children:[
            {
                path:'/',
                element:<Home_Page/>
            },
            {
                path:'/shop',
                element:<Shop/>
            }
        ]
    }
])

export default Routers