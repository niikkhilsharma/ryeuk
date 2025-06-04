import profileImage from '@/assets/image/profile/Ryeuk.png'

// Being used in the sidebar as the user data

export const data = {
	user: {
		name: 'Mustafa Wahab',
		role: 'Admin',
		avatar: profileImage,
	},
	calendars: [
		{
			name: 'My Calendars',
			items: ['Personal', 'Work', 'Family'],
		},
		{
			name: 'Favorites',
			items: ['Holidays', 'Birthdays'],
		},
		{
			name: 'Other',
			items: ['Travel', 'Reminders', 'Deadlines'],
		},
	],
}

// This is for the connector component

export const connectors = [
	{ id: 1, heading: 'Database', slug: 'database', subHeading: 'connect your database', url: '/connect database' },
	{ id: 2, heading: 'Single Link', slug: 'link', subHeading: 'connect through link', url: '/connect single-link' },
	{ id: 3, heading: 'Multi Link', slug: 'multi-link', subHeading: 'connect multiple links', url: '/connect multi-link' },
	{ id: 4, heading: 'Sheets', slug: 'sheets', subHeading: 'connect through google / excel sheets', url: '/connect sheets' },
]

export const modify = [
	{ id: 1, heading: 'Database', subHeading: 'connect your database', url: '/edit database-name' },
	{ id: 2, heading: 'Links', subHeading: 'connect through link', url: '/edit link-name' },
	{ id: 3, heading: 'Sheets', subHeading: 'connect multiple links', url: '/edit sheets-name' },
	{ id: 4, heading: 'Disable Database', subHeading: 'connect through google / excel sheets', url: '/dis database-name' },
]
