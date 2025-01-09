import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio'; // fixed import
import dns from 'dns/promises';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get('url');

    console.log("received URL:", url);

    if (!url) {
        return NextResponse.json({ error: 'Please enter a Valid website address' }, { status: 400 });
    }

    try {
        //Ensure the URL includes protocol (http/https);
        const formattedUrl = url.startsWith('http') ? url : `https://${url}`;

        console.log("formatted URL:", formattedUrl);
        // Fetch website HTML
        const response = await axios.get(formattedUrl, {
            headers: { 'User-Agent': 'Mozilla/5.0' },
        });


        // Parse HTML with Cheerio
        const html = response.data;
        const $ = cheerio.load(html);
        const title = $('title').text();
        const metaDescription = $('meta[name="description"]').attr('content') || "No description avaliable";
        const metaTools = $('script[src]').map((_, el) => $(el).attr('src')).get();

        const monetization = html.includes('adsbygoogle.js') ? "Google AdSense" : "None Detected";
        const mediaQueries = html.includes('@media') ? "Suitable for iOS and Android" : "Not optimized";

        // Detect technologies (basic example)
        const frameworks = [];
        if (html.includes('React')) frameworks.push('React');
        if (html.includes('Vue.js')) frameworks.push('Vue.js');
        if (html.includes('angular')) frameworks.push('Angular');
        if (html.includes('python')) frameworks.push('python');
        if (html.includes('Php')) frameworks.push('Php');
        if (html.includes('django')) frameworks.push('django');
        if (html.includes('flask')) frameworks.push('flask');
        if (html.includes('Moment.js')) frameworks.push('Moment.js');

        // Get server information using DNS
        const hostname = new URL(formattedUrl).hostname;
        const dnsInfo = await dns.lookup(hostname);

        console.log("DNS info URL:", dnsInfo)

        // Respond with extracted data
        return NextResponse.json({
            title: title || 'No title available',
            description: metaDescription || 'No description available',
            frameworks,
            tools: metaTools,
            mediaQueries,
            monetization,
            server: {
                address: dnsInfo.address,
                family: dnsInfo.family === 4 ? 'IPV4' : 'IPV6',
            },
        });
    } catch (error: any) {
        return NextResponse.json({
            error: error.message || 'Failed to analyze website. Please ensure the URL is correct'
        }, { status: 500 });
    }
}
