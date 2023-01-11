export interface RSAPair {
    privateKey: string | Buffer;
    publicKey: string | Buffer;
}

export function generateRSAKeyPair(keySize?: number, passphrase?: string, encrypted?: boolean): Promise<RSAPair>;
export function loadPrivateKey(data: string | Buffer): string | Buffer;
export function loadPublicKey(data: string | Buffer): string | Buffer;
export function loadPrivateKeyFromBase64(data: string | Buffer): string | Buffer;
export function loadPublicKeyFromBase64(data: string | Buffer): string | Buffer;
export function loadPrivateKeyAsBase64(data: string | Buffer): string;
export function loadPublicKeyAsBase64(data: string | Buffer): string;
