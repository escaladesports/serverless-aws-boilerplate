
export function hello(event, context, callback){
	console.log(`Endpoint hit...`)
	const response = {
		statusCode: 200,
		headers: {
			'Access-Control-Allow-Origin': `*`,
			'Access-Control-Allow-Credentials': true,
		},
		body: JSON.stringify({
			message: `Go Serverless v1.0! Your function executed successfully!`,
		}),
	}

	console.log(response)

	callback(null, response)
}