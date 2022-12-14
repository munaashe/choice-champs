import { Suspense, lazy } from 'react'
import { RouteObject } from 'react-router'

//Suspense Loader
import SuspenseLoader from '../general/components/SuspenseLoader'

//Layouts
import GeneralPagesLayout from '../layouts/GeneralPagesLayout'
import AdminPagesLayout from '../layouts/AdminPagesLayout'
import BaseLayout from '../layouts/BaseLayout'

import PrivateRoute from './PrivateRoute'

const Loader = (Component: any) => (props: any) =>
    (
        <Suspense fallback={<SuspenseLoader />}>
            <Component {...props} />
        </Suspense>
    )

//General Pages
const Home = Loader(lazy(() => import('../general/pages/home')))
const About = Loader(lazy(() => import('../general/pages/about')))
const Blog = Loader(lazy(() => import('../general/pages/blog')))
const Alumni = Loader(lazy(() => import('../general/pages/alumni')))
const Article = Loader(lazy(() => import('../general/pages/article')))
const Event = Loader(lazy(() => import('../general/pages/event')))
const RollCallYearGeneral = Loader(
    lazy(() => import('../general/pages/roll-call-year'))
)
const AlumniEvent = Loader(lazy(() => import('../general/pages/alumniEvent.tsx')))

//Admin Pages
const AdminBlog = Loader(lazy(() => import('../admin/pages/blog')))
const Events = Loader(lazy(() => import('../admin/pages/events')))
const Executive = Loader(lazy(() => import('../admin/pages/executive')))
const PresidentInitiatives = Loader(
    lazy(() => import('../admin/pages/president-initiatives'))
)
const PhotoGallery = Loader(lazy(() => import('../admin/pages/gallery')))
const Presidents = Loader(lazy(() => import('../admin/pages/presidents')))
const RollCall = Loader(lazy(() => import('../admin/pages/roll-call')))
const RollCallYear = Loader(lazy(() => import('../admin/pages/roll-call-year')))
const Login = Loader(lazy(()=> import('../admin/pages/login')))

//Add Pages
const AddBlog = Loader(lazy(() => import('../admin/pages/add/AddBlog')))
const AddPicture = Loader(lazy(() => import('../admin/pages/add/AddPicture')))
const AddEvent = Loader(lazy(() => import('../admin/pages/add/AddEvent')))
const AddPresInitiative = Loader(
    lazy(() => import('../admin/pages/add/AddPresInitiative'))
)
const AddPresident = Loader(
    lazy(() => import('../admin/pages/add/AddPresident'))
)
const AddRollCallYear = Loader(
    lazy(() => import('../admin/pages/add/AddRollCallYear'))
)

const routes: RouteObject[] = [
    {
        path: '',
        element: <GeneralPagesLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'blog',
                element: <Blog />,
            },
            {
                path: 'alumni',
                element: <Alumni />,
            },
            {
                path: 'alumni/roll-call/:year',
                element: <RollCallYearGeneral />,
            },
            {
                path: 'blog/:id',
                element: <Article />,
            },
            {
                path: 'events/:id',
                element: <Event />,
            },
            {
                path: 'alumni/:id',
                element: <AlumniEvent/>
            },
            {
                path: 'website',
                element: <p>page not found sorry</p>,
            },
        ],
    },
    {
        path: 'mambo',
        element: <PrivateRoute><AdminPagesLayout /></PrivateRoute>,
        children: [
            {
                path: 'blog',
                element: <AdminBlog />,
            },
            {
                path: 'events',
                element: <Events />,
            },
            {
                path: 'executive',
                element: <Executive />,
            },
            {
                path: 'initiatives',
                element: <PresidentInitiatives />,
            },
            {
                path: 'presidents',
                element: <Presidents />,
            },
            {
                path: 'roll-call',
                element: <RollCall />,
            },
            {
                path: 'roll-call/:year',
                element: <RollCallYear />,
            },
            {
                path: 'gallery',
                element: <PhotoGallery />,
            },
            //add pages
            {
                path: 'blog/add',
                element: <AddBlog />,
            },
            {
                path: 'gallery/add',
                element: <AddPicture />,
            },
            {
                path: 'events/add',
                element: <AddEvent />,
            },
            {
                path: 'initiatives/add',
                element: <AddPresInitiative />,
            },
            {
                path: 'presidents/add',
                element: <AddPresident />,
            },
            {
                path: 'roll-call/add',
                element: <AddRollCallYear />,
            },
        ],
    },
    {
        path: 'ngena',
        element: <BaseLayout/>,
        children: [
            {
            path: '',
            element: <Login/>
            },
        ]
    },
]

export default routes
