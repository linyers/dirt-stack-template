from inertia import inertia


@inertia("Home/Index")
def index(request):
    return {}


@inertia("Home/About")
def about(request):
    return {}


@inertia("Contact/Index")
def contact(request):
    user = request.user
    if not request.user.is_authenticated:
        user = None
    if not request.method == "POST":
        return {"user": user, "name": ""}

    name = request.POST.get("name", "")
    if name == "":
        return {"user": user, "errors": {"name": "Enter a valid name"}}
    return {"user": user, "name": name}
