import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
import {useState, useEffect} from 'react';
import './Item.js';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const shoppingList = Array();
    shoppingList.push(new Item('Coffee', 1));
    shoppingList.push(new Item('Cookies', 5));
    shoppingList.push(new Item('Milk', 2));
    setItems(shoppingList);
  }, [])

  return (
    <div style={{margin: '30px'}}>
      <h3>Shopping List</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={uuid()}>
              <td>{item.name}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
