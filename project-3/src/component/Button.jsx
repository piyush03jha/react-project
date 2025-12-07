const Button = ({color, setSeclectedColor, children}) => {

function setColor() {
  setSeclectedColor(color);
}

  return (
    <button onClick={setColor} style={{background:color, padding:"10px 20px", margin:"5px", borderRadius:"10px", color:"white" }}>{children}</button>
  )
}

export default Button