import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import LabelEncoder

# Load the dataset
data = pd.read_csv('dataset/urldata.csv')  # Corrected filename and path

# Handle categorical data (if any)
data = pd.get_dummies(data)  # One-hot encoding for categorical variables

# Drop non-numeric columns (if any)
data = data.select_dtypes(include=['number'])  # Keep only numeric columns

# Handle missing values (if any)
data = data.dropna()  # Drop rows with missing values

# Separate features (X) and target (y)
X = data.drop(columns=['Label'])  # Drop the target column
y = data['Label']

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize the Random Forest classifier
clf = RandomForestClassifier()

# Train the classifier
clf.fit(X_train, y_train)

# Make predictions on the test set
y_pred = clf.predict(X_test)

# Calculate accuracy
accuracy = accuracy_score(y_test, y_pred)
print("Model accuracy:", accuracy)
