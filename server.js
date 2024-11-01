const express=require('express');
const app=express();
app.use(express.json())
const PORT= process.env.PORT || 3000;
app.listen(PORT,()=>{
	console.log("Server running on port:",PORT);

});
app.get("/hello",(req,res,next)=>{
	res.json({
	"message":"helo"
	})});