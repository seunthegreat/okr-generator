import { Generator, Header, Footer } from "./components";

const App = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center bg-primary min-h-screen">
      <div className="flex flex-col flex-grow justify-center w-full">
        <Header />
        <Generator />
      </div>
      <Footer owner="Seun Abilawon"/>
      <div className="absolute z-[1] w-[20%] h-[40%] rounded-full bottom-40 white__gradient"/>
      <div className="absolute z-[0] w-[20%] h-[30%] left-20 bottom-20 blue__gradient"/>
    </div>
  )
}

export default App;
