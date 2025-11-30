export interface UserCredentials {
    username: string;
    email: string;
}

export interface LatencyData {
    phase: string;
    function: string;
    latency: number;
    description: string;
    color: string;
}

export interface TechRef {
    id: string;
    title: string;
    source: string;
    category: 'Cognitive' | 'Physics' | 'Visual' | 'Audio' | 'Ethics';
}