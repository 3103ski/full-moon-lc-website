export function checkSeshStorageAddIfNeeded(key, callback, query, arg = null, checkFor = null) {
	// Attempt to get the needed info from session storage
	let storedData = sessionStorage.getItem(key);

	if (storedData) {
		// Found the daya in SS
		// Parse and send back data to component
		callback(JSON.parse(storedData));
	} else {
		// Did not find the key in SS
		// Consolidate storage function for both arg and non-arg scanario
		function storeThis(data) {
			if (checkFor) {
				sessionStorage.setItem(key, 'null');
				if (data[checkFor]) callback(data[checkFor]);
			} else {
				sessionStorage.setItem(key, JSON.stringify(data));
				callback(data);
			}
		}

		// Did not find the key in SS; query the DB
		if (arg) {
			// Only works for single arg queries. Needs work for wider usages.
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
