// import logo from './logo.svg';

import reviews from './data.js'
import Testimonial from './components/Testimonial.js';
function App() {
  return (
    <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-slate-700 ">
    
<div className='text-center'>
  <h1 className='text-4xl font-bold text-white'>Our Testimonials</h1>
  <div className='bg-blue-500 h-[4px] w-1/2 mt-1 mx-auto'></div>

 
</div>
 <Testimonial reviews={reviews}></Testimonial>



    </div>
  );
}

export default App;
