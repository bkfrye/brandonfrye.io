import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { TweenMax, TimelineMax, Power2 } from 'gsap'
import GSAP from 'react-gsap-enhancer'

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
            .to(logo, 0.15, {
                fill: 'rgb(255, 242, 0)',
                ease: Power2.easeInOut
            })
            .to(logo, 0.15, {
                fill: 'rgb(236, 0, 140)',
                ease: Power2.easeInOut
            })
            .to(logo, 0.15, {
                fill: 'rgb(0, 174, 239)',
                ease: Power2.easeInOut
            })
            .to(logo, 0.15, {
                fill: 'rgb(0, 0, 0)',
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
                <svg style={{display:'none'}}><symbol id="icon-codepen" viewBox="0 0 512 512"><title>CodePen Logo</title><path d="M427 201.9c-.6-4.2-2.9-8-6.4-10.3L264.2 87.3c-4.9-3.3-11.4-3.3-16.3 0L91.4 191.6c-4 2.7-6.5 7.4-6.5 12.2v104.3c0 4.8 2.5 9.6 6.5 12.2l156.4 104.3c4.9 3.3 11.4 3.3 16.3 0l156.5-104.2c4-2.6 6.6-7.4 6.6-12.2V203.9c-.1-.7-.1-1.3-.2-2 0-.2.1.7 0 0zm-156.3-74.8l115.2 76.8-51.5 34.4-63.8-42.7v-68.5zm-29.4 0v68.6l-63.8 42.7L126 204l115.3-76.9zm-127 104.3l36.8 24.6-36.8 24.6v-49.2zm127 153.5l-115.2-76.8 51.5-34.4 63.8 42.6v68.6zm14.7-94.1L204 256l52-34.8 52 34.8-52 34.8zm14.7 94.1v-68.6l63.8-42.6 51.5 34.4-115.3 76.8zm127-104.3L360.9 256l36.8-24.6v49.2z"/></symbol><symbol id="icon-github" viewBox="0 0 512 512"><title>Github Logo</title><path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9v-34.7c-51.7 11.3-62.5-21.9-62.5-21.9-8.4-21.5-20.6-27.2-20.6-27.2-16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9-41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9-1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4v51c0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4 0-102.5-83.3-185.7-185.9-185.7z"/></symbol><symbol id="icon-instagram" viewBox="0 0 512 512"><title>Instagram Logo</title><path d="M256 109.3c47.8 0 53.4.2 72.3 1 17.4.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2.9 18.9 1 24.5 1 72.3s-.2 53.4-1 72.3c-.8 17.4-3.7 26.9-6.2 33.2-3.2 8.4-7.1 14.3-13.4 20.6-6.3 6.3-12.2 10.1-20.6 13.4-6.3 2.5-15.8 5.4-33.2 6.2-18.9.9-24.5 1-72.3 1s-53.4-.2-72.3-1c-17.4-.8-26.9-3.7-33.2-6.2-8.4-3.2-14.3-7.1-20.6-13.4-6.3-6.3-10.1-12.2-13.4-20.6-2.5-6.3-5.4-15.8-6.2-33.2-.9-18.9-1-24.5-1-72.3s.2-53.4 1-72.3c.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2 18.9-.8 24.5-1 72.3-1m0-32.2c-48.6 0-54.7.2-73.8 1.1-19 .9-32.1 3.9-43.4 8.3-11.8 4.6-21.7 10.7-31.7 20.6C97.2 117 91 127 86.5 138.8c-4.4 11.4-7.4 24.4-8.3 43.4-.9 19.1-1.1 25.2-1.1 73.8 0 48.6.2 54.7 1.1 73.8.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1.9 25.2 1.1 73.8 1.1s54.7-.2 73.8-1.1c19-.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4.9-19.1 1.1-25.2 1.1-73.8s-.2-54.7-1.1-73.8c-.9-19-3.9-32.1-8.3-43.4-4.6-11.8-10.7-21.7-20.6-31.7C395 97.2 385 91 373.2 86.5c-11.4-4.4-24.4-7.4-43.4-8.3-19.1-.9-25.2-1.1-73.8-1.1z"/><path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9-41.2-91.9-91.9-91.9zm0 151.5c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6-26.7 59.6-59.6 59.6z"/><circle cx="351.5" cy="160.5" r="21.5"/></symbol><symbol id="icon-linkedin" viewBox="0 0 512 512"><title>LinkedIn Logo</title><path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5-18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5 18.9 0 34.2 15.5 34.2 34.5zm-5 58.9h-57.8v186.8h57.8V201.3zm92.4 0h-55.4v186.8h55.4v-98c0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9v98H398V269.8c0-50-28.3-74.2-68-74.2-39.6 0-56.3 30.9-56.3 30.9v-25.2h.1z"/></symbol><symbol id="icon-twitter" viewBox="0 0 512 512"><title>Twitter Logo</title><path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36-12.6 7.5-26.5 12.9-41.3 15.8C357.6 146 340.7 138 322 138c-42 0-72.9 39.2-63.4 79.9-54.1-2.7-102.1-28.6-134.2-68-17 29.2-8.8 67.5 20.1 86.9-10.7-.3-20.7-3.3-29.5-8.1-.7 30.2 20.9 58.4 52.2 64.6-9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2-27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6 12.9-9.1 23.9-20.5 32.6-33.6z"/></symbol></svg>
                <header className="header">
                    <div id="brand">
                        <Link to='/'>
                            <svg id="brand-logo" viewBox="0 0 245.5 204.1">
                              <title>Brandon Frye</title>
                              <path d="M77.4,30.2c-3.3,25.3-5.7,50.6-9.5,75.7-.8,4.6-1.6,9.5-2.2,14.2,7.9-12.2,16.6-21.2,32.1-21.2,26.9,0,32.7,26.7,32.7,48.4a153.5,153.5,0,0,1-3.8,35.1c-5.4,22-19.3,49-45.4,49-14.4,0-20.1-7.9-26.1-19.9-.5,5.7-.5,11.4-1.1,17.1H6.4L30.9,30.2ZM73.1,138c-12,0-14.4,28.8-14.4,37.6,0,5.7.5,15.2,8.4,15.2,12.5,0,15.2-27.5,15.2-36.5C82.3,148.3,81.2,138,73.1,138Z" transform="translate(-6.4 -27.3)"/>
                              <path d="M219.2,74.3c-2.5-2.4-5.2-4.6-9-4.6-7.1,0-8.2,7.6-8.7,13.1l-2.2,18.8H216l-4.6,38.1H194.8l-10.9,89H137.4l10.9-89H135l4.6-38.1h13.6c1.9-16.9,2.2-35.1,9.5-49.3a45.4,45.4,0,0,1,40.8-25,78.9,78.9,0,0,1,21.2,3.3Z" transform="translate(-6.4 -27.3)"/>
                              <path d="M221.4,231.3c-13.9,0-24.2-10.6-24.2-24.5,0-16.1,14.4-30.5,30.5-30.5,13.9,0,24.2,10.6,24.2,24.5C251.9,216.9,237.5,231.3,221.4,231.3Z" transform="translate(-6.4 -27.3)"/>
                            </svg>
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
