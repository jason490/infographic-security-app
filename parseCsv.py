import pandas as pd

# Load the CSV file
file_path = "./IIB Data Breaches - LATEST - breaches.csv"
df = pd.read_csv(file_path)

# Display the first few rows to understand the structure (optional)
print(df.head())

# Assuming there is a column like "Severity" or similar
# Replace 'Severity' with the actual column name if it's different
severity_column = 'data sensitivity'  # <-- You may need to adjust this

# Count the number of breaches per severity
severity_counts = df[severity_column].value_counts()

# Print the result
print("Number of breaches per severity:")
print(severity_counts)
