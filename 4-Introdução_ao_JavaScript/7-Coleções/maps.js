const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const userRoles = new Map();

userRoles.set('Jessica', 'SUDO');
userRoles.set('Harvey', 'ADMIN');
userRoles.set('Louis', 'ADMIN');
userRoles.set('Carolina', 'USER');
userRoles.set('Guilherme', 'USER');

console.log(getAdmins(userRoles));