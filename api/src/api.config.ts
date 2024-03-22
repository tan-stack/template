export interface ApiConfig {
    opt1: string;
    opt2: number;
}

export const apiConfig: () => ApiConfig = () => ({
    opt1: process.env['OPT1'] ?? '',
    opt2: Number.parseInt(process.env['OPT2'] ?? '', 10) || 12121,
});
