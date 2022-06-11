// --> React
import React from 'react';

// --> Packages
import { Container } from 'semantic-ui-react';

// --> Component Imports
import Style from './browseFilters.module.scss';

export default function BrowseFilters({ items, setActiveCallback }) {
	const [options, setOptions] = React.useState(BrowseFilters.collectTags({ items }));
	const [active, setActive] = React.useState([]);

	const addFilter = React.useCallback(
		(option) => {
			let newActive = [...active, option];
			setActive(newActive);
			setActiveCallback(newActive);
		},
		[active, setActiveCallback]
	);

	const removeFilter = React.useCallback(
		(option) => {
			let newActive = active.filter((f) => f !== option);
			setActive(newActive);
			setActiveCallback(newActive);
		},
		[active, setActiveCallback]
	);

	React.useEffect(() => {
		if (!options) {
			let filterOptions = BrowseFilters.collectTags({ items });
			setOptions(filterOptions);
		}
	}, [items, options]);

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

BrowseFilters.collectTags = ({ items = [] }) => {
	let tagsArr = items.map((i) => i.tags); // <-- Generates array of arrays
	tagsArr = [...new Set(tagsArr.flat(1).map((t) => t.title))];
	return tagsArr;
};

BrowseFilters.itemHasActiveTag = (active = [], tags = []) => {
	console.log({ active });
	for (let x = 0; x < tags.length; x++) {
		console.log({ tagname: tags[x] });
		if (active.includes(tags[x].title)) return true;
	}
	return false;
};
