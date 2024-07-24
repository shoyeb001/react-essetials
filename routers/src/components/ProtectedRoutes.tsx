import { Navigate, Outlet } from 'react-router-dom'
export const ProtectedRoutes = () => {
    let auth = { 'token': false }
    return (
        auth.token ? <Outlet /> : <Navigate to='/home' />
    )
}
