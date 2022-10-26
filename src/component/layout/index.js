import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='bg-[#202845] grid place-items-center w-screen h-screen'>
      <div className="text-white text-center">
        <h1 className="text-4xl">Morra Game</h1>
        {/* <h2 className="text-2xl mt-5">Deployer(Alice)</h2> */}
        <main className='mt-10'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout