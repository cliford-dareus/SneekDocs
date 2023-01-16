import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

const DocSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 5,
        default: 'Untitle'
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    favorite: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
});

const Doc = mongoose.model("Doc", DocSchema);
export default Doc;