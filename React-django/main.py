import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, r2_score

# Step 1: Load the dataset
data = pd.read_csv("C:\\Users\\Nawin Vignesh P\\Downloads\\student_data_train.csv")  # Adjust the file path as needed
# Strip whitespace from column names
data.columns = data.columns.str.strip()
print(data.columns)

# Define features and target variable
X = data[['academic_performance', 'engagement_score', 'attendance_rate', 'socio_economic_status']]  # Input features
y = data['risk_score']  # Target: risk score (continuous)

# Step 2: Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.01, random_state=39)

# Step 3: Train a RandomForestRegressor model
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Step 4: Make predictions
y_pred = model.predict(X_test)

# Step 5: Evaluate the model
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)
print(f"Mean Squared Error: {mse:.2f}")
print(f"R-squared: {r2:.2f}")

# Step 6: Predict risk score
# Note: No need to calculate probabilities since it's a regression model
print("Risk Scores for first 5 students in the test set:")
print(y_pred[:5])

# Step 7: Calculate total risk score
total_risk_score = y_pred.sum()
print(f"Total Risk Score for the test set: {total_risk_score:.2f}")
