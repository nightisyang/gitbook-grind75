import urllib.request
from bs4 import BeautifulSoup
import ssl
import json

# Ignore SSL cerificate errors(for HTTPS sites)
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = input('Enter -')
# for HTTPS
html = urllib.request.urlopen(url, context=ctx).read()
# html = urllib.request.urlopen(url).read()
soup = BeautifulSoup(html, 'html.parser')

for ingredients in soup:
    print(ingredients)

output = []

# Retrieve all of the anchor tags, tag is an object
tags = soup('a')
for tag in tags:
    dictionary = {}
    link = tag.get('href', None)
    name = tag.text.strip()
    dictionary[name] = link
    output.append(dictionary)

serialized_json = json.dumps(output)
f = open('grind75-links.json', 'x')
f.write(serialized_json)
f.close()
