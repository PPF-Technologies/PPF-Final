import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

const uri = process.env.MONGODB_URI;

export async function POST(request) {
    try {
        // Parse the request body
        const { name, email, phoneNumber, message } = await request.json();

        // Validate required fields
        if (!name || !email || !phoneNumber) {
            return NextResponse.json(
                { error: 'Name, email and phone number are required' },
                { status: 400 }
            );
        }

        // Create IST timestamp
        const istTime = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Kolkata'
        });

        // Prepare contact data
        const contactData = {
            name,
            email,
            phoneNumber,
            message: message || '', // Make message optional with empty string default
            timestamp: istTime,
            createdAt: new Date()
        };

        // Connect to MongoDB
        const client = await MongoClient.connect(uri);
        const db = client.db('camio-ppf');
        if (db) {
            console.log("Database connected");
        }
        
        // Insert data
        await db.collection('contacts').insertOne(contactData);
        
        // Close connection
        await client.close();

        return NextResponse.json(
            { message: 'Contact form submitted successfully' },
            { status: 201 }
        );

    } catch (error) {
        console.error('Contact form submission error:', error);
        return NextResponse.json(
            { error: 'Failed to submit contact form' },
            { status: 500 }
        );
    }
}
