/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Outlet, LinkProps, useResolvedPath, useMatch, Link } from "react-router-dom";

const CustomLink = ({ children, to, ...props }: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <>
      <Link
        className='nav-link'
        //className={ match ? "active-class" : "none" }
        to={to}
        {...props}
      >
        {children}
      </Link>
    </>
  );
}

const AppLayout = () => {

  return (
    <>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark fixed-top'>
        <div className='container-fluid'>
          <a href="#" className='navbar-brand'>React Learnings</a>

          <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target='#navbarid'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div id='navbarid' className='collapse navbar-collapse flex-row-reverse'>
            <ul className='navbar-nav text-center'>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarHookMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Hooks
                </a>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarHookMenuLink">
                  <li>
                    <CustomLink className="dropdown-item" to="/usestate">Use state</CustomLink>
                  </li>
                  <li className='nav-item'>
                    <CustomLink className="dropdown-item" to="/useeffets">Use effects</CustomLink>
                  </li>
                  <li className='nav-item'>
                    <CustomLink className="dropdown-item" to="/usecontext">Use context</CustomLink>
                  </li>
                  <li className='nav-item'>
                    <CustomLink className="dropdown-item" to="/useref">Use ref</CustomLink>
                  </li>
                  <li className='nav-item'>
                    <CustomLink className="dropdown-item" to="/usereducer">Use reducer</CustomLink>
                  </li>
                  <li className='nav-item'>
                    <CustomLink className="dropdown-item" to="/usememo">Use memo</CustomLink>
                  </li>
                  <li className='nav-item'>
                    <CustomLink className="dropdown-item" to="/usecallback">Use callback</CustomLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarMobXMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  MobX
                </a>
                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarMobXMenuLink">
                  <li>
                    <CustomLink className="dropdown-item" to="/mobx">Todo List</CustomLink>
                  </li>
                </ul>
              </li>

              <li className='nav-item'>
                <CustomLink to="/usestate">Use state</CustomLink>
              </li>
              <li className='nav-item'>
                <CustomLink to="/useeffets">Use effects</CustomLink>
              </li>

            </ul>
          </div>


        </div>
      </nav>

      <Outlet />
    </>
  )
};
export default AppLayout;
