import './footer.scss'
import linkedIn_logo from '/lkin_logo.webp'
import github_logo from '/gh_logo.png'

export default function Footer () {
    return(
        <footer>
            <p className='copyright'>&#169; 2025 Thibault Gleize. All right reserved</p>
            <div className='social-media'>
                <a target='_blank' href="https://www.linkedin.com/in/thibault-gleize-1530a92aa/"><img className='social-logo' src={linkedIn_logo} alt="Accès à mon Linked-In" /></a>
                <a target='_blank' href="https://github.com/Thibault-Gleize/"><img className='social-logo' src={github_logo} alt="Accès à mon Github" /></a>
            </div>
        </footer>
    )
}