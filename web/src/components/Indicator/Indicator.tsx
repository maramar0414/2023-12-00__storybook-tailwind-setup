import Icon from "../Icon/Icon"

const Indicator = ({status}) => {
  return (
    <>
    {/*success*/}
    {status === "success" && (<div className="rounded-full center h-6 w-6 border-2 border-white bg-spanishGreen text-white">
        <Icon id="check" size={16} />
      </div>)}
      
      {/*error*/}
      {status === "error" && (<div className="rounded-full center h-6 w-6 border-2 border-white bg-orangeRed text-white">
        <Icon id="minus" size={16} />
      </div>)}
      
        {/*warning*/}
        {status === "warning" && (<div className="rounded-full center h-6 w-6 border-2 border-white bg-supernova text-black">
        <Icon id="question" size={16} />
      </div>)}
     
      </>
  )
}

export default Indicator
