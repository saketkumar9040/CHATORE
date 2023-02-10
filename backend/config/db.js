const mongoose =require('mongoose');
mongoose.set('strictQuery', false);

const connectDb=async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log(`Database connected : ${conn.connection.host}`.cyan.bold);
        
    } catch (error) {
        if(error){
           console.log(error.message);
           process.exit();
        }      
    }
};

module.exports =connectDb;