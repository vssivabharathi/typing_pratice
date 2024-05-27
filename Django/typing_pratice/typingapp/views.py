from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.template import loader
from django.contrib.auth.models import User
from django.contrib import messages
from django .contrib.auth import authenticate, login, logout
# Create your views here.

# def index(request):
#     template = loader.get_template('index.html')
#     return HttpResponse (template.render())

def index(request):
    user = request.user  # Get the currently logged-in user
    return render(request, 'index.html', {'user': user})
def easy(request):
    return render(request, 'easy.html')    

def hardmode(request):
    return render(request, 'hardmode.html')   
 
def sigininpage(request):
    return render(request, 'sigininpage.html')    

def signuppage(request):
    if request.method == 'POST':
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        confirm_password = request.POST['confirm_password']

        if password != confirm_password:
            messages.error(request, "Passwords do not match")
            return redirect('register')

        if User.objects.filter(username=username).exists():
            messages.error(request, "Username already taken")
            return redirect('sigininpage')

        if User.objects.filter(email=email).exists():
            messages.error(request, "Email already registered")
            return redirect('sigininpage')

        user = User.objects.create_user(
            username=username,
            password=password,
            email=email,
            first_name=first_name,
            last_name=last_name
        )
        user.save()
        login(request, user)
        return redirect('index')  # Redirect to a home page or any other page
    return render(request, 'signuppage.html')


