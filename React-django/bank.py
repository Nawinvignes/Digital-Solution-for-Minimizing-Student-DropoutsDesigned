import pandas as pd
from sklearn.model_selection import train_test_split
import joblib

# Create the dataset based on the provided data
data = {
    "Bank Name": [
        "Bank of America", "SBI (State Bank of India)", "HSBC", "Deutsche Bank", "ICICI Bank", 
        "Wells Fargo", "Barclays", "BNP Paribas", "Standard Chartered", "Mitsubishi UFJ Financial"
    ],
    "Country": [
        "USA", "India", "UK", "Germany", "India", 
        "USA", "UK", "France", "Singapore", "Japan"
    ],
    "Max Loan Amount": [
        50000, 1.5e7, 75000, 50000, 1e7, 
        100000, 100000, 75000, 200000, 1e7
    ],
    "Interest Rate (Min)": [
        5.0, 9.3, 6.0, 3.5, 10.5, 
        4.8, 5.5, 4.2, 5.0, 3.5
    ],
    "Interest Rate (Max)": [
        9.0, 12.5, 10.0, 6.5, 13.5, 
        8.6, 9.0, 8.0, 8.5, 7.0
    ]
}

# Convert the data into a DataFrame
df = pd.DataFrame(data)

# Calculate the average interest rate for each bank
df['Average Interest Rate'] = (df['Interest Rate (Min)'] + df['Interest Rate (Max)']) / 2

# Find the bank(s) with the lowest average interest rate
lowest_interest_banks = df[df['Average Interest Rate'] == df['Average Interest Rate'].min()]



lowest_interest_banks




