const express = require("express");
const Contact = require("../models/Contact");
const router = express.Router();

// Get all contacts
router.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

// Get a contact by ID
router.get("/:id", async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.json(contact);
});

// Add a new contact
router.post("/", async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.status(201).json(contact);
});

// Update a contact
router.put("/:id", async (req, res) => {
  const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedContact);
});

// Delete a contact
router.delete("/:id", async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: "Contact deleted" });
});

// Delete all contacts
router.delete("/", async (req, res) => {
  await Contact.deleteMany();
  res.json({ message: "All contacts deleted" });
});

router.post("/", async (req, res) => {
    try {
      const contact = new Contact(req.body);
      await contact.save();
      res.status(201).json(contact);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
module.exports = router;
