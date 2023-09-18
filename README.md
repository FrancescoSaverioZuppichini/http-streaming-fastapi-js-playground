# HTTP Streaming with FastAPI and JS

## Installation

```bash
pip install -r requirements.txt
```

Run the server

```bash
uvicorn api:app 
```

There are two endpoints, 

- `/file` -> send a file
- `/stream` -> creates server sent events

Then, run the client (install node)

```
node main.ts
```

Have a look inside, there are two functions `fetch_stream` and `fetch_file_stream` the first one consumes the server sent event and the second the file - both are HTTP streaming requests resulting in a `ReadableStream` class