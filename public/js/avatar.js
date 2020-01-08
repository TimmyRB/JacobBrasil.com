document.addEventListener('DOMContentLoaded', () => {

	// Get avatar element
	const $avatar = document.getElementById('avatar');

	// Avatar Counter
	var $aCount = 1;

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