import Home from '../pages/Home'
import Basket from '../pages/Basket'
import Root from '../pages/Root'

export const ROUTES = [
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path: '',
                element: <Home />
            },
            {
                path: 'basket',
                element: <Basket/>
            }
           
        ]
    }
]