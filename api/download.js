// Usaremos un motor ligero para obtener el stream
export default async function handler(req, res) {
    const { url } = req.body;
    
    try {
        // En lugar de una API saturada, usamos un "fetch" directo a un motor de resolución
        const response = await fetch('https://api.cobalt.tools/api/json', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ url: url, vQuality: "720" })
        });

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Error en la proxy" });
    }
}
