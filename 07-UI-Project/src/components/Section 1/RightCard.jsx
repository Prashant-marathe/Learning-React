import {ArrowRight} from 'lucide-react'

const RightCard = (props) => {
  return (
    <div className="w-70 shrink-0 overflow-hidden relative h-full bg-red-50 rounded-4xl">
        <img className='h-full w-full  object-cover' src={props.img} alt="" />
        <div className='absolute flex flex-col justify-between items-start p-5 top-0 left-0 h-full w-full'>
            <h2 className='bg-white font-semibold rounded-full 
            w-7  h-7 flex items-center justify-center'>{props.id + 1}</h2>
            <div >
                <p className='mb-10 text-white '>{props.intro}</p>
                <div className='flex items-center justify-between'>
                    <button className='bg-blue-600 rounded-full py-2 px-5 text-white font-medium '>{props.tag}</button>
                    <button className='bg-blue-500 p-2 rounded-full '><ArrowRight color={'white'} /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCard