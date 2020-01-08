document.addEventListener('DOMContentLoaded', () => {

	// Get all "navbar-burger" elements
	const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

	// Get avatar element
	const $avatar = document.getElementById('avatar');

	// Avatar Counter
	var $aCount = 1;

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

	addEventListeners($avatar, 'mouseenter click', () => {

		if ($aCount === 1)
			$avatar.src = 'images/avatar-wink.svg';
		else if ($aCount === 2)
			$avatar.src = 'images/avatar-grimace.svg';
		else if ($aCount === 3)
			$avatar.src = 'images/avatar-gameface.svg';
		else if ($aCount === 4)
			$avatar.src = 'images/avatar-uhoh.svg';
		else if ($aCount === 5)
			$avatar.src = 'images/avatar-overworked.svg';

		$aCount++;
		if ($aCount > 5)
			$aCount = 1;
	})

	$avatar.addEventListener('mouseleave', () => {
		$avatar.src = 'images/avatar-smiling.svg';
	})

	function addEventListeners(el, s, fn) {
		s.split(' ').forEach(e => el.addEventListener(e, fn, false));
	}

});