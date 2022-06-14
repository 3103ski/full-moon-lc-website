// --> React
import React from 'react';

// --> Packages
import { Container } from 'semantic-ui-react';

// --> Component Imports
import Style from './browseFilters.module.scss';

export default function BrowseFilters({ items, setActiveCallback, notTag = null }) {
	const [options, setOptions] = React.useState(null);
	const [active, setActive] = React.useState([]);

	const addFilter = React.useCallback(
		(option) => {
			let newActive = [...active, option];
			setActive(newActive);
			if (setActiveCallback) setActiveCallback(newActive);
		},
		[active, setActiveCallback]
	);

	const removeFilter = React.useCallback(
		(option) => {
			let newActive = active.filter((f) => f !== option);
			setActive(newActive);
			if (setActiveCallback) setActiveCallback(newActive);
		},
		[active, setActiveCallback]
	);

	React.useEffect(() => {
		if (!options) {
			let filterOptions = BrowseFilters.collectTags({ items, notTag });
			setOptions(filterOptions);
		}
	}, [items, notTag, options]);

	return React.useMemo(
		() =>
			options && (
				<Container className={Style.FilterWrapper}>
					{options.map((filter, i) => (
						<div
							className={Style.FilterOption}
							data-active={active.includes(filter) ? 1 : 0}
							key={`${filter}__${i}`}
							onClick={active.includes(filter) ? () => removeFilter(filter) : () => addFilter(filter)}>
							<p>{filter}</p>
						</div>
					))}
				</Container>
			),
		[active, addFilter, options, removeFilter]
	);
}

BrowseFilters.collectTags = ({ items = [], notTag = null }) => {
	let tagsArr;
	if (notTag) {
		tagsArr = items.map((item) => item[notTag]); // <-- Generates array of arrays
	} else {
		tagsArr = items.map((item) => item.tags); // <-- Generates array of arrays
	}
	return (tagsArr = [...new Set(tagsArr.flat(1).map((t) => t.title))]);
};

BrowseFilters.itemHasActiveTag = (active = [], tags = []) => {
	for (let x = 0; x < tags.length; x++) {
		if (active.includes(tags[x].title)) return true;
	}
	return false;
};
