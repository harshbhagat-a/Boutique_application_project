import { APIResponse } from '@playwright/test';
import fs from 'fs';

export async function saveProductIds(response: APIResponse) {
    const html = await response.text();

    const regex =
        /href="\/product\/([^"]+)".*?products\/([^"]+)\.jpg/gs;

    const products: Record<string, string> = {};

    let match;

    while ((match = regex.exec(html)) !== null) {
        const productId = match[1];
        const imageName = match[2];

        products[imageName] = productId;
    }

    fs.writeFileSync(
        'src/data/productIds.json',
        JSON.stringify(products, null, 2)
    );
}


export function getProductIds() {
    return JSON.parse(
        fs.readFileSync('src/data/productIds.json', 'utf-8')
    );
}