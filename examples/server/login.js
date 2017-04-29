//@TODO: See what happens if I delete this
module.exports = function(express,alexaAppServerObject) {
	express.use('/login',function(req,res) {
		res.send("Imagine this is a dynamic server-side login action");
	});
};
