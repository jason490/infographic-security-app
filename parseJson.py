import json
import pprint
from collections import Counter

# Load the JSON file
file_path = './known_exploited_vulnerabilities.json'  # Adjust path if needed
with open(file_path, 'r') as f:
    kev_data = json.load(f)

# Total number of known exploited vulnerabilities
total_vulnerabilities = len(kev_data['vulnerabilities'])
print(f"Total number of known exploited vulnerabilities: {total_vulnerabilities}")

# Define a list of big companies
big_companies = [
    'Microsoft', 'Apple', 'Google', 'Cisco', 'Oracle', 'Adobe',
    'VMware', 'Intel', 'IBM', 'Amazon', 'Facebook', 'Meta'
]

# Count vulnerabilities for each big company
vendor_counts = Counter()
total = 0
for vuln in kev_data['vulnerabilities']:
    vendor = vuln.get('vendorProject', '').strip()
    vendor_counts[vendor] += 1
    total += 1
pprint.pp(vendor_counts)
pprint.pp(total)
# Print the results
print("\nVulnerabilities by big company:")
for company in big_companies:
    count = vendor_counts.get(company, 0)
    print(f"{company}: {count}")
