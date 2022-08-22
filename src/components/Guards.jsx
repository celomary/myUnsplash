import { Navigate } from "react-router-dom"

const Guards = ({Component, redirectRoute, condition}) => {
    return condition ? <Component /> : <Navigate to={redirectRoute} />
}

export default Guards;