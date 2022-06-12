export function scrollToTopOf(divID) {
	let view = document.getElementById(divID);
	if (view) {
		view.scrollTo(0, 0);
	}
}

export function intFromPx(string) {
	return parseInt(string.split('px')[0]);
}

// Ref Functions
export function refWidth(ref) {
	return !ref || !ref.current || ref.current.clientWidth === undefined ? 0 : ref.current.clientWidth;
}

export function refHeight(ref) {
	return !ref || !ref.current || ref.current.clientWidth === undefined ? 0 : ref.current.clientHeight;
}
