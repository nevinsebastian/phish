import pandas as pd

# Load the dataset
data = pd.read_csv('dataset/urldata.csv')  # Replace 'your_dataset.csv' with the actual filename

# Display the first few rows of the dataset
print(data.head())

# Drop the target column from the feature matrix
X = data.drop(columns=['Label'])  # Drop the target column

# Assuming 'X' contains features and 'y' contains labels
y = data['Label']  # Extract the target column as labels

# Display the shape of X and y
print("Shape of X:", X.shape)
print("Shape of y:", y.shape)
