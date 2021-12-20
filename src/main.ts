import feather from 'feather-icons'
import hmf from '@yababay67/header-main-footer'
import Aside from './components/Aside.svelte'
import switchHash from './router.js'

new Aside({target: document.querySelector('aside')})

document.getElementById('brand-text').innerHTML = document.title
feather.replace({ 'aria-hidden': 'true' })
hmf()
switchHash()

