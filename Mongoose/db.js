const mongoose = require('mongoose')

const main = async () => {
    try {
        const Connect = await mongoose.connect(
        "mongodb://127.0.0.1:27017/studentDB"
        );
        console.log('Connected to DataBase');
    


    // this is the one way to insert the data in the database
    const Student = new StudentModel({
        name : 'John Doe',
        age : 20,
        city: "kandivali"
    });
    await Student.save();


    //if you want to just get the data which is store in db do this

    const StudentData = await StudentModel.find();
    console.log(StudentData);

    await Connect.disconnect();
    console.log('Connection closed');
    } 

    catch (error) {
        console.log("Error connecting to db");
    }
};

main();

const studentSchema = mongoose.Schema(
    {
        name : {type: String, required: true},
        age: {type: Number, required: true},
        city: {type: String, required: true}
    },

    {versionKey: false}
)

const StudentModel = mongoose.model('users', studentSchema);
