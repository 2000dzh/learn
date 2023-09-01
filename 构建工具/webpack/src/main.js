import './css/index.scss'
import './css/common.scss'
import a1 from './assets/微信图片_20230830194546.jpg'
// import _ from 'lodash-es'
import {dateFormate} from './js/formate'

const App = document.getElementById('app')
App.innerHTML = 'hello'
console.log('什么环境', process.env.NODE_ENV)

const Img = new Image()
Img.src = a1
document.body.appendChild(Img)

const sad = '1'
console.log(dateFormate())

// sad = 12
// console.log(_.add)
