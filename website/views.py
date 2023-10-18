from django.shortcuts import render,redirect
from django.core.mail import send_mail, EmailMessage
from django.conf import settings
from django.http import HttpResponse

from django.http import HttpResponse
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from io import BytesIO
from mimetypes import guess_type
from PIL import Image
from reportlab.lib.utils import ImageReader
from .models import Demande
from PIL import Image

# Create your views here.


def home(request):
    return render(request,'main.html',{})


def contact_us_form(request):
    if request.method == 'POST':
        form_data = {
<<<<<<< HEAD
=======

>>>>>>> 76a6485f9946fbf6e54b25d41a9c57bd5909ac27
            'first_name': request.POST.get('first_name'),
            'last_name': request.POST.get('last_name'),
            'Email': request.POST.get('Email'),
            'mobile': request.POST.get('mobile'),
            'address': request.POST.get('address'),
            'postcode': request.POST.get('postcode'),
            'location': request.POST.get('location'),
            'brand': request.POST.get('brand'),
            'model': request.POST.get('model'),
            'vehicle_type': request.POST.get('vehicle_type'),
            'fuel': request.POST.get('fuel'),
            'gear_type': request.POST.get('gear_type'),
            'last_MFK': request.POST.get('last_MFK'),
            'performance': request.POST.get('performance'),
            'mileage': request.POST.get('mileage'),
            'initial_registration': request.POST.get('initial_registration'),
            'color': request.POST.get('color'),
            'doors': request.POST.get('doors'),
            'message': request.POST.get('message'),
            'asking_price': request.POST.get('asking_price'),
            'Displacement': request.POST.get('Displacement'),
        }

        image_files = []
        for i in range(1, 5):
            image_field_name = f'image{i}'
            image_file = request.FILES.get(image_field_name)
            if image_file:
                image_files.append((image_field_name, image_file.read()))

        # Create a PDF document with the form data and image attachments

<<<<<<< HEAD
=======
        
>>>>>>> 76a6485f9946fbf6e54b25d41a9c57bd5909ac27
        # Check for None values and create a list of valid field_name, field_value pairs
        valid_fields = [(field_name, field_value) for field_name, field_value in form_data.items() if field_value is not None]
        
        # Generate a PDF document in memory
<<<<<<< HEAD
=======

>>>>>>> 76a6485f9946fbf6e54b25d41a9c57bd5909ac27
        buffer = BytesIO()
        p = canvas.Canvas(buffer, pagesize=letter)
        y_coordinate = 750  # Starting Y-coordinate

        for field_name, field_value in valid_fields:
            p.drawString(100, y_coordinate, field_name + ':')
            p.drawString(200, y_coordinate, field_value)
            y_coordinate -= 20  # Move the Y-coordinate down for the next field

        # Save and close the PDF
        p.save()
        buffer.seek(0)

        # Save the form data to the Demande model
        demande = Demande(**form_data)
        demande.save()

        # Save image files to the corresponding fields in the Demande model
        for i in range(1, 5):
            image_field_name = f'image{i}'
            image_file = request.FILES.get(image_field_name)
            if image_file:
                setattr(demande, image_field_name, image_file)
        demande.save()  # Save the model again after updating the images

        # Send the email with the PDF attachment and image files
        subject = 'Contact Form Submission'
        message = 'Please find the attached PDF and images for the contact form submission.'
        from_email = 'your_email@gmail.com'  # Replace with your Gmail address
        recipient_list = ['kebichefouez@gmail.com']  # Replace with the recipient's email address

        email = EmailMessage(subject, message, from_email, recipient_list)
<<<<<<< HEAD
=======

>>>>>>> 76a6485f9946fbf6e54b25d41a9c57bd5909ac27
        email.attach(f'{form_data["first_name"]}_contact_form.pdf', buffer.read(), 'application/pdf')

        # Attach image files with content type based on file format and resize them
        for image_field_name, image_content in image_files:
            content_type = 'image/png' if image_field_name.endswith('.png') else 'image/jpeg'
            
            # Resize the image to a reasonable size (e.g., 800x600)
            img = Image.open(BytesIO(image_content))
            img.thumbnail((800, 600))
            resized_image_content = BytesIO()
            img.save(resized_image_content, format='JPEG' if content_type == 'image/jpeg' else 'PNG')
            
            email.attach(image_field_name, resized_image_content.getvalue(), content_type)

<<<<<<< HEAD
=======

        email.attach(f'{valid_fields[0][1]}_contact_form.pdf', buffer.read(), 'application/pdf')

>>>>>>> 76a6485f9946fbf6e54b25d41a9c57bd5909ac27
        email.send()

        return redirect('home')

    return render(request, 'home.html')


def main(request):
    return render(request,'main.html',{})
