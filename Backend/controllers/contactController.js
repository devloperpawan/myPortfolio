const Contact = require("../models/Contact");

exports.submitContact = async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        const newMessage = new Contact({ name, email, subject, message }); 
        await newMessage.save();
        res.status(201).json({ message: "Message Submitted Successfully." });
    } catch (err) {
        console.error("Error submitting contact:", err);
        res.status(500).json({ err: "Failed to Submit Message." });
    }
};

exports.getAllContacts = async (req,res) => {
    try{
        const message = await Contact.find().sort({createdAt: -1});
        res.status(201).json(message);
    } catch(err){
        res.status(500).json({error: "Failed to fetch message."});
    }
}

exports.deleteContact = async (req,res) => {
    try{
        const {id} = req.params;
        await Contact.findByIdAndDelete(id);
        res.status(200).json({message: "Message Deleted Succesfully."})
    } catch(err){
        res.status(500).json({error: "Failed to delete message."});
    }
}