
import { RouterProvider } from 'react-router'
import './App.css'
import router from './Routes/Route/Route'


function App() {


  return (
   <>
    <div className='max-w-[1440px] mx-auto '>
<RouterProvider router = {router} >

</RouterProvider>
    </div>
   </>
  )
}

export default App
