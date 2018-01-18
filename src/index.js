import React from 'react'
import { hydrate, render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import ServiceWorker from './registerServiceWorker'

const rootElement = document.getElementById('root')

if (rootElement.hasChildNodes()) {
    hydrate((
        <BrowserRouter>
            <App />
        </BrowserRouter>
    ), rootElement)
} else {
    render((
        <BrowserRouter>
            <App />
        </BrowserRouter>
    ), rootElement)
}
render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'))

ServiceWorker()
