const mongoose = require('mongoose')

const main = async () => {
    try {
        const Connect = await mongoose.connect(

        );
        console.log('Connected to DataBase');
    }
}