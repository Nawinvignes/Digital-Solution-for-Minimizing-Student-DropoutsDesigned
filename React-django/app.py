import pandas as pd
import requests
import joblib  # Import joblib for loading the model

# Step 1: Load the model from the pickle file
model = joblib.load("C:\\Users\\Nawin Vignesh P\\Downloads\\student_risk_model (1).pkl")

# Step 2: Fetch student data from the JSON server
response = requests.get('http://localhost:5000/students')  # Replace with your JSON server URL
students_data = response.json()  # Assuming the response is in JSON format

# Step 3: Extract only the required fields from the fetched data
required_fields = ['academic_performance', 'engagement_score', 'attendance_rate', 'socio_economic_status']

# Create a DataFrame from the fetched data and add a student_id column if not present
students_df = pd.DataFrame(students_data)

# If the student_id column does not exist, create it as a simple index
if 'student_id' not in students_df.columns:
    students_df['student_id'] = range(1, len(students_df) + 1)

# Step 4: Prepare features for prediction
features = ['academic_performance', 'engagement_score', 'attendance_rate', 'socio_economic_status']

# Step 5: Predict risk scores for each student
risk_scores = model.predict(students_df[features])  # Get the predicted risk scores

# Step 6: Categorize each student based on their risk score
students_df['risk_score'] = risk_scores
students_df['risk_category'] = 'Medium Risk'  # Default to medium risk

# Calculate thresholds for categorization
low_threshold = students_df['risk_score'].quantile(0.33)
high_threshold = students_df['risk_score'].quantile(0.66)

for index, row in students_df.iterrows():
    if row['risk_score'] < low_threshold:
        students_df.at[index, 'risk_category'] = 'Low Risk'
    elif row['risk_score'] > high_threshold:
        students_df.at[index, 'risk_category'] = 'High Risk'

# Step 7: Display results
print(students_df[['student_id', 'risk_score', 'risk_category']])

# Step 8: Post the risk score and risk category back to the JSON server
for index, row in students_df.iterrows():
    # Prepare the data to send
    data_to_post = {
        'student_id': row['student_id'],  # Ensure to include student_id for reference
        'risk_score': row['risk_score'],
        'risk_category': row['risk_category']
    }
    
    # Make a POST request to add the risk score and category
    post_response = requests.post('http://localhost:5001/risk_scores', json=data_to_post)  # Adjust the endpoint as needed
    
    # Check if the post was successful
    if post_response.status_code == 201:
        print(f"Posted successfully for student_id {row['student_id']}: {data_to_post}")
    else:
        print(f"Failed to post for student_id {row['student_id']}: {post_response.status_code}, {post_response.text}")
