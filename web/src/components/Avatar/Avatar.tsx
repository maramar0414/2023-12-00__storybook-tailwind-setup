import Icon from "../Icon/Icon"

const Avatar = () => {
  return (
    <div>
      <img 
      src="/images/copy.jpg" 
      alt="Marie font"
      className="h-18 w-18 rounded-full border-avatar border-white bg-spanishGreen text-2xl font-bold uppercase text-white"
      ></img>
      <div className="center h-18 w-18 rounded-full border-avatar border-white bg-spanishGreen text-2xl font-bold uppercase text-white">
        A
      </div>
      <div className="center h-18 w-18 rounded-full border-avatar border-white bg-spanishGreen text-2xl font-bold uppercase text-white">
        <Icon id="eyeClosed" size={32}/>
      </div>
      </div>
  )
}

export default Avatar
