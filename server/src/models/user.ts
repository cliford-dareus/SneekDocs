import mongoose from "mongoose";
mongoose.set('strictQuery', false);

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 5,
        max: 12
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 4
    }
},{
    timestamps: true
});

const User = mongoose.model('User', UserSchema);
export default User;