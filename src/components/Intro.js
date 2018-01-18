import React, {Component} from 'react'
import {TweenMax, Power2} from 'gsap'
import GSAP from 'react-gsap-enhancer'
import DataAPI from '../api'

class Intro extends Component {
    componentDidMount() {
        TweenMax.staggerFrom('.text', 1.4, {
            rotation: -90,
            ease: Power2.easeOut,
            scaleX: .5,
            scaleY: .5,
            delay: .6,
            transformOrigin: '77% 0'
        })
        TweenMax.fromTo(['.text'], .8, {
            opacity: 0
        }, {
            delay: 0.75,
            opacity: 1
        })

        TweenMax.staggerFrom('.shape', 2.1, {
            cycle: {
                delay: function(index) {
                    return index * .009
                },
                rotation: function(index) {
                    return index * 114
                }
            },
            scaleX: 1.3,
            scaleY: 1.3,
            opacity: 0,
            ease: Power2.easeOut,
            svgOrigin: '174 151.5'
        })
    }
    render() {
        return (
            <div>
                <div className="shapes">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348 303">
                        <title>shapes</title>
                        <g className="shape"></g>
                        <g style={{
                                opacity: '0.25',
                                fill: '#231f20'
                            }} id="shape-a" className="shape">
                            <g>
                                <circle cx="266" cy="71.4" r="2.5" transform="translate(-6.1 28.6) rotate(-6.1)"/>
                                <circle cx="269.4" cy="103.3" r="2.5" transform="translate(-9.4 29.1) rotate(-6.1)"/>
                                <circle cx="272.8" cy="135.2" r="2.5" transform="translate(-12.8 29.7) rotate(-6.1)"/>
                                <circle cx="276.2" cy="167.2" r="2.5" transform="translate(-16.2 30.2) rotate(-6.1)"/>
                                <circle cx="279.6" cy="199.1" r="2.5" transform="translate(-19.5 30.8) rotate(-6.1)"/>
                                <circle cx="240.8" cy="74" r="2.5" transform="translate(-6.5 26) rotate(-6.1)"/>
                                <circle cx="244.2" cy="106" r="2.5" transform="translate(-9.9 26.5) rotate(-6.1)"/>
                                <circle cx="247.6" cy="137.9" r="2.5" transform="translate(-13.2 27) rotate(-6.1)"/>
                                <circle cx="251" cy="169.8" r="2.5" transform="translate(-16.6 27.6) rotate(-6.1)"/>
                                <circle cx="254.4" cy="201.8" r="2.5" transform="translate(-20 28.1) rotate(-6.1)"/>
                                <circle cx="215.6" cy="76.7" r="2.5" transform="translate(-6.9 23.3) rotate(-6.1)"/>
                                <circle cx="219" cy="108.7" r="2.5" transform="translate(-10.3 23.8) rotate(-6.1)"/>
                                <circle cx="222.4" cy="140.6" r="2.5" transform="translate(-13.7 24.4) rotate(-6.1)"/>
                                <circle cx="225.8" cy="172.5" r="2.5" transform="translate(-17 24.9) rotate(-6.1)"/>
                                <circle cx="229.2" cy="204.5" r="2.5" transform="translate(-20.4 25.5) rotate(-6.1)"/>
                                <circle cx="190.4" cy="79.4" r="2.5" transform="translate(-7.3 20.6) rotate(-6.1)"/>
                                <circle cx="193.8" cy="111.4" r="2.5" transform="translate(-10.7 21.2) rotate(-6.1)"/>
                                <circle cx="197.2" cy="143.3" r="2.5" transform="translate(-14.1 21.7) rotate(-6.1)"/>
                                <circle cx="200.6" cy="175.2" r="2.5" transform="translate(-17.4 22.3) rotate(-6.1)"/>
                                <circle cx="204" cy="207.1" r="2.5" transform="translate(-20.8 22.8) rotate(-6.1)"/>
                                <circle cx="165.1" cy="82.1" r="2.5" transform="translate(-7.8 18) rotate(-6.1)"/>
                                <circle cx="168.6" cy="114" r="2.5" transform="translate(-11.1 18.5) rotate(-6.1)"/>
                                <circle cx="172" cy="146" r="2.5" transform="translate(-14.5 19.1) rotate(-6.1)"/>
                                <circle cx="175.4" cy="177.9" r="2.5" transform="translate(-17.9 19.6) rotate(-6.1)"/>
                                <circle cx="178.8" cy="209.8" r="2.5" transform="translate(-21.2 20.1) rotate(-6.1)"/>
                                <circle cx="139.9" cy="84.8" r="2.5" transform="translate(-8.2 15.3) rotate(-6.1)"/>
                                <circle cx="143.3" cy="116.7" r="2.5" transform="translate(-11.6 15.9) rotate(-6.1)"/>
                                <circle cx="146.7" cy="148.7" r="2.5" transform="translate(-14.9 16.4) rotate(-6.1)"/>
                                <circle cx="150.2" cy="180.6" r="2.5" transform="translate(-18.3 16.9) rotate(-6.1)"/>
                                <circle cx="153.6" cy="212.5" r="2.5" transform="translate(-21.7 17.5) rotate(-6.1)"/>
                                <circle cx="114.7" cy="87.5" r="2.5" transform="translate(-8.6 12.7) rotate(-6.1)"/>
                                <circle cx="118.1" cy="119.4" r="2.5" transform="translate(-12 13.2) rotate(-6.1)"/>
                                <circle cx="121.5" cy="151.4" r="2.5" transform="translate(-15.4 13.7) rotate(-6.1)"/>
                                <circle cx="124.9" cy="183.3" r="2.5" transform="translate(-18.7 14.3) rotate(-6.1)"/>
                                <circle cx="128.4" cy="215.2" r="2.5" transform="translate(-22.1 14.8) rotate(-6.1)"/>
                                <circle cx="89.5" cy="90.2" r="2.5" transform="translate(-9.1 10) rotate(-6.1)"/>
                                <circle cx="92.9" cy="122.1" r="2.5" transform="translate(-12.4 10.5) rotate(-6.1)"/>
                                <circle cx="96.3" cy="154" r="2.5" transform="translate(-15.8 11.1) rotate(-6.1)"/>
                                <circle cx="99.7" cy="186" r="2.5" transform="translate(-19.2 11.6) rotate(-6.1)"/>
                                <circle cx="103.1" cy="217.9" r="2.5" transform="translate(-22.5 12.2) rotate(-6.1)"/>
                            </g>
                        </g>
                        <g style={{
                                opacity: '0.5',
                                fill: '#fff200'
                            }} id="shape-d" className="shape">
                            <rect x="115.1" y="82.9" width="61.6" height="172.56" rx="12" ry="12" transform="translate(-77.5 174.6) rotate(-50.6)"/>
                        </g>
                        <g style={{
                                opacity: '0.5',
                                fill: '#00aeef'
                            }} id="shape-c" className="shape">
                            <g>
                                <rect x="177.7" y="91.7" width="98.6" height="98.55" rx="12" ry="12" transform="translate(-40.1 132.4) rotate(-30)"/>
                            </g>
                        </g>
                        <g style={{
                                opacity: '0.5',
                                fill: '#ec008c'
                            }} id="shape-b" className="shape">
                            <circle cx="162" cy="113" r="36"/>
                        </g>

                    </svg>
                </div>
                <div className="content">
                    <h2 className="text">{DataAPI.content.intro.copy}</h2>
                    <h1 className="text">{DataAPI.content.intro.title}</h1>
                </div>
            </div>
        )
    }
}

export default GSAP()(Intro)
