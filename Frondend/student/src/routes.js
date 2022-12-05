import MainPage from "./pages/MainPage.vue"
import AddData from "./pages/AddData.vue"
import UpdateData from "./pages/UpdateData.vue"

export default [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/add',
        component: AddData
    },
    {
        path: '/update',
        component: UpdateData
    }

]

