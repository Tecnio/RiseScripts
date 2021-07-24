var onPre = function onPre() {
	if (player.onGround) {
		player.jump();
		player.motionY = 0.3;
	} else {
		player.motionY += 0.07;
	}
}