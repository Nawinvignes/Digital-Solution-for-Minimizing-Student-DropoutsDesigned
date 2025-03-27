import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/StaffDashboard.css'; // Ensure the styles are included for chat

const StudentDashboard = () => {
    const [messages, setMessages] = useState([]); // Store messages between student and staff
    const [newMessage, setNewMessage] = useState(''); // Store student's new message
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const student_id = 1; // Hardcoded for now (you can get this dynamically based on logged-in user)
    const staff_id = 1;   // Hardcoded for now (you can update this for the actual staff member)

    // Fetch messages from the JSON server on port 5002
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get(`http://localhost:5002/messages?student_id=${student_id}`);
                setMessages(response.data);
            } catch (err) {
                setError('Error fetching messages');
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, [student_id]);

    // Handle sending a new message from the student
    const handleSendMessage = async () => {
        if (newMessage.trim() !== '') {
            const messageData = {
                student_id: student_id,
                staff_id: staff_id,
                message: newMessage,
                sender: 'student',
                timestamp: new Date().toISOString()
            };

            try {
                await axios.post('http://localhost:5002/messages', messageData);
                setMessages([...messages, messageData]); // Add the new message to the chat
                setNewMessage(''); // Clear the input field
            } catch (err) {
                console.error('Error sending message:', err);
            }
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="dashboard">
            <h2>Student Dashboard</h2>
            <div className="dashboard-section">
                <h3>Attendance</h3>
                <p>80% attendance this month.</p>
            </div>
            <div className="dashboard-section">
                <h3>Performance</h3>
                <p>Average Grade: B+</p>
            </div>

            {/* CIA Section */}
            <div className="dashboard-section cia-section">
                <h3>Clearance of Issue Area (CIA)</h3>
                <div className="cia-messages">
                    {/* Display messages from staff and student */}
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender}`}>
                            <p><strong>{msg.sender}: </strong>{msg.message}</p>
                            <small>{new Date(msg.timestamp).toLocaleString()}</small>
                        </div>
                    ))}
                </div>
                <div className="cia-reply">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message here..."
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
