import {BsFillHeartPulseFill} from 'react-icons/bs';

const Loading = () =>{
    return (
      <div className="flex justify-center items-center h-screen">
        <div role="status">
          <span className='text-4xl text-pink-700 animate-pulse'>
            <BsFillHeartPulseFill />
          </span>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
}

export default Loading;