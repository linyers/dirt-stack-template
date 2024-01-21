from inertia import inertia
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm
from django.shortcuts import redirect


@inertia("Home/Index")
def index(request):
    return {}


@inertia("Home/About")
def about(request):
    return {}


@login_required(login_url="/login")
@inertia("Contact/Index")
def contact(request):
    user = request.user
    return {"user": user}


@inertia("Auth/Login")
def login_view(request):
    if request.method == "POST":
        form = AuthenticationForm(request, request.POST)
        if not form.is_valid():
            form_errors = form.errors.as_data()
            errors = {k: v[0].message for k, v in form_errors.items()}
            return {"errors": errors}
        username = form.cleaned_data.get("username")
        password = form.cleaned_data.get("password")
        user = authenticate(request, username=username, password=password)
        if not user:
            return {}
        login(request, user)
        return redirect("/contact/")

    if request.user.is_authenticated:
        return redirect("/contact/")
    return {}


def logout_view(request):
    logout(request)
    return redirect("/")
