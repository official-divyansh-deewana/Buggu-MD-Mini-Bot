const mongoose = require('mongoose');

const antideleteSchema = new mongoose.Schema({
    chatId: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: Boolean,
        default: false
    }
});

const Antidelete = mongoose.model('Antidelete', antideleteSchema);

const getAntideleteStatus = async (chatId) => {
    try {
        const data = await Antidelete.findOne({ chatId });
        return data ? data.status : false;
    } catch (e) {
        console.error("Get Antidelete Error:", e);
        return false;
    }
};

const setAntideleteStatus = async (chatId, status) => {
    try {
        await Antidelete.findOneAndUpdate(
            { chatId },
            { status },
            { upsert: true, new: true }
        );
        return true;
    } catch (e) {
        console.error("Set Antidelete Error:", e);
        return false;
    }
};

module.exports = {
    Antidelete,
    getAntideleteStatus,
    setAntideleteStatus
};
