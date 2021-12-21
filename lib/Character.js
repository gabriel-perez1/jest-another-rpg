function Character () {}

Character.prototype.isAlive = function () {
	if (this.health === 0) {
		return false;
	}
	return true;
};

Charactere.prototype.getHealth = function () {
	return `${this.name}'s health is now ${this.health}!`;
};