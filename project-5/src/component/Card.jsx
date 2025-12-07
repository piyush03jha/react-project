import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdMessage } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { BiSolidShare } from "react-icons/bi";
import Button from "./button";
const Card = ({title, role, imgUrl, youtube, insta, linkedIn, github, message}) => {
  return (
    <div className="w-full rounded-3xl overflow-hidden shadow-2xl">

      <div className="relative w-full aspect-video bg-blue-400">
              <img className="absolute h-full aspect-square oobject-cover object-top rounded-full left-1/2 -translate-x-1/2 translate-y-1/4 border-4 border-blue-400 p-1 bg-white" src={imgUrl} alt="image" />
          </div>

          <div className="flex flex-col items-center pt-20 pb-12">
              <h1 className="text-2xl font-bold">{title}</h1>
              <p className="my-2">{role}</p>
              <div className="flex gap-4 pt-4">
                  <a href={youtube}><FaYoutube className="text-red-600 text-4xl" /></a>
                  <a href={insta}><GrInstagram className="text-4xl" style={{color: "#E1306C"}} /></a>
                  <a href={linkedIn}><FaLinkedin className="text-4xl text-blue-700" /></a>
                  <a href={github} target="_blank" rel="noopener noreferrer"><FaGithub className="text-4xl" /></a>
  

            </div>
            <div className="flex gap-6 pt-4 my-2">
              <Button text="Subscribe"/>
              <a href={message}><Button text="Message"/></a>
            </div>

            <div className="flex items-center gap-6 mt-5">
              <div className="flex items-center text-xl">
                <FcLike />
                <span>60.4k</span>
              </div>

              <Line />

              <div className="flex items-center text-xl">
                <MdMessage/>
                <span>6k</span>
              </div>

              <Line  />

              <div className="flex items-center text-xl">
                <BiSolidShare />
                <span>10k</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Card;



export const Line = () => {
  return (
    <div className="w-0.5 h-4 bg-gray-400"></div>
  )
}
