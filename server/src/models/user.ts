import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 5,
        max: 12
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
        min: 4
    }
},{
    timestamps: true
});

const User = mongoose.model('User', UserSchema);
export default User;