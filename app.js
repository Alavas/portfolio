require('babel-polyfill')
var resume = require('./resume.json')

let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)

//Elements.
const scrollBtn = document.getElementById('scrollBtn')
const portfolioBtn = document.getElementById('portfolioBtn')
const street = document.getElementById('street')
const signature = document.getElementById('signature')
const moon = document.getElementById('moon')
const tree = document.getElementById('tree')
const resumeDiv = document.getElementById('resume')
const skillsDiv = document.getElementById('skills')
//Scroll to specific sections.
scrollBtn.onclick = function() {
	street.scrollIntoView({ behavior: 'smooth' })
}

portfolioBtn.onclick = function() {
	tree.scrollIntoView({ behavior: 'smooth' })
}

signature.onclick = function() {
	moon.scrollIntoView({ behavior: 'smooth' })
}
//Listeners.
window.addEventListener('load', function() {
	setTimeout(function() {
		window.scrollTo(0, 1)
	}, 0)
	const signature = document.getElementById('signature')
	signature.style.display = 'block'
})

window.addEventListener(
	'scroll',
	function(event) {
		if (event.srcElement.scrollTop > 80) {
			signature.setAttribute('class', 'signature-small')
			scrollBtn.style.display = 'none'
		} else {
			signature.setAttribute('class', 'signature-center')
			scrollBtn.style.display = 'block'
		}
	},
	true
)
//Resume
const jobs = Object.entries(resume.experience)
jobs.map(job => {
	let jobName = document.createElement('h4')
	let name = document.createTextNode(job[0])
	jobName.appendChild(name)
	resumeDiv.appendChild(jobName)
	let list = document.createElement('ul')
	let positions = Object.entries(job[1])
	positions.map(position => {
		let positionName = document.createElement('li')
		let name = document.createTextNode(position[0])
		positionName.appendChild(name)
		list.appendChild(positionName)
	})
	resumeDiv.appendChild(list)
})

resume.skills.map((skill, index) => {
	let span = document.createElement('span')
	span.setAttribute('class', 'skill')
	let text = document.createTextNode(skill)
	span.appendChild(text)
	skillsDiv.appendChild(span)
})

/*
<script>
	window.ga = function() {
		ga.q.push(arguments)
	}
	ga.q = []
	ga.l = +new Date()
	ga('create', 'UA-XXXXX-Y', 'auto')
	ga('set', 'transport', 'beacon')
	ga('send', 'pageview')
</script>
<script
	src="https://www.google-analytics.com/analytics.js"
	async
	defer
></script>
*/
