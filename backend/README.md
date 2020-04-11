# Dominion (back-end model)

## Getting Started
all commands should be run from the root backend directory (./backend)

1. Install local package "dominion"
    `pip install -e .`

2. Setup local package w/ dependencies
    `python setup.py develop`

3. Run Flask server
   `flask run`
   - This will create a server at localhost:5000
   - Currently, the api only exposes a `/time` endpoint which can be accessed at localhost:5000/time