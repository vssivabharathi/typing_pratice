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
    return render(request, 'index.html')    

def easy(request):
    return render(request, 'easy.html')    

def hardmode(request):
    return render(request, 'hardmode.html')   
 
def sigininpage(request):
    return render(request, 'sigininpage.html')    

def signuppage(request):
    return render(request, 'signuppage.html') 




