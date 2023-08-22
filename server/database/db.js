import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-s76yhaf-shard-00-00.davkk2l.mongodb.net:27017,ac-s76yhaf-shard-00-01.davkk2l.mongodb.net:27017,ac-s76yhaf-shard-00-02.davkk2l.mongodb.net:27017/?ssl=true&replicaSet=atlas-bgr9f5-shard-0&authSource=admin&retryWrites=true&w=majority`;
    // const URL = `mongodb+srv://shubham:2246722@cluster0.davkk2l.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;