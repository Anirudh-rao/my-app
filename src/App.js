import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

/**
 * Return HTML skeleton for todo list.
 */
function App() {

  const items = [
    {
      id: 1,
      text: 'Take out the trash',
      completed: false
    },
    {
      id: 2,
      text: 'Buy bread',
      completed: false
    },
    {
      id: 3,
      text: 'Teach penguins to fly',
      completed: true
    }
  ];
  
  return (
    <div className="container">
      <div className="row">
        <div className="todolist">
          <h1>Todos</h1>
          <ul className="list-unstyled">
           {
             items && items.map(item =>
              <li key={item.id} className="ui-state-default">
                <div  class="checkbox">
                  <label>
                  <input type="checkbox" checked={item.completed}/>{item.text}
                  </label>
                </div>
              </li>
              )
           }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;