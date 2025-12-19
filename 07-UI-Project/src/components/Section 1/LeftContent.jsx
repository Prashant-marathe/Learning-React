import Arrow from './Arrow'
import Herotext from './Herotext'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col items-start justify-between p-6'>
       <Herotext/>
       <Arrow/>
    </div>
  )
}

export default LeftContent