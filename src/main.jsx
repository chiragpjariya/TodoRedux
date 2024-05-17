
import ReactDOM from 'react-dom/client'
import Addtodo from "./components/Addtodo"
import Todos from "./components/Todos"
import './index.css'
import { Provider } from 'react-redux'
import {store} from './app/store'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Addtodo />
    <Todos />
  </Provider>,
)
