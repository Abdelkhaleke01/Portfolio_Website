import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <nav>
                <ul>
                    <li className='homekleur'><Link to="/">Home</Link></li>
                    <li><Link to="/about">Over Mij</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/projects">Project</Link></li>
                </ul>

            </nav>

            <Outlet />
        </>
    );
};

export default Navigation; 