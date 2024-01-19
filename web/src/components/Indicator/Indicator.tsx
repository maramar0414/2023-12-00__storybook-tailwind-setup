import Icon from '../Icon/Icon'

interface IndicatorProps {
  status: 'success' | 'error' | 'warning'
}
2
const Indicator = ({ status }: IndicatorProps) => {
  return (
    <>
    {/*success*/}
      {status === 'success' && (
        <div className="center boder-2 h-6 w-6 rounded-full border-white bg-spanishGreen text-white">
        <Icon id="check" size={16} />
        </div>
      )}

      {/*error*/}
      {status === 'error' && (
        <div className="center boder-2 h-6 w-6 rounded-full border-white bg-orangeRed text-white">
        <Icon id="minus" size={16} />
        </div>
      )}

      {/*warning*/}
      {status === 'warning' && (
        <div className="center boder-2 h-6 w-6 rounded-full border-white bg-supernova text-black">
        <Icon id="question" size={16} />
        </div>
      )}

      </>
  )
}

export default Indicator
