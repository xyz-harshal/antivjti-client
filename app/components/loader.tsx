import {FadeLoader,HashLoader } from 'react-spinners'
let LoaderSpinner=()=>{
  return (
    <div className='flex flex-col items-center justify-center pt-8'>
    {/* <FadeLoader color="#C147E9" /> */}
    <HashLoader color="#C147E9" />
    <p>Good things Take time</p>
    </div>

  )
  
}
export default LoaderSpinner