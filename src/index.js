import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

    var test = [
        'Ilya', 'Wise'
    ];


    function App() {
        return (
              <div className='testNameReact'>
           <ul>
               <li>One</li>
               <li>One</li>
               <li>One</li>
               <li>One</li>
           </ul>
       </div>
        );
     
    }


   ReactDOM.render (
       <App/>,
       document.getElementById('bars')
   )




