import csv
from pymongo import MongoClient

# MongoDB connection
client = MongoClient('mongodb://localhost:27017')
db = client['scholarship-finder']
collection = db['scholarships']

# Read data from CSV file
with open('scholarships.csv', 'r', encoding='utf-8') as file:
    csv_reader = csv.DictReader(file)
    data = list(csv_reader)

# Insert data into MongoDB
try:
    result = collection.insert_many(data)
    print(f"Inserted {len(result.inserted_ids)} documents into the collection.")
except Exception as e:
    print(f"Error inserting data: {e}")

# Close the MongoDB connection
client.close()
