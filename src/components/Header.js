import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { TweenMax, TimelineMax, Power2 } from 'gsap'
import GSAP from 'react-gsap-enhancer'
import SVGInline from 'react-svg-inline'
import logo from './logo.svg'
import SocialSvg from './social.svg'

class Header extends Component {
    componentDidMount() {
        TweenMax.from('.header', 0.5, {
            opacity: 0,
            y: '-=20',
            ease: Power2.easeOut,
            delay: 1.3
        })

        const logo = document.querySelector('#brand-logo')
        const logoOnHover = new TimelineMax({ paused: true, repeat: -1 })

        logoOnHover
            .to(logo, 0.25, {
                fill: 'rgb(0, 174, 239)',
                opacity: '0.5',
                ease: Power2.easeInOut
            })
            .to(logo, 0.25, {
                fill: 'rgb(255, 242, 0)',
                opacity: '0.5',
                ease: Power2.easeInOut
            })
            .to(logo, 0.25, {
                fill: 'rgb(236, 0, 140)',
                opacity: '0.5',
                ease: Power2.easeInOut
            })
            .to(logo, 0.25, {
                fill: 'rgb(35, 31, 32)',
                opacity: '1',
                ease: Power2.easeInOut
            })

    	// add mouseenter function
    	const startHoverAnim = () => {
    		logoOnHover.play()
    		logoOnHover.eventCallback('onRepeat', null)
    	}
    	// pause animation once timeline completes
    	const completeAnim = () => {
    		logoOnHover.eventCallback('onRepeat', () => {
    			logoOnHover.pause()
    		})
    	}

        logo.addEventListener('mouseenter', startHoverAnim)
        logo.addEventListener('mouseleave', completeAnim)

    }
    render() {
        return (
            <div>
                <SVGInline svg={ SocialSvg } />
                <header className="header">
                    <div id="brand">
                        <Link to='/'>
                            <SVGInline svg={ logo } />
                        </Link>
                    </div>
                    <div className="social-links">
                        <ul>
                            <li>
                                <Link to='https://github.com/bkfrye' target="_blank" rel="noopener noreferrer">
                                    <span className="info">Github</span>
                                    <svg>
                                        <use xlinkHref="#icon-github"></use>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link to='https://codepen.io/brandonkfrye' target="_blank" rel="noopener noreferrer">
                                    <span className="info">Codepen</span>
                                    <svg>
                                        <use xlinkHref="#icon-codepen"></use>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link to='https://linkedin.com/in/brandonkfrye' target="_blank" rel="noopener noreferrer">
                                    <span className="info">LinkedIn</span>
                                    <svg>
                                        <use xlinkHref="#icon-linkedin"></use>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link to='https://instagram.com/bkfrye' target="_blank" rel="noopener noreferrer">
                                    <span className="info">Instagram</span>
                                    <svg>
                                        <use xlinkHref="#icon-instagram"></use>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link to='https://twitter.com/brandonkfrye' target="_blank" rel="noopener noreferrer">
                                    <span className="info">Twitter</span>
                                    <svg>
                                        <use xlinkHref="#icon-twitter"></use>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </header>
            </div>
        )
    }

}


export default GSAP()(Header)
