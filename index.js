'use strict'
const dateformat = require('dateformat')

function harikemarin(timestamp, format) {
	const date = new Date(timestamp)

	date.setDate(date.getDate() - 1)

	return dateformat(date, format)
}

module.exports = harikemarin
