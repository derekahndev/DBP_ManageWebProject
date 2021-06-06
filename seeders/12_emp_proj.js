'use strict';

const { query } = require('express');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		const eProj_bulk = [
			{
				ep_id: 1,
				emp_id: 98,
				pro_id: 1,
				role_id: 1,
				working_time: 1030,
				ep_start_date: '2015-01-01',
				ep_end_date: '2018-02-22',
			},
			{
				ep_id: 2,
				emp_id: 73,
				pro_id: 1,
				role_id: 2,
				working_time: 1000,
				ep_start_date: '2015-01-01',
				ep_end_date: '2018-02-22',
			},
			{
				ep_id: 3,
				emp_id: 74,
				pro_id: 1,
				role_id: 2,
				working_time: 800,
				ep_start_date: '2015-01-01',
				ep_end_date: '2018-02-22',
			},
			{
				ep_id: 4,
				working_time: 1000,
				emp_id: 88,
				pro_id: 1,
				role_id: 3,
				ep_start_date: '2015-01-01',
				ep_end_date: '2018-02-22',
			},
			{
				ep_id: 5,
				emp_id: 89,
				pro_id: 1,
				role_id: 3,
				working_time: 880,
				ep_start_date: '2015-01-01',
				ep_end_date: '2018-02-22',
			},
			{
				ep_id: 6,
				emp_id: 90,
				pro_id: 1,
				role_id: 3,
				working_time: 80,
				ep_start_date: '2015-01-01',
				ep_end_date: '2018-02-22',
			},
			{
				ep_id: 7,
				emp_id: 91,
				pro_id: 1,
				role_id: 3,
				working_time: 80,
				ep_start_date: '2015-01-01',
				ep_end_date: '2018-02-22',
			},
			{
				ep_id: 8,
				emp_id: 92,
				pro_id: 1,
				role_id: 3,
				working_time: 350,
				ep_start_date: '2017-07-01',
				ep_end_date: '2018-02-22',
			},
			{
				ep_id: 9,
				emp_id: 96,
				pro_id: 1,
				role_id: 3,
				working_time: 350,
				ep_start_date: '2017-07-01',
				ep_end_date: '2018-02-22',
			},
			{
				ep_id: 10,
				emp_id: 100,
				pro_id: 1,
				role_id: 3,
				working_time: 350,
				ep_start_date: '2017-07-01',
				ep_end_date: '2018-02-22',
			},
			{
				ep_id: 11,
				emp_id: 71,
				pro_id: 2,
				role_id: 1,
				working_time: 1450,
				ep_start_date: '2017-03-14',
				ep_end_date: '2020-01-20',
			},
			{
				ep_id: 12,
				emp_id: 48,
				pro_id: 2,
				role_id: 2,
				working_time: 1450,
				ep_start_date: '2017-03-14',
				ep_end_date: '2020-01-20',
			},
			{
				ep_id: 13,
				emp_id: 60,
				pro_id: 2,
				role_id: 2,
				working_time: 1450,
				ep_start_date: '2017-03-14',
				ep_end_date: '2020-01-20',
			},
			{
				ep_id: 14,
				emp_id: 21,
				pro_id: 2,
				role_id: 3,
				working_time: 1450,
				ep_start_date: '2017-03-14',
				ep_end_date: '2020-01-20',
			},
			{
				ep_id: 15,
				emp_id: 7,
				pro_id: 2,
				role_id: 3,
				working_time: 1450,
				ep_start_date: '2017-03-14',
				ep_end_date: '2020-01-20',
			},
			{
				ep_id: 16,
				emp_id: 42,
				pro_id: 2,
				role_id: 3,
				working_time: 1450,
				ep_start_date: '2019-05-01',
				ep_end_date: '2020-01-20',
			},
			{
				ep_id: 17,
				emp_id: 63,
				pro_id: 3,
				role_id: 1,
				working_time: 550,
				ep_start_date: '2018-05-23',
				ep_end_date: '2019-08-30',
			},
			{
				ep_id: 18,
				emp_id: 52,
				pro_id: 3,
				role_id: 2,
				working_time: 650,
				ep_start_date: '2018-05-23',
				ep_end_date: '2019-08-30',
			},
			{
				ep_id: 19,
				emp_id: 40,
				pro_id: 3,
				role_id: 2,
				working_time: 600,
				ep_start_date: '2018-05-23',
				ep_end_date: '2019-08-30',
			},
			{
				ep_id: 20,
				emp_id: 66,
				pro_id: 3,
				role_id: 3,
				working_time: 550,
				ep_start_date: '2018-05-23',
				ep_end_date: '2019-08-30',
			},
			{
				ep_id: 21,
				emp_id: 54,
				pro_id: 3,
				role_id: 3,
				working_time: 550,
				ep_start_date: '2018-05-23',
				ep_end_date: '2019-08-30',
			},
			{
				ep_id: 22,
				emp_id: 28,
				pro_id: 3,
				role_id: 3,
				working_time: 550,
				ep_start_date: '2019-04-03',
				ep_end_date: '2019-08-30',
			},
			{
				ep_id: 23,
				emp_id: 68,
				pro_id: 4,
				role_id: 1,
				working_time: 700,
				ep_start_date: '2018-11-30',
				ep_end_date: '2020-02-28',
			},
			{
				ep_id: 24,
				emp_id: 44,
				pro_id: 4,
				role_id: 2,
				working_time: 700,
				ep_start_date: '2018-11-30',
				ep_end_date: '2020-02-28',
			},
			{
				ep_id: 25,
				emp_id: 72,
				pro_id: 4,
				role_id: 2,
				working_time: 700,
				ep_start_date: '2018-11-30',
				ep_end_date: '2020-02-28',
			},
			{
				ep_id: 26,
				emp_id: 22,
				pro_id: 4,
				role_id: 3,
				working_time: 700,
				ep_start_date: '2018-11-30',
				ep_end_date: '2020-02-28',
			},
			{
				ep_id: 27,
				emp_id: 27,
				pro_id: 4,
				role_id: 3,
				working_time: 700,
				ep_start_date: '2018-11-30',
				ep_end_date: '2020-02-28',
			},
			{
				ep_id: 28,
				emp_id: 30,
				pro_id: 4,
				role_id: 3,
				working_time: 700,
				ep_start_date: '2018-11-30',
				ep_end_date: '2020-02-28',
			},
			{
				ep_id: 29,
				emp_id: 19,
				pro_id: 4,
				role_id: 3,
				working_time: 250,
				ep_start_date: '2019-10-01',
				ep_end_date: '2020-02-28',
			},
			{
				ep_id: 30,
				emp_id: 98,
				pro_id: 5,
				role_id: 1,
				working_time: 350,
				ep_start_date: '2019-12-30',
				ep_end_date: null,
			},
			{
				ep_id: 31,
				emp_id: 73,
				pro_id: 5,
				role_id: 2,
				working_time: 350,
				ep_start_date: '2019-12-30',
				ep_end_date: null,
			},
			{
				ep_id: 32,
				emp_id: 74,
				pro_id: 5,
				role_id: 2,
				working_time: 350,
				ep_start_date: '2019-12-30',
				ep_end_date: null,
			},
			{
				ep_id: 33,
				emp_id: 81,
				pro_id: 5,
				role_id: 3,
				working_time: 350,
				ep_start_date: '2019-12-30',
				ep_end_date: null,
			},
			{
				ep_id: 34,
				emp_id: 78,
				pro_id: 5,
				role_id: 3,
				working_time: 350,
				ep_start_date: '2019-12-30',
				ep_end_date: null,
			},
			{
				ep_id: 35,
				emp_id: 86,
				pro_id: 5,
				role_id: 3,
				working_time: 350,
				ep_start_date: '2019-12-30',
				ep_end_date: null,
			},
			{
				ep_id: 36,
				emp_id: 99,
				pro_id: 5,
				role_id: 3,
				working_time: 330,
				ep_start_date: '2021-01-01',
				ep_end_date: null,
			},
			{
				ep_id: 37,
				emp_id: 87,
				pro_id: 5,
				role_id: 3,
				working_time: 320,
				ep_start_date: '2021-01-01',
				ep_end_date: null,
			},
			{
				ep_id: 38,
				emp_id: 94,
				pro_id: 5,
				role_id: 3,
				working_time: 320,
				ep_start_date: '2021-01-01',
				ep_end_date: null,
			},
			{
				ep_id: 39,
				emp_id: 76,
				pro_id: 5,
				role_id: 3,
				working_time: 320,
				ep_start_date: '2021-01-01',
				ep_end_date: null,
			},
			{
				ep_id: 40,
				emp_id: 71,
				pro_id: 6,
				role_id: 1,
				working_time: 630,
				ep_start_date: '2020-05-01',
				ep_end_date: null,
			},
			{
				ep_id: 41,
				emp_id: 48,
				pro_id: 6,
				role_id: 2,
				working_time: 630,
				ep_start_date: '2020-05-01',
				ep_end_date: null,
			},
			{
				ep_id: 42,
				emp_id: 60,
				pro_id: 6,
				role_id: 2,
				working_time: 630,
				ep_start_date: '2020-05-01',
				ep_end_date: null,
			},
			{
				ep_id: 43,
				emp_id: 79,
				pro_id: 6,
				role_id: 3,
				working_time: 630,
				ep_start_date: '2020-05-01',
				ep_end_date: null,
			},
			{
				ep_id: 44,
				emp_id: 75,
				pro_id: 6,
				role_id: 3,
				working_time: 630,
				ep_start_date: '2020-05-01',
				ep_end_date: null,
			},
			{
				ep_id: 45,
				emp_id: 83,
				pro_id: 6,
				role_id: 3,
				working_time: 630,
				ep_start_date: '2020-05-01',
				ep_end_date: null,
			},
			{
				ep_id: 46,
				emp_id: 80,
				pro_id: 6,
				role_id: 3,
				working_time: 630,
				ep_start_date: '2020-05-01',
				ep_end_date: null,
			},
			{
				ep_id: 47,
				emp_id: 77,
				pro_id: 6,
				role_id: 3,
				working_time: 630,
				ep_start_date: '2020-05-01',
				ep_end_date: null,
			},
			{
				ep_id: 48,
				emp_id: 82,
				pro_id: 6,
				role_id: 3,
				working_time: 630,
				ep_start_date: '2020-05-01',
				ep_end_date: null,
			},
			{
				ep_id: 49,
				emp_id: 23,
				pro_id: 6,
				role_id: 3,
				working_time: 630,
				ep_start_date: '2020-05-01',
				ep_end_date: null,
			},
			{
				ep_id: 50,
				emp_id: 50,
				pro_id: 6,
				role_id: 3,
				working_time: 630,
				ep_start_date: '2020-05-01',
				ep_end_date: null,
			},
		];
		await queryInterface.bulkInsert('emp_proj', eProj_bulk, {});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('emp_proj', null, {});
	},
};
