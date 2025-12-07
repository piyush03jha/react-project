const Box = ({color}) => {
  return (
    <div style={{background:color,}} className="h-[500px] w-[500px] rounded-2xl font-extrabold text-center content-center m-auto">{color.toUpperCase()}</div>
  )
}

export default Box