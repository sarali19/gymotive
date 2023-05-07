import React from 'react'
import { Select } from '@mantine/core'
import { BiSort } from "react-icons/bi"

function SortByPrice({ sort }) {
	return (
		<Select
			onChange={(value) => sort(value)}
			color='black'
			placeholder="Sort by"
			data={[
				{ value: 'asc', label: 'Price: Low to High' },
				{ value: 'dsc', label: 'Price: High to Low' },
			]}
			styles={(theme) => ({
				item: {
					// applies styles to selected item
					'&[data-selected]': {
						'&, &:hover': {
							backgroundColor:
								theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[9],
							color: theme.colorScheme === 'dark' ? theme.white : theme.white,
						},
					},

					// applies styles to hovered item (with mouse or keyboard)
					'&[data-hovered]': {},
				},
			})}
			icon={<BiSort />}
		/>
	)
}

export default SortByPrice