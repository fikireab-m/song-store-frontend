import { Provider } from "react-redux"
import PageLayout from "./pages/Layout"
import { store } from "./app/store"

function App() {
  return (
    <Provider store={store}>
      <PageLayout />
    </Provider>
  )
}

export default App
