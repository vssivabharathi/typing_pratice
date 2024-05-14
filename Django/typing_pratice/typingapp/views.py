from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.template import loader
from django.contrib.auth.models import User
from django.contrib import messages
from django .contrib.auth import authenticate, login, logout
# Create your views here.

def index(request):
    template = loader.get_template('index.html')
    return HttpResponse (template.render())
        
def sigininpage(request):
    if request.method =='POST':
        username = request.POST['username']
        pass1 = request.POST['pass1']

        user = authenticate(username=username,password=pass1)

        if user is not None:
            login(request,user)
            fname =user.first_name
            return render(request, "authenticate/index.html", {'fname': fname})

        else:
            messages.error(request,"Bad Credentials!")
            return redirect('home')



    template = loader.get_template('sigininpage.html')
    return HttpResponse (template.render())


def signuppage(request):

    if request.method =="POST":
        username =request.POST['username']
        fname = request.POST['fname']
        lname = request.POST['lname']
        email =request.POST['email']
        pass1 = request.POST['pass1']
        pass2 = request.POST['pass2']
        
       

        myuser = User.object.create_user(username,email,pass1,pass2)
        myuser.first_name =fname
        myuser.first_name =lname

        myuser.save()

        messages.success(request, "Your account has been successfully created.")
        
        return redirect('sigininpage.html')
    
    template = loader.get_template('signuppage.html')
    return HttpResponse (template.render())
