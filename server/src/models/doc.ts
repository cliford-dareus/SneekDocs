import mongoose from 'mongoose';

const DocSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 5
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        require: true
    },
    content: {
        type: String,
        requuire: true
    }

},{
    timestamps: true
});

const Doc = mongoose.model("Doc", DocSchema);
export default Doc;