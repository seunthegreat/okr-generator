import { contents } from '../constants'
import { text } from '../style'

const {title, body} = contents.header;
const Header = (): JSX.Element => {
  return (
    <div className='flex flex-col justify-center items-center sm:mb-10 mb-5 py-5'>
      <p className={`${text.heading} mb-5 text-secondary`}>{title}</p>
      <p className={`${text.normal} w-[80%] text-center `}>{body}</p>
    </div>
  )
}

export default Header