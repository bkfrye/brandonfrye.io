import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {TweenMax, Power2} from 'gsap'
import GSAP from 'react-gsap-enhancer'
import DataAPI from '../api'
import SVGInline from 'react-svg-inline'
import Shapes from './shapes.svg'

class Intro extends Component {

	constructor() {
		super()
		let data = DataAPI.content;

		this.state = {
			title: data.intro.title,
			copy: data.intro.copy
		}
	}

	componentDidMount() {

		TweenMax.from('.more-info', 0.5, {
			opacity: 0,
			y: '+=20',
			ease: Power2.easeOut,
			delay: 1.3
		})

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
      <section className="intro">
  			<SVGInline svg={Shapes} className="shapes"/>

  			<div className="content">
  				<h2 className="text">{this.state.copy}</h2>
  				<h1 className="text">{this.state.title}</h1>
  			</div>
  			<div className="more-info">
  				<div className="resume-link">
  					<Link to="/resume">View Resume ></Link>
  				</div>
  			</div>
  		</section>
		)
  }
}

export default GSAP()(Intro)