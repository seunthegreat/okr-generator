import { contents } from '../constants'
import { text } from '../style'

const {title, body} = contents.header;
const Header = (): JSX.Element => {
  return (
    <div className='flex flex-col justify-center items-center mb-5'>
      <p className={`${text.heading} mb-2`}>{title}</p>
      <p className={`${text.subHeading} w-[80%]`}>{body}</p>
    </div>
  )
}

export default Header