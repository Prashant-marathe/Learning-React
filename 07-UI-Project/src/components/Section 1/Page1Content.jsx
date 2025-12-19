import LeftContent from "./LeftContent"
import RightContent from "./RightContent"


const Page1Content = (props) => {
  return (
    <div className="py-6 px-16 h-[90vh] flex justify-between items-center gap-5">
        <LeftContent/>
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content