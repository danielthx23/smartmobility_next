export const calculateRoute = async (origin: string, destination: string): Promise<string | null> => {
    if (!origin || !destination) {
        alert("Por favor, preencha ambos os campos!");
        return null;
    }

    const apiKey = "AIzaSyC5QsQ9OvxX1V-V0sKoGMmBCDgBbJ1FO44";  

    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(
        origin
    )}&destination=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === "OK") {
            return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
                origin
            )}&destination=${encodeURIComponent(destination)}`;
        } else {
            alert("Não foi possível calcular a rota. Verifique os endereços digitados.");
            return null;
        }
    } catch (error) {
        console.error("Erro ao buscar a rota:", error);
        alert("Erro ao buscar a rota. Tente novamente.");
        return null;
    }
};
