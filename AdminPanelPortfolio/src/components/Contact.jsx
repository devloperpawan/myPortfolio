import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("adminToken");

  // Fetch contacts from backend
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/contact", {
          headers: {
            Authorization: `Bearer ${token}`, // remove if not needed
          },
        });

        setContacts(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch contacts", err);
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  // Handle delete
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this contact?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:5000/api/contact/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // remove if not needed
        },
      });

      // Remove from UI
      setContacts((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      console.error("Failed to delete contact", err);
      alert("Delete failed. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow mt-10">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">Contact Messages</h2>

        {loading ? (
          <p>Loading...</p>
        ) : contacts.length === 0 ? (
          <p>No contacts found.</p>
        ) : (
          <div className="space-y-4">
            {contacts.map((contact) => (
              <div key={contact._id} className="border p-4 rounded bg-gray-50 relative">
                <p><strong>Name:</strong> {contact.name}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Subject:</strong> {contact.subject}</p>
                <p><strong>Message:</strong> {contact.message}</p>
                <button
                  onClick={() => handleDelete(contact._id)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
