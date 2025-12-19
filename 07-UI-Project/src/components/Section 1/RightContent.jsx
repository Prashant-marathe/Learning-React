import RightCard from "./RightCard"


const RightContent = (props) => {
    console.log(props.users)
  return (
    <div id='right' className='h-full w-2/3 p-6 flex overflow-x-auto rounded-4xl flex-nowrap gap-10'>
        {props.users.map(function(elem, idx) {
            return <RightCard key={idx} img={elem.img} id={idx} intro={elem.intro} tag={elem.tag} />
        })}
    </div>
  )
}

export default RightContent