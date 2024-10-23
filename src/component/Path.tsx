import { NavLink, useLocation } from "react-router-dom";

const Path = () => {
    const location =  useLocation();

    const paths = location?.pathname.split('/')
    return(
        <div className="flex">
            <NavLink to={'/'}>Home</NavLink>
            {
                paths.map(item => {
                    if(item !== ''){
                        return <NavLink to={item}></NavLink>
                    }
                })
            }
        </div>
    )
};

export default Path;