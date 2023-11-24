import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

//import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
//import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css';

//import { useStateContext } from './contexts/ContextProvider';

const App = () => {
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

      </div>
      
      </BrowserRouter>
    </div>
  )
}

export default App