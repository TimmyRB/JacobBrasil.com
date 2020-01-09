document.addEventListener('DOMContentLoaded', () => {

	// Get all "navbar-burger" elements
	const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {

		// Add a click event on each of them
		$navbarBurgers.forEach(el => {
			el.addEventListener('click', () => {

				// Get the target from the "data-target" attribute
				let target = el.dataset.target;
				let $target = document.getElementById(target);

				// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
				el.classList.toggle('is-active');
				$target.classList.toggle('is-active');

			});
		});
	}
});

class Navbar extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="container">
			<div class="navbar-brand">
				<a class="navbar-item" href="/">
					<h1 class="title">Jacob Brasil</h1>
				</a>

				<a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>
			<div class="navbar-menu" id="navMenu">
				<div class="navbar-start"></div>
				<div class="navbar-end">
					<a class="navbar-item" href="/projects">
						💻 Projects
					</a>
					<a class="navbar-item" href="/resume">
						📃 Resume
					</a>
					<div class="navbar-item is-hidden-touch">
						<a class="button is-primary is-outlined is-rounded" href="/contact">
							👋 Say Hi
						</a>
					</div>
					<a class="navbar-item is-hidden-desktop" href="/contact">
						👋 Contact Me
					</a>
				</div>
			</div>
		</div>
	</nav>
	`;
	}
}

customElements.define('navbar-top', Navbar);