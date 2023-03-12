import { Generator, Header } from "./components";

const App = (): JSX.Element => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-primary">
      <Header />
      <Generator />
      <div className="absolute z-[1] w-[20%] h-[40%] rounded-full bottom-40 white__gradient"/>
      <div className="absolute z-[0] w-[20%] h-[30%] left-20 bottom-20 blue__gradient"/>
    </div>
  )
}

export default App
