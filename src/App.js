import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Dashboard,Expense, LimitExpense, UpComingExpense,  Stacked, Pyramid, Line, Area, Bar, Pie, Financial, ColorMapping } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {

  const {activeMenu} = useStateContext();
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
              <Sidebar/>
               </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
               <Sidebar/>
               </div>
          )}
          <div className= {
            `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72':'flex-2'}`
           
          }>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar/>
            </div>

          </div>

          <div>
            <Routes>
              {/* Dashboard */}
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              {/* Pages */}
              <Route path='/expense' element={<Expense/>}/>
              <Route path='/upcomingexpense' element={<UpComingExpense/>}/>
              <Route path='/limitexpense' element={<LimitExpense/>}/>
              {/* Charts */}
              <Route path='/line' element={<Line/>}/>
              <Route path='/area' element={<Area/>}/>
              <Route path='/bar' element={<Bar/>}/>
              <Route path='/pie' element={<Pie/>}/>
              <Route path='/financial' element={<Financial/>}/>
              <Route path='/pyramid' element={<Pyramid/>}/>
              <Route path='/stacked' element={<Stacked/>}/>
              <Route path='/colormapping' element={<ColorMapping/>}/>
            </Routes>
          </div>
      </div>
      
      </BrowserRouter>
    </div>
  )
}

export default App