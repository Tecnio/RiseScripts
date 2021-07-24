var onPre = function onPre() {
	if (player.onGround) {
		player.jump();
		player.motionY = 1;
	}
}