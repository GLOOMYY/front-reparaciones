export const GET = async (request) => {
    const services = []

    return new Response(JSON.stringify(services), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}