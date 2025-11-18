import mongoose from "mongoose";

const apuestaSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    monto: {
        type: Number,
        required: true,
        max: 150000
    },
    apuestaTipo: {
        type: String,
        enum: ["number", "color"],
        required: true,
    },
    numero: {
        type: Number,
        min: 0,
        max: 36,
    },
    color: {
        type: String,
        enum: ["red", "black"],

    },
    resultado: {
        type: Number,
        default: 0,
    }

});

const ruletaSchema = new mongoose.Schema({
    isOpen: { type: Boolean, default: false },
    apuestas: [apuestaSchema]
});

export default mongoose.model("ruleta", ruletaSchema);