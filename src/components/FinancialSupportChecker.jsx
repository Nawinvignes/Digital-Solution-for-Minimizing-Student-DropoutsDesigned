import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/FinancialSupportChecker.css'; // Import the CSS file

const FinancialSupportChecker = ({ student_id }) => {
    const [supportInfo, setSupportInfo] = useState(null);
    const [error, setError] = useState('');
    const [bankData, setBankData] = useState(null);
    const [sportData, setSportData] = useState(null);

    // Fetch messages from json-server and check for specific messages
    useEffect(() => {
        const checkForSupportRequest = async () => {
            try {
                console.log(student_id);
                const response = await axios.get(`http://localhost:5002/messages?student_id=1`);
                
                const financialMessage = response.data.find((msg) => msg.message.includes('Financial support needed'));
                const sportMessage = response.data.find((msg) => msg.message.includes('I am very much interested in Sport'));

                if (financialMessage) {
                    // Fetch bank data and find the bank with the lowest interest rate
                    const bankResponse = await axios.get('http://localhost:5003/banks');
                    const banks = bankResponse.data;

                    const lowestInterestBank = banks.reduce((prev, curr) => {
                        const prevAvg = (prev.interestRateMin + prev.interestRateMax) / 2;
                        const currAvg = (curr.interestRateMin + curr.interestRateMax) / 2;
                        return currAvg < prevAvg ? curr : prev;
                    });

                    setBankData(lowestInterestBank);
                } else if (sportMessage) {
                    // Fetch sports event data
                    const sportResponse = await axios.get('http://localhost:5004/sports');
                    const sports = sportResponse.data;

                    setSportData(sports);
                } else {
                    setError('No relevant request found.');
                }
            } catch (err) {
                setError('Error fetching data.');
            }
        };

        checkForSupportRequest();
    }, [student_id]);

    return (
        <div className="financial-support-checker">
            {bankData ? (
                <div className="bank-info">
                    <h3>Bank with the Lowest Interest Rate:</h3>
                    <p><strong>Bank Name:</strong> {bankData.name}</p>
                    <p><strong>Average Interest Rate:</strong> {(bankData.interestRateMin + bankData.interestRateMax) / 2}%</p>
                </div>
            ) : sportData ? (
                <div className="sport-info">
                    <h3>Upcoming Sports Events:</h3>
                    {sportData.map((sport) => (
                        <div className="sport-details" key={sport.id}>
                            <p><strong>Sport:</strong> {sport.sportName}</p>
                            <p><strong>Date:</strong> {sport.eventDate}</p>
                            <p><strong>Location:</strong> {sport.location}</p>
                            <p><strong>Address:</strong> {sport.address.street}, {sport.address.city}, {sport.address.state} {sport.address.zipCode}</p>
                            <p><strong>Teams/Players:</strong> {sport.teams ? sport.teams.join(', ') : sport.players.join(', ')}</p>
                            <p><strong>Ticket Price:</strong> ${sport.ticketPrice.minPrice} - ${sport.ticketPrice.maxPrice}</p>
                        </div>
                    ))}
                </div>
            ) : (
                error && <p className="error-message">{error}</p>
            )}
        </div>
    );
};

export default FinancialSupportChecker;
