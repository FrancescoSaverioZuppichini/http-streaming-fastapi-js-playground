
async function fetch_stream() {
    const res = await fetch("http://127.0.0.1:8000/stream")
    if (!res.body || !res.ok) return
    let i = 0
    for await (const chunk of res.body) {
        const textChunck = new TextDecoder().decode(chunk)
        console.log(`reading chunk ${i}:`, textChunck)
        i += 1
    }

}

const sleep = () => new Promise(resolve => setTimeout(resolve, 200))

async function fetch_file_stream() {
    const res = await fetch("http://127.0.0.1:8000/file")
    if (!res.body || !res.ok) return
    let i = 0


    for await (const chunk of res.body) {
        const textChunck = new TextDecoder().decode(chunk)
        console.log(textChunck)
        console.log(i)
        i++
    }
}

fetch_stream()
fetch_file_stream()