import './footer.scss'
import x_logo from '../../assets/images/x_logo.avif'
import linkedIn_logo from '../../assets/images/lkin_logo.avif'
import github_logo from '../../assets/images/gh_logo.png'

export default function Footer () {
    return(
        <footer>
            <p className='copyright'>&#169; 2025 Thibault Gleize. All right reserved</p>
            <div className='social-media'>
                <a href=""><img className='social-logo' src={x_logo} alt="Accès à mon réseau X" /></a>
                <a href=""><img className='social-logo' src={linkedIn_logo} alt="Accès à mon Linked-In" /></a>
                <a href=""><img className='social-logo' src={github_logo} alt="Accès à mon Github" /></a>
            </div>
        </footer>
    )
}