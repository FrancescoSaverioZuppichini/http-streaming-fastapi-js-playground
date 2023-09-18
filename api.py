from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse, FileResponse
from sse_starlette.sse import EventSourceResponse

some_file_path = "gutenberg.org_cache_epub_218_pg218.txt"
app = FastAPI()
import asyncio


async def numbers(req: Request):
    for i in range(10):
        if await req.is_disconnected():
            print(f"client disconnected")
            break
        await asyncio.sleep(0.5)
        print(f"yielding {i}")
        yield dict(data=i)
    yield dict(data="DONE")


@app.get("/file")
async def get_file():
    return FileResponse(some_file_path)

@app.get("/stream")
async def stream(req: Request):   
    return EventSourceResponse(numbers(req))
