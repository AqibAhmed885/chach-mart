import { Outlet } from "react-router-dom"
import Header from "../components/header"

const RootLayout = () => {
  return (
    <>
      <div>
        <div>
          <Header/>
        </div>
        <main>
          <Outlet/>
        </main>
      </div>
    </>
  )
}

export default RootLayout
