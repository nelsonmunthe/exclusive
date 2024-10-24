import { NavLink, useLocation } from "react-router-dom";

const Path = () => {
    const location =  useLocation();

    const paths = location?.pathname.split('/')

    return(
        <div className="flex gap-x-2 items-center">
            {
                paths.map(item => {
                    if(item){
                        const text= item.split('').map((item, index) => index === 0 ? item.toUpperCase() : item).join('')
                        return <div className="flex gap-x-2" key={item}>
                            <NavLink  to={item} className="text-md">{text}</NavLink>
                            <label  htmlFor="path" className="text-md">/</label>
                        </div>
                    } 
                })
            }
        </div>
    )
};

export default Path;