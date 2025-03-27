import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/StaffDashboard.css'; // Add some CSS for modal

const StaffDashboard = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showChat, setShowChat] = useState(false); // Control the chat popup
    const [selectedStudent, setSelectedStudent] = useState(null); // Store the selected student
    const [messages, setMessages] = useState([]); // Store chat messages
    const [newMessage, setNewMessage] = useState(''); // New message input

    useEffect(() => {
        // Fetch student risk data from JSON Server
        const fetchStudentRiskData = async () => {
            try {
                const response = await axios.get('http://localhost:5001/risk_scores');
                setStudents(response.data); // Assuming the response is in JSON format
            } catch (err) {
                setError('Error fetching student data');
            } finally {
                setLoading(false);
            }
        };

        fetchStudentRiskData();
    }, []);

    // Fetch messages for a specific student
    const fetchMessages = async (studentId) => {
        try {
            const response = await axios.get(`http://localhost:5002/messages?student_id=${studentId}`);
            setMessages(response.data); // Assuming messages are retrieved by student_id
        } catch (err) {
            console.error('Error fetching messages:', err);
        }
    };

    // Open the chat popup for a specific student
    const openChat = (student) => {
        setSelectedStudent(student);
        fetchMessages(student.student_id);
        setShowChat(true);
    };

    // Close the chat popup
    const closeChat = () => {
        setShowChat(false);
        setSelectedStudent(null);
        setMessages([]);
    };

    // Handle sending a message
    const handleSendMessage = async () => {
        if (newMessage.trim() !== '') {
            const messageData = {
                student_id: selectedStudent.student_id,
                staff_id: 1, // Assuming the staff is id 1 for now
                message: newMessage,
                sender: 'staff',
                timestamp: new Date().toISOString()
            };

            try {
                await axios.post('http://localhost:5002/messages', messageData);
                setMessages([...messages, messageData]);
                setNewMessage(''); // Clear input field after sending
            } catch (err) {
                console.error('Error sending message:', err);
            }
        }
    };

    // Handle loading and error states
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    // Display the risk categories and scores
    return (
        <div>
            <h1>Student Risk Assessment</h1>
            <table>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Risk Score</th>
                        <th>Risk Category</th>
                        <th>Chat</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.student_id}>
                            <td>{student.student_id}</td>
                            <td>{student.risk_score.toFixed(2)}</td>
                            <td>{student.risk_category}</td>
                            <td>
                                <button onClick={() => openChat(student)}>CIA</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Chat popup area */}
            {showChat && selectedStudent && (
                <div className="chat-popup">
                    <div className="chat-header">
                        <h3>Chat with {selectedStudent.student_id}</h3>
                        <button onClick={closeChat}>Close</button>
                    </div>
                    <div className="chat-body">
                        {messages.map((message, index) => (
                            <div key={index} className={`message ${message.sender}`}>
                                <p><strong>{message.sender}: </strong>{message.message}</p>
                                <small>{new Date(message.timestamp).toLocaleString()}</small>
                            </div>
                        ))}
                    </div>
                    <div className="chat-footer">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type a message"
                        />
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StaffDashboard;
