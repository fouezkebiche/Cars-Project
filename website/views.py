from django.shortcuts import render,redirect
from django.core.mail import send_mail, EmailMessage
from django.conf import settings
from django.http import HttpResponse

from django.http import HttpResponse
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from io import BytesIO

# Create your views here.


def home(request):
    return render(request,'home.html',{})


def contact_us_form(request):
    if request.method == 'POST':
        # Get form data
        form_data = {
            'First Name': request.POST.get('first_name'),
            'Last Name': request.POST.get('last_name'),
            'Email': request.POST.get('Email'),
            'Mobile': request.POST.get('mobile'),
            'Address': request.POST.get('address'),
            'Postcode': request.POST.get('postcode'),
            'Location': request.POST.get('location'),
            'Brand': request.POST.get('brand'),
            'Model': request.POST.get('model'),
            'Vehicle Type': request.POST.get('vehicle_type'),
            'Fuel': request.POST.get('fuel'),
            'Gear Type': request.POST.get('gear_type'),
            'Last MFK': request.POST.get('last_MFK'),
            'Performance': request.POST.get('performance'),
            'Mileage': request.POST.get('mileage'),
            'Initial Registration': request.POST.get('initial_registration'),
            'Color': request.POST.get('color'),
            'Doors': request.POST.get('doors'),
            'Message': request.POST.get('message'),
            'Asking Price': request.POST.get('asking_price'),
            'Displacement': request.POST.get('Displacement'),
        }
        
        # Generate a PDF document in memory
        buffer = BytesIO()
        p = canvas.Canvas(buffer, pagesize=letter)
        y_coordinate = 750  # Starting Y-coordinate

        for field_name, field_value in form_data.items():
            p.drawString(100, y_coordinate, field_name + ':')
            p.drawString(200, y_coordinate, field_value)
            y_coordinate -= 20  # Move the Y-coordinate down for the next field
        
        # Save and close the PDF
        p.save()
        buffer.seek(0)

        # Send the email with the PDF attachment
        subject = 'Contact Form Submission'
        message = 'Please find the attached PDF for the contact form submission.'
        from_email = 'your_email@gmail.com'  # Replace with your Gmail address
        recipient_list = ['kebichefouez@gmail.com']  # Replace with the recipient's email address

        email = EmailMessage(subject, message, from_email, recipient_list)
        email.attach(f'{form_data["First Name"]}_contact_form.pdf', buffer.read(), 'application/pdf')
        email.send()

        return render(request, 'home.html')

    return render(request, 'home.html')

def main(request):
    return render(request,'main.html',{})
