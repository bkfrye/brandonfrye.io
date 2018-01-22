import React, {Component} from 'react'
import GSAP from 'react-gsap-enhancer'
import Intro from './Intro'

class Home extends Component {

    render() {
        return (
            <div>
                <section className="intro">
                    <Intro />
                </section>

                <div className="ssh">
                    <pre>
                        <code>
                        ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC5rmloiWWxAW/ENh9XhKzGavg9ht46Pv6zg5FPydZiMoomqSMsVUeSw2Mwko5gT4DVflAtBxB0eXG1sWTDrHwBhyPD7WDaQrp1BMOGENA/ntBRXZlkNeaOndDIJi7NxqlHTUFt04W35+zJ/9V16bgZxnm+rv8PTV84c3GIDT9JShlxUopmUldVdp5c8JwjeYWAjuP/ebn1rsN6sFPeiS47RGlJhaC5mFDSwdJPwgmwP99Qkd+/Y8QVVhtGMAydQAeAm9tBGhnvRTE0EdWx2kJX/hC9K1klfWhZw6ysIouuo7ehcVTKQ+oqr1MCEGIfcmAXtfNYMLtSHMslYDhlNSud
                        </code>
                    </pre>
                </div>
            </div>

        )
    }
}

export default GSAP()(Home)
