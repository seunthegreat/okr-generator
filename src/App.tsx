import { Generator, Header } from "./components";

const App = (): JSX.Element => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-primary">
      <Header />
      <Generator />
    </div>
  )
}

export default App
