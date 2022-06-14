export function checkSeshStorageAddIfNeeded(key, callback, query, arg = null, checkFor = null) {
	let storedData = sessionStorage.getItem(key);

	if (storedData) {
		callback(JSON.parse(storedData));
	} else {
		const storeThis = (data) => {
			console.log({ thisCameIn: data });
			if (checkFor) {
				sessionStorage.setItem(key, 'null');
				if (data[checkFor]) callback(data[checkFor]);
			} else {
				sessionStorage.setItem(key, JSON.stringify(data));
				callback(data);
			}
		};
		if (arg) {
			query(arg)
				.then((data) => storeThis(data))
				.catch(console.error);
		} else {
			query()
				.then((data) => storeThis(data))
				.catch(console.error);
		}
	}
}
