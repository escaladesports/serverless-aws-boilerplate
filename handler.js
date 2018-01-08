import dotenv from 'dotenv'
import middy from 'middy'
import { jsonBodyParser, httpErrorHandler, cors } from 'middy/middlewares'

// Import env variables
dotenv.config({
	silent: true,
	path: process.env.NODE_ENV === 'production' ? '.env-production' : '.env'
})

// Export function with middleware
module.exports.hello = middy((event, context, callback) => {
		console.log('BODY:', event.body)
		callback(null, {
			body: JSON.stringify({
				result: 'success'
			})
		})
	})
	.use(cors())
	.use(jsonBodyParser())
	.use(httpErrorHandler())