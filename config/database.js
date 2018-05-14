if(process.env.NODE_ENV === 'production'){

	module.exports = { mongoURI: "mongodb://sandesh:sandesh@ds239359.mlab.com:39359/idea-jot"}
}
else{

	module.exports = {mongoURI: "mongodb://localhost/idea-dev"}
}