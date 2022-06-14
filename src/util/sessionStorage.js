export function checkSeshStorageAddIfNeeded(key, callback, query, arg = null) {
	let storedData = sessionStorage.getItem(key);
	if (storedData) {
		console.log(`found ${key} in session storage`);
		callback(JSON.parse(storedData));
	} else {
		if (arg) {
			query(arg)
				.then((data) => {
					console.log('made arg query', data);
					sessionStorage.setItem(key, JSON.stringify(data));
					callback(data);
				})
				.catch(console.error);
		} else {
			query()
				.then((data) => {
					console.log('made query');
					sessionStorage.setItem(key, JSON.stringify(data));
					callback(data);
				})
				.catch(console.error);
		}
	}
}
