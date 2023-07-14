from motor.motor_asyncio import AsyncIOMotorClient
from models import Email
client = AsyncIOMotorClient("mongodb://localhost:27017")
database = client.portafolio
collection = database.emails

async def get_one_email_id(id):
    email = await collection.find_one({'_id': id})
    return email

async def get_all_emails():
    emails = []
    cursor = collection.find({})
    async for document in cursor:
        emails.append(Email(**document))
    return emails

async def create_email(email):
    new_email = await collection.insert_one(email)
    create_email = await collection.find_one({'_id': new_email.inserted_id})
    return create_email