import Icon from "../Icon/Icon"

const Avatar = () => {
  return (
    <div className="relative">
      <img 
      src="/images/copy.jpg" 
      alt="Marie font"
      className="h-18 w-18 rounded-full border-avatar border-white bg-spanishGreen text-2xl font-bold uppercase text-white"
      ></img>
      <div className="center h-18 w-18 rounded-full border-avatar border-white bg-spanishGreen text-2xl font-bold uppercase text-white">
        A
      </div>
      <div className="center h-18 w-18 rounded-full border-avatar border-vistablue bg-spanishGreen text-2xl font-bold uppercase text-red-100">
        <Icon id="eyeClosed" size={32}/>
      </div>
      
      <div className="relative inline-block">
      <img 
      src="/images/copy.jpg" 
      alt="Marie font"
      className="h-18 w-18 rounded-full border-avatar border-white bg-spanishGreen text-2xl font-bold uppercase text-white"
      ></img>
      <img 
      src="/images/santa-hat.png" 
      alt="Santa-hat"
      className="absolute -right-[15px] -top-[15px] "
      ></img>
      </div>

      <div className="relative inline-block">
      <img 
      src="/images/copy.jpg" 
      alt="Marie font"
      className="h-18 w-18 rounded-full border-avatar border-white bg-spanishGreen text-2xl font-bold uppercase text-white"
      ></img>
     <div className="rounded-full center h-6 w-6 border-2 border-white bg-spanishGreen text-white"><Icon id="check" size={16}/></div>
      </div>
      </div>
  )
}

export default Avatar
