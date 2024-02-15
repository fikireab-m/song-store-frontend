import { Provider } from "react-redux"
import PageLayout from "./pages/Layout"
import { store } from "./app/store"
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <PageLayout />
      </Router>
    </Provider>
  )
}

export default App
