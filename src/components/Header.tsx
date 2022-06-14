import '../styles/header.scss'
import LogoSvg from '../../assets/images/logo.svg'

export function Header() {
  return (
    <header className="header">
      <div>
        <img src={ LogoSvg } alt="to.do"/>
      </div>
    </header>
  )
}