from fastapi import FastAPI
from database import get_all_emails
from models import Email
app = FastAPI()

@app.get('/')
def welcome():
    return {'mesage': 'welcome to the my FastAPI '}

@app.get('/api/emails')
async def get_emails():
    emails = await get_all_emails()
    return emails

@app.get('/api/emails/{id}')
async def get_email():
    return 'get email'

@app.post('/api/emails')
async def create_email(email: Email):
    print(email)
    return 'create email'