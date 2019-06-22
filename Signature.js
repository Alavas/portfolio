class Signature extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
		const template = document.createElement('template')
		template.innerHTML = `
			<style>		
				.signature-center {
				position: absolute;
				z - index: 999;
				top: 50 %;
				left: 50 %;
				margin - right: -50 %;
				transform: translate(-50 %, -50 %);
				img {
					width: 60 %;
					height: auto;
				}
			}
			</style>
			<slot />
		`
		this.shadowRoot.appendChild(template.content.cloneNode(true))
	}
}

customElements.define('shrinking-signature', Signature)
