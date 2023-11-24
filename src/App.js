import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

//import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
//import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css';
import { Sidebar } from '@syncfusion/ej2/navigations';

//import { useStateContext } from './contexts/ContextProvider';

const App = () => {

  const activeMenu = false;
  return (
    <div>
      <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
          <TooltipComponent content="Settings" postion="Top">
            <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-grey text-white' style={{background: 'blue', borderRadius: '50%'}}>
              <FiSettings/>
            </button>

          </TooltipComponent>

        </div>

          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg=secondary-dark-bg bg-white' >
              Sidebar
               </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
               SideBar
               </div>
          )}
          <div className= {
            `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72':'flex-2'}`
           
          }>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              Navbar
            </div>

          </div>

          <div>
            <Routes>
              {/* Dashboard */}
              <Route path='/' element="expense"/>
              <Route path='/dashboard' element="dashboard"/>
              {/* Pages */}
              <Route path='/expense' element="expense"/>
              <Route path='/upcomingexpense' element="upcomingexpense"/>
              <Route path='/limitexpense' element="limitexpense"/>
              {/* Charts */}
              <Route path='/line' element="line"/>
              <Route path='/area' element="area"/>
              <Route path='/bar' element="bar"/>
              <Route path='/pie' element="pie"/>
              <Route path='/financial' element="financial"/>
              <Route path='/pyramid' element="Pyramid"/>
              <Route path='/stacked' element="stacked"/>

            </Routes>
          </div>
      </div>
      
      </BrowserRouter>
    </div>
  )
}

export default App